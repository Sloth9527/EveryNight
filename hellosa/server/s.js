//1.得到一本书的详细信息 ： http://localhost:18000/book?id=1 127.0.0.1
var fs=require('fs');
var BooksSummary = JSON.parse(fs.readFileSync('./dt/BooksSummary.json'));
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
var HotList = [
{name:'month',
listid:[4,1,3,6,7,8,9,10,11,12,13,14,15,16],
list:[],
},
{name:'year',
listid:[3,2,5,4,16],
list:[],
}];
for (var i in HotList) {
	for (var lnum in HotList[i].listid ) {
		for (var snum in BooksSummary) {
			if (HotList[i].listid[lnum] == BooksSummary[snum].id ) {
				var text = BooksSummary[snum] ;
				HotList[i].list.push(text);
			}
		}
	}
}
var EList = [
{date:{month:'April',day:'21'},
listid:[1,2,3],
list:[] ,
},
{date:{month:'February',day:'30'},
listid:[4,5,6],
list:[] ,
},
{date:{month:'January ',day:'12'},
listid:[7,8,9],
list:[] ,
},
{date:{month:'January ',day:'11'},
listid:[10,11,12],
list:[] ,
},
{date:{month:'January ',day:'10'},
listid:[13,14,15],
list:[] ,
},
];
for (var k in EList) {
	for (var anum in EList[k].listid) {
		for (var esnum in BooksSummary) {
			if (EList[k].listid[anum] == BooksSummary[esnum].id ) {
				var text2 = BooksSummary[esnum] ;
				EList[k].list.push(text2);
			}
		}
	}
}

var http = require('http'); //http是node.js 的核心组件
var url = require('url');


http.createServer(function(request,response){
	var param = url.parse(request.url,true);
	response.writeHead(200, {'Content-Type': 'text/plain'});
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

console.log('Server running at http://localhost:18000/')
//Server>node test1.js
//ls --->  list:列出当前目录下所有的目录和文件
//cd --->  currentDireactory : 改变当前目录
//node test1.js