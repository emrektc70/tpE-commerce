import { connect } from "react-redux";
import { Dispatch } from "redux";
import ViewModel from "./Model";
import { changeGlobalFields, putUserCarte, putUserInfo, putUserAdresse, getUsers } from "../../action/global";
//import { RootState } from "app/store";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    nameUser: state.global.nameUser,
    prenomUser: state.global.prenomUser,
    phoneUser: state.global.phoneUser,
    adresseUser: state.global.adresseUser,
    dateUser: state.global.dateUser,
    idUser: state.global.idUser,
    nomProprietaire: state.global.nomProprietaire,
    prenomProprietaire: state.global.prenomProprietaire,
    numero: state.global.numero,
    dateFinValidite: state.global.dateFinValidite,
    cryptogramme: state.global.cryptogramme,
    numeroAdresse: state.global.numeroAdresse,
    rue: state.global.rue,
    ville: state.global.ville,
    codePostal: state.global.codePostal,
    users: state.global.users,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeGlobalFields: (field: string, value: any) => {
        dispatch(changeGlobalFields(field, value));
    },
    putUserInfo: () => {
        dispatch(putUserInfo())
    },
    putUserCarte: () => {
        dispatch(putUserCarte())
    },
    putUserAdresse: () => {
        dispatch(putUserAdresse())
    },
    getUsers: () => {
        dispatch(getUsers())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
