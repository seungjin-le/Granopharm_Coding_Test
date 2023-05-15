import styled from 'styled-components'
import {Avatar, Card, Layout} from 'antd'
import ContentCardListItem from 'components/cards/ContentCardListItem'
import {Asset} from 'lodash'
import Meta from 'antd/es/card/Meta'

interface Props {
  assets: Asset[]
}

const ContentCardList = ({assets}: Props) => {
  return (
    <CustomAntCardList>
      {assets.length ? (
        assets?.map((asset, index) => {
          return <ContentCardListItem asset={asset} key={index} />
        })
      ) : (
        <Card style={{width: 300, marginTop: 16}} loading={true}>
          <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />}
            title='Card title'
            description='This is the description'
          />
        </Card>
      )}
    </CustomAntCardList>
  )
}

export default ContentCardList

// Common Styled Components
const CustomAntCardList = styled(Layout)`
  background: #fff;
  padding: 0 84px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  gap: 10px;
`
