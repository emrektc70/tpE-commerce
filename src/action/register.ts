export const SET_REGISTER_FIELDS = "SET_REGISTER_FIELDS";
export const POST_REGISTER = "POST_REGISTER";

export const changeRegisterFields = (field: string, value: any) => ({
    type: SET_REGISTER_FIELDS,
    field,
    value,
});

export const postRegister = () => ({
    type: POST_REGISTER,
});
