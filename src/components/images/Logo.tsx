import Box from '@mui/material/Box'
const Logo = () => {
  return (
    <Box>
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
    </Box>
  )
}

export default Logo
