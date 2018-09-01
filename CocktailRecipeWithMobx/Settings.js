import React from 'react';
import { AsyncStorage, Switch, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import config from './config';

@observer class Settings extends React.Component {
	update = value => {
		config.largeText = value;
		AsyncStorage.setItem( 'largeText', value.toString() );
	};
	render() {
		const style = config.style;
		return (
			<View>
				<Text style={ style.text }>환경 설정</Text>
				<Text style={ style.text }>텍스트 크게</Text>
				<Switch
					value={ config.largeText }
					onValueChange={ this.update }
				/>
			</View>
		)
	}
}

export default Settings;
