import React from 'react'
import './App.css'
import PageLayout from 'container/layout/PageLayout'

function App() {
  const getData = async () => {
    try {
      await window?.ethereum?.enable()
      console.log('MetaMask 연결 완료')
    } catch (error) {
      console.log('MetaMask 연결 실패:', error)
    }
  }
  console.log(getData)
  return (
    <div>
      <PageLayout />
    </div>
  )
}

export default App
