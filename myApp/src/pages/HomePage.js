import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Search from './Search';
import Mine from './Mine';
import HomeIcon from '../../images/home.png';
import SearchIcon from '../../images/search.png';


export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab :'home'
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="主页"  
                        selectedTitleStyle={{color: '#63B8FF'}} 
                        renderIcon={() => <Image source={HomeIcon} />}
                        renderSelectedIcon={() => <Image source={HomeIcon} />}
                        //badgeText="0"
                        onPress={() => this.setState({selectedTab: 'home'})}
                    >
                        <Home />    
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="发现"
                        selectedTitleStyle={{color: "#3496f0"}}
                        renderIcon={() => <Image source={SearchIcon} />}
                        renderSelectedIcon={() => <Image source={SearchIcon} />}
                        onPress={() => this.setState({selectedTab: 'search'})}
                    >
                        <Search/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        //width:300,
        // height: 300,
        //backgroundColor: "blue",
    },  
    icon: {  
        width:26,  
        height:26  
    }  
});  