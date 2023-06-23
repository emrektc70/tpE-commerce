import { useNavigate } from "react-router-dom";
import View from "./View";
import { useCallback, useEffect, useState } from "react";

type Props = {
  isLog: boolean;
  changeSecurityFields: (field: string, value: any) => void;
  nameUser: string;
  prenomUser: string;
  profilUser: string
};

const ViewModel: React.FC<Props> = ({
  isLog,
  changeSecurityFields,
  nameUser,
  prenomUser,
  profilUser
}) => {

  console.log(profilUser)
  const navigation = useNavigate()

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLogT, setIsLog] = useState<boolean>(false)

  const handleClickBasket = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen])

  const handleClickLogin = useCallback(() => {
    setIsLog(!isLogT);
  }, [isLogT])

  const handleClickSignOut = useCallback(() => {
    sessionStorage.clear()
    localStorage.clear()
    changeSecurityFields('isLog', false)
    navigation(`/login`)
  }, [changeSecurityFields, navigation])

  useEffect(() => {
    if (sessionStorage.email && sessionStorage.email.length > 0) {
      changeSecurityFields('isLog', true);
    } else {
      changeSecurityFields('isLog', false);
    }
  }, [changeSecurityFields, sessionStorage]);

  const handleClickEditProfil = useCallback(() => {
    return navigation('/editProfil');
  }, [navigation])

  return <View
    isOpen={isOpen}
    handleClickBasket={handleClickBasket}
    isLogT={isLogT}
    handleClickLogin={handleClickLogin}
    isLog={isLog}
    handleClickSignOut={handleClickSignOut}
    prenomUser={prenomUser}
    nameUser={nameUser}
    profilUser={profilUser}
    handleClickEditProfil={handleClickEditProfil}
  />;
};

export default ViewModel;
