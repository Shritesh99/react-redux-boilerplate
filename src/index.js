import React from "react";
import { Provider } from "react-redux";
import { Store } from "./redux";
import { Screens } from "./ui";

export default function Main() {
	return (
		<Provider store={Store}>
			<Screens />
		</Provider>
	);
}
