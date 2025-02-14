import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';

const ToolsScreen = () => {
  const [likedTools, setLikedTools] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // Default filter

  const tools = [
    {
      id: '1',
      title: 'Wellness',
      description: 'Safe workouts and yoga sessions tailored to pregnancy',
      icon: require('../../assets/icons/1.png'),
      category: 'HEALTH',
    },
    {
      id: '2',
      title: 'CheckList',
      description:
        'A comprehensive list with checkboxes, helping you to prepare',
      icon: require('../../assets/icons/2.png'),
      category: 'PLANNING',
    },
    {
      id: '3',
      title: 'Weight curve',
      description: 'Log and follow your weight during pregnancy',
      icon: require('../../assets/icons/3.png'),
      category: 'BIRTH',
    },
    {
      id: '4',
      title: 'Sleep Tracker',
      description: 'Monitor and improve your sleep patterns',
      icon: require('../../assets/icons/4.png'),
      category: 'BIRTH',
    },
    {
      id: '5',
      title: 'Nutrition Guide',
      description: 'Healthy meal plans for pregnancy',
      icon: require('../../assets/icons/5.png'),
      category: 'HEALTH',
    },
    {
      id: '6',
      title: 'Contraction Timer',
      description: 'Track contractions during labor',
      icon: require('../../assets/icons/6.png'),
      category: 'PLANNING',
    },
  ];

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
            style={styles.likeIcon}
          />
        </TouchableOpacity>
      </View>
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
                selectedFilter === filter && styles.selectedFilterText,
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  headerText: {
    fontSize: RFValue(18),
    fontWeight: '300',    
    flex: 1,
    textAlign: 'center',
  },

  favoriteTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 17,
    color: '#333',
  },
  favoriteDesc: {
    fontSize: 12,
    color: '#555',
    margin: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'dotted',
    borderRadius: 5,
  },
  noFavoriteText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  favoriteListContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  toolList: {
    marginTop: 10,
    paddingVertical: 10,
  },
  toolItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  smallToolItem: {
    padding: 10,
    marginVertical: 5,
    height: 60,
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
    width: 40,
    height: 40,
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
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 5,
  },
  toolDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
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
    fontSize: RFValue(12),
  },
  selectedFilterButton: {
    backgroundColor: colors.primary,
  },
  selectedFilterText: {
    color: '#fff',
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
    fontSize: 14, // Adjust as needed
  },
});
