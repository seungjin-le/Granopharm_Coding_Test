import PageHeader from 'container/layout/PageHeader'
import PageContent from 'container/layout/PageContent'
import PageFooter from 'container/layout/PageFooter'
import './PageLayout.scss'
import PageTabs from 'container/layout/PageTabs'
import styled from 'styled-components'
import {Layout, Space} from 'antd'

const PageLayout = () => {
  return (
    <CustomAntPageLayout direction='vertical' size={[0, 48]}>
      <CustomAntLayoutBox>
        <PageHeader />
        <PageTabs />
        <PageContent />
        <PageFooter />
      </CustomAntLayoutBox>
    </CustomAntPageLayout>
  )
}

export default PageLayout

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
`
