import * as React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {SubText} from 'lodash'

/**
 * 프로필 메뉴 리스트 아이템 컴포넌트
 * @param {string} title - 아이템 제목
 * @returns {JSX.Element} - 아이템 컴포넌트
 */

const ProfileMenuListItem = ({text}: SubText) => {
  return (
    <CustomAntProfileMenuListItem>
      <span>{text}</span>
    </CustomAntProfileMenuListItem>
  )
}

export default ProfileMenuListItem

const CustomAntProfileMenuListItem = styled(Typography)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin: 20px 26px 19px 4px;
  & span {
    font-family: AirbnbCerealMd;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
`
