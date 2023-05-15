import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'
import {SubText} from 'lodash'

/**
 * 가격 섹션 컴포넌트
 * @param {string} text - 가격 텍스트
 * @returns {JSX.Element} - 가격 섹션 컴포넌트
 */

const PriceSection = ({text}: SubText) => (
  <div className={'price'}>
    <div className={'priceTitle'}>{text}</div>
    <div>
      <span className={'icon'}>
        <HeaderProfileArrowsBtn src='eth' size={24} alt='eth' />
      </span>
      <div className={'priceTitleEth'}>26.6 ETH</div>
    </div>
  </div>
)

export default PriceSection
