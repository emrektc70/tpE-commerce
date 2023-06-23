import { GET_ARTICLE_ALL, GET_ARTICLE_ID, GET_USER, GET_USERS, POST_ARTICLE, PUT_USER_ADRESS, PUT_USER_CARTE, PUT_USER_INFORMATION, changeGlobalFields } from "../action/global";
import getArticleAll from "../api/global/getAllArticle";
import getArticleId from "../api/global/getArticleId";
import getUser from "../api/global/getUserEmail";
import { getUsers } from "../api/global/getUsers";
import postArticle from "../api/global/postArticle";
import putUserAddresses from "../api/global/putUserAdress";
import putUserCarte from "../api/global/putUserCarte";
import putUserInfo from "../api/global/putUserInfo";


const globalMiddleware =
    (store: any) => (next: any) => async (action: any) => {
        switch (action.type) {
            case GET_USER:
                try {
                    const email = sessionStorage.getItem('email')
                    if (email) {
                        const res = await getUser(email);
                        store.dispatch(changeGlobalFields('nameUser', res.nom))
                        store.dispatch(changeGlobalFields('prenomUser', res.prenom))
                        store.dispatch(changeGlobalFields('profilUser', res.profil))
                        store.dispatch(changeGlobalFields('phoneUser', res.telephone))
                        store.dispatch(changeGlobalFields('adresseUser', res.adresses))
                        store.dispatch(changeGlobalFields('dateUser', res.dateNaissance))
                        store.dispatch(changeGlobalFields('idUser', res.id))

                        const dernierAdresse = res.adresses[res.adresses.length - 1];
                        const derniereCartePaiement = res.cartesPaiement[res.cartesPaiement.length - 1];
                        store.dispatch(changeGlobalFields('ville', dernierAdresse.ville));

                        store.dispatch(changeGlobalFields('rue', dernierAdresse.rue));
                        store.dispatch(changeGlobalFields('codePostal', dernierAdresse.codePostal));
                        store.dispatch(changeGlobalFields('numeroAdresse', dernierAdresse.numero));
                        store.dispatch(changeGlobalFields('cryptogramme', derniereCartePaiement.cryptogramme));
                        store.dispatch(changeGlobalFields('dateFinValidite', derniereCartePaiement.dateFinValidite));
                        store.dispatch(changeGlobalFields('nomProprietaire', derniereCartePaiement.nomProprietaire));
                        store.dispatch(changeGlobalFields('numero', derniereCartePaiement.numero));
                        store.dispatch(changeGlobalFields('prenomProprietaire', derniereCartePaiement.prenomProprietaire));

                        /* 
                        store.dispatch(changeGlobalFields('ville', res.adresses[0].ville))
                        store.dispatch(changeGlobalFields('rue', res.adresses[0].rue))
                        store.dispatch(changeGlobalFields('codePostal', res.adresses[0].codePostal))
                        store.dispatch(changeGlobalFields('numeroAdresse', res.adresses[0].numero))
                        store.dispatch(changeGlobalFields('cryptogramme', res.cartesPaiement[0].cryptogramme))
                        store.dispatch(changeGlobalFields('dateFinValidite', res.cartesPaiement[0].dateFinValidite))
                        store.dispatch(changeGlobalFields('nomProprietaire', res.cartesPaiement[0].nomProprietaire))
                        store.dispatch(changeGlobalFields('numero', res.cartesPaiement[0].numero))
                        store.dispatch(changeGlobalFields('prenomProprietaire', res.cartesPaiement[0].prenomProprietaire)) */

                    }

                } catch (error) {
                    console.dir(error);
                }
                break;

            case PUT_USER_INFORMATION: {
                try {
                    const { nameUser, prenomUser, dateUser, phoneUser } = store.getState().global;
                    const email = sessionStorage.getItem('email');
                    if (email) {
                        const res = await putUserInfo(email, { prenom: prenomUser, nom: nameUser, telephone: phoneUser, dateNaissance: dateUser });
                        store.dispatch(changeGlobalFields('nameUser', res.nom))
                        store.dispatch(changeGlobalFields('prenomUser', res.prenom))
                        store.dispatch(changeGlobalFields('dateUser', res.dateNaissance))
                        store.dispatch(changeGlobalFields('phoneUser', res.telephone))
                    }

                } catch (error) {
                    console.dir(error);
                }
                break
            }
            case PUT_USER_CARTE: {
                try {
                    const { idUser, nomProprietaire, prenomProprietaire, numero, dateFinValidite, cryptogramme } = store.getState().global;
                    const cartesPaiement = {
                        nomProprietaire: nomProprietaire,
                        prenomProprietaire: prenomProprietaire,
                        numero: numero,
                        dateFinValidite: dateFinValidite,
                        cryptogramme: cryptogramme
                    };
                    await putUserCarte(idUser, cartesPaiement);
                } catch (error) {
                    console.dir(error);
                }
                break
            }
            case PUT_USER_ADRESS: {
                try {
                    const { idUser, rue, ville, codePostal, numeroAdresse } = store.getState().global;
                    const adresses = {
                        rue: rue,
                        ville: ville,
                        codePostal: codePostal,
                        numero: numeroAdresse,
                    };
                    await putUserAddresses(idUser, adresses);

                } catch (error) {
                    console.error(error);
                }
                break;
            }

            case GET_USERS: {
                try {
                    const res = await getUsers()
                    store.dispatch(changeGlobalFields('users', res))
                } catch (error) {
                    console.dir(error);
                }
                break
            }
            // eslint-disable-next-line no-lone-blocks
            case POST_ARTICLE: {
                try {
                    const { nomArticle, descriptionArticle, photosArticle } = store.getState().global;
                    const res = await postArticle({ nom: nomArticle, description: descriptionArticle, photos: photosArticle, categorie: 1 })
                    console.log(res)
                } catch (e) {
                    console.dir(e);
                }
            }
                break

            case GET_ARTICLE_ID: {
                try {
                    const res = await getArticleId(action.id)
                    store.dispatch(changeGlobalFields('articleId', res))
                    console.log(res)
                } catch (error) {
                    console.dir(error);
                }
                break
            }
            case GET_ARTICLE_ALL: {
                try {
                    const res = await getArticleAll()
                    store.dispatch(changeGlobalFields('articles', res))
                    console.log(res)
                } catch (error) {
                    console.dir(error);
                }
                break
            }
            default:
                next(action);
        }
    };

export default globalMiddleware;
