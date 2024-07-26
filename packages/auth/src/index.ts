import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'
import { z } from 'zod'

import { User } from './models/user'
import { permissions } from './permissions'
import { BillingSubject } from './subjects/billing'
import { InviteSubject } from './subjects/invite'
import { OrganizationSubject } from './subjects/organization'
import { ProjectSubject } from './subjects/project'
import { UserSubject } from './subjects/user'

const AppAbilitiesSchema = z.union([
  ProjectSubject,
  UserSubject,
  InviteSubject,
  BillingSubject,
  OrganizationSubject,
  z.tuple([z.literal('manage'), z.literal('all')]),
])

type AppAbilities = z.infer<typeof AppAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build()

  return ability
}
