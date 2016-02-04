var http = require('http');

var spa = require('D:\\node\\node_modules\\superagent');
var op={
        host:'10.17.171.11',
        port:8080,
        method:'GET',
        url:'https://tpssl.hd.mi.com/gettimestamp',
        headers:{
            'Cookie':'muuid=1450770821802_2635; xmuuid=XMGUEST-976AEF60-C0A6-11E5-834E-79B11ECF98D2; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; _newdevuuid=I1D5ftKnOayvI9zdSiBYh1OGIOfX9IrvTvTbIwaBwOaUhIUO77bcfznWqwIzzQeOM9qRjJp5MSeis5YxstEUQ53QPFGtpwZundIzpT6UY983gcTIqmCJt8qJET29AdWXSzzhq1CCw2XoineYZbmo7WkIiRG4KKlVb4tKAyMiFBkpY013SxjhCIe6MrdAQ2t4zkA2VbMN; _mmsid=1453949121424.6199; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1453949122; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1453949122; xm_link_history=%2FmbMDmXCucXOx%2BkC7vXn3B8LZ1ptrijbhb6UGhovc4c%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A308C3077802E17DF9B411621A6CC1C67F639F5EC59DBF0BF17CF4741C2E2AD16BD35F294C33D34BCE3FDAC843C8FA1B31A; msttime=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; msttime1=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; xm_user_www_num=1; lastsource=s1.mi.com; mstz=08fae3d5cb3abaaf-5b1e31a52befa8ca|javascript%3Avoid(0)%3B|1244598607.113|pcpid|http%3A%2F%2Fwww.mi.com%2Fmi4%2F|http%3A%2F%2Fstatic.mi.com%2Fcart%2F; mstuid=1453425744489_2785; xm_vistor=1453425744489_2785_1453959287121-1453960454783',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate, sdch',
            'Accept-Language':'zh-CN,zh;q=0.8',
            'Cache-Control':'max-age=0',
            'Connection':'keep-alive',
            'Host':'tpssl.hd.mi.com',
            'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
        }
    }

// setInterval(function () {spa
	function a(){spa
	.get('10.17.171.11:8080')
	.set('Host', 'www.baidu.com')
	// .set('Port',8080)
	// .query({jsonpcallback:'jQuery11130995856573805213_1453949234208',_:'1453949234209'})
	// .set('Headers',op.headers)
	.end(function(data){
		console.log(data);
	});
}
a();
// });},10);
//http://cart.mi.com/cart/add/1155000004-2142900032%7C2153900027%7C2142900027?jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383

//http://cart.mi.com/cart/add/2152700002?jsonpcallback=jQuery11130995856573805213_1453949234208&_=1453949234209

//http.createServer().listen(3000);


//checkout

//http://order.mi.com/buy/checkoutPreCheck.php?r=50613.1453960470&jsonpcallback=jQuery1113000016070972196757793_1453960451290&_=1453960451292

//jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383

//http://order.mi.com/buy/checkoutPreCheck.php?r=50613.1453960470&jsonpcallback=jQuery11130607881473377347_1453959875380&_=1453959875383

/*
muuid=1450770821802_2635; xmuuid=XMGUEST-976AEF60-C0A6-11E5-834E-79B11ECF98D2; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; _newdevuuid=I1D5ftKnOayvI9zdSiBYh1OGIOfX9IrvTvTbIwaBwOaUhIUO77bcfznWqwIzzQeOM9qRjJp5MSeis5YxstEUQ53QPFGtpwZundIzpT6UY983gcTIqmCJt8qJET29AdWXSzzhq1CCw2XoineYZbmo7WkIiRG4KKlVb4tKAyMiFBkpY013SxjhCIe6MrdAQ2t4zkA2VbMN; _mmsid=1453949121424.6199; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1453949122; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1453949122; xm_link_history=%2FmbMDmXCucXOx%2BkC7vXn3B8LZ1ptrijbhb6UGhovc4c%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; AWSELB=717359E51ECF69FBB072CF5F1FD918BF783E0B6A308C3077802E17DF9B411621A6CC1C67F639F5EC59DBF0BF17CF4741C2E2AD16BD35F294C33D34BCE3FDAC843C8FA1B31A; msttime=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; msttime1=http%3A%2F%2Fstatic.mi.com%2Fcart%2F; xm_user_www_num=1; lastsource=s1.mi.com; mstz=08fae3d5cb3abaaf-5b1e31a52befa8ca|javascript%3Avoid(0)%3B|1244598607.113|pcpid|http%3A%2F%2Fwww.mi.com%2Fmi4%2F|http%3A%2F%2Fstatic.mi.com%2Fcart%2F; mstuid=1453425744489_2785; xm_vistor=1453425744489_2785_1453959287121-1453960454783
*/

//服务器时间
/*
https://tpssl.hd.mi.com/gettimestamp
request:  var servertime=1453962773
*/
