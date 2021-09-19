import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Rating } from '@Rating'
import { TryoutButton } from '@TryoutButton'

export const MainLockup = () => {
  return (
    <Stack spacing={0}>
      <Stack spacing={1} marginBottom={2}>
        <Typography variant={'h6'}>Under development</Typography>
        <Typography variant={'h3'} fontWeight="700" component="h1">
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
      </Stack>

      <Stack spacing={2} paddingTop={4}>
        <Box>
          <TryoutButton />
        </Box>

        <Rating />
      </Stack>
    </Stack>
  )
}
