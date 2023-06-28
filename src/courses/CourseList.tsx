import { Datagrid, DateField, List, TextField } from 'react-admin';

export const CourseList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="label" />
            <DateField source="startDate" />
            <TextField source="endDate" />
        </Datagrid>
    </List>
);