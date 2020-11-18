import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loadimage from '../../res/images';

export default class HomeKH extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#eee'}}>
        <View
          style={{
            flex: 0.4,
            backgroundColor: '#eee',
            marginVertical: 20,
            marginHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.6}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="wifi" size={20} style={{color: '#75D328'}} />
                <Text
                  style={{
                    fontSize: 20,
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    color: '#473190',
                  }}>
                  
                  Wifi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                }}>
                <Icon
                  name="calendar-alt"
                  size={30}
                  style={{color: '#75D328'}}
                />
                <Text style={{paddingLeft: 10}}>Thu 2 , Ngay 22/11/2020</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.4,
                borderRadius: 10,
                borderColor: '#75D328',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#75D328'}}>
                Time
              </Text>
            </View>
          </View>
          {/* <View style={{ flexDirection : "row", alignItems :'center ' , justifyContent:'center', }}>
              <View style={{flex : 0.5  }}>
                  <ImageBackground   source = { Loadimage.bg_bt_request_late} style={{Width : 50 , height : 50}}>
                      
                      <Image source = { Loadimage.ic_request_late} style={{Width : 30 , height : 30}} ></Image>  
                 </ImageBackground>

              </View>

          </View> */}
        </View>
        <View style={{flex: 0.6, backgroundColor: '#D4C3C3'}}>
            <View
                style={{
                flex: 0.3,
                flexDirection: 'row',
                
                marginHorizontal: 20,
                marginVertical: 10,
                }}>
                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('CourseContainer')} style={{borderRadius : 20 , shadowColor : 'red' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>RMSI</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('flastlist1')} style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_eleaning}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>eLearning</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginContainer')} style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center'}}>RMSI</Text>
                </TouchableOpacity>
                </View>
            </View> 

            <View
                style={{
                flex: 0.3,
                flexDirection: 'row',
                
                marginHorizontal: 20,
                marginVertical: 10,
                }}>
                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>RMSI</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_eleaning}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>eLearning</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center'}}>RMSI</Text>
                </TouchableOpacity>
                </View>
            </View>


            <View
                style={{
                flex: 0.3,
                flexDirection: 'row',
                
                marginHorizontal: 20,
                marginVertical: 10,
                }}>
                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>RMSI</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_eleaning}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center', fontWeight: 'bold', color: '#473190'}}>eLearning</Text>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flex: 3.3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{borderRadius : 20 , shadowRadius : 'gray' , height : 100 , backgroundColor :'#eee'}}>
                    <Image
                    source={Loadimage.ic_rmis}
                    resizeMode='contain'
                    style={{width: 100 ,height:80}}
                    />
                    <Text style={{alignSelf :'center'}}>RMSI</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
