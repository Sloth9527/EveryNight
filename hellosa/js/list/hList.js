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
////////////////////////////////////
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
////////////////////////////////////
var REQUEST_URL = 'http://192.168.253.1:18000/hotlist?name='
////////////////////////////////////
class List extends Component {
  constructor(props){
    super(props);
    this.state = {dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2
         }),
                  name:'year',
  };
}
////////////////////////////////////
  componentWillMount(){
    this.fetchData();
  }
////////////////////////////////////
  fetchData(){
    fetch(REQUEST_URL+this.state.name)
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
    this.props.clickH(title);
  }
////////////////////////////////////
DayPart (textdata){
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
////////////////////////////////////
  render() {
        var styleY = null;
        var styleM = null;
    var text = null;
    if (this.state.name == 'year') {
      styleY = [styles.zcheck];
      styleM = [styles.znormal];
    }
    else
    {
      styleY = [styles.znormal];
      styleM = [styles.zcheck];
    }

    var month = (<Text style={styleM} onPress={()=>{this.setState({name:'month'});this.fetchData();}} >月 榜</Text>);
    var year = (<Text style={styleY} onPress={()=>{this.setState({name:'year'});this.fetchData();}}>年 榜</Text>);
    return (
    <View style={{width:width,height:height-50}} >
    <View style={{flexDirection:'row',width:width,height:40,paddingTop:10}} >
    {month}{year}
    </View>
    <View style={{width:width,height:height-90}} >
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.DayPart.bind(this)}
        style={{marginBottom:50}}
      />
      </View>
    </View>

    );
  }
}

var styles = StyleSheet.create({
    zcheck: {
      textAlign:'center',
      fontFamily: 'ARDESTINE',
      fontSize:18,
      color:'black',
      flex:1,
    },
    znormal:{
      textAlign:'center',
      fontFamily: 'ARDESTINE',
      fontSize:18,
      color:'gray',
      flex:1,
    },
});
module.exports = List;
