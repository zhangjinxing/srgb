var myApp = new Vue({
el: '#myApp', 
data: {
seen: 1,
update:'2017年1月26日更新 -- sRGB.vicp.net',
videos: [

{title:'回程_第一次上高速_过实习期行车5000公里',  url:'http://vc.yiche.com/vplay/147611.html'},
{title:'第一次上高速_过实习期行车5000公里',  url:'http://vc.yiche.com/vplay/147603.html'},
{title:'实际道路停车_三点掉头侧方位停车',  url:'http://vc.yiche.com/vplay/147591.html'},
{title:'浙江47省道马涧到兰溪市区',  url:'http://vc.yiche.com/vplay/146965.html'},
{title:'2017年春节超车和突发路况',  url:'http://vc.yiche.com/vplay/146957.html'},
{title:'上海外滩风景和游船夜景',  url:'http://vc.yiche.com/vplay/146737.html'},
{title:'兰溪到金华高速公路行车',  url:'http://vc.yiche.com/vplay/146736.html'},
{title:'DSG变速箱怎么开才比较不会过热?_转载 ',  url:'http://vc.yiche.com/vplay/138723.html'},
{title:'穿越铁路下的涵洞，碰到后视镜了 ',  url:'http://vc.yiche.com/vplay/138717.html'},
{title:'武义到永康两辆大货翻车 ',  url:'http://vc.yiche.com/vplay/136897.html'},
{title:'船小好掉头 ',  url:'http://vc.yiche.com/vplay/136895.html'},
{title:'金华十八立交桥-二环南路雨天行车视频 ',  url:'http://vc.yiche.com/vplay/136884.html'},
{title:'Git_Vim_Gcc安装和使用视频 ',  url:'http://vc.yiche.com/vplay/136129.html'},
{title:'晚上会车遇到行人 ',  url:'http://vc.yiche.com/vplay/132322.html'},
{title:'遇到非机动车和行人横穿，还好反应快紧急刹车停止了 ',  url:'http://vc.yiche.com/vplay/132317.html'},
{title:'被拍了第一个超速(买车2年半) ',  url:'http://vc.yiche.com/vplay/132052.html'},
{title:'钱塘垅山里风景 ',  url:'http://vc.yiche.com/vplay/131280.html'},
{title:'死亡公路上艰难超车 ',  url:'http://v.youku.com/v_show/id_XMTczODQ1NTQwNA==.html'},
{title:'2016年9月 兰溪白露山盘山路驾车视频 ',  url:'http://vc.yiche.com/vplay/130169.html'},
{title:'雨天货车车轮带起的水花致盲，跑偏车道，差点事故 ',  url:'http://vc.yiche.com/vplay/130168.html'},
{title:'逆行的小车不怕大车收了他吗 ',  url:'http://vc.yiche.com/vplay/129493.html'},
{title:'开车不喝酒，晚上遇到交警查酒驾 ',  url:'http://v.youku.com/v_show/id_XMTY3MzM2OTY5Mg==.html'},
{title:'开空调低速三档超车无力 ',  url:'http://vc.yiche.com/vplay/116851.html'},
{title:'右转专用道上遇红灯要不要停？ ',  url:'http://vc.yiche.com/vplay/116845.html'},
{title:'余仓瀑布栈道风景 ',  url:'http://vc.yiche.com/vplay/116608.html'},
{title:'加拿大 CC Driving 教学视频合集 ',  url:'http://vc.yiche.com/vplay/116605.html'},
{title:'醉美余仓爬山行车风景 ',  url:'http://vc.yiche.com/vplay/116168.html'},
{title:'金华九峰水库风景(清晰版) ',  url:'http://vc.yiche.com/vplay/115191.html'},
{title:'2016端午塔石到九峰水库行车风景 ',  url:'http://vc.yiche.com/vplay/115183.html'},
{title:'国道车小车郁闷跟车大货车队伍 ',  url:'http://vc.yiche.com/vplay/113821.html'},
{title:'元旦乡道碰到大车险情 ',  url:'http://vc.yiche.com/vplay/113820.html'},
{title:'兰芝风情线 ',  url:'http://vc.yiche.com/vplay/113179.html'},
{title:'自排車司機的廢話 Shit auto driver said ',  url:'http://vc.yiche.com/vplay/112342.html'},
{title:'手排車司機的廢話 shit manual driver said ',  url:'http://vc.yiche.com/vplay/112341.html'},
{title:'礼让行车-交通突发事件 ',  url:'http://vc.yiche.com/vplay/111907.html'},
{title:'雨天高速行车记录 ',  url:'http://vc.yiche.com/vplay/111613.html'},
{title:'金华到兰溪路线 ',  url:'http://vc.yiche.com/vplay/110021.html'},
{title:'江西玉山到浙江龙游高速行程记录 ',  url:'http://vc.yiche.com/vplay/109470.html'},
{title:'2016年浦江仙华山景区单行线下山路线 ',  url:'http://vc.yiche.com/vplay/109454.html'},
{title:'出租车躲避红灯拍照 横穿5个车道 ',  url:'http://vc.yiche.com/vplay/107122.html'},
{title:'女司机实线乱变道 交规都白学了! ',  url:'http://vc.yiche.com/vplay/107120.html'},
{title:'前车路口停车对向车逆行，刮到我车左后尾 ',  url:'http://vc.yiche.com/vplay/104742.html'},
{title:'进出商场地下车库 ',  url:'http://vc.yiche.com/vplay/103392.html'},
{title:'远离大货车–前车差点让大货卡死 ',  url:'http://vc.yiche.com/vplay/103353.html'},
{title:'早上遇到2个违规逆行车辆 ',  url:'http://vc.yiche.com/vplay/102650.html'},
{title:'过路口差点撞到闯红灯的电动车 ',  url:'http://vc.yiche.com/vplay/102641.html'},
{title:'金华水缸–金兰水库下兰贝跨湖大桥 ',  url:'http://vc.yiche.com/vplay/102385.html'},
{title:'下雨天的灯光也是一道风景 ',  url:'http://vc.yiche.com/vplay/102383.html'},
{title:'差点两次闯红灯–路口突遇大挂车封锁道路 ',  url:'http://vc.yiche.com/vplay/102382.html'},
{title:'台湾的科目二更加有难度——成功的人，其实他们就靠 ',  url:'http://vc.yiche.com/vplay/101886.html'},
{title:'挑战你的防卫驾驶观念 [市区道路篇] ',  url:'http://vc.yiche.com/vplay/101885.html'},
{title:'浙江省兰溪市朱家塔塔岭翻越到建德市大洋镇西坞村 ',  url:'http://vc.yiche.com/vplay/101246.html'},
{title:'金华市汤溪九峰茶园行车风景 ',  url:'http://vc.yiche.com/vplay/101245.html'},
{title:'遇到2个恶意加塞 差点撞上! ',  url:'http://vc.yiche.com/vplay/101244.html'},

],
},
});
