import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const LoanEdit = () => (
    <Edit>
        <SimpleForm>
            <DateInput source="startDate" />
            <DateInput source="endDate" />
            <TextInput source="depositState" />
            <TextInput source="loanType" />
            <TextInput source="loanStatus" />
            <TextInput source="course.id" />
            <TextInput source="computer.id" />
            <TextInput source="student" />
        </SimpleForm>
    </Edit>
);