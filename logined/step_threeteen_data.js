/*
点选地址后
*/


Remote Address:10.17.171.11:8080
Request URL:http://order.mi.com/buy/getRegionPayment.php?v1454316472933
Request Method:POST
Status Code:200 OK
Response Headers
view source
Cache-Control:no-store, no-cache, must-revalidate, post-check=0, pre-check=0
Connection:Keep-Alive
Content-Type:application/json;charset=UTF-8
Custom-Status:0
Date:Mon, 01 Feb 2016 08:47:52 GMT
Expires:Thu, 19 Nov 1981 08:52:00 GMT
Pragma:no-cache
Proxy-Connection:Keep-Alive
Server:Tengine
Transfer-Encoding:chunked
Vary:Accept-Encoding
Via:1.1 PASCPROXY1
Request Headers
view source
Accept:application/json, text/javascript, */*; q=0.01
Accept-Encoding:gzip, deflate
Accept-Language:zh-CN,zh;q=0.8
Content-Length:52
Content-Type:application/x-www-form-urlencoded; charset=UTF-8
Cookie:serviceToken=eHNLug1KsKlGgnqYobeweI0c%2FmHRgXxqBHqRaV%2BfV3U2EA7YR51YC49j22Pvz9A1EODkRwbFII97EkuOYpmbFipfkVyxtpOrgiTUbYjsijjdEWWvekMRocaqJbm4LBEgTd7T7c7wiWXHacmGu3KyJvz2PiA6gqE43MAPaM%2BImTc%3D; xm_www_sid=6366230303666613665333936663566626368373635613031666833366364336; xm_link_history=gWhyUO8bfXuQyfu1WOYe6K8kSQOIx0YepBXr8daZCOQ%3D; xm_order_btauth=ff0fee403b51394afdf7ebe826683b1f; userId=172011891; xmuuid=XMGUEST-19617DC0-C8BA-11E5-9B87-833052FDDAC0; XM_172011891_UN=.%E4%B8%B8%E5%AD%90; vfu_172011891=0_0; isCompanyUser_172011891=0; xm_user_www_num=2; mstz=08fae3d5cb3abaaf-f975aeb3e19f0f37|javascript%3Avoid(0)%3B|1799478348.24|pcpid|http%3A%2F%2Fstatic.mi.com%2Fcart%2F|http%3A%2F%2Fcart.mi.com%2Fcart%2Frecommend%2Fgoods_id%2F2143600001%3Fpackage; mstuid=1454313732263_1337; xm_vistor=1454313732263_1337_1454313732265-1454316283812
Host:order.mi.com
Origin:http://order.mi.com
Proxy-Connection:keep-alive
Referer:http://order.mi.com/buy/checkout?r=36266.1454316275
User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4
X-Requested-With:XMLHttpRequest
Query String Parameters
view source
view URL encoded
v1454316472933:
Form Data
view source
view URL encoded
region_id:247
pay_id:1
invoice_type:4
invoice_title:


Response:

{"code":1,"msg":"ok","data":{"paylist":[{"brief":"\u5728\u7ebf\u652f\u4ed8","pay_id":"1","checked":true}],"shipmentlist":[{"shipment_id":"1","brief":"\u5feb\u9012\u914d\u9001\uff08\u514d\u8fd0\u8d39\uff09","amount":"0","checked":true}],"invoice":[{"type":"electron","value":4,"desc":"\u4e2a\u4eba\u7535\u5b50\u53d1\u7968","checked":true},{"type":"personal","value":1,"desc":"\u4e2a\u4eba\u7eb8\u8d28\u53d1\u7968","checked":false},{"type":"company","value":2,"desc":"\u5355\u4f4d\u7eb8\u8d28\u53d1\u7968","checked":false}],"invoice_title":"","invoice_open":true}}