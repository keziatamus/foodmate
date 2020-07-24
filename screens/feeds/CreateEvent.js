import React from 'react';
import DatePicker from 'react-native-datepicker'; //npm install react-native-datepicker --save
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import moment from 'moment'; //npm install moment --save

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isVisible: false
        }
    }

    handlePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    state = {
    title: "",
    desc: "",
  }

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
          mode="datetime"
          placeholder="Date and time"
          format="MMMM Do, H:MM"
          minDate={moment().format('MMMM Do, H:MM')}
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

        <View style={styles.inputView} >
          <Text
            style={styles.locationText}
            onPress={() => this.props.navigation.navigate('Input Location')}>
              Location
            </Text>
        </View>

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
    marginTop: 20,
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
    marginTop: 30,
    marginBottom: 10
  },
  signUpView: {
    paddingBottom: 30,
  },
  locationText:{
    height: 20,
    color: "#707070"
  }
});
