import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { changeSecurityFields } from "../../action/security";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    isLog: state.security.isLog,
    nameUser: state.global.nameUser,
    prenomUser: state.global.prenomUser,
    profilUser: state.global.profilUser
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeSecurityFields: (field: string, value: any) => {
        dispatch(changeSecurityFields(field, value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
