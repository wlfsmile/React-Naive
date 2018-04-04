import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Flex extends Component{
    render(){
        return(
            <View style={FlexStyle.container}>
                <Text style={FlexStyle.item}>1</Text>
                <Text style={FlexStyle.item}>2</Text>
                <Text style={FlexStyle.item}>3</Text>
                <Text style={FlexStyle.item}>4</Text>
                <Text style={FlexStyle.item}>5</Text>
                <Text style={FlexStyle.item}>6</Text>
                <Text style={FlexStyle.item}>7</Text>
                <Text style={FlexStyle.item}>8</Text>
                <Text style={FlexStyle.item}>9</Text>                                
            </View>
        )
    }
}

const FlexStyle = StyleSheet.create({
    container:{
        backgroundColor: "blue",
        height: 300,
        width: 300,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    item : {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})