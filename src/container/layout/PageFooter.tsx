import {Layout, Space, Spin} from 'antd'
import styled from 'styled-components'
import {memo, useEffect} from 'react'
import {useGetInfiniteCards} from '../../hooks/queries/CardQuery'
import {useDispatch, useSelector} from 'react-redux'
import {Dispatch} from 'redux'
import {addCards} from '../../store/redux/cards/AssetsSlice'

/**
 *
 * 페이지 하단 푸터 컴포넌트
 *
 * @param {InfiniteScroll} infiniteScroll - 무한 스크롤 콜백 함수
 * @returns {JSX.Element} - 페이지 하단 푸터 컴포넌트
 *
 */

const PageFooter = () => {
  const currentTab = useSelector((state: any) => state.currentTab.value)
  const {fetchNextPage, isFetching, isFetchingNextPage} = useGetInfiniteCards()
  const dispatch: Dispatch = useDispatch()
  console.log(currentTab)
  // 스크롤 이벤트 핸들러
  const handleScroll = async () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight
    if (clientHeight + scrollTop >= scrollHeight) {
      const {data} = await fetchNextPage()
      if (isFetching) dispatch(addCards(data?.pages.flat()))
    }
  }

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)
    return () => {
      // 컴포넌트 언마운트시 스크롤 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CustomAntFooter>
      {isFetchingNextPage && (
        <Space size='middle'>
          <Spin size='large' />
        </Space>
      )}
    </CustomAntFooter>
  )
}

export default memo(PageFooter)

const CustomAntFooter = styled(Layout)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 76px;
  padding: 18px 28px 2px 36px;
  background-color: #fff;
`
