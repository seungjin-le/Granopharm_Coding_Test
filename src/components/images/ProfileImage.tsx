import * as React from 'react'
import {AuthState, ProfileArrowBtn} from 'lodash'
import {Dropdown, MenuProps, Spin} from 'antd'
import ConnectButtonForm from 'components/buttons/ConnectButtonForm'
import styled, {css} from 'styled-components'
import HeaderImageBtn from 'components/buttons/HeaderImageBtn'
import {useState} from 'react'
import ProfileMenuTitleForm from 'components/texts/ProfileMenuTitleForm'
import {useAuth} from 'utils/UseAuth'
import ProfileMenuListItem from 'components/list/profileMenu/ProfileMenuListItem'
import ProfileMenuListIcon from 'components/list/profileMenu/ProfileMenuListIcon'
import HeaderProfileImage from 'components/images/HeaderProfileImage'

/**
 * 프로필 이미지와 트롭다운 메뉴 컴포넌트
 *
 * @returns {JSX.Element} 프로필 이미지와 드롭다운 컴포넌트
 */
const ProfileImage = () => {
  const [handleOpenMenu, setHandleOpenMenu] = useState<boolean>(false)
  const {isLoggedIn, connection, disconnect, wallet, isConnecting}: AuthState = useAuth()
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
      label: <ProfileMenuListItem text={'Setting'} />,
      key: 'setting',
    },
    {
      type: 'divider',
    },
    {
      label: <ProfileMenuListItem text={'Disconnect'} />,
      key: 'disconnect',
      onClick: async () => {
        await disconnect()
      },
    },
  ]

  return (
    <>
      <Dropdown
        menu={isLoggedIn ? {items: disconnectMenu} : {items: connectMenu}}
        trigger={['click']}
        placement={'bottomRight'}
        overlayClassName={'profileDropDownMenu'}
        onOpenChange={(open: boolean) => setHandleOpenMenu(open)}
      >
        {/* handleOpenMenu의 bool값을 styled-components에 props넘길시 React-Dom에서 컴포넌트로 인식 */}
        {isConnecting ? (
          // 로그인 시도중 로딩
          <Spin />
        ) : (
          <CustomAntProfileBtn clickMenuBtn={handleOpenMenu ? 'true' : ''}>
            <HeaderProfileImage isLoggedIn={isLoggedIn} account={wallet?.account} />
            <HeaderImageBtn src={'cheveron'} alt={'Cheveron Image'} size={24} />
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
        transform: rotate(${props.clickMenuBtn ? 0 : 180}deg);
      }
    `
  }}
`
