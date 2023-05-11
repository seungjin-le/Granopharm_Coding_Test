import {TitleText} from 'lodash'
import * as React from 'react'
import Typography from '@mui/material/Typography'

const TitleTextForm = ({title}: TitleText) => {
  return (
    <Typography
      variant='h6'
      noWrap
      component='a'
      sx={{
        mr: 2,
        display: {xs: 'flex', md: 'flex'},
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none',
      }}
    >
      <span className={'Renaissance-Lab'}>{title}</span>
    </Typography>
  )
}

export default TitleTextForm
