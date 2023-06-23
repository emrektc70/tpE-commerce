import React, { useCallback, useEffect, useState } from "react";
import View from "./View";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  postAuthoLog: (password: string, email: string) => void
};

const ViewModel: React.FC<Props> = ({
  postAuthoLog
}) => {

  const navigation = useNavigate()


  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [error, setError] = useState<boolean>(true)
  const [errorCall, setErrorCall] = useState<boolean>(true)
  const [verifPassword, setVerifPassword] = useState('')



  useEffect(() => {
    if (verifPassword.length === 0 || nom.length === 0 || prenom.length === 0 || email.length === 0 || telephone.length === 0 || password.length === 0 || dateNaissance.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [dateNaissance.length, email, nom, password, prenom, telephone, verifPassword.length])

  const handleClickFirstName = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setNom(value);
  }, []);

  const handleClickPrenom = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setPrenom(value);
  }, []);

  const handleClickEmail = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setEmail(value);
  }, []);

  const handleClickTelephone = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setTelephone(value);
  }, []);

  const handleClickPasswordVerif = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setVerifPassword(value);
    console.log(value)
    if (value === password) {
      setError(false)
    } else {
      setError(true)
    }
  }, [password])

  console.log(password)

  const handleClickPassword = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    setPassword(value);
  }, []);

  const handleClickDateNaissance = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const value = e.target.value;
      setDateNaissance(value);
    },
    []
  );

  const handleRegister = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/Tp_ECommerce/rest/users/add",
        {
          nom: nom,
          prenom,
          email,
          telephone,
          password,
          dateNaissance,
          actif: true,
          profil: "CLIENT"
        }
      );
      setErrorCall(false)
      console.log(response);
      postAuthoLog(response.data.password, response.data.email)
      console.log(response.data.password, response.data.email)
    } catch (error) {
      setErrorCall(true)

      console.error("Erreur lors de la requête API :", error);
    }
  }, [nom, prenom, email, telephone, password, dateNaissance, postAuthoLog]);

  useEffect(() => {
    if (!error && !errorCall) {
      navigation('/')
    } else {
      console.log('error')
    }
  }, [error, errorCall, navigation])


  return (
    <View
      handleClickFirstName={handleClickFirstName}
      handleClickPrenom={handleClickPrenom}
      handleClickEmail={handleClickEmail}
      handleClickTelephone={handleClickTelephone}
      handleClickPassword={handleClickPassword}
      handleClickDateNaissance={handleClickDateNaissance}
      nom={nom}
      prenom={prenom}
      email={email}
      password={password}
      telephone={telephone}
      dateNaissance={dateNaissance}
      handleRegister={handleRegister}
      error={error}
      handleClickPasswordVerif={handleClickPasswordVerif}
      verifPassword={verifPassword}
    />
  );
};

export default ViewModel;
