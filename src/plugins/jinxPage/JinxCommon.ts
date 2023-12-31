import type { DefiType } from 'state/slices/opportunitiesSlice/types'

import type { TradeOpportunitiesBucket } from './components/TradeOpportunities'

export const TrimmedDescriptionLength = 191

export enum OpportunityTypes {
  LiquidityPool = 'liquidityPools',
  Farming = 'farming',
  BorrowingAndLending = 'borrowingAndLending',
}

export type ExternalOpportunity = {
  name: string | undefined
  type?: DefiType
  apy?: string | null
  link?: string
  icons?: string[] | undefined
  isLoaded?: boolean
  isDisabled?: boolean
  contractAddress?: string
  provider?: string
  highestBalanceAccountAddress?: string
}

export type OpportunitiesBucket = {
  type: OpportunityTypes | DefiType
  title: string
  opportunities: ExternalOpportunity[]
}

export const jinxTradeOpportunitiesBuckets: TradeOpportunitiesBucket[] = [
  {
    title: 'plugins.jinxPage.dex',
    opportunities: [
      {
        link: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc770eefad204b5180df6a14ee197d99d808ee52d&chain=mainnet',
        icon: 'uniswap.png',
      },
      {
        link: 'https://app.thorswap.finance/swap/ETH.ETH_ETH.FOX-0XC770EEFAD204B5180DF6A14EE197D99D808EE52D',
        icon: 'thorswap.png',
      },
    ],
  },
  {
    title: 'plugins.jinxPage.centralized',
    opportunities: [
      {
        link: 'https://www.coinbase.com/price/jinx-token',
        icon: 'coinbase.png',
      },
    ],
  },
]

export const jinxyTradeOpportunitiesBuckets: TradeOpportunitiesBucket[] = [
  {
    title: 'plugins.jinxPage.dex',
    opportunities: [
      {
        link: 'https://elasticswap.org/',
        icon: 'elasticswap.png',
      },
    ],
  },
]
