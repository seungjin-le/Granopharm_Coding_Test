import {useState, useEffect} from 'react'
import {useWeb3React} from '@web3-react/core'
import {AbstractConnector} from '@web3-react/abstract-connector'
import Web3 from 'web3'
import {WalletState} from 'lodash'

export function useAuth() {
  const {active, activate, connector}: any = useWeb3React<AbstractConnector>()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  const {ethereum} = window
  const web3 = new Web3(ethereum)
  const [wallet, setWallet] = useState<WalletState>({id: '', account: '', weiBalance: '', ethBalance: '', invoker: ''})

  useEffect(() => {
    const storedAccount = localStorage.getItem('account')
    console.log(storedAccount)
    if (storedAccount && !active) {
      activate(connector).then(async () => {
        const parsedAccount = JSON.parse(storedAccount)
        const balanceInWei = await web3.eth.getBalance(parsedAccount.caveats[0].value[0])
        const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether')
        setWallet({
          id: parsedAccount.id,
          account: parsedAccount.caveats[0].value[0],
          weiBalance: balanceInWei,
          ethBalance: balanceInEther,
          invoker: parsedAccount.invoker,
        })
        setIsLoggedIn(true) // 로그인 상태를 true로 설정
      })
    }
  }, [activate, connector, active])

  const connection = async () => {
    setIsConnecting(true)
    try {
      const accounts = await ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{eth_accounts: {}}],
      })
      const userAccount = accounts[0]
      const accountAddress = userAccount.caveats[0].value[0]
      const balanceInWei = await web3.eth.getBalance(accountAddress)
      const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether')

      setWallet({
        id: userAccount.id,
        account: accountAddress,
        weiBalance: balanceInWei,
        ethBalance: balanceInEther,
        invoker: userAccount.invoker,
      })
      if (userAccount) {
        localStorage.setItem('account', JSON.stringify(userAccount))
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error('Failed to connect wallet')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = async () => {
    try {
      localStorage.removeItem('account')
      setIsLoggedIn(false)
    } catch (error) {
      console.error('Failed to open MetaMask disconnect window')
    }
  }

  return {
    isLoggedIn,
    connection,
    disconnect,
    wallet,
    active,
    isConnecting,
  }
}
