import PageHeader from 'container/layout/PageHeader'
import PageContent from 'container/layout/PageContent'
import PageFooter from 'container/layout/PageFooter'
import './PageLayout.scss'
import PageTabs from 'container/layout/PageTabs'
import styled from 'styled-components'
import {Layout, Space} from 'antd'
import {useEffect, useState} from 'react'
import {EndPoint} from 'dataManager/apiMapper'
import {Asset, PageLayoutProps} from 'lodash'
import {useNavigate} from 'react-router-dom'
import {getData} from 'utils/utility'

/**
 * 페이지 레이아웃 컴포넌트
 * @param {ReactNode} children - 자식 컴포넌트
 * @returns {JSX.Element} - 페이지 레이아웃 컴포넌트
 */

const PageLayout = ({children}: PageLayoutProps) => {
  const [items, setItems] = useState([])
  const navigate = useNavigate()

  const getDate = async (tabKey?: string) => {
    console.log(`${tabKey} Date Load${children}`)
    setItems([]) // 아이템 초기화, API 데이터를 받기 전까지 로딩

    await getData(EndPoint.GET_OPENSEA_IMAGES)
      .then(({bundles}) => {
        setItems(
          bundles.map((asset: Asset) => {
            return {
              assetName: asset.asset_contract?.name,
              assetMainImage: asset.asset_contract?.image_url,
              assetLink: asset?.permalink,
              assetImages: asset.assets?.map(assetImages => assetImages.image_thumbnail_url),
            }
          }),
        )
      })
      .catch(err => console.log(err))
  }

  const handleOnChangeTap = (tabKey: string) => {
    // 텝 이동시 tabKey를 이용한 API요청
    getDate(tabKey)
    navigate(`/${tabKey}`)
  }

  const handleOnChangeScroll = () => {
    // 스크롤 최하단에 도달시 추가 데이터 요청
  }

  useEffect(() => {
    getDate() // 컴포넌트 마운트시 데이터 로드
  }, [])

  return (
    <CustomAntPageLayout direction='vertical' size={[0, 48]}>
      <CustomAntLayoutBox>
        <PageHeader title={'Renaissance Lab.'} />
        <PageTabs handleOnChangeTap={handleOnChangeTap} />
        <PageContent assets={items} />
        <PageFooter infiniteScroll={handleOnChangeScroll} />
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
  background: #fff;
`
