import {Button, Col, Row} from 'antd'
import styled from 'styled-components'
import {Asset} from 'lodash'
import {useEffect, useState} from 'react'
import SmallCard from 'components/cards/SmailCard'
import CardForm from 'components/cards/CardForm'
import PriceSection from 'components/cards/PriceSection'

/**
 * 콘텐츠 카드 리스트 아이템 컴포넌트
 * @param {Assets} asset - 아티스트 정보
 * @returns {JSX.Element} - 콘텐츠 카드 리스트 아이템 컴포넌트
 */

interface CardItemProps {
  asset: Asset
}

const ContentCardListItem = ({asset}: CardItemProps) => {
  const [state, setState] = useState<Asset | null>()
  useEffect(() => {
    setState(asset)
  }, [])
  return (
    <CustomAntCard>
      <CardLinkBox className={'linkBox'}>
        <Button ghost onClick={() => asset?.assetLink && window.open(asset.assetLink, '_blank')}>
          Link
        </Button>
      </CardLinkBox>
      <Col style={{width: '100%'}}>
        <Row style={{height: '64%', minHeight: '64%', maxHeight: '64%'}}>
          <Col span={12} flex={1} style={{height: '100%'}}>
            <CardBox>
              <CardForm imgSrc={state?.assetMainImage || state?.assetImages[0] || ''} altText={'alt'} />
            </CardBox>
          </Col>
          <Col span={12} flex={1} style={{height: '100%'}}>
            <CardBox>
              {state?.assetImages.length &&
                // SmallCard의 개수가 4개 미만일 경우 추가 카드 생성
                Array.from({length: 4}).map((_, index) => {
                  return state.assetImages[index] ? (
                    <SmallCard imgSrc={state?.assetImages[index]} key={index} altText={'alt'} lastImage={index === 3} />
                  ) : (
                    <SmallCard imgSrc={state?.assetImages[1]} key={index} altText={'alt'} lastImage={index === 3} />
                  )
                })}
            </CardBox>
          </Col>
        </Row>
        <Row style={{height: '35%', padding: '2px'}}>
          <CardTextBox>
            <div className={'cardTitle'}>{asset?.assetName || 'Not Name'}</div>
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
  position: relative;
  min-width: 20rem;
  height: 20.9rem;
  border: solid 1px #d2d3d4;
  background-color: #fff;
  transition: 0.2s;
  &:hover {
    transform: scale(1.04);
    & .linkBox {
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  @media (max-width: 1422px) {
    max-width: 25rem;

    min-height: 19rem;
    max-height: 23rem;
    height: calc(100vw / 5);
  }
  @media (max-width: 962px) {
    min-height: 18rem;
    height: calc(100vw / 3);
  }
  @media (max-width: 898px) {
    height: calc(100vw / 2);
    max-width: 28rem;
    min-width: 23rem;
  }
  @media (max-width: 500px) {
    height: calc(100vw / 1.2);
  }
`

const CardTextBox = styled.div`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  font-family: Urbanist;
  .cardTitle {
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
`
const CardLinkBox = styled.div`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &.linkBox button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 40px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: #fff;
    border: 2px solid #fff;
  }
`
