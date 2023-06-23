import { POST_AUTO_LOG, POST_LOGIN } from "../action/authentification";
import { changeSecurityFields } from "../action/security";
import getLogin from "../api/authentification/getLogin";

const authenticationMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        switch (action.type) {
            case POST_LOGIN:
                try {
                    const { email, password } = store.getState().authentification;
                    const res = await getLogin(email, password);
                    sessionStorage.setItem('email', res.email);
                    store.dispatch(changeSecurityFields('isLog', true))
                } catch (error) {
                    console.dir(error);
                }
                break
            // eslint-disable-next-line no-lone-blocks
            case POST_AUTO_LOG: {
                try {
                    getLogin(action.email, action.password);
                    sessionStorage.setItem('email', action.email);
                    store.dispatch(changeSecurityFields('isLog', true))
                } catch (error) {
                    console.dir(error);
                }
            }
                break;
            default:
                next(action);
        }
    };

export default authenticationMiddleware;
