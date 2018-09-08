import React from 'react';
import { AsyncStorage, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { observer } from "mobx-react";
import { observable } from "mobx";
import uuid from 'uuid/v4';
import _ from 'underscore';

class Data {
	@observable text = '';
	@observable list = [];
}

@observer class App extends React.Component {
	data = new Data();

	async componentDidMount() {
		const json = await AsyncStorage.getItem( 'todoList' );
		const arr = JSON.parse( json );
		if( _.isArray( arr ) ) {
			this.data.list = arr;
		}
	}

	addItem = () => {
		if( this.data.text === '' ) return false;
		this.data.list.push( {
			key: uuid(),
			text: this.data.text,
		} );
		const json = JSON.stringify( this.data.list );
		AsyncStorage.setItem( 'todoList', json );
		this.data.text = '';
	};

	removeItem = id => {
		this.data.list = _.reject( this.data.list, item => item.key === id );
	};

	render() {
		return (
			<View style={ styles.container }>
				<SafeAreaView>
					<ScrollView>
						<FlatList data={ this.data.list }
								  extraData={ this.data.list.length }
								  renderItem={ ({item}) => (
									  <Button title={item.text}
											  onPress={() => this.removeItem( item.key )}/>
								  )}/>
						{this.data.list.length === 0 &&
						<Text style={{textAlign: 'center'}}>할일이 없다</Text>
						}
					</ScrollView>
					<View style={ styles.row }>
						<TextInput style={ styles.input } value={ this.data.text } onChangeText={ text => this.data.text = text }/>
						<Button title={ '추가' } onPress={ this.addItem }/>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row'
	},
	input: {
		width: 300,
		height: 40,
		paddingLeft: 12,
		paddingRight: 12,
		borderColor: '#999999',
		borderWidth: 1,
	}
} );
