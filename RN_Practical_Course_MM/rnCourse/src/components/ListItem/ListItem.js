import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem} >
      <Image resizeMode='cover' style={styles.placeImage} source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
      width: "100%",
      padding: 10,
      margin: 3,
      backgroundColor: "#eee",
      flexDirection: 'row',
      alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 100,
    width: 100
  }
});

export default listItem;