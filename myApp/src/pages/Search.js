import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ToastAndroid
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
//import Banner from 'react-native-banner';

class Search extends Component{
    constructor(props){
        super(props);
    
    }

    _onScroll(){
        
    }

    _onEndReached(){
        ToastAndroid.show('已经到底部了！',ToastAndroid.SHORT);
    }

    render(){
        return(
            <ScrollView
                ref="scrollView"
                horizontal={false}//设置是否是横向滚动
                onScroll={this._onScroll}
                removeClippedSubviews={true}//实验特性，可以优化滚动性能
                showsVerticalScrollIndicator={false}//是否显示垂直滚动条
            >
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
                <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
            </ScrollView>
        );
    }
}

const ScrollViewTestStyle = StyleSheet.create({
    scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',

    },
})

export default Search;