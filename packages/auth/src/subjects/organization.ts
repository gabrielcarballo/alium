import { z } from 'zod'

export const OrganizationSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('manage'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('transfer_ownership'),
  ]),
  z.literal('Organization'),
])

export type OrganizationSubjectType = z.infer<typeof OrganizationSubject>
