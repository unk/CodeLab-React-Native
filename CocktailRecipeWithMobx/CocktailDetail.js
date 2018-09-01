import React from 'react';
import { Image, Text, View } from 'react-native';
import data from './data';
import _ from 'underscore';
import config from './config';

export default class CocktailDetail extends React.Component {
	render() {
		const style = config.style;
		const key = this.props.navigation.state.params.key;
		const item = _.find( data, element => element.key === key );
		if( !item ) {
			return <Text style={ style.text }>데이터가 없습니다.</Text>;
		}
		return(
			<View>
				<Image source={{uri: item.image}} style={{width: 300, height: 300}} resizeMode={ 'contain' }/>
				<Text style={ style.text }>Label: {item.label}</Text>
				<Text style={ style.text }>Description: {item.description}</Text>
			</View>
		);
	}
}