import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import View from "./View";
import publicRoute from "./publicRoute";
import { PageEnum } from "./pageEnum";

type Props = {
  children: React.ReactNode;
  isLog: boolean;
  profilUser: string
};

const ViewModel: React.FC<Props> = ({ children, isLog, profilUser }) => {
  const [checkIsLog, setCheckIsLog] = useState<boolean>(false)

  const navigation = useNavigate()

  const location = useLocation();

  const pathName = useMemo(() => {
    return location.pathname;
  }, [location]);

  const isPublicRoute = useMemo(() => {
    return publicRoute.includes(pathName as PageEnum);
  }, [pathName]);

  useEffect(() => {
    const getEmail = sessionStorage.getItem('email');
    if (!isPublicRoute && !getEmail) {
      navigation(`/login`)
    }
    setCheckIsLog(false)
  }, [checkIsLog, isLog, isPublicRoute, navigation, pathName]);

  useEffect(() => {
    if (isLog && !checkIsLog) {
      if (profilUser === "ADMIN") {
        navigation(`/gestionAdmin`)

      } else {
        navigation(`/`)
      }
    }
  }, [isLog, checkIsLog, profilUser])


  return (
    <View checkIsLog={checkIsLog} >
      {children}
    </View>
  );
};

export default ViewModel;
