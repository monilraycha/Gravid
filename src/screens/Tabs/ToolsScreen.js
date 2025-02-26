import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import { verticalScale , horizontalScale , moderateScale } from '../../helpers/Metrics';

const {height} = Dimensions.get('window');

const tools = [
  // {
  //   id: '1',
  //   title: 'Wellness',
  //   description: 'Safe workouts and yoga sessions tailored to pregnancy',
  //   icon: require('../../assets/icons/star.png'),
  //   category: 'HEALTH',
  // },
  {
    id: '1',
    title: 'CheckList',
    description:
      'A comprehensive list with checkboxes, helping you to prepare',
    icon: require('../../assets/icons/2.png'),
    category: 'PLANNING',
    screenName:'CheckList'
  },
  // {
  //   id: '2',
  //   title: 'Weight curve',
  //   description: 'Log and follow your weight during pregnancy',
  //   icon: require('../../assets/icons/3.png'),
  //   category: 'BIRTH',
    
  // },
  {
    id: '2',
    title: 'Calender',
    description: 'Monitor and improve your sleep patterns',
    icon: require('../../assets/icons/4.png'),
    category: 'BIRTH',
    screenName:"Calender"

  },
  {
    id: '3',
    title: 'Nutrition Guide',
    description: 'Healthy meal plans for pregnancy',
    icon: require('../../assets/icons/5.png'),
    category: 'HEALTH',
    screenName:"Nutrition"
  },
  {
    id: '4',
    title: 'Resource Directory',
    description: 'Track contractions during labor',
    icon: require('../../assets/icons/6.png'),
    category: 'PLANNING',
    screenName:"Resources"
  },

  {
    id: '5',
    title: 'Vaccination',
    description: "Update your child's vaccination records by adding the received vaccines",
    icon: require('../../assets/icons/injection.png'),
    category: 'HEALTH',
    screenName:"Vaccination"

  }
];

const ToolsScreen = ({navigation}) => {
  const [likedTools, setLikedTools] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // Default filter

  const handleLike = id => {
    setLikedTools(prevState =>
      prevState.includes(id)
        ? prevState.filter(toolId => toolId !== id)
        : [...prevState, id],
    );
  };

  const handleFilterChange = filter => {
    setSelectedFilter(filter);
  };

  const filteredTools = tools.filter(
    tool => selectedFilter === 'ALL' || tool.category === selectedFilter,
  );

  const renderToolItem = ({item, hideDescription, smallSize}) => {
    const isLiked = likedTools.includes(item.id);
    return (
      <TouchableOpacity activeOpacity={0.8} 
         onPress={ () => {
            navigation.navigate(item.screenName)
         }}
      >
      <View style={[styles.toolItem, smallSize && styles.smallToolItem]}>
        <View
          style={[
            styles.iconContainer,
            smallSize && styles.smallIconContainer,
          ]}>
          <Image
            source={item.icon}
            style={[styles.icon, smallSize && styles.smallIcon]}
          />
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.toolInfo}>
          <Text style={[styles.toolTitle, smallSize && styles.smallToolTitle]}>
            {item.title}
          </Text>
          {!hideDescription && (
            <Text style={styles.toolDescription}>{item.description}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => handleLike(item.id)}>
          <Image
            source={
              isLiked
                ? require('../../assets/icons/red.png')
                : require('../../assets/images/heart.png')
            }
            style={[isLiked ? styles.likeIcon : styles.unlikeIcon]}
          />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
    );
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tools</Text>
      </View>
      {/* Favourite Tools Section */}
      <Text style={styles.favoriteTitle}>FAVOURITE TOOLS</Text>

      {/* Favourite List */}
      {likedTools.length === 0 ? (
        <View style={styles.favoriteDesc}>
          <Text style={styles.noFavoriteText}>
            Pin your favourite tools here by tapping the heart icon.
          </Text>
        </View>
      ) : (
        <View style={styles.favoriteListContainer}>
          {tools
            .filter(tool => likedTools.includes(tool.id))
            .map(item => (
              <View key={item.id}>
                {renderToolItem({item, hideDescription: true, smallSize: true})}
              </View>
            ))}
        </View>
      )}

      {/* Horizontal Filter Bar */}
      <View style={styles.filterBar}>
        {['ALL', 'HEALTH', 'PLANNING', 'BIRTH'].map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedFilterButton,
            ]}
            onPress={() => handleFilterChange(filter)}>
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.selectedFilterButton,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tool List */}
      <FlatList
        data={filteredTools}
        renderItem={({item}) =>
          renderToolItem({item, hideDescription: false, smallSize: false})
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.toolList}
      />
    </View>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  headerText: {
    fontSize: RFValue(16 , height),
    fontFamily: 'Montserrat Medium',
    flex: 1,
    textAlign: 'center',
  },

  favoriteTitle: {
    fontSize: RFValue(14 , height),
    fontFamily: 'Montserrat Medium',
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(17),
    color: '#333',
  },
  favoriteDesc: {
    fontSize: RFValue(12 , height),
    color: '#555',
    margin: moderateScale(15),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'dotted',
    borderRadius: 5,
  },
  noFavoriteText: {
    fontSize: RFValue(12 , height),
    color: '#555',
    textAlign: 'center',
    fontFamily: 'Montserrat Light',

  },
  favoriteListContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
  },
  toolList: {
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(10),
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(30),
    margin: moderateScale(10),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  smallToolItem: {
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    height: verticalScale(60),
  },
  iconContainer: {
    backgroundColor: colors.primary,
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    resizeMode: 'contain',
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  toolInfo: {
    flex: 1,
  },
  toolTitle: {
    fontSize: RFValue(18 , height),
    fontFamily:'Montserrat SemiBold',
    marginBottom: verticalScale(5),
  },
  toolDescription: {
    fontSize: RFValue(14 , height),
    fontFamily:'Montserrat -Regular',
    color: '#555',
    marginTop: verticalScale(5),
  },
  likeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  likeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  unlikeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#000000',
  },
  filterBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    borderRadius: 7,
  },
  filterText: {
    fontSize: RFValue(10),
  },
  selectedFilterButton: {
    backgroundColor: colors.primary,
  },
  smallIconContainer: {
    width: 50,
    height: 50,
  },
  smallIcon: {
    width: 24,
    height: 24,
  },
  smallToolTitle: {
    fontSize: 14, 
  },
});
