import React from 'react';
import { observer } from "mobx-react";
import { Button, Text, View } from 'react-native';
import styles from '../common/styles';
import firebase from 'react-native-firebase';
import { observable } from "mobx";
import uuid from 'uuid/v4';
import moment from 'moment';
import store from "../common/store";
import _ from "underscore";

class Data {
	@observable log = {};
}

@observer class Log extends React.Component {
	data = new Data();

	componentDidMount() {
		const key = this.props.navigation.state.params.key;
		firebase.database().ref( 'logs/' + key )
			.once('value').then((snapshot) => {
			const log = snapshot.val();
			this.data.log = log;
		} )
	}

	render() {
		return (
			<View style={ styles.container }>
				{ this.data.log.title !== undefined &&
				<View>
					<Text>{ this.data.log.title }</Text>
					<Text>{ `${this.data.log.content}` }</Text>
				</View>
				}
				<View>
					<Button title={ '뒤로' }
							onPress={ () => this.props.navigation.navigate( 'List' ) }/>
				</View>
			</View>
		);
	}
}

export default Log;