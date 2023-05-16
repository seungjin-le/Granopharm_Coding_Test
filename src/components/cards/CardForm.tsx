import styled from 'styled-components'
import {ImageCardProps} from 'lodash'

/**
 * 카드 형식의 이미지 컴포넌트
 *
 * @param {string} imgSrc - 이미지 소스
 * @param {string} altText - 대체 텍스트
 * @param {boolean} lastImage - 마지막 이미지 여부
 * @returns {JSX.Element} 카드 컴포넌트
 */
const CardForm = ({imgSrc, altText, lastImage}: ImageCardProps) => {
  return (
    <Card>
      <CardImage
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          ...(lastImage && {filter: 'brightness(70%)'}),
        }}
        aria-label={altText || ''}
      >
        {lastImage && <Badge>+2.2k</Badge>}
      </CardImage>
    </Card>
  )
}

export default CardForm

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const CardImage = styled(Card)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background-repeat: no-repeat;
  overflow: hidden;
  & span sup {
    color: black !important;
  }
`
const Badge = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 6px;
  border-radius: 10px;
  background-color: #f7f7f7;
  font-family: Urbanist;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: center;
  color: #222;
`
