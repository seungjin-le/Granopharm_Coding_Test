import {Layout, Space, Spin} from 'antd'
import styled from 'styled-components'
import {memo, useEffect, useState} from 'react'
import {InfiniteScroll} from 'lodash'

/**
 *
 * 페이지 하단 푸터 컴포넌트
 *
 * @param {InfiniteScroll} infiniteScroll - 무한 스크롤 콜백 함수
 * @returns {JSX.Element} - 페이지 하단 푸터 컴포넌트
 *
 */

const PageFooter = ({infiniteScroll}: InfiniteScroll) => {
  const [isBottom, setIsBottom] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight

    setIsBottom(scrollTop + clientHeight >= scrollHeight)
  }

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll)
    return () => {
      // 컴포넌트 언마운트시 스크롤 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isBottom) {
      setIsLoading(true)
      // 스크롤이 맨 아래로 도달했을 때 2초 후 추가 데이터 요청
      setTimeout(() => {
        infiniteScroll()
        setIsLoading(false)
      }, 2000)
    }
  }, [isBottom])

  return (
    <CustomAntFooter>
      {isLoading && (
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
