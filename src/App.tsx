
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {CourseList} from "./courses/CourseList";
import {CourseEdit} from "./courses/CourseEdit";
import {CourseShow} from "./courses/CourseShow";
import {ComputerList} from "./computers/ComputerList";
import {ComputerEdit} from "./computers/ComputerEdit";
import {ComputerShow} from "./computers/ComputerShow";
import {LoanList} from "./loans/LoanList";
import {LoanEdit} from "./loans/LoanEdit";
import {LoanShow} from "./loans/LoanShow";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="courses" list={CourseList} edit={CourseEdit} show={CourseShow} create={CourseEdit} recordRepresentation="label" />
		<Resource name="computers" list={ComputerList} edit={ComputerEdit} show={ComputerShow} create={ComputerEdit} recordRepresentation="serialNumber" />
		<Resource name="loans" list={LoanList} edit={LoanEdit} show={LoanShow} create={LoanEdit} />
    </Admin>
);

    