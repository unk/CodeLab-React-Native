import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class H1 extends React.Component {
	style = StyleSheet.create( {
		h1: {
			fontSize: 36,
		}
	} );
	render() {
		return (
			<Text style={ this.style.h1 }>
				{ this.props.content }
			</Text>
		);
	}
}
