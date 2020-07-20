import React, {useState} from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, Text, View, Picker, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    title: "",
    desc: ""
  }

  onChange = time => this.setState({ time })

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.signUpView}>
          <Text style={styles.signUpText}> Create Event</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Title"
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({ title: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Description"
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({ desc: text })} />
        </View>

        <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={styles.inputView}
          date={this.state.date}
          mode="date"
          placeholder="Date of Event"
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