import { z } from 'zod'

import { organizationSchema } from '../models/organization'

export const OrganizationSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('manage'),
    z.literal('delete'),
    z.literal('update'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type OrganizationSubjectType = z.infer<typeof OrganizationSubject>
