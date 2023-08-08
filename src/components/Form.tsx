import { useState } from 'react'
import { type Sub } from '../types'

interface FormState {
  inputValues: Sub
}

interface Props {
  onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
}

export const Form = ({ onNewSub }: Props) => {
  const [inputValues, setInputValues] =
    useState<FormState['inputValues']>(INITIAL_STATE)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSub(inputValues)
    setInputValues(INITIAL_STATE)
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='nick'
          value={inputValues.nick}
          placeholder='nick'
          onChange={handleChange}
        />
        <input
          type='number'
          name='subMonths'
          value={inputValues.subMonths}
          placeholder='subMonths'
          onChange={handleChange}
        />
        <input
          type='text'
          name='avatar'
          value={inputValues.avatar}
          placeholder='avatar'
          onChange={handleChange}
        />
        <textarea
          name='description'
          value={inputValues.description}
          placeholder='description'
          onChange={handleChange}
        />
        <button type='submit'>Save new Subs!</button>
      </form>
    </div>
  )
}
