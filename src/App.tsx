import React, {Suspense} from 'react'
import './App.css'
import 'lodash'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PageLayout from 'container/layout/PageLayout'
import Home from 'pages/home/Home'

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path={'/'} element={<Home />} />
            {/*<Route path={'*'} element={<Home />} />*/}
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
