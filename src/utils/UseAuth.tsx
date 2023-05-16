import {useState, useEffect} from 'react'
import {useWeb3React} from '@web3-react/core'
import {AbstractConnector} from '@web3-react/abstract-connector'
import Web3 from 'web3'
import {WalletState} from 'lodash'

/**
 * 웹3 연결 및 로그인 관련 기능을 제공하는 커스텀 훅.
 * @returns {object} 웹3 연결 및 로그인 관련 함수와 상태를 담은 객체
 */
export function useAuth() {
  const {active, activate, connector}: any = useWeb3React<AbstractConnector>()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  const {ethereum} = window
  const web3 = new Web3(ethereum)
  const [wallet, setWallet] = useState<WalletState>({id: '', account: '', weiBalance: '', ethBalance: '', invoker: ''})
  // 현재 사용 중인 브라우저확인.
  const userAgent = navigator.userAgent.toLowerCase()

  /**
   * 로컬 스토리지에 저장된 계정 정보를 확인하여 자동으로 로그인을 수행.
   * @param {string} storedAccount - 로컬 스토리지에 저장된 계정 정보
   */
  useEffect(() => {
    const storedAccount = localStorage.getItem('account')
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
        setIsLoggedIn(true)
      })
    }
  }, [activate, connector, active])

  // 월렛에 연결하는 함수입니다.
  const connection = async () => {
    let browsers: string[] = ['chrome', 'firefox', 'safari', 'edge', 'opera', 'brave', 'vivaldi']

    if (!browsers.map((browser: string) => userAgent.includes(browser))) {
      if (!ethereum) return alert('메타마스크 플러그인을 설치해 주시기 바랍니다.')
    }
    //
    if (!ethereum)
      return alert(
        '메타 마스크 플러그인을 지원하는 브라우저에서 로그인해 주시기 바랍니다. ex) Google Chrome, Mozilla Firefox, Microsoft Edge, Brave Browser, Opera',
      )

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

  // 월렛 연결을 해제하는 함수입니다.
  const disconnect = async () => {
    try {
      setIsConnecting(true)
      localStorage.removeItem('account')
      setIsConnecting(false)

      window.location.reload()
    } catch (error) {
      console.error('Failed to open MetaMask disconnect window')
    }
  }

  return {
    isLoggedIn, // 로그인 상태 여부
    connection, // 월렛 연결 함수
    disconnect, // 월렛 연결 해제 함수
    wallet, // 월렛 정보
    active, // 웹3 연결 상태
    isConnecting, // 연결 중 여부
  }
}
