import { NextPage } from 'next'
import React from 'react'
import PlausibleProvider from 'next-plausible'

import { Box } from '@mui/system'
import { Container } from '@mui/material'

import { Logo } from '@Logo'
import { FeedbackForm } from '@FeedbackForm'
import { MainLockup } from '@MainLockup'

const Home: NextPage = () => {
  return (
    <PlausibleProvider domain="mindfulinternetuse.com">
      <Box
        padding={2}
        sx={{
          borderTop: '4px solid',
          borderColor: 'primary.main',
          background:
            'linear-gradient(90.02deg, #002040 4.92%, #002042 36.46%, #002347  61.97%, #002752 99.98%)',
          minHeight: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            top: 24,
            left: 24,
            position: 'absolute',
          }}
        >
          <Logo />
        </Box>
        <Container
          maxWidth={'lg'}
          sx={{
            paddingTop: [20, 20, 0],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <MainLockup />
          <FeedbackForm />
        </Container>
      </Box>
    </PlausibleProvider>
  )
}

export default Home
