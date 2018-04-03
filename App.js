/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// constructor 类的构造函数
// supper 调用父类的构造函数和方法
//extends 用来声明类的继承关系
//private:只能类内部访问；
//public：类内部和外部都可引用；
//protected：只能有类的内部和它的子类访问

//引入 React的抽象组件
import React, { Component } from 'react';
//引入 ReactNative的具体组件
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  Dimensions
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to   reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
  
type Props = {}; 

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          首页
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          个人中心
        </Text>
      </View>
    )
  }
}


class Discover extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>发现</Text>
      </View>
    )
  }
}

class Focus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>关注</Text>
      </View>
    )
  }
}



const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class App extends Component<Props> {
  state = {
    selectedTab: 'home'
  }

  render() {
     return ( 
        <TabNavigator style={styles.container}>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="首页"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Icon name="home" size={px2dp(20)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="home" size={px2dp(20)} color="#3496f0"/>}
              onPress={() => this.setState({selectedTab: 'home'})}>
              <Home/>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'discover'}
              title="发现"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Icon name="circle" size={px2dp(20)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="circle" size={px2dp(20)} color="#3496f0"/>}
              onPress={() => this.setState({selectedTab: 'discover'})}>
              <Discover/>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'focus'}
              title="关注"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Icon name="heart" size={px2dp(20)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="heart" size={px2dp(20)} color="#3496f0"/>}
              onPress={() => this.setState({selectedTab: 'focus'})}>
              <Focus/>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="个人中心"
              selectedTitleStyle={{color: "#3496f0"}}
              renderIcon={() => <Icon name="user" size={px2dp(20)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="user" size={px2dp(20)} color="#3496f0"/>}
              onPress={() => this.setState({selectedTab: 'profile'})}>
              <Profile/>
            </TabNavigator.Item>
        </TabNavigator>
     )
  }
}

 
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('Ab', () => App)