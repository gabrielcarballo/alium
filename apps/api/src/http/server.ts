import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import {
  // jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { createAccount } from './routes/auth/create-account'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors)
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})

app.register(createAccount)
