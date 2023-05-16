import * as React from 'react'
import HeaderTitleForm from 'components/texts/HeaderTitleForm'
import ProfileImage from 'components/images/ProfileImage'
import {Layout, Row} from 'antd'
import styled from 'styled-components'
import {TitleText} from 'lodash'
import HeaderImageBtn from 'components/buttons/HeaderImageBtn'
import {Link} from 'react-router-dom'
import {memo} from 'react'

/**
 * 페이지 헤더 컴포넌트
 *
 * @param {string} title - 헤더 제목
 * @returns {JSX.Element} 헤더 전체 컴포넌트
 */

const PageHeader = ({title}: TitleText) => {
  return (
    <CustomAntHeader>
      <Link to={'/'}>
        <Row>
          <HeaderImageBtn src={'logo-3'} alt={'Logo'} size={24} className={'headerLogo'} />
          <HeaderTitleForm title={title} />
        </Row>
      </Link>
      <ProfileImage />
    </CustomAntHeader>
  )
}

export default memo(PageHeader)

const CustomAntHeader = styled(Layout)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  padding: 18px 28px 2px 36px;
  background-color: #fff;
  & > a > div > article {
    margin-left: 20px;
  }
`
