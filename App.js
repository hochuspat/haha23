import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Polizovat1 from './Polizovat1';
import Polizovat from './Polizovat';
import Polizovat12 from './Polizovat12';
import Polizovat13 from './Polizovat13';
import  Cod from './Cod';
import  Zaeb from './Zaeb';
import  Zaeb2 from './Zaeb2';
import  popit from './popit';
import  Edis from './Ono';
import  kon from './kon';

import { LinearGradient } from 'expo-linear-gradient';
const Stack = createStackNavigator();
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '1' && password === '1') {
      console.log('Login Successful');
      //Do your login logic here
      navigation.navigate('Главная'); //Navigate to the next screen
    } 
    else if (username === '2' && password === '2') {
      console.log('Login Successful');
      //Do your login logic here
      navigation.navigate('Заявки');}
    else {
      console.log('Invalid Credentials');
      //Show error message here
    }
  };

  return (
    <View style={styles.container}>
      <Image
  source={{ uri: 'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Hc4y6arzxzy9TeS9MWxDKjUzx9O9naRL' }}
  style={{
    width: 155,
    height: 50,
    top: -10,
  }}
/>
      <TextInput
        style={styles.input}
        placeholder="ЛОГИН"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="ПАРОЛЬ"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleLogin}
      style={styles.button}
    >
      <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
        <Text style={styles.buttonText}>ВХОД</Text></LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 86,
    shadowColor: '#426541',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 22,
    width: 300,
  },
  input: {
    marginVertical: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#7AB478',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Вход" component={LoginScreen} />
        <Stack.Screen name="Главная" component={Polizovat1} />
        <Stack.Screen name="Карточка" component={Polizovat} />
        <Stack.Screen name="КарточкаДок" component={Polizovat12} />
        <Stack.Screen name="КарточкаЗадачи" component={Polizovat13} />
        <Stack.Screen name="ДобавлениеФото" component={Cod} />
        <Stack.Screen name="Подпись" component={Zaeb} />
        <Stack.Screen name="Пoдпись" component={Zaeb2} />
        <Stack.Screen name="Обращения" component={popit} />
        <Stack.Screen name="Заявки" component={Edis} />
        <Stack.Screen name="Заявление" component={kon} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;