// ◆ WSC_value
// ┗ 材料名字 产出副本
var WSC_value = {
    '高性能集積コア':'「亢進！神懸の御柱」',
    '堅固な太牙の化石':'「激闘！巨竜の爪痕」',
    '砦オオアリ':'「甲撃！暁の虫砦」',
    'ボルオム砂':'「ボルオム遺跡·追加調査」',
    '産屋ガジェット':'「枷神の産屋·追加調査」',
    '聖なるスクラップ':'「天恵の聖堂·追加調査」',
    'タワーギア':'「巨塔の遺跡·追加調査」',
    '滝裏の秘石':'「滝裏の盗掘痕跡·追加調査」',
    'サイレンスシング':'「音無き都·追加調査」',
    '砦アリ':'「暁の虫砦·追加調査」',
    '集積コア':'「神懸の御柱·追加調査」',
    'バハマールイエロー':'「機跡の谷·追加調査」',
    '巨牙の化石':'「巨竜の爪痕·追加調査」',
    'レイクリッド結晶':'「レイクリッド坑道·追加調査」',
}
// ◆ W_value
// ┣ pid 序号
// ┣ name 名字
// ┣ elem 属性
// ┣ elemAtk 属性攻击力
// ┣ level 等级
// ┣ atk 攻击
// ┣ huix 会心
// ┣ j 筋力
// ┣ n 耐久
// ┣ q 器用
// ┣ z 知力
// ┣ s 精神
// ┣ kind 武器类型
// ┗ madeIt 制造
//      ┣ tuzhi 图纸获取
//      ┣ sucai_Q 货币类型
//      ┣ sucai_Q_num 货币数量
//      ┣ sucai_C 材料类型 数组
//      ┣ sucai_C_num 材料数目 数组 和上面对应
//      ┣ sucai_B  固定为 wepon
//      ┣ sucai_F  副本材料
//      ┣ sucai_F_num 副本材料需求数量
//      ┗ otherWords 备用属性
var W_value = [
    { pid: '0001', name: '極焔武具揃', atk: '173', huix: '+15%', j: '21', n: '25', q: '23', z: '21', s: '23' , elem: '火', elemAtk: '10', level:'50', kind:'剑盾', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['ゴブリンセージの杖','環状石'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['高性能集積コア','堅固な太牙の化石'],sucai_F_num:[8,8],otherWords:''}},
    { pid: '0002', name: '神宿りの焔斧', atk: '208', huix: '+15%', j: '28', n: '23', q: '25', z: '21', s: '23' , elem: '火', elemAtk: '10', level:'50', kind:'双斧', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['ゴブリンセージの杖','環状石'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['高性能集積コア','堅固な太牙の化石'],sucai_F_num:[8,8],otherWords:''}},
    { pid: '0003', name: '神秘の火箭', atk: '156', huix: '+12%', j: '18', n: '23', q: '28', z: '25', s: '28' , elem: '火', elemAtk: '10', level:'50', kind:'弓箭', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['ゴブリンセージの杖','環状石'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['高性能集積コア','堅固な太牙の化石'],sucai_F_num:[8,8],otherWords:''}},
    { pid: '0004', name: '火の粉散らす神杖', atk: '208', huix: '+15%', j: '21', n: '23', q: '21', z: '28', s: '25' , elem: '火', elemAtk: '10', level:'50', kind:'法杖', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['ゴブリンセージの杖','環状石'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['高性能集積コア','堅固な太牙の化石'],sucai_F_num:[8,8],otherWords:''}},
    { pid: '0005', name: '熾火の神代槌', atk: '190', huix: '+17%', j: '23', n: '28', q: '23', z: '18', s: '18' , elem: '火', elemAtk: '10', level:'50', kind:'锤子', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['ゴブリンセージの杖','環状石'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['高性能集積コア','堅固な太牙の化石'],sucai_F_num:[8,8],otherWords:''}},


    { pid: '0006', name: '夜払いの氷剣', atk: '169', huix: '+16%', j: '23', n: '32', q: '13', z: '25', s: '18' ,elem: '冰', elemAtk: '12', level:'50', kind:'剑盾', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['水晶の原石','ドラウグ·アルマの欠片'],sucai_C_num:[30,15],sucai_B:'wepen',sucai_F:['砦オオアリ'],sucai_F_num:[16],otherWords:''}},
    { pid: '0007', name: '朝日差す氷斧', atk: '203', huix: '+16%', j: '30', n: '29', q: '14', z: '25', s: '18' ,elem: '冰', elemAtk: '12', level:'50', kind:'双斧', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['水晶の原石','ドラウグ·アルマの欠片'],sucai_C_num:[30,15],sucai_B:'wepen',sucai_F:['砦オオアリ'],sucai_F_num:[16],otherWords:''}},
    { pid: '0008', name: '氷原弓', atk: '152', huix: '+13%', j: '20', n: '29', q: '16', z: '31', s: '22' ,elem: '冰', elemAtk: '12', level:'50', kind:'弓箭', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['水晶の原石','ドラウグ·アルマの欠片'],sucai_C_num:[30,15],sucai_B:'wepen',sucai_F:['砦オオアリ'],sucai_F_num:[16],otherWords:''}},
    { pid: '0009', name: '破砦垂氷', atk: '203', huix: '+16%', j: '25', n: '29', q: '16', z: '30', s: '14' ,elem: '冰', elemAtk: '12', level:'50', kind:'法杖', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['水晶の原石','ドラウグ·アルマの欠片'],sucai_C_num:[30,15],sucai_B:'wepen',sucai_F:['砦オオアリ'],sucai_F_num:[16],otherWords:''}},
    { pid: '0010', name: '砕氷の槌', atk: '186', huix: '+18%', j: '25', n: '35', q: '13', z: '22', s: '14' ,elem: '冰', elemAtk: '12', level:'50', kind:'锤子', madeIt:{tuzhi:'「亢進！神懸の御柱」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'1801900',sucai_C:['水晶の原石','ドラウグ·アルマの欠片'],sucai_C_num:[30,15],sucai_B:'wepen',sucai_F:['砦オオアリ'],sucai_F_num:[16],otherWords:''}},


    {pid:'0011', name:'ブレイブソード·光', atk:'142', huix:'+13%', j:'17', n:'15', q:'22', z:'17', s:'19',elem: '光', elemAtk: '9', level:'40', kind:'剑盾', madeIt:{tuzhi:'完成任务「謎の老人」',sucai_Q:'ルーノ',sucai_Q_num:'781900',sucai_C:['水晶の原石','エルダーゴブリンの杖'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['ボルオム砂'],sucai_F_num:[14],otherWords:''}},
    {pid:'0012', name:'ブレイブアックス·光', atk:'170', huix:'+13%', j:'23', n:'14', q:'24', z:'17', s:'19',elem: '光', elemAtk: '9', level:'40', kind:'双斧', madeIt:{tuzhi:'完成任务「謎の老人」',sucai_Q:'ルーノ',sucai_Q_num:'781900',sucai_C:['水晶の原石','エルダーゴブリンの杖'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['ボルオム砂'],sucai_F_num:[14],otherWords:''}},
    {pid:'0013', name:'ブレイブボウ·光', atk:'128', huix:'+10%', j:'15', n:'14', q:'26', z:'21', s:'23',elem: '光', elemAtk: '9', level:'40', kind:'弓箭', madeIt:{tuzhi:'完成任务「謎の老人」',sucai_Q:'ルーノ',sucai_Q_num:'781900',sucai_C:['水晶の原石','エルダーゴブリンの杖'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['ボルオム砂'],sucai_F_num:[14],otherWords:''}},
    {pid:'0014', name:'ブレイブスタッフ·光', atk:'170', huix:'+13%', j:'17', n:'14', q:'17', z:'23', s:'24',elem: '光', elemAtk: '9', level:'40', kind:'法杖', madeIt:{tuzhi:'完成任务「謎の老人」',sucai_Q:'ルーノ',sucai_Q_num:'781900',sucai_C:['水晶の原石','エルダーゴブリンの杖'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['ボルオム砂'],sucai_F_num:[14],otherWords:''}},
    {pid:'0015', name:'ブレイブハンマー·光', atk:'156', huix:'+14%', j:'19', n:'17', q:'22', z:'15', s:'15',elem: '光', elemAtk: '9', level:'40', kind:'锤子', madeIt:{tuzhi:'完成任务「謎の老人」',sucai_Q:'ルーノ',sucai_Q_num:'781900',sucai_C:['水晶の原石','エルダーゴブリンの杖'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['ボルオム砂'],sucai_F_num:[14],otherWords:''}},


    
    { pid: '0016', name: '胎動鋼·剣·火', atk: '145', huix: '+12%', j: '15', n: '21', q: '19', z: '19', s: '17', elem: '火', elemAtk: '8', level:'40', kind:'剑盾', madeIt:{tuzhi:'完成任务「エーリンゼ救出」',sucai_Q:'ルーノ',sucai_Q_num:'797800',sucai_C:['環状石','ゴブリンウォーリアーの尖った爪'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['産屋ガジェット'],sucai_F_num:[10],otherWords:''}},
    { pid: '0017', name: '胎動鋼·斧·火', atk: '174', huix: '+12%', j: '20', n: '19', q: '21', z: '19', s: '17', elem: '火', elemAtk: '8', level:'40', kind:'双斧', madeIt:{tuzhi:'完成任务「エーリンゼ救出」',sucai_Q:'ルーノ',sucai_Q_num:'797800',sucai_C:['環状石','ゴブリンウォーリアーの尖った爪'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['産屋ガジェット'],sucai_F_num:[10],otherWords:''}},
    { pid: '0018', name: '胎動鋼·弓·火', atk: '131', huix: '+10%', j: '14', n: '19', q: '23', z: '23', s: '20', elem: '火', elemAtk: '8', level:'40', kind:'弓箭', madeIt:{tuzhi:'完成任务「エーリンゼ救出」',sucai_Q:'ルーノ',sucai_Q_num:'797800',sucai_C:['環状石','ゴブリンウォーリアーの尖った爪'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['産屋ガジェット'],sucai_F_num:[10],otherWords:''}},
    { pid: '0019', name: '胎動鋼·杖·火', atk: '174', huix: '+12%', j: '19', n: '19', q: '15', z: '20', s: '21', elem: '火', elemAtk: '8', level:'40', kind:'法杖', madeIt:{tuzhi:'完成任务「エーリンゼ救出」',sucai_Q:'ルーノ',sucai_Q_num:'797800',sucai_C:['環状石','ゴブリンウォーリアーの尖った爪'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['産屋ガジェット'],sucai_F_num:[10],otherWords:''}},
    { pid: '0020', name: '胎動鋼·ハンマー·火', atk: '160', huix: '+13%', j: '17', n: '23', q: '19', z: '17', s: '14', elem: '火', elemAtk: '8', level:'40', kind:'锤子', madeIt:{tuzhi:'完成任务「エーリンゼ救出」',sucai_Q:'ルーノ',sucai_Q_num:'797800',sucai_C:['環状石','ゴブリンウォーリアーの尖った爪'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['産屋ガジェット'],sucai_F_num:[10],otherWords:''}},
      


    { pid:'0021', name:'無辜の誓願·剣·雷', atk:'137', huix:'+15%', j:'24', n:'13', q:'16', z:'21', s:'15' ,elem: '雷', elemAtk: '13', level:'40', kind:'剑盾', madeIt:{tuzhi:'完成任务「天恵の聖堂」',sucai_Q:'ルーノ',sucai_Q_num:'899700',sucai_C:['水晶の原石','ロックリザードの穿牙'],sucai_C_num:[30,16],sucai_B:'wepen',sucai_F:['聖なるスクラップ'],sucai_F_num:[10],otherWords:''}},
    { pid:'0022', name:'無辜の誓願·斧·雷', atk:'164', huix:'+15%', j:'32', n:'12', q:'18', z:'21', s:'15' ,elem: '雷', elemAtk: '13', level:'40', kind:'双斧', madeIt:{tuzhi:'完成任务「天恵の聖堂」',sucai_Q:'ルーノ',sucai_Q_num:'899700',sucai_C:['水晶の原石','ロックリザードの穿牙'],sucai_C_num:[30,16],sucai_B:'wepen',sucai_F:['聖なるスクラップ'],sucai_F_num:[10],otherWords:''}},
    { pid:'0023', name:'無辜の誓願·弓·雷', atk:'123', huix:'+12%', j:'22', n:'12', q:'19', z:'25', s:'18' ,elem: '雷', elemAtk: '13', level:'40', kind:'弓箭', madeIt:{tuzhi:'完成任务「天恵の聖堂」',sucai_Q:'ルーノ',sucai_Q_num:'899700',sucai_C:['水晶の原石','ロックリザードの穿牙'],sucai_C_num:[30,16],sucai_B:'wepen',sucai_F:['聖なるスクラップ'],sucai_F_num:[10],otherWords:''}},
    { pid:'0024', name:'無辜の誓願·杖·雷', atk:'164', huix:'+15%', j:'21', n:'12', q:'14', z:'32', s:'18' ,elem: '雷', elemAtk: '13', level:'40', kind:'法杖', madeIt:{tuzhi:'完成任务「天恵の聖堂」',sucai_Q:'ルーノ',sucai_Q_num:'899700',sucai_C:['水晶の原石','ロックリザードの穿牙'],sucai_C_num:[30,16],sucai_B:'wepen',sucai_F:['聖なるスクラップ'],sucai_F_num:[10],otherWords:''}},
    { pid:'0025', name:'無辜の誓願·ハンマー·雷', atk:'151', huix:'+17%', j:'27', n:'14', q:'16', z:'18', s:'12' ,elem: '雷', elemAtk: '13', level:'40', kind:'锤子', madeIt:{tuzhi:'完成任务「天恵の聖堂」',sucai_Q:'ルーノ',sucai_Q_num:'899700',sucai_C:['水晶の原石','ロックリザードの穿牙'],sucai_C_num:[30,16],sucai_B:'wepen',sucai_F:['聖なるスクラップ'],sucai_F_num:[10],otherWords:''}},


        
    { pid: '0026', name: 'レフュージソード·氷', atk: '142', huix: '+12%', j: '21', n: '21', q: '15', z: '19', s: '17' ,elem: '冰', elemAtk: '11', level:'40', kind:'剑盾', madeIt:{tuzhi:'「巨塔の遺跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'806000',sucai_C:['環状石','ランドホークの穿孔嘴'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['タワーギア'],sucai_F_num:[16],otherWords:''}},
    { pid: '0027', name: 'レフュージアックス·氷', atk: '170', huix: '+12%', j: '28', n: '19', q: '17', z: '19', s: '17' ,elem: '冰', elemAtk: '11', level:'40', kind:'双斧', madeIt:{tuzhi:'「巨塔の遺跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'806000',sucai_C:['環状石','ランドホークの穿孔嘴'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['タワーギア'],sucai_F_num:[16],otherWords:''}},
    { pid: '0028', name: 'レフュージボウ·氷', atk: '128', huix: '+10%', j: '18', n: '19', q: '18', z: '23', s: '20' ,elem: '冰', elemAtk: '11', level:'40', kind:'弓箭', madeIt:{tuzhi:'「巨塔の遺跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'806000',sucai_C:['環状石','ランドホークの穿孔嘴'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['タワーギア'],sucai_F_num:[16],otherWords:''}},
    { pid: '0029', name: 'レフュージスタッフ·氷', atk: '170', huix: '+12%', j: '19', n: '19', q: '15', z: '28', s: '17' ,elem: '冰', elemAtk: '11', level:'40', kind:'法杖', madeIt:{tuzhi:'「巨塔の遺跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'806000',sucai_C:['環状石','ランドホークの穿孔嘴'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['タワーギア'],sucai_F_num:[16],otherWords:''}},
    { pid: '0030', name: 'レフュージハンマー·氷', atk: '156', huix: '+13%', j: '23', n: '23', q: '15', z: '17', s: '14' ,elem: '冰', elemAtk: '11', level:'40', kind:'锤子', madeIt:{tuzhi:'「巨塔の遺跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'806000',sucai_C:['環状石','ランドホークの穿孔嘴'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['タワーギア'],sucai_F_num:[16],otherWords:''}},
          

            
    { pid: '0031', name: 'アンセストラルソード·土', atk: '148', huix: '+11%', j: '24', n: '13', q: '19', z: '12', s: '25' ,elem: '土', elemAtk: '8', level:'40', kind:'剑盾', madeIt:{tuzhi:'「滝裏の盗掘痕跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'799000',sucai_C:['環状石','ホーリーエレメントの核'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['滝裏の秘石'],sucai_F_num:[12],otherWords:''}},
    { pid: '0032', name: 'アンセストラルアックス·土', atk: '170', huix: '+12%', j: '32', n: '12', q: '21', z: '12', s: '25' ,elem: '土', elemAtk: '8', level:'40', kind:'双斧', madeIt:{tuzhi:'「滝裏の盗掘痕跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'799000',sucai_C:['環状石','ホーリーエレメントの核'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['滝裏の秘石'],sucai_F_num:[12],otherWords:''}},
    { pid: '0033', name: 'アンセストラルボウ·土', atk: '128', huix: '+10%', j: '22', n: '12', q: '23', z: '14', s: '30' ,elem: '土', elemAtk: '8', level:'40', kind:'弓箭', madeIt:{tuzhi:'「滝裏の盗掘痕跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'799000',sucai_C:['環状石','ホーリーエレメントの核'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['滝裏の秘石'],sucai_F_num:[12],otherWords:''}},
    { pid: '0034', name: 'アンセストラルスタッフ·土', atk: '170', huix: '+12%', j: '12', n: '12', q: '23', z: '32', s: '21' ,elem: '土', elemAtk: '8', level:'40', kind:'法杖', madeIt:{tuzhi:'「滝裏の盗掘痕跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'799000',sucai_C:['環状石','ホーリーエレメントの核'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['滝裏の秘石'],sucai_F_num:[12],otherWords:''}},
    { pid: '0035', name: 'アンセストラルハンマー·土', atk: '156', huix: '+13%', j: '27', n: '14', q: '19', z: '10', s: '20' ,elem: '土', elemAtk: '8', level:'40', kind:'锤子', madeIt:{tuzhi:'「滝裏の盗掘痕跡·追加調査」副本首通报酬',sucai_Q:'ルーノ',sucai_Q_num:'799000',sucai_C:['環状石','ホーリーエレメントの核'],sucai_C_num:[15,15],sucai_B:'wepen',sucai_F:['滝裏の秘石'],sucai_F_num:[12],otherWords:''}},
              
              
                
    { pid: '0036', name: '無音の名残·剣·氷', atk: '124', huix: '+14%', j: '17', n: '14', q: '14', z: '13', s: '19' ,elem: '冰', elemAtk: '10', level:'35', kind:'剑盾', madeIt:{tuzhi:'完成任务「サラムザート·オアシス」',sucai_Q:'ルーノ',sucai_Q_num:'376500',sucai_C:['水晶の原石','山賊の鋭利な剣'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['サイレンスシング'],sucai_F_num:[8],otherWords:''}},
    { pid: '0037', name: '無音の名残·斧·氷', atk: '149', huix: '+14%', j: '23', n: '13', q: '15', z: '13', s: '19' ,elem: '冰', elemAtk: '10', level:'35', kind:'双斧', madeIt:{tuzhi:'完成任务「サラムザート·オアシス」',sucai_Q:'ルーノ',sucai_Q_num:'376500',sucai_C:['水晶の原石','山賊の鋭利な剣'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['サイレンスシング'],sucai_F_num:[8],otherWords:''}},
    { pid: '0038', name: '無音の名残·弓·氷', atk: '112', huix: '+11%', j: '15', n: '13', q: '17', z: '15', s: '23' ,elem: '冰', elemAtk: '10', level:'35', kind:'弓箭', madeIt:{tuzhi:'完成任务「サラムザート·オアシス」',sucai_Q:'ルーノ',sucai_Q_num:'376500',sucai_C:['水晶の原石','山賊の鋭利な剣'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['サイレンスシング'],sucai_F_num:[8],otherWords:''}},
    { pid: '0039', name: '無音の名残·杖·氷', atk: '149', huix: '+14%', j: '13', n: '13', q: '17', z: '23', s: '15' ,elem: '冰', elemAtk: '10', level:'35', kind:'法杖', madeIt:{tuzhi:'完成任务「サラムザート·オアシス」',sucai_Q:'ルーノ',sucai_Q_num:'376500',sucai_C:['水晶の原石','山賊の鋭利な剣'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['サイレンスシング'],sucai_F_num:[8],otherWords:''}},
    { pid: '0040', name: '無音の名残·ハンマー·氷', atk: '136', huix: '+15%', j: '19', n: '16', q: '14', z: '11', s: '15' ,elem: '冰', elemAtk: '10', level:'35', kind:'锤子', madeIt:{tuzhi:'完成任务「サラムザート·オアシス」',sucai_Q:'ルーノ',sucai_Q_num:'376500',sucai_C:['水晶の原石','山賊の鋭利な剣'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['サイレンスシング'],sucai_F_num:[8],otherWords:''}},


                    
    { pid: '0041', name: 'ホーネットソード·闇', atk: '129', huix: '+12%', j: '14', n: '17', q: '14', z: '12', s: '18' ,elem: '暗', elemAtk: '7', level:'35', kind:'剑盾', madeIt:{tuzhi:'完成任务「砂漠のアバリティア」',sucai_Q:'ルーノ',sucai_Q_num:'432200',sucai_C:['環状石','山賊の術士の重い戦靴'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['砦アリ'],sucai_F_num:[10],otherWords:''}},
    { pid: '0042', name: 'ホーネットアクス·闇', atk: '155', huix: '+12%', j: '19', n: '15', q: '15', z: '12', s: '18' ,elem: '暗', elemAtk: '7', level:'35', kind:'双斧', madeIt:{tuzhi:'完成任务「砂漠のアバリティア」',sucai_Q:'ルーノ',sucai_Q_num:'432200',sucai_C:['環状石','山賊の術士の重い戦靴'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['砦アリ'],sucai_F_num:[10],otherWords:''}},
    { pid: '0043', name: 'ホーネットボウ·闇', atk: '116', huix: '+10%', j: '13', n: '15', q: '17', z: '14', s: '22' ,elem: '暗', elemAtk: '7', level:'35', kind:'弓箭', madeIt:{tuzhi:'完成任务「砂漠のアバリティア」',sucai_Q:'ルーノ',sucai_Q_num:'432200',sucai_C:['環状石','山賊の術士の重い戦靴'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['砦アリ'],sucai_F_num:[10],otherWords:''}},
    { pid: '0044', name: 'ホーネットロッド·闇', atk: '155', huix: '+12%', j: '12', n: '15', q: '16', z: '19', s: '15' ,elem: '暗', elemAtk: '7', level:'35', kind:'法杖', madeIt:{tuzhi:'完成任务「砂漠のアバリティア」',sucai_Q:'ルーノ',sucai_Q_num:'432200',sucai_C:['環状石','山賊の術士の重い戦靴'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['砦アリ'],sucai_F_num:[10],otherWords:''}},
    { pid: '0045', name: 'ホーネットハンマー·闇', atk: '142', huix: '+13%', j: '16', n: '18', q: '14', z: '10', s: '14' ,elem: '暗', elemAtk: '7', level:'35', kind:'锤子', madeIt:{tuzhi:'完成任务「砂漠のアバリティア」',sucai_Q:'ルーノ',sucai_Q_num:'432200',sucai_C:['環状石','山賊の術士の重い戦靴'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['砦アリ'],sucai_F_num:[10],otherWords:''}},
                      


                    
    { pid: '0046', name: '神の通い路·剣·火', atk: '98', huix: '+11%', j: '12', n: '13', q: '9', z: '11', s: '12' ,elem: '火', elemAtk: '5', level:'25', kind:'剑盾', madeIt:{tuzhi:'完成任务「ティリスの依頼」',sucai_Q:'ルーノ',sucai_Q_num:'147600',sucai_C:['水晶の原石','ロックリザードの尖った爪'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['集積コア'],sucai_F_num:[6],otherWords:''}},
    { pid: '0047', name: '神の通い路·斧·火', atk: '118', huix: '+11%', j: '16', n: '12', q: '10', z: '11', s: '12' ,elem: '火', elemAtk: '5', level:'25', kind:'双斧', madeIt:{tuzhi:'完成任务「ティリスの依頼」',sucai_Q:'ルーノ',sucai_Q_num:'147600',sucai_C:['水晶の原石','ロックリザードの尖った爪'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['集積コア'],sucai_F_num:[6],otherWords:''}},
    { pid: '0048', name: '神の通い路·弓·火', atk: '88', huix: '+9%', j: '10', n: '12', q: '11', z: '13', s: '14' ,elem: '火', elemAtk: '5', level:'25', kind:'弓箭', madeIt:{tuzhi:'完成任务「ティリスの依頼」',sucai_Q:'ルーノ',sucai_Q_num:'147600',sucai_C:['水晶の原石','ロックリザードの尖った爪'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['集積コア'],sucai_F_num:[6],otherWords:''}},
    { pid: '0049', name: '神の通い路·杖·火', atk: '115', huix: '+11%', j: '11', n: '12', q: '11', z: '16', s: '10' ,elem: '火', elemAtk: '5', level:'25', kind:'法杖', madeIt:{tuzhi:'完成任务「ティリスの依頼」',sucai_Q:'ルーノ',sucai_Q_num:'147600',sucai_C:['水晶の原石','ロックリザードの尖った爪'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['集積コア'],sucai_F_num:[6],otherWords:''}},
    { pid: '0050', name: '神の通い路·ハンマー·火', atk: '108', huix: '+12%', j: '13', n: '14', q: '9', z: '10', s: '10' ,elem: '火', elemAtk: '5', level:'25', kind:'锤子', madeIt:{tuzhi:'完成任务「ティリスの依頼」',sucai_Q:'ルーノ',sucai_Q_num:'147600',sucai_C:['水晶の原石','ロックリザードの尖った爪'],sucai_C_num:[10,3],sucai_B:'wepen',sucai_F:['集積コア'],sucai_F_num:[6],otherWords:''}},
                      
                      
                
    { pid: '0051', name: 'スティンガーソード·土', atk: '94', huix: '+13%', j: '9', n: '12', q: '13', z: '13', s: '11' ,elem: '土', elemAtk: '7', level:'25', kind:'剑盾', madeIt:{tuzhi:'完成任务「アバリティアの解放」',sucai_Q:'ルーノ',sucai_Q_num:'144000',sucai_C:['環状石','ムークの鉤爪'],sucai_C_num:[5,3],sucai_B:'wepen',sucai_F:['バハマールイエロー'],sucai_F_num:[6],otherWords:''}},
    { pid: '0052', name: 'スティンガーアクス·土', atk: '113', huix: '+13%', j: '12', n: '11', q: '14', z: '13', s: '11' ,elem: '土', elemAtk: '7', level:'25', kind:'双斧', madeIt:{tuzhi:'完成任务「アバリティアの解放」',sucai_Q:'ルーノ',sucai_Q_num:'144000',sucai_C:['環状石','ムークの鉤爪'],sucai_C_num:[5,3],sucai_B:'wepen',sucai_F:['バハマールイエロー'],sucai_F_num:[6],otherWords:''}},
    { pid: '0053', name: 'スティンガーボウ·土', atk: '85', huix: '+10%', j: '8', n: '11', q: '16', z: '15', s: '13' ,elem: '土', elemAtk: '7', level:'25', kind:'弓箭', madeIt:{tuzhi:'完成任务「アバリティアの解放」',sucai_Q:'ルーノ',sucai_Q_num:'144000',sucai_C:['環状石','ムークの鉤爪'],sucai_C_num:[5,3],sucai_B:'wepen',sucai_F:['バハマールイエロー'],sucai_F_num:[6],otherWords:''}},
    { pid: '0054', name: 'スティンガースタッフ·土', atk: '113', huix: '+13%', j: '13', n: '11', q: '10', z: '12', s: '14' ,elem: '土', elemAtk: '7', level:'25', kind:'法杖', madeIt:{tuzhi:'完成任务「アバリティアの解放」',sucai_Q:'ルーノ',sucai_Q_num:'144000',sucai_C:['環状石','ムークの鉤爪'],sucai_C_num:[5,3],sucai_B:'wepen',sucai_F:['バハマールイエロー'],sucai_F_num:[6],otherWords:''}},
    { pid: '0055', name: 'スティンガーハンマー·土', atk: '103', huix: '+14%', j: '10', n: '13', q: '13', z: '11', s: '9' ,elem: '土', elemAtk: '7', level:'25', kind:'锤子', madeIt:{tuzhi:'完成任务「アバリティアの解放」',sucai_Q:'ルーノ',sucai_Q_num:'144000',sucai_C:['環状石','ムークの鉤爪'],sucai_C_num:[5,3],sucai_B:'wepen',sucai_F:['バハマールイエロー'],sucai_F_num:[6],otherWords:''}},
                  

                    
    { pid: '0056', name: 'ドラゴンネイルエッジ·雷', atk: '51', huix: '+11%', j: '6', n: '3', q: '7', z: '5', s: '6' ,elem: '雷', elemAtk: '3', level:'10', kind:'剑盾', madeIt:{tuzhi:'完成任务「巨竜の爪痕」',sucai_Q:'ルーノ',sucai_Q_num:'14700',sucai_C:['ゴブリンのキバ','環状石'],sucai_C_num:[3,5],sucai_B:'wepen',sucai_F:['巨牙の化石'],sucai_F_num:[4],otherWords:''}},
    { pid: '0057', name: 'ドラゴンネイルアクス·雷', atk: '61', huix: '+11%', j: '8', n: '3', q: '8', z: '5', s: '6' ,elem: '雷', elemAtk: '3', level:'10', kind:'双斧', madeIt:{tuzhi:'完成任务「巨竜の爪痕」',sucai_Q:'ルーノ',sucai_Q_num:'14700',sucai_C:['ゴブリンのキバ','環状石'],sucai_C_num:[3,5],sucai_B:'wepen',sucai_F:['巨牙の化石'],sucai_F_num:[4],otherWords:''}},
    { pid: '0058', name: 'ドラゴンネイルアロー·雷', atk: '46', huix: '+9%', j: '6', n: '3', q: '8', z: '7', s: '7' ,elem: '雷', elemAtk: '3', level:'10', kind:'弓箭', madeIt:{tuzhi:'完成任务「巨竜の爪痕」',sucai_Q:'ルーノ',sucai_Q_num:'14700',sucai_C:['ゴブリンのキバ','環状石'],sucai_C_num:[3,5],sucai_B:'wepen',sucai_F:['巨牙の化石'],sucai_F_num:[4],otherWords:''}},
    { pid: '0059', name: 'ドラゴンネイルロッド·雷', atk: '61', huix: '+11%', j: '5', n: '3', q: '5', z: '8', s: '8' ,elem: '雷', elemAtk: '3', level:'10', kind:'法杖', madeIt:{tuzhi:'完成任务「巨竜の爪痕」',sucai_Q:'ルーノ',sucai_Q_num:'14700',sucai_C:['ゴブリンのキバ','環状石'],sucai_C_num:[3,5],sucai_B:'wepen',sucai_F:['巨牙の化石'],sucai_F_num:[4],otherWords:''}},
    { pid: '0060', name: 'ドラゴンネイルスマッシュ·雷', atk: '56', huix: '+12%', j: '7', n: '4', q: '7', z: '5', s: '5' ,elem: '雷', elemAtk: '3', level:'10', kind:'锤子', madeIt:{tuzhi:'完成任务「巨竜の爪痕」',sucai_Q:'ルーノ',sucai_Q_num:'14700',sucai_C:['ゴブリンのキバ','環状石'],sucai_C_num:[3,5],sucai_B:'wepen',sucai_F:['巨牙の化石'],sucai_F_num:[4],otherWords:''}},
                      
                      
    { pid: '0061', name: 'アドベンチャーズソード·火', atk: '38', huix: '+12%', j: '2', n: '2', q: '5', z: '5', s: '3' ,elem: '火', elemAtk: '3', level:'2', kind:'剑盾', madeIt:{tuzhi:'新手任务介绍武器打造的部分',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['水晶の原石'],sucai_C_num:[8],sucai_B:'wepen',sucai_F:['レイクリッド結晶'],sucai_F_num:[1],otherWords:''}},
    { pid: '0062', name: 'アドベンチャーズアックス·火', atk: '46', huix: '+12%', j: '2', n: '2', q: '6', z: '5', s: '3' ,elem: '火', elemAtk: '3', level:'2', kind:'双斧', madeIt:{tuzhi:'新手任务介绍武器打造的部分',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['水晶の原石'],sucai_C_num:[8],sucai_B:'wepen',sucai_F:['レイクリッド結晶'],sucai_F_num:[1],otherWords:''}},
    { pid: '0063', name: 'アドベンチャーズボウ·火', atk: '34', huix: '+10%', j: '2', n: '2', q: '6', z: '6', s: '4' ,elem: '火', elemAtk: '3', level:'2', kind:'弓箭', madeIt:{tuzhi:'新手任务介绍武器打造的部分',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['水晶の原石'],sucai_C_num:[8],sucai_B:'wepen',sucai_F:['レイクリッド結晶'],sucai_F_num:[1],otherWords:''}},
    { pid: '0064', name: 'アドベンチャーズスタッフ·火', atk: '46', huix: '+12%', j: '5', n: '2', q: '3', z: '2', s: '6' ,elem: '火', elemAtk: '3', level:'2', kind:'法杖', madeIt:{tuzhi:'新手任务介绍武器打造的部分',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['水晶の原石'],sucai_C_num:[8],sucai_B:'wepen',sucai_F:['レイクリッド結晶'],sucai_F_num:[1],otherWords:''}},
    { pid: '0065', name: 'アドベンチャーズハンマー·火', atk: '42', huix: '+13%', j: '2', n: '2', q: '5', z: '4', s: '2' ,elem: '火', elemAtk: '3', level:'2', kind:'锤子', madeIt:{tuzhi:'新手任务介绍武器打造的部分',sucai_Q:'ルーノ',sucai_Q_num:'500',sucai_C:['水晶の原石'],sucai_C_num:[8],sucai_B:'wepen',sucai_F:['レイクリッド結晶'],sucai_F_num:[1],otherWords:''}},

    
    { pid: '0066', name: '訓練用の剣', atk: '25', huix: '+12%', j: '2', n: '0', q: '2', z: '2', s: '2' ,elem: '无', elemAtk: '0', level:'1', kind:'剑盾', madeIt:{tuzhi:'初始装备',sucai_Q:'ルーノ',sucai_Q_num:'500（npc处直接购买装备成品）',sucai_C:['-'],sucai_C_num:[],sucai_B:'wepen',sucai_F:['-'],sucai_F_num:[],otherWords:''}},
    { pid: '0067', name: '訓練用の斧', atk: '30', huix: '+11%', j: '2', n: '0', q: '2', z: '2', s: '2' ,elem: '无', elemAtk: '0', level:'1', kind:'双斧', madeIt:{tuzhi:'初始装备',sucai_Q:'ルーノ',sucai_Q_num:'500（npc处直接购买装备成品）',sucai_C:['-'],sucai_C_num:[],sucai_B:'wepen',sucai_F:['-'],sucai_F_num:[],otherWords:''}},
    { pid: '0068', name: '訓練用の弓', atk: '23', huix: '+9%', j: '2', n: '0', q: '2', z: '2', s: '2' ,elem: '无', elemAtk: '0', level:'1', kind:'弓箭', madeIt:{tuzhi:'初始装备',sucai_Q:'ルーノ',sucai_Q_num:'500（npc处直接购买装备成品）',sucai_C:['-'],sucai_C_num:[],sucai_B:'wepen',sucai_F:['-'],sucai_F_num:[],otherWords:''}},
    { pid: '0069', name: '訓練用の杖', atk: '30', huix: '+11%', j: '2', n: '0', q: '2', z: '2', s: '2' ,elem: '无', elemAtk: '0', level:'1', kind:'法杖', madeIt:{tuzhi:'初始装备',sucai_Q:'ルーノ',sucai_Q_num:'500（npc处直接购买装备成品）',sucai_C:['-'],sucai_C_num:[],sucai_B:'wepen',sucai_F:['-'],sucai_F_num:[],otherWords:''}},
    { pid: '0070', name: '訓練用のハンマー', atk: '28', huix: '+12%', j: '2', n: '0', q: '2', z: '2', s: '2' ,elem: '无', elemAtk: '0', level:'1', kind:'锤子', madeIt:{tuzhi:'初始装备',sucai_Q:'ルーノ',sucai_Q_num:'500（npc处直接购买装备成品）',sucai_C:['-'],sucai_C_num:[],sucai_B:'wepen',sucai_F:['-'],sucai_F_num:[],otherWords:''}},
                  
                  
              
]