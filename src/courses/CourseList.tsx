import { Datagrid, DateField, List, TextField } from 'react-admin';

export const CourseList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="label" />
            <DateField source="startDate" />
            <TextField source="endDate" />
        </Datagrid>
    </List>
);