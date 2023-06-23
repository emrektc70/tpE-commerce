import View from "./View";
import { useCallback, useEffect, useState } from "react";

type Props = {};

const ViewModel: React.FC<Props> = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClickButtonRadio = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return <View
    handleClickButtonRadio={handleClickButtonRadio}
    isOpen={isOpen}
  />;
};

export default ViewModel;
