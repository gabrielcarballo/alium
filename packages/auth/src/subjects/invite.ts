import { z } from 'zod'

export const InviteSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('manage'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('get'),
  ]),
  z.literal('Invite'),
])

export type InviteSubjectType = z.infer<typeof InviteSubject>
