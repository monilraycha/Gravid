import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../../constants/color';
import articleCategories from '../../helpers/articleCatergories';
import {RFValue} from 'react-native-responsive-fontsize';
import { horizontalScale , moderateScale , verticalScale } from '../../helpers/Metrics';

const {width} = Dimensions.get('window');
const CARD_SIZE = width / 3.4; // Adjusted for better spacing

const ArticlesScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredArticles = articleCategories.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderCategory = ({item}) => (
    <TouchableOpacity
      style={[styles.card, {width: CARD_SIZE, height: CARD_SIZE}]}
      onPress={() => navigation.navigate(item.screenName, 
        {title : item.title}
      )}
      >
        
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Articles</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/heart.png')}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/images/search-interface-symbol.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search for articles and guides"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View>
        <Text style={styles.title}>Articles</Text>
      </View>

      {/* Articles Grid */}
      <FlatList
        data={filteredArticles}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default ArticlesScreen;

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
  headerTitle: {
    fontSize: RFValue(16),
    fontWeight: '300',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  heartIcon: {
    width: horizontalScale(24),
    height: horizontalScale(24),
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: moderateScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  searchIcon: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: RFValue(12),
  },
  grid: {
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(15),
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(5),
  },
  icon: {
  width: horizontalScale(40),
    height: horizontalScale(40),
    marginBottom: verticalScale(5),
  },
  cardText: {
    fontSize: RFValue(10),
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  title: {
    fontSize: RFValue(18),
    textAlign: 'left',
    marginTop: verticalScale(15),
    marginLeft: horizontalScale(15),
    fontFamily: 'Montserrat Medium',
  },
});
