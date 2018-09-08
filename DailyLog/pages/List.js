import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Button, FlatList, ScrollView, Text, View } from 'react-native';
import styles from '../common/styles';
import firebase from 'react-native-firebase';
import _ from 'underscore';
import moment from 'moment';
import store from "../common/store";

class Data {
	@observable list = [];
}

@observer class List extends React.Component {
	data = new Data();

	componentDidMount() {
		firebase.database().ref( 'logs' )
			.orderByChild( 'userId' )
			.equalTo( store.authInfo.user.uid )
			.once('value').then((snapshot) => {
				const logs = snapshot.val();
				console.log( 'logs', logs );
				_.each( logs, item => this.data.list.push( item ) );
		} )
	}

	render() {
		return (
			<View style={ styles.container }>
				<ScrollView>
					<FlatList data={this.data.list}
							  extraData={this.data.list.length}
							  renderItem={( { item } ) => {
								  let title = `[${moment( item.timestamp, 'x' ).format( 'YYYY-MM-DD' )}] `;
								  title += item.title;
								  return <Button title={title}
										  onPress={() => this.props.navigation.navigate( 'Log', { key: item.key } ) }/>
							  }}/>
				</ScrollView>
				<View>
					<Button title={ '새로 작성' }
							onPress={ () => this.props.navigation.navigate( 'Write' ) } />
				</View>
			</View>
		);
	}
}

export default List;