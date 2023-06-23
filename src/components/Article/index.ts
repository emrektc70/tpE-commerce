import { connect } from "react-redux";
import { Dispatch } from "redux";
import ViewModel from "./Model";
import { getAllArticle } from "../../action/global";
//import { RootState } from "app/store";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    articles: state.global.articles
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllArticle: () => {
        dispatch(getAllArticle())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
