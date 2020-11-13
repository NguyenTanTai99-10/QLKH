import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

export default class Course1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Đang diễn ra', id: 1},
        {name: 'Sắp diễn ra', id: 2},
      ],
      selected: 'Đang diễn ra',
    };
  }
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

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>


        <View style={{flex: 0.9}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 5,
            }}>

          </View>

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
              <View style={{flex: 0.7,  marginHorizontal: 15, marginVertical: 5 }}>
                <Text
                  numberOfLines={2}
                  style={{fontSize: 20, fontWeight: 'bold' }}>
                  {this.props.title}
                </Text>
                <View style={{flex: 0.3}} />
              </View>
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
                        onPress={this.showMenu}>
                        {' '}
                      </Icon>
                    }>
                    <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                    <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                    <MenuItem onPress={this.hideMenu} disabled>
                      Menu item 3
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
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
                <View style={{flex: 0.1, alignItems :'center'}}>
                  <Icons name="user-tie" size={15} style={{color: 'yellow'}} />
                </View>

                <View style={{flexDirection: 'row',flex: 0.9}}>
                  <Text > Giảng viên : </Text>
                  <Text style={{color: 'blue', fontWeight: 'bold'}}>
                    {this.props.teacher}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.1, alignItems :'center'}}>
                  <Icons name="id-card" size={15} />
                </View>

                <View style={{flexDirection: 'row',flex: 0.9}}>
                  <Text > Cán bộ quản lý : </Text>
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
                <View style={{flex: 0.1, alignItems :'center'}}>
                  <Icons
                    name="calendar-alt"
                    size={15}
                    style={{color: '#6688EE'}}
                  />
                </View>

                <View style={{flexDirection: 'row',flex: 0.9}}>
                  <Text > Thời gian : </Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.date}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.1, alignItems :'center'}}>
                  <Icons name="building" size={15} style={{color: '#223F99'}} />
                </View>

                <View style={{flexDirection: 'row',flex: 0.9}}>
                  <Text > Tòa nhà : </Text>
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
                <View style={{flex: 0.1, alignItems :'center'}}>
                  <Icons
                    name="chalkboard-teacher"
                    size={15}
                    style={{color: 'orange'}}
                  />
                </View>

                <View style={{flexDirection: 'row',flex: 0.9}}>
                  <Text > Phòng : </Text>
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

const styles = StyleSheet.create({
  DDR: {
    backgroundColor: 'white',

    height: 35,
    width: 150,
    borderWidth: 2,
    borderColor: 'orange',

    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'orange',
  },
});

