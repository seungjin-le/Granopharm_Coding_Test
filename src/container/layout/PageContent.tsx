import React from 'react'
import styled from 'styled-components'
import {Layout} from 'antd'
import ContentCardList from 'components/list/contents/contentCardList'

const PageContent = ({assets}: any) => {
  return (
    <CustomAntContent>
      <ContentCardList assets={assets} />
    </CustomAntContent>
  )
}

export default PageContent

const CustomAntContent = styled(Layout)`
  padding: 18px 28px 2px 36px;
  background: #ffffff;
`
