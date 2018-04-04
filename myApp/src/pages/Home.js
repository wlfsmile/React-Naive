import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

class Home extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
        this.state = {
            dataSource: ds,
            data: ['吴林霏','哈哈哈','你好啊','嘿嘿','哇哇哇']
        };
    }

    _renderRow(rowData,rowId,sectionId){
        return(
            <Text>
                {rowData + ' ' + rowId}
            </Text>
        );
    }

    render(){
        return(
            <View style={styles.list}>
                <ListView style={styles.item}
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData,sectionId,rowId)=>this._renderRow(rowData,rowId,sectionId)}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list:{
        backgroundColor:'blue',
    },
    item:{
        marginTop: 50,
    }
})

export default Home;