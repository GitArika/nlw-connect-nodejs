import { accessInviteLinkRoute } from '@routes/access-invite-link-route'
import { getSubscriberInviteClicksRoute } from '@routes/get-subscriber-invite-clicks-route'
import { subscribeToEventRoute } from '@routes/subscribe-to-event-route'
import { getRankingRoute } from '@src/routes/get-ranking-route'
import { getSubscriberInviteCountRoute } from '@src/routes/get-subscriber-invite-count-route'
import { getSubscriberRankingPositionRoute } from '@src/routes/get-subscriber-ranking-position-route'
import { FastifyInstanceType } from '@src/server'

const routes = [
  accessInviteLinkRoute,
  getSubscriberInviteClicksRoute,
  subscribeToEventRoute,
  getSubscriberInviteCountRoute,
  getSubscriberRankingPositionRoute,
  getRankingRoute,
]

export function injectRoutes(app: FastifyInstanceType) {
  routes.forEach(route => app.register(route))

  app.get('/', async () => {
    return { hello: 'world' }
  })
}
