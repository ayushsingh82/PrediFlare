import { createPublicClient, createWalletClient , http, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import {  flareTestnet} from 'viem/chains'

// Custom Flare Testnet configuration
export const flareTestnetTry = {
  id: 114,
  name: 'Flare Testnet',
  network: 'flare-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'FLR',
    symbol: 'FLR',
  },
  rpcUrls: {
    default: {
      http: ['https://coston2-api.flare.network/ext/C/rpc'],
      
    },
    public: {
      http: ['https://coston2-api.flare.network/ext/C/rpc'],
    },
  },
  blockExplorers: {
    default: { name: 'FlareScan', url: 'https://coston2-explorer.flare.network' },
  },
  testnet: true,
}

// Public client
export const publicClient = createPublicClient({
  chain: flareTestnet,
  transport: http()
})

// Wallet client
export const walletClient = createWalletClient({
  chain: flareTestnet,
  transport: custom(window.ethereum)
})

// Get Wallet Client function
export const getWalletClient = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return createWalletClient({
      chain: flareTestnet,
      transport: custom(window.ethereum),
      account: window.ethereum.selectedAddress
    })
  }
  return null
}

// Chain configuration for wallet connection
export const chainConfig = {
  chainId: '0x72', // 545 in hex
  chainName: 'Flare Testnet',
  nativeCurrency: {
    name: 'FLR',
    symbol: 'FLR',
    decimals: 18
  },
  rpcUrls: ['https://coston2-api.flare.network/ext/C/rpc'],
  blockExplorerUrls: ['https://coston2-explorer.flare.network']
}

// JSON-RPC Account
// export const [account] = await walletClient.getAddresses()

// Local Account
export const account = privateKeyToAccount('0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e')