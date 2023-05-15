import * as React from 'react'
import {AuthState, ProfileArrowBtn} from 'lodash'
import {Dropdown, MenuProps, Spin} from 'antd'
import ConnectButtonForm from 'components/buttonForm/ConnectButtonForm'
import styled, {css} from 'styled-components'
import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'
import {useState} from 'react'
import ProfileMenuTitleForm from 'components/texts/ProfileMenuTitleForm'
import {useAuth} from 'utils/UseAuth'
import ProfileMenuListItem from 'components/list/profileMenu/ProfileMenuListItem'
import ProfileMenuListIcon from 'components/list/profileMenu/ProfileMenuListIcon'
import HeaderProfileLoginImage from 'components/images/HeaderProfileLoginImage'

const ProfileImage = () => {
  const [handleOpenMenu, setHandleOpenMenu] = useState<boolean>(false)
  const {isLoggedIn, connection, disconnect, wallet, active, isConnecting}: AuthState = useAuth()
  console.log(active, isConnecting)
  const connectMenu: MenuProps['items'] = [
    {
      label: <ProfileMenuTitleForm title={'Connect'} />,
      key: 'connectMenuTitle',
      disabled: true,
    },
    {
      label: <ConnectButtonForm text={'Connect Wallet'} />,
      key: 'connectBtn',
      onClick: async () => {
        await connection()
      },
    },
  ]
  const disconnectMenu: MenuProps['items'] = [
    {
      label: <ProfileMenuListIcon account={wallet.account} />,
      key: 'walletAccount',
    },
    {
      type: 'divider',
    },
    {
      label: <ProfileMenuListItem title={'Setting'} />,
      key: 'setting',
    },
    {
      type: 'divider',
    },
    {
      label: <ProfileMenuListItem title={'Disconnect'} />,
      key: 'disconnect',
      onClick: async () => {
        await disconnect()
      },
    },
  ]

  return (
    <>
      <Dropdown
        className={'profileMenu'}
        menu={isLoggedIn ? {items: disconnectMenu} : {items: connectMenu}}
        trigger={['click']}
        placement={'bottomRight'}
        overlayClassName={'profileDropDownMenu'}
        onOpenChange={(open: boolean) => setHandleOpenMenu(open)}
      >
        {/* handleOpenMenu의 bool값을 styled-components에 props넘길시 React-Dom에서 컴포넌트로 인식 */}
        {isConnecting ? (
          <Spin />
        ) : (
          <CustomAntProfileBtn clickmenubtn={handleOpenMenu ? 'true' : ''}>
            <HeaderProfileLoginImage isLoggedIn={isLoggedIn} />
            <HeaderProfileArrowsBtn src={'cheveron'} alt={'Cheveron Image'} size={24} />
          </CustomAntProfileBtn>
        )}
      </Dropdown>
    </>
  )
}

export default ProfileImage

const CustomAntProfileBtn = styled.div<ProfileArrowBtn>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
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
  // 프로필 화살표 버튼
  ${props => {
    return css`
      & .arrowBtn {
        transition: 0.2s;
        transform: rotate(${props.clickmenubtn ? 0 : 180}deg);
      }
    `
  }}
`
