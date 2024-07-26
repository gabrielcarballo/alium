import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

export async function createAccount(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/users', {
    schema: {
      body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
      }),
    },
    handler: async (request, _reply) => {
      const { email, password } = request.body
      console.log(email, password, '=> User Created!')
      return { message: 'User Created!', email, password }
    },
  })
}