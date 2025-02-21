import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { FastifyInstanceType } from '@src/server'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'

export function injectSwagger(app: FastifyInstanceType) {
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
