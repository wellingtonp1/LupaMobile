import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

export default class LoginController extends Component {


componentDidMount(){

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

}






  /*  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false
    }
  }


    componentDidMount() {
        GoogleSignin.configure({
          webClientId: '926607914658-rg4rk9t68i9m1586p77njanlkg0jm7et.apps.googleusercontent.com',        
        });
      }
    
      firebaseGoogleLogin = async () => {
        try {
          // add any configuration settings here:
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo: userInfo, loggedIn: true });
          console.log(userInfo);
          // create a new firebase credential with the token
          const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)
          // login with credential
          const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    
          console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
        } catch (error) {
          console.log(error)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("user cancelled the login flow");
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
            console.log("operation (f.e. sign in) is in progress already");
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("play services not available or outdated");
          } else {
            // some other error happened
            console.log("some other error happened");
          }
        }
      }

      _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo: userInfo, loggedIn: true });
          console.log(userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("user cancelled the login flow");
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
            console.log("operation (f.e. sign in) is in progress already");
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("play services not available or outdated");
          } else {
            // some other error happened
            console.log("some other error happened" + error);
          }
        }
      };
    
      getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
            this.setState({ loggedIn: false });
          } else {
            // some other error
            this.setState({ loggedIn: false });
          }
        }
      };
    
      signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ user: null, loggedIn: false }); // Remember to remove the user from app's state as well
        } catch (error) {
          console.error(error);
        }
    }

    render() {
        return (
          <Fragment>
          
            <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
              
                
                <View style={styles.body}>
                  <View style={styles.sectionContainer}>
                    <GoogleSigninButton
                      style={{ width: 192, height: 48 }}
                      size={GoogleSigninButton.Size.Wide}
                      color={GoogleSigninButton.Color.Dark}
                      onPress={this._signIn}
                      disabled={this.state.isSigninInProgress} />
                  </View>
                  <View style={styles.buttonContainer}>
                    {!this.state.loggedIn && <Text>You are currently logged out</Text>}
                    {this.state.loggedIn && <Button onPress={this.signOut}
                      title="Signout"
                      color="#841584">
                    </Button>}
                  </View>
    
           
                  {this.state.loggedIn && <View>
                    <View style={styles.listHeader}>
                      <Text>User Info</Text>
                    </View>
                    <View style={styles.dp}>
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.photo }}
                      />
                    </View>
                    <View style={styles.detailContainer}>
                      <Text style={styles.title}>Name</Text>
                      <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.name}</Text>
                    </View>
                    <View style={styles.detailContainer}>
                      <Text style={styles.title}>Email</Text>
                      <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.email}</Text>
                    </View>
                    <View style={styles.detailContainer}>
                      <Text style={styles.title}>ID</Text>
                      <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.id}</Text>
                    </View>
                  </View>}
                </View>
              </ScrollView>
            </SafeAreaView>
          </Fragment>
        );
      }
    }
    
    const styles = StyleSheet.create({
      scrollView: {
      
      },
      listHeader: {
        backgroundColor: '#eee',
        color: "#222",
        height: 44,
        padding: 12
      },
      detailContainer: {
        paddingHorizontal: 20
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10
      },
      message: {
        fontSize: 14,
        paddingBottom: 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      },
      dp:{
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      engine: {
        position: 'absolute',
        right: 0,
      },
      body: {
     
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      buttonContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        
      },
      highlight: {
        fontWeight: '700',
      },
      footer: {
        
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
    }); */