export const SET_SECURITY_FIELDS = "SET_SECURITY_FIELDS";

export const changeSecurityFields = (field: string, value: any) => ({
    type: SET_SECURITY_FIELDS,
    field,
    value,
});

