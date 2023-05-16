import HeaderImageBtn from 'components/buttons/HeaderImageBtn'
import {SubText} from 'lodash'
import styled from 'styled-components'

/**
 * 가격 섹션 컴포넌트
 * @param {string} text - 가격 제목 텍스트
 * @returns {JSX.Element} - 가격 섹션 컴포넌트
 */

const PriceSection = ({text}: SubText) => (
  <PriceSectionBox className={'price'}>
    <div className={'priceTitle'}>{text}</div>
    <div>
      <span className={'icon'}>
        <HeaderImageBtn src='eth' size={24} alt='eth' className={`${text}CardBtn`} />
      </span>
      <div className={'priceTitleEth'}>26.6 ETH</div>
    </div>
  </PriceSectionBox>
)

export default PriceSection

const PriceSectionBox = styled.div`
  font-family: Urbanist;

  & .priceTitle {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #808191;
  }
  & .priceTitleEth {
    margin-left: 4px;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #4c4d53;
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
