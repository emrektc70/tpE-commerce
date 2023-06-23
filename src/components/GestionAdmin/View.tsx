import GestionAdminn from "./GestionAdmin";
import GestionMagasinnier from "./GestionMagasinnier";
import GestionUser from "./GestionUser";
import styles from "./styles.module.scss";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.gestionAdminn}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Gestion magasinier
            </h1>
            <div className={styles.separator} />
          </div>
          <GestionMagasinnier />
        </div>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Gestion user
            </h1>
            <div className={styles.separator} />
          </div>
          <GestionUser />
        </div>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Gestion admin
            </h1>
            <div className={styles.separator} />
          </div>
          <GestionAdminn />
        </div>
      </div>
    </div>
  )
};

export default View;
