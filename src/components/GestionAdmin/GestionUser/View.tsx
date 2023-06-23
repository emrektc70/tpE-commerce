import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import styles from "./styles.module.scss";
import { Switch } from '@material-ui/core';



type Props = {
  handleClickButtonRadio: VoidFunction;
  isOpen: boolean;
  rows: GridRowsProp;
  columns: GridColDef[]
};

const View: React.FC<Props> = ({
  handleClickButtonRadio,
  isOpen,
  rows,
  columns
}) => {
  return (
    <div className={styles.gestionUser}>
      <Switch defaultChecked value={isOpen} onChange={handleClickButtonRadio} />
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
