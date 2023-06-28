
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="courses" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="computers" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="loans" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

    