import React, { Component } from 'react'; 
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"An awesome place"}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          style={styles.textInput}
        />
        <Button 
          title={"Add"} 
          onPress={this.placeSubmitHandler}
          style={styles.inputButton}  
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: "70%"
  },
  inputButton: {
    width: "30%"
  }
});

export default PlaceInput;