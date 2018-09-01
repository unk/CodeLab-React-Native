import { computed, observable } from 'mobx';
import { StyleSheet } from 'react-native';

class Config {
	@observable largeText = false;
	@computed get style() {
		return StyleSheet.create( {
			text: {
				fontSize: this.largeText ? 24 : 16
			}
		} );
	}
}

export default new Config();