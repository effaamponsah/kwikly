import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/beforeauth/Welcome';
import MainNav from './components/navigation/MainNav';
import SignUp from './components/beforeauth/SignUp';



export default class App extends React.Component {
  render() {
    return (
      <MainNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
