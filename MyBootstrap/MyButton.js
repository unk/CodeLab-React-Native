import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class MyButton extends React.Component {
	style = StyleSheet.create( {
		button: {
			padding: 12,
			backgroundColor: '#999999',
		},
		text: {
			textAlign: 'center',
			fontSize: 24,
			color: '#ffffff',
		}
	} );
	onPress = () => {
		if ( this.props.onPress )
			this.props.onPress();
	};
	render() {
		let label = this.props.label;
		if( this.props.label === undefined ) {
			label = '{default label}';
		}
		return (
			<View style={this.style.button} borderRadius={8}>
				<TouchableOpacity onPress={this.onPress}>
					<Text style={this.style.text}>{label}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}