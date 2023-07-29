// ◆ E_value
// ┣ pid 序号
// ┣ name 名字
// ┣ kind 幻想类型
// ┣ lev 等级
// ┣ atk 攻击
// ┣ def 防御
// ┣ j 筋力
// ┣ n 耐久
// ┣ q 器用
// ┣ z 知力
// ┣ s 精神
// ┣ end 词缀名
// ┣ endexp 词缀效果
// ┣ isJust 是否限定
// ┗ madeIt 制造
//      ┣ tuzhi 图纸获取
//      ┣ sucai_Q 货币类型
//      ┣ sucai_Q_num 货币数量
//      ┣ sucai_C 材料类型 数组
//      ┣ sucai_C_num 材料数目 数组 和上面对应
//      ┣ sucai_B 掉落怪物名
//      ┗ sucai_B_num 怪物特殊材料数量
var E_value = [
    ///////////////
    //  三叶
    ////////////////
    {pid:'0001',name:'うりうりウリボ<br>抚摸小香猪',kind:'三叶',lev:'5',atk:'2',def:'1',j:'2',n:'5',q:'4',z:'5',s:'5',end:'勇猛G1<br>痛击G1<br>强击：通常攻击・G1',endexp:'攻击力+10<br>会心+12<br>普攻伤害+7%',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['動的エングラムの欠片','トコヨ草'],sucai_C_num:[2,2],sucai_B:'',sucai_B_num:''}},

    {pid:'0002',name:'ジェイクの手紙<br>杰克的信',kind:'三叶',lev:'10',atk:'2',def:'4',j:'7',n:'5',q:'4',z:'7',s:'8',end:'气合奔流G1<br>ストラテジストG1<br>刚力G1',endexp:'ST+5<br>耐力+3 知力+3<br>筋力+5',isJust:'0',madeIt:{tuzhi:'角色任务「ジェイクの手紙」',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['動的エングラムの欠片','グロークンシード','リザードゴーストの澄んだ目玉'],sucai_C_num:[20,3,3],sucai_B:'',sucai_B_num:''}},

    {pid:'0003',name:'神託の乙女<br>神谕少女',kind:'三叶',lev:'15',atk:'4',def:'5',j:'12',n:'13',q:'11',z:'1',s:'8',end:'防御的极意：光属性攻击・G1<br>气合奔流G1<br>集中G1',endexp:'光属性受伤减免+8%<br>ST+5<br>精神+5',isJust:'0',madeIt:{tuzhi:'角色任务「神託の巫女」',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','割れた貝殻','メリソス石灰石'],sucai_C_num:[8,5,3],sucai_B:'',sucai_B_num:''}},

    {pid:'0004',name:'メリソス川のほとりに<br>于梅利索斯河畔',kind:'三叶',lev:'15',atk:'3',def:'6',j:'5',n:'6',q:'12',z:'11',s:'11',end:'耐雷心得G3<br>インスピレーションG1<br>博识G1',endexp:'雷属性耐性+10<br>筋力+3 精神+3<br>知力+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・五',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['さざなみ石','動的エングラムの欠片','ナッポの甘い果汁'],sucai_C_num:[3,23,3],sucai_B:'',sucai_B_num:''}},

    {pid:'0005',name:'護る者の矜持<br>侍卫的矜持',kind:'三叶',lev:'20',atk:'4',def:'9',j:'15',n:'12',q:'10',z:'9',s:'9',end:'スタミナセーブ：闪・・G1<br>气功G2<br>博识G2',endexp:'闪避体力减免+10%<br>耐久+7 器用+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'角色任务「護る者の矜持」',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['環状石','動的エングラムの欠片','オオカガチヤンマの厚い頭殻'],sucai_C_num:[3,34,4],sucai_B:'',sucai_B_num:''}},

    {pid:'0006',name:'手作りの価値<br>手工的价值',kind:'三叶',lev:'25',atk:'5',def:'11',j:'16',n:'17',q:'9',z:'7',s:'16',end:'防御的极意：土属性攻击・G1<br>トランスG2<br>忍耐力G2',endexp:'土属性受伤减免+8%<br>筋力+7 知力+7<br>耐久+13',isJust:'0',madeIt:{tuzhi:'角色任务「手作りの価値」',sucai_Q:'ルーノ',sucai_Q_num:'95800',sucai_C:['水晶の原石','動的エングラム結晶片','砂蝋枝'],sucai_C_num:[10,16,3],sucai_B:'',sucai_B_num:''}},

    {pid:'0007',name:'過ぎし日の陽炎<br>昔日烈阳',kind:'三叶',lev:'30',atk:'8',def:'11',j:'23',n:'18',q:'11',z:'20',s:'3',end:'防御的极意：远隔攻击G・1<br>シックスセンスG2<br>刚力G2',endexp:'远程攻击受伤减免+5%<br>知力+7 精神+7<br>筋力+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・九',sucai_Q:'ルーノ',sucai_Q_num:'158600',sucai_C:['環状石','動的エングラムの欠片','シャドウバイパーのロングテール'],sucai_C_num:[3,59,5],sucai_B:'',sucai_B_num:''}},

    {pid:'0008',name:'砂漠の暴れ猪デザートファング<br>沙漠野猪・大漠獠牙',kind:'三叶',lev:'30',atk:'5',def:'14',j:'9',n:'15',q:'18',z:'20',s:'14',end:'アンチブラインドG3<br>屈强的心身G2<br>巧妙G2',endexp:'暗闇耐性+100%<br>耐久+7 精神+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・九',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['さざなみ石','動的エングラムの欠片','デザートファングの尖った爪'],sucai_C_num:[3,59,5],sucai_B:'',sucai_B_num:''}},

    {pid:'0009',name:'山賊たちのねぐら<br>山贼巢穴',kind:'三叶',lev:'35',atk:'5',def:'19',j:'22',n:'22',q:'22',z:'16',s:'5',end:'不屈G2<br>气功G2<br>刚力G2',endexp:'防御力+40<br>耐久+7 器用+7<br>筋力+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a> 开宝箱<img src="./img/precious/0001.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['動的エングラム結晶片','割れた貝殻','寂れユリ'],sucai_C_num:[22,15,9],sucai_B:'',sucai_B_num:''}},

    {pid:'0010',name:'イマジンたちの声<br>幻想之声',kind:'三叶',lev:'35',atk:'4',def:'19',j:'16',n:'26',q:'18',z:'4',s:'27',end:'耐光心得G3<br>シックスセンスG2<br>忍耐力G2',endexp:'光属性耐性+10<br>知力+7 精神+7<br>耐久+13',isJust:'0',madeIt:{tuzhi:'角色任务「イマジンたちの声」',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['環状石','動的エングラムの欠片','ミーンの丸殻'],sucai_C_num:[15,64,24],sucai_B:'',sucai_B_num:''}},

    {pid:'0011',name:'荒れ狂う剛禍の巨魁<br>狂暴的巨祸之首',kind:'三叶',lev:'40',atk:'6',def:'22',j:'26',n:'23',q:'14',z:'24',s:'14',end:'スタミナセーブ：避・G1<br>集中G2<br>タフネスG2',endexp:'闪避体力减免+10%<br>精神+13<br>筋力+7 耐久+7',isJust:'0',madeIt:{tuzhi:'通过 滝裏の盗掘痕跡・調査 获得的武器任务板<img src="./img/precious/0003.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['環状石','動的エングラムの欠片','山賊の斥候の軽甲'],sucai_C_num:[15,69,15],sucai_B:'',sucai_B_num:''}},

    {pid:'0012',name:'砂漠のシャドウバイパー<br>沙漠中的影蝰蛇',kind:'三叶',lev:'40',atk:'10',def:'16',j:'8',n:'23',q:'8',z:'26',s:'30',end:'屈强的心身G2<br>博识G2<br>耐土心得G3',endexp:'耐久+7 精神+7<br>知力+13<br>土属性耐性+10',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a> 开宝箱<img src="./img/precious/0002.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の術士の靴'],sucai_C_num:[69,15,15],sucai_B:'',sucai_B_num:''}},

    {pid:'0013',name:'*視線も集めております<br>*目不转睛',kind:'三叶',lev:'15',atk:'2',def:'7',j:'12',n:'8',q:'9',z:'5',s:'11',end:'シックスセンスG1<br>巧妙G1<br>防御的极意：土属性攻击・G1',endexp:'知力+3 精神+3<br>器用+5<br>土属性受伤减免+8%',isJust:'1',madeIt:{tuzhi:'2023夏活4500个贝壳道具交换',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','トコヨ草'],sucai_C_num:[8,10],sucai_B:'',sucai_B_num:''}},


    ///////////////
    //  山岳
    ////////////////
    {pid:'1001',name:'遠くに臨むアステルリーズ<br>远方的阿斯特里',kind:'山岳',lev:'5',atk:'2',def:'1',j:'5',n:'2',q:'5',z:'5',s:'4',end:'アンチスタンG3',endexp:'气绝耐性+100%',isJust:'0',madeIt:{tuzhi:'冒险者任务板・三',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['さざなみ石','ランドフォックスの尻尾','動的エングラムの欠片'],sucai_C_num:[2,3,9],sucai_B:'',sucai_B_num:''}},

    {pid:'1002',name:'ラルパル村ポータル<br>拉尔帕尔村的传送点',kind:'山岳',lev:'10',atk:'1',def:'5',j:'9',n:'2',q:'9',z:'5',s:'6',end:'短缩：クラスAG1<br>生命奔流G1<br>集中G1',endexp:'クラスアクション间隔缩短+6%<br>HP+100<br>精神+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・四',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['動的エングラムの欠片','エルダーゴブリンの首飾り','グロークンシード'],sucai_C_num:[20,3,3],sucai_B:'',sucai_B_num:''}},

    {pid:'1003',name:'神に守られし土地<br>神佑的土地',kind:'山岳',lev:'10',atk:'2',def:'4',j:'4',n:'8',q:'5',z:'7',s:'5',end:'耐雷心得G3<>タフネスG1<>博识G1',endexp:'雷属性耐性+10<br>筋力+3 耐久+3<br>知力+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・四',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['水晶の原石','動的エングラム結晶片','煙霧苔'],sucai_C_num:[10,7,3],sucai_B:'',sucai_B_num:''}},

    {pid:'1004',name:'コイン亭亭主の秘密<br>亭主的秘密',kind:'山岳',lev:'15',atk:'3',def:'6',j:'11',n:'4',q:'7',z:'12',s:'11',end:'スタミナセーブ：跳・G1<br>气功G1<br>刚力G1',endexp:'跳跃体力减免+10%<br>耐久+3 器用+3<br>筋力+5',isJust:'0',madeIt:{tuzhi:'角色任务「コイン亭亭主の秘密」',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラムの欠片','グロークンシード','カガチヤンマの羽'],sucai_C_num:[23,3,3],sucai_B:'',sucai_B_num:''}},

    {pid:'1005',name:'目指すはオアシス<br>目光尽头的绿洲',kind:'山岳',lev:'20',atk:'4',def:'9',j:'8',n:'12',q:'13',z:'14',s:'6',end:'短缩：ULTG1<br>不屈G2<br>巧妙G2',endexp:'大招冷却缩减+4%<br>防御+40<br>器用+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・七',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','割れた貝殻','雨唄いの化石'],sucai_C_num:[12,5,3],sucai_B:'',sucai_B_num:''}},

    {pid:'1006',name:'お姉様へ……<br>温柔的大姐姐……',kind:'山岳',lev:'25',atk:'4',def:'12',j:'13',n:'8',q:'16',z:'16',s:'13',end:'短缩：クラスAG1<br>シックスセンスG2<br>刚力G2',endexp:'クラスアクション间隔缩短+6%<br>知力+7 精神+7<br>筋力+13',isJust:'0',madeIt:{tuzhi:'角色任务「お姉様へ……」',sucai_Q:'ルーノ',sucai_Q_num:'95800',sucai_C:['動的エングラム結晶片','トコヨ草','砂ミミズ'],sucai_C_num:[16,10,3],sucai_B:'',sucai_B_num:''}},

    {pid:'1007',name:'ゴブリンキャンプとゴブリンめし<br>哥布林营地的妖精野餐',kind:'山岳',lev:'30',atk:'7',def:'11',j:'12',n:'4',q:'12',z:'23',s:'23',end:'短缩：BイマジンG1<br>エキスパートG2<br>忍耐力G2',endexp:'战斗幻想冷却缩减+6%<br>筋力+7 器用+7<br>耐久+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・九',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の射手の手袋'],sucai_C_num:[59,3,5],sucai_B:'',sucai_B_num:''}},

    {pid:'1008',name:'闘技場に待ち受ける者達<br>竞技场中静候的观众',kind:'山岳',lev:'30',atk:'4',def:'15',j:'18',n:'20',q:'8',z:'14',s:'18',end:'耐暗心得G3<br>ウィズダムG2<br>集中G2',endexp:'暗属性耐性+10<br>器用+7 知力+7<br>精神+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・九',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['環状石','動的エングラムの欠片','ムークの爪'],sucai_C_num:[3,59,5],sucai_B:'',sucai_B_num:''}},

    {pid:'1009',name:'滝に煙る滅びし文明<br>萧瑟云雾里的文明断壁',kind:'山岳',lev:'35',atk:'5',def:'17',j:'25',n:'14',q:'14',z:'22',s:'16',end:'防御的极意：近接攻击G・1<br>エキスパートG2<br>博识G2',endexp:'近战攻击受伤减免+5%<br>筋力+7 器用+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a> 开宝箱<img src="./img/precious/0004.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['動的エングラム結晶片','トコヨ草','ボルオム鉛'],sucai_C_num:[22,15,9],sucai_B:'',sucai_B_num:''}},

    {pid:'1010',name:'半年の間に何が？<br>半年后这世间将会？',kind:'山岳',lev:'35',atk:'3',def:'20',j:'16',n:'26',q:'11',z:'14',s:'25',end:'耐暗心得G3<br>トランスG2<br>巧妙G2',endexp:'暗属性耐性+10<br>筋力+7 知力+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'角色任务「半年の間に何が？」',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['動的エングラム結晶片','割れた貝殻','隕鉄の欠片'],sucai_C_num:[22,15,9],sucai_B:'',sucai_B_num:''}},

    {pid:'1011',name:'守護の要ゾルキシア兵長<br>守护之柱・兵长索尔基西亚',kind:'山岳',lev:'40',atk:'7',def:'20',j:'18',n:'23',q:'18',z:'26',s:'12',end:'トランスG2<br>忍耐力G2<br>アンチポイズンG3',endexp:'筋力+7 知力+7<br>耐久+13<br>毒耐性+100%',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a> 开宝箱<img src="./img/precious/0006.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','ゾルキシア槍兵の鎧'],sucai_C_num:[6,69,15],sucai_B:'',sucai_B_num:''}},

    {pid:'1012',name:'*エーリンゼ様のバカンス<br>*艾丽丝小姐的假期',kind:'山岳',lev:'15',atk:'3',def:'6',j:'7',n:'10',q:'11',z:'9',s:'6',end:'生命奔流G1<br>タフネスG1<br>博识G1',endexp:'HP+100<br>筋力+3 耐久+3<br>知力+5',isJust:'1',madeIt:{tuzhi:'2023夏活4500个贝壳道具交换',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラムの欠片','グロークンシード'],sucai_C_num:[23,3],sucai_B:'',sucai_B_num:''}},


    ///////////////
    //  矢尻
    ////////////////
    {pid:'2001',name:'杖を掲げるエルダーゴブリン<br>高举法杖的哥布林长老',kind:'矢尻',lev:'5',atk:'2',def:'1',j:'5',n:'3',q:'5',z:'3',s:'4',end:'不屈G1<br>生命奔流G1<br>忍耐力G1',endexp:'防御力+15<br>HP+100<br>耐久+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・三',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['環状石','動的エングラムの欠片','ランブルボアの爪'],sucai_C_num:[3,9,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2002',name:'外の世界<br>世界之外',kind:'矢尻',lev:'10',atk:'2',def:'4',j:'7',n:'5',q:'5',z:'7',s:'5',end:'防御的极意：雷属性攻击・G1<br>ウィズダムG1<br>集中G1',endexp:'雷属性受伤减免+8%<br>器用+3 知力+3<br>精神+5',isJust:'0',madeIt:{tuzhi:'角色任务「外の世界」',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['さざなみ石','動的エングラムの欠片','ハイランドフォックスの爪'],sucai_C_num:[3,20,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2003',name:'ティリスの趣味<br>提莉丝的嗜好',kind:'矢尻',lev:'15',atk:'2',def:'7',j:'9',n:'8',q:'13',z:'14',s:'0',end:'スタミナセーブ：走・G1<br>トランスG1<br>巧妙G1',endexp:'冲刺体力减免+10%<br>筋力+3 知力+3<br>器用+5',isJust:'0',madeIt:{tuzhi:'角色任务「ティリスの趣味」',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','トコヨ草','モンテノールストーン'],sucai_C_num:[8,10,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2004',name:'群れ飛ぶガガチヤンマ<br>成群飞舞的蜻蜓',kind:'矢尻',lev:'15',atk:'2',def:'7',j:'5',n:'10',q:'9',z:'9',s:'13',end:'アンチパライズG3',endexp:'麻痹耐性+100%',isJust:'0',madeIt:{tuzhi:'冒险者任务板・五',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['環状石','動的エングラムの欠片','ミーンの羽'],sucai_C_num:[3,23,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2005',name:'乾いた風の終点<br>干风燥沙的终点',kind:'矢尻',lev:'20',atk:'5',def:'8',j:'13',n:'12',q:'10',z:'4',s:'14',end:'耐土心得G3<br>屈强的心身G2<br>刚力G2',endexp:'土属性耐性+10<br>耐久+7 精神+7<br>筋力+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・七',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['水晶の原石','動的エングラム結晶片','レインフォールハーブ'],sucai_C_num:[10,12,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2006',name:'カップケーキの秘密<br>纸杯糕点的秘诀',kind:'矢尻',lev:'25',atk:'4',def:'12',j:'10',n:'16',q:'17',z:'7',s:'16',end:'耐土心得G3<br>エキスパートG2<br>集中G2',endexp:'土属性耐性+10<br>筋力+7 器用+7<br>精神+13',isJust:'0',madeIt:{tuzhi:'角色任务「カップケーキの秘密」',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['さざなみ石','動的エングラムの欠片','シャドウバイパーのテール'],sucai_C_num:[3,46,4],sucai_B:'',sucai_B_num:''}},

    {pid:'2007',name:'守りたい未来<br>想要守护的未来',kind:'矢尻',lev:'30',atk:'5',def:'14',j:'15',n:'18',q:'19',z:'6',s:'18',end:'气合奔流G1<br>トランスG2<br>巧妙G2',endexp:'ST+5<br>筋力+7 知力+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'角色任务「守りたい未来」',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['水晶の原石','動的エングラム結晶片','風の這痕'],sucai_C_num:[10,20,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2008',name:'岩場に佇むホーンゴート<br>立于峭壁上的霍恩羊',kind:'矢尻',lev:'35',atk:'7',def:'15',j:'22',n:'10',q:'22',z:'24',s:'13',end:'スタミナセーブ：全・G1<br>インスピレーションG2<br>巧妙G2',endexp:'全体力减免+3%+10<br>筋力+7 精神+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a> 开宝箱<img src="./img/precious/0012.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['動的エングラム結晶片','トコヨ草','湧水石'],sucai_C_num:[22,15,9],sucai_B:'',sucai_B_num:''}},

    {pid:'2009',name:'一座の絆<br>剧团的牵绊',kind:'矢尻',lev:'35',atk:'9',def:'14',j:'16',n:'26',q:'20',z:'22',s:'2',end:'耐冰心得G3<br>生命奔流G2<br>集中G2',endexp:'冰属性耐性+10<br>HP+400<br>精神+13',isJust:'0',madeIt:{tuzhi:'角色任务「一座の絆」',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['水晶の原石','動的エングラム結晶片','燃える妖花'],sucai_C_num:[15,22,9],sucai_B:'',sucai_B_num:''}},

    {pid:'2010',name:'天の弾丸ゾルキシア狙撃兵<br>高天之弹・索尔基西亚狙击兵',kind:'矢尻',lev:'40',atk:'6',def:'20',j:'24',n:'15',q:'24',z:'20',s:'16',end:'生命奔流G2<br>刚力G2<br>防御的极意：火属性攻击・G1',endexp:'HP+400<br>筋力+13<br>火属性受伤减免+8%',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a> 开宝箱得到的任务板里<img src="./img/precious/0006.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['環状石','動的エングラムの欠片','バラージアームの機鎧'],sucai_C_num:[15,69,15],sucai_B:'',sucai_B_num:''}},

    {pid:'2011',name:'*花火を楽しむなら夜なのじゃ<br>*夜幕降临・烟花盛放之时',kind:'矢尻',lev:'15',atk:'3',def:'6',j:'7',n:'4',q:'10',z:'11',s:'12',end:'ウィズダムG1<br>集中G1<br>防御的极意：冰属性攻击・G1',endexp:'器用+3 知力+3<br>精神+5<br>冰属性受伤减免+8%',isJust:'1',madeIt:{tuzhi:'2023夏活4500个贝壳道具交换',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラムの欠片','さざなみ石'],sucai_C_num:[23,3],sucai_B:'',sucai_B_num:''}},

    {pid:'2012',name:'*貝殻ゴブリンがやってきた<br>*贝壳哥布林堂堂驾到',kind:'矢尻',lev:'15',atk:'4',def:'5',j:'9',n:'10',q:'8',z:'11',s:'6',end:'不屈G1<br>エキスパートG1<br>刚力G1',endexp:'防御力+15<br>筋力+3 器用+3<br>筋力+5',isJust:'1',madeIt:{tuzhi:'2023夏活4500个贝壳道具交换',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','割れた貝殻'],sucai_C_num:[8,5],sucai_B:'',sucai_B_num:''}},


    ///////////////
    //  风车
    ////////////////
    {pid:'3001',name:'フェステのこと<br>关于菲丝特',kind:'风车',lev:'5',atk:'2',def:'1',j:'4',n:'6',q:'4',z:'5',s:'2',end:'气合奔流G1<br>不屈G1<br>刚力G1',endexp:'ST+5<br>防御力+15<br>筋力+5',isJust:'0',madeIt:{tuzhi:'角色任务「フェステのこと」',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['動的エングラム結晶片','ジラ輝石','割れた貝殻'],sucai_C_num:[3,2,4],sucai_B:'',sucai_B_num:''}},

    {pid:'3002',name:'下僕にメロメロ<br>我中意的下仆',kind:'风车',lev:'10',atk:'2',def:'4',j:'4',n:'8',q:'7',z:'4',s:'7',end:'短缩：BイマジンG1<br>不屈G1<br>忍耐力G1',endexp:'战斗幻想冷却缩减+6%<br>防御力+15<br>耐久+5',isJust:'0',madeIt:{tuzhi:'角色任务「下僕にメロメロ」',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['動的エングラムの欠片','環状石','ゴブリンウォーリアーのたてがみ'],sucai_C_num:[20,3,3],sucai_B:'',sucai_B_num:''}},

    {pid:'3003',name:'顕現せし脅威・幽久たる咆哮<br>威压的具显・久远的咆哮',kind:'风车',lev:'20',atk:'4',def:'9',j:'6',n:'10',q:'13',z:'11',s:'13',end:'アンチポイズンG3',endexp:'毒耐性+100%',isJust:'0',madeIt:{tuzhi:'冒险者任务板・七',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['さざなみ石','動的エングラムの欠片','サンドバイパーのテール'],sucai_C_num:[3,34,4],sucai_B:'',sucai_B_num:''}},

    {pid:'3004',name:'色彩のサラムザート・オアシス<br>纷彩的绿洲・撒拉姆札特',kind:'风车',lev:'20',atk:'2',def:'11',j:'17',n:'1',q:'11',z:'9',s:'17',end:'防御的极意：土属性攻击・G1<br>タフネスG2<br>博识G2',endexp:'土属性受伤减免+8%<br>筋力+7 耐久+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・七',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['動的エングラム結晶片','トコヨ草','エバーグリーン雲母砂'],sucai_C_num:[12,10,3],sucai_B:'',sucai_B_num:''}},

    {pid:'3005',name:'紙片の中の日常と非日常<br>平凡非凡・一纸两面',kind:'风车',lev:'25',atk:'3',def:'13',j:'18',n:'13',q:'16',z:'13',s:'7',end:'アンチポイズンG3<br>インスピレーションG2<br>巧妙G2',endexp:'毒耐性+100%<br>筋力+7 精神+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'角色任务「紙片の中の日常と非日常」',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['動的エングラムの欠片','グロークンシード','グレートファングの研がれた牙'],sucai_C_num:[46,3,4],sucai_B:'',sucai_B_num:''}},

    {pid:'3006',name:'ミンスターホルン村ポータル<br>米斯特霍恩村的传送点',kind:'风车',lev:'30',atk:'6',def:'14',j:'18',n:'14',q:'18',z:'14',s:'11',end:'短缩：ULT・G1<br>タフネスG2<br>博识G2',endexp:'大招冷却缩减+4%<br>筋力+7 耐久+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・九',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['さざなみ石','動的エングラムの欠片','ロックリザードの大ヒレ'],sucai_C_num:[3,59,5],sucai_B:'',sucai_B_num:''}},

    {pid:'3007',name:'大地に謡うトリックエルダー<br>诡秘长老向大地吟唱',kind:'风车',lev:'35',atk:'7',def:'17',j:'22',n:'17',q:'16',z:'13',s:'22',end:'アンチスタンG3<br>气合奔流G1<br>刚力G2',endexp:'气绝耐性+100%<br>ST+5<br>筋力+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a> 开宝箱',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['水晶の原石','動的エングラム結晶片','ミラービーンズ'],sucai_C_num:[15,22,9],sucai_B:'',sucai_B_num:''}},

    {pid:'3008',name:'御柱の守護者バラージアーム<br>御柱守护者・迫击臂',kind:'风车',lev:'40',atk:'4',def:'24',j:'16',n:'23',q:'30',z:'6',s:'26',end:'气合奔流G1<br>ストラテジストG2<br>刚力G2',endexp:'ST+5<br>耐久+7 知力+7<br>筋力+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a> 开宝箱<img src="./img/precious/0005.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラムの欠片','グロークンシード','量産型アイアンコフィンの機鎧'],sucai_C_num:[69,15,15],sucai_B:'',sucai_B_num:''}},

    {pid:'3009',name:'御柱のクロノゲート<br>御柱的时空门',kind:'风车',lev:'40',atk:'8',def:'18',j:'10',n:'24',q:'18',z:'24',s:'24',end:'短缩：BイマジンG1<br>シックスセンスG2<br>巧妙G2',endexp:'战斗幻想冷却缩减+6%<br>知力+7 精神+7<br>器用+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a> 开宝箱得到的任务板里<img src="./img/precious/0002.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラムの欠片','グロークンシード','ゾルキシア銃機兵のグローブ'],sucai_C_num:[69,15,15],sucai_B:'',sucai_B_num:''}},

    {pid:'3010',name:'*クラスパートナーのバカンス<br>*与同伴共度的假期',kind:'风车',lev:'15',atk:'3',def:'6',j:'11',n:'5',q:'6',z:'11',s:'12',end:'短缩：BイマジンG1<br>屈强的心身G1<br>忍耐力G1',endexp:'战斗幻想冷却缩减+6%<br>精神+3 耐久+3<br>耐久+5',isJust:'1',madeIt:{tuzhi:'「冒険者登録をしよう」任务',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラムの欠片','環状石'],sucai_C_num:[23,3],sucai_B:'',sucai_B_num:''}},


    ///////////////
    //  水瓶
    ////////////////
    {pid:'4001',name:'巨竜の爪痕の主・荒ぶる牙王<br>巨龙爪痕之主・狂暴牙王',kind:'水瓶',lev:'10',atk:'3',def:'3',j:'5',n:'7',q:'7',z:'9',s:'1',end:'不屈G1<br>シックスセンスG1<br>刚力G1',endexp:'防御力+15<br>知力+3 精神+3<br>筋力+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・四',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['水晶の原石','動的エングラム結晶片','リュウノツメモドキ'],sucai_C_num:[10,7,3],sucai_B:'',sucai_B_num:''}},

    {pid:'4002',name:'雄々しきカイザーエルク<br>威风凛凛的麋鹿',kind:'水瓶',lev:'10',atk:'2',def:'4',j:'7',n:'6',q:'5',z:'4',s:'8',end:'耐光心得G3<br>屈强的心身G1<br>巧妙G1',endexp:'光属性耐性+10<br>耐久+3 精神+3<br>器用+13',isJust:'0',madeIt:{tuzhi:'冒险者任务板・四',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['さざなみ石','動的エングラムの欠片','カイザーエルクの毛皮'],sucai_C_num:[3,20,3],sucai_B:'',sucai_B_num:''}},

    {pid:'4003',name:'交易商の通い道<br>商贸旅道',kind:'水瓶',lev:'15',atk:'4',def:'5',j:'8',n:'10',q:'6',z:'9',s:'11',end:'耐光心得G3<br>エキスパートG1<br>忍耐力G1',endexp:'光属性耐性+10<br>筋力+3 器用+3<br>耐久+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・五',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['環状石','動的エングラム結晶片','カニクモの爪'],sucai_C_num:[5,23,3],sucai_B:'',sucai_B_num:''}},

    {pid:'4004',name:'ムークの縄張り<br>穆库的领地',kind:'水瓶',lev:'15',atk:'5',def:'5',j:'14',n:'10',q:'4',z:'6',s:'12',end:'防御的极意：雷属性攻击・G1<br>生命奔流G1<br>巧妙G1',endexp:'雷属性受伤减免+8%<br>HP+100<br>器用+5',isJust:'0',madeIt:{tuzhi:'冒险者任务板・五',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['水晶の原石','動的エングラム結晶片','リッツェホーンウッド'],sucai_C_num:[10,8,3],sucai_B:'',sucai_B_num:''}},

    {pid:'4005',name:'青い海のメモリー<br>海蓝色的回忆',kind:'水瓶',lev:'20',atk:'3',def:'10',j:'7',n:'13',q:'9',z:'13',s:'13',end:'防御的极意：全攻击G1・<br>ストラテジストG2<br>集中G2',endexp:'全伤害减免+5%<br>耐久+7 知力+7<br>精神+13',isJust:'0',madeIt:{tuzhi:'角色任务「青い海のメモリー」',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['動的エングラムの欠片','グロークンシード','シャドウバイパーのテール'],sucai_C_num:[34,3,4],sucai_B:'',sucai_B_num:''}},

    {pid:'4006',name:'贈りものの相手は<br>致礼物收件人',kind:'水瓶',lev:'25',atk:'4',def:'12',j:'8',n:'9',q:'16',z:'16',s:'16',end:'スタミナセーブ：跳・・G1<br>ウィズダムG2<br>博识G2',endexp:'跳跃体力减免+10%<br>器用+7 知力+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'角色任务「贈りものの相手は」',sucai_Q:'ルーノ',sucai_Q_num:'95800',sucai_C:['動的エングラム結晶片','トコヨ草','谷底白砂'],sucai_C_num:[16,10,3],sucai_B:'',sucai_B_num:''}},

    {pid:'4007',name:'標的を探す山賊の斥候<br>搜寻猎物的山贼斥候',kind:'水瓶',lev:'30',atk:'3',def:'15',j:'23',n:'20',q:'3',z:'12',s:'20',end:'スタミナセーブ：走・G1<br>气功G2<br>博识G2',endexp:'冲刺体力减免+10%<br>耐久+7 器用+7<br>知力+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a> 开宝箱<img src="./img/precious/0007.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の斥候の剣'],sucai_C_num:[59,3,5],sucai_B:'',sucai_B_num:''}},

    {pid:'4008',name:'熱砂のグレートファング<br>热砂的巨大獠牙',kind:'水瓶',lev:'30',atk:'6',def:'13',j:'8',n:'11',q:'18',z:'20',s:'18',end:'防御的极意：暗属性攻击・・G1<br>ストラテジストG2<br>集中G2',endexp:'暗属性受伤减免+8%<br>耐久+7 知力+7<br>精神+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a> 开宝箱<img src="./img/precious/0008.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['さざなみ石','動的エングラムの欠片','オオカニクモの立派な殻'],sucai_C_num:[3,59,5],sucai_B:'',sucai_B_num:''}},

    {pid:'4009',name:'マスターゴブリンの策謀<br>哥布林的阴谋',kind:'水瓶',lev:'35',atk:'6',def:'17',j:'12',n:'14',q:'23',z:'22',s:'18',end:'防御的极意：远隔攻击・・G1<br>タフネスG2<br>忍耐力G2',endexp:'远程攻击受伤减免+5%<br>筋力+7 耐久+7<br>耐久+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a> 开宝箱<img src="./img/precious/0010.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['水晶の原石','動的エングラム結晶片','フィエルの若木'],sucai_C_num:[15,22,9],sucai_B:'',sucai_B_num:''}},

    {pid:'4010',name:'無差別破壊兵器クアッドアーム<br>无差别破坏兵器・四臂式',kind:'水瓶',lev:'35',atk:'8',def:'15',j:'22',n:'26',q:'22',z:'6',s:'11',end:'アンチパライズG3<br>ウィズダムG2<br>集中G2',endexp:'麻痹耐性+100%<br>器用+7 知力+7<br>精神+13',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a> 开宝箱<img src="./img/precious/0009.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'224300',sucai_C:['動的エングラム結晶片','割れた貝殻','翼竜の化石'],sucai_C_num:[22,15,9],sucai_B:'',sucai_B_num:''}},

    {pid:'4011',name:'巡視するレーザーゲイザー<br>巡视中的激光准星',kind:'水瓶',lev:'40',atk:'8',def:'20',j:'24',n:'12',q:'18',z:'24',s:'20',end:'气功G2<br>博识G2<br>耐火心得G3',endexp:'耐久+7 器用+7<br>知力+13<br>火属性耐性+10',isJust:'0',madeIt:{tuzhi:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a> 开宝箱<img src="./img/precious/0011.png" alt="暂缺" class="madeItWinImg">',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','ドラウグ・エッジの破片'],sucai_C_num:[6,69,16],sucai_B:'',sucai_B_num:''}},

    {pid:'4012',name:'新米亭主のお手伝い<br>新晋主人的帮手',kind:'水瓶',lev:'40',atk:'9',def:'16',j:'18',n:'29',q:'17',z:'10',s:'28',end:'防御的极意：土属性攻击・G1<br>インスピレーションG2<br>忍耐力G2',endexp:'土属性受伤减免+8%<br>筋力+7 精神+7<br>耐久+13',isJust:'0',madeIt:{tuzhi:'角色任务「新米亭主のお手伝い」',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','タイラントボアの無傷の牙'],sucai_C_num:[6,69,15],sucai_B:'',sucai_B_num:''}},

    {pid:'4013',name:'*アステルリーズ・ビーチの夏<br>*阿斯特里海滩之夏',kind:'水瓶',lev:'15',atk:'3',def:'6',j:'11',n:'9',q:'11',z:'5',s:'8',end:'博识G1<br>ストラテジストG1<br>防御的极意：火属性攻击・G1',endexp:'知力+5<br>耐久+3 知力+3<br>火属性受伤减免+8%',isJust:'1',madeIt:{tuzhi:'2023夏活4500个贝壳道具交换',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','水晶の原石'],sucai_C_num:[8,10],sucai_B:'',sucai_B_num:''}},

]