import React from 'react'
import { Grid, Typography } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

export const Rating = () => {
  return (
    <Grid container alignItems={'center'} lineHeight={1}>
      <Grid item>
        <StarRateRoundedIcon color={'primary'} />
        <StarRateRoundedIcon color={'primary'} />
        <StarRateRoundedIcon color={'primary'} />
        <StarRateRoundedIcon color={'primary'} />
        <StarRateRoundedIcon color={'primary'} />
      </Grid>
      <Grid item paddingLeft={1}>
        <Typography fontWeight={'bold'} component={'span'} color={'primary'}>
          4.8
        </Typography>
        <Typography component={'span'}> / 5 (24 reviews)</Typography>
      </Grid>
    </Grid>
  )
}
