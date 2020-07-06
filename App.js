import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import style from "./style";
import styled from 'styled-components/native'
import Home from './src/views/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor="white" barStyle="dark-content" />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size})=> <Ionicons name="home" size={25}/>}}/>
        <Tab.Screen name="Orders" component={Orders} options={{tabBarIcon: ({color, size})=> <Ionicons name="document-text" size={25}/>}}/>
        <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: ({color, size})=> <Ionicons name="chatbubble-ellipses" size={25}/>}}/>
        <Tab.Screen name="Inbox" component={Inbox} options={{tabBarIcon: ({color, size})=> <Ionicons name="mail-sharp" size={25}/>}}/>
        <Tab.Screen name="Account" component={Account} options={{tabBarIcon: ({color, size})=> <Ionicons name="person" size={25}/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function Orders() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order!</Text>
    </View>
  );
}
function Chat() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}
function Inbox() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inbox!</Text>
    </View>
  );
}
function Account() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account!</Text>
    </View>
  );
}

export default App;
