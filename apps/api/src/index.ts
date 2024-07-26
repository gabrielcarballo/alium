import {
  defineAbilityFor,
  Organization,
  Project,
  projectSchema,
  User,
} from '@alium/auth'

const ability = defineAbilityFor({
  role: 'ADMIN',
  id: 'user-id',
})

const project = projectSchema.parse({
  __typename: 'Project',
  id: 'project-id',
  ownerId: 'user-id',
})

const UserCanInviteSomeoneElse = ability.can('create', 'Invite')
const UserCanDeleteSomeoneElse = ability.can('delete', 'User')

console.log(UserCanInviteSomeoneElse) // false
console.log(UserCanDeleteSomeoneElse) // false
