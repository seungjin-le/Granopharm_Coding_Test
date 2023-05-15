import {Layout, Space, Spin} from 'antd'
import styled from 'styled-components'
import {memo, useEffect, useState} from 'react'
import {InfiniteScroll} from 'lodash'

const PageFooter = ({infiniteScroll}: InfiniteScroll) => {
  const [isBottom, setIsBottom] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isBottom) {
      setIsLoading(true)
      // 스크롤이 맨 아래로 도달했을 때 추가 데이터 요청
      setTimeout(() => {
        console.log('Reached bottom of page!')
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
