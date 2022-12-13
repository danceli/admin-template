import { AnyAction } from "redux";

import { GlobalState } from '../../interface/index';
import * as types from '../../actions-types';


const globalState: GlobalState = {
  assemblySize: "small",
  language: "",
  themeConfig: {
    primary: "#1890ff",
    isDark: false
  }
}

function reducer(state: GlobalState = globalState, action: AnyAction) {
  switch(action.type) {
    case types.SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    case types.SET_THEME_CONFIG:
      return {
        ...state,
        themeConfig: action.themeConfig
      }
    default:
      return state;
  }
}

export default reducer;
