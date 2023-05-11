import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const getData = async () => {
    try {
      await window?.ethereum?.enable()
      console.log('MetaMask 연결 완료')
    } catch (error) {
      console.log('MetaMask 연결 실패:', error)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.asdf
        </p>
        <button onClick={() => getData()}>클릭 </button>
      </header>
    </div>
  )
}

export default App
