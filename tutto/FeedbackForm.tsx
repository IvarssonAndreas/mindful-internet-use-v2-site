import {
  Box,
  CircularProgress,
  FormHelperText,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useCreateFeedback } from '@useCreateFeedback'
import { ReactNode } from 'react'

import { keyframes } from '@emotion/react'

export const FeedbackForm: () => JSX.Element = () => {
  const { status, createFeedback } = useCreateFeedback()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      feedback: { value: string }
    }
    const email = target.email.value
    const feedback = target.feedback.value
    createFeedback({
      feedback,
      email,
    })
  }

  if (status === 'ok') {
    return (
      <CardWrapper height={581}>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Typography
            component={'h2'}
            sx={{
              animation: `${fadeIn} 1.5s  ease-in-out`,
              fontSize: 36,
            }}
            color={'primary.main'}
          >
            Thank{' '}
            <Box color={'secondary.contrastText'} component={'span'}>
              you
            </Box>
          </Typography>
        </Box>
      </CardWrapper>
    )
  }

  return (
    <CardWrapper>
      <Box component={'form'} onSubmit={onSubmit}>
        <Typography
          sx={{
            fontWeight: 400,
            textAlign: 'left',
          }}
          variant={'h5'}
        >
          What should{' '}
          <Box
            sx={{
              fontWeight: 700,
              textAlign: 'left',
              color: 'primary.main',
            }}
            component={'span'}
          >
            {' '}
            2.0{' '}
          </Box>
          include?
        </Typography>

        <Box
          marginTop={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HelpOutlineIcon fontSize={'small'} sx={{ color: 'primary.main' }} />{' '}
          <Typography lineHeight={0} fontSize={'small'} marginLeft={1}>
            What should be
            <Box component={'strong'} sx={{ fontWeight: 700 }}>
              {' '}
              kept
            </Box>
            ?
          </Typography>
        </Box>
        <Box
          marginTop={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HelpOutlineIcon fontSize={'small'} sx={{ color: 'primary.main' }} />{' '}
          <Typography lineHeight={0} fontSize={'small'} marginLeft={1}>
            What could be
            <Box component={'strong'} sx={{ fontWeight: 700 }}>
              {' '}
              removed
            </Box>
            ?
          </Typography>
        </Box>
        <Box
          marginTop={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HelpOutlineIcon fontSize={'small'} sx={{ color: 'primary.main' }} />{' '}
          <Typography lineHeight={0} fontSize={'small'} marginLeft={1}>
            What should be
            <Box component={'strong'} sx={{ fontWeight: 700 }}>
              {' '}
              added
            </Box>
            ?
          </Typography>
        </Box>

        <Box marginTop={3}>
          <InputLabel
            sx={{ textAlign: 'left', color: '#fff' }}
            htmlFor="feedback"
          >
            Suggestions, thoughts, feedback etc.
          </InputLabel>
          <FormHelperText
            sx={{ color: 'secondary.light' }}
            id="feedback-helper"
          >
            Nothing is to small
          </FormHelperText>
          <TextField
            variant={'filled'}
            minRows={8}
            maxRows={8}
            placeholder="I think that..."
            sx={{
              width: '100%',

              padding: 0,
              boxShadow: 'inset 1px 2px 3px rgba(0, 0, 0, 0.25)',
            }}
            multiline
            id="feedback"
            name={'feedback'}
            aria-describedby="feedback-helper"
          />
        </Box>
        <Box marginTop={3}>
          <InputLabel sx={{ textAlign: 'left' }} htmlFor="email">
            Email (optional)
          </InputLabel>
          <FormHelperText sx={{ color: 'secondary.light' }} id="email-helper">
            No spam, promise! However, I might reach out to with some more
            questions
          </FormHelperText>
          <TextField
            type={'email'}
            variant={'filled'}
            placeholder="henry.gondorff.miu@gmail.com"
            sx={{
              width: '100%',
              padding: 0,
              boxShadow: 'inset 1px 2px 3px rgba(0, 0, 0, 0.25)',
            }}
            id="email"
            name={'email'}
            aria-describedby="email-helper"
          />
        </Box>

        {status === 'error' ? (
          <FormHelperText
            sx={{ color: 'error.main', fontSize: 16 }}
            role="alert"
            color={'error'}
          >
            Something went wrong, please try again
          </FormHelperText>
        ) : null}

        {status === 'feedbackRequired' ? (
          <FormHelperText
            sx={{ color: 'error.main', fontSize: 16 }}
            role="alert"
            color={'error'}
          >
            At least some feedback is required
          </FormHelperText>
        ) : null}

        {status !== 'loading' ? (
          <Box marginTop={3} sx={{ textAlign: 'right' }}>
            <Button
              type={'submit'}
              color="primary"
              variant={'contained'}
              sx={{
                padding: '8px 40px',
                fontWeight: 'bold',
                borderRadius: '8px',
                boxShadow: 1,
              }}
            >
              Send
            </Button>
          </Box>
        ) : (
          <Box marginTop={3}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </CardWrapper>
  )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
  
`

const CardWrapper = ({
  children,
  height = 'auto',
}: {
  children?: ReactNode
  height?: 'auto' | number
}) => (
  <Box
    paddingX={2}
    paddingY={3}
    height={height}
    sx={{
      boxShadow: 4,
      textAlign: 'center',
      borderRadius: 2,
      width: 'min(100%, 420px)',
    }}
  >
    {children}
  </Box>
)
