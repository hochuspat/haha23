import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Документ-купли продажи',
    description: 'Между ООО Ромашка и СКЗМК',
    image:
      'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1S4Oeo8krvjWjikL5IfXfpDmFrCSzzZ6t',
    subscription: true,
  },
  {
    id: 2,
    title: 'Документ-купли продажи',
    description: 'Между ООО Ромашка и СКЗМК',
    image:
      'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1S4Oeo8krvjWjikL5IfXfpDmFrCSzzZ6t',
    subscription: false,
  },
  {
    id: 3,
    title: 'Документ-купли продажи',
    description: 'Между ООО Ромашка и СКЗМК',
    image:
      'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1S4Oeo8krvjWjikL5IfXfpDmFrCSzzZ6t',
    subscription: true,
  },
];

const Polizovat12 = () => {
    const navigation = useNavigation();

  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isПодписан, setIsПодписан] = useState(null);

  const onSearchTextChange = (text) => {
    setSearchText(text);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const filterData = () => {
    let result = data.filter((item) => {
      if (isПодписан !== null && item.subscription !== isПодписан) {
        return false;
      }
      if (
        searchText !== '' &&
        item.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1
      ) {
        return false;
      }
      return true;
    });

    return result;
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.leftNav}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1tLa2eZMFDYQh2A3kiY_KWwygJxwfO8b7',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon1 name='notifications-outline'  size={35} style={{left:244,top:2}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rightNav} onPress={toggleMenu}>
        <Icon name="down" size={35} style={{left:4,top:2}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.projectsTitle}>Проекты/Какой-то проект/</Text>  

      <View style={styles.breadcrumbsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Карточка')}>
          <Text style={styles.breadcrumbsText1}>О проекте</Text>
        </TouchableOpacity>
        
        <Text style={styles.separator}>/</Text>

        <TouchableOpacity onPress={() => navigation.navigate('КарточкаДок')}>          
        <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
          <Text style={styles.breadcrumbsText}>Документы</Text></LinearGradient>
        </TouchableOpacity>

        <Text style={styles.separator}>/</Text>

        <TouchableOpacity onPress={() => navigation.navigate('КарточкаЗадачи')}>
          <Text style={styles.breadcrumbsText1}>Задачи</Text>
        </TouchableOpacity>
      </View>

      {showMenu && (
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Документы')}>
            <Text style={styles.menuItemText}>Документы</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowMenu(false)}>
            <Text style={styles.menuItemText}>Подписать</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowMenu(false)}>
            <Text style={styles.menuItemText}>Обращения</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowMenu(false)}>
            <Text style={styles.menuItemText}>Выйти</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Начните вводить..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={onSearchTextChange}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => console.log('search button clicked')}>
          <Text style={styles.searchButtonText}>Поиск</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            isПодписан === true ? styles.filterSelectedButton : null,
          ]}
          onPress={() => setIsПодписан(true)}>
          <Text
            style={[
              styles.filterButtonText,
              isПодписан === true ? styles.filterSelectedText : null,
            ]}>
            Подписан
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            isПодписан === false ? styles.filterSelectedButton : null,
          ]}
          onPress={() => setIsПодписан(false)}>
          <Text
            style={[
              styles.filterButtonText,
              isПодписан === false ? styles.filterSelectedText : null,
            ]}>
            Не подписан
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filterData().map((item) => (
          <View style={styles.productContainer} key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />
            <View style={styles.productDetailsContainer}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>
                {item.description}
              </Text>
              <Text style={styles.productSubscription}>
                {item.subscription ? 'Подписан' : 'Не подписан'}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  breadcrumbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:20,
    
  },
  projectsTitle: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
    left:10
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

    background: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 86,
        shadowColor: '#426541',
        shadowOpacity: 0.3,
        shadowRadius: 22,
      },
  leftNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightNav: {},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top: 50,
    right: 20,
    minWidth: 150,
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
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuItemText: {
    color: '#000000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
  },
  searchButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#365435',
    borderWidth: 0,
    borderRadius: 15,

  },
  searchButtonText: {
    color: '#FFFFFF',
    
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 15,
  },
  filterSelectedButton: {
    backgroundColor: '#365435',
    borderWidth: 0,
    borderRadius: 15,

  },
  filterButtonText: {},
  filterSelectedText: {
    color: '#FFFFFF',
    borderRadius: 15,
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#C5E9C4',
    borderRadius: 15,
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
    top: 15
  },
  productDetailsContainer: {
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  productDescription: {
    marginBottom: 5,
  },
  productSubscription: {},
});

export default Polizovat12;