import { Datagrid, List, TextField } from 'react-admin';

export const ComputerList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="serialNumber" label="SN" />
            <TextField source="processor" label="Processeur" />
            <TextField source="ram" label="RAM" />
            <TextField source="computerStatus" label="Statut" />
        </Datagrid>
    </List>
);