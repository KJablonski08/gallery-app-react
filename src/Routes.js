import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhotoGallery from './components/PhotoGallery';

const Routes = ({ query }) => {
	return (
		<Switch>
			<Route exact path='/'>
				<PhotoGallery query={query} />
			</Route>
		</Switch>
	);
};

export default Routes;
