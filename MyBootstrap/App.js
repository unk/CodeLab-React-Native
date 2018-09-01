import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MyButton from "./MyButton";
import MyCounter from './MyCounter';
import H1 from './H1';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<H1 content={ 'My Bootstrap' }/>
				<MyCounter />
				<MyButton
					label={'Show Alert'}
					onPress={() => Alert.alert( 'Title', 'message' )}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
} );
