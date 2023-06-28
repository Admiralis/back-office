
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {CourseList} from "./courses/CourseList";
import {CourseEdit} from "./courses/CourseEdit";
import {CourseShow} from "./courses/CourseShow";
import {ComputerList} from "./computers/ComputerList";
import {ComputerEdit} from "./computers/ComputerEdit";
import {ComputerShow} from "./computers/ComputerShow";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="courses" list={CourseList} edit={CourseEdit} show={CourseShow} create={CourseEdit}/>
		<Resource name="computers" list={ComputerList} edit={ComputerEdit} show={ComputerShow} create={ComputerEdit} />
		<Resource name="loans" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

    