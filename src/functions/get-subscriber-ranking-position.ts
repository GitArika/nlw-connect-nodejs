import { redis } from '@database/redis/client'

interface GetSubscriberRankingPositionParams {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPositionParams) {
  const position = await redis.zrevrank('referral:ranking', subscriberId)

  if (position === null) {
    return {
      position: null,
    }
  }

  return {
    position: position + 1,
  }
}
