import { connect } from "react-redux";
import { Dispatch } from "redux";
//import { RootState } from "app/store";
import ViewModel from "./Model";
import { getUser } from "../../action/global";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUser: () => {
        dispatch(getUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
