import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Main from "./src";

export default function App() {
	return (
		<View>
			<StatusBar />
			<Main />
		</View>
	);
}
