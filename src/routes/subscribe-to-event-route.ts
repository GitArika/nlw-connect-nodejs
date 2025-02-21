import { type FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { subscribeToEvent } from '@functions/subscribe-to-event'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribe to an event',
        tags: ['Subscriptions'],
        description: 'Subscribe to an event',
        body: z.object({
          name: z.string().min(3),
          email: z.string().email(),
          referrerId: z.string().optional(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrerId } = request.body

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        referrerId,
      })

      return reply.status(201).send({ subscriberId })
    }
  )
}
