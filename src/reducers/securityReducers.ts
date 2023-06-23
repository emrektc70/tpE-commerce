import { AnyAction } from "redux";
import { SET_SECURITY_FIELDS } from "../action/security";

type State = {
  isLog: boolean;
};

const initialState: State = {
  isLog: false,
};

const securityReducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case SET_SECURITY_FIELDS:
      return {
        ...state,
        [action.field]: action.value,
      } as State;
    default:
      return state as State;
  }
};

export default securityReducer;
