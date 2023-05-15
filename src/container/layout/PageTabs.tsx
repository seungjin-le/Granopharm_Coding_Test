import React, {memo} from 'react'
import {Layout, Tabs} from 'antd'
import styled from 'styled-components'
import {options} from 'utils/PageTabOptions'
import {ChangeTab} from 'lodash'

/**
 * 페이지 탭 컴포넌트
 *
 * @param {Function} handleOnChangeTap - 탭 변경 핸들러 함수
 *
 * 지갑 주소를 통해 프로필 이미지 출력
 */
const PageTabs = ({handleOnChangeTap}: ChangeTab) => {
  return (
    <CustomAntTabs>
      {/* Ant Design Tabs 컴포넌트 */}
      <Tabs onTabClick={tabKey => handleOnChangeTap(tabKey)} items={options}></Tabs>
    </CustomAntTabs>
  )
}

export default memo(PageTabs)

// 스타일드 컴포넌트
const CustomAntTabs = styled(Layout)`
  display: flex;
  height: 76px;
  background-color: #fff;
  color: black;
  & .ant-tabs-nav {
    border-bottom: 2px solid #e4e4e4;
  }
  & .ant-tabs-tab {
    margin-left: 86px;
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
    padding: 18px 28px 2px 36px;
  }
  & .ant-tabs-tab.ant-tabs-tab-active div {
    color: #000 !important;
  }
  .ant-tabs-ink-bar {
    border-bottom: 2px solid #000;
    color: #000;
  }
`
