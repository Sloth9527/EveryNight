
//1.得到一本书的详细信息 ： http://localhost:18000/book?id=1 127.0.0.1
var fs=require('fs');
var db = require('./db.js');
// var BooksSummary = JSON.parse(fs.readFileSync('./dt/BooksSummary.json'));
//fs.writeFileSync('./dt/BooksSummary.json',JSON.stringify(BooksSummary));
var Book = JSON.parse(fs.readFileSync('./dt/Book.json'));
//fs.writeFileSync('./dt/Book.json',JSON.stringify(Book));
var record = [];
var recordlist = [];

var detail=[{
	title:null,
	author:null,
	text:null,
	img:null,
}];
var wrong=[{
	title:'诶呀，出错了',
	author:null,
	text:'忘存文章了诶',
	img:null,
}];
// var HotList = JSON.parse(fs.readFileSync('./dt/HotList.json'));
// var EList = JSON.parse(fs.readFileSync('./dt/EList.json'));
var HotList,EList;
db.find({"list":"EList"},function(res){
		EList =res[0].data;
})
db.find({"list":"HotList"},function(res){
		HotList = res[0].data;
})

var http = require('http'); //http是node.js 的核心组件
var url = require('url');
var db = require('./db.js');

http.createServer(function(request,response){
	var param = url.parse(request.url,true);
	response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
	switch(param.pathname){
		case'/elist':
		//var id = param.query["id"];
		//response.end(JSON.stringify(Books[id]));
		response.end(JSON.stringify(EList));
		break;
		case'/hotlist':
		var hotlistname = param.query['name'];
		var list = 0;
		for (var i in HotList ) {
			if (HotList[i].name == hotlistname ) {
			response.end(JSON.stringify(HotList[i].list));
			}
		}
		response.end('');
		break;
		case'/record':
		recordlist.splice(0,recordlist.length);
		for (var index in record) {
			for (var indexb in BooksSummary) {
				if (record[index] == BooksSummary[indexb].id) {
					recordlist.push(BooksSummary[indexb]);
				}
			}
		}
		if (recordlist.length == 0) {response.end(JSON.stringify(wrong));}
		response.end(JSON.stringify(recordlist));
		break;
		case'/detail':
		var pageid = param.query['id'];
		var fetchsuccess = false;
		for (var index in BooksSummary) {
			if (pageid == BooksSummary[index].id) {
				detail[0].title = BooksSummary[index].title;
				detail[0].author= BooksSummary[index].author;
				detail[0].img = BooksSummary[index].img;	
			}
		}
		for (var indexbook in Book) {
			if (pageid == Book[indexbook].id) {
				detail[0].text = Book[indexbook].text;
				fetchsuccess = true;
			}
		}
		if (fetchsuccess) {
			response.end(JSON.stringify(detail));
		}
		response.end(JSON.stringify(wrong));
		break;
		case'/add':
		var id = param.query['id'];
		for (var index in record) {
			if (record[index] == id) {
				record.splice(index,1);
			}
		}
		record.unshift(id);
		response.end(JSON.stringify(record));
		break;
		default:
		response.end('404 Page Not Found!');
		break;
	}
	
}).listen(18000);//端口号

console.log('Server running at http://localhost:18000/');
//Server>node test1.js
//ls --->  list:列出当前目录下所有的目录和文件
//cd --->  currentDireactory : 改变当前目录
