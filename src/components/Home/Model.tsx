import { useEffect } from "react";
import View from "./View";

type Props = {
  getUser: VoidFunction
};

const ViewModel: React.FC<Props> = ({
  getUser
}) => {

  useEffect(() => {
    getUser()
  }, [getUser])
  return <View />;
};

export default ViewModel;
