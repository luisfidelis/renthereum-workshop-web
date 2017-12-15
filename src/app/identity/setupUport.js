import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('RenthereumWorkshop ', {
    clientId: '2oygBbMddiQ2jiN1DbdF4rKFcdVeqQDwo1A',
    network: 'rinkeby or ropsten or kovan',
    signer: SimpleSigner(process.env.UPORT_KEY)
  })

const web3 = uport.getWeb3()
export { web3, uport }
