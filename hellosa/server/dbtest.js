var db = require('./db.js');
// var async = require("async");

// var a;
// var finddata = [{i:1},{i:2}];
// async.waterfall([
// 	function(callback){
// 		db.find({"i":"1"},function(res){
// 			a =res;
// 			callback();
// 		});
// 	}
// 	],function(){
// 		console.log("end");
// 		console.log(a);
// 	});
// console.log("啊");
// console.log(a);
// async.waterfall([
//     function(callback) {
//     	console.log("d");
//         callback(null, 'one');
//     },
//     function(arg1, callback) {
//         // arg1 now equals 'three'
//         callback(null, 'done');
//     }
// ], function (err, result) {
// 	console.log("c");
//     // result now equals 'done'
// });


//1.得到一本书的详细信息 ： http://localhost:18000/book?id=1 127.0.0.1
var fs=require('fs');

var HotList = JSON.parse(fs.readFileSync('./dt/HotList.json'));
var EList = JSON.parse(fs.readFileSync('./dt/EList.json'));
db.insert({"list":"EList","data":EList});
db.insert({"list":"HotList","data":HotList});
// db.find({"list":"EList"},function(res){
// 		console.log(res[0].data === HotList);
// })
