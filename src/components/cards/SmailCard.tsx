import styled from 'styled-components'
import CardForm from 'components/cards/CardForm'
import {ImageCardProps} from 'lodash'

/**
 * 작은 카드 컴포넌트
 *
 * @param {string} imgSrc - 이미지 소스
 * @param {string} altText - 대체 텍스트
 * @param {boolean} lastImage - 마지막 이미지 여부
 * @returns {JSX.Element} - 작은 카드 컴포넌트
 *
 */

const SmallCard = ({imgSrc, altText, lastImage}: ImageCardProps) => {
  return (
    <Card>
      <CardForm imgSrc={imgSrc} altText={altText} lastImage={lastImage} />
    </Card>
  )
}

export default SmallCard

const Card = styled.div`
  padding: 1px;
  box-sizing: border-box;
  width: 50%;
  height: 50%;
`
