import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import Settings from "./Settings";
import config from './config';

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
	loadSettings = async () => {
		let largeText = await AsyncStorage.getItem( 'largeText' );
		if( largeText ) {
			largeText = Boolean( largeText );
		}
		else {
			largeText = false;
		}
		config.largeText = largeText;
	};
	constructor() {
		super();
		this.loadSettings();
	}
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
