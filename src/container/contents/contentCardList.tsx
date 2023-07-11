import styled from 'styled-components'
import {Avatar, Card, Layout} from 'antd'
import ContentCardListItem from 'components/cards/ContentCardListItem'
import {Asset} from 'lodash'
import {Meta} from 'antd/lib/list/Item'
import {useGetInfiniteCards} from '../../hooks/queries/CardQuery'
import {useSelector} from 'react-redux'

/**
 * 콘텐츠 카드 리스트 컴포넌트
 * @param {Asset[]} assets - 에셋 배열
 * @returns {JSX.Element} - 콘텐츠 카드 리스트 컴포넌트
 */
//{assets}: Assets
const ContentCardList = () => {
  const {isLoading, isError} = useGetInfiniteCards()
  const {assets}: any = useSelector((state: any) => state)

  return (
    <CustomAntCardList>
      {isError ? (
        <div>Error</div>
      ) : isLoading ? (
        <Card style={{width: 300, marginTop: 16}} loading={true}>
          <Meta
            avatar={<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1' />}
            title='CardQuert title'
            description='This is the description'
          />
        </Card>
      ) : (
        assets?.map((asset: Asset, index: number) => {
          return <ContentCardListItem asset={asset} key={index} />
        })
      )}
    </CustomAntCardList>
  )
}

export default ContentCardList

// 카드 리스트 컨테이너
const CustomAntCardList = styled(Layout)`
  background: #fff;
  margin-top: 50px;
  padding: 0 84px;
  @media (max-width: 459px) {
    padding: 0 12px;
  }
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 12px;
  @media (max-width: 1422px) {
    justify-items: center;
  }
`
