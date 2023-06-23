import axios from "axios";

const getArticleAll = async (): Promise<any> => {
    try {
        const response = await axios.get(`http://localhost:8080/Tp_ECommerce/rest/article/all`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default getArticleAll;
