import { jinxAssetId, jinxyAssetId } from '@shapeshiftoss/caip'
import { matchPath } from 'react-router'

const FOX_PAGE_DEFAULT_ASSET = 'jinx'

export const getJinxPageRouteAssetId = (pathname: string) => {
  const jinxPageAssetIdPathMatch = matchPath<{ jinxAsset?: 'jinx' | 'jinxy' }>(pathname, {
    path: '/jinx/:jinxAsset?',
  })

  const jinxAsset = jinxPageAssetIdPathMatch?.params?.jinxAsset ?? FOX_PAGE_DEFAULT_ASSET

  return jinxAsset === 'jinx' ? jinxAssetId : jinxyAssetId
}
