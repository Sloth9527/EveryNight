//1.得到一本书的详细信息 ： http://localhost:18000/book?id=1 127.0.0.1
var BooksSummary = [
                {id:'1',title:'玩儿鲨鱼的女人',author:'大冰',type:'故事',
                img:'http://pic15.nipic.com/20110802/1808028_101053866000_2.jpg'},
                {id:'2',title:'从你的全世界路过',author:'张嘉佳',type:'微博',
                img:'http://img1.ph.126.net/l-nzND0OVyY8JczQJpcLsA==/6598285826518463995.jpg'},
                {id:'3',title:'没有谁是一座孤岛',author:'加布瑞埃拉泽文',type:'小说',
                img:'http://img2.ph.126.net/x11XEjW8DeLOyiOFqnIenQ==/6631334947024814537.jpg'},
                {id:'4',title:'摆渡人',author:'克莱儿·麦克福尔',type:'小说',
                img:'http://img0.ph.126.net/n2K8Im0ibFVI_-FR4dlb8g==/6597190712937013302.jpg'},
                {id:'5',title:'白夜行',author:'东野圭吾',type:'推理',
                img:'http://g.hiphotos.baidu.com/baike/c0=baike60,5,5,60,20/sign=0f9b86a9d72a6059461de948495d5ffe/a686c9177f3e670997a92f9f3bc79f3df8dc5520.jpg'},
                {id:'6',title:'三体',author:'刘慈欣',type:'科幻',
                img:'http://bizhi.33lc.com/uploadfile/2015/0902/20150902112621864.jpg'},
                {id:'7',title:'解忧杂货店',author:'东野圭吾',type:'推理',
                img:'http://img1.ph.126.net/MnNaMscrjDHq7E-baU-FZQ==/3246532381480748605.jpg'},
                {id:'8',title:'阿弥陀佛么么哒',author:'大冰',type:'杂文',
                img:'http://img1.ph.126.net/dByuXNQQCCbge1t1rITg0A==/6630684036141329704.jpg'},
                {id:'9',title:'小王子',author:'圣埃克苏佩里',type:'童话',
                img:'http://img2.ph.126.net/hbFHpozTNp0bI0CyTZgTMw==/1621577340931220177.jpg'},
                {id:'10',title:'萤火虫小巷',author:'汉娜',type:'小说',
                img:'http://img2.ph.126.net/Kqb20FxrQWGtXOtKj0plmQ==/2860911663304760156.jpg'},
                {id:'11',title:'百年孤独',author:'马尔克斯',type:'名著',
                img:'http://img2.ph.126.net/gEkVjVzdOyLhuaOIDxFg_w==/6597780051169279280.jpg'},
                {id:'12',title:'偷影子的人',author:'马克·李维',type:'小说',
                img:'http://img1.ph.126.net/R6Qc-hn6eVXyGr2f3CTs6w==/1165024928622511108.jpg'},
                {id:'13',title:'边城',author:'沈从文',type:'小说',
                img:'http://img1.ph.126.net/poNTxJa4akqi4wUwVJsTCw==/65302194614042794.jpg'},
                {id:'14',title:'老人与海',author:'海明威',type:'小说',
                img:'http://img1.ph.126.net/9LtYD5LHYtTrxmJ362V4-Q==/180988410042225610.jpg'},
                {id:'15',title:'假如你不够爱我',author:'江雪落',type:'小说',
                img:'http://img1.ph.126.net/SQuETpawwj7vXqtY-a6Cjg==/2648398055887488517.jpg'},
                {id:'16',title:'第七天',author:'余华',type:'小说',
                img:'http://img0.ph.126.net/lg3T1BiPodudGwrWJV2__A==/6630070508653030500.jpg'},
              ];
var Book = [
{id:1,
text:'她说：你知道吗？走遍了大半个地球，才明白这两个字多么弥足珍贵。\n\n我问是哪两个字。\n\n她轻轻地说：担心。\n\n你敢拿根棍儿去戳醒印尼巨蜥科莫多龙吗？\n\n你敢在金塔纳罗奥淋上半个月的雨水，等待美洲鳄吗？\n\n你敢坐着导航失灵的船漂在龙卷风肆虐的巴拿马海域，三次被雷劈吗？\n\n你敢擎着两只冰镐高原攀冰，在四川阿坝州双桥沟挑战wl4高原冰瀑吗？\n\n你敢在南美海域自由潜，用渔枪捕猎海底十大毒物之一的狮子鱼吗？\n\n你敢冒着被顶翻船的危险，去拍摄求偶期的大翅鲸吗？\n\n你敢潜入海底贴身拍摄牛鲨、虎鲨、大白鲨吗？\n\n你敢潜入海底零距离拍摄大青鲨吗？\n\n你敢摸着两头护士鲨哄它们睡觉吗？\n\n…………\n\n以上种种，我也不敢。\n\n但我的朋友小芸豆敢。\n\n（一）\n小芸豆是我认识的最亡命的女人，亡命得不要不要的。\n\n很久以来，我对她的评价只有一句话：姑娘，你真是条汉子！\n\n也有人评价她是个长得像林黛玉的孙二娘，那人是拍电影的，叫冯小刚。\n\n还有人评价她真的很漂亮，漂亮到懒得把自己的男朋友介绍给她认识，那人是演电影的，叫angelababy（演员杨颖）。\n\n小芸豆不是演员没演过戏，但她的彪悍事迹海了去了，秒杀很多狗血剧。\n\n有一遭，她去北欧旅行，打电话回来和我聊天，气喘吁吁的，令人浮想联翩。\n\n我问她是不是正在啪啪啪，若是的话希望她礼貌地挂断电话，尊重一下我这个单身狗，同时大家友尽。\n\n她操着温州话骂我，bbbb了半天……\n\n然后气喘吁吁地喊：老娘刚捉了个强盗！打电话来和你分享一下！\n\n小芸豆在挪威首都奥斯陆问路，找海盗博物馆。\n\n白天的奥斯陆荒凉得好比大城乡结合部，好不容易遇到一个穿着帽衫的小伙子，又高又帅，还很热情。\n\n小伙子热情地指了路，又关心地询问了小芸豆的国籍、星座、行程，以及是不是一个人来玩儿的……\n\n然后，小伙子掏出一把小折刀，热情地抵在小芸豆的喉咙上。\n\n小强盗拿走了小芸豆的包包，临走的时候两个人还客气地互道再见。\n\n小芸豆旅行的履历丰富，几乎蹚过大半个地球，她懂得明哲保身有多么重要，反正包里也没什么钱，就当是赈灾了吧。\n\n但走出几步后，她猛地一刹车！\n\n不对，我相机的存储卡还在包里呢！\n\n钱可以不要，几千张世界各地的照片不能不要。她张开双臂转身狂追，火影忍者一样。\n\n一边跑一边喊：包！包！包！包！包！\n\n她一着急，喊的不是英语。\n\n小强盗停下来看了她一会儿，然后夺命狂奔，撞了鬼一样。\n\n小芸豆是温州人，温州人管包不叫“bao”，叫作“bo”。\n\n“bo”连续发音的效果，你自行脑补一下。\n\n两个人一前一后冲过街道冲过小巷翻过围墙跳过栅栏……\n\n小芸豆给我打电话分享战绩时，小强盗也在，他趴在地上，小芸豆的脚踩在他脑袋上。\n\n小芸豆让我和他打个招呼，我英语不好，半天才憋出来一句：how are you（你好吗）？\n\n话一出口，我就后悔了，这句话说得太不人道了。\n\n三月的北欧积雪未消，他的脸一定很凉……\n\n他一定很后悔招惹这个娇小的中国小姑娘。\n\n南拳，擅长短手连打，以小打大、以巧打拙、以快打慢、稳马硬桥、以声助威。\n\n温州南拳的精髓更是力从根起，势势相连。\n\n小强盗一定不知道，这个边吆喝边揍他的小姑娘，还是个温州南拳推马高手。\n\n他一定也不知道，这个小姑娘练拳舞剑的镜头上过cctv（中国中央电视台）的频道宣传片……\n\n警察赶到时，小强盗的脸已经快被冻在地面上了，眼泪鼻涕流了一地，结了冰。\n\n勇斗挪威强盗的事迹和图片，小芸豆当天就发了朋友圈，过了一段时间，她又删了。\n\n我问她，这么珍贵的资料干吗要删？\n\n　　半天，对话框里才蹦出来一条回复：怕有人会担心。\n\　　怕谁担心？\n\　　她没回复我，这丫头片子不知又跑到了地球的哪个角落，忙着折腾生命。\n\　　（二）\　　小芸豆胆大，胆大心细人好。\n\　　她的胸和她的胆子一样大，她的腰和她的心一样细，她的皮肤和她的人一样好。\n\　　和她相处是件愉快的事，她朋友虽多，却很懂得照顾别人的感受，大家都爱她。\n\　　有一次在上海小聚，一堆人在上海一号唱k。\n\　　有个北京来的姑娘闷闷不乐，她搂着那姑娘的脖子安慰了半天，又把我喊过去，说：大冰是个婚恋情感作家，懂很多人生道理，让他开导开导你。\n\　　我慌忙逃，呸啊！我是个野生作家好不好，鬼才是“婚恋情感作家”呢，搞得我像个鸡汤段子手似的。\n\　　没逃得了，小芸豆力气大，掐着我脖颈儿把我给提溜回来了。\n\　　那个漂亮姑娘面临的问题司空见惯：和男票（男朋友）性格不合，生活方式不合，相处得越来越不合，她不知如何是好了。\n\　　她一脸期待地看着我，等着我指点迷津。\n\　　我既不认识这个姑娘也不认识她的男朋友，我能给她出什么主意？我抿着嘴不说话……\n\　　小芸豆的手掐在我脖子上，收得越来越紧。\n\　　她常年攀岩攀冰，手劲儿忒大了，脖子快断了。\n\　　我只好胡诌道：\n\　　……女人看男人，一般看他的社会属性；男人看女人，一般看她的自然属性。一般来说，这是最基本的男女关系定律，但如果完全按照这两种属性来处理男女关系，势必反受其害。同理，若两种属性之间出现了难以调和的矛盾，缘分也是难免早尽……\n\　　那个姑娘眼睛一亮，点点头，说她明白了。\n\　　明白什么了？我什么也没说啊！\n\　　…………\n\　　几个月后在网上看到了那姑娘的照片，以及和“国民老公”王思聪分手的消息。\n\　　我郑重声明：我什么也没说和我没关系不许微博骂我。\n\　　我给小芸豆打电话，搞什么搞？干吗当时不把人家的背景给我说清楚！\n\　　小芸豆奇怪地反问：干吗要说背景？管她是什么背景，她当时都只是个需要人关心的小姑娘而已。\n\　　小芸豆说，你是我朋友，她也是我朋友，朋友就是朋友，理应互相关心、互相担心，和背景没关系。\n\n　　我觉得小芸豆说得很有道理！\n\n　　我再次郑重声明：我什么也没说和我没关系不许微博骂我。\n\n　　（三）\n　　小芸豆是个称职的朋友。\n\n　　她是个很乐于分享的人，她常年环球旅行，每到一个地方都给我发照片。知我俗务缠身，没太多机会踏出国门，她专门拍些罕见的美景给我看：北极圈的剑芒极光，南极大陆的活qq，东非草原的撒尿大象，汤加15米长的鲸鱼，东京涩谷的童颜巨乳，马丘比丘的旭日阳光……\n\n　　有段时间，我的电脑屏保图片每隔几天就换一张。\n\n　　她人物拍得也不错，我最喜欢她拍的一组孩子的照片。她那时给国内某个山区小学筹备图书馆，每年定期亲自背书进山，连续背了五年……\n\n　　其实小芸豆最擅长的还是潜水拍摄，她基本上拍遍了大半个地球，全中国拍鲨鱼拍鲸鱼数她拍得最多最好，也最近。\n\n　　她没被鲨鱼给吃了，没被鲸鱼的尾巴给拍死，真是个奇迹……\n\n　　总的来说，她是个“五毒俱全”的女人：独立的处世观价值观，独立的判断思辨能力，独特的人格魅力，独特的生活方式，以及很爱读书。\n\n　　我曾不止一次跟人说过，你们都认为我是个旅行达人，但跟这个小娘们儿比，我那点儿旅行经历当真是毛毛雨。不夸张地讲，小芸豆若有一天提笔写书描述自己的经历，基本可以给中国当下的旅行攻略文学画个句号了。\n\n　　我劝她写书，她和我打哈哈。\n\n　　她说：我的旅行不过是我个人的生命体验而已，我还这么年轻，有什么资格这么早就来总结人生？这是对我自己不负责任，对读者也不负责，万一误导了大家怎么办？\n\n　　她说，将来再说吧，四十不惑后再写吧。\n\n　　我说：小芸豆你看，那么多比你还要年轻的人跑了一趟欧洲、美洲，去了几次尼泊尔、印度、东南亚，就能写出连篇累牍的人生感言，也没见有几个读者跳出来骂他们一瓶子不满半瓶子晃荡啊，虽然无营养，但也无害啊……\n\n　　她说：他们写他们的，关你屁事？关我屁事？\n\n　　她横我一眼，凶巴巴地说：大冰，你把安全带扣上，安全第一。\n\n　　说这段话时，我们在上海，刚在地摊儿边吃完小烧烤，她开车送我回住处。\n\n　　刚吃完东西就扣安全带，太勒得慌。我说算了吧，总共两三公里的路，用得着吗？\n\n　　她不依，我不扣她就不开车。\n\n　　她皱着眉头说：把安全带扣上，安全第一！\n\n　　我扣上，又偷偷松开，她嘎吱一声在路边刹住车，弯曲手指关节，往我脑袋上栗凿。\n\n　　干吗这么凶，至于吗？一根安全带而已啊。\n\n　　小芸豆认真地说：不系安全带，万一出车祸，你死了怎么办？\n\n　　午夜的上海马路荒凉，半天才慢悠悠地驶过一辆出租车，怎么看也不像车祸现场。\n\n　　我说：小芸豆，你不是出了名的亡命吗？你担的这是哪门子心啊？\n\n　　我开玩笑说：反正你那么多，又不缺我一个，死就死了呗……\n\n　　我说：行了赶紧开车吧，别担心了。\n\n　　我喊：小芸豆，小芸豆……\n\n　　小芸豆，好端端的，你发什么呆？\n\n　　我吓了一跳，小芸豆，你怎么哭了？\n\n　　（四）\n\n　　小芸豆头抵在方向盘上，眼泪顺着尖尖的下巴往下淌。\n\n　　一滴，两滴，扑簌有声。\n\n　　从没见过她这副模样，我傻了，我说错什么了吗？\n\n　　小芸豆，如果我说错话了我道歉，你别哭了好吗？你吓着我了。\n\n　　喂喂喂，小芸豆，你怎么不说话？\n\n　　良久，她才开口：\n\n　　大冰，你问过我为什么要删掉挪威的那条朋友圈信息，我回复过你，怕有人会担心……\n\n　　她说她删掉那条朋友圈信息时，人在火葬场。\n\n'
},
];
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