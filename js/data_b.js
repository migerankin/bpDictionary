// ◆ B_value
// ┣ pid 序号
// ┣ name 名字
// ┣ element 属性
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
// ┣ cd 冷却
// ┣ skill 技能效果
// ┣ kind 技能类型
// ┣ isJust 是否限定
// ┗ madeIt 制造
//      ┣ tuzhi 图纸获取
//      ┣ sucai_Q 货币类型
//      ┣ sucai_Q_num 货币数量
//      ┣ sucai_C 材料类型 数组
//      ┣ sucai_C_num 材料数目 数组 和上面对应
//      ┣ sucai_B 掉落怪物名
//      ┣ sucai_B_num 怪物特殊材料数量
//      ┗ otherWords 备用属性
var B_value = [
    {pid:'5001',name:'ゴブリン<br>哥布林',element:'无',lev:'2',atk:'1',def:'3',j:'5',n:'8',q:'3',z:'6',s:'5',end:'痛击G1<br>ストラテジストG1<br>忍耐力G1',endexp:'会心力+12<br>耐久+3 知力+3<br>耐久+5',cd:'60',skill:'在前进的同时向前攻击',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['動的エングラム結晶片','割れた貝殻','アステリウム鉱石'],sucai_C_num:[3,4,3],sucai_B:'ゴブリン',sucai_B_num:'1',otherWords:'ミンスター丘陵（图一右上）'}},

    {pid:'5002',name:'ニワトリ<br>鸡',element:'无',lev:'5',atk:'2',def:'4',j:'2',n:'10',q:'6',z:'7',s:'7',end:'强击：Bイマジン・G1<br>ウィズダムG1<br>巧妙G1',endexp:'战斗幻想伤害+6%<br>器用+3 知力+3<br>器用+5',cd:'120',skill:'高声啼鸣，并在一定时间内为自身赋予霸体状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['水晶の原石','動的エングラムの欠片'],sucai_C_num:[10,9],sucai_B:'ニワトリ',sucai_B_num:'1',otherWords:'完成任务「おらのニワトリ」'}},

    {pid:'5003',name:'ランドフォックス<br>平原狐',element:'无',lev:'5',atk:'2',def:'4',j:'4',n:'10',q:'8',z:'7',s:'4',end:'气合奔流G1<br>インスピレーションG1<br>集中G1',endexp:'ST+5<br>筋力+3 精神+3<br>精神+5',cd:'60',skill:'扑击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['環状石','動的エングラム結晶片','ウリボの尾'],sucai_C_num:[5,9,1],sucai_B:'ランドフォックス',sucai_B_num:'1',otherWords:'海鳴りの草原（图一中下）'}},

    {pid:'5004',name:'ピンクウリボ<br>粉色小香猪',element:'无',lev:'5',atk:'2',def:'3',j:'6',n:'4',q:'5',z:'4',s:'9',end:'生命奔流G1<br>ウィズダムG1<br>博识G1',endexp:'HP+100<br>器用+3 知力+3<br>知力+5',cd:'50',skill:'在地面生成一个可以回复友方角色生命值的区域',kind:'回复',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'700',sucai_C:['動的エングラム結晶片','トコヨ草','平原ヒスイ'],sucai_C_num:[2,7,2],sucai_B:'ピンクウリボ',sucai_B_num:'1',otherWords:''}},

    {pid:'5005',name:'タイラントボア<br>暴君野猪',element:'无',lev:'5',atk:'2',def:'4',j:'8',n:'10',q:'4',z:'6',s:'6',end:'勇猛G1<br>タフネスG1<br>刚力G1',endexp:'攻击力+10<br>筋力+3 耐久+3<br>筋力+5',cd:'60',skill:'使用獠牙挑击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'1400',sucai_C:['水晶の原石','動的エングラム結晶片','長毛草'],sucai_C_num:[10,3,2],sucai_B:'タイラントボア',sucai_B_num:'1',otherWords:'アンドラ盆地（图一中上）'}},

    {pid:'5006',name:'ホーンゴート<br>霍恩羊',element:'无',lev:'10',atk:'4',def:'5',j:'8',n:'8',q:'11',z:'12',s:'8',end:'强击：远隔攻击・G1<br>气功G1<br>忍耐力G1',endexp:'远程攻击造成伤害+5%<br>耐久+3 器用+3<br>耐久+5',cd:'65',skill:'用后足蹄击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['さざなみ石','動的エングラム結晶片','ゴブリンのたてがみ'],sucai_C_num:[3,10,1],sucai_B:'ホーンゴート',sucai_B_num:'1',otherWords:'鎮まりの山麓(图一右)'}},

    {pid:'5007',name:'カイザーエルク<br>凯撒麋鹿',element:'无',lev:'10',atk:'4',def:'4',j:'5',n:'15',q:'7',z:'13',s:'7',end:'强击：近接攻击・G1<br>トランスG1<br>博识G1',endexp:'近战造成伤害+5%<br>筋力+3 知力+3<br>知力+5',cd:'60',skill:'用鹿角撞击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['動的エングラム結晶片','グロークンシード','ハイランドフォックスの牙'],sucai_C_num:[10,3,1],sucai_B:'カイザーエルク',sucai_B_num:'1',otherWords:'神の見守る丘（图一左下）'}},

    {pid:'5008',name:'赤い飛沫<br>赤红飞沫',element:'无',lev:'10',atk:'4',def:'4',j:'5',n:'15',q:'7',z:'13',s:'7',end:'气合奔流G1<br>ウィズダムG1<br>巧妙G1',endexp:'ST+5<br>器用+3 知力+3<br>器用+5',cd:'65',skill:'瞄准后用木棍击打敌人头部，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['動的エングラム結晶片','割れた貝殻','あかつき草'],sucai_C_num:[7,5,3],sucai_B:'赤い飛沫',sucai_B_num:'1',otherWords:''}},

    {pid:'5009',name:'猛る獸<br>猛兽',element:'无',lev:'10',atk:'3',def:'6',j:'14',n:'13',q:'5',z:'5',s:'11',end:'勇猛G1<br>インスピレーションG1<br>集中G1',endexp:'攻击力+10<br>筋力+3 精神+3<br>精神+5',cd:'60',skill:'发出鼓舞的嚎叫，一定时间内为自身赋予造成伤害提升・小状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'8800',sucai_C:['水晶の原石','動的エングラム結晶片','旅藻草'],sucai_C_num:[10,7,2],sucai_B:'猛る獸',sucai_B_num:'1',otherWords:''}},

    {pid:'5010',name:'フェステα<br>菲丝特α',element:'无',lev:'10',atk:'4',def:'6',j:'12',n:'11',q:'9',z:'11',s:'4',end:'ストラテジストG2',endexp:'耐久+7 知力+7',cd:'90',skill:'用瓶子进行投掷攻击，并赋予敌人眩晕效果',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'1000',sucai_C:['-'],sucai_C_num:[2,2],sucai_B:'フェステα',sucai_B_num:'3',otherWords:'签到获得'}},

    {pid:'5011',name:'エビキノコ<br>蘑菇虾',element:'无',lev:'15',atk:'6',def:'5',j:'10',n:'17',q:'11',z:'11',s:'14',end:'强击：远隔攻击・G1<br>气功G1<br>巧妙G1',endexp:'远程攻击造成伤害+5%<br>耐久+3 器用+3<br>器用+5',cd:'80',skill:'通过向周围散播孢子攻击敌人',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラムの欠片','グロークンシード','エビキノコの爪'],sucai_C_num:[10,3,1],sucai_B:'エビキノコ',sucai_B_num:'1',otherWords:'リッツェ交易街道（图一）'}},

    {pid:'5012',name:'ナッポα<br>纳波α',element:'无',lev:'15',atk:'6',def:'7',j:'14',n:'16',q:'11',z:'15',s:'6',end:'气合奔流G1<br>シックスセンスG1<br>博识G1',endexp:'ST+5<br>知力+3 精神+3<br>知力+5',cd:'65',skill:'跳起舞蹈，一定时间内为自身赋予伤害增加・大状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','割れた貝殻','メリソスフラワー'],sucai_C_num:[5,5,3],sucai_B:'ナッポ',sucai_B_num:'1',otherWords:'メリソス川流域（图一右）'}},

    {pid:'5013',name:'サファイアトロット<br>宝蓝色的急行',element:'无',lev:'15',atk:'5',def:'7',j:'14',n:'18',q:'14',z:'2',s:'12',end:'痛击G1<br>インスピレーションG1<br>集中G1',endexp:'会心力+12<br>筋力+3 精神+3<br>精神+5',cd:'80',skill:'迅猛的撕咬敌人，并敌人赋予中毒状态、恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','トコヨ草','バハ鉱石'],sucai_C_num:[8,10,3],sucai_B:'サファイアトロット',sucai_B_num:'1',otherWords:''}},

    {pid:'5014',name:'鉄牙<br>铁牙',element:'无',lev:'15',atk:'5',def:'7',j:'18',n:'7',q:'17',z:'10',s:'11',end:'强击：近接攻击・G1<br>タフネスG1<br>忍耐力G1',endexp:'近战造成伤害+5%<br>筋力+3 耐久+3<br>耐久+5',cd:'65',skill:'使用獠牙挑击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['動的エングラム結晶片','割れた貝殻','哭竜鉱'],sucai_C_num:[8,5,3],sucai_B:'鉄牙',sucai_B_num:'1',otherWords:''}},

    {pid:'5015',name:'深緑の牙<br>深绿的獠牙',element:'无',lev:'15',atk:'7',def:'5',j:'10',n:'16',q:'3',z:'17',s:'14',end:'急所感知G1<br>タフネスG1<br>刚力G1',endexp:'会心率+4%<br>筋力+3 耐久+3<br>筋力+5',cd:'95',skill:'向前突进攻击敌人，并为其赋予眩晕状态、恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'20000',sucai_C:['さざなみ石','動的エングラムの欠片','ゴブリンの棍棒'],sucai_C_num:[4,23,2], sucai_B:'深緑の牙',sucai_B_num:'1',otherWords:''}},

    {pid:'5016',name:'スカイサーペント<br>螣蛇',element:'冰',lev:'20',atk:'9',def:'7',j:'2',n:'14',q:'15',z:'21',s:'21',end:'气合奔流G1<br>屈强的心身G1<br>集中G1',endexp:'ST+5<br>耐久+3 精神+3<br>精神+5',cd:'60',skill:'发射冰弹对敌人造成冰属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['水晶の原石','動的エングラム結晶片','道草花'],sucai_C_num:[10,12,3],sucai_B:'スカイサーペント',sucai_B_num:'1',otherWords:''}},

    {pid:'5017',name:'スプーキーゴート<br>幽灵山羊',element:'无',lev:'20',atk:'7',def:'9',j:'21',n:'11',q:'9',z:'18',s:'18',end:'勇猛G1<br>エキスパートG1<br>刚力G1',endexp:'攻击力+10<br>筋力+3 器用+3<br>筋力+5',cd:'70',skill:'大声鸣叫，一定时间内为自身赋予移动速度提升・中状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['動的エングラム結晶片','割れた貝殻','静夜鉱'],sucai_C_num:[12,5,3],sucai_B:'スプーキーゴート',sucai_B_num:'1',otherWords:''}},

    {pid:'5018',name:'サンドバイパー<br>白蝰蛇',element:'无',lev:'20',atk:'7',def:'7',j:'14',n:'19',q:'20',z:'15',s:'8',end:'强击：通常攻击・G1<br>气功G1<br>忍耐力G1',endexp:'普通攻击造成伤害+7%<br>耐久+3 器用+3<br>耐久+5',cd:'80',skill:'咬向敌人，并为其赋予麻痹状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['動的エングラムの欠片','グロークンシード','ランドホークの鉤爪'],sucai_C_num:[10,3,1],sucai_B:'サンドバイパー',sucai_B_num:'1',otherWords:'オルビド平野（图一左）'}},

    {pid:'5019',name:'ネコ<br>猫',element:'无',lev:'20',atk:'7',def:'8',j:'15',n:'19',q:'19',z:'6',s:'18',end:'生命奔流G1<br>ウィズダムG1<br>巧妙G1',endexp:'HP+100<br>器用+3 知力+3<br>器用+5',cd:'65',skill:'梳理毛发，在一定时间内为自身赋予受到伤害减少・中状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'47500',sucai_C:['動的エングラムの欠片','トコヨ草'],sucai_C_num:[10,9],sucai_B:'ネコ',sucai_B_num:'',otherWords:'完成任务「ネコネコ大集合」'}},

    {pid:'5020',name:'異国の山賊ネズミ<br>异国山贼・鼠',element:'无',lev:'25',atk:'12',def:'6',j:'16',n:'8',q:'28',z:'25',s:'16',end:'痛击G1<br>エキスパートG2<br>巧妙G2',endexp:'会心力+12<br>筋力+7 器用+7<br>器用+13',cd:'80',skill:'投掷飞刃攻击敌人，并为其赋予中毒状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の戦靴'],sucai_C_num:[46,3,3],sucai_B:'異国の山賊ネズミ',sucai_B_num:'1',otherWords:''}},

    {pid:'5021',name:'プレデター<br>捕食者',element:'无',lev:'25',atk:'12',def:'6',j:'22',n:'17',q:'22',z:'5',s:'25',end:'强击：远隔攻击・G1<br>屈强的心身G1<br>忍耐力G1',endexp:'远程攻击造成伤害+5%<br>耐久+3 精神+3<br>耐久+5',cd:'65',skill:'用腹部撞击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['水晶の原石','動的エングラム結晶片','急流藻草'],sucai_C_num:[10,16,3],sucai_B:'プレデター',sucai_B_num:'1',otherWords:''}},

    {pid:'5022',name:'マスクモス<br>彩羽鹞',element:'无',lev:'25',atk:'9',def:'8',j:'23',n:'15',q:'18',z:'12',s:'22',end:'生命奔流G2<br>气功G2<br>忍耐力G2',endexp:'HP+400<br>耐久+7 器用+7<br>耐久+13',cd:'80',skill:'发出超声波攻击敌人，并为其赋予麻痹状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['さざなみ石','動的エングラムの欠片','サンドバイパーの甲殻'],sucai_C_num:[3,10,1],sucai_B:'マスクモス',sucai_B_num:'1',otherWords:'レインフォール旧街道（图一）'}},

    {pid:'5023',name:'バジリスク<br>玄武蜥蜴',element:'火',lev:'25',atk:'11',def:'8',j:'14',n:'23',q:'11',z:'22',s:'22',end:'强击：近接攻击・G1<br>タフネスG2<br>刚力G2',endexp:'近战造成伤害+5%<br>筋力+7 耐久+7<br>筋力+13',cd:'70',skill:'向前方吐出火焰攻击敌人，并为其赋予暗闇状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'92800',sucai_C:['水晶の原石','動的エングラム結晶片','砂丘斑点虫'],sucai_C_num:[10,16,3],sucai_B:'バジリスク',sucai_B_num:'1',otherWords:''}},

    {pid:'5024',name:'炎角<br>炎角',element:'火',lev:'30',atk:'9',def:'13',j:'28',n:'21',q:'24',z:'24',s:'2',end:'强击：Bイマジン・G1<br>トランスG2<br>刚力G2',endexp:'战斗幻想伤害+6%<br>筋力+7 知力+7<br>筋力+13',cd:'65',skill:'向前行进对敌人造成火属性伤害，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'158600',sucai_C:['ホーンゴートの角','動的エングラムの欠片','環状石'],sucai_C_num:[3,59,3],sucai_B:'炎角',sucai_B_num:'1',otherWords:''}},

    {pid:'5025',name:'ランドホーク<br>鹞',element:'无',lev:'30',atk:'12',def:'10',j:'16',n:'15',q:'18',z:'24',s:'26',end:'气合奔流G1<br>シックスセンスG2<br>博识G2',endexp:'ST+5<br>知力+7 精神+7<br>知力+15',cd:'60',skill:'在空中滑行向敌人冲刺进行攻击，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'158600',sucai_C:['環状石','動的エングラムの欠片','山賊の射手のズボン'],sucai_C_num:[3,10,1],sucai_B:'ランドホーク',sucai_B_num:'1',otherWords:'陽炎の谷（图一左下）'}},

    {pid:'5026',name:'オオカニクモ<br>黄蟹蛛',element:'无',lev:'30',atk:'13',def:'9',j:'24',n:'27',q:'14',z:'24',s:'14',end:'痛击G1<br>インスピレーションG2<br>集中G2',endexp:'会心力+12<br>筋力+7 精神+7<br>精神+13',cd:'95',skill:'向周围发射粘弹进行攻击，并为命中的敌人赋予束缚状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['動的エングラムの欠片','グロークンシード','カガチヤンマの体液'],sucai_C_num:[10,3,1],sucai_B:'オオカニクモ',sucai_B_num:'1',otherWords:'風止みの荒地（图一）'}},

    {pid:'5027',name:'クインマスクモス<br>皇后白羽鹞',element:'冰',lev:'30',atk:'11',def:'12',j:'24',n:'25',q:'29',z:'16',s:'8',end:'痛击G1<br>气功G2<br>忍耐力G2',endexp:'会心力+12<br>耐久+7 器用+7<br>耐久+13',cd:'60',skill:'释放鳞粉对敌人造成冰元素伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'162000',sucai_C:['動的エングラムの欠片','グロークンシード','デザートファングの高品質な毛皮'],sucai_C_num:[59,3,3],sucai_B:'クインマスクモス',sucai_B_num:'1',otherWords:''}},

    {pid:'5028',name:'異国の山賊射手ヤマネコ<br>异国山贼射手・山猫',element:'雷',lev:'30',atk:'11',def:'11',j:'12',n:'21',q:'29',z:'12',s:'28',end:'急所感知G1<br>ウィズダムG2<br>巧妙G2',endexp:'会心率+4%<br>器用+7 知力+7<br>器用+13',cd:'60',skill:'射出箭矢，对敌人造成穿透的雷属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'162200',sucai_C:['さざなみ石','動的エングラムの欠片','サンドバイパーの殻'],sucai_C_num:[3,59,3],sucai_B:'異国の山賊射手ヤマネコ',sucai_B_num:'1',otherWords:''}},

    {pid:'5029',name:'山賊<br>山贼',element:'无',lev:'35',atk:'12',def:'12',j:'17',n:'24',q:'28',z:'28',s:'18',end:'勇猛G2<br>インスピレーションG2<br>集中G2',endexp:'攻击力+25<br>筋力+7 精神+7<br>精神+13',cd:'60',skill:'使用剑斧进行刺击攻击',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['動的エングラムの欠片','グロークンシード','タイラントボア・グロウの上質な毛皮'],sucai_C_num:[10,3,1],sucai_B:'山賊',sucai_B_num:'2',otherWords:'夕凪の段丘（图一下）'}},

    {pid:'5030',name:'悪しき癒し手<br>邪医',element:'无',lev:'35',atk:'15',def:'9',j:'21',n:'12',q:'28',z:'28',s:'29',end:'生命奔流G2<br>ストラテジストG2<br>博识G2',endexp:'HP+400<br>耐久+7 知力+7<br>知力+13',cd:'75',skill:'举起法杖展开能够回复友方角色生命值的区域',kind:'回复',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'217900',sucai_C:['水晶の原石','動的エングラム結晶片','ストリガの実'],sucai_C_num:[10,22,3],sucai_B:'悪しき癒し手',sucai_B_num:'1',otherWords:''}},

    {pid:'5031',name:'小さき闘技者<br>小小技斗者',element:'火',lev:'35',atk:'14',def:'10',j:'28',n:'7',q:'28',z:'28',s:'23',end:'强击：通常攻击・G1<br>タフネスG2<br>刚力G2',endexp:'普通攻击造成伤害+7%<br>筋力+7 耐久+7<br>筋力+13',cd:'70',skill:'为敌人赋予火属性耐性下降・中状态、恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['環状石','動的エングラムの欠片','ムークの頸毛'],sucai_C_num:[3,64,3],sucai_B:'小さき闘技者',sucai_B_num:'1',otherWords:''}},

    {pid:'5032',name:'這いずる羽音<br>伏地的羽翼',element:'雷',lev:'35',atk:'10',def:'13',j:'32',n:'2',q:'23',z:'23',s:'32',end:'强击：通常攻击・G1<br>屈强的心身G2<br>集中G2',endexp:'普通攻击造成伤害+7%<br>耐久+7 精神+7<br>精神+13',cd:'60',skill:'发射爆裂弹，对敌人造成雷属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['さざなみ石','動的エングラムの欠片','サンドバイパーの棘'],sucai_C_num:[3,64,3],sucai_B:'這いずる羽音',sucai_B_num:'1',otherWords:''}},

    {pid:'5033',name:'渓谷の遊猟者<br>峡谷的游猎者',element:'冰',lev:'35',atk:'15',def:'10',j:'28',n:'29',q:'14',z:'13',s:'32',end:'强击：远隔攻击・G1<br>エキスパートG2<br>巧妙G2',endexp:'远程攻击造成伤害+5%<br>筋力+7 器用+7<br>器用+13',cd:'80',skill:'朝三个方向射出箭矢，对敌人造成冰元素伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['さざなみ石','動的エングラムの欠片','ムークアーチャーのキバ'],sucai_C_num:[3,64,3],sucai_B:'渓谷の遊猟者',sucai_B_num:'1',otherWords:''}},

    {pid:'5034',name:'虚ろの白礫<br>空洞白砾',element:'冰',lev:'35',atk:'16',def:'8',j:'0',n:'36',q:'23',z:'28',s:'25',end:'强击：近接攻击・G1<br>トランスG2<br>刚力G2',endexp:'近战造成伤害+5%<br>筋力+7 知力+7<br>筋力+13',cd:'60',skill:'一边旋转一边向前推进，对敌人造成冰元素伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['動的エングラム結晶片','割れた貝殻','風故物'],sucai_C_num:[22,5,3],sucai_B:'虚ろの白礫',sucai_B_num:'1',otherWords:''}},

    {pid:'5035',name:'疾駆の大鷲<br>翱翔之鹫',element:'光',lev:'35',atk:'15',def:'9',j:'30',n:'22',q:'35',z:'9',s:'23',end:'急所感知G1<br>タフネスG2<br忍耐力G2',endexp:'会心率+4%<br>筋力+7 耐久+7<br>耐久+13',cd:'60',skill:'向前滑翔造成光属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'221500',sucai_C:['環状石','動的エングラムの欠片','リザードゴーストの鮮やかな鱗'],sucai_C_num:[3,64,3],sucai_B:'疾駆の大鷲',sucai_B_num:'1',otherWords:''}},

    {pid:'5036',name:'ナッポβ<br>纳波β',element:'无',lev:'35',atk:'11',def:'12',j:'21',n:'22',q:'28',z:'18',s:'28',end:'气合奔流G1<br>シックスセンスG2<br>博识G2',endexp:'ST+5<br>知力+7 精神+7<br>知力+13',cd:'75',skill:'生成一个可以回复友方角色生命值的区域',kind:'回复',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'-',sucai_C:['-'],sucai_C_num:[],sucai_B:'ナッポβ',sucai_B_num:'',otherWords:'完成任务「イタズラ好きの果実たち」'}},

    {pid:'5037',name:'アインレインα<br>爱因莱因α',element:'冰',lev:'40',atk:'19',def:'10',j:'9',n:'18',q:'31',z:'31',s:'36',end:'ウィズダムG2',endexp:'器用+7 知力+7',cd:'65',skill:'生成一个能够抵御远程伤害的防御屏障，并为屏障中的友方角色赋予伤害减免・中状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'待补充',sucai_C:['-'],sucai_C_num:[2,2],sucai_B:'アインレインα',sucai_B_num:'',otherWords:'通行证六十级'}},

    {pid:'5038',name:'カガチヤンマ<br>灰卡伽蜻蜓',element:'无',lev:'40',atk:'15',def:'11',j:'21',n:'35',q:'21',z:'31',s:'23',end:'强击：远隔攻击・G1<br气功G2<br集中G2',endexp:'战远程攻击造成伤害+5%<br>耐久+7 器用+7<br>精神+13',cd:'80',skill:'发射睡眠弹，并未命中的敌人赋予睡眠状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','ナッポの扇葉'],sucai_C_num:[3,10,1],sucai_B:'カガチヤンマ',sucai_B_num:'2',otherWords:'ガレィリッジ廃道（图一左下）'}},

    {pid:'5039',name:'エルダーゴブリン<br>哥布林长老',element:'火',lev:'40',atk:'15',def:'12',j:'23',n:'18',q:'23',z:'36',s:'31',end:'勇猛G2<br>屈强的心身G2<br巧妙G2',endexp:'攻击力+25<br>耐久+7 精神+7<br>器用+13',cd:'60',skill:'发射单发火球造成火元素伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['水晶の原石','動的エングラム結晶片','フィエル蓮葉'],sucai_C_num:[10,3,5],sucai_B:'エルダーゴブリン',sucai_B_num:'1',otherWords:'フィエル嶺水池（图二左上）'}},

    {pid:'5040',name:'異国の山賊斥候キツネ<br>异国山贼斥候・狐',element:'冰',lev:'40',atk:'13',def:'14',j:'31',n:'21',q:'36',z:'31',s:'9',end:'サドンアタックG1<br>ウィズダムG2<br巧妙G2',endexp:'从敌人背面发起的攻击伤害+6%+6%<br>器用+7 知力+7<br>器用+13',cd:'65',skill:'向三个方向投掷飞刃攻击敌人，并为命中的敌人赋予冰属性耐性下降・中状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','リザードゴーストの尖鋭な背ビレ'],sucai_C_num:[3,69,3],sucai_B:'異国の山賊斥候キツネ',sucai_B_num:'2',otherWords:''}},

    {pid:'5041',name:'炎獄<br>炎狱',element:'火',lev:'40',atk:'11',def:'16',j:'39',n:'39',q:'26',z:'0',s:'22',end:'スキルブースト：Tスキル・G1<br>屈强的心身G2<br>忍耐力G2',endexp:'提高角色技能造成的伤害+5%<br>耐久+7 精神+7<br>耐久+13',cd:'70',skill:'挥舞岩柱攻击敌人，造成火属性伤害并为敌人赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラム結晶片','トコヨ草','星屑草'],sucai_C_num:[24,10,3],sucai_B:'炎獄',sucai_B_num:'1',otherWords:''}},

    {pid:'5042',name:'サンドパイソン<br>沙蟒',element:'土',lev:'40',atk:'12',def:'13',j:'26',n:'18',q:'16',z:'34',s:'40',end:'ジャストカウンターG1<br>气功G2<br>巧妙G2',endexp:'提高闪避攻击造成的伤害+6%<br>耐久+7 器用+7<br>器用+13',cd:'65',skill:'施展咆哮，对周围敌人造成土属性伤害，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の斥候の上着'],sucai_C_num:[69,3,3],sucai_B:'サンドパイソン',sucai_B_num:'1',otherWords:''}},

    {pid:'5043',name:'ドゴルマン<br>多古尔曼兽',element:'无',lev:'40',atk:'13',def:'14',j:'31',n:'16',q:'31',z:'21',s:'31',end:'痛击G1<br>エキスパートG2<br>刚力G2',endexp:'会心力+12<br>筋力+7 器用+7<br>筋力+13',cd:'65',skill:'跳跃后锤击地面，攻击敌人并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['さざなみ石','動的エングラムの欠片','オオカガチヤンマの立派な殻'],sucai_C_num:[3,10,1],sucai_B:'ドゴルマン',sucai_B_num:'2',otherWords:'帰らずの砂塵（图一）'}},

    {pid:'5044',name:'剛腕の覇者<br>刚腕的霸者',element:'雷',lev:'45',atk:'22',def:'9',j:'44',n:'46',q:'26',z:'15',s:'20',end:'サドンアタックG1<br>インスピレーションG3<br>刚力G3',endexp:'从敌人背面发起的攻击伤害+6%<br>筋力+13 精神+13<br>筋力+25',cd:'60',skill:'击打地面，造成雷属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['環状石','動的エングラムの欠片','ドゴルマンの体毛'],sucai_C_num:[15,74,8],sucai_B:'剛腕の覇者',sucai_B_num:'2',otherWords:''}},

    {pid:'5045',name:'トリックエルダー<br>蛊师',element:'冰',lev:'45',atk:'18',def:'13',j:'17',n:'29',q:'23',z:'38',s:'35',end:'暗杀术G1<br>トランスG3<br>博识G3',endexp:'从敌人背面发起的攻击会心率+40%<br>筋力+13 知力+13<br>知力+25',cd:'60',skill:'连续射出三块冰块，造成冰属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['環状石','動的エングラムの欠片','ゴブリンの尻尾'],sucai_C_num:[15,74,8],sucai_B:'トリックエルダー',sucai_B_num:'2',otherWords:''}},

    {pid:'5046',name:'蒼白灯の守衛<br>苍白之光的守护者',element:'雷',lev:'45',atk:'20',def:'10',j:'38',n:'41',q:'4',z:'29',s:'29',end:'勇猛G3<br>エキスパートG3<br>忍耐力G3',endexp:'攻击力+50<br>筋力+13 器用+13<br>耐久+25',cd:'60',skill:'从掌中射出激光束造成雷属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['動的エングラムの欠片','トコヨ草','落星孔雀石'],sucai_C_num:[25,30,12],sucai_B:'蒼白灯の守衛',sucai_B_num:'2',otherWords:''}},

    {pid:'5047',name:'異国の山賊長ヒグマ<br>异国的山贼匪首・棕熊',element:'无',lev:'45',atk:'19',def:'12',j:'35',n:'29',q:'12',z:'36',s:'35',end:'强击：全攻击・G1<br>トランスG3<br>博识G3',endexp:'全攻击伤害+4%<br>筋力+13 知力+13<br>知力+25',cd:'65',skill:'发出号令，生成一个区域，为其中的友方角色赋予持续一定时间造成伤害提升・中状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'384800',sucai_C:['環状石','動的エングラムの欠片','山賊の斥候の戦靴'],sucai_C_num:[15,74,8],sucai_B:'異国の山賊長ヒグマ',sucai_B_num:'2',otherWords:''}},

    {pid:'5048',name:'猛る金色<br>金黄的盛怒',element:'雷',lev:'45',atk:'21',def:'11',j:'44',n:'41',q:'9',z:'29',s:'26',end:'痛击G1<br>气功G3<br>集中G3',endexp:'会心力+12<br>耐久+13 器用+13<br>精神+25',cd:'70',skill:'向前推进造成雷属性伤害，并赋予敌人受到伤害提升・小状态、恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['環状石','動的エングラムの欠片','オーガの重角'],sucai_C_num:[15,74,8],sucai_B:'猛る金色',sucai_B_num:'1',otherWords:''}},

    {pid:'5049',name:'オロチ<br>粉蛇',element:'火',lev:'45',atk:'15',def:'15',j:'38',n:'26',q:'35',z:'16',s:'29',end:'生命奔流G3<br>インスピレーションG3<br>忍耐力G3',endexp:'HP+700<br>筋力+13 精神+13<br>耐久+25',cd:'60',skill:'向前吐息，造成火属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'384800',sucai_C:['動的エングラム結晶片','トコヨ草','砂丘生痕'],sucai_C_num:[25,30,12],sucai_B:'オロチ',sucai_B_num:'2',otherWords:''}},

    {pid:'5050',name:'ドラウグ・ラピス<br>洞穿之石・青金',element:'土',lev:'45',atk:'17',def:'14',j:'26',n:'35',q:'35',z:'29',s:'20',end:'アサルトダイブG1<br>タフネスG3<br>忍耐力G3',endexp:'高空突击（高度加成）伤害+4%<br>筋力+13 耐久+13<br>耐久+25',cd:'60',skill:'左右手分别射出三道光束进行攻击，造成土属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['動的エングラムの欠片','グロークンシード','山賊の護衛の上着'],sucai_C_num:[74,15,8],sucai_B:'ドラウグ・ラピス',sucai_B_num:'2',otherWords:''}},

    {pid:'5051',name:'荒ぶる牙王<br>狂暴牙王',element:'暗',lev:'45',atk:'13',def:'16',j:'29',n:'39',q:'35',z:'3',s:'44',end:'キドニーブローG1<br>タフネスG3<br>刚力G3',endexp:'从敌人背面发起的攻击会心力+18<br>筋力+13 耐久+13<br>筋力+25',cd:'70',skill:'向前进行冲刺攻击，造成暗属性伤害并为敌人赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['さざなみ石','動的エングラムの欠片','ゴブリン・グロウのたてがみ'],sucai_C_num:[6,74,8],sucai_B:'荒ぶる牙王',sucai_B_num:'2',otherWords:''}},

    {pid:'5052',name:'渓谷の尖兵<br>峡谷的哨兵',element:'雷',lev:'45',atk:'19',def:'11',j:'13',n:'35',q:'26',z:'35',s:'35',end:'气合奔流G1<br>インスピレーションG3<br>集中G3',endexp:'ST+5<br>筋力+13 精神+13<br>精神+25',cd:'60',skill:'使用剑刃斩击，造成雷属性伤害并赋予敌人雷属性耐性下降・小状态、恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['動的エングラム結晶片','トコヨ草','モンテノール池苔'],sucai_C_num:[25,30,12],sucai_B:'渓谷の尖兵',sucai_B_num:'2',otherWords:''}},

    {pid:'5053',name:'鮮やかナッポ<br>缤纷纳波',element:'无',lev:'45',atk:'18',def:'11',j:'15',n:'35',q:'35',z:'35',s:'23',end:'强击：全攻击・G1<br>シックスセンスG3<br>博识G3',endexp:'全攻击伤害+4%<br>知力+13 精神+13<br>知力+25',cd:'80',skill:'通过投掷蹦蹦凤梨进行攻击，并为命中的敌人赋予麻痹状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['動的エングラムの欠片','グロークンシード','ミーンの針'],sucai_C_num:[74,15,8],sucai_B:'鮮やかナッポ',sucai_B_num:'2',otherWords:''}},

    {pid:'5054',name:'エメラルドホーン<br>翡翠号角',element:'冰',lev:'45',atk:'15',def:'14',j:'35',n:'44',q:'9',z:'26',s:'35',end:'反击G1<br>屈强的心身G3<br>忍耐力G3',endexp:'受身成功后造成伤害增加+5%<br>耐久+13 精神+13<br>耐久+25',cd:'65',skill:'蹬地，对敌人造成冰属性伤害，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'384800',sucai_C:['さざなみ石','動的エングラムの欠片','ホーンゴートの毛皮'],sucai_C_num:[6,74,8],sucai_B:'エメラルドホーン',sucai_B_num:'2',otherWords:''}},

    {pid:'5055',name:'隠者の鋭鋏<br>隐士的锐爪',element:'冰',lev:'45',atk:'21',def:'10',j:'23',n:'41',q:'35',z:'9',s:'35',end:'アサルトダイブG1<br>ストラテジストG3<br>忍耐力G3',endexp:'高空突击（高度加成）伤害+4%<br>耐久+13 知力+13<br>耐久+25',cd:'60',skill:'撞击地面，造成冰属性伤害',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['環状石','動的エングラムの欠片','シャドウバイパーの厚手の外皮'],sucai_C_num:[15,74,8],sucai_B:'隠者の鋭鋏',sucai_B_num:'1',otherWords:''}},

    {pid:'5056',name:'アインレインβ<br>爱因莱因β',element:'冰',lev:'50',atk:'22',def:'12',j:'32',n:'3',q:'38',z:'45',s:'38',end:'气合奔流G1',endexp:'ST+5',cd:'70',skill:'在原地生成领域并进行攻击，为敌人赋予受到伤害增加・小状态、冰属性耐性下降・小状态、移动速度下降・小状态降低',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'待补充',sucai_C:['-'],sucai_C_num:[],sucai_B:'アインレインβ',sucai_B_num:'',otherWords:'付费通行证满级奖励'}},

    {pid:'5057',name:'フェステβ<br>菲丝特β',element:'无',lev:'50',atk:'21',def:'13',j:'45',n:'29',q:'19',z:'22',s:'48',end:'生命奔流G3',endexp:'HP+700',cd:'90',skill:'在战场上鼓舞应援，一定时间内为自身赋予造成伤害提升・小状态、移动速度提升・小状态、技能冷却时间缩短・中状态、霸体状态',kind:'辅助',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'待补充',sucai_C:['-'],sucai_C_num:[],sucai_B:'フェステβ',sucai_B_num:'',otherWords:'2000BP兑换'}},

    {pid:'5058',name:'*貝殻ゴブリン<br>*贝壳哥布林',element:'火',lev:'15',atk:'6',def:'6',j:'12',n:'13',q:'12',z:'12',s:'12',end:'生命奔流G1<br>トランスG1<br>刚力G1',endexp:'HP+100<br>筋力+3 知力+3<br>筋力+5',cd:'90',skill:'挥舞火把进行火属性攻击，并赋予敌人眩晕状态',kind:'攻击',isJust:'1',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['-'],sucai_C_num:[2,2],sucai_B:'*貝殻ゴブリン',sucai_B_num:'1',otherWords:'フィエル嶺水池（图二左）'}},

    {pid:'5059',name:'*貝を集めし邪教徒<br>*收集贝壳的邪徒',element:'火',lev:'40',atk:'15',def:'12',j:'26',n:'26',q:'26',z:'26',s:'26',end:'勇猛G2<br>气功G2<br>忍耐力G2',endexp:'攻击力+25<br>耐久+7 器用+7<br>耐久+13',cd:'60',skill:'向周围发射火球造成火属性伤害',kind:'攻击',isJust:'1',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['-'],sucai_C_num:[2,2],sucai_B:'*貝を集めし邪教徒',sucai_B_num:'2',otherWords:''}},

    {pid:'5060',name:'遺留のオートマトン<br>徘徊的自律机关',element:'无',lev:'40',atk:'18',def:'10',j:'38',n:'8',q:'23',z:'36',s:'26',end:'强击：全攻击・G1<br>气功G2<br>刚力G2',endexp:'全攻击伤害+4%<br>耐久+7 器用+7<br>筋力+13',cd:'65',skill:'向前全速突进攻击敌人，并为其赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'293000',sucai_C:['動的エングラム結晶片','割れた貝殻','謎の金属'],sucai_C_num:[24,10,3],sucai_B:'遺留のオートマトン',sucai_B_num:'2',otherWords:''}},

    {pid:'5061',name:'朱に染まりし機神<br>朱红机神',element:'雷',lev:'45',atk:'21',def:'11',j:'46',n:'6',q:'26',z:'46',s:'26',end:'溢れる力G1<br>インスピレーションG3<br>刚力G3',endexp:'HP满时增加会心力+6<br>筋力+13 精神+13<br>筋力+25',cd:'60',skill:'从手部向五个方向发射子弹，造成雷属性攻击',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['環状石','動的エングラムの欠片','ゴーレムの核'],sucai_C_num:[15,74,8],sucai_B:'朱に染まりし機神',sucai_B_num:'2',otherWords:''}},

    {pid:'5062',name:'摂理の破戒者<br>违神的破戒者',element:'光',lev:'45',atk:'14',def:'16',j:'6',n:'35',q:'29',z:'35',s:'45',end:'生命奔流G3<br>ストラテジストG3<br>集中G3',endexp:'HP+700<br>耐久+13 知力+13<br>精神+25',cd:'65',skill:'旋舞大剑，造成光属性伤害并为敌人赋予恐惧状态',kind:'攻击',isJust:'0',madeIt:{tuzhi:'初始',sucai_Q:'ルーノ',sucai_Q_num:'371300',sucai_C:['動的エングラム結晶片','トコヨ草','硬化プレート'],sucai_C_num:[25,30,12],sucai_B:'摂理の破戒者',sucai_B_num:'2',otherWords:''}},

]