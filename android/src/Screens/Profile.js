import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, SafeAreaView,
  Image, StyleSheet, Modal, PermissionsAndroid, FlatList
} from "react-native";
import Header from '../Components/Header';
import imagePath from '../assests/imagePath';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export default class Profile extends Component {

  state = {
    avatarSource: "https://image.flaticon.com/icons/png/512/16/16363.png",
    isModalVisible: false,
    isDrawerOpen: true,
    isCartVisible: false,
    coverImageSource: "fafdas",
    insightsList: [
      {
        id: 1,
        insightCount: 0,
        insightText: "helpful votes",
        visiblityText: "Public"
      },
      {
        id: 2,
        insightCount: 0,
        insightText: "reviews",
        visiblityText: "Public"
      },
      {
        id: 3,
        insightCount: 0,
        insightText: "followers",
        visiblityText: "Public"
      },
      {
        id: 4,
        insightCount: 0,
        insightText: "links",
        visiblityText: "Public"
      }
    ]
  }

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  }

  onPickButtonPress = () => {
    this.setState({
      isModalVisible: true
    })
  }

  _onModalClose = () => {
    this.setState({
      isModalVisible: false
    })
  }

  onCameraClick = async () => {

    try {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Please allow permission to continue",
          message:
            "Amazon app needs your permission to click photos",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log("You can use the camera");


        const options = {
          mediaType: 'photo',
          saveToPhotos: true
        };

        launchCamera(options, (response) => {

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = response.uri;

            this.setState({
              avatarSource: source,
              isModalVisible: false


            });
          }
        });
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.warn(error);
    }



  }

  onGallaryClick = async () => {


    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Please allow permission to continue",
          message:
            "Amazon app needs your permission to show photos",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          mediaType: 'photo',
          saveToPhotos: true
        };

        launchImageLibrary(options, (response) => {

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = response.uri;

            this.setState({
              avatarSource: source,
              isModalVisible: false

            });
          }
        });
      } else {
        console.log("Storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }


  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.viewOfInsights}>
        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:20}}>
          {item.insightCount}
        </Text>
        <Text style={{fontSize:14,marginLeft:20, marginTop:20}}> {item.insightText}</Text>
      </View>
    )
  }


  render() {

    const { isModalVisible, avatarSource, isDrawerOpen, isCartVisible, coverImageSource, insightsList } = this.state;

    return (
      <SafeAreaView>
        <Header openDrawer={this.openDrawer} isDrawerOpen={isDrawerOpen} isCartVisible={isCartVisible} />

        <ScrollView>
          <View style={styles.coverAndProfileView}>
            <Image style={styles.coverPhotoView} source={{ uri: coverImageSource }}>

            </Image>
            <Image source={{ uri: avatarSource }} style={styles.userImage} resizeMode="cover" />
            <TouchableOpacity style={styles.pickCoverTouch}>
              <Image source={imagePath.gallary_icon} style={styles.pickCoverImage} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.editProfileButton} onPress={this.onPickButtonPress}>
              <Text>
                Edit Profile
            </Text>
            </TouchableOpacity>
            <View style={styles.userInfoView}>
              <Text style={styles.userNameText}>Girraj Sharma</Text>
              <Text style={styles.locationText}>Jaipur, Rajasthan</Text>
            </View>


          </View>

          <View style={styles.aboutUserView}>
            <View style={styles.aboutPublicView}>
              <Text style={styles.aboutText}>About</Text>
              <Text style={styles.publicText}>
                Public
          </Text>
            </View>
            <Text style={styles.aboutYouText}>
              Add a couple of words about who you are.
          </Text>
          </View>

          <View style={styles.insightView}>
            <Text style={styles.aboutText}>Insights</Text>
            <FlatList
              data={insightsList}
              horizontal={true}
              ItemSeparatorComponent={(item)=><View style={{width:10}}></View>}
              keyExtractor={(item) => item.id.toString()}
              renderItem={(item) => this._renderItem(item)}
            />
          </View>



        </ScrollView>

        <Modal visible={isModalVisible} transparent onRequestClose={this._onModalClose}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
            <View style={styles.modalMainView}>

              <View style={{ flexDirection: "row", position: "absolute", left: 10, bottom: 60 }}>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity onPress={this.onCameraClick}>
                    <Image source={imagePath.system_camera} style={styles.gallaryIcon} resizeMode="contain" />
                  </TouchableOpacity>
                  <Text>
                    Camera
                </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity onPress={this.onGallaryClick}>
                    <Image source={imagePath.system_files} style={styles.gallaryIcon} resizeMode="contain" />
                  </TouchableOpacity>
                  <Text>
                    Files
                </Text>
                </View>

              </View>

              <View style={styles.lineView}></View>

              <TouchableOpacity style={styles.cancelButton} onPress={this._onModalClose}>
                <Text style={{ fontSize: 17 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* 
                <TouchableOpacity style={styles.imagePickerButton} onPress={this.onPickButtonPress}>
                    <Text style={{color:"white"}}>
                        Choose Image
                    </Text>
                </TouchableOpacity>

                <Text>Pick your image</Text>

               <Image source={avatarSource} style={styles.uploadAvatar} resizeMode="contain"/>


 */}

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  coverAndProfileView: {
    height: 250,
    backgroundColor: "white"
  },
  coverPhotoView: {
    backgroundColor: "#CBCFCB",
    height: "60%",
    position: 'relative'
  },
  profilePhotoView: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#E4E4E4",
    position: 'absolute',
    bottom: "25%",
    marginHorizontal: 20,
    padding: 10
  },
  userInfoView: {
    marginHorizontal: 20,
    marginTop: -10

  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#E4E4E4",
    position: 'absolute',
    bottom: "25%",
    marginHorizontal: 20,
  },
  editProfileButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9900",
    height: 40,
    width: 100,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginTop: 10
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 17,
  },
  aboutUserView: {
    height: 100,
    backgroundColor: "white",
    marginVertical: 10
  },
  insightView: {
    height: 200,
    backgroundColor: "white",
    paddingLeft:20,
    paddingBottom:10

  },
  listsView: {
    height: 100,
    backgroundColor: "white",
    marginVertical: 10
  },
  aboutPublicView: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: "center"
  },
  aboutText: {
    fontSize: 18,
    fontWeight: "bold",

  },
  publicText: {
    fontSize: 14,
    color: "grey",
    marginHorizontal: 10
  },
  aboutYouText: {
    color: "#5D99CA",
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: "bold"
  },
  pickCoverImage: {
    height: 40,
    width: 40,
  },
  pickCoverTouch: {
    position: "absolute",
    right: 0,
    bottom: "45%",
    marginHorizontal: 20
  },
  modalMainView: {
    height: "20%",
    backgroundColor: "white",
    marginTop: 'auto',
    flexDirection: 'column',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    position: "relative"
  },
  lineView: {
    height: 1,
    width: "90%",
    backgroundColor: "grey",
    marginTop: "auto",
    marginVertical: 10

  },
  cancelButton: {
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: 'center'
  },
  gallaryIcon: {
    height: 65,
    width: 65,
    marginHorizontal: 20
  },

  viewOfInsights:
  {
      height:150,
      backgroundColor:"#FDF7F7",
      width:120,
      alignSelf:"flex-end",
      borderRadius:20,
      borderTopWidth:20,
      borderTopColor:"#97DCBF"
  },
 











  // , imagePickerButton: {
  //   height: 50,
  //   width: 120,
  //   backgroundColor: "green",
  //   borderRadius: 5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   alignSelf: "center",
  //   marginVertical: 20
  // },
  // uploadAvatar: {
  //   height: 300,
  //   width: 300,
  // },



})