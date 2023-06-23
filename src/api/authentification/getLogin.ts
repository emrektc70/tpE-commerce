import axios from "axios";

const getLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:8080/Tp_ECommerce/rest/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getLogin;
