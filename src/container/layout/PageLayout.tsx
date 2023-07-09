import PageHeader from 'container/layout/PageHeader'
import PageFooter from 'container/layout/PageFooter'
import PageTabs from 'container/layout/PageTabs'
import styled from 'styled-components'
import {Layout, Space} from 'antd'
import React, {memo} from 'react'
import {PageLayoutProps, PageTab} from 'lodash'
import {useNavigate} from 'react-router-dom'
//import {useDispatch} from 'react-redux'
// import {resetCards} from 'store/redux/cards/AssetsSlice'
// import {resetCurrentPage} from 'store/redux/pages/CurrentPage'

/**
 * 페이지 레이아웃 컴포넌트
 * @param {ReactNode} children - 자식 컴포넌트
 * @returns {JSX.Element} - 페이지 레이아웃 컴포넌트
 */

const PageLayout = ({children}: PageLayoutProps) => {
  const pageTabTest: PageTab[] = [
    {key: 'all', count: 2899, url: '/tabs/all'},
    {key: 'collections', count: 2829, url: '/tabs/collections'},
    {key: 'singles', count: 1999, url: '/tabs/singles'},
  ]
  const navigate = useNavigate()

  // 텝 이동시 tabKey를 이용한 API요청 함수
  const handleOnChangeTap = (tabKey: string) => {
    // URL 이동
    navigate({
      pathname: tabKey,
    })

    // 카드 리스트 초기화
    // dispatch(resetCards())

    // 현재 페이지 초기화
    // dispatch(resetCurrentPage())
  }

  return (
    <CustomAntPageLayout direction='vertical' size={[0, 48]}>
      <CustomAntLayoutBox>
        <PageHeader title={'Renaissance Lab.'} />
        <PageTabs handleOnChangeTap={handleOnChangeTap} pageTabs={pageTabTest} />
        {children}
        <PageFooter />
      </CustomAntLayoutBox>
    </CustomAntPageLayout>
  )
}

export default memo(PageLayout)

// 브라우저 전체 영역
const CustomAntPageLayout = styled(Space)`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`

// 컴포넌트 출력 페이지
const CustomAntLayoutBox = styled(Layout)`
  margin: auto;
  max-width: 1440px;
  background: #fff;
`
