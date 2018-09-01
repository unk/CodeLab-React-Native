import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MyButton from "./MyButton";

export default class App extends React.Component {
	state = {
		type: 'inch',
		value: '0',
	};
	originUnit = () => {
		return this.state.type === 'inch' ? 'inch' : 'cm';
	};
	targetUnit = () => {
		return this.state.type === 'inch' ? 'cm' : 'inch';
	};
	calc = () => {
		const unit = parseFloat( this.state.value );
		return this.state.type === 'inch' ? unit * 2.54 : unit / 2.54;
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Input Type</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<MyButton label={'Inch'} onPress={() => this.setState( { type: 'inch' } )}/>
					<MyButton label={'CM'} onPress={() => this.setState( { type: 'cm' } )}/>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center', margin: 24 }}>
					<TextInput
						style={{ marginRight: 8 }}
						value={this.state.value}
						onChangeText={text => this.setState( { value: text } )}
					/>
					<Text>{this.state.type}</Text>
				</View>
				<Text>
					{/* 0 inch -> 0 cm */}
					{`${this.state.value} ${this.originUnit()} -> ${this.calc()} ${this.targetUnit()}`}
				</Text>
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
