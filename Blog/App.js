import React from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, View, WebView } from 'react-native';

export default class App extends React.Component {
	onMessage = event => {
		const originData = event.nativeEvent.data;
		console.log( originData );
		const params = JSON.parse( originData );
		if( params.method === 'alert' ) {
			Alert.alert( 'Alert!', params.data.message );
		}
	};
	render() {
		const width = Dimensions.get( 'window' ).width;
		return (
			<View style={styles.container}>
				<SafeAreaView>
					<WebView style={{ width }}
							 onMessage={ this.onMessage }
							 source={{ uri: 'https://blog.grotesq.com' }}/>
				</SafeAreaView>
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
