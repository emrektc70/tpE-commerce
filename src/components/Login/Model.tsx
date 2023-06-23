import { useCallback } from "react";
import View from "./View";
import { useNavigate } from "react-router-dom";

type Props = {
  postLogin: () => void;
  password: string;
  email: string;
  changeAuthentificationFields: (field: string, value: any) => void;
  // changeSecurityFields: (field: string, value: any) => void;
  //isLog: boolean;
};

const ViewModel: React.FC<Props> = ({
  postLogin,
  password,
  email,
  changeAuthentificationFields,

}) => {
  const navigation = useNavigate()

  const handleClickRegister = useCallback(() => {
    navigation(`/register`)
  }, [navigation])

  const loginData = useCallback(() => {
    postLogin();
  }, [postLogin]);

  const handleChangeEmail = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeAuthentificationFields("email", e.target.value);
    },
    [changeAuthentificationFields]
  );

  const handleChangePassword = useCallback(
    (e: React.BaseSyntheticEvent) => {
      changeAuthentificationFields("password", e.target.value);
    },
    [changeAuthentificationFields]
  );

  return (
    <View
      handleChangePassword={handleChangePassword}
      handleChangeEmail={handleChangeEmail}
      loginData={loginData}
      password={password}
      email={email}
      handleClickRegister={handleClickRegister}
    />
  )
};

export default ViewModel;
