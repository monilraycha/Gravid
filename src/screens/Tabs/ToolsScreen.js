import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import colors from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../helpers/Metrics";
import fonts from "../../constants/fonts";
import tools from "../../constants/tools";
const { height } = Dimensions.get("window");

const ToolsScreen = ({ navigation }) => {
  const [likedTools, setLikedTools] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("ALL"); // Default filter

  const handleLike = (id) => {
    setLikedTools((prevState) =>
      prevState.includes(id)
        ? prevState.filter((toolId) => toolId !== id)
        : [...prevState, id]
    );
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredTools = tools.filter(
    (tool) => selectedFilter === "ALL" || tool.category === selectedFilter
  );

  const renderToolItem = ({ item, hideDescription, smallSize }) => {
    const isLiked = likedTools.includes(item.id);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(item.screenName);
        }}
      >
        <View style={[styles.toolItem, smallSize && styles.smallToolItem]}>
          <View
            style={[
              styles.iconContainer,
              smallSize && styles.smallIconContainer,
            ]}
          >
            <Image
              source={item.icon}
              style={[styles.icon, smallSize && styles.smallIcon]}
            />
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.toolInfo}>
            <Text
              style={[styles.toolTitle, smallSize && styles.smallToolTitle]}
            >
              {item.title}
            </Text>
            {!hideDescription && (
              <Text style={styles.toolDescription}>{item.description}</Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => handleLike(item.id)}
          >
            <Image
              source={
                isLiked
                  ? require("../../assets/icons/red.png")
                  : require("../../assets/images/heart.png")
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
            .filter((tool) => likedTools.includes(tool.id))
            .map((item) => (
              <View key={item.id}>
                {renderToolItem({
                  item,
                  hideDescription: true,
                  smallSize: true,
                })}
              </View>
            ))}
        </View>
      )}

      {/* Horizontal Filter Bar */}
      <View style={styles.filterBar}>
        {["ALL", "HEALTH", "PLANNING", "BIRTH"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedFilterButton,
            ]}
            onPress={() => handleFilterChange(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.selectedFilterButton,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tool List */}
      <FlatList
        nestedScrollEnabled
        data={filteredTools}
        renderItem={({ item }) =>
          renderToolItem({ item, hideDescription: false, smallSize: false })
        }
        keyExtractor={(item) => item.id}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },
  headerText: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
    flex: 1,
    textAlign: "center",
  },

  favoriteTitle: {
    fontSize: RFValue(14, height),
    color: colors.black,
    fontFamily: fonts.MontserratMedium,
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(17),
  },
  favoriteDesc: {
    fontSize: RFValue(12, height),
    color: "#555",
    margin: moderateScale(15),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: "#aaa",
    borderStyle: "dotted",
    borderRadius: 5,
  },
  noFavoriteText: {
    fontSize: RFValue(12, height),
    color: colors.black,
    textAlign: "center",
    fontFamily: fonts.MontserratLight,
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
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(30),
    margin: moderateScale(10),
    backgroundColor: "#fff",
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
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    resizeMode: "contain",
  },
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  toolInfo: {
    flex: 1,
  },
  toolTitle: {
    fontSize: RFValue(18, height),
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
    marginBottom: verticalScale(5),
  },
  toolDescription: {
    fontSize: RFValue(14, height),
    color: colors.black,
    fontFamily: fonts.MontserratRegular,
    marginTop: verticalScale(5),
  },
  likeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  likeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: colors.primary,
  },
  unlikeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "#000000",
  },
  filterBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  filterButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    borderRadius: 7,
  },
  filterText: {
    fontSize: RFValue(10),
    color: colors.black,
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
    fontSize: RFValue(14),
    color: colors.black,
  },
});
