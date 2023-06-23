import Shop from "./Shop";
import styles from "./styles.module.scss";

type Props = {
  description: string;
  articles: any[]

};

const View: React.FC<Props> = ({ description, articles }) => {
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h2>
            Article
          </h2>
          <div>
            {description}
          </div>
        </div>
        <div className={styles.box}>
          {
            articles.map((article, index) => (
              <Shop article={article} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default View;
