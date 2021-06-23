export interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}


/**
 * interfaz fetch to api rest jsonplacheholder
 */
export type SubsResponseFromApi = Array<{
  title: string
  albumId: number
  thumbnailUrl: string
  url: string
}>

export interface PayloadInputsForm {
  inputName: string
  inputValue: string
}