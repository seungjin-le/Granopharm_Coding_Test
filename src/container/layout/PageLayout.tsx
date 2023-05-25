import PageHeader from 'container/layout/PageHeader'
import PageFooter from 'container/layout/PageFooter'
import PageTabs from 'container/layout/PageTabs'
import styled from 'styled-components'
import {Layout, Space} from 'antd'
import React, {memo} from 'react'
import {EndPoint} from 'dataManager/apiMapper'
import {AssetAPI, PageLayoutProps, PageTab} from 'lodash'
import {useNavigate} from 'react-router-dom'
import {getData} from 'utils/utility'
import {useDispatch} from 'react-redux'
import {addCards, resetCards} from 'store/redux/cards/AssetsSlice'
import {incrementCurrentPage, resetCurrentPage} from 'store/redux/pages/CurrentPage'
import {useQuery} from 'react-query'
/**
 * 페이지 레이아웃 컴포넌트
 * @param {ReactNode} children - 자식 컴포넌트
 * @returns {JSX.Element} - 페이지 레이아웃 컴포넌트
 */

const PageLayout = ({children}: PageLayoutProps) => {
  const pageTabTest: PageTab[] = [
    {key: 'all', count: 2899},
    {key: 'collections', count: 2829},
    {key: 'singles', count: 1999},
  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //let currentPage = useSelector((state: any) => state.currentPage.value)

  // 다른 페이지 추가시 API 로직 분리
  const getPageData = async () => {
    await getData(EndPoint.GET_OPENSEA_IMAGES)
      .then(({bundles}) => {
        dispatch(
          addCards(
            bundles.map((asset: AssetAPI) => {
              return {
                assetName: asset.asset_contract?.name,
                assetMainImage: asset.asset_contract?.image_url,
                assetLink: asset?.permalink,
                assetImages: asset.assets?.map(assetImages => assetImages.image_thumbnail_url),
              }
            }),
          ),
        )
      })
      .catch(err => console.log(err))
  }

  // 페이지 마운트시 데이터 로드
  useQuery('getPageData', getPageData, {
    refetchOnMount: false, // 데이터를 처음에만 불러옴
  })

  // 텝 이동시 tabKey를 이용한 API요청 함수
  const handleOnChangeTap = (tabKey: string) => {
    // URL 이동
    navigate({
      pathname: tabKey,
    })

    // 카드 리스트 초기화
    dispatch(resetCards())

    // 현재 페이지 초기화
    dispatch(resetCurrentPage())

    // TabKey를 사용하여 API 요청
    getPageData()
  }

  const handleOnChangeScroll = () => {
    // 스크롤 최하단에 도달시 추가 데이터 요청
    dispatch(incrementCurrentPage())
    return getPageData()
  }

  return (
    <CustomAntPageLayout direction='vertical' size={[0, 48]}>
      <CustomAntLayoutBox>
        <PageHeader title={'Renaissance Lab.'} />
        <PageTabs handleOnChangeTap={handleOnChangeTap} pageTabs={pageTabTest} />
        {children}
        <PageFooter infiniteScroll={handleOnChangeScroll} />
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
