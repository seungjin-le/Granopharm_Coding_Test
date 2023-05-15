import styled from 'styled-components'
import CardForm from 'components/cards/CardForm'
import {ImageCardProps} from 'lodash'

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
