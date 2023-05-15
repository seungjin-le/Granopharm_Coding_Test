import Jazzicon, {jsNumberForAddress} from 'react-jazzicon'
import styled from 'styled-components'
import {Avatar} from 'antd'
import React from 'react'
import {ProfileMenuBtn} from 'lodash'

/**
 * 헤더 프로필 로그인 이미지 컴포넌트
 *
 * @param {boolean} isLoggedIn - 로그인 상태 여부
 * @param {string} account - 계정 주소
 *
 * 지갑 주소를 통해 프로필 이미지 출력
 */
const HeaderProfileImage = ({isLoggedIn, account}: ProfileMenuBtn) => {
  return (
    <CustomAntAvatarImage
      size={40}
      icon={isLoggedIn ? <Jazzicon diameter={40} seed={jsNumberForAddress(account)} /> : ''}
    />
  )
}

export default React.memo(HeaderProfileImage)

const CustomAntAvatarImage = styled(Avatar)`
  background: #d2d3d4;
  cursor: pointer;
`
