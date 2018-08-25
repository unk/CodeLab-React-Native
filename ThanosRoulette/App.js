import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#000',
		fontSize: 24,
	}
} );

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			thanosNumber: null
		};

		this.execute();
	}
	result = () => {
		let resultText;
		if( this.state.thanosNumber === null ) {
			resultText = '';
		}
		else if( this.state.thanosNumber < 0.5 ) {
			resultText = '우주의 균형을 위해 먼지가..';
		}
		else {
			resultText = '당신은 살아남았습니다.';
		}
		return <Text style={ styles.text }>{ resultText }</Text>;
	};
	render() {
		console.log( 'this.state.thanosNumber', this.state.thanosNumber );
		return (
			<View style={styles.container}>
				{ this.result() }

				<View>
					<Button title={ "click!" } onPress={ this.click }/>
				</View>
			</View>
		);
	}
	click = () => {
		const newNumber = Math.random();
		this.setState( { thanosNumber: newNumber } );
		AsyncStorage.setItem( 'thanosNumber', newNumber.toString() );
	};
	execute = async () => {
		const result = await AsyncStorage.getItem( 'thanosNumber' );
		if( result ) {
			this.setState( { thanosNumber: Number( result ) } );
		}
		else {
			this.click();
		}
	};
}
