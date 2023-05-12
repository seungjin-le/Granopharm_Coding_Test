import styled from 'styled-components'

const PageHeaderLogo = () => {
  return (
    <HeaderLogo>
      <picture>
        <source
          srcSet={`/images/bitMapImages/webp/logo-3@3x.webp, 
            /images/bitMapImages/webp/logo-3@2x.webp,
            /images/bitMapImages/webp/logo-3.webp`}
          type='image/webp'
          className='Logo-3'
        />
        <source
          srcSet={`/images/bitMapImages/png/logo-3@3x.png, /images/bitMapImages/png/logo-3@2x.png, /images/bitMapImages/png/logo-3x.png`}
          type='image/webp'
          className='Logo-3'
        />
        <img src={'/images/bitMapImages/svg/logo-3.svg'} alt={'LogoSvg'} className='Logo-3' />
      </picture>
    </HeaderLogo>
  )
}

export default PageHeaderLogo

const HeaderLogo = styled('span')`
  width: 36px;
  height: 20px;
  flex-grow: 0;
  margin: 1px 8px 2px 0;
  object-fit: contain;
  & picture img,
  & picture source {
    width: 100%;
  }
`
