import React, { useRef, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  Picker,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  n;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const FadeInView1 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const FadeInView2 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

import minBack from "./minBack.jpg";

export default class log extends Component {
  state = {
    email: "",
    password: "",
    role: "",
  };
  updateRole = (role) => {
    this.setState({ role: role });
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={index}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <ImageBackground style={styles.backgroundCon} source={minBack}>
          <View style={styles.container}>
            <FadeInView>
              <Image
                style={styles.edIcon}
                source={{
                  uri:
                    "https://img.icons8.com/ios-glyphs/80/000000/student-center.png",
                }}
              />
            </FadeInView>
            <FadeInView1>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter username"
                  underlineColorAndroid="transparent"
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri:
                      "https://img.icons8.com/cotton/64/000000/user-male--v1.png",
                  }}
                />
              </View>
            </FadeInView1>

            <FadeInView2>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                />
                <Image
                  style={styles.inputIcon}
                  source={{
                    uri: "https://img.icons8.com/cotton/64/000000/key--v2.png",
                  }}
                />
              </View>
            </FadeInView2>

            <FadeInView>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.onClickListener("login")}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>
            </FadeInView>

            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("homeScreen")}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableHighlight>
            <Image
              style={styles.mountain}
              source={{
                uri:
                  "https://p7.hiclipart.com/preview/393/544/1015/cypress-mountain-ski-area-computer-icons-snow-others.jpg",
              }}
            />
          </View>
        </ImageBackground>
      </NavigationContainer>
    );
  }
}

const resizeMode = "center";

const styles = StyleSheet.create({
  backgroundCon: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },

  loginButton: {
    backgroundColor: "#00b5ec",
    marginTop: 5,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  cloud1: {
    height: 60,
    width: 60,
    marginBottom: 40,
    flexDirection: "row-reverse",
  },
  edIcon: {
    height: 50,
    width: 50,
    marginBottom: 24,
  },
  pick: {
    width: 300,
    height: 40,
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
});
