import styled from 'styled-components'
import {ImageProps} from 'lodash'

/**
 * 헤더 프로필 화살표 버튼 컴포넌트입니다.
 *
 * @param {string} src - 이미지 소스
 * @param {string} alt - 대체 텍스트
 * @param {number} size - 이미지 크기
 * @param {string} className - 클레스 네임
 * @returns {JSX.Element} 헤더 프로필 화살표 버튼 컴포넌트
 */

const HeaderImageBtn = ({src, alt, size, className}: ImageProps) => {
  const webpSrcSet: string = `/images/bitMapImages/webp/${src}@3x.webp 3x, /images/bitMapImages/webp/${src}@2x.webp 2x, /images/bitMapImages/webp/${src}.webp`
  const pngSrcSet: string = `/images/bitMapImages/png/${src}@3x.png 3x, /images/bitMapImages/png/${src}@2x.png 2x, /images/bitMapImages/png/${src}}.png`

  return (
    <ProfileArrowsBtn className={className} style={{height: `${size}px`, width: `${size}px`}}>
      <picture>
        <source srcSet={webpSrcSet} type='image/webp' />
        <source srcSet={pngSrcSet} type='image/png' />
        <img src={`/images/bitMapImages/png/${src}.png`} alt={alt} />
      </picture>
    </ProfileArrowsBtn>
  )
}

export default HeaderImageBtn

const ProfileArrowsBtn = styled('span')`
  width: 100%;
  height: 100%;
  margin-left: 4px;
  object-fit: contain;
  cursor: pointer;
  & picture {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`
