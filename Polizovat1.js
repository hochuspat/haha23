import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';


const Polizovat1 = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigation = useNavigation();
    const toggleMenu = () => setShowMenu(!showMenu);
  
  
  
  
    const renderMenu = () => {
      const navigation = useNavigation();
    
      return (
        <TouchableOpacity style={styles.menuContainer} onPress={toggleMenu}>
          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigation.navigate('Документы')}>
              <Text style={styles.menuItemText}>Документы</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Подписать</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Обращения</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Выйти</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
  
    return (
      <View style={styles.container}>
{/* Навигационный бар */}
<View style={styles.navbar}>
        <View style={styles.leftNav}>
          <TouchableOpacity>
            <Image source={{ uri: 'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1tLa2eZMFDYQh2A3kiY_KWwygJxwfO8b7' }}
              style={styles.avatar} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon1 name='notifications-outline'  size={35} style={{left:244,top:2}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rightNav} onPress={toggleMenu}>
        <Icon name="down" size={35} style={{left:4,top:2}} />
        </TouchableOpacity>
      </View>
      {/* Экран с содержимым */}<ScrollView><Text style={styles.projectsTitle}>Проекты</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Карточка')}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Карточка 6</Text>
          </View>
        </TouchableOpacity>
      </View></ScrollView>
      {/* Выпадающее меню */}
        {showMenu && renderMenu()}
        {/* Фон при открытом меню */}
        {showMenu && <View style={styles.backgroundOverlay} />}
      </View>
    );
  };





const styles = StyleSheet.create({
    projectsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        left:10
      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        height: 56,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    card: {
        width: 180,
        height: 200,
        backgroundColor: '#C5E9C4',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      shadowOffset: {
        width: 0,
        height: 3,
      },

    },
    image: {
      width: 100,
      height: 130,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      resizeMode: 'cover',
    },
    text: {
      padding: 10,
      color: '#000',
    },
    leftNav: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
      },
      notificationIcon: {
        width: 25,
        height: 28,
        left: 250
      },
      rightNav: {},
      arrowIcon: {
        width: 40,
        height: 35,
        tintColor: 'gray',
      },
      content: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      },
      menuContainer: {
        position: 'absolute',
        top: 56,
        right: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'lightgray',
        zIndex: 1000,
      },
      menuItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
      },
      menuItemText: {
        color: 'black',
        fontSize: 16,
      },
      backgroundOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
    });
    export default Polizovat1;