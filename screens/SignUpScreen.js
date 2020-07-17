import React from 'react';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';  //npm install react-native-picker-select
import { StyleSheet, Text, View, Picker, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';

const gender = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Others',
    value: 'others',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      selectedGender: null,
      selectedGender0: null,
    };
    this.state = {
      selectedGender: undefined,
    };
  }

  state = {
    email: "",
    password: "",
  }

  render() {
    const placeholder = {
      label: 'Select gender',
      value: null,
      color: '#9EA0A4',
    };

    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}> Sign Up</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({ username: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({ password: text })} />
        </View>

        <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={styles.inputView}
          date={this.state.date}
          mode="date"
          placeholder="Date of Birth"
          format="DD-MM-YYYY"
          maxDate={moment().format('DD-MM-YYYY')}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              backgroundColor: "#FAF7F0",
              borderRadius: 20,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              alignItems: 'flex-start',
            },
            placeholderText: {
              color: "#707070"
            }

          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />

        <RNPickerSelect
          placeholder={placeholder}
          items={gender}
          onValueChange={value => {
            this.setState({
              selectedGender: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.firstTextInput.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.selectedGender0.togglePicker();
          }}
          style={pickerSelectStyles}
          value={this.state.selectedGender}
          ref={el => {
            this.inputRefs.selectedGender = el;
          }}
        />
        <TouchableOpacity
          style={styles.loginBtn}>
          <Text> Confirm </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputView: {
    width: "80%",
    backgroundColor: "#FAF7F0",
    borderRadius: 20,
    height: 20,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FBAF02",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    color: "white"
  },
  signUpText: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold',
    marginBottom: 10
  },
  signUpView: {
    paddingBottom: 30,
  },

});

const pickerSelectStyles = StyleSheet.create({
  placeholder: {
    color: '#707070',
  },
  inputIOS: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: "#FAF7F0",
    borderRadius: 20,
    padding: 20,
    fontSize: 15,
    paddingVertical: 12,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    alignSelf: 'center',
    width: '80%',
    backgroundColor: "#FAF7F0",
    borderRadius: 20,
    padding: 20,
    fontSize: 15,
    paddingVertical: 12,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});