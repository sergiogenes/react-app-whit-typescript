import useNewSubForm from '../hooks/useNewSubForm'
import { type Sub } from '../types'

interface Props {
  onNewSub: (newSub: Sub) => void
}

export const Form = ({ onNewSub }: Props) => {
  //const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSub(inputValues)
    dispatch({ type: 'clear' })
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value,
      },
    })
  }

  const handleClick = () => {
    dispatch({ type: 'clear' })
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
        <button type='button' onClick={handleClick}>
          Clear the Form
        </button>
        <button type='submit'>Save new Subs!</button>
      </form>
    </div>
  )
}
