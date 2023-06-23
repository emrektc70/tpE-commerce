import { Button, TextField, Switch } from "@material-ui/core";
import styles from "./styles.module.scss";

type Props = {
  nameUser: string;
  prenomUser: string;
  dateUser: string;
  handleClickEditFirst: VoidFunction;
  editFirst: boolean;
  phoneUser: string;
  adresseUser: any[];
  handleClickEditAdresset: VoidFunction
  editAdresse: boolean;
  handleClickEditCarte: VoidFunction
  editCarte: boolean;
  editNom: (e: React.BaseSyntheticEvent) => void;
  editPrenom: (e: React.BaseSyntheticEvent) => void;
  editDateNaissance: (e: React.BaseSyntheticEvent) => void;
  editTelephone: (e: React.BaseSyntheticEvent) => void;
  onnClickValidateProfil: VoidFunction;
  nomProprietaire: string,
  prenomProprietaire: string,
  numero: string,
  dateFinValidite: string,
  cryptogramme: string,
  editNamePrio: (e: React.BaseSyntheticEvent) => void;
  editPrenomPrio: (e: React.BaseSyntheticEvent) => void;
  editNumeroCarte: (e: React.BaseSyntheticEvent) => void;
  editDateFinCarte: (e: React.BaseSyntheticEvent) => void;
  editCryptoCarte: (e: React.BaseSyntheticEvent) => void;
  clickEditCarte: VoidFunction;
  numeroAdresse: string,
  rue: string,
  ville: string,
  codePostal: string,
  clickEditAdresse: VoidFunction;
  editAdresseNumber: (e: React.BaseSyntheticEvent) => void;
  editRue: (e: React.BaseSyntheticEvent) => void;
  editVille: (e: React.BaseSyntheticEvent) => void;
  editCodePostal: (e: React.BaseSyntheticEvent) => void;

};

const View: React.FC<Props> = ({
  nameUser,
  prenomUser,
  dateUser,
  handleClickEditFirst,
  editFirst,
  phoneUser,
  adresseUser,
  handleClickEditAdresset,
  editAdresse,
  handleClickEditCarte,
  editCarte,
  editNom,
  editPrenom,
  editDateNaissance,
  editTelephone,
  onnClickValidateProfil,
  nomProprietaire,
  prenomProprietaire,
  numero,
  dateFinValidite,
  cryptogramme,
  editNamePrio,
  editPrenomPrio,
  editNumeroCarte,
  editDateFinCarte,
  editCryptoCarte,
  clickEditCarte,
  numeroAdresse,
  rue,
  ville,
  codePostal,
  clickEditAdresse,
  editAdresseNumber,
  editRue,
  editVille,
  editCodePostal
}) => {
  return (
    <div className={styles.gestionAdminn}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Modifier mes informations
            </h1>
            <div className={styles.separator} />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.validation}>
            <div className={styles.titleValidation}>
              Je souhait modifier mes informations
            </div>
            <Switch value={editFirst} onClick={handleClickEditFirst} />
          </div>
          <div className={styles.boxRow}>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Prenom:
                </div>
                <TextField value={prenomUser} variant="filled" type="text" onChange={editPrenom} disabled={editFirst} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Nom:
                </div>
                <TextField value={nameUser} variant="filled" type="text" onChange={editNom} disabled={editFirst} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Date de naissance:
                </div>
                <TextField value={dateUser} variant="filled" type="text" onChange={editDateNaissance} disabled={editFirst} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Numéro tel:
                </div>
                <TextField value={phoneUser} variant="filled" type="text" onChange={editTelephone} disabled={editFirst} />
              </div>
            </div>
          </div>
          {
            !editFirst &&
            <div>
              <Button
                variant="outlined"
                className={styles.edit}
                onClick={onnClickValidateProfil}
              >
                Valider
              </Button>
            </div>
          }
        </div>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Adresse information
            </h1>
            <div className={styles.separator} />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.validation}>
            <div className={styles.titleValidation}>
              Je souhait modifier mes informations
            </div>
            <Switch value={undefined} onClick={handleClickEditAdresset} />
          </div>
          <div className={styles.boxRow}>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Numero:
                </div>
                <TextField value={numeroAdresse} variant="filled" type="text" onChange={editAdresseNumber} disabled={editAdresse} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Rue:
                </div>
                <TextField value={rue} variant="filled" type="text" onChange={editRue} disabled={editAdresse} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Ville:
                </div>
                <TextField value={ville} variant="filled" type="text" onChange={editVille} disabled={editAdresse} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Code postal:
                </div>
                <TextField value={codePostal} variant="filled" type="text" onChange={editCodePostal} disabled={editAdresse} />
              </div>
            </div>
          </div>
          {
            !editAdresse &&
            <div>
              <Button
                variant="outlined"
                className={styles.edit}
                onClick={clickEditAdresse}
              >
                Valider
              </Button>
            </div>
          }
        </div>
        <div className={styles.contentHeader}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Carte information
            </h1>
            <div className={styles.separator} />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.validation}>
            <div className={styles.titleValidation}>
              Je souhait modifier mes informations
            </div>
            <Switch value={editAdresse} onClick={handleClickEditCarte} />
          </div>
          <div className={styles.boxRow}>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Nom sur la carte:
                </div>
                <TextField value={nomProprietaire} variant="filled" type="text" onChange={editNamePrio} disabled={editCarte} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Prenom sur la carte:
                </div>
                <TextField value={prenomProprietaire} variant="filled" type="text" onChange={editPrenomPrio} disabled={editCarte} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <div className={styles.text}>
                  Numero:
                </div>
                <TextField value={numero} variant="filled" type="text" onChange={editNumeroCarte} disabled={editCarte} />
              </div>
              <div className={styles.box}>
                <div className={styles.text}>
                  Date de fin:
                </div>
                <TextField value={dateFinValidite} variant="filled" type="text" onChange={editDateFinCarte} disabled={editCarte} />
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.text}>
                Cryptogramme:
              </div>
              <TextField value={cryptogramme} variant="filled" type="text" onChange={editCryptoCarte} disabled={editCarte} style={{ width: "80px" }} className={styles.unique} />
            </div> *
          </div>
          {
            !editCarte &&
            <div>
              <Button
                variant="outlined"
                className={styles.edit}
                onClick={clickEditCarte}
              >
                Valider
              </Button>
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default View;
