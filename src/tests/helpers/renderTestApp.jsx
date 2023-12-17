import React from "react";
import { setupStore } from "../../store/store";
import {Provider} from "react-redux";
import RoutesApp from "../../RoutesApp";
import {MemoryRouter} from "react-router-dom";

export const renderTestApp = (component, options) => {
  const initialState = options.initialState ? options.initialState :
    {}

	const store = setupStore(initialState);
	
	return (
		<Provider store={store}>
			<MemoryRouter initialEntries={[options?.route]}>
				<RoutesApp />
				{component}
			</MemoryRouter>
		</Provider>
	)
}