import { ability } from '@alium/auth'

const UserCanInviteSomeoneElse = ability.can('invite', 'User')
const UserCanDeleteSomeoneElse = ability.can('delete', 'User')

console.log(UserCanInviteSomeoneElse) // false
console.log(UserCanDeleteSomeoneElse) // false
