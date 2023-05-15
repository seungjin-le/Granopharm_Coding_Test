import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'

interface PriceSectionProps {
  text: string
}

const PriceSection = ({text}: PriceSectionProps) => (
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
