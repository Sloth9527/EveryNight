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
  Image,
  Text,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var REQUEST_URL = 'http://192.168.253.1:18000/detail?id=';
var passageid = null;

class Passage extends Component {
	constructor(props){
    super(props);
    this.state = {dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2
         }),
    i:false,
    };
}
  componentWillMount(){
    passageid = this.props.id;
    this.fetchData();
  }
  fetchData(){
    fetch('http://192.168.253.1:18000/add?id='+passageid);
    fetch(REQUEST_URL+passageid)
      .then((response) => response.json())  //lamda
      .then((responseData) =>{
        this.setState({
          dataSource:
          this.state.dataSource.cloneWithRows(responseData),
        });
      })
      .done();
  }
    transfer(){
    this.props.navigator.pop({
    });
  }
  listv (textdata){
      return (
        <View style={{width: width,padding:10,alignItems: 'center'}}>
      		<Text style={{width:width-30,fontSize:27,fontWidth:'bold',fontFamily: 'simkai',color:'black',marginBottom:15}} >{textdata.title}</Text>
      		<Text style={{width:width-30,fontFamily: 'simkai',color:'black',marginBottom:10}} >{textdata.author}</Text>
          <View style={{width:width-30,heiget:0.8,borderBottomWidth:0.8,borderColor:'gray'}} ></View>
      		<Text style={{fontSize:15,width:width-30,fontFamily: 'simkai',color:'black',marginTop:10}} >{textdata.text}</Text>
        </View>
      );
  }
  clickzan(){
    this.setState({i:!this.state.i})
  }
  render() {
    var self =this;
    var styleA = null;
    var text = null;
    if (this.state.i) {
      styleA=[styles.zcheck];
      text = ("(1)");
    }
    else
    {
      styleA=[styles.znormal];
      text = null;
    }
    var zan = (<Text 
      onPress={this.clickzan.bind(this)}
      style={styleA}>赞{text} </Text>);

    return (
      <View style={{height:height,width:width}} >
      	<View style={{height:height-65}} >
      	<View style={{flexDirection:'row',borderBottomWidth:1,height:50,backgroundColor:'white',borderColor:'rgb(147, 147, 147)'}} >
      		<View style={{width:50,justifyContent:'center',paddingLeft:10}} ><Text style={{textAlign:'left',fontSize:20,width:50,color:'black'}} onPress={this.transfer.bind(this)}>{'<'}</Text></View>
      		<View style={{width:width-100,justifyContent:'center',height:50,paddingTop:7}} ><Text style={{textAlign:'center',color:'black',fontFamily: 'ARDESTINE',fontSize:33,flex:10}}  >EveryNight</Text></View>
      		<View style={{width:50,justifyContent:'center'}} ><Text></Text></View>
      	</View >
      	<View style={{height:height-65}} >
      		<ListView
        		dataSource={this.state.dataSource}
        		renderRow={this.listv.bind(this)}
        		style={{marginBottom:50}}
      		/>
      	</View>
      </View>
      <View style={{height:40,borderTopWidth:1,flexDirection:'row',paddingRight:20,borderColor:'rgb(147, 147, 147)'}} >
      <View style={{flex:10}} ></View >
      	<View style={{flex:3,justifyContent:'center'}} ><Text style={{textAlign:'center'}} >评论</Text></View>
      	
      	<View style={{flex:3,justifyContent:'center'}} >{zan}</View>
      </View>
      
      </View>
    );
  }
}

var styles = StyleSheet.create({
    znormal: {
        textAlign:'center',
        color:'black',
    },
    zcheck:{
      textAlign:'center',
      color:'red',
    },
});
module.exports = Passage;
