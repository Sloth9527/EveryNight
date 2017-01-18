// /***
// *net start MongoDB 启动mongdb服务器
// *shell后台管理 mongo --port 9352
// *db 命令用于查看当前操作的文档（数据库）
// *use DATABASE_NAME 如果数据库不存在，则创建数据库，否则切换到指定数据库。
// *show dbs 查看所有数据库
// *db.dropDatabase() 删除数据库
// *db.collection.drop() 集合删除
// *
// ***/
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:9352/everydb';
var async = require("async");

function insertData(db,data,callback){
	//连接到表  
	var collection = db.collection('list');
	collection.insert(data,function(err,result){
		if(err){
			console.log("Error:"+err);
			return;
		}
		callback(result);
	});
};
function selectData(db,data,callback){
	var collection = db.collection('list');
	collection.find(data).toArray(function(err,result){
		if(err){
			console.log("Error:"+err);
			return;
		}
		callback(result);
	});
};
var connect = function(method,data,callback){
	MongoClient.connect(DB_CONN_STR,function(err,db){
		console.log("连接成功！");
		method(db,data,function(result){
			console.log("断开连接");
			db.close();
			callback(result);
		})
	});
};
var db = {
	insert:function(data){
		connect(insertData,data,function(res){
			
		});
	},
	find:function(data,callback){
		connect(selectData,data,function(res){
			callback(res);
		});
	}
}
module.exports = db;