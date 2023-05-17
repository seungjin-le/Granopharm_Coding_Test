import React, {Suspense} from 'react'
import 'lodash'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import PageLayout from 'container/layout/PageLayout'
import AllTab from 'pages/home/AllTab'
import SinglesTab from 'pages/home/SinglesTab'
import CollectionsTab from 'pages/home/CollectionsTab'

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path={'/all'} element={<AllTab />} />
            <Route path='/singles' element={<SinglesTab />} />
            <Route path='/collections' element={<CollectionsTab />} />
            <Route path='/*' element={<Navigate to='/all' replace />} />
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
