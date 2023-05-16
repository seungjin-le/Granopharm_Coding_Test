import HeaderImageBtn from 'components/buttons/HeaderImageBtn'
import {SubText} from 'lodash'

/**
 * 가격 섹션 컴포넌트
 * @param {string} text - 가격 제목 텍스트
 * @returns {JSX.Element} - 가격 섹션 컴포넌트
 */

const PriceSection = ({text}: SubText) => (
  <div className={'price'}>
    <div className={'priceTitle'}>{text}</div>
    <div>
      <span className={'icon'}>
        <HeaderImageBtn src='eth' size={24} alt='eth' className={`${text}CardBtn`} />
      </span>
      <div className={'priceTitleEth'}>26.6 ETH</div>
    </div>
  </div>
)

export default PriceSection
