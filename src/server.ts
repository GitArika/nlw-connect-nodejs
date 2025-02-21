import { fastify } from 'fastify'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'

import { injectConfig } from '@config/app.config'
import { injectRoutes } from '@config/routes.config'
import { injectSwagger } from '@config/swagger.config'
import { env } from './env'

export type FastifyInstanceType = typeof app

const app = fastify({ logger: false }).withTypeProvider<ZodTypeProvider>()

injectConfig(app)
injectSwagger(app)
injectRoutes(app)

app.listen({ port: env.PORT }).then(() => {
  console.log(`Server listening on http://localhost:${env.PORT} 🚀`)
})
