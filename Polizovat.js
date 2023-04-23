import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Polizovat1 = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigation = useNavigation();
    const toggleMenu = () => setShowMenu(!showMenu);
  
  
  
  
    const renderMenu = () => {
      const navigation = useNavigation();
    
      return (
        <TouchableOpacity style={styles.menuContainer} >
          <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Документы</Text>
          </View>
          <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Подпись')}>
            <Text style={styles.menuItemText}>Подписать</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Обращения')}>

            <Text style={styles.menuItemText}>Обращения</Text>
            </TouchableOpacity>
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
      {/* Экран с содержимым */}<ScrollView><Text style={styles.projectsTitle}>Проекты/Какой-то проект/</Text>  

      <View style={styles.breadcrumbsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Карточка')}>
          <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
          <Text style={styles.breadcrumbsText}>О проекте</Text></LinearGradient>
        </TouchableOpacity>
        <Text style={styles.separator}>/</Text>
        <TouchableOpacity onPress={() => navigation.navigate('КарточкаДок')}>
          <Text style={styles.breadcrumbsText1}>Документы</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>/</Text>
        <TouchableOpacity onPress={() => navigation.navigate('КарточкаЗадачи')}>
          <Text style={styles.breadcrumbsText1}>Задачи</Text>
        </TouchableOpacity>
      </View>

      

      <View style={styles.content}>
        
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={require('./Rectangle1.png')}
              style={styles.cardImage} />
            <Text style={styles.cardTitle}>Строительство чего-нибудь</Text>
            <Text style={styles.cardTitle}>Сложно сказать, почему сторонники тоталитаризма в науке неоднозначны и будут ограничены исключительно образом мышления. Значимость этих проблем настолько очевидна, что экономическая повестка сегодняшнего дня напрямую зависит от своевременного выполнения сверхзадачи. Современные технологии достигли такого уровня, что семантический разбор внешних противодействий влечет за собой процесс внедрения и модернизации форм воздействия. Банальные, но неопровержимые выводы, а также активно развивающиеся страны третьего мира формируют глобальную экономическую сеть и при этом —  представлены в исключительно положительном свете. С другой стороны, синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса благоприятных перспектив. </Text>

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



  


const styles = StyleSheet.create({cardImage:{width: 267,
  height: 148,borderRadius: 20,left: 27,
  top: -15},
  breadcrumbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:20
  },
  background: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 86,
    shadowColor: '#426541',
    shadowOpacity: 0.3,
    shadowRadius: 22,
  },

  breadcrumbsText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 5,
  },
  breadcrumbsText1: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  separator: {
    fontSize: 16,
    color: '#333',
  },
    projectsTitle: {
        fontSize: 24,
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
        padding: 15,
    },
    card: {
      left:13,
        width: 350,
        height: 900,
        backgroundColor: '#C5E9C4',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
      shadowOffset: {
        width: 0,
        height: 3,
      },

    },
    image: {
      width: 267,
      height: 148,
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