import * as React from 'react'
import HeaderTitleForm from 'components/texts/HeaderTitleForm'
import PageHeaderLogo from 'components/images/PageHeaderLogo'
import ProfileImage from 'components/images/ProfileImage'
import {Layout, Row} from 'antd'
import styled from 'styled-components'

const PageHeader = ({title}: any) => {
  return (
    <CustomAntHeader>
      <Row>
        <PageHeaderLogo />
        <HeaderTitleForm title={title} />
      </Row>
      <ProfileImage />
    </CustomAntHeader>
  )
}

export default PageHeader

const CustomAntHeader = styled(Layout)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  padding: 18px 28px 2px 36px;
  background-color: #fff;
`
