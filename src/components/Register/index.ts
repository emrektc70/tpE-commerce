import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeRegisterFields, postRegister } from "../../action/register";
import ViewModel from "./Model";
import { postAuthoLog } from "../../action/authentification";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeRegisterFields: (field: string, value: any) => {
        dispatch(changeRegisterFields(field, value));
    },
    postRegister: () => {
        dispatch(postRegister());
    },
    postAuthoLog: (password: string, email: string) => {
        dispatch(postAuthoLog(email, password));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
