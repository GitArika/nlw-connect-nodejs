import { type FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { getSubscriberRankingPosition } from '@functions/get-subscriber-ranking-position'

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/position',
      {
        schema: {
          summary: 'Get subscrier ranking position',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            201: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { subscriberId } = request.params

        const result = await getSubscriberRankingPosition({ subscriberId })

        return reply.status(200).send(result)
      }
    )
  }
