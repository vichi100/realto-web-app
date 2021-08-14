import React from 'react';

import Home from './Home';
import PropDetailsFromListing from "./PropDetailsFromListing";
import AddNewProperty from "./AddNewProperty";
import LocalityDetailsForm from "./LocalityDetailsForm";


const routes = {
	'/': () => <Home />,
	// '/signin': () => <SignInSide />,
	'/prop/:agentId/:propId/:propType': ({ agentId, propId, propType }) =>
		<PropDetailsFromListing agentId={agentId} propId={propId} propType={propType} />,
	'/add': () => <AddNewProperty />,
	'/location': () => <LocalityDetailsForm />,
	// '/privacy': () => <Privacy />
};

export default routes;
