import React from 'react';
import { observer } from "mobx-react";
import { Button, TextInput, View } from 'react-native';
import styles from '../common/styles';
import firebase from 'react-native-firebase';
import { observable } from "mobx";
import uuid from 'uuid/v4';
import moment from 'moment';
import store from "../common/store";

class Data {
	@observable content = '';
}

@observer class Write extends React.Component {
	data = new Data();

	submit = () => {
		const data = {
			key: uuid(),
			userId: store.authInfo.user.uid,
			timestamp: moment().format( 'x' ), // unix timestamp (ms)
			title: this.data.title,
			content: this.data.content,
		};
		firebase.database()
			.ref( 'logs/' + data.key )
			.set( data, () => {
				this.props.navigation.navigate( 'List' );
			} );
	};

	render() {
		return (
			<View style={ styles.container }>
				<TextInput style={ styles.input }
						   value={ this.data.title }
						   onChangeText={ text => this.data.title = text } />
				<TextInput multiline={ true }
						   value={ this.data.content }
						   onChangeText={ text => this.data.content = text }
						   style={{ borderWidth: 1, borderColor: '#e5e5e5', width: 300, height: 300 }}/>
				<Button title={ '완료' } onPress={ this.submit }/>
				<Button title={ '뒤로' } onPress={ () => this.props.navigation.navigate( 'List' ) }/>
			</View>
		);
	}
}

export default Write;