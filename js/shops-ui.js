(function () {
    let cur = SHOPS[0], q = '';
    const tabs = document.getElementById('shopTabs'), info = document.getElementById('shopInfo'), grid = document.getElementById('girlsGrid'), count = document.getElementById('girlCount');
    const pad = n => String(n).padStart(3, '0');
    function draw() {
        tabs.innerHTML = SHOPS.map(s => `<button class="filter${s === cur ? ' active' : ''}" data-id="${s.id}">${s.name}</button>`).join('');
        info.innerHTML = `<div><b>${cur.name}</b><small>${cur.sub}</small></div><a class="book-btn" href="${BOOKING}" target="_blank" rel="noopener">預約接送 ↗</a>`;
        const list = cur.girls.map((g, i) => ({ no: g[5] || i + 1, name: g[0], age: g[1], h: g[2], size: g[3], fresh: !!g[6] })).filter(g => g.name.toLowerCase().includes(q.toLowerCase()));
        count.textContent = `共 ${cur.girls.length} 位${q ? `，符合 ${list.length} 位` : ''}`;
        grid.innerHTML = list.length ? list.map(g => `<article class="girl" data-no="${g.no}" tabindex="0" role="button" aria-label="查看 ${g.name} 出勤表"><div class="photo"><span class="ph">PHOTO<br>${pad(g.no)}</span><img src="img/${cur.id}/${pad(g.no)}.webp" alt="${g.name}" loading="lazy" onerror="this.remove()"><span class="no">No.${pad(g.no)}</span>${g.fresh ? '<span class="new">NEW</span>' : ''}</div><div class="girl-body"><h3>${g.name}</h3><p>${[g.age ? g.age + ' 歲' : '', g.h ? g.h + ' cm' : ''].filter(Boolean).join('　')}</p><p class="size">${g.size ? 'B-W-H　' + g.size : ''}</p></div></article>`).join('') : '<div class="empty">找不到符合的名字。</div>';
    }
    tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cur = SHOPS.find(s => s.id === b.dataset.id); draw() });
    document.getElementById('girlSearch').addEventListener('input', e => { q = e.target.value; draw() });

    const WD = ['日', '一', '二', '三', '四', '五', '六'];
    const RANGES = [[7, '1 週'], [14, '2 週'], [21, '3 週'], [30, '1 個月']];
    const ymd = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    let openNo = 0, range = 7;
    function schedHTML(no) {
        const key = pad(no), sch = (SCHEDULE[cur.id] || {})[key] || {}, wk = (WEEKLY[cur.id] || {})[key], rows = [];
        for (let i = 0; i < range; i++) {
            const d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + i);
            let v = sch[ymd(d)];
            if (v === undefined && wk) v = wk[d.getDay()] || '休';
            const cls = (v === undefined ? 'unk' : (v === '休' ? 'off' : 'on')) + (d.getDay() === 0 || d.getDay() === 6 ? ' we' : '');
            rows.push(`<li class="${cls}"><span class="d">${d.getMonth() + 1}/${d.getDate()}（${WD[d.getDay()]}）${i === 0 ? '<em>今天</em>' : ''}</span><span class="t">${v === undefined ? '未公布' : v}</span></li>`);
        }
        return rows.join('');
    }
    function contactsHTML(shopId, key) {
        const ov = ((CONTACT_OVERRIDE[shopId] || {})[key]) || {};
        return CONTACTS.map(c => { const u = ov[c.cls] || c.url || '#'; return `<a class="contact-btn ${c.cls}" href="${u}" target="_blank" rel="noopener">${c.name}</a>` }).join('');
    }
    function openGirl(no) {
        openNo = no; range = 7;
        const g = cur.girls.find((x, i) => (x[5] || i + 1) === no), key = pad(no), base = `img/${cur.id}/${key}`;
        const slots = [`${base}.webp`, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `${base}_${n}.webp`)];
        const thumbs = slots.map((src, i) => `<button class="gt" data-src="${src}" aria-label="${i === 0 ? '封面' : '照片 ' + i}"><span class="ph">${i === 0 ? '封面' : i}</span><img src="${src}" alt="" onerror="this.parentNode.remove()"></button>`).join('');
        const meta = [g[1] ? g[1] + ' 歲' : '', g[2] ? g[2] + ' cm' : ''].filter(Boolean).join('　');
        document.getElementById('gdTitle').textContent = `${cur.name} · 在籍資料與出勤表`;
        document.getElementById('girlContent').innerHTML = `<div class="gd-left"><div class="gd-photo"><span class="ph">PHOTO<br>${key}</span><img id="gdMain" src="${slots[0]}" alt="${g[0]}" onerror="this.style.visibility='hidden'"></div><div class="gd-thumbs">${thumbs}</div><p class="gd-hint">封面 + 最多 10 張相簿（${key}.webp、${key}_1.webp … ${key}_10.webp）</p></div><div class="gd-info"><div class="gd-no">No.${key}${g[6] ? '　<em class="gd-new">NEW 新人</em>' : ''}</div><h2>${g[0]}</h2>${meta ? `<p>${meta}</p>` : ''}${g[3] ? `<p class="size">B-W-H　${g[3]}</p>` : ''}${g[4] ? `<div class="gd-review"><b>顧客評價摘要</b>${g[4]}<small>依公開評論整理，僅為個人經驗，不代表每位客人的體驗。</small></div>` : ''}<div class="sch-head"><h4>出勤表</h4><div class="range" id="rangeBtns">${RANGES.map(r => `<button data-r="${r[0]}" class="${r[0] === 7 ? 'active' : ''}">${r[1]}</button>`).join('')}</div></div><ul class="sch" id="schList">${schedHTML(no)}</ul><p class="gd-note">出勤時間可能臨時調整，請以預約確認為準。</p><a class="book-btn" href="${BOOKING}" target="_blank" rel="noopener">預約接送 ↗</a><div class="contact-row">${contactsHTML(cur.id, key)}</div></div>`;
        document.getElementById('girlDialog').showModal();
    }
    document.getElementById('girlContent').addEventListener('click', e => {
        const t = e.target.closest('.gt');
        if (t && !t.classList.contains('miss')) { const m = document.getElementById('gdMain'); m.style.visibility = 'visible'; m.src = t.dataset.src; document.querySelectorAll('.gt').forEach(x => x.classList.toggle('sel', x === t)); return }
        const r = e.target.closest('#rangeBtns button');
        if (r) { range = +r.dataset.r; document.querySelectorAll('#rangeBtns button').forEach(x => x.classList.toggle('active', x === r)); document.getElementById('schList').innerHTML = schedHTML(openNo) }
    });
    grid.addEventListener('click', e => { const c = e.target.closest('.girl'); if (c) openGirl(+c.dataset.no) });
    grid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('girl')) { e.preventDefault(); openGirl(+e.target.dataset.no) } });
    const gd = document.getElementById('girlDialog');
    document.getElementById('closeGirl').addEventListener('click', () => gd.close());
    gd.addEventListener('click', e => { if (e.target === gd) gd.close() });
    draw();
})();