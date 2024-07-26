import { z } from 'zod'

export const ProjectSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('manage'),
    z.literal('delete'),
    z.literal('get'),
    z.literal('update'),
  ]),
  z.literal('Project'),
])

export type ProjectSubjectType = z.infer<typeof ProjectSubject>
