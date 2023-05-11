import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import TitleTextForm from 'components/texts/TitleTextForm'
import Logo from 'components/images/Logo'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const title: string = 'Renaissance Lab.'
const PageHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Container maxWidth='xl' className='pageHeader'>
      <Toolbar disableGutters>
        <Logo />
        <TitleTextForm title={title} />
        <picture>
          <source srcSet={'/public/images/bitMapImages/webp/logo-3.webp'} type='image/webp' />
          <img className={'png'} src={'/public/images/bitMapImages/png/logo-3.png'} alt={''} />
        </picture>

        <Typography
          variant='h5'
          noWrap
          component='a'
          href=''
          sx={{
            mr: 2,
            display: {xs: 'flex', md: 'none'},
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        ></Typography>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}></Box>
        <Box sx={{flexGrow: 0}}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: '45px'}}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  )
}

export default PageHeader
