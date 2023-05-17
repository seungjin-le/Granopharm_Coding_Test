import PageContent from 'container/layout/PageContent'
import {useSelector} from 'react-redux'
import {RootState} from 'store/store'

const SinglesTab = () => {
  const assets = useSelector((state: RootState) => state.assets)

  return <PageContent assets={assets} />
}

export default SinglesTab