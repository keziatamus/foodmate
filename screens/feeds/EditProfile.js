import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import { Container, Content } from 'native-base'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import global from '../../global';
//npm install yarn -g
//expo install expo-image-picker

export default class Edit extends Component {
  state = {
    image: null,
    data: [],
    user: null,
    username: null,
    dob: null,
    gender: null,
    bio: null,
    age: null,
    email: null,
  };

  componentDidMount() {
    global.firebase.auth().onAuthStateChanged(
      (user) => this.setState({ user: user })
    );
    global.firebase
      .database()
      .ref('user/' + global.userkey)
      .on('value', snapshot => {
        var data = snapshot.val();
        console.log(data);
        this.setState({
          username: data.username,
          dob: data.dob,
          gender: data.gender,
          bio: null,
          age: null,
          email: data.email,
        });
      });
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  changeImage() {

  };

  render() {
    let { image } = this.state;
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <Content>
          <View>
            <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
              <ImageBackground
                style={{ width: 90, height: 90, borderRadius: 45 }}
                imageStyle={{ borderRadius: 45 }}
                source={require('../../assets/me.jpg')}>
                {image && <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 45 }} />}
              </ImageBackground>
            </View>
            <Text
              onPress={this._pickImage}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#FBAF02',
                alignSelf: 'center'
              }}>
              Change Profile Photo
                        </Text>

            <View
              style={{
                marginVertical: 20,
                borderBottomColor: '#ebe6e6',
                borderBottomWidth: 1
              }} />

            <View style={{ flex: 1, flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                <Text style={{ fontSize: 16, paddingLeft: 20, paddingRight: 50 }}>Username</Text>
                <TextInput
                  style={{ fontSize: 16, width: '60%', paddingBottom: 15 }}
                  defaultValue={this.state.username}
                  placeholder='Username'
                  borderBottomColor='#ebe6e6'
                  borderBottomWidth="1"
                  clearButtonMode={true} />
              </View>

              <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                <Text style={{ fontSize: 16, paddingLeft: 20, paddingRight: 100 }}>Bio</Text>
                <TextInput
                  style={{ fontSize: 16, width: '60%', paddingBottom: 15 }}
                  placeholder="Add bio to your profile"
                  borderBottomColor='#ebe6e6'
                  borderBottomWidth="1"
                  clearButtonMode={true} />
              </View>

              <Text
                onPress={() => this.props.navigation.navigate('Personal Information')}
                style={{
                  fontSize: 16,
                  color: '#FBAF02',
                  padding: 20
                }}>
                Personal Information Settings
                        </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
