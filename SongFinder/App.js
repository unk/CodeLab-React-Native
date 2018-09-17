import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import cheerio from 'react-native-cheerio';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Data {
	@observable list = [];
}

function encodeParams(obj) {
	let params = [];
	for (let p in obj) {
		params.push(p + '=' + encodeURIComponent(obj[p]));
	}
	return params.join('&');
}

@observer
class App extends React.Component {
	data = new Data();

	componentDidMount() {
		const url = 'https://www.ziller.co.kr/SingingroomSearchList.do';
		const params = {
			currpage: 1,
			searchRange: 'play',
			limit: 10,
			noraeSelect: 'artist_name',
			searchKeyword: '임창정',
			x: 0,
			y: 0,
		};
		axios.post( url, encodeParams( params ) )
			.then( response => {
				const $ = cheerio.load( response.data );
				let numbers = $( '.play_list_num01' );
				let data = this.data;
				// let titles = $( '.play_txt_01' );

				numbers.each( function( i, number ) {
					data.list.push( {
						key: $( this ).text(),
						number: $( this ).text(),
						title: $( this ).parent().find( '.play_txt_01' ).text()
					} );
				} );
				console.log( this.data.list );
			} )
			.catch( error => {
				console.log( error );
			} );
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<TextInput/>
				</View>

				<ScrollView>
					<FlatList data={ this.data.list }
							  extraData={ this.data.list.length }
							  renderItem={ ( { item } ) => {
								return <Button title={ `${item.number} ${item.title}` } onPress={ () => {} }/>
							  } }
					/>
				</ScrollView>
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

export default App;