import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import Settings from "./Settings";

const Navigator = createStackNavigator( {
	List: {
		screen: CocktailList,
		navigationOptions: {
			title: '칵테일 목록'
		}
	},
	Detail: {
		screen: CocktailDetail,
		navigationOptions: {
			title: '상세'
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			title: '환경설정'
		}
	},
} );

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Navigator/>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
	},
} );
