import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  checkIsLog: boolean
};

const View: React.FC<Props> = ({ children, checkIsLog }) => {
  return <>
    {
      !checkIsLog && children
    }
  </>;
};

export default View;
