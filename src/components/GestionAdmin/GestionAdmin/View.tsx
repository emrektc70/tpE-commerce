import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import styles from "./styles.module.scss";
import { Button, Switch } from '@material-ui/core';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  {
    field: 'Supprimer',
    headerName: 'Modifier',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="outlined"
        className={styles.edit}
      // onClick={() => handleDeleteRow(params.row.id)}
      >
        Modifier
      </Button>
    ),
  },
  {
    field: 'Modifier',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="outlined"
        className={styles.delete}
      // onClick={() => handleDeleteRow(params.row.id)}
      >
        Supprimer
      </Button>
    ),
  },
]

const rows: GridRowsProp = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Jane', lastName: 'Smith' },
];
type Props = {
  handleClickButtonRadio: VoidFunction;
  isOpen: boolean;
};

const View: React.FC<Props> = ({
  handleClickButtonRadio,
  isOpen
}) => {
  return (
    <div className={styles.gestionUser}>
      <Switch defaultChecked value={isOpen} onChange={handleClickButtonRadio} className={styles.switch} />

      {
        isOpen &&
        <div className={styles.content}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
      }
    </div>
  );
};

export default View;
