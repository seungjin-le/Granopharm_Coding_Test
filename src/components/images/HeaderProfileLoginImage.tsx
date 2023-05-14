import Jazzicon from 'react-jazzicon'
import styled from 'styled-components'
import {Avatar} from 'antd'
import React from 'react'

// isLoggedIn유무의 따라 Jazzicon출력 로그인 상태에서 랜덤으로 색상 아이콘 출력
const HeaderProfileLoginImage = ({isLoggedIn}: any) => {
  return (
    <CustomAntAvatarImage
      size={40}
      icon={isLoggedIn ? <Jazzicon diameter={40} seed={Math.round(Math.random() * 10000000)} /> : ''}
    />
  )
}

export default React.memo(HeaderProfileLoginImage)

const CustomAntAvatarImage = styled(Avatar)`
  background: #d2d3d4;
  cursor: pointer;
`
