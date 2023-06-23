import axios from "axios";

const putUserCarte = async (id: string | number, cartesPaiement: any): Promise<any> => {
    try {
        const response = await axios.patch(`http://localhost:8080/Tp_ECommerce/rest/users/updateCp/${id}`, cartesPaiement);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default putUserCarte