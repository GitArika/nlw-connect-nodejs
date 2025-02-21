import { type FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { redis } from '@database/redis/client'
import { accessInviteLink } from '@functions/access-invite-link'
import { env } from '@src/env'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access an invite link and redirects user',
        tags: ['invites'],
        description: 'Subscribe to an event',
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLink({ subscriberId })

      console.log(await redis.hgetall('referral:access-count'))

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
