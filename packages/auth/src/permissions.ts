import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'User')
    can('manage', 'Project')
    can('manage', 'all')
  },
  MEMBER: (user, { can }) => {
    // can('invite', 'User')
    can('create', 'Project')
    can('manage', 'Project', { ownerId: user.id })
    can('create', 'Organization', { id: user.id })
  },
  BILLING: (_, { can }) => {
    can('get', 'Project')
  },
}
