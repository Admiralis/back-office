import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const ComputerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="serialNumber" />
            <TextField source="processor" />
            <TextField source="ram" />
            <TextField source="condition" />
            <TextField source="computerStatus" />
            <TextField source="comments" />
        </SimpleShowLayout>
    </Show>
);