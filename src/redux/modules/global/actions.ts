import { SET_LANGUAGE } from "../../actions-types"

export const setLanguage = (language: string) => {
  return {
    type: SET_LANGUAGE,
    language
  }
}