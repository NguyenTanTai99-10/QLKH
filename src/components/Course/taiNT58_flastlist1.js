import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity ,StyleSheet} from 'react-native';
import Course1 from '../Screen/Course1';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {courseAction} from '../../redux/actions/actionCourse';

export default class Flastlist1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data1: [
        {name: 'Đang diễn ra', id: 1},
        {name: 'Sắp diễn ra', id: 2},
      ],
      selected: 'Đang diễn ra',
    };
  }

  // onSelect = (data) => {
  //   let listNew = [...this.state.data, data];
  //   this.setState({data: listNew});
  // };
  // componentDidMount() {
  //   this.props.courseAction('jj');

   
  // }
  componentDidUpdate(preProps) {
    const {data, error} = this.props;
    // console.log(data);
    if (data !== null && data !== preProps.data) {
      //   navigation.navigate('HomeKh');
      this.setState({items: data.data});
    }
    if (error !== null && error !== preProps.error) console.log(error);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.1,
            backgroundColor: 'white',
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowRadius: 1,

            elevation: 10,
            borderColor: 'gray',
          }}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('HomeKh')}>
              <Icon name="chevron-left" size={30} style={{paddingLeft: 10}} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              QUẢN LÝ BUỔI HỌC
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Add', {onSelect: this.onSelect})  }>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection :"row"}}>
          <View style={{flex :0.1}}/>
          <View style={{flex:0.8,flexDirection: 'row' ,borderRadius:5, justifyContent:'center' , marginVertical: 5, backgroundColor:'orange' }}>

              {this.state.data1.map((e) => (
                <TouchableOpacity
                  onPress={() => this.setState({selected: e.name})}
                  key={e.id}
                  style={[
                    styles.DDR,
                    this.state.selected === e.name && styles.active,
                  ]}>
                  <Text>{e.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{flex :0.1}}/>

        </View>
        
        
          <FlatList
          style={{flex :0.8}}
            data={this.state.items}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <Course1
                title={item.title}
                teacher={item.tenGV}
                management={item.canBoQuanLy}
                date={item.time}
                room={item.toaNha}
                address={item.phong}
              />
            )}
          />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  DDR: {
    backgroundColor: 'white',

    height: 35,
    width: 165,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius : 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'orange',
  },
});