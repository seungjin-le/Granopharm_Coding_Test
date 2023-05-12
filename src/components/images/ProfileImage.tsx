import * as React from 'react'
import {ProfileMenuBtnProps} from 'lodash'
import Box from '@mui/material/Box'
import {Button, Dropdown, MenuProps, Row} from 'antd'
import ConnectButtonForm from 'components/buttonForm/ConnectButtonForm'
import styled from 'styled-components'
import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'

const items: MenuProps['items'] = [
  {
    label: <ConnectButtonForm text={'Connect Wallet'} />,
    key: 'connectBtn',
  },
]
const ProfileImage = ({openProfileMenu, closeProfileMenu, users}: ProfileMenuBtnProps) => {
  console.log(closeProfileMenu, openProfileMenu, users)

  return (
    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <CustomAntDropDown
        className={'profileMenu'}
        menu={{items}}
        trigger={['click']}
        placement={'bottomRight'}
        overlayClassName={'profileDropDownMenu'}
      >
        <Row onClick={() => console.log(users)} className={'profileBtns'} justify={'end'} align={'middle'}>
          <Button shape='circle' size={'large'} className='profileImage' />
          <HeaderProfileArrowsBtn src={'cheveron'} alt={'Cheveron Image'} />
        </Row>
      </CustomAntDropDown>
    </Box>
  )
}

export default ProfileImage

const CustomAntDropDown = styled(Dropdown)`
  // 프로필 이미지 사이즈
  & .profileImage {
    width: 40px;
    height: 40px;
    background-color: #d2d3d4;
    // 프로필 이미지 마우스 이벤트
    &:hover,
    &:active {
      border: #7a7a7a;
      color: #7a7a7a;
    }
  }
`
