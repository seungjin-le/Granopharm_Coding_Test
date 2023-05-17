import {SubText} from 'lodash'
import styled from 'styled-components'
import HeaderImageBtn from 'components/buttons/HeaderImageBtn'
import React from 'react'

const WalletBalance = ({text}: SubText) => {
  return (
    <BalanceBox onClick={(event: React.MouseEvent) => event.stopPropagation()}>
      <HeaderImageBtn src={'eth'} alt={'Cheveron Image'} size={25} className={'ethIcon'} background={'#ebedfc'} />
      <span className={'balance'}>{text} ETH</span>
    </BalanceBox>
  )
}

export default WalletBalance

const BalanceBox = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  & .ethIcon {
    cursor: default;
  }
  & .balance {
    height: 18px;
    margin: 4px 0 3px 8px;
    font-family: AirbnbCerealBd;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #444;
  }
`
