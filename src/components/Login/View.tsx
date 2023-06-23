import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { TextField, Button } from '@material-ui/core';


type Props = {
  handleChangeEmail: (e: React.BaseSyntheticEvent) => void;
  handleChangePassword: (e: React.BaseSyntheticEvent) => void;
  loginData: VoidFunction;
  password: string;
  email: string;
  handleClickRegister: VoidFunction
};

const View: React.FC<Props> = ({
  handleChangeEmail,
  handleChangePassword,
  loginData,
  password,
  email,
  handleClickRegister
}) => {
  return (
    <div className={styles.login}>
      <div className={styles.contentLogin}>
        <div className={styles.title}>
          Page de login
        </div>
        <div className={styles.separatorContent}>
          <div className={styles.separator} />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Email:
            </div>
            <TextField value={email} id="filled-basic" label="Email" variant="filled" placeholder="exemple@gmail.fr" onChange={handleChangeEmail} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Mot de passe
            </div>
            <TextField value={password} id="filled-basic" label="Mot de passe" variant="filled" type="password" placeholder="MotDePasse-123" onChange={handleChangePassword} />
          </div>
          <div className={styles.separatorContent}>
            <div className={styles.separator} />
          </div>
          <div className={styles.buttonContent}>
            <div onClick={handleClickRegister} >
              <Button variant="contained" >Crée un compte</Button>
            </div>
            <Button variant="contained" className={styles.stylesButton} onClick={loginData}>
              Connecter
            </Button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default View;
