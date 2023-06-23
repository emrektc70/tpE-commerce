import styles from "./styles.module.scss";

type Props = {
  article: any;

};

const View: React.FC<Props> = ({ article }) => {
  return (
    <div className={styles.shop}>
      <div className={styles.shopContent}>
        <div className={styles.box}>
          <h2> {article.nom}</h2>
          <div>
            {article.description}
          </div>
          <div className={styles.addBasket}>
            Ajouter au panier
          </div>
        </div>
      </div>
    </div>
  )
};

export default View;
