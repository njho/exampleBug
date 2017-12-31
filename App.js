/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Button,
    Text,
    FlatList,
    View
} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [{name: 'Clean Up the Oceans'}, {name: 'three'}],

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Some State Change" onPress={()=>this.setState({...this.state, stateChange: 'someStateChange'})}/>
                <FlatList
                    data={this.state.cardData}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={(info) =>console.log(info)}
                    viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}

                    renderItem={({item}) =>
                        <View style={{width: width, borderColor: 'white', borderWidth: 20,}}>
                            <Text>Dogs and Cats</Text>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
