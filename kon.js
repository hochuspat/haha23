import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [inn, setInn] = useState('');
  const [kpp, setKpp] = useState('');
  const [experience, setExperience] = useState('');
  const [price, setPrice] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = () => {
    // отправка данных на сервер или обработка формы
    console.log({
      fullName,
      email,
      phone,
      company,
      inn,
      kpp,
      experience,
      price,
      deadline,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenBlock}>
        <Text style={styles.greenText}>Наименование: Я уже не думаю</Text>
      </View>
      <TextInput
        placeholder="ФИО"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="Ваша организация"
        value={company}
        onChangeText={setCompany}
        style={styles.input}
      />
      <TextInput
        placeholder="ИНН"
        value={inn}
        onChangeText={setInn}
        style={styles.input}
      />
      <TextInput
        placeholder="КПП"
        value={kpp}
        onChangeText={setKpp}
        style={styles.input}
      />
      <TextInput
        placeholder="Стаж работы"
        value={experience}
        onChangeText={setExperience}
        style={styles.input}
      />
      <TextInput
        placeholder="Ваша цена"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <TextInput
        placeholder="Сроки выполнения"
        value={deadline}
        onChangeText={setDeadline}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >

        <Text style={styles.buttonText}>Отправить</Text></LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  greenBlock: {
    backgroundColor: '#DEF0DD',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  greenText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  background: {
    alignItems: 'center',
    borderRadius: 50,
    width:300,
    height:50,
    shadowColor: '#426541',
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,

  },
});