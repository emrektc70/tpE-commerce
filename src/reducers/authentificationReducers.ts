import { AnyAction } from "redux";
import { SET_AUTHENTIFICATION_FIELDS } from "../action/authentification";

type State = {
    password: string;
    email: string;
};

const initialState: State = {
    password: "",
    email: "",
};

const authenticationReducer = (
    state = initialState,
    action: AnyAction
): State => {

    switch (action.type) {
        case SET_AUTHENTIFICATION_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default authenticationReducer;
