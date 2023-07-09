import PageContent from 'container/layout/PageContent'
import {useGetInfiniteCards} from '../../hooks/queries/CardQuery'
import {memo, useEffect} from 'react'
import {addCards} from '../../store/redux/cards/AssetsSlice'
import {useDispatch} from 'react-redux'
import {Dispatch} from 'redux'

const AllTab = () => {
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

export default memo(AllTab)
