import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../store/store";
//import { RootState } from "app/store";
import ViewModel from "./Model";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  isLog: state.security.isLog,
  email: state.authentification.email,
  profilUser: state.global.profilUser

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
