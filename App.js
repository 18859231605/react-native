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
  SectionList
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to   reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {}; 

export default class App extends Component<Props> {
  render() {
     return ( 
      <View style={styles.container}>
        <SectionList    
            sections = {[
               {title: 'D', data: ['Devin']},
               {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem = {({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />   
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});

AppRegistry.registerComponent('Ab', () => App)