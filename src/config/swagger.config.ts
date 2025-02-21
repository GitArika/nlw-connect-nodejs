import { FastifyInstance } from 'fastify'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'

import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'

export function injectSwagger(app: FastifyInstance) {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'NLW Connect',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
  })
  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })
}
