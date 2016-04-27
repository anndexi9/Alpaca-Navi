var spotArr =
[   
    	{"id":"00", "spotName":"", "area":"", "lat":"", "lng":"",
	"address":"", "link":""}, 
	
	{"id":"01", "spotName":"アースドリーム角山農場", "area":"北海道", "lat":"43.136624", "lng":"141.460442",
	"address":"〒069-0805 北海道江別市角山584-1", "link":"http://www.tondenfarm.co.jp/", "tel":"011-391-2500","time":"10：00～17：00\n 火休" ,"access":"", "profile":"※園内持ち込みのご飲食はご遠慮下さい。\n※レジャーシート・テント・パラソル等の使用はできません。\n※動物が放牧されている為、サッカー・野球等球技は禁止です。\n※エサの持ち込みはしないでください。"},
	
    {"id":"02", "spotName":"ビバアルパカ牧場", "area":"北海道", "lat":"44.103725", "lng":"142.396667",
	"address":"〒098-0341 北海道上川郡剣淵町東町3733番地　旧ビバカラススキー場跡", "link":"http://www.viva-alpaca.jp/","tel":"0165-34-3911","time":"9:00～17:00 （冬季期間は１０時から１６時まで）年中無休", "access":"(1)道央自動車道和寒ＩＣから車で15分\n(2)道央自動車道士別剣淵ＩＣから車で5分","profile":"様々な色のアルパカと触れ合える施設です。　ロッジでは、アルパカの毛を使った製品はもちろん、アルパカのぬいぐるみやエケコ人形、お土産品多数が販売されています。山頂まで上ると眺めは最高。四季折々の景色も楽しめます。毛刈りやエアーボードなどのイベントも各種開催されています。"}, 
	
	{"id":"03", "spotName":"えこりん村", "area":"北海道", "lat":"42.871971", "lng":"141.546997",
	"address":"〒061-1421 北海道恵庭市牧場241-2", "link":"http://www.ecorinvillage.com/"}, 
	
	{"id":"04", "spotName":"展望花畑 四季彩の丘", "area":"北海道", "lat":"43.528996", "lng":"142.464362",
	"address":"〒071-0473 北海道上川郡美瑛町新星第三", "link":"http://www.shikisainooka.jp/alpaca.html"}, 
	
	{"id":"05", "spotName":"サラダファーム", "area":"岩手県", "lat":"39.907909", "lng":"141.054980",
	"address":"〒028-7113 岩手県八幡平市平笠第２地割6-333", "link":"http://salad-farm.jp/"}, 
	
	{"id":"06", "spotName":"のんびり温泉別館　イワナの里　アルパカ牧場", "area":"福島県", "lat":"37.123886", "lng":"140.052392",
	"address":"〒963-0125　福島県郡山市三穂田町富岡字武士沢28-1", "link":"http://www.nonbiri-onsen.com/iwana/"}, 
	
	{"id":"07", "spotName":"新潟市動物ふれあいセンター", "area":"新潟県", "lat":"37.881259", "lng":"139.049825",
	"address":"〒950-0933　新潟市中央区清五郎345-1", "link":"http://www.ikutopia.com/facilities/doubutsu/"}, 
	
	{"id":"08", "spotName":"山古志アルパカ村", "area":"新潟県", "lat":"37.3298002", "lng":"138.8862471",
	"address":"〒947-0204　新潟県長岡市山古志竹沢乙284", "link":"http://yamakoshialpaca.iinaa.net/"}, 
	
	{"id":"09", "spotName":"赤城クローネンベルク", "area":"群馬県", "lat":"36.4737611", "lng":"139.1909047",
	"address":"〒371-0241　群馬県前橋市苗ヶ島町2331", "link":"http://akagi-kronenberg.jp/"}, 
	
	{"id":"10", "spotName":"那須アルパカ牧場", "area":"栃木県", "lat":"37.1218755", "lng":"140.0457294",
	"address":"〒329-3223 栃木県那須郡那須町大字大島1083", "link":"http://www.nasubigfarm.com/"}, 
	
	{"id":"11", "spotName":"那須どうぶつ王国", "area":"栃木県", "lat":"37.1263662", "lng":"140.0319293",
	"address":"〒329-3223 栃木県那須郡那須町大島1042-1", "link":"http://www.nasu-oukoku.com/"}, 
	
	{"id":"12", "spotName":"那須りんどう湖レイクビュー", "area":"栃木県", "lat":"37.0411373", "lng":"140.0452563",
	"address":"〒325-0302 栃木県那須郡那須町 高久丙414-2", "link":"http://www.rindo.co.jp/"}, 
	
	{"id":"13", "spotName":"富士見高原スキー場　キッズランド", "area":"長野県", "lat":"35.9249803", "lng":"138.3097961",
	"address":"〒399-0101 長野県諏訪郡富士見町境12067", "link":"http://fujimikogen-ski.jp/kidsland.html"}, 
	
	{"id":"14", "spotName":"八ヶ岳アルパカ牧場", "area":"長野県", "lat":"35.9304686", "lng":"138.2332227",
	"address":"〒399-0214 長野県諏訪郡富士見町落合13505-1", "link":"http://www.alpaca-farm.net/"}, 
	
	{"id":"15", "spotName":"長野市茶臼山動物園", "area":"長野県", "lat":"36.5867617", "lng":"138.1132775",
	"address":"〒388-8016 長野県長野市篠ノ井有旅570-1", "link":"http://www.chausuyama.com/"}, 
	
	{"id":"16", "spotName":"東武動物公園", "area":"埼玉県", "lat":"36.024950", "lng":"139.726700",
	"address":"〒345-0831 埼玉県南埼玉郡 宮代町須賀110", "link":"http://www.tobuzoo.com/"}, 
	
	{"id":"17", "spotName":"ダチョウ王国　袖ケ浦ファーム", "area":"千葉県", "lat":"35.4153943", "lng":"140.0560618",
	"address":"〒299-0205　千葉県袖ケ浦市上泉1506-10", "link":"http://dacho.co.jp/"}, 
	
	{"id":"18", "spotName":"市原ぞうの国", "area":"千葉県", "lat":"35.3550464", "lng":"140.1801333",
	"address":"〒290-0521 千葉県市原市山小川937", "link":"http://www.zounokuni.com/"},
	
	{"id":"19", "spotName":"マザー牧場", "area":"千葉県", "lat":"35.2458163", "lng":"139.9302543",
	"address":"〒299-1731 千葉県富津市田倉940-3", "link":"http://www.motherfarm.co.jp/"},
	
	{"id":"20", "spotName":"ＭＯＦＦアニマルワールド印西店", "area":"千葉県", "lat":"35.8034143", "lng":"140.1604888",
	"address":"〒270-1335　千葉県印西市原1-2　BIGHOPガーデンモールD-203", "link":"http://moff-moff.jp/"},
	
	{"id":"21", "spotName":"氷取沢ファミリー牧場", "area":"神奈川県", "lat":"35.3590523", "lng":"139.599587",
	"address":"〒 235-0043　神奈川県横浜市磯子区氷取沢町635", "link":"http://www.family-bokujyou.com/"},
	
	{"id":"22", "spotName":"平成記念公園 日本昭和村　里山ふれあい牧場", "area":"岐阜県", "lat":"35.4736762", "lng":"137.0295533",
	"address":"〒505-0003　岐阜県美濃加茂市山之上町2292-1", "link":"http://www.nihon-showamura.co.jp/"},

	{"id":"23", "spotName":"三島市立公園 楽寿園", "area":"静岡県", "lat":"35.1245294", "lng":"138.9092718",
	"address":"〒411-0036　静岡県三島市一番町19-3", "link":"http://www.city.mishima.shizuoka.jp/rakujyu/index.html"},
	
	{"id":"24", "spotName":"富士サファリパーク", "area":"静岡県", "lat":"35.2593748", "lng":"138.8097354",
	"address":"〒410-1231　静岡県裾野市須山字藤原 2255-27", "link":"http://www.fujisafari.co.jp/"},
	
	{"id":"25", "spotName":"富士山こどもの国", "area":"静岡県", "lat":"35.2535368", "lng":"138.7720919",
	"address":"〒417-0803　静岡県富士市桑崎1015", "link":"http://www.kodomo.or.jp/"},
	
	{"id":"26", "spotName":"伊豆シャボテン公園", "area":"静岡県", "lat":"34.9076857", "lng":"139.0987747",
	"address":"〒413-0231　静岡県伊東市富戸1317-13", "link":"http://izushaboten.com/"},
	
	{"id":"27", "spotName":"滋賀農業公園ブルーメの丘", "area":"滋賀県", "lat":"35.0142074", "lng":"136.2789453",
	"address":"〒529-1628 滋賀県蒲生郡日野町西大路843", "link":"http://www.blumenooka.jp/"},
	
	{"id":"28", "spotName":"神戸どうぶつ王国", "area":"兵庫県", "lat":"34.654253", "lng":"135.2205635",
	"address":"〒650-0047兵庫県神戸市中央区港島南町7-1-9", "link":"http://www.blumenooka.jp/"},
	
	{"id":"29", "spotName":"淡路島のじまスコーラ", "area":"兵庫県", "lat":"34.5613337", "lng":"134.947707",
	"address":"〒656-1721　兵庫県淡路市野島蟇浦843", "link":"http://www.nojima-scuola.com/"},
	
	{"id":"30", "spotName":"赤穂海浜公園　動物ふれあい村", "area":"兵庫県", "lat":"34.7315849", "lng":"134.3994866",
	"address":"〒678-0215　兵庫県赤穂市御崎1857-5", "link":"http://www.aes-akoufureaimura.co.jp/"},
	
	{"id":"31", "spotName":"神崎農村公園ヨーデルの森", "area":"兵庫県", "lat":"35.1372734", "lng":"134.7890933",
	"address":"〒679-2431 兵庫県神崎郡神河町猪篠1868", "link":"http://www.yodel-forest.jp/"},
	
	{"id":"32", "spotName":"ひらかたパーク", "area":"大阪府", "lat":"34.8080146", "lng":"135.637701",
	"address":"〒573-0054 大阪府枚方市枚方公園町1-1", "link":"http://www.hirakatapark.co.jp/"},
	
	{"id":"33", "spotName":"天保山アニパ", "area":"大阪府", "lat":"34.6559014", "lng":"135.4278025",
	"address":"〒552-0022 大阪府大阪市港区海岸通1-1-10　天保山マーケットプレイス　3F", "link":"http://www.kaiyukan.com/thv/marketplace/shop/amusement/07/"},
	
	{"id":"34", "spotName":"池田市五月山動物園", "area":"大阪府", "lat":"34.8304711", "lng":"135.4232438",
	"address":"〒563-0051 大阪府池田市綾羽2丁目5-33", "link":"http://www.satsukiyamazoo.com/"},
	
	{"id":"35", "spotName":"アドベンチャーワールド", "area":"和歌山県", "lat":"33.6655553", "lng":"135.3705577",
	"address":"〒649-2201 和歌山県西牟婁郡 白浜町堅田2399", "link":"http://www.aws-s.com/"},
	
	{"id":"36", "spotName":"大山トム・ソーヤ牧場", "area":"鳥取県", "lat":"35.4234206", "lng":"133.4214659",
	"address":"〒689-3513 鳥取県米子市岡成622-2", "link":"http://tom.sanin.jp/"},
	
	{"id":"37", "spotName":"岡山農業公園　ドイツの森　クローネンベルク", "area":"岡山県", "lat":"34.8666464", "lng":"134.0102683",
	"address":"〒 701-2435　岡山県赤磐市仁堀中 2006", "link":"http://www.farmpark.co.jp/doitsunomori/"},
	
	{"id":"38", "spotName":"阿蘇ファームランド", "area":"熊本県", "lat":"32.8963897", "lng":"131.0019076",
	"address":"〒869-1404　熊本県阿蘇郡南阿蘇村河陽5579-3", "link":"http://www.asofarmland.co.jp/"},
	
	{"id":"39", "spotName":"阿蘇カドリー・ドミニオン", "area":"熊本県", "lat":"32.9310559", "lng":"131.0647156",
	"address":"〒869-2225 熊本県阿蘇市黒川2163", "link":"http://www.cuddly.co.jp/"},
	
	{"id":"40", "spotName":"長崎バイオパーク", "area":"長崎県", "lat":"32.9897535", "lng":"129.7841831",
	"address":"〒851-3302 長崎県西海市西彼町中山郷2291-1", "link":"http://www.biopark.co.jp/"},
];