import React, {Suspense} from 'react'
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
            <Route path={'/all'} element={<Home />} />
            <Route path={'/collections'} element={<Home />} />
            <Route path={'/singles'} element={<Home />} />
            {/*
              <Route path={'/404'} element={<Page404 />} />
              <Route path={'/500'} element={<Page500 />} />
            */}
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
