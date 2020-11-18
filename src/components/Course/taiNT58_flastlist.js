import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Course from '../ItemsComponent/taiNT58_Course';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {courseAction} from '../../redux/actions/taiNT58_index';

export default class Flastlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  onSelect = (data) => {
    let listNew = [...this.props.data, data];
    this.setState({data: listNew});
  };
  // componentDidMount(){
  //   this.props &&
  //   this.props.data &&
  //   this.setState({items:this.props.data.data})

  // }

  componentDidMount() {
    this.props.courseAction('jj');
  }
  componentDidUpdate(preProps, preState) {
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
              QUẢN LÝ KHÓA HỌC
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
              onPress={() =>
                this.props.navigation.navigate('AddCourseContainer', {
                  onSelect: this.onSelect,
                })
              }>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
 
        <FlatList
          style={{flex: 0.9}}
          data={this.state.items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Course
                title={item.courseName}
                teacher={item.trainer}
                management={item.created_by}
                dateStart={item.startedDate}
                dateEnd={item.endedDate}
                room={item.roomName}
                address={item.buildingName}
                id={item.course_id}
                {...this.props}
              />
            );
          }}
        />
      </View>
    );
  }
}
