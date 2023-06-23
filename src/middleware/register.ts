import { POST_REGISTER, changeRegisterFields } from "../action/register";
import postRegister from "../api/register/postRegister";

const registerMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        switch (action.type) {
            case POST_REGISTER:
                try {
                    const { register } = store.getState();
                    const data = {
                        "nom": register.nom,
                        "prenom": register.prenom,
                        "emailRegister": register.emailRegister,
                        "telephone": register.telephone,
                        "passwordRegister": register.passwordRegister,
                        "dateNaissance": register.dateNaissance,
                        "actif": register.actif,
                        "profil": register.profil,

                    }
                    const res = await postRegister(data);
                    store.dispatch(changeRegisterFields("nom", res.nom));
                    store.dispatch(changeRegisterFields("passwordRegister", res.passwordRegister));
                    store.dispatch(changeRegisterFields("emailRegister", res.emailRegister));
                    store.dispatch(changeRegisterFields("prenom", res.prenom));
                    store.dispatch(changeRegisterFields("telephone", res.telephone));
                    store.dispatch(changeRegisterFields("dateNaissance", res.dateNaissance));
                    store.dispatch(changeRegisterFields("actif", true));
                    store.dispatch(changeRegisterFields("profil", "user"));

                    return res;
                } catch (error) {
                    console.dir(error);
                }
                break;
            default:
                next(action);
        }
    };

export default registerMiddleware;


