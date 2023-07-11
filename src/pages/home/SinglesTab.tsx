import PageContent from 'container/layout/PageContent'
import {useDispatch} from 'react-redux'
import {useGetInfiniteCards} from '../../hooks/queries/CardQuery'
import {Dispatch} from 'redux'
import {useEffect} from 'react'
import {addCards} from '../../store/redux/cards/AssetsSlice'

/**
 *
 * "All" 탭과 동일한 로직으로 동작합니다.
 *
 * SinglesTab 컴포넌트는 IndexPage의 "Singles" 탭에 대한 콘텐츠를 렌더링.
 * PageLayout에서 URL PathName으로 요청한값을 Redux Store에 저장후
 * useSelector 훅을 사용하여 Redux 스토어에서 자산 데이터를 가져옵니다.
 * 가져온 자산 데이터는 PageContent 컴포넌트로 전달하여 렌더링.
 */

const SinglesTab = () => {
  const {data, status}: any | undefined = useGetInfiniteCards()
  const dispatch: Dispatch = useDispatch()
  useEffect((): void => {
    if (status === 'success' && data) {
      const flattenedPages: any = data.pages.flat()
      dispatch(addCards(flattenedPages))
    }
  }, [data, status])

  return <PageContent />
}

export default SinglesTab
