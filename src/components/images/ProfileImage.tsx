import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'
import {UserMenuBtnPorps} from 'lodash'
import Box from '@mui/material/Box'
import ConnectButtonForm from 'components/buttonForm/ConnectButtonForm'

const ProfileImage = ({openUserMenu, closeUserMenu, users}: UserMenuBtnPorps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  console.log(closeUserMenu, openUserMenu, users)
  return (
    <React.Fragment>
      <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
        <Tooltip title='Account settings'>
          <IconButton
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{width: 40, height: 40}}> </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id='basic-menu'
        className={'ProfileMenu'}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <ConnectButtonForm text={'Connect'} />
      </Menu>
    </React.Fragment>
  )
}

export default ProfileImage
