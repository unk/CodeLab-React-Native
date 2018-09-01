import React from 'react';
import { Image, Picker, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';
import { observable } from "mobx";
import { observer } from "mobx-react";

const data = [
	{
		key: 'GinTonic',
		label: '진토닉',
		description: '진 + 토닉워터',
		image: 'https://t1.daumcdn.net/cfile/tistory/2318C83954F4214129',
	},
	{
		key: 'AMF',
		label: 'AMF',
		description: '진 + 럼 + 보드카 + 데낄라 + 블루큐라소 + 스윗 앤 샤워 + 사이다',
		image: 'https://vignette.wikia.nocookie.net/cocktails/images/a/ab/Adios_Mother_F%2Acker_%28AMF%29_-_How_to_make_Cocktail_Recipe_by_Drink_Lab_%28Popular%29/revision/latest?cb=20140429054353',
	},
	{
		key: 'Mojito',
		label: '모히토',
		description: '럼 + 라임 + 애플민트 + 설탕',
		image: 'https://www.teisseire.com/media/1747/mojitopng.png',
	},
];

@observer class App extends React.Component {
	@observable value = 'GinTonic';
	@observable count = 0;

	componentDidMount() {
		setInterval(() => this.value++, 1000);
	}

	render() {
		const item = _.find( data, element => element.key === this.value );
		return (
			<View style={styles.container}>
				<Text>{ this.count }초 지났습니다.</Text>
				<View style={{ flex: .3 }}>
					<Picker
						style={{ width: 300, height: 40 }}
						selectedValue={this.value}
						onValueChange={value => this.value = value}
					>
						<Picker.Item label="진토닉" value="GinTonic"/>
						<Picker.Item label="AMF" value="AMF"/>
						<Picker.Item label="모히토" value="Mojito"/>
					</Picker>
				</View>
				<View style={{ flex: .7 }}>
					<View>
						<Image
							source={{ uri: item.image }}
							style={{ width: 300, height: 300 }}
							resizeMode={'contain'}
						/>
					</View>
					<View>
						<Text>Name: {item.label}</Text>
					</View>
					<View>
						<Text>Description: {item.description}</Text>
					</View>
				</View>
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

@observer class Comp1 extends React.Component {
	@observable key = 'value';
}
@observer class Comp2 extends React.Component {
	@observable key = 'value';
}
@observer class Container extends React.Component {
	render() {
		return <View>
			<Comp1/>
			<Comp2/>
		</View>
	}
}