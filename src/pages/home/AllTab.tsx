import PageContent from 'container/layout/PageContent'
import {useGetInfiniteCards} from '../../hooks/queries/CardQuery'
import {memo, useEffect} from 'react'
import {addCards} from '../../store/redux/cards/AssetsSlice'
import {useDispatch} from 'react-redux'
import {Dispatch} from 'redux'
import {useParams} from 'react-router-dom'

/**
 *
 * AllTab 컴포넌트는 IndexPage의 "All" 탭에 대한 콘텐츠를 렌더링.
 * PageLayout에서 URL PathName으로 요청한값을 Redux Store에 저장후
 * useSelector 훅을 사용하여 Redux 스토어에서 자산 데이터를 가져옵니다.
 * 가져온 자산 데이터는 PageContent 컴포넌트로 전달하여 렌더링.
 */

const AllTab = ({match}: any) => {
  const {data, status}: any | undefined = useGetInfiniteCards()
  const dispatch: Dispatch = useDispatch()
  let {params} = useParams()
  console.log(match, params)
  useEffect(() => {
    if (status === 'success' && data) {
      const flattenedPages = data.pages.flat()

      dispatch(addCards(flattenedPages))
    }
  }, [status])

  return <PageContent />
}

export default memo(AllTab)
