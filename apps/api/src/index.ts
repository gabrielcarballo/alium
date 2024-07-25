import { defineAbilityFor } from '@alium/auth'

const ability = defineAbilityFor({
  role: 'ADMIN',
})

const UserCanInviteSomeoneElse = ability.can('invite', 'User')
const UserCanDeleteSomeoneElse = ability.can('delete', 'User')

console.log(UserCanInviteSomeoneElse) // false
console.log(UserCanDeleteSomeoneElse) // false
