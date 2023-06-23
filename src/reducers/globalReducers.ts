import { AnyAction } from "redux";
import { SET_GLOBAL_FIELDS } from "../action/global";

type State = {
    password: string;
    emailUser: string;
    nomUser: string;
    prenomUser: string;
    profilUser: string;
    phoneUser: string;
    dateUser: string
    adresseUser: any[];
    cartesPaiement: any[]
    idUser: string | number;
    nomProprietaire: string,
    prenomProprietaire: string,
    numero: string,
    dateFinValidite: string,
    cryptogramme: string,
    numeroAdresse: string,
    rue: string,
    ville: string,
    codePostal: string,
    users: any[],
    nomArticle: string,
    descriptionArticle: string,
    photosArticle: string,
    articleId: any[],
    articles: any[]
};

const initialState: State = {
    password: "",
    emailUser: "",
    nomUser: '',
    prenomUser: '',
    profilUser: '',
    phoneUser: '',
    dateUser: '',
    adresseUser: [],
    cartesPaiement: [],
    idUser: '',
    nomProprietaire: '',
    prenomProprietaire: '',
    numero: '',
    dateFinValidite: '',
    cryptogramme: '',
    numeroAdresse: '',
    rue: '',
    ville: '',
    codePostal: '',
    users: [],
    nomArticle: '',
    descriptionArticle: '',
    photosArticle: '',
    articleId: [],
    articles: []
};

const globalReducer = (
    state = initialState,
    action: AnyAction
): State => {

    switch (action.type) {
        case SET_GLOBAL_FIELDS:
            return {
                ...state,
                [action.field]: action.value,
            } as State;
        default:
            return state as State;
    }
};

export default globalReducer;
