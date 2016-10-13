/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  ListView,
  Image,
  ViewPagerAndroid,
  Text,
  View
} from 'react-native';


var Tabs = require('react-native-tabs');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var EList = require('./list/eList.js');
var EDetail = require('./detail/Detail.js');

var HList = require('./list/hList.js');
var Hotlist = require('./list/hotList.js');

class IndexList extends Component {

constructor(props){
    super(props);

    this.state = {page:'1'};
}


  go(el) {

    this.setState({page:el.props.name});
    this.viewPager.setPage(Number(this.state.page));
  }

  transfer(idPassage){
    this.props.navigator.push({
      name: 'page1',
      component: EDetail,
      params:{id:idPassage},
    });
  }

  render() {
    var self = this;
    return (
    <View style={{width:width,height:height-20,flexDirection:'column'}}>
      <View style={{height:50,width:width,backgroundColor:'rgb(255, 255, 255)',justifyContent:'center',borderBottomWidth:0.8,borderColor:'rgb(147, 147, 147)'}} >
        <Text style={{textAlign:'center',fontFamily: 'ARDESTINE',fontSize:33,color:'black'}} >EveryNight</Text>
      </View> 
      <ViewPagerAndroid
        style={{flex:15,backgroundColor:'rgb(255, 255, 255)'}} 
        onPageSelected = {pl=>this.setState({page:pl.nativeEvent.position})}
        ref={viewPager => { this.viewPager = viewPager; }}
        initialPage={Number(this.state.page)}>
          <View>
            <HList clickH={this.transfer.bind(this)} />
          </View>
          <View  >
            <EList clickE={this.transfer.bind(this)} />
            
          </View>
          <View>
            <Hotlist clickHot={this.transfer.bind(this)} page={this.state.page}/>
          </View>
      </ViewPagerAndroid>
      <View style={{flex:1}} >  
        <Tabs selected={this.state.page}
          style={{backgroundColor:'white',borderTopWidth:0.8,borderColor:'rgb(147, 147, 147)'}}
          selectedStyle={{color:'black',fontWeight:'bold'}} 
          onSelect={el=>this.go(el)}>
            <Text name="0" >排行榜</Text>
            <Text name="1" >今日精选</Text>
            <Text name="2" >足迹</Text>
        </Tabs> 
      </View>
    </View>
      );
  }
}

module.exports = IndexList;