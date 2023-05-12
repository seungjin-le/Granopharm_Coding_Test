import styled from 'styled-components'
import {ImageProps} from 'lodash'

const HeaderProfileArrowsBtn = ({src, alt}: ImageProps) => {
  const webpSrcSet = `/images/bitMapImages/webp/${src}@3x.webp 3x, /images/bitMapImages/webp/${src}@2x.webp 2x, /images/bitMapImages/webp/${src}.webp`
  const pngSrcSet = `/images/bitMapImages/png/${src}@3x.png 3x, /images/bitMapImages/png/${src}@2x.png 2x, /images/bitMapImages/png/${src}}.png`

  return (
    <ProfileArrowsBtn>
      <picture>
        <source srcSet={webpSrcSet} type='image/webp' />
        <source srcSet={pngSrcSet} type='image/png' />
        <img src={`/images/bitMapImages/png/${src}.png`} alt={alt} />
      </picture>
    </ProfileArrowsBtn>
  )
}

export default HeaderProfileArrowsBtn

const ProfileArrowsBtn = styled('span')`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  object-fit: contain;
  cursor: pointer;
  & picture {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`
