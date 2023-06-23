import axios from "axios";

const postRegsiter = async (data: any): Promise<any> => {
    try {
        const response = await axios.post("http://localhost:8080/Tp_ECommerce/rest/users/add", data);
        return response.data;
    } catch (error) {
        (console.log(error))
    }
};

export default postRegsiter;
