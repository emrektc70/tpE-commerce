import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { changeAuthentificationFields, postLogin } from "../../action/authentification";
import { RootState } from "../../store/store";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
    password: state.authentification.password,
    email: state.authentification.email,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postLogin: () => {
        dispatch(postLogin());
    },
    changeAuthentificationFields: (field: string, value: any) => {
        dispatch(changeAuthentificationFields(field, value));
    },
/*     changeSecurityFields: (field: string, value: any) => {
        dispatch(changeSecurityFields(field, value));
    }
 */});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
