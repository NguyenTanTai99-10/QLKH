import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Menu, {MenuItem} from 'react-native-material-menu';

export default class Course extends Component {
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  componentDidUpdate(preProps) {
    const {data, error} = this.props;
    // console.log(data);
    if (data !== null && data !== preProps.data) {
      console.log(this.props.data1.message);
      //   navigation.navigate('HomeKh');
      this.setState({items: data1.data});
    }
    if (error !== null && error !== preProps.error) console.log(error);
  }

  onDeleteItem = (id) => {
    // this.props.deleteAction('', id);

    Alert.alert(
      'Xóa thật à',
      'Suy Nghĩ Kĩ Chưa',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.deleteAction('', id)},
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      // <TouchableOpacity onPress={()=>alert(this.props.id)}>
      <View>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 5,

              elevation: 3,
              borderColor: 'gray',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.8, marginHorizontal: 15, marginVertical: 5}}>
                <Text
                  numberOfLines={2}
                  style={{fontSize: 20, fontWeight: 'bold'}}>
                  {this.props.title}
                </Text>
              </View>
              <View style={{flex: 0.2}}></View>
              <View style={{flex: 0.1, alignItems: 'flex-end'}}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Menu
                    ref={this.setMenuRef}
                    button={
                      <Icon
                        name="dots-three-vertical"
                        size={25}
                        onPress={this.showMenu}></Icon>
                    }>
                    <MenuItem
                      style={{
                        flex: 1,
                        backgroundColor: 'red',
                        alignItems:'center'
                      }}
                      onPress={() => {
                        this.onDeleteItem(this.props.id);
                      }}>
                      <Icons
                        name="trash-alt"
                        size={20}
                        style={{ backgroundColor: 'yellow',marginRight:10}}
                      />
                      <Text
                        style={{
                          
                          backgroundColor: 'white',
                        }}>
                        Delete
                      </Text>
                    </MenuItem>
                    <MenuItem onPress={this.hideMenu}>Edit</MenuItem>
                  </Menu>
                </View>
              </View>

              {/* <Icon name ='dots-three-vertical' size ={25}/> */}
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginHorizontal: 5,
                marginVertical: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                  <Icons name="user-tie" size={15} style={{color: 'yellow'}} />
                </View>

                <View style={{flexDirection: 'row', flex: 0.9}}>
                  <Text> Giảng viên : </Text>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>
                    {this.props.teacher}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                  <Icons name="id-card" size={15} />
                </View>

                <View style={{flexDirection: 'row', flex: 0.9}}>
                  <Text> Cán bộ quản lý : </Text>
                  <Text style={{color: '#CBE943', fontWeight: 'bold'}}>
                    {this.props.management}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                  <Icons
                    name="calendar-alt"
                    size={15}
                    style={{color: '#6688EE'}}
                  />
                </View>

                <View style={{flexDirection: 'row', flex: 0.9}}>
                  <Text> Thời gian : </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    {new Date(this.props.dateStart).toLocaleDateString()}-
                    {new Date(this.props.dateEnd).toLocaleDateString()}
                  </Text>
                  {/*toLocaleDateString() */}
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                  <Icons name="building" size={15} style={{color: '#223F99'}} />
                </View>

                <View style={{flexDirection: 'row', flex: 0.9}}>
                  <Text> Tòa nhà : </Text>
                  <Text style={{fontWeight: 'bold', color: '#6688EE'}}>
                    {this.props.room}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{flex: 0.1, alignItems: 'center'}}>
                  <Icons
                    name="chalkboard-teacher"
                    size={15}
                    style={{color: 'orange'}}
                  />
                </View>

                <View style={{flexDirection: 'row', flex: 0.9}}>
                  <Text> Phòng : </Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.address}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
