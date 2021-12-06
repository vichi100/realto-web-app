import React from 'react';

import Home from './Home';
import PropDetailsFromListing from "./PropDetailsFromListing";
import PropDetailsFromListingForSell from "./PropDetailsFromListingForSell";
import CommercialRentPropDetails from "./CommercialRentPropDetails";
import CommercialSellPropDetails from "./CommercialSellPropDetails";
import CustomerDetailsCommercialBuyFromList from "./CustomerDetailsCommercialBuyFromList";
import Privacy from "./Privacy"

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

	// '/customer/commercial/buy/:agentId/:customerId': ({ agentId, customerId, propType }) =>
	// 	<CustomerDetailsCommercialBuyFromList agentId={agentId} customerId={customerId} propType={"commercial"} />,

	'/add': () => <AddNewProperty />,
	'/location': () => <LocalityDetailsForm />,
	'/privacy': () => <Privacy />
};

export default routes;

// http://192.168.0.101:7006/prop/residential/rent/7KeyZinEX5fPoShYYsSyn/OsnFxljEloORk3prFnLSe/residential

// http://192.168.0.101:7006/prop/residential/sell/15476a82-997a-4bef-bf1b-b1236f6c177e/kr0MiOHNc7qV-Mj67Fall/residential

// http://192.168.0.101:7006/prop/commercial/rent/15476a82-997a-4bef-bf1b-b1236f6c177e/c402312e-d1fb-405e-bb39-0c1700765fc5/commercial

// http://192.168.0.101:7006/prop/commercial/sell/15476a82-997a-4bef-bf1b-b1236f6c177e/uBp3FJN7JRVkkBKgefcbn/commercial


// http://192.168.0.101:7006/customer/commercial/buy/15476a82-997a-4bef-bf1b-b1236f6c177e/a7fcb6d2-e976-4660-a1ba-4fbe692e1d16


// /prop/residential/rent/7KeyZinEX5fPoShYYsSyn/Rqr_p1MY9WsMAhRpM8aUe/residential


///prop/residential/rent/7KeyZinEX5fPoShYYsSyn/aSUqGiJmK7bcICS_doxk9/residential