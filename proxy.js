var http=require('http'),
    auth=new Buffer('flyingzl:password').toString('base64'),
    op={
        host:'10.17.171.11',
        port:8080,
        method:'GET',
        path:'http://cart.mi.com/cart/getList.php?api=1&jsonpcallback=jQuery111309163199320901185_1454291978095&_=1454291978096',
        headers:{
            'Cookie':'muuid=1450770821802_2635; xmuuid=XMGUEST-976AEF60-C0A6-11E5-834E-79B11ECF98D2; _newdevuuid=I1D5ftKnOayvI9zdSiBYh1OGIOfX9IrvTvTbIwaBwOaUhIUO77bcfznWqwIzzQeOM9qRjJp5MSeis5YxstEUQ53QPFGtpwZundIzpT6UY983gcTIqmCJt8qJET29AdWXSzzhq1CCw2XoineYZbmo7WkIiRG4KKlVb4tKAyMiFBkpY013SxjhCIe6MrdAQ2t4zkA2VbMN; _mmsid=1453949121424.6199; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1453949122,1454031313; serviceToken=78tgY%2Bzs22tH6Wbcs%2BCKFJOLSc5Rven6qBVf62j0VdX3oVK8LU3jD%2BCkvz0ICiLuFDm7LhmaSRL258ErdHJfRpNgjV4%2FWwRq5z9OO5N6Ey6fB7skoiXiYgZYSddVCePpSixftfB4ao8GRPDuhj98kHDEEU%2Bj4P2i4GpvKT85B7Q%3D; xm_www_sid=3303331666265366130373738393166646164653162336136326163313436323; xm_link_history=U7Su3ZCpUVVwG%2BLmEc%2FbJ4G%2FJJXU4PwhwFckn8ShksQ%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; xm_user_www_num=2; lastsource=bzclk.baidu.com; mstz=08fae3d5cb3abaaf-f975aeb3e19f0f37|javascript%3Avoid(0)%3B|1033315935.26|pcpid|http%3A%2F%2Fstatic.mi.com%2Fcart%2F%3Fautogo|; mstuid=1453425744489_2785; xm_vistor=1453425744489_2785_1454291978244-1454293054067; msttime=http%3A%2F%2Forder.mi.com%2Fbuy%2Fcheckout%3Fr%3D42236.1454293053; XM_172011891_UN=.%E4%B8%B8%E5%AD%90',
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate, sdch',
            'Accept-Language':'zh-CN,zh;q=0.8',
        //     'Cache-Control':'max-age=0',
            'Connection':'keep-alive',
        //     'Host':'tpssl.hd.mi.com',
        //     'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
        // callback:function (data){console.log(data)}
        }
    }

var req=http.request(op,function(res){
    res.setEncoding('utf8');
    var data="";
    console.log(res.response);
    res.on('data',function(chunk){
        console.log(chunk);
        data += chunk;
    }).on('end',function(){
        console.log(data);
    });
    // console.log(res.data);
});

req.on('error',function(e){
    console.log('Error got: '+e.message);
});

req.end();