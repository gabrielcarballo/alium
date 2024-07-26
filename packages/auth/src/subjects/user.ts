import { z } from 'zod'

export const UserSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('delete'),
    z.literal('get'),
    z.literal('update'),
  ]),
  z.literal('User'),
])

export type UserSubjectType = z.infer<typeof UserSubject>
