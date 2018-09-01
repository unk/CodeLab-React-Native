import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MyButton from "./MyButton";
import MyCounter from './MyCounter';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<MyCounter />
				<MyButton
					label={'Label Text'}
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
