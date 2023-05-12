import * as React from 'react'
import {ProfileArrowBtn, ProfileMenuBtnProps} from 'lodash'
import {Button, Dropdown, MenuProps} from 'antd'
import ConnectButtonForm from 'components/buttonForm/ConnectButtonForm'
import styled, {css} from 'styled-components'
import HeaderProfileArrowsBtn from 'components/images/HeaderProfileArrowsBtn'
import {useState} from 'react'

const items: MenuProps['items'] = [
  {
    label: <ConnectButtonForm text={'Connect Wallet'} />,
    key: 'connectBtn',
  },
]
const ProfileImage = ({openProfileMenu, closeProfileMenu, users}: ProfileMenuBtnProps) => {
  const [handleOpenMenu, setHandleOpenMenu] = useState<boolean>(false)
  console.log(closeProfileMenu)
  console.log(openProfileMenu, 'op')
  console.log(users, 'users', handleOpenMenu)
  //(open: boolean) => setHandleOpenMenu(open)
  return (
    <Dropdown
      className={'profileMenu'}
      menu={{items}}
      trigger={['click']}
      placement={'bottomRight'}
      overlayClassName={'profileDropDownMenu'}
      onOpenChange={(open: boolean) => setHandleOpenMenu(open)}
    >
      {/* handleOpenMenu의 bool값을 styled-components에 props넘길시 React-Dom에서 컴포넌트로 인식 */}
      <CustomAntProfileBtns onClick={e => console.log(e)} clickmenubtn={handleOpenMenu ? 'true' : ''}>
        <Button shape='circle' size={'large'} className='profileImage' />
        <HeaderProfileArrowsBtn src={'cheveron'} alt={'Cheveron Image'} />
      </CustomAntProfileBtns>
    </Dropdown>
  )
}

export default ProfileImage

const CustomAntProfileBtns = styled.div<ProfileArrowBtn>`
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
      & span {
        transition: 0.3s;
        transform: rotate(${props.clickmenubtn ? 0 : 180}deg);
      }
    `
  }}
`
