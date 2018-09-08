import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './common/styles';
import { createSwitchNavigator } from 'react-navigation';
import Login from "./pages/Login";
import List from "./pages/List";
import Write from "./pages/Write";
import Log from "./pages/Log";

const Router = createSwitchNavigator({
	Login: Login,
	List: List,
	Write: Write,
	Log: Log,
});

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SafeAreaView>
					<Router/>
				</SafeAreaView>
			</View>
		);
	}
}