import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Gallery';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Gallery />
			</Route>
		</Switch>
	);
};

export default Routes;
