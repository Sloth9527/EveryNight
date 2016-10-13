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
var imageTest = 'http://www.qianhuaweb.com/data/attachement/jpg/site2/20121120/00e04cf668ed12157af530.jpg';
var REQUEST_URL = 'http://192.168.253.1:18000/elist'
class List extends Component {
  constructor(props){
    super(props);
    this.state = {dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2
         }),};
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
          loaded:true
        });
      })
      .done();
  }
callback(title){
  this.props.clickE(title);
}
DayPart (textdata){
  var listItems = [];    
  for (var index in textdata.list) {
    var text = (
      <TouchableOpacity  onPress={this.callback.bind(this,textdata.list[index].id)} >
      <Image source={{uri:textdata.list[index].img}}
        resizeMode={'stretch'}//拉伸图片 resizeMode enum('cover', 'contain', 'stretch') 
        style={{width: width, height: 150}} >
          <View style={{width: width, height: 150,backgroundColor:'rgba(0, 0, 0, 0.4)',justifyContent: 'center',alignItems: 'center'}} >
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}  >{textdata.list[index].title}</Text>
            <View style={{flexDirection:'row',marginTop:7}} >
              <Text style={{color:'white',fontSize:13}} >#{textdata.list[index].type}    </Text>
              <Text style={{color:'white',fontSize:13}} >/    {textdata.list[index].author}</Text>
            </View>
          </View >
      </Image>
      </TouchableOpacity>); 
      
        listItems.push(text);
      }
      return (
        <View style={{width: width,paddingTop:10,alignItems: 'center'}}>
          <Text style={{color:'black',fontSize:30,height:50,fontFamily: 'ARDECODE'}}>- {textdata.date.month} . {textdata.date.day} -</Text>
          {listItems}
        </View>
      );
  }

  render() {
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


module.exports = List;
