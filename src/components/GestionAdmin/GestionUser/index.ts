import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getUsers } from "../../../action/global";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    users: state.global.users
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => {
        dispatch(getUsers())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
