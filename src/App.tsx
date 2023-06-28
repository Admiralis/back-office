
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import {CourseList} from "./courses/CourseList";
import {CourseEdit} from "./courses/CourseEdit";
import {CourseShow} from "./courses/CourseShow";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="courses" list={CourseList} edit={CourseEdit} show={CourseShow} create={CourseEdit}/>
		<Resource name="computers" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="loans" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

    