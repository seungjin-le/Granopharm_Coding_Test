import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import 'antd/dist/antd.min.js.map'
import {ExternalProvider, JsonRpcFetchFunc, Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'
import GlobalStyleStyled from 'styles/GlobalStyleStyled'
import {Provider} from 'react-redux'
import {store} from 'store/store'
import {QueryClient, QueryClientProvider} from 'react-query'

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  return new Web3Provider(provider, 'any')
}
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyleStyled />
      <Provider store={store}>
        <App />
      </Provider>
    </Web3ReactProvider>
  </QueryClientProvider>,
)
