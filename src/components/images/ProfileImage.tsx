import * as React from 'react'
import {UserMenuBtnPorps} from 'lodash'
import Box from '@mui/material/Box'
import {Button, Dropdown, MenuProps} from 'antd'
import ConnectButtonForm from 'components/buttonForm/ConnectButtonForm'
import styled from 'styled-components'

const items: MenuProps['items'] = [
  {
    label: <ConnectButtonForm text={'Connect Wallet'} />,
    key: 'connectBtn',
  },
]
const ProfileImage = ({openUserMenu, closeUserMenu, users}: UserMenuBtnPorps) => {
  console.log(closeUserMenu, openUserMenu, users)
  return (
    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <CustomAntDropDown
        className={'profileMenu'}
        menu={{items}}
        trigger={['click']}
        placement={'bottomRight'}
        overlayClassName={'profileDropDownMenu'}
      >
        <Button shape='circle' size={'large'} className='profileImage' />
      </CustomAntDropDown>
    </Box>
  )
}

export default ProfileImage

const CustomAntDropDown = styled(Dropdown)`
  margin-left: -3rem;
  & ul {
  }
`
