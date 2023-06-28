import {Datagrid, DateField, List, ReferenceField, TextField} from 'react-admin';

export const LoanList = () => (
    <List>
        <Datagrid rowClick="show">
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="depositState" />
            <TextField source="loanStatus" />
            <ReferenceField source="course.id" reference="courses" label="Formation" />
            <ReferenceField source="computer.id" reference="computers" label="Ordinateur" />
            <ReferenceField source="student.id" reference="students" label="Emprunteur" />
        </Datagrid>
    </List>
);