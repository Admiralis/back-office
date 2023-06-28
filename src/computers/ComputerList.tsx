import { Datagrid, List, TextField } from 'react-admin';

export const ComputerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="serialNumber" />
            <TextField source="processor" />
            <TextField source="ram" />
            <TextField source="condition" />
            <TextField source="computerStatus" />
        </Datagrid>
    </List>
);