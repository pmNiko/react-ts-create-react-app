import { useNewSubForm, CHANGE_VALUE, CLEAR } from "../hooks/useNewSubForm"
import { Sub } from "../types"

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

/**
 *
 * Component Form for new subscriptors
 *
 */
const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE);
  const { formState, changeForm, clearForm } = useNewSubForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(formState)
    clearForm()
  }

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target
    changeForm({ inputName: name, inputValue: value })
  }

  const { nick, subMonths, avatar, description } = formState

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={subMonths}
          type="number"
          name="subMonths"
          placeholder="Sub months"
          onChange={handleChange}
        />
        <input
          value={avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
          onChange={handleChange}
        />
        <textarea
          value={description}
          name="description"
          placeholder="A description"
          onChange={handleChange}
        />
        <button type="button" onClick={clearForm}>
          Clear the form!
        </button>
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  )
}

export default Form
