import React, {memo} from 'react'
import {Layout, Tabs} from 'antd'
import styled from 'styled-components'
import {PageTabProps} from 'lodash'
import {capitalizeFirstLetter, nFormatter} from 'utils/utility'

/**
 * 페이지 탭 컴포넌트
 *
 * @param {Function} handleOnChangeTap - 탭 변경 핸들러 함수
 * @param {key:string, count:number} pageTabs - 탭 아이템 개수
 */

const PageTabs = ({handleOnChangeTap, pageTabs}: PageTabProps) => {
  return (
    <CustomAntTabs>
      {/* Ant Design Tabs 컴포넌트 */}
      <Tabs
        onTabClick={tabKey => handleOnChangeTap(tabKey)}
        items={pageTabs?.map(value => {
          return {
            label: (
              <TabBox>
                {capitalizeFirstLetter(value.key)}
                <TabCount>{nFormatter(value.count, 1)}</TabCount>
              </TabBox>
            ),
            key: value.key,
          }
        })}
      />
    </CustomAntTabs>
  )
}

export default memo(PageTabs)

const CustomAntTabs = styled(Layout)`
  display: flex;
  height: 76px;
  background-color: #fff;
  color: black;
  & div {
    font-family: AirbnbCerealBd;
  }
  & .ant-tabs-nav {
    border-bottom: 2px solid #e4e4e4;
  }
  & .ant-tabs-tab {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }
  & .ant-tabs-nav-wrap {
    padding: 18px 28px 2px 100px;
  }
  & .ant-tabs-tab.ant-tabs-tab-active div {
    color: #000 !important;
  }
  & .ant-tabs-nav-list .ant-tabs-tab {
    text-align: center;
    margin-left: 22px;
  }
  .ant-tabs-ink-bar {
    border-bottom: 2px solid #000;
    color: #000;
  }
`
const TabBox = styled.div`
  display: block;
`
const TabCount = styled.span`
  display: inline-block;
  margin-left: 4px;
  font-family: AirbnbCerealBd;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #797a7e;
`
