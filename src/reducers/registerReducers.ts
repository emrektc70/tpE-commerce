import { AnyAction } from "redux";
import { SET_REGISTER_FIELDS } from "../action/register";

type State = {
    passwordRegister: string;
    emailRegister: string;
    nom: string;
    prenom: string;
    telephone: string;
    profil: string;
    actif: boolean;
    dateNaissance: string
};

const initialState: State = {
    passwordRegister: "",
    emailRegister: "",
    nom: "",
    prenom: "",
    telephone: "",
    profil: "",
    actif: true,
    dateNaissance: ""
};

const registerReducer = (
    state = initialState,
    action: AnyAction
): State => {
    switch (action.type) {
        case SET_REGISTER_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default registerReducer;