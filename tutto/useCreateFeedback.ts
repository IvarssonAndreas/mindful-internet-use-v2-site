import { useCallback, useState } from 'react'

const client = async (endpoint: string, { body }: any) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
  }

  const response = await window.fetch(endpoint, config)
  if (response.ok) {
    return await response.json()
  } else {
    const errorMessage = await response.text()
    return Promise.reject(new Error(errorMessage))
  }
}

type Feedback = {
  feedback: string
  email?: string
}

export const useCreateFeedback = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'ok' | 'error' | 'feedbackRequired'
  >('idle')

  const createFeedback = useCallback(({ feedback, email }: Feedback) => {
    if (feedback.length < 3) {
      setStatus('feedbackRequired')
      return
    }

    setStatus('loading')
    client('api/feedback', { body: { feedback, email } }).then(
      () => setStatus('ok'),
      () => setStatus('error')
    )
  }, [])

  return { status, createFeedback }
}
