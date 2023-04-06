// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Themed } from '@/endpoints/interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'
import {obj} from '@/styles/makingColorsTheme/colorsThemedDefault.js'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Themed>
) {
  return new Promise((resolve) => {
    switch (req.method) {
      case 'GET': {
        try {
          res.status(200).send(obj)
          return resolve(obj)
        }
        catch (err: any) {
          res.status(500).end()
          return resolve(err)
        }
      }
    }
  })
}
