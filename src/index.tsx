import React from 'react'
import {Root, createRoot} from 'react-dom/client'
import App from 'App'
import 'antd/dist/antd.min.js.map'
import {ExternalProvider, JsonRpcFetchFunc, Web3Provider} from '@ethersproject/providers'
import {Web3ReactProvider} from '@web3-react/core'
import GlobalStyleStyled from 'styles/GlobalStyleStyled'
import {Provider} from 'react-redux'
import {store} from 'store/store'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from 'react-router-dom'

const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc): Web3Provider => {
  return new Web3Provider(provider, 'any')
}
const queryClient: QueryClient = new QueryClient()

const root: Root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <GlobalStyleStyled />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Web3ReactProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
)
