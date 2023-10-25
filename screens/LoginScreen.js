import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Image, TextInput } from "react-native";

const LoginScreen = ({ route, navigation }) => {
  const { prev } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.positionpic}>
      <Image 
          style={styles.loginpic}
          source={require('../assets/user-login.png')}
        />
      </View>
      <Text style={styles.content}>Username</Text>
      <TextInput
        style={styles.txtinput}
        placeholder="Username"
        keyboardType="email-address"
      />
      <Text style={styles.content}>Password</Text>
      <TextInput
        style={styles.txtinput}
        placeholder="Password"
        keyboardType="email-address"
      />
      <View style={styles.btnOption}>
        <Button
          title="Log in"
          onPress={() => {
            navigation.navigate("S3");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  content: {
    fontSize: 20,
    paddingBottom: 10,
    paddingRight: 210,
    color: 'green',
  },
  btnOption: {
    width: 300,
    paddingTop: 25,
    paddingBottom: 25,
  },
  btnBack: {
    width: 100,
    paddingTop: 370,
    justifyContent: "flex-end",
  },
  loginpic: {
    width: 100,
    height: 100,
  },
  positionpic: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  txtinput: {
    width: 300,
    height: 40,
    margin: 15,
    padding: 10,
    borderWidth: 2,
  },
});

export default LoginScreen;
