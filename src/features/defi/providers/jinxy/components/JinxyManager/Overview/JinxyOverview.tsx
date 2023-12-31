import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Center } from '@chakra-ui/react'
import type { AccountId } from '@shapeshiftoss/caip'
import { ASSET_NAMESPACE, fromAccountId, toAssetId } from '@shapeshiftoss/caip'
import dayjs from 'dayjs'
import { DefiModalContent } from 'features/defi/components/DefiModal/DefiModalContent'
import { Overview } from 'features/defi/components/Overview/Overview'
import type {
  DefiParams,
  DefiQueryParams,
} from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { DefiAction } from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { useJinxyQuery } from 'features/defi/providers/jinxy/components/JinxyManager/useJinxyQuery'
import qs from 'qs'
import { useEffect, useMemo, useState } from 'react'
import { FaGift } from 'react-icons/fa'
import { useTranslate } from 'react-polyglot'
import type { AccountDropdownProps } from 'components/AccountDropdown/AccountDropdown'
import { CircularProgress } from 'components/CircularProgress/CircularProgress'
import { useBrowserRouter } from 'hooks/useBrowserRouter/useBrowserRouter'
import { bn, bnOrZero } from 'lib/bignumber/bignumber'
import { getJinxyApi } from 'state/apis/jinxy/jinxyApiSingleton'
import { useGetAssetDescriptionQuery } from 'state/slices/assetsSlice/assetsSlice'
import type { StakingId } from 'state/slices/opportunitiesSlice/types'
import {
  makeDefiProviderDisplayName,
  serializeUserStakingId,
  supportsUndelegations,
} from 'state/slices/opportunitiesSlice/utils'
import {
  selectEarnUserStakingOpportunityByUserStakingId,
  selectFirstAccountIdByChainId,
  selectHighestBalanceAccountIdByStakingId,
  selectMarketDataById,
  selectSelectedLocale,
} from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { JinxyEmpty } from './JinxyEmpty'
import { WithdrawCard } from './WithdrawCard'

type JinxyOverviewProps = {
  accountId: AccountId | undefined
  onAccountIdChange: AccountDropdownProps['onChange']
}

export const JinxyOverview: React.FC<JinxyOverviewProps> = ({
  accountId,
  onAccountIdChange: handleAccountIdChange,
}) => {
  const { query, history, location } = useBrowserRouter<DefiQueryParams, DefiParams>()
  const { chainId } = query
  const {
    contractAddress,
    stakingAsset,
    underlyingAsset: rewardAsset,
    stakingAssetId,
  } = useJinxyQuery()
  const jinxyApi = getJinxyApi()
  const [canClaim, setCanClaim] = useState<boolean>(false)
  // The highest level AssetId/OpportunityId, in this case of the single FOXy contract
  const assetId = toAssetId({
    chainId,
    assetNamespace: ASSET_NAMESPACE.erc20,
    assetReference: contractAddress,
  })

  const highestBalanceAccountIdFilter = useMemo(
    () => ({ stakingId: assetId as StakingId }),
    [assetId],
  )
  const highestBalanceAccountId = useAppSelector(state =>
    selectHighestBalanceAccountIdByStakingId(state, highestBalanceAccountIdFilter),
  )

  const translate = useTranslate()

  const defaultAccountId = useAppSelector(state => selectFirstAccountIdByChainId(state, chainId))
  const maybeAccountId = accountId ?? highestBalanceAccountId ?? defaultAccountId

  useEffect(() => {
    if (!maybeAccountId) return
    handleAccountIdChange(maybeAccountId)
  }, [handleAccountIdChange, maybeAccountId])

  useEffect(() => {
    if (!maybeAccountId) return
    ;(async () => {
      const canClaimWithdraw = await jinxyApi.canClaimWithdraw({
        contractAddress,
        userAddress: fromAccountId(maybeAccountId).account,
      })
      setCanClaim(canClaimWithdraw)
    })()
  }, [contractAddress, jinxyApi, maybeAccountId])

  const opportunityDataFilter = useMemo(() => {
    const userStakingAccountId = accountId ?? highestBalanceAccountId ?? ''
    if (!userStakingAccountId) return undefined
    return {
      userStakingId: serializeUserStakingId(userStakingAccountId, assetId as StakingId),
    }
  }, [accountId, assetId, highestBalanceAccountId])

  const jinxyEarnOpportunityData = useAppSelector(state =>
    opportunityDataFilter
      ? selectEarnUserStakingOpportunityByUserStakingId(state, opportunityDataFilter)
      : undefined,
  )

  const undelegations = useMemo(
    () =>
      jinxyEarnOpportunityData && supportsUndelegations(jinxyEarnOpportunityData)
        ? jinxyEarnOpportunityData.undelegations
        : undefined,
    [jinxyEarnOpportunityData],
  )

  const marketData = useAppSelector(state => selectMarketDataById(state, stakingAssetId))
  const cryptoAmountAvailablePrecision = bnOrZero(
    jinxyEarnOpportunityData?.stakedAmountCryptoBaseUnit,
  ).div(bn(10).pow(stakingAsset?.precision ?? 0))
  const fiatAmountAvailable = bnOrZero(cryptoAmountAvailablePrecision).times(marketData.price)

  const hasPendingUndelegation = Boolean(
    undelegations &&
      undelegations.some(undelegation =>
        dayjs().isAfter(dayjs(undelegation.completionTime).unix()),
      ),
  )

  const hasAvailableUndelegation = Boolean(
    undelegations &&
      undelegations.some(undelegation =>
        dayjs().isBefore(dayjs(undelegation.completionTime).unix()),
      ),
  )

  const claimDisabled = !canClaim && !hasAvailableUndelegation

  const selectedLocale = useAppSelector(selectSelectedLocale)
  const descriptionQuery = useGetAssetDescriptionQuery({ assetId: stakingAssetId, selectedLocale })

  if (!jinxyEarnOpportunityData) {
    return (
      <DefiModalContent>
        <Center minW='350px' minH='350px'>
          <CircularProgress isIndeterminate />
        </Center>
      </DefiModalContent>
    )
  }

  if (
    bnOrZero(jinxyEarnOpportunityData?.stakedAmountCryptoBaseUnit).eq(0) &&
    !canClaim &&
    !hasPendingUndelegation &&
    !hasAvailableUndelegation
  ) {
    return (
      <JinxyEmpty
        assets={[stakingAsset, rewardAsset]}
        apy={jinxyEarnOpportunityData?.apy ?? ''}
        onClick={() =>
          history.push({
            pathname: location.pathname,
            search: qs.stringify({
              ...query,
              modal: DefiAction.Deposit,
            }),
          })
        }
      />
    )
  }

  return (
    <Overview
      accountId={accountId}
      onAccountIdChange={handleAccountIdChange}
      asset={rewardAsset}
      name='FOX Yieldy'
      opportunityFiatBalance={fiatAmountAvailable.toFixed(2)}
      underlyingAssetsCryptoPrecision={[
        {
          ...stakingAsset,
          cryptoBalancePrecision: cryptoAmountAvailablePrecision.toFixed(4),
          allocationPercentage: '1',
        },
      ]}
      provider={makeDefiProviderDisplayName({
        provider: jinxyEarnOpportunityData.provider,
        assetName: stakingAsset.name,
      })}
      menu={[
        {
          label: 'common.deposit',
          icon: <ArrowUpIcon />,
          action: DefiAction.Deposit,
        },
        {
          label: 'common.withdraw',
          icon: <ArrowDownIcon />,
          action: DefiAction.Withdraw,
        },
        {
          label: 'common.claim',
          icon: <FaGift />,
          action: DefiAction.Claim,
          variant: 'ghost-filled',
          colorScheme: 'green',
          isDisabled: claimDisabled,
          toolTip: translate('defi.modals.overview.noWithdrawals'),
        },
      ]}
      description={{
        description: stakingAsset.description,
        isLoaded: !descriptionQuery.isLoading,
        isTrustedDescription: stakingAsset.isTrustedDescription,
      }}
      tvl={bnOrZero(jinxyEarnOpportunityData?.tvl).toFixed(2)}
      apy={jinxyEarnOpportunityData?.apy?.toString()}
    >
      <WithdrawCard
        asset={stakingAsset}
        undelegation={undelegations?.[0]}
        canClaimWithdraw={canClaim}
      />
    </Overview>
  )
}
