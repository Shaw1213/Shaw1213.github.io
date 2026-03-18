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
        "bob.detail.team.label": "团队成员",
        "bob.detail.duration.val": "4个月",
        "bob.detail.duration.label": "开发周期",
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

        "beamdown.desc": "EAE毕业项目，30人团队。Boss 1完整战斗设计 + UI实现。已上线Steam。",

        "bd.detail.desc": "犹他大学EAE Capstone毕业项目。30人团队协作开发，已上线Steam。我负责Boss 1完整战斗设计及全部UI实现。",
        "bd.detail.team.label": "团队成员",
        "bd.detail.role.val": "Boss 1设计 + UI",
        "bd.detail.role.label": "我的职责",
        "bd.detail.goal": "设计目标",
        "bd.detail.goal.p": "作为游戏的第一场Boss战，设计目标是在低挫败感的前提下，系统性教学攻击、闪避和间距管理三项基础能力，并通过三阶段递进结构建立玩家对Boss战节奏的预期。",
        "bd.detail.pillars": "设计支柱（Pillars）：Engaging / Unique / Difficult / Multiple Stages / Test Specific Skills / Teach Player How to Play Better。",
        "bd.detail.phases": "三阶段递进设计",
        "bd.detail.p1": "Phase 1 \u2014 教学阶段",
        "bd.detail.p1.desc": "Boss缓慢追踪玩家，只有Crush Attack一种攻击。目的是让玩家在低压环境中熟悉Tell\u2192Attack\u2192Recover的读招节奏，学会闪避和控制间距。",
        "bd.detail.p2": "Phase 2 \u2014 走位考验",
        "bd.detail.p2.desc": "以Rock Slam开场在场地中制造落石遮挡物，随后解锁Shockwave Slam（环形AOE）。玩家被迫从被动站桩升级为主动走位，同时需要利用场地中的遮挡物。",
        "bd.detail.p3": "Phase 3 \u2014 技能叠加与全场压力",
        "bd.detail.p3.desc": "Phase 3不引入全新攻击类型，而是将前两个阶段的攻击进行组合叠加来制造压力升级。Rock Slam和Shockwave Slam会同时释放\u2014\u2014玩家在躲避随机散布的落石的同时还需要应对扩展中的环形冲击波，走位空间被大幅压缩。当玩家试图贴近Boss时，Spinning Blast（四方向旋转弹幕）会被触发逼退玩家，惩罚无脑近身。",
        "bd.detail.p3.minion": "开场刷出6个小兵，小兵会伸长手臂抓住玩家并控制约3秒，若此时Boss同时发起攻击，玩家将面临无法闪避的致命威胁\u2014\u2014这迫使玩家必须优先处理小兵，而非无视它们专注Boss。",
        "bd.detail.attacks": "攻击设计",
        "bd.detail.attacks.intro": "所有攻击遵循Tell\u2192Attack\u2192Recover三段节奏，给予玩家明确的反应窗口。4种攻击覆盖不同空间威胁维度：",
        "bd.detail.crush": "Crush Attack（跳砸）",
        "bd.detail.crush.desc": "近战追踪攻击。Tell阶段持续追踪玩家位置作为落点，以弹道弧线跳向目标。测试玩家的闪避时机。",
        "bd.detail.shockwave": "Shockwave Slam（冲击波）",
        "bd.detail.shockwave.desc": "环形AOE。从Boss位置向外扩展的环形冲击波。附带距离判断：若玩家贴近Boss，Boss会先跳跃拉开距离再释放，确保任何距离下都有可读性。",
        "bd.detail.rockslam": "Rock Slam（落石）",
        "bd.detail.rockslam.desc": "区域拒止。Boss跳砸地面触发多块落石随机散布，每块落石有阴影预警。制造短时间的空间混乱，考验走位。Phase 3中与Shockwave Slam组合使用，大幅压缩安全空间。",
        "bd.detail.spinblast": "Spinning Blast（旋转弹幕）",
        "bd.detail.spinblast.desc": "近身惩罚/逼退机制。Boss原地旋转，四方向发射弹幕并持续旋转，制造需要穿越的弹幕间隙。Phase 3中作为玩家贴近时的反制手段，迫使玩家保持中远距离与Boss博弈。",
        "bd.detail.chooser": "攻击选择规则（AttackChooser）",
        "bd.detail.chooser.p": "不允许连续重复同一攻击；强攻击（Rock Slam、Spinning Blast）不允许连发，强制Boss在\u201c高压\u2192喘息\u2192高压\u201d之间交替。攻击触发分两条路径：近战触发（玩家进入近战范围时立即选择攻击）和失耐心触发（追逐超过设定时间后主动发起攻击），确保Boss不会被风筝。",
        "bd.detail.result": "最终效果",
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
        "nav.about": "关于我",
        "nav.email": "邮箱",
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
