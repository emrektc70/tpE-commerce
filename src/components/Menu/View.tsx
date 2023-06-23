import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import Commande from "../Commande";
import logo from './assets/EA.png';
import deco from "./assets/deco.png"
import user from "./assets/user.png"

type Props = {
  isOpen: boolean;
  handleClickBasket: VoidFunction;
  isLogT: boolean;
  handleClickLogin: VoidFunction;
  isLog: boolean;
  handleClickSignOut: VoidFunction;
  nameUser: string
  prenomUser: string
  profilUser: string
  handleClickEditProfil: VoidFunction
};

const View: React.FC<Props> = ({
  isOpen,
  handleClickBasket,
  isLogT,
  handleClickLogin,
  isLog,
  handleClickSignOut,
  nameUser,
  prenomUser,
  profilUser,
  handleClickEditProfil
}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to={"/"} className={styles.linkA}>
            <div className={styles.link}>
              <img src={logo} width={100} height={26} />
            </div>
          </Link>
          <Link to={"/article"} className={styles.linkA}>
            <div className={styles.link}>
              Article
            </div>
          </Link>
          {/*    <div className={styles.link}>
            A propos
          </div>
          <div className={styles.link}>
            Projet
          </div> */}
        </div>

        <div className={styles.right}>
          <div className={styles.link} onClick={handleClickBasket}>
            Panier
          </div>
          {
            isOpen &&
            <div className={styles.basket}>
              <div className={styles.basketContent}>
                <div className={styles.headerBasket}>
                  <div className={styles.title}>
                    Votre panier
                  </div>
                  <div className={styles.separator} />
                </div>
                <div className={styles.commande}>
                  <Commande />
                </div>
                <Button variant="contained" className={styles.valide} >Validé ma commande</Button>
              </div>
            </div>
          }
          {
            isLog ?
              <div className={styles.link} onClick={handleClickLogin}>
                <img src={user} width={20} />
                <div>
                  Bienvenue {prenomUser} {nameUser}
                </div>
              </div>
              :
              <Link to={'/login'} className={styles.link}>
                <div className={styles.link} >
                  Connexion
                </div>
              </Link>
          }
          {
            isLogT &&
            <div className={styles.loginMenu}>
              <div className={styles.loginHeader}>
                Profil
                <img src={user} width={20} />
              </div>
              <div className={styles.separator} />
              <div className={styles.linkLogin}>

                <div onClick={handleClickEditProfil} className={styles.loginRow}>Mon profil</div>

                {
                  profilUser === "ADMIN" &&
                  <Link to={"/gestionAdmin"} className={styles.linkA}>
                    <div className={styles.loginRow}>Mon espace admin</div>
                  </Link>
                }
                {
                  profilUser === "ADMIN" &&
                  <Link to={"/gestionAchat"} className={styles.linkA}>
                    <div className={styles.loginRow}>Ajouter un article</div>
                  </Link>
                }
              </div>
            </div>
          }
          {
            isLog &&
            <div onClick={handleClickSignOut} className={styles.out}>
              <img src={deco} width={24} />
            </div>
          }
        </div>
      </div>

    </div>
  )
};

export default View;
