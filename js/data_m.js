// ◆ M_value
// ┣ pid 序号
// ┣ name 名字
// ┣ spaceName 分布地点
// ┣ isBoss 小怪还是boss
// ┣ monsKind 种系
// ┗ mapWhere 分布地点地图序号
var M_value=[
    {pid:'8001',name:'ゴブリン<br>普通哥布林', monsKind:'ゴブリン系' ,spaceName:'アステリア平原<br>バハマール高原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8001','8002','8003'],lessElem:'土',moreElem:'火'},
    {pid:'8002',name:'エルダーゴブリン<br>哥布林长老', monsKind:'ゴブリン系' ,spaceName:'アステリア平原<br>バハマール高原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8035','8002','8036','8004','8167'],lessElem:'土',moreElem:'火'},
    {pid:'8003',name:'ゴブリンウォーリアー<br>战斧哥布林', monsKind:'ゴブリン系' ,spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8002','8037','8168'],lessElem:'土',moreElem:'火'},
    {pid:'8004',name:'オーガ<br>食人魔', monsKind:'オーガ系' ,spaceName:'アステリア平原',isBoss:'小怪',mapWhere:['8005'],lessElem:'土',moreElem:'雷'},
    {pid:'8005',name:'タイラントボア<br>黄色狂暴野猪', monsKind:'ボア系' ,spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8006','8007','8008'],lessElem:'雷',moreElem:'火'},
    {pid:'8006',name:'ランブルボア<br>幼年野猪', monsKind:'ボア系' ,spaceName:'アステリア平原',isBoss:'小怪',mapWhere:['8009'],lessElem:'雷',moreElem:'火'},
    {pid:'8007',name:'ランドフォックス<br>平原狐', monsKind:'フォックス系' ,spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8010','8011'],lessElem:'-',moreElem:'火'},
    {pid:'8008',name:'山賊<br>山贼', monsKind:'山賊系' ,spaceName:'アステリア平原<br>モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8012','8013','8014','8015'],lessElem:'土',moreElem:'冰'},
    {pid:'8009',name:'山賊の射手<br>山贼射手', monsKind:'山賊系' ,spaceName:'アステリア平原<br>モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8017','8013','8070','8015','8018'],lessElem:'土',moreElem:'冰'},
    {pid:'8010',name:'山賊の斥候<br>山贼斥候', monsKind:'山賊系' ,spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8013','8019','8020','8021'],lessElem:'土',moreElem:'冰'},
    {pid:'8011',name:'山賊の術士<br>山贼术士', monsKind:'山賊系' ,spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8022','8023','8024','8025'],lessElem:'土',moreElem:'冰'},
    {pid:'8012',name:'山賊の護衛<br>山贼护卫', monsKind:'山賊系' ,spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8026'],lessElem:'土',moreElem:'冰'},
    {pid:'8013',name:'タイラントボア・グロウ<br>白色狂暴野猪', monsKind:'ボア系' ,spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8027','8028','8029'],lessElem:'雷',moreElem:'火'},
    {pid:'8014',name:'ウリボ<br>小香猪', monsKind:'ボア系' ,spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8030','8031'],lessElem:'-',moreElem:'火'},
    {pid:'8015',name:'スカイフィッシュ<br>天鱼', monsKind:'スカイフィッシュ系' ,spaceName:'アステリア平原<br>西バーンハルト半島',isBoss:'小怪',mapWhere:['8032','8197'],lessElem:'火',moreElem:'雷'},
    {pid:'8016',name:'*貝殻ゴブリン<br>*贝壳哥布林', monsKind:'ゴブリン系' ,spaceName:'アステリア平原<br>バハマール高原',isBoss:'小怪',mapWhere:['8033','8034'],lessElem:'土',moreElem:'火'},
    {pid:'8017',name:'ホーンゴート<br>霍恩羊', monsKind:'ゴート系' ,spaceName:'バハマール高原<br>西バーンハルト半島<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a><br>',isBoss:'小怪',mapWhere:['8038','8199','8039','8190'],lessElem:'冰',moreElem:'土'},
    {pid:'8018',name:'カイザーエルク<br>凯撒麋鹿', monsKind:'ゴート系' ,spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8040','8041'],lessElem:'冰',moreElem:'土'},
    {pid:'8019',name:'ハイランドフォックス<br>高原狐', monsKind:'フォックス系' ,spaceName:'バハマール高原<br>西バーンハルト半島<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8042','8201','8043','8171'],lessElem:'冰',moreElem:'火'},
    {pid:'8020',name:'リザードゴースト<br>蓝蜥蜴', monsKind:'リザード系' ,spaceName:'バハマール高原<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8044','8045','8157'],lessElem:'雷',moreElem:'火'},
    {pid:'8021',name:'ムーク<br>穆库', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8046','8047','8183'],lessElem:'雷',moreElem:'土'},
    {pid:'8022',name:'ムークアーチャー<br>穆库弓弩手', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8048','8049','8188'],lessElem:'雷',moreElem:'土'},
    {pid:'8023',name:'ムークスカウト<br>穆库侦察兵', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8049','8050','8183'],lessElem:'雷',moreElem:'土'},
    {pid:'8024',name:'ミーン<br>黄蜂', monsKind:'ミーン系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8051','8052','8183'],lessElem:'雷',moreElem:'土'},
    {pid:'8025',name:'ヴェノミーン<br>紫蜂', monsKind:'ミーン系' ,spaceName:'モンテノール渓谷<br>西バーンハルト半島<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a><br><a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8053','8203','8054','8176','8185'],lessElem:'雷',moreElem:'土'},
    {pid:'8026',name:'エビキノコ<br>蘑菇虾', monsKind:'エビキノコ系' ,spaceName:'モンテノール渓谷',isBoss:'小怪',mapWhere:['8055'],lessElem:'土',moreElem:'火'},
    {pid:'8027',name:'カガチヤンマ<br>灰卡伽蜻蜓', monsKind:'ヤンマ系' ,spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a><br><a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8056','8057','8062','8149','8177'],lessElem:'雷',moreElem:'冰'},
    {pid:'8028',name:'カニクモ<br>蓝蟹蛛', monsKind:'カニクモ系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8059','8178'],lessElem:'雷',moreElem:'土'},
    {pid:'8029',name:'ナッポ<br>纳波', monsKind:'ナッポ系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8060','8179'],lessElem:'土',moreElem:'火'},
    {pid:'8030',name:'ロックリザード<br>黄蜥蜴', monsKind:'リザード系' ,spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8061','8062','8063'],lessElem:'土',moreElem:'冰'},
    {pid:'8031',name:'ドゴルマン<br>多古尔曼兽', monsKind:'ドゴルマン系' ,spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a><br><a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8064','8160','8175'],lessElem:'雷',moreElem:'火'},
    {pid:'8032',name:'デザートファング<br>大漠獠牙・幼年', monsKind:'ボア系' ,spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8065','8148'],lessElem:'火',moreElem:'土'},
    {pid:'8033',name:'グレートファング<br>大漠獠牙・成年', monsKind:'ボア系' ,spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8066'],lessElem:'火',moreElem:'土'},
    {pid:'8034',name:'ランドホーク<br>白羽鹞', monsKind:'ホーク系' ,spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8067'],lessElem:'土',moreElem:'火'},
    {pid:'8035',name:'サンドバイパー<br>白蝰蛇', monsKind:'バイパー系' ,spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8068','8186'],lessElem:'雷',moreElem:'土'},
    {pid:'8036',name:'シャドウバイパー<br>黑蝰蛇', monsKind:'バイパー系' ,spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8069'],lessElem:'土',moreElem:'冰'},
    {pid:'8037',name:'マスクモス<br>彩羽鹞', monsKind:'ホーク系' ,spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8071'],lessElem:'土',moreElem:'冰'},
    {pid:'8038',name:'オオカニクモ<br>黄蟹蛛', monsKind:'カニクモ系' ,spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8072','8149'],lessElem:'雷',moreElem:'土'},
    {pid:'8039',name:'オオカガチヤンマ<br>黄卡伽蜻蜓', monsKind:'ヤンマ系' ,spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8073','8074'],lessElem:'雷',moreElem:'冰'},
    {pid:'8040',name:'ヒートバイパー<br>黄蝰蛇', monsKind:'バイパー系' ,spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8075'],lessElem:'火',moreElem:'雷'},
    {pid:'8041',name:'Ｆゴブリン<br>黑化哥布林', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8076'],lessElem:'暗',moreElem:'光'},
    {pid:'8042',name:'Ｆランドフォックス<br>黑化平原狐', monsKind:'フォックス系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8077'],lessElem:'暗',moreElem:'光'},
    {pid:'8043',name:'ゴブリン・グロウ<br>紫皮斧头哥布林', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8078'],lessElem:'土',moreElem:'火'},
    {pid:'8044',name:'グレーターゴブリン<br>哥布林土术士', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8078'],lessElem:'土',moreElem:'火'},
    {pid:'8045',name:'ブラストミーン<br>红蜂', monsKind:'ミーン系' ,spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8074'],lessElem:'火',moreElem:'冰'},
    {pid:'8046',name:'アースエレメント<br>土精灵', monsKind:'エレメント系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8210','8079'],lessElem:'土',moreElem:'冰'},
    {pid:'8047',name:'アイスエレメント<br>冰精灵', monsKind:'エレメント系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a><br><a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8209','8080','8158'],lessElem:'冰',moreElem:'火'},
    {pid:'8048',name:'ペイルアイ<br>拖尾的眼球', monsKind:'スフィア系' ,spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8081','8173'],lessElem:'火',moreElem:'雷'},
    {pid:'8049',name:'ドラウグ・エッジ<br>灰色剑柄', monsKind:'ドラウグ系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a><br><a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a><br><a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a><br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8206','8082','8150','8159','8193'],lessElem:'-',moreElem:'雷'},
    {pid:'8050',name:'ドラウグ・アルマ<br>自律机甲', monsKind:'ドラウグ系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a><br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8206','8083','8192'],lessElem:'暗',moreElem:'雷'},
    {pid:'8051',name:'贖罪のドラウグ・エッジ<br>金色剑柄', monsKind:'ドラウグ系' ,spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8084'],lessElem:'光',moreElem:'暗'},
    {pid:'8052',name:'クアッドアーム<br>灰色虫状浮游机甲', monsKind:'クアッドアーム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8085','8170'],lessElem:'冰',moreElem:'火'},
    {pid:'8053',name:'ゾルキシア兵<br>产屋胄卫兵', monsKind:'ゾルキシア系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8086'],lessElem:'光',moreElem:'暗'},
    {pid:'8054',name:'ゾルキシア狙撃兵<br>产屋狙击兵', monsKind:'ゾルキシア系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8087'],lessElem:'光',moreElem:'暗'},
    {pid:'8055',name:'ゴーレム<br>巨魔像', monsKind:'ゴーレム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8088'],lessElem:'火',moreElem:'暗'},
    {pid:'8056',name:'バラージアーム<br>棕色虫状浮游机甲', monsKind:'クアッドアーム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8089'],lessElem:'冰',moreElem:'雷'},
    {pid:'8057',name:'ゾルキシア銃機兵<br>产屋铳机兵', monsKind:'ゾルキシア系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8090'],lessElem:'光',moreElem:'暗'},
    {pid:'8058',name:'ゾルキシア槍兵<br>产屋枪兵', monsKind:'ゾルキシア系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8091'],lessElem:'光',moreElem:'暗'},
    {pid:'8059',name:'量産型アイアンコフィン<br>量产型银色自律机甲', monsKind:'ゴーレム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8092'],lessElem:'雷',moreElem:''},
    {pid:'8060',name:'ホーリーエレメント<br>光精灵', monsKind:'エレメント系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8093'],lessElem:'光',moreElem:'暗'},
    {pid:'8061',name:'フローティングオーブ<br>普通眼球', monsKind:'スフィア系' ,spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8081'],lessElem:'火',moreElem:'雷'},
    {pid:'8062',name:'ゴブリンセージ<br>哥布林祭司', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a><br><a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8133','8156','8169'],lessElem:'土',moreElem:'火'},
    {pid:'8063',name:'イグニスエレメント<br>火精灵', monsKind:'エレメント系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8151'],lessElem:'火',moreElem:'雷'},
    {pid:'8064',name:'ペイルポッド<br>进攻机器人', monsKind:'トライポッド系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8152','8174'],lessElem:'火',moreElem:'雷'},
    {pid:'8065',name:'イージスポッド<br>防卫机器人', monsKind:'トライポッド系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8153'],lessElem:'火',moreElem:'雷'},
    {pid:'8066',name:'ヒーリングポッド<br>治愈机器人', monsKind:'トライポッド系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8154'],lessElem:'火',moreElem:'雷'},
    {pid:'8067',name:'業火のドラウグ・エッジ<br>业火剑柄', monsKind:'ドラウグ系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'小怪',mapWhere:['8155'],lessElem:'火',moreElem:'冰'},
    {pid:'8068',name:'ゴブリンファイター<br>哥布林斗士', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a><br><a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8156','8166'],lessElem:'土',moreElem:'火'},
    {pid:'8069',name:'Ｆリザードゴースト<br>黑化蓝蜥蜴', monsKind:'リザード系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8161'],lessElem:'暗',moreElem:'火'},
    {pid:'8070',name:'Ｆゴブリンセージ<br>黑化哥布林祭司', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8162'],lessElem:'暗',moreElem:'光'},
    {pid:'8071',name:'Ｆマスターゴブリン<br>黑化大师哥布林', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8163'],lessElem:'暗',moreElem:'光'},
    {pid:'8072',name:'Ｆゴブリンウォーリアー<br>黑化战斧哥布林', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8164'],lessElem:'暗',moreElem:'光'},
    {pid:'8073',name:'Ｆドゴルマン<br>黑化多古尔曼兽', monsKind:'ドゴルマン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'小怪',mapWhere:['8165'],lessElem:'暗',moreElem:'光'},
    {pid:'8074',name:'ゴブリンウォーロード<br>哥布林战士', monsKind:'ゴブリン系' ,spaceName:'<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8168'],lessElem:'土',moreElem:'火'},
    {pid:'8075',name:'フローティングアイ<br>漂浮的眼球', monsKind:'スフィア系' ,spaceName:'<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8172'],lessElem:'火',moreElem:'雷'},
    {pid:'8076',name:'フローティングスフィア<br>漂浮的球', monsKind:'スフィア系' ,spaceName:'<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'小怪',mapWhere:['8172'],lessElem:'火',moreElem:'雷'},
    {pid:'8077',name:'キャニムークアーチャー<br>峡谷穆库弓弩手', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8180'],lessElem:'雷',moreElem:'土'},
    {pid:'8078',name:'キャニムークスカウト<br>峡谷穆库侦察兵', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8181'],lessElem:'雷',moreElem:'土'},
    {pid:'8079',name:'キャニムーク<br>峡谷穆库', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'小怪',mapWhere:['8182'],lessElem:'雷',moreElem:'土'},
    {pid:'8080',name:'Ｆムークアーチャー<br>黑化穆库弓弩手', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8184'],lessElem:'暗',moreElem:'光'},
    {pid:'8081',name:'Ｆムークウォーリアー<br>黑化战锤穆库', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8184'],lessElem:'暗',moreElem:'光'},
    {pid:'8082',name:'Ｆカニクモ<br>黑化蟹蛛', monsKind:'カニクモ系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8185'],lessElem:'暗',moreElem:'光'},
    {pid:'8083',name:'Ｆサンドバイパー<br>黑化白蝰蛇', monsKind:'バイパー系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8186'],lessElem:'暗',moreElem:'光'},
    {pid:'8084',name:'カニクモトラッパー<br>捕手蟹蛛', monsKind:'カニクモ系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'小怪',mapWhere:['8187'],lessElem:'雷',moreElem:'土'},
    {pid:'8085',name:'ムークウォーリアー<br>战锤穆库', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8189'],lessElem:'雷',moreElem:'土'},
    {pid:'8086',name:'ヒメカニクモ<br>小蟹蛛', monsKind:'カニクモ系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8205','8191'],lessElem:'雷',moreElem:'土'},
    {pid:'8087',name:'リトルゴート<br>小山羊', monsKind:'ゴート系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8207','8194'],lessElem:'冰',moreElem:'土'},
    {pid:'8088',name:'エビキノコポイズン<br>毒蘑菇虾', monsKind:'エビキノコ系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8205','8195'],lessElem:'土',moreElem:'火'},
    {pid:'8089',name:'ダークエレメント<br>暗精灵', monsKind:'エレメント系' ,spaceName:'西バーンハルト半島<br><a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'小怪',mapWhere:['8211','8196'],lessElem:'暗',moreElem:'光'},
    {pid:'8090',name:'エレキファットマン<br>雷肥胖兽', monsKind:'ファットマン系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8197'],lessElem:'雷',moreElem:'土'},
    {pid:'8091',name:'アイスファットマン<br>冰肥胖兽', monsKind:'ファットマン系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8198'],lessElem:'冰',moreElem:'火'},
    {pid:'8092',name:'ゴーリィ<br>', monsKind:'ゴート系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8200'],lessElem:'暗',moreElem:'光'},
    {pid:'8093',name:'ダイアーハウル<br>', monsKind:'フォックス系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8201'],lessElem:'暗',moreElem:'光'},
    {pid:'8094',name:'Ｍフォックス<br>机械狐', monsKind:'フォックス系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8202'],lessElem:'冰',moreElem:'暗'},
    {pid:'8095',name:'バーンハルト兵<br>伯恩哈特士兵', monsKind:'バーンハルト兵系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8202'],lessElem:'雷',moreElem:'冰'},
    {pid:'8096',name:'バーンハルト騎士<br>伯恩哈特骑士', monsKind:'バーンハルト兵系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8204'],lessElem:'雷',moreElem:'冰'},
    {pid:'8097',name:'バーンハルト狙撃兵<br>伯恩哈特狙击兵', monsKind:'バーンハルト兵系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8204'],lessElem:'雷',moreElem:'冰'},
    {pid:'8098',name:'エビキノコパライズ<br>麻痹蘑菇虾', monsKind:'エビキノコ系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8208'],lessElem:'土',moreElem:'火'},
    {pid:'8099',name:'カニクモフロスト<br>冰蛛蟹', monsKind:'カニクモ系' ,spaceName:'西バーンハルト半島',isBoss:'小怪',mapWhere:['8198'],lessElem:'冰',moreElem:'火'},
]
var MB_value = [
    {pid:'8501',name:'ピンクウリボ<br>粉色小香猪', monsKind:'ボア系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8094'],showTime:'讨伐附近的同类型敌人' ,level:'1'},
    {pid:'8502',name:'猛る獸<br>猛兽', monsKind:'フォックス系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8095'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'9'},
    {pid:'8503',name:'赤い飛沫<br>赤红飞沫', monsKind:'ゴブリン系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8096'],showTime:'讨伐附近的同类型敌人<br>白天',level:'12'},
    {pid:'8504',name:'深緑の牙<br>深绿的獠牙', monsKind:'ボア系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8097'],showTime:'讨伐附近的同类型敌人',level:'15'},
    {pid:'8505',name:'異国の山賊ネズミ<br>异国山贼・鼠', monsKind:'山賊系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8098'],showTime:'讨伐附近的同类型敌人<br>夜间<br>打开打怪掉的黑箱子',level:'24'},
    {pid:'8506',name:'猛る金色<br>金黄的盛怒', monsKind:'ボア系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8099'],showTime:'讨伐附近的同类型敌人<br>白天',level:'45'},
    {pid:'8507',name:'炎獄<br>炎狱', monsKind:'オーガ系' ,spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8100'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'43'},
    {pid:'8508',name:'サファイアトロット<br>宝蓝色的急行', monsKind:'フォックス系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8101'],showTime:'讨伐附近的同类型敌人<br>白天<br>打开打怪掉的黑箱子',level:'16'},
    {pid:'8509',name:'炎角<br>炎角', monsKind:'ゴート系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8102'],showTime:'讨伐附近的同类型敌人<br>夜间<br>附近存在6名及以上玩家',level:'26'},
    {pid:'8510',name:'スプーキーゴート<br>幽灵山羊', monsKind:'ゴート系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8103'],showTime:'讨伐附近的同类型敌人',level:'19'},
    {pid:'8511',name:'悪しき癒し手<br>邪医', monsKind:'ゴブリン系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8104'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'29'},
    {pid:'8512',name:'トリックエルダー<br>蛊师', monsKind:'ゴブリン系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8105'],showTime:'讨伐附近的同类型敌人',level:'45'},
    {pid:'8513',name:'エメラルドホーン<br>翡翠号角', monsKind:'ゴート系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8106'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'51'},
    {pid:'8514',name:'*貝を集めし邪教徒<br>*收集贝壳的邪徒', monsKind:'ゴブリン系' ,spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8107'],showTime:'讨伐附近的同类型敌人',level:'45'},
    {pid:'8515',name:'プレデター<br>捕食者', monsKind:'カニクモ系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8108'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'25'},
    {pid:'8516',name:'鮮やかナッポ<br>缤纷纳波', monsKind:'ナッポ系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8109'],showTime:'讨伐附近的同类型敌人<br>白天',level:'45'},
    {pid:'8517',name:'渓谷の遊猟者<br>峡谷的游猎者', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8110'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'35'},
    {pid:'8518',name:'小さき闘技者<br>小小技斗者', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8111'],showTime:'讨伐附近的同类型敌人',level:'36'},
    {pid:'8519',name:'スカイサーペント<br>螣蛇', monsKind:'ヤンマ系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8112'],showTime:'讨伐附近的同类型敌人',level:'21'},
    {pid:'8520',name:'渓谷の尖兵<br>峡谷的哨兵', monsKind:'ムーク系' ,spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8113'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'47'},
    {pid:'8521',name:'剛腕の覇者<br>刚腕的霸者', monsKind:'ドゴルマン系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8114'],showTime:'讨伐附近的同类型敌人',level:'48'},
    {pid:'8522',name:'隠者の鋭鋏<br>隐士的锐爪', monsKind:'カニクモ系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8115'],showTime:'讨伐附近的同类型敌人',level:'45'},
    {pid:'8523',name:'オロチ<br>粉蛇', monsKind:'バイパー系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8116'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'50'},
    {pid:'8524',name:'サンドパイソン<br>沙蟒', monsKind:'バイパー系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8117'],showTime:'讨伐附近的同类型敌人',level:'41'},
    {pid:'8525',name:'異国の山賊射手ヤマネコ<br>异国山贼射手・山猫', monsKind:'山賊系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8118'],showTime:'讨伐附近的同类型敌人<br>白天<br>打开打怪掉的黑箱子',level:'31'},
    {pid:'8526',name:'バジリスク<br>玄武蜥蜴', monsKind:'リザード系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8119'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'27'},
    {pid:'8527',name:'疾駆の大鷲<br>翱翔之鹫', monsKind:'ホーク系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8120'],showTime:'讨伐附近的同类型敌人',level:'36'},
    {pid:'8528',name:'クインマスクモス<br>皇后白羽鹞', monsKind:'ホーク系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8121'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'30'},
    {pid:'8529',name:'這いずる羽音<br>伏地的羽翼', monsKind:'ヤンマ系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8122'],showTime:'讨伐附近的同类型敌人<br>白天',level:'35'},
    {pid:'8530',name:'異国の山賊斥候キツネ<br>异国山贼斥候・狐', monsKind:'山賊系' ,spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8123'],showTime:'讨伐附近的同类型敌人<br>夜间',level:'42'},
    {pid:'8531',name:'鉄牙<br>铁牙', monsKind:'ボア系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'Boss',mapWhere:['8124'],showTime:'讨伐附近的同类型敌人',level:'17'},
    {pid:'8532',name:'荒ぶる牙王<br>狂暴牙王', monsKind:'ボア系' ,spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'Boss',mapWhere:['8127'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'49'},
    {pid:'8533',name:'異国の山賊長ヒグマ<br>异国的山贼匪首・棕熊', monsKind:'山賊系' ,spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'Boss',mapWhere:['8125'],showTime:'讨伐附近的同类型敌人',level:'51'},
    {pid:'8534',name:'ドラウグ・ラピス<br>洞穿之石・青金', monsKind:'ドラウグ系' ,spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'Boss',mapWhere:['8126'],showTime:'讨伐附近的同类型敌人',level:'49'},
    {pid:'8535',name:'虚ろの白礫<br>空洞白砾', monsKind:'ドラウグ系' ,spaceName:'<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'Boss',mapWhere:['8128'],showTime:'讨伐附近的同类型敌人',level:'38'},
    {pid:'8536',name:'蒼白灯の守衛<br>苍白之光的守护者', monsKind:'ゴーレム系' ,spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'Boss',mapWhere:['8129'],showTime:'讨伐附近的同类型敌人',level:'47'},
    {pid:'8537',name:'摂理の破戒者<br>违神的破戒者', monsKind:'ドラウグ系' ,spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'Boss',mapWhere:['8130'],showTime:'讨伐附近的同类型敌人',level:'48'},
    {pid:'8538',name:'遺留のオートマトン<br>徘徊的自律机关', monsKind:'ゴーレム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'Boss',mapWhere:['8131'],showTime:'讨伐附近的同类型敌人',level:'44'},
    {pid:'8539',name:'朱に染まりし機神<br>朱红机神', monsKind:'ゴーレム系' ,spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'Boss',mapWhere:['8132'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'48'},
    {pid:'8540',name:'オメガファンクション<br>欧米茄函数', monsKind:'トライポッド系' ,spaceName:'<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>',isBoss:'Boss',mapWhere:['8134'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'48'},
    {pid:'8541',name:'サファイアゲッコー<br>蓝宝石蜥蜴', monsKind:'リザード系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'Boss',mapWhere:['8135'],showTime:'讨伐附近的同类型敌人',level:'51'},
    {pid:'8542',name:'剛禍の巨魁<br>刚祸之巨魁', monsKind:'ドゴルマン系' ,spaceName:'<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>',isBoss:'Boss',mapWhere:['8136'],showTime:'讨伐附近的同类型敌人<br>打开打怪掉的黑箱子',level:'52'},
    {pid:'8543',name:'プロビデンスアイ<br>天佑之眼', monsKind:'スフィア系' ,spaceName:'<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'Boss',mapWhere:['8137'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'51'},
    {pid:'8544',name:'プリドーク<br>', monsKind:'クアッドアーム系' ,spaceName:'<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>',isBoss:'Boss',mapWhere:['8138'],showTime:'讨伐附近的同类型敌人',level:'52'},
    {pid:'8545',name:'大地鳴り<br>大地之鸣', monsKind:'ドゴルマン系' ,spaceName:'<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>',isBoss:'Boss',mapWhere:['8139'],showTime:'讨伐附近的同类型敌人',level:'49'},
    {pid:'8546',name:'潜む糸鋏<br>', monsKind:'カニクモ系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8140'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'54'},
    {pid:'8547',name:'プライリーアニマ<br>', monsKind:'ゴート系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8141'],showTime:'讨伐附近的同类型敌人',level:'52'},
    {pid:'8548',name:'夢現の宿主<br>梦境之主', monsKind:'エビキノコ系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8142'],showTime:'讨伐附近的同类型敌人',level:'53'},
    {pid:'8549',name:'精鋭騎士団員<br>精锐骑士团员', monsKind:'バーンハルト兵系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8143'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家<br>夜间',level:'55'},
    {pid:'8550',name:'幻妖乱破<br>幻妖乱破', monsKind:'カニクモ系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8144'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家<br>夜间',level:'58'},
    {pid:'8551',name:'ヘヴンスカイ<br>', monsKind:'スカイフィッシュ系' ,spaceName:'西バーンハルト半島',isBoss:'Boss',mapWhere:['8145'],showTime:'讨伐附近的同类型敌人',level:'56'},
    {pid:'8552',name:'移ろいし蛇帝<br>变幻之蛇帝', monsKind:'バイパー系' ,spaceName:'<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>',isBoss:'Boss',mapWhere:['8146'],showTime:'讨伐附近的同类型敌人',level:'57'},
    {pid:'8553',name:'キングムーク<br>穆库王', monsKind:'ムーク系' ,spaceName:'<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>',isBoss:'Boss',mapWhere:['8147'],showTime:'讨伐附近的同类型敌人<br>附近存在6名及以上玩家',level:'59'},
]