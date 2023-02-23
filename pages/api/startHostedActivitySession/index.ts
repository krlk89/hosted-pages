// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { type HostedLinkParams, environment } from '../../../types'

type Data = {
  session_id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { stakeholderId, pathwayId, tenantId } = req.query as HostedLinkParams

  const token = jwt.sign(
    {
      username: environment.apiGatewayConsumerName,
      feature: 'hosted-pages-link',
      context: {
        tenant_id: tenantId,
      },
    },
    environment.jwtAuthSecret,
    {
      issuer: environment.jwtAuthKey,
    }
  )

  const session = await fetch(environment.orchestrationApiUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          mutation StartHostedActivitySession($input: StartHostedActivitySessionInput!) {
            startHostedActivitySession(input: $input) {
              session_id
            }
          }
          `,
      variables: {
        input: {
          stakeholder_id: stakeholderId,
          pathway_id: pathwayId,
        },
      },
    }),
  })

  const session_response = await session.json()

  const { session_id } = session_response.data.startHostedActivitySession

  res.status(200).json({ session_id })
}
