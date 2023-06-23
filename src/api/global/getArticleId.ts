import axios from "axios";

const getArticleId = async (id: string): Promise<any> => {
    try {
        const response = await axios.get(`http://localhost:8080/Tp_ECommerce/rest/article/get/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default getArticleId;
