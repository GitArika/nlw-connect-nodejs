import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import fastifyCors from '@fastify/cors'
import { FastifyInstanceType } from '@src/server'

export function injectConfig(app: FastifyInstanceType) {
  app.setSerializerCompiler(serializerCompiler)
  app.setValidatorCompiler(validatorCompiler)

  app.register(fastifyCors)
}
