import axios from "axios";

const putUserAddresses = async (id: any, adresses: any) => {
    try {
        const response = await axios.patch(`http://localhost:8080/Tp_ECommerce/rest/users/updateAdr/${id}`, adresses);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default putUserAddresses;
