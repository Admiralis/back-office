import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CourseShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="label" />
            <DateField source="startDate" />
            <TextField source="endDate" />
        </SimpleShowLayout>
    </Show>
);