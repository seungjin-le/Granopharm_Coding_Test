import PageHeader from 'container/layout/PageHeader'
import PageContent from 'container/layout/PageContent'
import PageFooter from 'container/layout/PageFooter'
import './PageLayout.scss'
import PageTabs from 'container/layout/PageTabs'
import styled from 'styled-components'
import {Layout, Space} from 'antd'
import {ReactNode, useEffect, useState} from 'react'
import ApiConfig, {HttpMethod} from 'dataManager/apiConfig'
import {EndPoint} from 'dataManager/apiMapper'
import {Asset} from 'lodash'

const PageLayout = ({children}: {children: ReactNode}) => {
  const [items, setItems] = useState([])
  console.log(children)

  const getDate = async (tabKey?: string) => {
    console.log(`${tabKey} Date Load`)
    setItems([])
    try {
      const {
        data: {bundles},
      }: any = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_OPENSEA_IMAGES,
        data: {},
        query: {},
        path: {},
      })
      if (bundles.length === 0) {
        return alert(`Not Data`)
      }
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
    } catch (error: any) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }
  }

  const handleOnChangeTap = (tabKey: string) => {
    getDate(tabKey)
  }

  const handleOnChangeScroll = () => {
    // 스크롤 최하단에 도달시 추가 데이터 요청
  }

  useEffect(() => {
    getDate()
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
