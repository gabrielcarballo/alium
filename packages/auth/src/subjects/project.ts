import { z } from 'zod'

import { projectSchema } from '../models/project'

export const ProjectSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('manage'),
    z.literal('delete'),
    z.literal('get'),
    z.literal('update'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

export type ProjectSubjectType = z.infer<typeof ProjectSubject>
