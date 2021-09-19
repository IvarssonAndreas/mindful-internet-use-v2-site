import React from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/material'

export const TryoutButton = () => {
  return (
    <Button
      href={
        'https://chrome.google.com/webstore/detail/mindful-internet-use/hieolpjdilnibgamiafklnlcmagdngoo?hl=en'
      }
      color="primary"
      variant={'outlined'}
      sx={{
        padding: '11px 38px',
        borderRadius: '8px',
        boxShadow: 1,
      }}
    >
      <Box
        position={'relative'}
        sx={{
          transform: 'translateY(10px)',
          fontWeight: 700,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            color: '#fff',
            fontWeight: 400,
            fontSize: '0.7rem',
            transform: 'translateY(-15px)',
            left: 0,
          }}
          component={'span'}
        >
          Try out{' '}
        </Box>
        Version 1.0
      </Box>
    </Button>
  )
}
