import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.min.js.map'
import {ExternalProvider, JsonRpcFetchFunc, Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'
import GlobalStyleStyled from 'styles/GlobalStyleStyled'

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  return new Web3Provider(provider, 'any')
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyleStyled />
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
