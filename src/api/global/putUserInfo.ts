import axios from "axios";

const putUserInfo = async (email: string, data: any) => {
    try {
        const response = await axios.patch(`http://localhost:8080/Tp_ECommerce/rest/users/updateUser/${email}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export default putUserInfo;
