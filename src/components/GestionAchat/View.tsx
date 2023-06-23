import { Button, TextField } from "@material-ui/core";
import styles from "./styles.module.scss";

type Props = {
  addArticle: VoidFunction;
  nomArticle: string
  descriptionArticle: string
  photosArticle: string;
  editNomArticle: (e: React.BaseSyntheticEvent) => void;
  editDescriptionArticle: (e: React.BaseSyntheticEvent) => void;
  editPhotosArticle: (e: React.BaseSyntheticEvent) => void;
  profilUser: string;
};

const View: React.FC<Props> = ({
  addArticle,
  nomArticle,
  descriptionArticle,
  photosArticle,
  editNomArticle,
  editDescriptionArticle,
  editPhotosArticle,
  profilUser
}) => {
  return (
    <div className={styles.gestionAchat}>
      {
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.box}>
              <h1 className={styles.title}>
                Ajouter un article
              </h1>
              <div className={styles.separator} />
            </div>
          </div>
          <div className={styles.btn}>
            <TextField label="Nom du produit" variant="standard" value={nomArticle} onChange={editNomArticle} />
            <TextField label="Description" variant="standard" value={descriptionArticle} onChange={editDescriptionArticle} />
            <TextField label="Prix" variant="standard" value={photosArticle} onChange={editPhotosArticle} />
          </div>
          <div className={styles.add}>
            <Button variant="contained" className={styles.stylesButton} onClick={addArticle}>
              Valider
            </Button>
          </div>
        </div>
      }
    </div>
  )
};

export default View;
