export const SET_GLOBAL_FIELDS = "SET_GLOBAL_FIELDS";
export const GET_USER = "GET_USER";
export const PUT_USER_INFORMATION = "PUT_USER_INFORMATION"
export const PUT_USER_CARTE = " PUT_USER_CARTE"
export const PUT_USER_ADRESS = "PUT_USER_ADRESS"
export const GET_USERS = "GET_USERS"
export const POST_ARTICLE = "POST_ARTICLE"
export const GET_ARTICLE_ID = "GET_ARTICLE_ID"
export const GET_ARTICLE_ALL = 'GET_ARTICLE_ALL'

export const changeGlobalFields = (field: string, value: any) => ({
    type: SET_GLOBAL_FIELDS,
    field,
    value,
});

export const getUser = () => ({
    type: GET_USER,
});


export const putUserInfo = () => ({
    type: PUT_USER_INFORMATION
})

export const putUserCarte = () => ({
    type: PUT_USER_CARTE
})

export const putUserAdresse = () => ({
    type: PUT_USER_ADRESS
})


export const getUsers = () => ({
    type: GET_USERS
})

export const postArticle = () => ({
    type: POST_ARTICLE
})

export const getArticleId = (id: string) => ({
    type: GET_ARTICLE_ID,
    id
})

export const getAllArticle = () => ({
    type: GET_ARTICLE_ALL,
})