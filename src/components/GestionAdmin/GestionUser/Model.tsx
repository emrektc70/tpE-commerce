import View from "./View";
import { useCallback, useState } from "react";
import { GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import styles from "./styles.module.scss";


type Props = {
  getUsers: VoidFunction;
  users: any[];
};

const ViewModel: React.FC<Props> = ({ getUsers, users }) => {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleClickButtonRadio = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  useCallback(() => {
    getUsers()
  }, [getUsers])



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'prenom', headerName: 'Prénom', width: 150 },
    { field: 'nom', headerName: 'Nom', width: 150 },
    { field: 'profil', headerName: 'Profil', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'dateNaissance', headerName: 'Date de Naissance', width: 150 }

  ];


  const rows: GridRowsProp = users.map((user) => ({
    id: user.id,
    prenom: user.prenom,
    nom: user.nom,
    profil: user.profil,
    email: user.email,
    dateNaissance: user.dateNaissance,
  }));


  return <View
    isOpen={isOpen}
    handleClickButtonRadio={handleClickButtonRadio}
    rows={rows}
    columns={columns}
  />;
};

export default ViewModel;
