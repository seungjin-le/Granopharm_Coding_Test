import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TitleTextForm from 'components/texts/TitleTextForm'
import Logo from 'components/images/Logo'
import ProfileImage from 'components/images/ProfileImage'
import {useState} from 'react'

const PageHeader = () => {
  const title: string = 'Renaissance Lab.'
  const [users, setUsers] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUsers(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setUsers(null)
  }

  return (
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <Logo />
        <TitleTextForm title={title} />
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
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} />

        <Box sx={{flexGrow: 0}}>
          <ProfileImage
            openUserMenu={event => handleOpenUserMenu(event as React.MouseEvent<HTMLElement>)}
            closeUserMenu={handleCloseUserMenu}
            users={users}
          />
        </Box>
      </Toolbar>
    </Container>
  )
}

export default PageHeader
