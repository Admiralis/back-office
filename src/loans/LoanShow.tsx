import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const LoanShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="startDate" />
            <DateField source="endDate" />
            <TextField source="depositState" />
            <TextField source="loanType" />
            <TextField source="loanStatus" />
            <TextField source="course.id" />
            <TextField source="computer.id" />
            <TextField source="student" />
        </SimpleShowLayout>
    </Show>
);