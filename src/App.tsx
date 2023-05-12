import React from 'react'
import './App.css'
import PageLayout from 'container/layout/PageLayout'
import 'lodash'
import {Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider, 'any')
}

function App() {
  const getData = async () => {
    try {
      await (window as any)?.ethereum?.enable()
      console.log('MetaMask 연결 완료')
    } catch (error) {
      console.log('MetaMask 연결 실패:', error)
    }
  }

  console.log(getData)
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <PageLayout />
    </Web3ReactProvider>
  )
}

export default App
