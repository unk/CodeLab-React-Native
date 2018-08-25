import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

export default class App extends React.Component {
	state = { list: [] };
	shuffle = () => {
		// 45개의 번호를 생성
		let numberList = [];
		_.times( 45, n => {
			numberList.push( n + 1 );
		} );
		// 섞어서
		numberList = _.shuffle( numberList );
		// 앞에서부터 여섯개만 사용
		numberList.length = 6;
		this.setState( { list: numberList } );
	};
	componentDidMount() {
		this.shuffle();
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={ styles.text }>{ this.state.list.join( ' ' ) }</Text>
				<View><Button title={ '다시' } onPress={ this.shuffle }/></View>
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
	text: {
		fontSize: 24,
	}
} );
