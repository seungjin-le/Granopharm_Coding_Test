import {TitleText} from 'lodash'
import * as React from 'react'
import {Typography} from 'antd'
import styled from 'styled-components'

const HeaderTitleForm = ({title}: TitleText) => {
  return <CustomAntHeaderTitle>{title}</CustomAntHeaderTitle>
}

export default HeaderTitleForm

// 해더 타이틀
const CustomAntHeaderTitle = styled(Typography)`
  height: 23px;
  flex-grow: 0;
  margin: 0 0 0 8px;
  //font-family: Urbanist;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 0.2px;
  text-align: left;
  color: #1b1d21;
`
