import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from './data';

export default class CocktailList extends React.Component {
	style = StyleSheet.create( {
		button: {
			padding: 12,
		},
		text: {
			textAlign: 'center',
		}
	} );
	go = key => {
		this.props.navigation.navigate( 'Detail', { key } );
	};
	renderItem = dataItem => {
		/*
		{
			...
			item: {
				key: 'GinTonic',
				label: '진토닉',
				description: '진 + 토닉워터',
				image: 'https://t1.daumcdn.net/cfile/tistory/2318C83954F4214129',
			}
			...
		}
		 */
		return <TouchableOpacity onPress={ () => this.go( dataItem.item.key )} style={this.style.button}>
			<Text style={this.style.text}>{ dataItem.item.label }</Text>
		</TouchableOpacity>
	};
	render() {
		return (
			<View style={{flex:1}}>
				<FlatList
					data={ data }
					renderItem={ this.renderItem }
				/>
			</View>
		)
	}
}