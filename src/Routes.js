import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Gallery';

const Routes = ({ query }) => {
	return (
		<Switch>
			<Route exact path='/'>
				<Gallery query={query} />
			</Route>
		</Switch>
	);
};

export default Routes;
