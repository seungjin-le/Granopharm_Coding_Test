import React, {FC, Suspense} from 'react'
import 'lodash'
import {Route, Routes} from 'react-router-dom'
import PageLayout from 'container/layout/PageLayout'
import AllTab from 'pages/home/AllTab'
import SinglesTab from 'pages/home/SinglesTab'
import CollectionsTab from 'pages/home/CollectionsTab'

const App: FC = () => {
  return (
    <Suspense>
      <PageLayout>
        <Routes>
          <Route path={'/'} element={<div />} />
          <Route path={'/tabs/:all'} element={<AllTab />} />
          <Route path={'/tabs/:singles'} element={<SinglesTab />} />
          <Route path={'/tabs/:collections'} element={<CollectionsTab />} />

          {/*
          <Route path='/*' element={<Navigate to='/all' replace />} />
              <Route path={'/404'} element={<Page404 />} />
              <Route path={'/500'} element={<Page500 />} />
            */}
        </Routes>
      </PageLayout>
    </Suspense>
  )
}

export default App
