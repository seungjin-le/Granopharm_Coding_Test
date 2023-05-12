import * as React from 'react'
import HeaderTitleForm from 'components/texts/HeaderTitleForm'
import PageHeaderLogo from 'components/images/PageHeaderLogo'
import ProfileImage from 'components/images/ProfileImage'
import {useState} from 'react'
import {Row, Layout} from 'antd'
import styled from 'styled-components'

const PageHeader = () => {
  const title: string = 'Renaissance Lab.'
  const [users, setUsers] = useState<null | HTMLElement>(null)
  //const [profileMenuBtn, setProfileMenuBtn] = useState(false)

  const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUsers(event.currentTarget)
  }

  const handleCloseProfileMenu = () => {
    setUsers(null)
  }

  return (
    <CustomAntHeader>
      <Row>
        <PageHeaderLogo />
        <HeaderTitleForm title={title} />
      </Row>
      <ProfileImage
        openProfileMenu={event => handleOpenProfileMenu(event as React.MouseEvent<HTMLElement>)}
        closeProfileMenu={handleCloseProfileMenu}
        users={users}
      />
    </CustomAntHeader>
  )
}

export default PageHeader

const CustomAntHeader = styled(Layout)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 76px;
  padding: 18px 28px 2px 36px;
  background-color: #fff;
`
