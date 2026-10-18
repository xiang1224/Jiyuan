const BOOKING = 'https://yoshiwaratravel.com/tw/booking';
const SERVICE = ['持牌認證', '一對一導覽 100%保密行程', '24/7 東京／京都覆蓋', '個人／團體預約', '雙語服務（ENG｜中文）'];
// 新貼文請加在陣列「最後面」，網站會自動倒序顯示（最新在最上面）。id 請接著往下編號。
const posts = [
    {
        id: 1, cat: '接送服務', date: '1月11日', title: '【低調 x 舒適 x 安全】專為成熟男士打造的預約接送服務', tag: '東京 ⇄ 吉原', img: 'img/post1.jpg',
        desc: '往返東京各區🚃吉原地區🛁，助您輕鬆享受東京夜生活！專為男士打造一站式預約接送服務，專屬您的獨特體驗。',
        body: ['專為成熟男士打造的預約接送服務', '往返東京各區🚃吉原地區🛁', '助您輕鬆享受東京夜生活!!'],
        service: true,
        cta: '立即預約：', tags: ['吉原旅行', 'お風呂', '日本接送', '男士旅程', '東京', '大久保', '歌舞伎町', '道玄坂', '六本木', '吉原']
    },
    {
        id: 2, service: false, cat: '文化歷史', date: '1月16日', title: '【🇯🇵Soapland：外交風波的結果？！】', tag: '從土耳其到泡泡的改變', img: 'img/post2.jpg',
        desc: '去日本旅遊常看到的「Soapland」，背後竟然有一段外交風波？不只是單純的按摩，更是一段關於日本社會與國際尊重的歷史！',
        body: ['去日本旅遊常看到的「Soapland」，背後竟然有一段外交風波？', '在東京街頭看到「ソープランド」的招牌，你是否好奇過為什麼叫這個名字？這不只是單純的按摩，更是一段關於日本社會與國際尊重的歷史！', '從「土耳其浴」到「泡泡浴」，這個轉變背後其實是一位留學生的堅持。想要深度探索這份傳承百年的「大人的江戶文化」，卻擔心語言不通或被拒之門外嗎？', '東京⇄吉原｜京都⇄雄琴專車直送', '一對一導覽｜24/7 東京京都全覆蓋', '雙語服務｜持牌夥伴保證｜100%保密行程'],
        cta: '只給您懂的高級體驗：', after2: ['讓你的日本之行，除了購物與美食，更多了一份深度與專業。', '📩 想了解更多詳情或預約？立即 DM 我們！'], tags: []
    },
    {
        id: 3, cat: '文化歷史', date: '1月19日', title: '【跟著⚔️鬼滅之刃去朝聖：走進真實的「吉原遊郭」】', tag: '鬼滅之刃の吉原遊郭', img: 'img/post3.jpg',
        desc: '看過《鬼滅之刃：遊郭篇》的人，一定對那絢爛奪目的吉原街道印象深刻。但你知道嗎？「吉原」在東京是真實存在的歷史地標！',
        body: ['看過《鬼滅之刃：遊郭篇》的人，一定對那絢爛奪目的吉原街道印象深刻。但你知道嗎？「吉原」在東京是真實存在的歷史地標！', '雖然現代的吉原已經轉變為住宅與風俗店並存的區域，但仍保留了如「吉原神社」、「見返り柳」等充滿歷史感的景點。對於想要深度探索江戶文化、或是進行「聖地巡禮」的朋友來說，這裡是必訪之地。', '⚠️ 朝聖小提醒：由於吉原周邊巷弄較多，且離地鐵站有一段距離，對於不熟悉地形的朋友來說，步行尋找歷史遺跡可能會有些吃力。', '📩 立即 DM 我們預約您的專屬座駕，開啟一場大人的歷史朝聖！', '🚘 東京⇄吉原｜京都⇄雄琴專車直送'],
        cta: '只給您懂的高級體驗：', tags: ['鬼滅之刃', '遊郭篇', '吉原', '日本文化', '聖地巡禮', '東京旅遊', '包車服務', '東京生活', '江戶文化']
    },
    {
        id: 4, cat: '泡泡浴百科', date: '1月20日', title: '【真實吉原泡泡浴🫧超值解鎖】', tag: '現實中泡泡浴是怎樣的？', img: 'img/post4.jpg',
        desc: 'YouTuber瘋推的日本「合法紅燈區」秘密，不只洗澡，吉原頂級店一流服務保證讓您一試難忘～',
        body: ['YouTuber瘋推的日本「合法紅燈區」秘密，不只洗澡，吉原頂級店一流服務保證讓您一試難忘～', '主要流程：見面 → 聊天 → 淨身 → 泡澡🛁', '不懂日語就不能去嗎？別怕！', '🚘 東京⇄吉原｜京都⇄雄琴專車直送'],
        extra: '香港台灣客人 5 星評級⭐',
        cta: '立即搶先體驗：', tags: ['吉原旅行', 'お風呂', '日本接送', '吉原泡泡浴', '男士天堂', '歌舞伎町', '六本木', '大久保', '日本夜生活']
    },
    {
        id: 5, cat: '泡泡浴百科', date: '1月21日', title: '【泡澡地百科の4大日本泡泡浴區🛁】', tag: '泡澡地百科', img: 'img/post5.jpg',
        desc: '日本的泡泡浴主要分佈在4個區域：東京吉原、岐阜金津園、滋賀雄琴溫泉、福岡中洲。而吉原以方便、高級、評價最高為其中「CP值最高」的體驗。',
        body: ['日本的泡泡浴主要分佈在4個區域：'],
        list: ['東京 吉原', '岐阜 金津園', '滋賀 雄琴溫泉', '福岡 中洲'],
        after: ['而吉原以方便、高級、評價最高為其中「CP值最高」的體驗。', '不懂如何在吉原玩？私訊我們預約吧！', '🚘 東京⇄吉原｜京都⇄雄琴專車直送'],
        cta: '只給男士的高級體驗：', tags: ['吉原旅行', 'お風呂', '日本接送', '吉原泡泡浴', '男士天堂', '歌舞伎町', '六本木', '大久保', '日本夜生活']
    },
    {
        id: 6, cat: '接送服務', date: '1月22日', title: '【給老司機們最高級的體驗🛁】', tag: '想去泡泡浴名店', img: 'img/post6.jpg', pos: '50% 12%',
        desc: '到東京旅遊想體驗正宗的吉原？交通、選店、翻譯洗澡地幫你安排到位！東京出發專車接送，一路直達吉原頂級店門口。',
        body: ['到東京旅遊想體驗正宗的吉原？', '交通、選店、翻譯洗澡地幫你安排到位！', '東京出發專車接送，一路直達吉原頂級店門口，老司機級的高級享受，從上車那一刻就開始了。', '不懂如何在吉原玩？私訊我們預約吧！', '🚘 東京⇄吉原｜京都⇄雄琴專車直送'],
        promo: '想去泡泡浴名店，但怕不懂日語踩雷怎麼辦？往返東京⇄吉原／京都⇄雄琴、日本人／外國人服務員、只推薦持牌認證店家、不懂日語 OK!!、24/7 全東京京都覆蓋、中文／ENG。全館一口價八萬日元（1月2月優惠）。',
        cta: '只給您懂的高級體驗：', tags: ['吉原旅行', 'お風呂', '日本接送', '吉原泡泡浴', '男士極致放鬆', '歌舞伎町', '六本木', '大久保', '日本夜生活', '雄琴', '老司機', '紳士體驗', 'ソープランド', 'JapanNightlife']
    }
];
let activeCat = '全部文章', searchText = ''; const grid = document.getElementById('articlesGrid');
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
function render() {
    const filtered = [...posts].reverse().filter(p => (activeCat === '全部文章' || p.cat === activeCat) && (`${p.title} ${p.desc} ${p.cat} ${p.tag} ${p.body.join(' ')}`).toLowerCase().includes(searchText.toLowerCase()));
    grid.innerHTML = filtered.length ? filtered.map(p => `<article class="article" data-id="${p.id}"><div class="thumb"><img src="${p.img}" style="${p.pos ? 'object-position:' + p.pos : ''}" alt="${esc(p.tag)}" loading="lazy"><span class="thumb-tag">${p.tag}</span></div><div class="article-body"><div class="meta"><span>${p.date}</span><span class="dot">●</span><span>${p.cat}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="readmore"><span>閱讀全文</span><span>↗</span></div></div></article>`).join('') : '<div class="empty">沒有找到符合條件的文章，試試其他關鍵字吧。</div>';
    document.querySelectorAll('.article').forEach(card => { card.style.cursor = 'pointer'; card.setAttribute('tabindex', '0'); card.setAttribute('role', 'button'); card.setAttribute('aria-label', '打開文章：' + card.querySelector('h3').textContent); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click() } }) });
}
function openPost(post) {
    const P = t => `<p>${esc(t)}</p>`;
    let html = `<div style="color:var(--muted);font-size:12px">${post.date}　·　${post.cat}</div><h1 style="font:500 clamp(24px,4.5vw,36px)/1.45 Georgia,'Noto Serif TC',serif;margin:16px 0 22px">${post.title}</h1><div class="post-img"><img src="${post.img}" alt="${esc(post.tag)}"></div>`;
    html += post.body.map(P).join('');
    if (post.list) html += `<ul class="area-list">${post.list.map(x => `<li>${x}</li>`).join('')}</ul>`;
    if (post.after) html += post.after.map(P).join('');
    if (post.service !== false) html += `<ul class="service-list">${SERVICE.map(x => `<li>✅ ${x}</li>`).join('')}</ul>`;
    if (post.promo) html += `<p style="padding:14px 16px;border:1px solid var(--line);border-left:3px solid var(--red);border-radius:4px">${esc(post.promo)}</p>`;
    if (post.extra) html += P(post.extra);
    if (post.after2) html += post.after2.map(P).join('');
    html += `<p style="margin-top:26px"><b>${post.cta}</b><br><a class="book-btn" style="margin-top:10px" href="${BOOKING}" target="_blank" rel="noopener">${BOOKING.replace('https://', '')}</a></p>`;
    if (post.tags && post.tags.length) html += `<p style="border-top:1px solid var(--line);padding-top:18px;color:var(--red);font-size:13px">${post.tags.map(t => '#' + t).join('　')}</p>`;
    document.getElementById('postContent').innerHTML = html; document.getElementById('postDialog').showModal();
}
document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => { activeCat = b.dataset.cat; document.querySelectorAll('.filter').forEach(x => x.classList.toggle('active', x === b)); render() }));
document.getElementById('searchToggle').addEventListener('click', () => { const panel = document.getElementById('searchPanel'); panel.classList.toggle('open'); if (panel.classList.contains('open')) document.getElementById('searchInput').focus(); else { searchText = ''; document.getElementById('searchInput').value = ''; render() } });
document.getElementById('searchInput').addEventListener('input', e => { searchText = e.target.value; render(); document.getElementById('articles').scrollIntoView({ behavior: 'smooth', block: 'start' }) });
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open')));
document.querySelectorAll('.dest').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openPost(posts.find(p => p.id === +a.dataset.open)) }));
grid.addEventListener('click', e => { const card = e.target.closest('.article'); if (!card) return; openPost(posts.find(p => p.id === +card.dataset.id)) });
document.getElementById('closePost').addEventListener('click', () => document.getElementById('postDialog').close());
document.getElementById('postDialog').addEventListener('click', e => { if (e.target === e.currentTarget) e.currentTarget.close() });
render();
