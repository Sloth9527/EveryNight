/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ListView,
  Navigator,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var REQUEST_URL = 'http://192.168.253.1:18000/record'
class Hotlist extends Component {
  constructor(props){
    super(props);
    this.state = {dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2
         }),
  };
}
  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())  //lamda
      .then((responseData) =>{
        this.setState({
          dataSource:
          this.state.dataSource.cloneWithRows(responseData),

        });
      })
      .done();
      
  }
callback(title){
  this.props.clickHot(title);
}
DayPart (textdata){
  if (textdata.author == null) {
    return (<View style={{width:width,height:height-50,justifyContent: 'center',alignItems: 'center'}} ><Text>小小的窗扉紧闭</Text></View>);
  }
      return (
      <TouchableOpacity  onPress={this.callback.bind(this,textdata.id)} >
      <Image source={{uri:textdata.img}}
        resizeMode={'stretch'}//拉伸图片 resizeMode enum('cover', 'contain', 'stretch') 
        style={{width: width, height: 150}} >
          <View style={{width: width, height: 150,backgroundColor:'rgba(0, 0, 0, 0.4)',justifyContent: 'center',alignItems: 'center'}} >
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}  >{textdata.title}</Text>
            <View style={{flexDirection:'row',marginTop:7}} >
              <Text style={{color:'white',fontSize:13}} >#{textdata.type}    </Text>
              <Text style={{color:'white',fontSize:13}} >/    {textdata.author}</Text>
            </View>
          </View >
      </Image>
      </TouchableOpacity>
      );
  }

  render() {
    if (this.props.page == 2) {
      this.fetchData();
    }
    return (
    <View style={{width:width,height:height-50}} >
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.DayPart.bind(this)}
        style={{marginBottom:50}}
      />
    </View>

    );
  }
}


module.exports = Hotlist;
