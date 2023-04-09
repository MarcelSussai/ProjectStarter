// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Mock01Data } from '@/endpoints/interfaces'
import { mock_01 } from '@/utils/mockResponses'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Mock01Data>
) {
  return new Promise((resolve) => {
    switch (req.method) {
      case 'GET': {
        try { setTimeout(() => {
          res.status(200).send(mock_01)
          return resolve(mock_01)
        }, 4000) }
        catch (err: any) {
          res.status(500).end()
          return resolve(err)
        }
      }
    }
  })
}
