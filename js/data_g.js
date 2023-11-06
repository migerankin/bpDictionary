////////////////////////////////////////
//   最近实装单位：newThings 新职业1 新武器2 新幻想e3 新幻想b4 新敌人5
//   情报：willThings   标题(words)     图     url链接(urlOut)    文字（justword）
//   当前活动：nowActivity 卡池1 活动主题图2
var G_value = [
    { kind:'newThings', kindSecond:'2', picId:'210001', isShow:'1', urlOut:'', words:'', EBWname:'グレイシャーブレード', justWord:''},
    { kind:'newThings', kindSecond:'2', picId:'210002', isShow:'1', urlOut:'', words:'', EBWname:'クリスタルスラブ', justWord:''},
    { kind:'newThings', kindSecond:'2', picId:'210003', isShow:'1', urlOut:'', words:'', EBWname:'ルミナスレイヤー', justWord:''},
    { kind:'newThings', kindSecond:'2', picId:'210004', isShow:'1', urlOut:'', words:'', EBWname:'ロックドスタッフ', justWord:''},
    { kind:'newThings', kindSecond:'2', picId:'210005', isShow:'1', urlOut:'', words:'', EBWname:'ダイアモンドシェル', justWord:''},
    { kind:'newThings', kindSecond:'2', picId:'210006', isShow:'1', urlOut:'', words:'', EBWname:'アイシクルコート', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220001', isShow:'1', urlOut:'', words:'', EBWname:'潜む糸鋏', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220002', isShow:'1', urlOut:'', words:'', EBWname:'プライリーアニマ', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220003', isShow:'1', urlOut:'', words:'', EBWname:'夢現の宿主', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220004', isShow:'1', urlOut:'', words:'', EBWname:'精鋭騎士団員', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220005', isShow:'1', urlOut:'', words:'', EBWname:'幻妖乱破', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220006', isShow:'1', urlOut:'', words:'', EBWname:'ヘヴンスカイ', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220007', isShow:'1', urlOut:'', words:'', EBWname:'移ろいし蛇帝', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220008', isShow:'1', urlOut:'', words:'', EBWname:'キングムーク', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220009', isShow:'1', urlOut:'', words:'', EBWname:'ティリスα', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220010', isShow:'1', urlOut:'', words:'', EBWname:'ティリスβ', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220011', isShow:'1', urlOut:'', words:'', EBWname:'エレクトラα', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220012', isShow:'1', urlOut:'', words:'', EBWname:'エレクトラβ', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220013', isShow:'1', urlOut:'', words:'', EBWname:'ヴェノミーン', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220014', isShow:'1', urlOut:'', words:'', EBWname:'ドラウグ・エッジ', justWord:''},
    { kind:'newThings', kindSecond:'4', picId:'220015', isShow:'1', urlOut:'', words:'', EBWname:'リトルゴート', justWord:''},

    { kind:'newThings', kindSecond:'3', picId:'240001', isShow:'1', urlOut:'', words:'', EBWname:'バシュラールの遠大なる計画', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240002', isShow:'1', urlOut:'', words:'', EBWname:'フレルベの制圧', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240003', isShow:'1', urlOut:'', words:'', EBWname:'バーンハルト城旧地下水路の汚濁', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240004', isShow:'1', urlOut:'', words:'', EBWname:'虫砦に潜む脅威移ろいし蛇帝', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240005', isShow:'1', urlOut:'', words:'', EBWname:'沈着な兵士Mムーク', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240006', isShow:'1', urlOut:'', words:'', EBWname:'凛として立つヴェロニカ', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240007', isShow:'1', urlOut:'', words:'', EBWname:'自分にできることを', justWord:''},
    { kind:'newThings', kindSecond:'3', picId:'240008', isShow:'1', urlOut:'', words:'', EBWname:'ダンケルクの退魔の剛撃', justWord:''},

    { kind:'nowActivity', kindSecond:'1', picId:'250001', isShow:'1', urlOut:'', words:'', EBWname:'', justWord:''},
    { kind:'nowActivity', kindSecond:'1', picId:'250002', isShow:'1', urlOut:'', words:'', EBWname:'', justWord:''},
    { kind:'nowActivity', kindSecond:'2', picId:'250003', isShow:'1', urlOut:'', words:'マンスリーイベント「コレクト・コレクター」を開催中！', EBWname:'', justWord:''},

    { kind:'willThings', kindSecond:'1', picId:'230001', isShow:'1', urlOut:'https://www.bilibili.com/video/BV1rh4y1z74Z', words:'台服官方蔚蓝色法则-职业演示介绍', EBWname:'', justWord:''},
    { kind:'willThings', kindSecond:'1', picId:'230002', isShow:'1', urlOut:'https://www.bilibili.com/video/BV1cN4y1k7e6', words:'港澳台服封测预约开启，先到先得！11月下旬开测！', EBWname:'', justWord:''},
    { kind:'willThings', kindSecond:'1', picId:'230003', isShow:'1', urlOut:'https://www.bilibili.com/video/BV19M411D7vp', words:'欧美服封闭测试开启+官方职业视频', EBWname:'', justWord:''},
    { kind:'willThings', kindSecond:'1', picId:'230004', isShow:'1', urlOut:'https://www.bilibili.com/video/BV1G8411i7vn', words:'通信十二 / 熟肉总结 / 蓝色协议中文站', EBWname:'', justWord:''},
]