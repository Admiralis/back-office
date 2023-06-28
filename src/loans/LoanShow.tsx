import {DateField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const LoanShow = () => {

   return (
       <Show>
        <SimpleShowLayout>
            <DateField source="startDate"/>
            <DateField source="endDate"/>
            <TextField source="depositState"/>
            <TextField source="loanType"/>
            <TextField source="loanStatus"/>
            <ReferenceField source="course.id" reference="courses" label="Formation"/>
            <ReferenceField source="computer.id" reference="computers" label="Ordinateur"/>
            <ReferenceField source="student.id" reference="students" label="Emprunteur"/>
        </SimpleShowLayout>
    </Show>
   )
};