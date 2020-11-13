import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Login from '../../components/login/Login';
import {loginAction} from '../../redux/actions/actionLogin';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LoadImage from '../../res/images';
import {bindActionCreators} from 'redux';
class LoginContainer extends React.Component {
  componentDidUpdate(preProps) {
    const {data, navigation, error} = this.props;

    if (data !== null && data !== preProps.data) {
      navigation.navigate('HomeKh');
    }
    if (error !== null && error !== preProps.error) console.log(error);
  }
  constructor(props) {
    super(props);
    this.state = {
      eyeShow: false,
      circleShow: false,
      showwMK: false,
      user: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{justifyContent:'center',flexGrow:1}}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f4f7fc',
            flex: 1,
          }}>
          <Image
            source={LoadImage.ic_fpt_is}
            resizeMode="contain"
            style={{height: 100}}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: '#1C1E72'}}>
              FIS INSIGHT PORTAL
            </Text>
          </View>
          <Image
            source={LoadImage.ic_stripe}
            resizeMode="contain"
            style={{width: 120}}
          />
          <View style={{paddingTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#CDC830'}}>
              ĐĂNG NHẬP HỆ THỐNG
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
              height: 40,
              marginTop: 20,
              backgroundColor: '#EBEADC',
            }}>
            <Icon
              name="user-alt"
              size={15}
              style={{marginHorizontal: 5, flex: 0.1}}
            />
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                placeholder="Tài Khoản"
                onChangeText={(text) => this.setState({user: text})}
              />
            </View>

            <View style={{flex: 0.1}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
              height: 40,
              marginTop: 20,
              backgroundColor: '#EBEADC',
            }}>
            <Icon
              name="lock"
              size={15}
              style={{flex: 0.1, marginHorizontal: 5}}
            />
            <View
              style={{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                secureTextEntry={this.state.eyeShow ? false : true}
                placeholder=" Mật Khẩu"
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>

            <View style={{flex: 0.1}}>
              <TouchableOpacity
                onPress={() => this.setState({eyeShow: !this.state.eyeShow})}>
                {this.state.eyeShow == true ? (
                  <Icon name="eye" size={15} />
                ) : (
                  <Icon name="eye-slash" size={15} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
              height: 40,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.setState({circleShow: !this.state.circleShow})
              }>
              {this.state.circleShow == true ? (
                <Icon
                  name="check-circle"
                  size={15}
                  style={{color: '#CDC830'}}
                />
              ) : (
                <Icon
                  name="chevron-circle-down"
                  style={{color: '#CDC830'}}
                  size={15}
                />
              )}
            </TouchableOpacity>
            <Text style={{color: '#CDC830'}}> Ghi nhớ mật khẩu</Text>
          </View>

          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate('HomeKh')}
            onPress={() =>
              this.props.loginAction(this.state.user, this.state.password)
            }
            style={{
              backgroundColor: '#CDC830',
              height: 40,
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Đăng Nhập
            </Text>
          </TouchableOpacity>
          <Image
            source={LoadImage.swipe}
            resizeMode="contain"
            style={{height: 130, marginTop: 30}}
          />
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4f7fc',
        }}>
        <Text style={{color: '#C4C2A9', paddingBottom: 10}}>
          Copyright © 2019 FPT Information System
        </Text>
      </View>
      </View>

      
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.loginReducers.data,
    loading: state.loginReducers.loading,
    error: state.loginReducers.error,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
