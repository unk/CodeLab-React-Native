import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Alert, Button, Text, TextInput, View } from 'react-native';
import styles from '../common/styles';
import firebase from 'react-native-firebase';
import store from "../common/store";

class Data {
	@observable email = '';
	@observable password = '';
}

@observer class Login extends React.Component {
	data = new Data();

	login = () => {
		firebase.auth().signInAndRetrieveDataWithEmailAndPassword( this.data.email, this.data.password )
			.then( info => {
				store.authInfo = info;
				this.props.navigation.navigate( 'List' );
			} )
			.catch( error => {
				console.log( error );
				console.dir( error );
				Alert.alert( '로그인 실패' );
			} );
	};

	signUp = () => {
		firebase.auth().createUserAndRetrieveDataWithEmailAndPassword( this.data.email, this.data.password )
			.then( info => {
				store.authInfo = info;
				this.props.navigation.navigate( 'List' );
			} )
			.catch( error => {
				console.log( error );
				console.dir( error );
				Alert.alert( '계정 생성 실패' );
			} );
	};

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.formGroup }>
					<Text>이메일</Text>
					<TextInput value={ this.data.email }
							   style={ styles.input }
							   onChangeText={ text => this.data.email = text }/>
				</View>
				<View style={ styles.formGroup }>
					<Text>비밀번호</Text>
					<TextInput value={ this.data.password }
							   style={ styles.input }
							   secureTextEntry={ true }
							   onChangeText={ text => this.data.password = text }/>
				</View>
				<View style={ styles.row }>
					<Button title={ '로그인' } onPress={ this.login }/>
					<Button title={ '아이디 생성' } onPress={ this.signUp }/>
				</View>
			</View>
		);
	}
}

export default Login;