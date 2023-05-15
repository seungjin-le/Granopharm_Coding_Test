import styled from 'styled-components'
import {Col, Row} from 'antd'
import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'

const ContentCardList = () => {
  return (
    <CustomAntCard>
      <Col style={{width: '100%', height: '100%'}}>
        <Row style={{height: '65%'}}>
          <Col span={12} flex={1}>
            <MainCardBox>
              <MainCard>
                <img src='f' alt='a' />
              </MainCard>
            </MainCardBox>
          </Col>
          <Col flex={1} style={{marginLeft: '2px'}}>
            <SmallCardBox>
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </SmallCardBox>
          </Col>
        </Row>
        <Row style={{height: '35%', padding: '2px'}}>
          <CardTextBox>
            <div className={'cardTitle'}>Title</div>
          </CardTextBox>
          <CardPriceBox>
            <PriceSection />
            <PriceSection />
          </CardPriceBox>
        </Row>
      </Col>
    </CustomAntCard>
  )
}

const PriceSection = () => (
  <div className={'price'}>
    <div className={'priceTitle'}>Price</div>
    <div>
      <HeaderProfileArrowsBtn src='eth' size={24} alt='eth' />
      <div className={'priceTitleEth'}>26.6 ETH</div>
    </div>
  </div>
)

//Card
export default ContentCardList

// Common Styled Components
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 2px;
`

const Card = styled.div`
  padding: 2px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  & img {
    width: 100%;
    height: 100%;
  }
`

// Specific Styled Components
const CustomAntCard = styled(CardBox)`
  width: 23rem;
  height: 330px;
  flex-grow: 0;
  border: solid 1px #d2d3d4;
  background-color: #fff;
`

const MainCardBox = styled(CardBox)``

const MainCard = styled(Card)`
  background-color: lightblue;
`

const SmallCardBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SmallCard = styled(Card)`
  width: calc(50% - 1%);
  height: calc(50% - 1%);
  background: skyblue;
`

const CardTextBox = styled.div`
  width: 100%;
  padding: 8px;
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
  }
`
