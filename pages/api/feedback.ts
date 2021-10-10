import type { NextApiRequest, NextApiResponse } from 'next'
import { firestore } from 'tutto/firebaseAdmin'
import { withSentry } from '@sentry/nextjs'

const feedback = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, feedback } = JSON.parse(req.body)

    if (feedback === '500') {
      throw new Error('Developer triggered  500 error')
    }

    await firestore().collection('feedback').doc().set({
      feedback,
      email,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })
    res.status(200).json({ status: 'ok' })
  } catch (e) {
    res.status(500).json({ status: 'error' })
    throw new Error(e as any)
  }
}

export default withSentry(feedback)
