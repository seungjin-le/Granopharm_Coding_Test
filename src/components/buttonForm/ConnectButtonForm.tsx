import {Button} from 'antd'
import styled from 'styled-components'

type ConnectBtn = {
  text?: string
}

const ConnectButtonForm = ({text}: ConnectBtn) => {
  return (
    <CustomAntConnectBtn className={'connectBtn'}>
      <span>{text}</span>
    </CustomAntConnectBtn>
  )
}

export default ConnectButtonForm

const CustomAntConnectBtn = styled(Button)`
  width: 204px;
  height: 41px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  padding: 11px 18px;
  border-radius: 10px;
  background-color: #2a2c33;
  & span {
    width: 170px;
    height: 19px;
    flex-grow: 0;
    //font-family: AirbnbCereal_W_Bd-;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: -0.1px;
    text-align: center;
    color: #fff;
  }
`
