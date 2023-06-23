import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <div className={styles.title}>
              Conatact
            </div>
            <div className={styles.link}>
              doranco@contact.fr
            </div>

          </div>
          <div className={styles.boxContent}>
            <div className={styles.title}>
              Profil
            </div>
            <Link to={"/editProfil"} className={styles.link}>
              <div className={styles.link}>
                Voir Mon profil
              </div>
            </Link>
          </div>
          <div className={styles.boxContent}>
            <div className={styles.title}>
              Article
            </div>
            <Link to={"/article"} className={styles.link}>
              <div className={styles.link}>
                Article
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
};

export default View;
