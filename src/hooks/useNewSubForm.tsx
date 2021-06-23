import { useCallback, useReducer } from "react"
import { PayloadInputsForm, Sub } from "../types"

interface FormState {
  inputValues: Sub
}

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
}

// Defined reducer
export const CHANGE_VALUE = "CHANGE_VALUE"
export const CLEAR = "CLEAR"

type FormReducerAction =
  | {
      type: typeof CHANGE_VALUE
      payload: {
        inputName: string
        inputValue: string
      }
    }
  | {
      type: typeof CLEAR
    }

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case CHANGE_VALUE:
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue,
      }

    case "CLEAR":
      return INITIAL_STATE

    default:
      return state
  }
}

export const useNewSubForm = () => {
  // return useReducer(formReducer, INITIAL_STATE)

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const changeForm = useCallback(
    (payload: PayloadInputsForm) => dispatch({ type: CHANGE_VALUE, payload }),
    []
  )
  const clearForm = useCallback(() => dispatch({ type: CLEAR }), [])

  return {
    formState: inputValues,
    changeForm,
    clearForm,
  }
}
