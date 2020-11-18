import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenKH: '',
      tenGV: '',
      fromDay: {
        date: 1,
        mode: 'date',
        show: false,
      },
      toDay: {
        date: 1,
        mode: 'date',
        show: false,
      },

      buildingItems: [],
      buildingValue: null,
      roomItems: [],
      roomValue: null,
    };
  }

  componentDidMount() {
    console.log('did mount toa nha');
    this.props.buildingAction('fff');
  }
  componentDidUpdate(preProps) {
    const {error1, data1} = this.props;
    // if (data1 !== null && data1 !== preProps.data1) {
    //   this.showToast(data1.message);
    //   this.props.courseAction('fff');
    // }

    if (data1 !== null && data1 !== preProps.data1) {
      const arrBuilding = [];
      const arrRoom = [];
      data1.data.map((item) => {
        arrBuilding.push({
          label: item.buildingName,
          value: item._id,
        });
        item.room.map((item2) => {
          arrRoom.push({
            label: item2.roomName,
            value: item2._id,
          });
        });
      });

      this.setState({
        buildingItems: arrBuilding,
        roomItems: arrRoom,
      });
    }
    if (error1 !== null && error1 !== preProps.error1) console.log(error1);
  }

  handle = () => {
    const {tenKH, tenGV, fromDay, toDay, buildingValue, roomValue} = this.state;

    if (
      tenKH === null ||
      tenGV == null ||
      fromDay.date === 1 ||
      toDay.date === 1 ||
      buildingValue === null ||
      roomValue === null
    ) {
      if (tenKH === null || tenKH === '') {
        Alert.alert('Thông báo', 'Chưa nhập tên khóa học');
      } else if (tenGV === null || tenGV === '') {
        Alert.alert('Thông báo', 'Chưa nhập tên giáo viên');
      } else if (fromDay.date === 1 || toDay.date === 1) {
        if (fromDay.date !== 1)
          Alert.alert('Thông báo', 'Chưa nhập ngày kết thúc');
        else if (toDay.date !== 1)
          Alert.alert('Thông báo', 'Chưa nhập ngày bắt đầu');
        else Alert.alert('Thông báo', 'Chưa nhập ngày bắt đầu và kết thúc');
      } else if (buildingValue === null) {
        Alert.alert('Thông báo', 'Chưa chọn tòa nhà');
      } else if (roomValue === null) {
        Alert.alert('Thông báo', 'Chưa chọn phòng');
      } else Alert.alert('Thông báo', 'Chưa đầy đủ thông tin');
    } else {
      // console.log('buildingValues.....');
      // console.log(buildingValue);
      // console.log('Room.....');
      // console.log(roomValue);

      const obj = {
        courseName: tenKH,
        trainer: tenGV,
        startedDate: fromDay.date.toLocaleDateString(),
        endedDate: toDay.date.toLocaleDateString(),
        buildingId: buildingValue,
        roomId: roomValue,

        // courseName: 'Seminar Truyền thông trong dự án',
        // trainer: 'Dương Văn Thủy',
        // startedDate: '2019-12-16T00:00:00.000Z',
        // endedDate: '2019-12-19T00:00:00.000Z',
        // buildingId: '5dcd0d9aa7717013a85cbf7a',
        // roomId: '5dde364030791013bce3f178',
      };
      // console.log('hsajdhasf :'+JSON.stringify(obj) )

      this.props.addAction('ff', obj);
      this.props.navigation.goBack();
    }
  };

  //showTimepicker = () => {
  //  this.showMode('time');
  //};

  // componentDidMount() {
  //   this.props.addAction('jj');
  // }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState({
      ...this.state,
      fromDay: {
        ...this.state.fromDay,
        show: Platform.OS === 'ios',
        date: currentDate === undefined ? 1 : currentDate,
      },
    });
  };
  onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState({
      ...this.state,
      toDay: {
        ...this.state.toDay,
        show: Platform.OS === 'ios',
        date: currentDate === undefined ? 1 : currentDate,
      },
    });
  };

  showMode = (currentMode) => {
    this.setState({
      ...this.state,
      fromDay: {
        ...this.state.fromDay,
        show: true,
        mode: currentMode,
      },
    });
  };
  showMode2 = (currentMode) => {
    this.setState({
      ...this.state,
      toDay: {
        ...this.state.toDay,
        show: true,
        mode: currentMode,
      },
    });
  };
  showDatepicker = () => {
    this.showMode('date');
  };
  showDatepicker2 = () => {
    this.showMode2('date');
  };

  render() {
    // const {show, date, mode} = this.state;
    // const {show1, date1, mode1} = this.state;
    const {
      fromDay,
      toDay,
      buildingItems,
      buildingValue,
      roomValue,
      roomItems,
    } = this.state;

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.viewHeader}>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CourseContainer')}>
              <Icon name="chevron-left" size={30} style={{paddingLeft: 10}} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              TẠO MỚI KHÓA HỌC
            </Text>
          </View>
        </View>
        <View style={styles.viewTMKH}>
          <Text style={{color: '#330099', fontWeight: 'bold'}}>
            Tên khóa học
          </Text>
          <TextInput
            style={{borderRadius: 5, borderWidth: 0.5, marginVertical: 5}}
            placeholder="Nhập tên khóa học"
            onChangeText={(text) => this.setState({tenKH: text})}
          />

          <Text style={{color: '#330099', fontWeight: 'bold'}}>
            Tên giảng viên
          </Text>
          <TextInput
            style={{borderRadius: 5, borderWidth: 0.5, marginVertical: 5}}
            placeholder="Nhập tên giảng viên"
            onChangeText={(text) => this.setState({tenGV: text})}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.45}}>
              <Text style={{color: '#330099', fontWeight: 'bold'}}>
                Ngày bắt đầu
              </Text>

              <TouchableOpacity
                onPress={() => this.showDatepicker()}
                style={styles.toDay}>
                <Text>
                  {fromDay.date === 1
                    ? 'Chọn ngày bắt đầu'
                    : fromDay.date.toLocaleDateString()}
                </Text>
                <Icon
                  name="calendar-alt"
                  size={15}
                  style={{color: '#6688EE'}}
                />
              </TouchableOpacity>
              {fromDay.show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={fromDay.mode}
                  is24Hour={true}
                  onChange={this.onChange}
                />
              )}
            </View>
            <View style={{flex: 0.1}}></View>
            <View style={{flex: 0.45}}>
              <Text style={{color: '#330099', fontWeight: 'bold'}}>
                Ngày kết thúc
              </Text>

              <TouchableOpacity
                onPress={() => this.showDatepicker2()}
                style={styles.toDay}>
                <Text>
                  {toDay.date === 1
                    ? 'Chọn ngày kết thúc'
                    : toDay.date.toLocaleDateString()}
                </Text>
                <Icon
                  name="calendar-alt"
                  size={15}
                  style={{color: '#6688EE'}}
                />
              </TouchableOpacity>
              {toDay.show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={toDay.mode}
                  is24Hour={true}
                  onChange={this.onChange2}
                />
              )}
            </View>
          </View>

          <View>
            <Text style={{color: '#330099', fontWeight: 'bold'}}>Tòa nhà</Text>
            <DropDownPicker
              placeholder="Chọn tòa nhà"
              items={buildingItems}
              defaultValue={buildingValue}
              containerStyle={{height: 60}}
              style={{backgroundColor: 'white', marginVertical: 5}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) =>
                this.setState({buildingValue: item.value})
              }
            />
          </View>

          <View>
            <Text style={{color: '#330099', fontWeight: 'bold'}}>Phòng</Text>
            <DropDownPicker
              placeholder="Chọn phòng"
              items={roomItems}
              defaultValue={roomValue}
              containerStyle={{height: 60}}
              style={{backgroundColor: 'white', marginVertical: 5}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={(item) =>
                this.setState({
                  roomValue: item.value,
                })
              }
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.7}}></View>
            <View style={{flex: 0.3}}>
              <TouchableOpacity
                style={styles.Luu}
                onPress={() => this.handle()}>
                <Icon name="save" size={18} style={{paddingRight: 5}} />
                <Text>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewHeader: {
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
  },
  viewTMKH: {
    flex: 0.9,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  Luu: {
    flexDirection: 'row',
    backgroundColor: '#80FF00',
    marginVertical: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  toDay :{
    borderRadius: 5,
    borderWidth: 0.5,
    marginVertical: 5,
    height: 50,
    // width: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});
