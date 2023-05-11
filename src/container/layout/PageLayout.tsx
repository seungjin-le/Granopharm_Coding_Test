import PageHeader from 'container/layout/PageHeader'
import PageContent from 'container/layout/PageContent'
import PageFooter from 'container/layout/PageFooter'
import './PageLayout.scss'
import Container from '@mui/material/Container'
import PageTabs from 'container/layout/PageTabs'

const PageLayout = () => {
  return (
    <>
      <Container maxWidth={false} className='pageHeader'>
        <PageHeader />
      </Container>
      <Container className='pageContent'>
        <PageContent />
      </Container>
      <Container className='pageTabs'>
        <PageTabs />
      </Container>
      <Container className='pageFooter'>
        <PageFooter />
      </Container>
    </>
  )
}

export default PageLayout
