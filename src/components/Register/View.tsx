import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { TextField, Button } from '@material-ui/core';

type Props = {
  handleClickFirstName: (e: React.BaseSyntheticEvent) => void
  handleClickPrenom: (e: React.BaseSyntheticEvent) => void;
  handleClickEmail: (e: React.BaseSyntheticEvent) => void;
  handleClickTelephone: (e: React.BaseSyntheticEvent) => void;
  handleClickPassword: (e: React.BaseSyntheticEvent) => void;
  handleClickDateNaissance: (e: React.BaseSyntheticEvent) => void;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  telephone: string;
  dateNaissance: string;
  handleRegister: VoidFunction;
  error: boolean;
  handleClickPasswordVerif: (e: React.BaseSyntheticEvent) => void;
  verifPassword: string
};

const View: React.FC<Props> = ({
  handleClickFirstName,
  handleClickPrenom,
  handleClickEmail,
  handleClickTelephone,
  handleClickPassword,
  handleClickDateNaissance,
  nom,
  prenom,
  email,
  password,
  telephone,
  dateNaissance,
  handleRegister,
  error,
  handleClickPasswordVerif,
  verifPassword
}) => {
  return (
    <div className={styles.login}>
      <div className={styles.contentLogin}>
        <div className={styles.title}>
          Page de Register
        </div>
        <div className={styles.separatorContent}>
          <div className={styles.separator} />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Nom:
            </div>
            <TextField label="Nom" value={nom} variant="filled" placeholder="Nom" type="text" onChange={handleClickFirstName} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Prénom:
            </div>
            <TextField label="Prénom" value={prenom} variant="filled" placeholder="Prénom" type="text" onChange={handleClickPrenom} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Email:
            </div>
            <TextField label="Email" value={email} variant="filled" placeholder="exemple@gmail.fr" type="email" onChange={handleClickEmail} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Mot de passe
            </div>
            <TextField value={password} label="Mot de passe" variant="filled" type="password" placeholder="MotDePasse-123" onChange={handleClickPassword} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Verification mot de passe
            </div>
            <TextField value={verifPassword} label="Mot de passe" variant="filled" type="password" placeholder="MotDePasse-123" onChange={handleClickPasswordVerif} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Telephone
            </div>
            <TextField value={telephone} label="Telephone" variant="filled" type="text" onChange={handleClickTelephone} />
          </div>
          <div className={styles.row}>
            <div className={styles.subtitle}>
              Date de naissance
            </div>
            <TextField value={dateNaissance} label="Date de naissance" variant="filled" type="text" onChange={handleClickDateNaissance} />
          </div>
          <div className={styles.separatorContent}>
            <div className={styles.separator} />
          </div>
          <div className={styles.buttonContent}>
            <Link to={"/login"}>
              <Button variant="contained">J'ai un compte</Button>
            </Link>
            <Button variant="contained" className={styles.stylesButton} onClick={handleRegister} disabled={error}>
              Créer mon compte
            </Button>
          </div>
        </div>
      </div>
    </div >)
}

export default View;
