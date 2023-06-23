import { useCallback, useEffect, useMemo, useState } from "react";
import View from "./View";

type Props = {
  nameUser: string;
  prenomUser: string;
  phoneUser: string;
  adresseUser: any[];
  changeGlobalFields: (field: string, value: any) => void;
  dateUser: string;
  putUserInfo: VoidFunction;
  idUser: string | number;
  nomProprietaire: string,
  prenomProprietaire: string,
  numero: string,
  dateFinValidite: string,
  cryptogramme: string,
  putUserCarte: VoidFunction,
  numeroAdresse: string,
  rue: string,
  ville: string,
  codePostal: string,
  putUserAdresse: VoidFunction,
  getUsers: VoidFunction,
  users: any[],
};

const ViewModel: React.FC<Props> = ({
  nameUser,
  prenomUser,
  phoneUser,
  adresseUser,
  changeGlobalFields,
  dateUser,
  putUserInfo,
  idUser,
  nomProprietaire,
  prenomProprietaire,
  numero,
  dateFinValidite,
  cryptogramme,
  putUserCarte,
  numeroAdresse,
  rue,
  ville,
  codePostal,
  putUserAdresse,
  getUsers,
  users,
}) => {


  const [editFirst, setEditFirst] = useState<boolean>(true)
  const [editAdresse, setEditAdresse] = useState<boolean>(true)
  const [editCarte, setEditCarte] = useState<boolean>(true)


  const handleClickEditFirst = useCallback(() => {
    setEditFirst(!editFirst)
  }, [editFirst])

  const handleClickEditAdresset = useCallback(() => {
    setEditAdresse(!editAdresse)
  }, [editAdresse])

  const handleClickEditCarte = useCallback(() => {
    setEditCarte(!editCarte)
  }, [editCarte])

  const editNom = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('nameUser', value)
  }, [changeGlobalFields])


  const editPrenom = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('prenomUser', value)
  }, [changeGlobalFields])

  const editDateNaissance = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('dateUser', value)
  }, [changeGlobalFields])

  const editTelephone = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('phoneUser', value)
  }, [changeGlobalFields])


  const onnClickValidateProfil = useCallback(() => {
    putUserInfo()
  }, [putUserInfo])

  const editNamePrio = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('nomProprietaire', value)
  }, [changeGlobalFields])

  const editPrenomPrio = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('prenomProprietaire', value)
  }, [changeGlobalFields])

  const editNumeroCarte = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('numero', value)
  }, [changeGlobalFields])

  const editDateFinCarte = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('dateFinValidite', value)
  }, [changeGlobalFields])

  const editCryptoCarte = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('cryptogramme', value)
  }, [changeGlobalFields])

  const clickEditCarte = useCallback(() => {
    putUserCarte()
  }, [putUserCarte])

  const clickEditAdresse = useCallback(() => {
    putUserAdresse()
  }, [putUserAdresse])




  const editAdresseNumber = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('numeroAdresse', value)
  }, [changeGlobalFields])

  const editRue = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('rue', value)
  }, [changeGlobalFields])

  const editVille = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('ville', value)
  }, [changeGlobalFields])

  const editCodePostal = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('codePostal', value)
  }, [changeGlobalFields])

  useEffect(() => {
    getUsers()
  }, [getUsers])


  const userInfo = useMemo(() => {
    const email = sessionStorage.getItem('email');
    return users.find((emailData) => emailData.email === email);
  }, [users]);


  useEffect(() => {
    if (userInfo && userInfo.adresses && userInfo.adresses.length > 0 && userInfo.adresses && userInfo.adresses.length > 0) {
      const lastIndex = userInfo.adresses.length - 1;
      const lastAddress = userInfo.adresses[lastIndex];
      changeGlobalFields('rue', lastAddress.rue);
      changeGlobalFields('ville', lastAddress.ville);
      changeGlobalFields('numeroAdresse', lastAddress.numeroAdresse);
      changeGlobalFields('codePostal', lastAddress.codePostal);
      console.log(lastAddress.numeroAdresse);
    }
  }, [changeGlobalFields, userInfo]);


  return (
    <View
      nameUser={nameUser}
      prenomUser={prenomUser}
      handleClickEditFirst={handleClickEditFirst}
      editFirst={editFirst}
      phoneUser={phoneUser}
      adresseUser={adresseUser}
      handleClickEditAdresset={handleClickEditAdresset}
      editAdresse={editAdresse}
      handleClickEditCarte={handleClickEditCarte}
      editCarte={editCarte}
      editNom={editNom}
      editPrenom={editPrenom}
      editDateNaissance={editDateNaissance}
      editTelephone={editTelephone}
      dateUser={dateUser}
      onnClickValidateProfil={onnClickValidateProfil}
      nomProprietaire={nomProprietaire}
      prenomProprietaire={prenomProprietaire}
      numero={numero}
      dateFinValidite={dateFinValidite}
      cryptogramme={cryptogramme}
      editNamePrio={editNamePrio}
      editPrenomPrio={editPrenomPrio}
      editNumeroCarte={editNumeroCarte}
      editDateFinCarte={editDateFinCarte}
      editCryptoCarte={editCryptoCarte}
      clickEditCarte={clickEditCarte}
      numeroAdresse={numeroAdresse}
      rue={rue}
      ville={ville}
      codePostal={codePostal}
      clickEditAdresse={clickEditAdresse}
      editAdresseNumber={editAdresseNumber}
      editRue={editRue}
      editVille={editVille}
      editCodePostal={editCodePostal}

    />
  )
};

export default ViewModel;
