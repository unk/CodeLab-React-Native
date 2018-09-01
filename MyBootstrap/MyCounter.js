import React from 'react'
import {View, Text} from 'react-native';

export default class MyCounter extends React.Component {
    state = {seconds:0};

    componentDidMount() {
        setInterval(()=>{this.setState({seconds:this.state.seconds+1})},1000);
    }
    render() {
        return (<View>
            <Text>{this.state.seconds}</Text>
            </View>
        );
    }
}