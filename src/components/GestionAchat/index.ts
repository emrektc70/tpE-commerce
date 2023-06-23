import { connect } from "react-redux";
import { Dispatch } from "redux";
import ViewModel from "./Model";
import { changeGlobalFields, postArticle } from "../../action/global";
//import { RootState } from "app/store";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: any) => ({
    nomArticle: state.global.nomArticle,
    descriptionArticle: state.global.descriptionArticle,
    photosArticle: state.global.photosArticle,
    profilUser: state.global.profilUser

});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    postArticle: () => {
        dispatch(postArticle())
    },
    changeGlobalFields: (field: string, value: any) => {
        dispatch(changeGlobalFields(field, value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
