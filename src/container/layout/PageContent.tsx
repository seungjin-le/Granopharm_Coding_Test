import React from 'react'
import styled from 'styled-components'
import {Layout} from 'antd'
import ContentCardList from 'container/contents/contentCardList'
import {Assets} from 'lodash'

/**
 * 페이지 컨텐츠 컴포넌트
 * @param {Assets} assets - 에셋 배열
 * @returns {JSX.Element} - 페이지 컨텐츠 컴포넌트
 */

const PageContent = ({assets}: Assets) => {
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
  @media (max-width: 800px) {
    padding: 0;
  }
`
