export const SET_AUTHENTIFICATION_FIELDS = "SET_AUTHENTIFICATION_FIELDS";
export const POST_LOGIN = "POST_LOGIN";
export const POST_AUTO_LOG = "POST_AUTO_LOG"

export const changeAuthentificationFields = (field: string, value: any) => ({
    type: SET_AUTHENTIFICATION_FIELDS,
    field,
    value,
});

export const postLogin = () => ({
    type: POST_LOGIN,
});

export const postAuthoLog = (email: string, password: string) => ({
    type: POST_AUTO_LOG,
    email,
    password
});
