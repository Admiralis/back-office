import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const CourseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="label" />
            <DateInput source="startDate" />
            <TextInput source="endDate" />
        </SimpleForm>
    </Edit>
);