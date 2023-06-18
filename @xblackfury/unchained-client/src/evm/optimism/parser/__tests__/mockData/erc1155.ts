import type { Tx } from '../../../index'
import { mempoolMock } from './mempoolMock'

const erc1155: Tx = {
  txid: '0x277a165144dc657906960131c7bf39e91a82d5a87b40c23fb4166ceddebb2fa9',
  blockHash: '0xa88d4baf11463efaaf1ec1691a9e27e47f5c0ec2fbe949a30482cf897bbfcae7',
  blockHeight: 97220666,
  timestamp: 1683713576,
  status: 1,
  from: '0x7467bE2dC905d2aEfE2068F3bc249F388C2b3456',
  to: '0x2f05e799C61b600c65238a9DF060cABA63Db8E78',
  confirmations: 72220,
  value: '0',
  fee: '382286869498280',
  gasLimit: '62495',
  gasUsed: '52014',
  gasPrice: '1000000',
  inputData:
    '0xf242432a0000000000000000000000007467be2dc905d2aefe2068f3bc249f388c2b3456000000000000000000000000da3605d79bc9e6ddef9bc8166c922cf7fd7c01a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000',
  tokenTransfers: [
    {
      contract: '0x2f05e799C61b600c65238a9DF060cABA63Db8E78',
      decimals: 18,
      name: '',
      symbol: '',
      type: 'ERC1155',
      from: '0x7467bE2dC905d2aEfE2068F3bc249F388C2b3456',
      to: '0xDa3605D79BC9e6dDef9bC8166C922cf7fd7C01a0',
      value: '1',
      id: '1',
    },
  ],
  internalTxs: [],
}

export default {
  tx: erc1155,
  txMempool: mempoolMock(erc1155),
}
