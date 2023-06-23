import axios from "axios";

const getUser = async (email: string): Promise<any> => {
    try {
        const response = await axios.get(`http://localhost:8080/Tp_ECommerce/rest/users/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default getUser;
