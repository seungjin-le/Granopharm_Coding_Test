import {Card} from 'antd'
import styled from 'styled-components'
import {maskString} from 'utils/utility'

interface WalletAccount {
  account: string
}

/**
 * 프로필 메뉴 리스트 아이콘 컴포넌트
 * @param {string} account - 지갑 계정 주소
 * @returns {JSX.Element} - 아이콘 컴포넌트
 */

const ProfileMenuListIcon = ({account}: WalletAccount) => {
  return (
    <CustomAntListIcon
      bordered={false}
      cover={<img alt='metamask-fox' src='/images/profileIcon/metamask-fox.svg' />}
      id={'metamaskIcon'}
    >
      <div className={'account'}>{account ? maskString(account, 6, 3, 5) : ''} </div>
    </CustomAntListIcon>
  )
}

export default ProfileMenuListIcon

const CustomAntListIcon = styled(Card)`
  &#metamaskIcon {
    text-align: center;
    box-shadow: none;
    & .account {
      //font-family: AirbnbCereal_W_Bd-;
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-align: center;
      color: #000;
    }
  }
  box-shadow: none;
  & img {
    width: 32px;
    height: 32px;
  }
`
