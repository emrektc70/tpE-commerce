import styles from "./styles.module.scss";
import back from './assets/pexels-lisa-fotios-16129688.jpg'
type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.equipe}>
      <div className={styles.content}>
        <h2 className={styles.bigTitle}>
          Notre equipe
        </h2>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={back} width={364} height={364} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>
              Anthony
            </div>
            <div className={styles.description}>
              Dans ce projet, Anthony est responsable du développement de la partie back-end du site e-commerce. Il a utilisé Java pour créer les fonctionnalités essentielles nécessaires au bon fonctionnement du site. Anthony a mis en place des API RESTful pour gérer les produits, les utilisateurs et les commandes, et il a également intégré une base de données sécurisée pour stocker les informations. Grâce à sa maîtrise de Java et à son expertise en développement back-end, Anthony a contribué à créer une architecture solide, offrant des performances optimales et une expérience utilisateur fluide sur le site e-commerce.
            </div>
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.box}>
          <div className={styles.right}>
            <div className={styles.title}>
              Emre
            </div>
            <div className={styles.description}>
              Dans ce projet, Emre est développeur front-end et se charge de la partie front-end du site e-commerce. En utilisant React JS, il crée une interface utilisateur interactive et réactive, offrant aux utilisateurs une expérience fluide lors de leur navigation sur le site.

            </div>
          </div>
          <div className={styles.left}>
            <img src={back} width={364} height={364} />
          </div>
        </div>
      </div>
    </div>
  )

};

export default View;
