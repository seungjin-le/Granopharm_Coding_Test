import {Button} from '@mui/material'

type ConnectBtn = {
  text?: string
}

const ConnectButtonForm = ({text}: ConnectBtn) => {
  return (
    <Button variant='contained' className={'connectBtn'}>
      {text}
    </Button>
  )
}

export default ConnectButtonForm
