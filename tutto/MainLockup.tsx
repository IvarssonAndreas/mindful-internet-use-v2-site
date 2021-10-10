import React from 'react'
import { Box, Typography } from '@mui/material'
import { Rating } from '@Rating'
import { TryoutButton } from '@TryoutButton'

export const MainLockup = () => {
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography marginBottom={1} variant={'h6'}>
          Under development
        </Typography>
        <Typography
          marginBottom={1}
          variant={'h3'}
          fontWeight="700"
          component="h1"
        >
          <Box component={'span'} color={'#FFBE7B'}>
            Mindful{' '}
          </Box>
          Internet Use
          <Box component={'span'} color={'#FFBE7B'}>
            {' '}
            2.0
          </Box>
        </Typography>
        <Typography variant={'h6'} component={'h2'}>
          A Chrome Extension that prevents mindless browsing
        </Typography>
      </Box>

      <Box>
        <TryoutButton />
      </Box>

      <Box marginTop={2}>
        <Rating />
      </Box>
    </Box>
  )
}
