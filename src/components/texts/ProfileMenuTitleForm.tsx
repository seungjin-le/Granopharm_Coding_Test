import * as React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'
import {TitleText} from 'lodash'

const ProfileMenuTitleForm = ({title}: TitleText) => {
  return (
    <CustomAntProfileMenuTitle>
      <span>{title}</span>
    </CustomAntProfileMenuTitle>
  )
}

export default ProfileMenuTitleForm

const CustomAntProfileMenuTitle = styled(Typography)`
  display: flex;
  flex-direction: row;
  margin-bottom: 17px;
  height: 16px;
  align-items: center;
  & span {
    flex-grow: 0;
    font-family: Gilroy;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
`
