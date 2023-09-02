import {ArrayField, Show, SimpleShowLayout, TextField, useRecordContext, useShowContext} from 'react-admin';
import React from "react";

export const ComputerShow = () => {

    const { record, isLoading } = useShowContext();

    if (!isLoading) {console.log(record)}

    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="serialNumber" label="SN"/>
                <TextField source="processor" label="Processeur"/>
                <TextField source="ram" label="RAM"/>
                <TextField source="condition" label="Etat"/>
                <TextField source="computerStatus" label="Statut"/>
                <ArrayField source="comments" label="Commentaires">
                    <TextField source="content"/>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
};