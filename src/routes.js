import React from 'react';

import Home from './Home';
import PropDetailsFromListing from "./PropDetailsFromListing";
import PropDetailsFromListingForSell from "./PropDetailsFromListingForSell";
import CommercialRentPropDetails from "./CommercialRentPropDetails";
import CommercialSellPropDetails from "./CommercialSellPropDetails"
import AddNewProperty from "./AddNewProperty";
import LocalityDetailsForm from "./LocalityDetailsForm";


const routes = {
	'/': () => <Home />,
	// '/signin': () => <SignInSide />,
	'/prop/residential/rent/:agentId/:propId/:propType': ({ agentId, propId, propType }) =>
		<PropDetailsFromListing agentId={agentId} propId={propId} propType={propType} />,
	'/prop/residential/sell/:agentId/:propId/:propType': ({ agentId, propId, propType }) =>
		<PropDetailsFromListingForSell agentId={agentId} propId={propId} propType={propType} />,

	'/prop/commercial/rent/:agentId/:propId/:propType': ({ agentId, propId, propType }) =>
		<CommercialRentPropDetails agentId={agentId} propId={propId} propType={propType} />,

	'/prop/commercial/sell/:agentId/:propId/:propType': ({ agentId, propId, propType }) =>
		<CommercialSellPropDetails agentId={agentId} propId={propId} propType={propType} />,

	'/add': () => <AddNewProperty />,
	'/location': () => <LocalityDetailsForm />,
	// '/privacy': () => <Privacy />
};

export default routes;
