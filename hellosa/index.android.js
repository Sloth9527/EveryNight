/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var MainPage = require('./js/mainPage.js');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  ListView,
  Image,
  Text,
  View
} from 'react-native';


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


class hellosa extends Component {

  	render() {

    	return (
    		<View style={{height:height}} > 

      			<Navigator
          			initialRoute= {{
            		component: MainPage,//跳转到component
            		name: 'page1' //页面的名字
          			}}

          			configureScene={() => {
              		return Navigator.SceneConfigs.FadeAndroid;
          			}}

          			renderScene={(route, navigator) => {
            		let Component = route.component;
            		if(route.component) {
              		return <Component {...route.params} navigator={navigator} />}
         			 }} />

    		</View>
    	);
  	}
}

AppRegistry.registerComponent('hellosa', () => hellosa);
