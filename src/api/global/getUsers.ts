import axios from "axios";

export const getUsers = async (): Promise<any> => {
    try {
        const response = await axios.get("http://localhost:8080/Tp_ECommerce/rest/users/all", {
            headers: {
                Authorization: "Bearer ADMIN"
            }
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
