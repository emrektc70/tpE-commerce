import Shop from "../Article/Shop";
import Equipe from "./Equipe";
import styles from "./styles.module.scss";
type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.home}>
      <div>
        <div className={styles.homeContent}>
          <div className={styles.title}>
            Desription
          </div>
          <div className={styles.box}>
            <div className={styles.boxLeft}>
              <div className={styles.boxContent}>
                <div className={styles.titleBox}>
                  Projet de cours java
                </div>
                <div className={styles.description}>
                  Ce projet de cours combine les langages Java et React pour développer des applications web complètes. Nous avons utiliser le Java pour la partie back-end, en construisant des API RESTful et en interagissant avec la base de données, tandis que React sera utilisé pour le front-end, créant des interfaces utilisateur interactives et réactives.                </div>
              </div>
            </div>
            <div className={styles.boxRight}>
              <div className={styles.boxContent}>
                <div className={styles.titleBox}>
                  Projet E-commerce
                </div>
                <div className={styles.description}>
                  Le projet consiste à créer un site e-commerce spécialisé dans la vente de jantes de voiture. Il offrira aux utilisateurs un espace personnel où ils pourront naviguer, choisir et acheter les jantes qui correspondent à leurs besoins et préférences. Le site proposera une large sélection de jantes de différentes marques, tailles et styles, offrant ainsi aux clients une variété d'options.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContent}>
            <Equipe />
          </div>
        </div>
      </div>
    </div>
  )

};

export default View;
