import type { NextApiRequest, NextApiResponse } from 'next'
import { firestore } from 'tutto/firebaseAdmin'
import { withSentry } from '@sentry/nextjs'

const feedback = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, feedback } = JSON.parse(req.body)

  await firestore().collection('feedback').doc().set({
    feedback,
    email,
    createdAt: firestore.FieldValue.serverTimestamp(),
  })

  res.status(200).json({ status: 'ok' })
}

export default withSentry(feedback)
