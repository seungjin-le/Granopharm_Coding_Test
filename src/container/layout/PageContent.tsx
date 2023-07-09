import React, {memo} from 'react'
import styled from 'styled-components'
import {Layout} from 'antd'
import ContentCardList from 'container/contents/contentCardList'

/**
 * 페이지 컨텐츠 컴포넌트
 *
 * @returns {JSX.Element} - 페이지 컨텐츠 컴포넌트
 */

const PageContent = () => {
  return (
    <CustomAntContent>
      <ContentCardList />
    </CustomAntContent>
  )
}

export default memo(PageContent)

const CustomAntContent = styled(Layout)`
  padding: 18px 28px 2px 36px;
  background: #ffffff;
  @media (max-width: 800px) {
    padding: 0;
  }
`
