import React from 'react';
import CompanyData from './Components/CompanyData';
import Example from './Components/StateExample';
import {Parent, Child} from './Components/PropExample';

import {
  // Components
  Text,
  View,
  Button,
  Alert,
} from 'react-native';


const App = () => {
  const Alt = () => {
    console.warn("Done Project was quited !");
  }

  return (
    <View>
      <Parent />
      
      <Text style={{ fontSize: 30, textAlign: 'center' }} >Hello React Native</Text>
      <Text style={{ fontSize: 30 }} >Support me</Text>
      <Text style={{ fontSize: 30 }} >For Building</Text>
      <Text style={{ fontSize: 30 }} >College fee payment</Text>
      <Text style={{ fontSize: 30 }} >Application</Text>
      <Button title='Start Building Application'></Button>

   
      <Text style={{ fontSize: 30 }} > Button and onPress Event</Text>

      <Button
        onPress={Alt}
        title='Quit the project'
        
        color={'#841584'} />

      <Button
        onPress={() => Alert.alert('Decision was Changed!')}
        title='Change the Decision'
        color='#861189'
      />

      <AutherDetails />
      <CompanyData />
      <Example />
     
    </View>
  );
};


const AutherDetails = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Name: Satnam</Text>
      <Text style={{ fontSize: 30 }} >Age: 19</Text>
      <Text style={{ fontSize: 30 }} >Email: satnamsinghdeveloper@gmail.com</Text>
    </View>
  );
}


export default App;
