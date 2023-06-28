import { Datagrid, DateField, List, TextField } from 'react-admin';

export const LoanList = () => (
    <List>
        <Datagrid rowClick="edit">
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="depositState" />
            <TextField source="loanType" />
            <TextField source="loanStatus" />
            <TextField source="course.id" />
            <TextField source="computer.id" />
            <TextField source="student" />
        </Datagrid>
    </List>
);