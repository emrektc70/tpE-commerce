
import axios from "axios";

const postArticle = async (data: any) => {
    try {
        const response = await axios.post(`http://localhost:8080/Tp_ECommerce/rest/article/add`, data, {
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

export default postArticle;
