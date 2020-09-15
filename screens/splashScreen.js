import React from "react";
import { View, Text, Image } from "react-native";

class SplashScreen extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={styles.edIcon}
          source={{
            uri: "https://www.flaticon.com/svg/static/icons/svg/906/906175.svg",
          }}
        />
        <Text style={styles.textStyles}>E-Learning</Text>
        <Text style={styles.textStyles1}>The new way of learning!</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  textStyles1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  edIcon: {
    height: 50,
    width: 50,
  },
};

export default SplashScreen;
