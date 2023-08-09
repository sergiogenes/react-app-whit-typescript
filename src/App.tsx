import { useEffect, useRef, useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { usersResponseFromApi, type Sub } from './types'
import './App.css'
/* 
const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces',
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  },
] */

interface AppState {
  subs: Sub[]
}

function App(): JSX.Element {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchUsers = (): Promise<usersResponseFromApi> => {
      return fetch('https://dummyjson.com/users')
        .then((res) => res.json())
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

    fetchUsers().then(mapUsersToSubs).then(setSubs)
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs([...subs, newSub])
  }
  return (
    <div className='App' ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSubs} />
    </div>
  )
}

export default App
