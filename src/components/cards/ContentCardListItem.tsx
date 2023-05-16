import {Col, Row} from 'antd'
import styled from 'styled-components'
import {Asset} from 'lodash'
import {useEffect, useState} from 'react'
import SmallCard from 'components/cards/SmailCard'
import CardForm from 'components/cards/CardForm'
import PriceSection from 'components/cards/PriceSection'

interface ContentCardListItemProps {
  asset: Asset
}

/**
 * 콘텐츠 카드 리스트 아이템 컴포넌트
 * @param {Asset} asset - 아티스트 정보
 * @returns {JSX.Element} - 콘텐츠 카드 리스트 아이템 컴포넌트
 */

const ContentCardListItem = ({asset}: ContentCardListItemProps) => {
  const [state, setState] = useState<Asset | null>(asset)
  useEffect(() => {
    setState(asset)
  }, [])

  return (
    <CustomAntCard>
      <Col style={{width: '100%'}}>
        <Row style={{height: '64%', minHeight: '64%', maxHeight: '64%'}}>
          <Col span={12} flex={1} style={{height: '100%'}}>
            <CardBox>
              <CardForm imgSrc={state?.assetMainImage || state?.assetImages[0] || ''} altText={'qwe'} />
            </CardBox>
          </Col>
          <Col span={12} flex={1} style={{height: '100%'}}>
            <CardBox>
              {state?.assetImages.map((imgUrl, index, imgUrls) => {
                if (index < 4)
                  return (
                    <SmallCard
                      imgSrc={imgUrl}
                      altText={'ad'}
                      key={index}
                      lastImage={index === 3 || imgUrls.length - 1 === index}
                    />
                  )
                return
              })}
            </CardBox>
          </Col>
        </Row>
        <Row style={{height: '35%', padding: '2px'}}>
          <CardTextBox>
            <div className={'cardTitle'}>{asset?.assetName || ''}</div>
          </CardTextBox>
          <CardPriceBox>
            <PriceSection text={'Price'} />
            <PriceSection text={'Market Cap'} />
          </CardPriceBox>
        </Row>
      </Col>
    </CustomAntCard>
  )
}

export default ContentCardListItem
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 10px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`

// Specific Styled Components
const CustomAntCard = styled(CardBox)`
  width: 24rem;
  min-width: 23rem;
  height: 330px;
  flex-grow: 0;
  border: solid 1px #d2d3d4;
  background-color: #fff;
`

const CardTextBox = styled.div`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  & .cardTitle {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #1b1d21;
  }
`

const CardPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  width: 100%;
  margin-top: -4px;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  & .price div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 4px;
  }

  & .priceTitle {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #808191;
  }

  & .priceTitleEth {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    color: #4c4d53;
    margin-left: 4px;
  }
  & .icon {
    gap: 5.5px;
    padding: 3.9px;
    border-radius: 50%;
    background-color: #ebedfc;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 21px;
    height: 21px;
    margin-top: 4px;
    & span {
      margin: 0;
    }
  }
`
