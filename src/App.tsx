import { useEffect, useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { type Sub } from './types'
import './App.css'

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
]

interface AppState {
  subs: Sub[]
}

function App(): JSX.Element {
  const [subs, setSubs] = useState<AppState['subs']>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSubs([...subs, newSub])
  }
  return (
    <div className='App'>
      <h1>midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSubs} />
    </div>
  )
}

export default App
