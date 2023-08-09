import axios from 'axios'
import { type usersResponseFromApi, type Sub } from '../types'

const fetchUsers = (): Promise<usersResponseFromApi> => {
  return axios
    .get('https://dummyjson.com/users')
    .then((res) => res.data)
    .then((users) => users.users)
}

const mapUsersToSubs = (users: usersResponseFromApi): Array<Sub> => {
  return users.map((user) => {
    return {
      nick: user.username,
      subMonths: user.age,
      avatar: user.image,
      description: `${user.firstName} ${user.lastName}`,
    }
  })
}

export const getAllSubs = () => {
  return fetchUsers().then(mapUsersToSubs)
}
