// 鹿鳴館女生資料
// 格式：[名字, 年齡, 身高cm, 三圍, 顧客評價摘要(可留空), 編號, 新人(true/false，可省略)]
// 「編號」就是照片與出勤表的檔名／代號（例如 050 → img/rokumeikan/050.webp、050_1.webp … 050_10.webp）。
// 編號一旦給了就不要改；新增小姐請用「下一個沒用過的編號」，想排在最前面就把那一行放在最上面，既有照片不會亂掉。
const ROKU = [
   ["AI", 22, 165, "86(E)-56-86", "", 50, true],
   ["KANAMI", 22, 163, "108-57-89", "", 1],
   ["AN", 22, 160, "86-57-88", "", 2],
   ["AMANE", 21, 156, "86-56-85", "", 3],
   ["MIREI", 22, 174, "87-55-88", "", 4],
   ["MIHO", 21, 155, "85-55-84", "", 5],
   ["SHIRASAKISAKURA", 23, 156, "86-55-84", "", 6],
   ["HONOKA", 22, 159, "85-55-85", "", 7],
   ["KAGUYA", 20, 159, "86-55-86", "", 8],
   ["SARA", 22, 160, "108-57-87", "", 9],
   ["TSUKIHO", 21, 160, "84-56-84", "", 10],
   ["TSUBAKI", 22, 153, "86-57-89", "", 11],
   ["NATSUMI", 20, 162, "90-55-85", "", 12],
   ["MINAMIKAZEHINATSU", 23, 155, "120-56-82", "", 13],
   ["TOUGENHINANO", 20, 166, "86-56-82", "", 14],
   ["OTOHA", 22, 158, "89-55-86", "", 15],
   ["KAEDE", 20, 155, "88-55-83", "", 16],
   ["MAKO", 21, 155, "83-55-88", "", 17],
   ["NIKO", 22, 173, "90-56-86", "", 18],
   ["MIO", 21, 160, "90-56-87", "", 19],
   ["HOTARU", 20, 158, "88-56-86", "", 20],
   ["RIN", 20, 170, "85-56-88", "", 21],
   ["MAIKO", 22, 164, "92-55-86", "", 22],
   ["KUDOU NATSUKI", 24, 167, "86-57-87", "", 23],
   ["YURA", 21, 151, "88-57-86", "", 24],
   ["KURUMI", 21, 160, "88-55-85", "", 25],
   ["ITO", 24, 156, "84-55-83", "", 26],
   ["YUMEKA", 21, 155, "88-55-84", "", 27],
   ["FUWARI", 20, 157, "83-56-84", "", 28],
   ["MEME", 20, 160, "105-55-84", "", 29],
   ["MINAMI", 22, 161, "89-56-86", "", 30],
   ["AOTSUKI ANO", 20, 155, "86-86-85", "", 31],
   ["ICHIKA", 21, 174, "90-56-86", "", 32],
   ["MIYABI", 20, 162, "87-55-85", "", 33],
   ["HINAMI HINATA", 23, 160, "95-56-84", "", 34],
   ["MAI", 22, 171, "88-56-86", "", 35],
   ["KARINA", 21, 162, "110-57-87", "", 36],
   ["RIONA", 21, 165, "87-56-85", "", 37],
   ["HIME", 21, 158, "89-55-86", "", 38],
   ["SATOMI", 21, 170, "83-57-87", "", 39],
   ["MIYUU", 22, 168, "85-56-84", "", 40],
   ["YURINA", null, 173, "95-57-88", "", 41],
   ["MOMO", 21, 160, "87-55-85", "", 42],
   ["ICHIKI", 22, 165, "84-55-85", "", 43],
   ["KUROKI AYUMU", 25, 156, "86-56-88", "", 44],
   ["AYA", 21, 160, "89-56-87", "", 45],
   ["KOKORO", 22, 164, "85-56-86", "", 46],
   ["MOKA", 21, 162, "86-56-87", "", 47],
   ["AI-DA", 30, 153, "83-54-83", "", 48],
   ["UTA", 21, 155, "90-55-85", "", 49]];

// 聖女（Maria）女生資料：格式同上 [名字, 年齡, 身高cm, 三圍, 顧客評價摘要(可留空), 編號, 新人]
// 照片放 img/maria/ 資料夾，檔名用「編號」：001.webp = YUINA、002.webp = TSUBAKI ……
// 資料來自店家公開名單；三圍與罩杯為網站自述資料，顧客評價摘要依公開評論整理，僅為個人經驗。
const MARIA = [
   ["YUINA", 21, 160, "88(F)-55-86", "", 1],
   ["TSUBAKI", 21, 157, "88(F)-56-85", "", 2],
   ["YUNO", 21, 147, "85(E)-54-83", "", 3],
   ["UTA", 20, 158, "83(C)-55-85", "溫柔體貼，會循序引導、耐心聆聽，日語不流利的客人也能自在聊天。", 4],
   ["MANA", 20, 155, "88(G)-55-85", "聊天有趣、包容，可透過手勢與翻譯工具溝通，互動自然。", 5],
   ["YUIKA", 21, 165, "88(F)-54-82", "身材高挑、笑容甜美，願意與日語不流利的客人交流。", 6],
   ["NOA", 21, 163, "88(F)-54-87", "有溫柔的姊姊感，耐心聆聽並主動開話題；有顧客表示本人與網站照片相符。", 7],
   ["NATSU", 20, 162, "86(F)-55-86", "", 8],
   ["MIIHI", 20, 153, "100(J)-57-88", "", 9],
   ["RINKA", 21, 150, "83(D)-54-82", "溝通耐心、會確認對方是否理解，適合初次體驗的客人。", 10],
   ["SATSUKI", 20, 160, "83(C)-56-87", "纖細溫柔，顧客經驗較少時會協助引導，可用簡單英文與翻譯工具溝通。", 11],
   ["KAORI", 20, 158, "87(D)-56-85", "", 12],
   ["HINA", 20, 157, "88(E)-54-85", "可愛、互動親近，可用簡單英文溝通。", 13]];

// 店家清單。之後要新增店家，複製一組放進來，照片放 img/店家id/ 資料夾，並在 schedule.js 加上同樣的店家 id。
// 照片命名：封面 001.webp；內文相簿最多 10 張：001_1.webp … 001_10.webp
const SHOPS = [
   { id: 'rokumeikan', name: '鹿鳴館', sub: '吉原高級ソープランド', girls: ROKU },
   { id: 'maria', name: '聖女 Maria', sub: '高級ソープランド 吉原聖女（マリア）｜9:00–24:00（最後預約 22:00）', girls: MARIA }
];

// 聯絡按鈕（顯示在每位小姐的詳細頁）。請把下面三個 url 換成你們真正的連結：
// LINE：https://line.me/ti/p/你的LINE_ID　　WhatsApp：https://wa.me/國碼+電話（不加 + 與空格，例如 https://wa.me/886912345678）
// WeChat：沒有通用連結，可放 QR code 頁面或個人名片頁的網址
const CONTACTS = [
   { name: 'LINE', cls: 'line', url: 'https://line.me/ti/p/YOUR_LINE_ID' },
   { name: 'WhatsApp', cls: 'whatsapp', url: 'https://wa.me/YOUR_NUMBER' },
   { name: 'WeChat', cls: 'wechat', url: 'https://example.com/your-wechat' }
];

// 每位小姐各自的聯絡方式（沒寫的人，或沒寫的欄位，就使用上面 CONTACTS 的預設連結）。
// 格式：CONTACT_OVERRIDE['店家id']['編號'] = { line: '連結', whatsapp: '連結', wechat: '連結' }
// 只想改其中一個也可以，例如只寫 { line: '...' }。
// 欄位留空白 '' 時，按鈕仍會顯示，連結會使用上面 CONTACTS 的預設值。
// 下面已列出每位小姐，三個欄位目前都是空白。把這位小姐自己的連結填在引號裡即可。
const CONTACT_OVERRIDE = {
   rokumeikan: {
      '050': { line: '', whatsapp: '', wechat: '' },  // AI
      '001': { line: '', whatsapp: '', wechat: '' },  // KANAMI
      '002': { line: '', whatsapp: '', wechat: '' },  // AN
      '003': { line: '', whatsapp: '', wechat: '' },  // AMANE
      '004': { line: '', whatsapp: '', wechat: '' },  // MIREI
      '005': { line: '', whatsapp: '', wechat: '' },  // MIHO
      '006': { line: '', whatsapp: '', wechat: '' },  // SHIRASAKISAKURA
      '007': { line: '', whatsapp: '', wechat: '' },  // HONOKA
      '008': { line: '', whatsapp: '', wechat: '' },  // KAGUYA
      '009': { line: '', whatsapp: '', wechat: '' },  // SARA
      '010': { line: '', whatsapp: '', wechat: '' },  // TSUKIHO
      '011': { line: '', whatsapp: '', wechat: '' },  // TSUBAKI
      '012': { line: '', whatsapp: '', wechat: '' },  // NATSUMI
      '013': { line: '', whatsapp: '', wechat: '' },  // MINAMIKAZEHINATSU
      '014': { line: '', whatsapp: '', wechat: '' },  // TOUGENHINANO
      '015': { line: '', whatsapp: '', wechat: '' },  // OTOHA
      '016': { line: '', whatsapp: '', wechat: '' },  // KAEDE
      '017': { line: '', whatsapp: '', wechat: '' },  // MAKO
      '018': { line: '', whatsapp: '', wechat: '' },  // NIKO
      '019': { line: '', whatsapp: '', wechat: '' },  // MIO
      '020': { line: '', whatsapp: '', wechat: '' },  // HOTARU
      '021': { line: '', whatsapp: '', wechat: '' },  // RIN
      '022': { line: '', whatsapp: '', wechat: '' },  // MAIKO
      '023': { line: '', whatsapp: '', wechat: '' },  // KUDOU NATSUKI
      '024': { line: '', whatsapp: '', wechat: '' },  // YURA
      '025': { line: '', whatsapp: '', wechat: '' },  // KURUMI
      '026': { line: '', whatsapp: '', wechat: '' },  // ITO
      '027': { line: '', whatsapp: '', wechat: '' },  // YUMEKA
      '028': { line: '', whatsapp: '', wechat: '' },  // FUWARI
      '029': { line: '', whatsapp: '', wechat: '' },  // MEME
      '030': { line: '', whatsapp: '', wechat: '' },  // MINAMI
      '031': { line: '', whatsapp: '', wechat: '' },  // AOTSUKI ANO
      '032': { line: '', whatsapp: '', wechat: '' },  // ICHIKA
      '033': { line: '', whatsapp: '', wechat: '' },  // MIYABI
      '034': { line: '', whatsapp: '', wechat: '' },  // HINAMI HINATA
      '035': { line: '', whatsapp: '', wechat: '' },  // MAI
      '036': { line: '', whatsapp: '', wechat: '' },  // KARINA
      '037': { line: '', whatsapp: '', wechat: '' },  // RIONA
      '038': { line: '', whatsapp: '', wechat: '' },  // HIME
      '039': { line: '', whatsapp: '', wechat: '' },  // SATOMI
      '040': { line: '', whatsapp: '', wechat: '' },  // MIYUU
      '041': { line: '', whatsapp: '', wechat: '' },  // YURINA
      '042': { line: '', whatsapp: '', wechat: '' },  // MOMO
      '043': { line: '', whatsapp: '', wechat: '' },  // ICHIKI
      '044': { line: '', whatsapp: '', wechat: '' },  // KUROKI AYUMU
      '045': { line: '', whatsapp: '', wechat: '' },  // AYA
      '046': { line: '', whatsapp: '', wechat: '' },  // KOKORO
      '047': { line: '', whatsapp: '', wechat: '' },  // MOKA
      '048': { line: '', whatsapp: '', wechat: '' },  // AI-DA
      '049': { line: '', whatsapp: '', wechat: '' },  // UTA
   },
   maria: {
      '001': { line: '', whatsapp: '', wechat: '' },  // YUINA
      '002': { line: '', whatsapp: '', wechat: '' },  // TSUBAKI
      '003': { line: '', whatsapp: '', wechat: '' },  // YUNO
      '004': { line: '', whatsapp: '', wechat: '' },  // UTA
      '005': { line: '', whatsapp: '', wechat: '' },  // MANA
      '006': { line: '', whatsapp: '', wechat: '' },  // YUIKA
      '007': { line: '', whatsapp: '', wechat: '' },  // NOA
      '008': { line: '', whatsapp: '', wechat: '' },  // NATSU
      '009': { line: '', whatsapp: '', wechat: '' },  // MIIHI
      '010': { line: '', whatsapp: '', wechat: '' },  // RINKA
      '011': { line: '', whatsapp: '', wechat: '' },  // SATSUKI
      '012': { line: '', whatsapp: '', wechat: '' },  // KAORI
      '013': { line: '', whatsapp: '', wechat: '' },  // HINA
   }
};