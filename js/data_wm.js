var WMwhere_value  =[
    {level: 'G1', kind: '1', toGet: 'レイクリッド坑道/巨竜の爪痕/神懸の御柱/機跡の谷・追加調査<br>ラッシュバトル初/二段'},
    {level: 'G2', kind: '1', toGet: '音無き都/暁の虫砦/ボルオム遺跡・追加調査<br>ラッシュバトル二/三/四段'},
    {level: 'G3', kind: '1', toGet: 'ボルオム遺跡・追加調査<br>~<br>ドラーヴァ王立研究所・追加調査<br>ラッシュバトル四/五段<br>任意上級調査/EX'},
    {level: 'G1', kind: '2', toGet: '任意調査<br>ラッシュバトル三段<br>任意上級調査'},
    {level: 'G2', kind: '2', toGet: '枷神の産屋・追加調査<br>~<br>ドラーヴァ王立研究所・追加調査<br>ラッシュバトル四/五段<br>任意上級調査/EX'},
]
var WM_value = [
    {name: '生命の奔流', level: 'G1', xg: 'HP提升50~150', kind: '1', zy: '0', imgNum: ''},
    {name: '生命の奔流', level: 'G2', xg: 'HP提升300~500', kind: '1', zy: '0', imgNum: ''},
    {name: '生命の奔流', level: 'G3', xg: 'HP提升500~900', kind: '1', zy: '0', imgNum: ''},
    
    {name: '气合の奔流', level: 'G1', xg: 'ST提升3~7', kind: '1', zy: '0', imgNum: ''},
    {name: '气合の奔流', level: 'G2', xg: 'ST提升8~12', kind: '1', zy: '0', imgNum: ''},
    {name: '气合の奔流', level: 'G3', xg: 'ST提升13~17', kind: '1', zy: '0', imgNum: ''},

    {name: '勇猛', level: 'G1', xg: '攻击力提升5~15', kind: '1', zy: '0', imgNum: ''},
    {name: '勇猛', level: 'G2', xg: '攻击力提升15~35', kind: '1', zy: '0', imgNum: ''},
    {name: '勇猛', level: 'G3', xg: '攻击力提升35~60', kind: '1', zy: '0', imgNum: ''},
    
    {name: '不屈', level: 'G1', xg: '防御力提升11~19', kind: '1', zy: '0', imgNum: ''},
    {name: '不屈', level: 'G2', xg: '防御力提升30~50', kind: '1', zy: '0', imgNum: ''},
    {name: '不屈', level: 'G3', xg: '防御力提升50~90', kind: '1', zy: '0', imgNum: ''},
    
    {name: '钢の肉体', level: 'G1', xg: 'HP提升25~75<br>防御力提升6~10', kind: '1', zy: '0', imgNum: ''},
    {name: '钢の肉体', level: 'G2', xg: 'HP提升150~250<br>防御力提升15~25', kind: '1', zy: '0', imgNum: ''},
    {name: '钢の肉体', level: 'G3', xg: 'HP提升250~450<br>防御力提升25~45', kind: '1', zy: '0', imgNum: ''},

    {name: '生存术', level: 'G1', xg: 'HP提升25~75<br>回复力提升10~20', kind: '1', zy: '0', imgNum: ''},
    {name: '生存术', level: 'G2', xg: 'HP提升150~250<br>回复力提升30~50', kind: '1', zy: '0', imgNum: ''},
    {name: '生存术', level: 'G3', xg: 'HP提升250~450<br>回复力提升65~85', kind: '1', zy: '0', imgNum: ''},
    
    {name: '狮子奋迅', level: 'G1', xg: 'HP提升25~75<br>攻击力提升3~8', kind: '1', zy: '0', imgNum: ''},
    {name: '狮子奋迅', level: 'G2', xg: 'HP提升150~250<br>攻击力提升8~18', kind: '1', zy: '0', imgNum: ''},
    {name: '狮子奋迅', level: 'G3', xg: 'HP提升250~450<br>攻击力提升18~30', kind: '1', zy: '0', imgNum: ''},
    
    {name: '战士の心得', level: 'G1', xg: '防御力提升6~10<br>攻击力提升3~8', kind: '1', zy: '0', imgNum: ''},
    {name: '战士の心得', level: 'G2', xg: '防御力提升15~25<br>攻击力提升8~18', kind: '1', zy: '0', imgNum: ''},
    {name: '战士の心得', level: 'G3', xg: '防御力提升25~45<br>攻击力提升18~30', kind: '1', zy: '0', imgNum: ''},
    
    {name: '守护者', level: 'G1', xg: '防御力提升6~10<br>回复力提升10~20', kind: '1', zy: '0', imgNum: ''},
    {name: '守护者', level: 'G2', xg: '防御力提升15~25<br>回复力提升30~50', kind: '1', zy: '0', imgNum: ''},
    {name: '守护者', level: 'G3', xg: '防御力提升25~45<br>回复力提升65~85', kind: '1', zy: '0', imgNum: ''},

    {name: 'エンハンスサークル短縮', level: 'G1', xg: 'エンハンスサークル・冷却时间缩短+6%～10%', kind: '2', zy: '1', imgNum: '104'},
    {name: 'エンハンスサークル短縮', level: 'G2', xg: 'エンハンスサークル・冷却时间缩短+11%～15%', kind: '2', zy: '1', imgNum: '104'},
    {name: 'ランパート短縮', level: 'G1', xg: 'ランパート・冷却时间缩短+6%～10%', kind: '2', zy: '1', imgNum: '109'},
    {name: 'ランパート短縮', level: 'G2', xg: 'ランパート・冷却时间缩短+11%～15%', kind: '2', zy: '1', imgNum: '109'},
    {name: 'シールドダッシュ強撃', level: 'G1', xg: 'シールドダッシュ・造成伤害增加+11%～15%', kind: '2', zy: '1', imgNum: '105'},
    {name: 'シールドダッシュ強撃', level: 'G2', xg: 'シールドダッシュ・造成伤害增加+16%～20%', kind: '2', zy: '1', imgNum: '105'},
    {name: 'ブロウビート強撃', level: 'G1', xg: 'ブロウビート・造成伤害增加+11%～15%', kind: '2', zy: '1', imgNum: '108'},
    {name: 'ブロウビート強撃', level: 'G2', xg: 'ブロウビート・造成伤害增加+16%～20%', kind: '2', zy: '1', imgNum: '108'},
    {name: 'タウント短縮', level: 'G1', xg: 'タウント・冷却时间缩短+6%～10%', kind: '2', zy: '1', imgNum: '110'},
    {name: 'タウント短縮', level: 'G2', xg: 'タウント・冷却时间缩短+11%～15%', kind: '2', zy: '1', imgNum: '110'},
    {name: 'シールドチャージ強撃', level: 'G1', xg: 'シールドチャージ・造成伤害增加+11%～15%', kind: '2', zy: '1', imgNum: '101'},
    {name: 'シールドチャージ強撃', level: 'G2', xg: 'シールドチャージ・造成伤害增加+16%～20%', kind: '2', zy: '1', imgNum: '101'},
    {name: 'バインドスラッシュ強撃', level: 'G1', xg: 'バインドスラッシュ・造成伤害增加+11%～15%', kind: '2', zy: '1', imgNum: '111'},
    {name: 'バインドスラッシュ強撃', level: 'G2', xg: 'バインドスラッシュ・造成伤害增加+16%～20%', kind: '2', zy: '1', imgNum: '111'},
    {name: 'フォートレス短縮', level: 'G1', xg: 'フォートレス・冷却时间缩短+6%～10%', kind: '2', zy: '1', imgNum: '112'},
    {name: 'フォートレス短縮', level: 'G2', xg: 'フォートレス・冷却时间缩短+11%～15%', kind: '2', zy: '1', imgNum: '112'},
    {name: 'サンライズチャージ魔加', level: 'G1', xg: 'サンライズチャージ・属性积蓄值增加+6%～10%', kind: '2', zy: '1', imgNum: '106'},
    {name: 'サンライズチャージ魔加', level: 'G2', xg: 'サンライズチャージ・属性积蓄值增加+11%～15%', kind: '2', zy: '1', imgNum: '106'},
    {name: 'セレストピラー魔加', level: 'G1', xg: 'セレストピラー・属性积蓄值增加+6%～10%', kind: '2', zy: '1', imgNum: '103'},
    {name: 'セレストピラー魔加', level: 'G2', xg: 'セレストピラー・属性积蓄值增加+11%～15%', kind: '2', zy: '1', imgNum: '103'},
    {name: 'クレセントライト強撃', level: 'G1', xg: 'クレセントライト・造成伤害增加+11%～15%', kind: '2', zy: '1', imgNum: '102'},
    {name: 'クレセントライト強撃', level: 'G2', xg: 'クレセントライト・造成伤害增加+16%～20%', kind: '2', zy: '1', imgNum: '102'},
    {name: 'リジェネレーション短縮', level: 'G1', xg: 'リジェネレーション・冷却时间缩短+6%～10%', kind: '2', zy: '1', imgNum: '107'},
    {name: 'リジェネレーション短縮', level: 'G2', xg: 'リジェネレーション・冷却时间缩短+11%～15%', kind: '2', zy: '1', imgNum: '107'},



    {name: "ドレインスパイラル強撃", level: "G1", xg: "ドレインスパイラル・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '203'},
    {name: "ドレインスパイラル強撃", level: "G2", xg: "ドレインスパイラル・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '203'},
    {name: "ストームラッシュ強撃", level: "G1", xg: "ストームラッシュ・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '201'},
    {name: "ストームラッシュ強撃", level: "G2", xg: "ストームラッシュ・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '201'},
    {name: "ウォークライ短縮", level: "G1", xg: "ウォークライ・冷却时间缩短+6%～10%", kind: "2", zy: '2', imgNum: '204'},
    {name: "ウォークライ短縮", level: "G2", xg: "ウォークライ・冷却时间缩短+11%～15%", kind: "2", zy: '2', imgNum: '204'},
    {name: "クロスブラッド強撃", level: "G1", xg: "クロスブラッド・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '205'},
    {name: "クロスブラッド強撃", level: "G2", xg: "クロスブラッド・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '205'},
    {name: "ソウルリッパー強撃", level: "G1", xg: "ソウルリッパー・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '208'},
    {name: "ソウルリッパー強撃", level: "G2", xg: "ソウルリッパー・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '208'},
    {name: "イグニッション短縮", level: "G1", xg: "イグニッション・冷却时间缩短+6%～10%", kind: "2", zy: '2', imgNum: '212'},
    {name: "イグニッション短縮", level: "G2", xg: "イグニッション・冷却时间缩短+11%～15%", kind: "2", zy: '2', imgNum: '212'},
    {name: "フォールインパクト強撃", level: "G1", xg: "フォールインパクト・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '202'},
    {name: "フォールインパクト強撃", level: "G2", xg: "フォールインパクト・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '202'},
    {name: "クリムゾンブロウ魔加", level: "G1", xg: "クリムゾンブロウ・属性积蓄值增加+6%～10%", kind: "2", zy: '2', imgNum: '209'},
    {name: "クリムゾンブロウ魔加", level: "G2", xg: "クリムゾンブロウ・属性积蓄值增加+11%～15%", kind: "2", zy: '2', imgNum: '209'},
    {name: "ラーヴァインパクト魔加", level: "G1", xg: "ラーヴァインパクト・属性积蓄值增加+6%～10%", kind: "2", zy: '2', imgNum: '211'},
    {name: "ラーヴァインパクト魔加", level: "G2", xg: "ラーヴァインパクト・属性积蓄值增加+11%～15%", kind: "2", zy: '2', imgNum: '211'},
    {name: "バーニングラッシュ魔加", level: "G1", xg: "バーニングラッシュ・属性积蓄值增加+6%～10%", kind: "2", zy: '2', imgNum: '207'},
    {name: "バーニングラッシュ魔加", level: "G2", xg: "バーニングラッシュ・属性积蓄值增加+11%～15%", kind: "2", zy: '2', imgNum: '207'},
    {name: "ブルータルブロウ強撃", level: "G1", xg: "ブルータルブロウ・造成伤害增加+11%～15%", kind: "2", zy: '2', imgNum: '206'},
    {name: "ブルータルブロウ強撃", level: "G2", xg: "ブルータルブロウ・造成伤害增加+16%～20%", kind: "2", zy: '2', imgNum: '206'},
    {name: "ブラッドアックス短縮", level: "G1", xg: "ブラッドアックス・冷却时间缩短+6%～10%", kind: "2", zy: '2', imgNum: '210'},
    {name: "ブラッドアックス短縮", level: "G2", xg: "ブラッドアックス・冷却时间缩短+11%～15%", kind: "2", zy: '2', imgNum: '210'},



    {name: "ストライクアロー強撃", level: "G1", xg: "ストライクアロー・造成伤害增加+11%～15%", kind: "2", zy: "3", imgNum: '301'},
    {name: "ストライクアロー強撃", level: "G2", xg: "ストライクアロー・造成伤害增加+16%～20%", kind: "2", zy: "3", imgNum: '301'},
    {name: "リーサルシャワー強撃", level: "G1", xg: "リーサルシャワー・造成伤害增加+11%～15%", kind: "2", zy: "3", imgNum: '303'},
    {name: "リーサルシャワー強撃", level: "G2", xg: "リーサルシャワー・造成伤害增加+16%～20%", kind: "2", zy: "3", imgNum: '303'},
    {name: "ハンタースピリット短縮", level: "G1", xg: "ハンタースピリット・冷却时间缩短+6%～10%", kind: "2", zy: "3", imgNum: '304'},
    {name: "ハンタースピリット短縮", level: "G2", xg: "ハンタースピリット・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '304'},
    {name: "ヒーリングアロー昇癒", level: "G1", xg: "ヒーリングアロー・回復量アップ+11%～15%", kind: "2", zy: "3", imgNum: '309'},
    {name: "ヒーリングアロー昇癒", level: "G2", xg: "ヒーリングアロー・回復量アップ+16%～20%", kind: "2", zy: "3", imgNum: '309'},
    {name: "ヒプノブラスト短縮", level: "G1", xg: "ヒプノブラスト・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '307'},
    {name: "ヒプノブラスト短縮", level: "G2", xg: "ヒプノブラスト・冷却时间缩短%", kind: "2", zy: "3", imgNum: '307'},
    {name: "スタンピードアロー短縮", level: "G1", xg: "スタンピートアロー・冷却时间缩短+6%～10%", kind: "2", zy: "3", imgNum: '302'},
    {name: "スタンピードアロー短縮", level: "G2", xg: "スタンピートアロー・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '302'},
    {name: "レゾナンスショット短縮", level: "G1", xg: "レゾナンスショット・冷却时间缩短+6%～10%", kind: "2", zy: "3", imgNum: '311'},
    {name: "レゾナンスショット短縮", level: "G2", xg: "レゾナンスショット・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '311'},
    {name: "ダストフォース短縮", level: "G1", xg: "ダストフォース・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '306'},
    {name: "ダストフォース短縮", level: "G2", xg: "ダストフォース・冷却时间缩短+16%～20%", kind: "2", zy: "3", imgNum: '306'},
    {name: "ショックウェーブ強撃", level: "G1", xg: "ショックウェーブ・造成伤害增加+11%～15%", kind: "2", zy: "3", imgNum: '308'},
    {name: "ショックウェーブ強撃", level: "G2", xg: "ショックウェーブ・造成伤害增加+16%～20%", kind: "2", zy: "3", imgNum: '308'},
    {name: "ツインフラッシュ短縮", level: "G1", xg: "ツインフラッシュ・冷却时间缩短+6%～10%", kind: "2", zy: "3", imgNum: '310'},
    {name: "ツインフラッシュ短縮", level: "G2", xg: "ツインフラッシュ・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '310'},
    {name: "リフレッシュエリア短縮", level: "G1", xg: "リフレッシュエリア・冷却时间缩短+6%～10%", kind: "2", zy: "3", imgNum: '312'},
    {name: "リフレッシュエリア短縮", level: "G2", xg: "リフレッシュエリア・冷却时间缩短+11%～15%", kind: "2", zy: "3", imgNum: '312'},
    {name: "グラウンドブレイク魔加", level: "G1", xg: "グラウンドブレイク・属性积蓄值增加6%～10%", kind: "2", zy: "3", imgNum: '305'},
    {name: "グラウンドブレイク魔加", level: "G2", xg: "グラウンドブレイク・属性积蓄值增加+11%～15%", kind: "2", zy: "3", imgNum: '305'},



    {name: "ファイアブラスト強撃", level: "G1", xg: "ファイアブラスト・造成伤害增加+11%～15%", kind: "2", zy: "4", imgNum: '401'},
    {name: "ファイアブラスト強撃", level: "G2", xg: "ファイアブラスト・造成伤害增加+16%～20%", kind: "2", zy: "4", imgNum: '401'},
    {name: "ブリザード魔加", level: "G1", xg: "ブリザード・属性积蓄值增加+6%～10%", kind: "2", zy: "4", imgNum: '407'},
    {name: "ブリザード魔加", level: "G2", xg: "ブリザード・属性积蓄值增加+11%～15%", kind: "2", zy: "4", imgNum: '407'},
    {name: "ライトニング強撃", level: "G1", xg: "ライトニング・造成伤害增加+11%～15%", kind: "2", zy: "4", imgNum: '402'},
    {name: "ライトニング強撃", level: "G2", xg: "ライトニング・造成伤害增加+16%～20%", kind: "2", zy: "4", imgNum: '402'},
    {name: "コンセントレイト短縮", level: "G1", xg: "コンセントレイト・冷却时间缩短+6%～10%", kind: "2", zy: "4", imgNum: '404'},
    {name: "コンセントレイト短縮", level: "G2", xg: "コンセントレイト・冷却时间缩短+11%～15%", kind: "2", zy: "4", imgNum: '404'},
    {name: "フレイムグレネード魔加", level: "G1", xg: "フレイムグレネード・属性积蓄值增加6%～10%", kind: "2", zy: "4", imgNum: '405'},
    {name: "フレイムグレネード魔加", level: "G2", xg: "フレイムグレネード・属性积蓄值增加+11%～15%", kind: "2", zy: "4", imgNum: '405'},
    {name: "アイシクル強撃", level: "G1", xg: "アイシクル・造成伤害增加+11%～15%", kind: "2", zy: "4", imgNum: '410'},
    {name: "アイシクル強撃", level: "G2", xg: "アイシクル・造成伤害增加+16%～20%", kind: "2", zy: "4", imgNum: '410'},
    {name: "サンダーマイン魔加", level: "G1", xg: "サンダーマイン・属性积蓄值增加6%～10%", kind: "2", zy: "4", imgNum: '406'},
    {name: "サンダーマイン魔加", level: "G2", xg: "サンダーマイン・属性积蓄值增加+11%～15%", kind: "2", zy: "4", imgNum: '406'},
    {name: "フォローバレット短縮", level: "G1", xg: "フォローバレット・冷却时间缩短+6%～10%", kind: "2", zy: "4", imgNum: '411'},
    {name: "フォローバレット短縮", level: "G2", xg: "フォローバレット・冷却时间缩短+11%～15%", kind: "2", zy: "4", imgNum: '411'},
    {name: "アイスシャード魔加", level: "G1", xg: "アイスシャード・属性积蓄值增加+6%～10%", kind: "2", zy: "4", imgNum: '403'},
    {name: "アイスシャード魔加", level: "G2", xg: "アイスシャード・属性积蓄值增加+11%～15%", kind: "2", zy: "4", imgNum: '403'},
    {name: "サンダースフィア短縮", level: "G1", xg: "サンダースフィア・冷却时间缩短+6%～10%", kind: "2", zy: "4", imgNum: '409'},
    {name: "サンダースフィア短縮", level: "G2", xg: "サンダースフィア・冷却时间缩短+11%～15%", kind: "2", zy: "4", imgNum: '409'},
    {name: "ブレイズブラスト魔加", level: "G1", xg: "ブレイズブラスト・属性积蓄值增加6%～10%", kind: "2", zy: "4", imgNum: '408'},
    {name: "ブレイズブラスト魔加", level: "G2", xg: "ブレイズブラスト・属性积蓄值增加+11%～15%", kind: "2", zy: "4", imgNum: '408'},
    {name: "アークバレット強撃", level: "G1", xg: "アークバレット・造成伤害增加+11%～15%", kind: "2", zy: "4", imgNum: '412'},
    {name: "アークバレット強撃", level: "G2", xg: "アークバレット・造成伤害增加+16%～20%", kind: "2", zy: "4", imgNum: '412'},


    {name: "ストライクフォール強撃", level: "G1", xg: "ストライクフォール・造成伤害增加+11%～15%", kind: "2", zy: "5", imgNum: '501'},
    {name: "ストライクフォール強撃", level: "G2", xg: "ストライクフォール・造成伤害增加+16%～20%", kind: "2", zy: "5", imgNum: '501'},
    {name: "ヘビィスナイプ強撃", level: "G1", xg: "ヘビィスナイプ・造成伤害增加+11%～15%", kind: "2", zy: "5", imgNum: '509'},
    {name: "ヘビィスナイプ強撃", level: "G2", xg: "ヘビィスナイプ・造成伤害增加+16%～20%", kind: "2", zy: "5", imgNum: '509'},
    {name: "ブーストスマッシュ強撃", level: "G1", xg: "ブーストスマシュ・造成伤害增加+11%～15%", kind: "2", zy: "5", imgNum: '503'},
    {name: "ブーストスマッシュ強撃", level: "G2", xg: "ブーストスマシュ・造成伤害增加+16%～20%", kind: "2", zy: "5", imgNum: '503'},
    {name: "オーバーリロード短縮", level: "G1", xg: "オーバーリロード・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '512'},
    {name: "オーバーリロード短縮", level: "G2", xg: "オーバーリロード・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '512'},
    {name: "ストームウォール短縮", level: "G1", xg: "ストームウォール・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '506'},
    {name: "ストームウォール短縮", level: "G2", xg: "ストームウォール・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '506'},
    {name: "アンカーダイブ短縮", level: "G1", xg: "アンカーダイブ・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '505'},
    {name: "アンカーダイブ短縮", level: "G2", xg: "アンカーダイブ・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '505'},
    {name: "ハンマースロー強撃", level: "G1", xg: "ハンマースロー・造成伤害增加+11%～15%", kind: "2", zy: "5", imgNum: '502'},
    {name: "ハンマースロー強撃", level: "G2", xg: "ハンマースロー・造成伤害增加+16%～20%", kind: "2", zy: "5", imgNum: '502'},
    {name: "ロックボディ短縮", level: "G1", xg: "ロックボディ・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '504'},
    {name: "ロックボディ短縮", level: "G2", xg: "ロックボディ・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '504'},
    {name: "グランドストライク魔加", level: "G1", xg: "グランドストライク・属性积蓄值增加+6%～10%", kind: "2", zy: "5", imgNum: '507'},
    {name: "グランドストライク魔加", level: "G2", xg: "グランドストライク・属性积蓄值增加+11%～15%", kind: "2", zy: "5", imgNum: '507'},
    {name: "グラビティドライブ短縮", level: "G1", xg: "グラビティドライブ・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '511'},
    {name: "グラビティドライブ短縮", level: "G2", xg: "グラビティドライブ・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '511'},
    {name: "ダストボルテックス魔加", level: "G1", xg: "ダストボルテックス・属性积蓄值增加+6%～10%", kind: "2", zy: "5", imgNum: '510'},
    {name: "ダストボルテックス魔加", level: "G2", xg: "ダストボルテックス・属性积蓄值增加+11%～15%", kind: "2", zy: "5", imgNum: '510'},
    {name: "キュアカートリッジ短縮", level: "G1", xg: "キュアカートリッジ・冷却时间缩短+6%～10%", kind: "2", zy: "5", imgNum: '508'},
    {name: "キュアカートリッジ短縮", level: "G2", xg: "キュアカートリッジ・冷却时间缩短+11%～15%", kind: "2", zy: "5", imgNum: '508'},

    {name: "ラピッドスピア強撃", level: "G1", xg: "ラピッドスピア・造成伤害增加+11%～15%", kind: "2", zy: "6", imgNum: '601'},
    {name: "ラピッドスピア強撃", level: "G2", xg: "ラピッドスピア・造成伤害增加+16%～20%", kind: "2", zy: "6", imgNum: '601'},
    {name: "クルーエルスラスト強撃", level: "G1", xg: "クルーエルスラスト・造成伤害增加+11%～15%", kind: "2", zy: "6", imgNum: '609'},
    {name: "クルーエルスラスト強撃", level: "G2", xg: "クルーエルスラスト・造成伤害增加+16%～20%", kind: "2", zy: "6", imgNum: '609'},
    {name: "アッパーダンス強撃", level: "G1", xg: "アッパーダンス強撃・造成伤害增加+11%～15%", kind: "2", zy: "6", imgNum: '602'},
    {name: "アッパーダンス強撃", level: "G2", xg: "アッパーダンス強撃・造成伤害增加+16%～20%", kind: "2", zy: "6", imgNum: '602'},
    {name: "プリペアモード短縮", level: "G1", xg: "プリペアモード・冷却时间缩短+6%～10%", kind: "2", zy: "6", imgNum: '607'},
    {name: "プリペアモード短縮", level: "G2", xg: "プリペアモード・冷却时间缩短+11%～15%", kind: "2", zy: "6", imgNum: '607'},
    {name: "グランドパイル強撃", level: "G1", xg: "グランドパイル・造成伤害增加+11%～15%", kind: "2", zy: "6", imgNum: '603'},
    {name: "グランドパイル強撃", level: "G2", xg: "グランドパイル・造成伤害增加+16%～20%", kind: "2", zy: "6", imgNum: '603'},
    {name: "スタブインパクト短縮", level: "G1", xg: "スタブインパクト・冷却时间缩短+6%～10%", kind: "2", zy: "6", imgNum: '604'},
    {name: "スタブインパクト短縮", level: "G2", xg: "スタブインパクト・冷却时间缩短+11%～15%", kind: "2", zy: "6", imgNum: '604'},
    {name: "トルネードスピン強撃", level: "G1", xg: "トルネードスピン・造成伤害增加+11%～15%", kind: "2", zy: "6", imgNum: '612'},
    {name: "トルネードスピン強撃", level: "G2", xg: "トルネードスピン・造成伤害增加+16%～20%", kind: "2", zy: "6", imgNum: '612'},
    {name: "ハンティングゾーン短縮", level: "G1", xg: "ハンティングゾーン・冷却时间缩短+6%～10%", kind: "2", zy: "6", imgNum: '605'},
    {name: "ハンティングゾーン短縮", level: "G2", xg: "ハンティングゾーン・冷却时间缩短+11%～15%", kind: "2", zy: "6", imgNum: '605'},
    {name: "グランドスパーク魔加", level: "G1", xg: "グランドスパーク・属性积蓄值增加+6%～10%", kind: "2", zy: "6", imgNum: '610'},
    {name: "グランドスパーク魔加", level: "G2", xg: "グランドスパーク・属性积蓄值增加+11%～15%", kind: "2", zy: "6", imgNum: '610'},
    {name: "スラストボルト魔加", level: "G1", xg: "スラストボルト・属性积蓄值增加+6%～10%", kind: "2", zy: "6", imgNum: '608'},
    {name: "スラストボルト魔加", level: "G2", xg: "スラストボルト・属性积蓄值增加+11%～15%", kind: "2", zy: "6", imgNum: '608'},
    {name: "ラピッドスパーク魔加", level: "G1", xg: "ラピッドスパーク・属性积蓄值增加+6%～10%", kind: "2", zy: "6", imgNum: '611'},
    {name: "ラピッドスパーク魔加", level: "G2", xg: "ラピッドスパーク・属性积蓄值增加+11%～15%", kind: "2", zy: "6", imgNum: '611'},
    {name: "マークトリガー短縮", level: "G1", xg: "マークトリガー・冷却时间缩短+6%～10%", kind: "2", zy: "6", imgNum: '606'},
    {name: "マークトリガー短縮", level: "G2", xg: "マークトリガー・冷却时间缩短+11%～15%", kind: "2", zy: "6", imgNum: '606'},
]