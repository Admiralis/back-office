import { Edit, SimpleForm, TextInput } from 'react-admin';

export const ComputerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="serialNumber"  />
            <TextInput source="processor" />
            <TextInput source="ram" />
            <TextInput source="condition" />
            <TextInput source="computerStatus" />
            <TextInput source="comments" />
        </SimpleForm>
    </Edit>
);