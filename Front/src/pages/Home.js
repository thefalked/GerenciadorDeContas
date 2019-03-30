import React, { Component } from 'react';

import { Text, View } from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title: 'Home Page'
    }
    render(){
        return(
            <View>
                <Text>Texto de Teste</Text>
            </View>
        );
    }
}