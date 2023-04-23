import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

const ProjectScreen = ({ navigation }) => {
  const [task1Expanded, setTask1Expanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const expandTask1 = () => {
    setTask1Expanded(!task1Expanded);
  };

  

  return (
    <View style={styles.container}>
      {/* Navbar */}
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

      {/* Breadcrumbs */}
      <Text style={styles.projectsTitle}>Проекты/Какой-то проект/</Text>  

      <View style={styles.breadcrumbsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Карточка')}>
          <Text style={styles.breadcrumbsText1}>О проекте</Text>
        </TouchableOpacity>
        
        <Text style={styles.separator}>/</Text>

        <TouchableOpacity onPress={() => navigation.navigate('КарточкаДок')}>          

          <Text style={styles.breadcrumbsText1}>Документы</Text>
        </TouchableOpacity>

        <Text style={styles.separator}>/</Text>

        <TouchableOpacity >        
        <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
          <Text style={styles.breadcrumbsText}>Задачи</Text></LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Tasks */}
      <TouchableOpacity style={styles.taskContainer} onPress={expandTask1}>
        <View style={styles.taskHeader}>
          <Ionicons
            style={styles.taskIcon}
            name="checkmark-circle-outline"
            size={24}
            color="green"
          />
          <Text style={styles.taskTitle}>Задача 1</Text>
        </View>
        {task1Expanded && (
       
          <View style={styles.taskDetailsContainer}>
            <View style={styles.taskDetailsRow}> 
            <View style={styles.content}>
            <TouchableOpacity style={styles.card} >
          <View style={styles.cardContent}>
          <Text style={{top:-10}}>03.07-15.07</Text>    
            <Text style={{fontWeight: 'bold',top:5}}>ИП Хочуспать</Text>
            <Text style={{top:10,color:"red"}}>35000 рублей</Text>
            <TouchableOpacity style={styles.button}>
            <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
        <Text style={styles.buttonText}>Нанять</Text></LinearGradient>
              </TouchableOpacity>
          </View>
        </TouchableOpacity>            
        <View style={styles.taskDetailsRow}>
            <TouchableOpacity style={styles.card} >
            <View style={styles.cardContent}>
          <Text style={{top:-10}}>03.07-15.07</Text>    
            <Text style={{fontWeight: 'bold',top:5}}>ИП Хочуспать</Text>
            <Text style={{top:10,color:"red"}}>35000 рублей</Text>
            <TouchableOpacity style={styles.button}>
            <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
        <Text style={styles.buttonText}>Нанять</Text></LinearGradient>
              </TouchableOpacity>
          </View>

        </TouchableOpacity>
            </View>
            </View>
            </View>


            <View style={styles.taskDetailsRow}> 
            <View style={styles.content}>
            <TouchableOpacity style={styles.card} >
          <View style={styles.cardContent}>
          <Text style={{top:-10}}>03.07-15.07</Text>    
            <Text style={{fontWeight: 'bold',top:5}}>ИП Хочуспать</Text>
            <Text style={{top:10,color:"red"}}>35000 рублей</Text>
            <TouchableOpacity style={styles.button}>
            <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
        <Text style={styles.buttonText}>Нанять</Text></LinearGradient>
              </TouchableOpacity>
          </View>
        </TouchableOpacity>            
        <View style={styles.taskDetailsRow}>
            <TouchableOpacity style={styles.card} >
            <View style={styles.cardContent}>
          <Text style={{top:-10}}>03.07-15.07</Text>    
            <Text style={{fontWeight: 'bold',top:5}}>ИП Хочуспать</Text>
            <Text style={{top:10,color:"red"}}>35000 рублей</Text>
            <TouchableOpacity style={styles.button}>
            <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
        <Text style={styles.buttonText}>Нанять</Text></LinearGradient>
              </TouchableOpacity>
          </View>

        </TouchableOpacity>
            </View>
            </View>
            </View>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>Задача 2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>Задача 3</Text>
        </View>
      </TouchableOpacity><ScrollView>
      <View>
      
      <TouchableOpacity onPress={() => navigation.navigate('ДобавлениеФото')}>
      <LinearGradient
        colors={['#7AB478', '#365435']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.background}
      >
          <Text style={styles.breadcrumbsText}>Добавить вложение</Text></LinearGradient>
          <Image     source={{
                uri:
                  'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1yRblctOYDymQ4edldByrF4So4TreBad2',
              }} style={{width: 375,
                height: 447}} ></Image>
        </TouchableOpacity></View></ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
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
button: {
    borderRadius: 22,
    top:10    
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
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
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
},
projectsTitle: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
    left:10
  },

card: {
    width: 150,
    height: 150,
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
  breadcrumbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  background: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 86,
    shadowColor: '#426541',
    shadowOpacity: 0.3,
    shadowRadius: 22,
  },
  taskContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskIcon: {
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskDetailsContainer: {
    marginTop: 10,
    paddingHorizontal: -5,
    
  },
  taskDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: -5,
    padding: 5,

  },
  taskDetailsText: {
    fontSize: 16,
  },
  taskButton: {
    backgroundColor: '#7AB478',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  taskButtonText: {
    fontSize: 16,
    color: 'white',
  },
};

export default ProjectScreen;