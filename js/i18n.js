// i18n — language switching (translations embedded, no fetch needed)
(function() {
    var translations = {
        "nav.title": "战斗策划",
        "nav.works": "项目",
        "page.name": "张宇骁",
        "page.role": "战斗策划",
        "section.works": "项目",

        "bob.award": "IGDA SLC 年度最佳游戏 (2025)",
        "bob.desc": "4个月内从零到Steam上线，8人团队。计分系统、实时UI架构、资产集成管线。",
        "bob.detail.desc": "IGDA SLC 年度最佳游戏 (2025)。4个月内与8人团队协作，从零开发到Steam上线。WalterNet Games。",
        "bob.detail.info": "项目信息",
        "bob.detail.engine": "引擎：Unreal Engine 5.4（纯蓝图）",
        "bob.detail.team": "团队：2名工程师、2名策划、3名美术、1名音效设计师",
        "bob.detail.duration": "开发周期：4个月",
        "bob.detail.contrib": "我的贡献",
        "bob.detail.c1": "设计并实现道具系统：创建了3种独特的道具机制以丰富玩法多样性。",
        "bob.detail.c2": "核心系统工程：协同开发计分系统和游戏状态生命周期管理。",
        "bob.detail.c3": "资产管线：与美术协作，将3D资产和动画集成到引擎中。",
        "bob.detail.c4": "UI负责人：设计并实现了完整的HUD和菜单界面控件。",
        "bob.detail.gameplay": "核心玩法设计",
        "bob.detail.gameplay.p1": "Bricks Over Blocks是一款融合了经典方块弹球与横版平台跳跃的动作弹球游戏。我们将传统弹球中固定在底部的一维挡板重新设计为一个可自由移动和跳跃的物理角色，角色头顶的弹跳板用于接住弹球。这一改动将玩家的操控维度从左右移动扩展到了完整的二维空间，使游戏体验从\u201c弹球\u201d转向了\u201c动作游戏\u201d。",
        "bob.detail.gameplay.p2": "游戏的核心设计张力来自于弹球轨迹既是进攻手段也是防守风险。玩家通过接球时的移动方向来引导弹球轨迹，将球打向上方消除砖块。但弹球同样会击碎玩家脚下的地板砖块，地板下方是岩浆，掉落即损失一条生命。地板一旦被破坏不可恢复，玩家的生存空间随游戏推进持续缩小，容错率递减，制造出不断升级的紧张感。",
        "bob.detail.gameplay.p3": "高水平玩家可以通过精准接球同时完成进攻和自我保护，而普通玩家则会被迫在\u201c消除上方砖块\u201d和\u201c保护脚下地板\u201d之间做出取舍\u2014\u2014这构成了游戏的核心博弈。",
        "bob.detail.paddle": "生命-跳板联动机制",
        "bob.detail.paddle.p1": "我设计了一个将生命系统与操控能力绑定的风险回报机制：当玩家通过击碎关卡中随机出现的特殊砖块获得一颗额外生命时，角色头顶的弹跳板会同时延长一倍，显著提升接球容错率。但当玩家失误掉落失去这条额外生命时，跳板同步缩回原始长度。",
        "bob.detail.paddle.p2": "这意味着一次失误会造成双重惩罚\u2014\u2014同时失去生命值和操控优势。这个设计让玩家在持有buff时感受到明显的安全感，而失去时的落差则放大了紧张感和惋惜感，塑造了起伏鲜明的情绪节奏。",

        "beamdown.desc": "EAE毕业项目，30人团队。完整UI开发管线\u2014\u2014C#前后端。",
        "hb.desc": "操控你的仓鼠球推开敌人，在充满挑战的关卡中取得胜利。",
        "gs.title": "大剑战斗系统",
        "gs.desc": "黑暗之魂风格。6种攻击类型、受击停顿+镜头震动、行为树AI（硬直/击退/眩晕）、GAS属性系统。7天独立完成。",
        "dnd.title": "Dungeons & Drinks",
        "dnd.desc": "F2P手游。完整GDD、新手引导（FTUE）、付费活动设计。主导跨学科团队协作。",
        "rce.title": "Remote Code Execution",
        "rce.desc": "你的车被黑客入侵了。按下正确的按键来夺回控制权。",
        "ld.title": "关卡设计",
        "ld.desc": "2D横版卷轴 + 3D解谜关卡。",
        "placeholder.screenshot": "截图即将上传",
        "placeholder.footage": "视频即将上传",

        "nav.home": "首页",
        "nav.about": "关于",
        "nav.back": "\u2190 返回主页",
        "nav.cat.shipped": "已发行游戏",
        "nav.cat.protos": "原型 & Demo",
        "nav.dd.greatsword": "大剑战斗系统",
        "nav.dd.level": "关卡设计"
    };

    var STORAGE_KEY = 'lang';

    function getLang() {
        try {
            var params = new URLSearchParams(window.location.search);
            if (params.has('lang')) return params.get('lang');
        } catch(e) {}
        try {
            var stored = localStorage.getItem(STORAGE_KEY);
            if (stored) return stored;
        } catch(e) {}
        return 'en';
    }

    function setLang(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        if (lang === 'zh') {
            applyTranslations();
        } else {
            revertToEnglish();
        }
        updateToggle(lang);
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (translations[key]) {
                if (!el.hasAttribute('data-i18n-en')) {
                    el.setAttribute('data-i18n-en', el.innerHTML);
                }
                el.innerHTML = translations[key];
            }
        });
    }

    function revertToEnglish() {
        document.querySelectorAll('[data-i18n-en]').forEach(function(el) {
            el.innerHTML = el.getAttribute('data-i18n-en');
        });
    }

    function updateToggle(lang) {
        var btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    }

    function init() {
        var lang = getLang();
        if (lang === 'zh') setLang('zh');
        else updateToggle('en');

        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', function() {
                var current = getLang();
                var next = current === 'zh' ? 'en' : 'zh';
                setLang(next);
                try {
                    var url = new URL(window.location);
                    url.searchParams.set('lang', next);
                    history.replaceState(null, '', url);
                } catch(e) {}
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
