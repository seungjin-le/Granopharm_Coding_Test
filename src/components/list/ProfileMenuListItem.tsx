import * as React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {TitleText} from 'lodash'

const ProfileMenuListItem = ({title}: TitleText) => {
  return (
    <CustomAntProfileMenuListItem>
      <span>{title}</span>
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
    //font-family: AirbnbCereal_W_Md-;
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
