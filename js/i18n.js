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

        "gs.detail.desc": "构建一套以大剑为核心的第三人称动作战斗系统，目标手感参考Dark Souls的Stamina博弈 + Monster Hunter大剑的蓄力打击感 + Elden Ring的Guard Counter设计。核心体验：每一刀都有重量感和决策成本，玩家的每次出招都是一次风险投入。",
        "gs.detail.time.val": "7天",
        "gs.detail.time.label": "开发周期",
        "gs.detail.role.val": "独立开发",
        "gs.detail.role.label": "战斗设计 + C++实现 + AI + HUD",
        "gs.detail.goal": "设计目标",
        "gs.detail.goal.p": "构建一套以大剑为核心的第三人称动作战斗系统，目标手感参考Dark Souls的Stamina博弈 + Monster Hunter大剑的蓄力打击感 + Elden Ring的Guard Counter设计。核心体验：每一刀都有重量感和决策成本，玩家的每次出招都是一次风险投入。",
        "gs.detail.goal.pillars": "设计支柱：重量感与打击感 / 风险回报的体力经济 / 防守转进攻路径 / 动画取消的操作表达 / 可读的敌人反应",
        "gs.detail.attacks": "攻击体系 \u2014 6种类型",
        "gs.detail.attacks.intro": "系统包含6种攻击类型，每种覆盖不同的战斗场景，通过Stamina消耗和敌人反应类型来区分定位：",
        "gs.detail.light": "轻击（Light Attack）",
        "gs.detail.light.p": "基础连击手段，Stamina消耗最低（10），出招快，支持combo连击。触发敌人Stagger反应。定位是低风险的持续输出手段，用于安全地磨血和维持攻击节奏。",
        "gs.detail.heavy": "重击（Heavy Attack）",
        "gs.detail.heavy.p": "高伤害攻击，Stamina消耗25。触发敌人Stagger反应，但伤害显著高于轻击。设计意图是玩家在识别敌人破绽后的主要惩罚手段\u2014\u2014比轻击投入更大，回报更高。",
        "gs.detail.jump": "跳跃攻击（Jump Attack）",
        "gs.detail.jump.p": "空中触发的攻击，分为轻击和重击两种变体。设计意图是给玩家提供垂直维度的进攻选项，同时作为跳跃闪避后的衔接手段，丰富战斗的空间层次。",
        "gs.detail.shield": "盾击（Shield Attack）",
        "gs.detail.shield.p": "举盾状态下按攻击触发，Stamina消耗30。触发敌人Knockback反应（击飞）。设计意图是给防守型玩家一个从防御直接转为进攻的路径，不需要先放下盾再攻击，并且击飞效果可以制造安全距离。参考Elden Ring的Guard Counter思路。",
        "gs.detail.charge": "蓄力攻击（Charge Attack）",
        "gs.detail.charge.p": "通过AnimBP的Anim Notify锁存触发，Stamina消耗35。触发敌人Knockback反应（击飞）。这是整套攻击体系中风险投入最大的招式\u2014\u2014蓄力期间无法移动和闪避，但命中后获得最强的伤害和击飞效果。参考Monster Hunter大剑的蓄力斩设计哲学：高风险高回报。",
        "gs.detail.roll": "翻滚攻击（Roll Attack）",
        "gs.detail.roll.p": "翻滚结束后可触发的特殊攻击，伤害与轻击相同，触发敌人Stagger反应。设计意图是给玩家一个从防御动作（翻滚闪避）无缝衔接进攻的路径，让战斗流程更加流畅。",
        "gs.detail.cancel": "翻滚与动画取消",
        "gs.detail.cancel.p": "翻滚的输入优先级高于所有攻击，可以取消攻击动画的后摇，实现动画取消（Animation Cancel）。这意味着高水平玩家可以通过\u201c攻击\u2192翻滚取消后摇\u2192翻滚攻击\u2192攻击\u2192翻滚取消\u2026\u2026\u201d的循环在短时间内打出远高于普通连击的伤害。",
        "gs.detail.cancel.callout": "但这里有一个刻意设计的代价：翻滚本身消耗20 Stamina，叠加攻击的Stamina消耗，这套连招的体力消耗极快。玩家需要在\u201c用动画取消打出爆发伤害\u201d和\u201c保留足够体力应对敌人反击\u201d之间权衡。看起来很酷、确实很强，但贪刀的代价是体力见底后无法翻滚逃生。",
        "gs.detail.stance": "武器姿态（1H / 2H）",
        "gs.detail.stance.p": "角色支持单手持剑（1H）和双手持剑（2H）两种武器姿态切换，每种姿态拥有独立的攻击动画集，提供视觉上的差异化体验。",
        "gs.detail.hitstop": "打击反馈系统（HitStop）",
        "gs.detail.hitstop.p": "打击反馈是这套战斗系统的核心手感层。",
        "gs.detail.hitstop.l1": "<strong>HitStop：</strong>命中时敌人时间膨胀降至0.01（几乎冻结），玩家降至0.05（微卡顿），持续0.06秒。制造\u201c刀刃切入\u201d的瞬间顿感，让每一刀都有实打实的重量感。",
        "gs.detail.hitstop.l2": "制造\u201c刀刃切入\u201d的瞬间顿感\u2014\u2014每一刀都有实打实的重量感",
        "gs.detail.stamina": "Stamina系统",
        "gs.detail.stamina.p": "采用Dark Souls式Stamina Gating：体力为0时完全封锁所有攻击和翻滚，但只要有1点体力就可以出招（出完可能归零）。这创造了一个经典的魂系博弈\u2014\u2014玩家需要在\u201c多打一刀\u201d和\u201c留体力保命\u201d之间做决策。",
        "gs.detail.sta.light": "轻击",
        "gs.detail.sta.roll": "翻滚",
        "gs.detail.sta.heavy": "重击",
        "gs.detail.sta.shield": "盾击",
        "gs.detail.sta.charge": "蓄力攻击",
        "gs.detail.sta.sprint": "跑步",
        "gs.detail.stamina.callout": "回复机制：停止消耗动作后等待2秒，以30/秒的速度回复。攻击/跑步/翻滚期间回复计时器重置，不能一边连击一边回体力。",
        "gs.detail.ai": "敌人AI与反应系统",
        "gs.detail.ai.bt": "行为树AI",
        "gs.detail.ai.bt.p": "敌人AI通过Behavior Tree驱动，BTService每0.25秒进行球形检测，在感知范围内锁定玩家并更新距离。攻击决策有30%概率选择重击动画，否则使用普通攻击，先面向目标再播放Montage。被击晕或死亡时直接中断行为。",
        "gs.detail.ai.tag": "GameplayTag驱动的反应系统",
        "gs.detail.ai.tag.p": "敌人的受击反应通过GAS的GameplayEffect Asset Tags驱动。玩家武器命中后应用对应的GE，GE携带的Tag决定敌人的反应类型：",
        "gs.detail.ai.tag.stagger": "<strong>Stagger</strong>（受击硬直 + Montage）\u2014\u2014 由轻击、重击、跳跃攻击、翻滚攻击触发",
        "gs.detail.ai.tag.kb": "<strong>Knockback</strong>（Montage + LaunchCharacter）\u2014\u2014 由盾击、蓄力攻击触发",
        "gs.detail.ai.tag.adv": "这套设计的优势是：在GE蓝图里配Tag就能决定反应类型，新增攻击或调整反应只需修改数据资产，不用改C++代码。",
        "gs.detail.tech": "技术架构",
        "gs.detail.tech.engine": "<strong>引擎：</strong>UE5 C++ + 蓝图",
        "gs.detail.tech.gas": "<strong>战斗框架：</strong>Gameplay Ability System（ASC挂载在PlayerState，支持多人持久化）",
        "gs.detail.tech.ai": "<strong>敌人AI：</strong>Behavior Tree + BTService检测 + BTTask攻击",
        "gs.detail.tech.react": "<strong>反应系统：</strong>GE Asset Tags \u2192 Delegate回调 \u2192 统一HandleReaction()",
        "gs.detail.tech.anim": "<strong>动画：</strong>AnimBP状态机（Idle/Walk、JumpStart、Fall、Land）+ GameplayTag驱动状态切换",
        "gs.detail.tech.hud": "<strong>HUD：</strong>C++驱动的血量/体力UI",

        "hb.desc": "操控你的仓鼠球推开敌人，在充满挑战的关卡中取得胜利。",
        "hb.detail.desc": "3天Game Jam物理碰撞仓鼠对战游戏。操控仓鼠球，收集瓜子增加质量，将敌人撞飞下平台。可在浏览器游玩。",
        "hb.detail.time.val": "3天",
        "hb.detail.time.label": "Game Jam",
        "hb.detail.role.val": "玩法设计 + C#实现 + AI",
        "hb.detail.role.label": "我的职责",
        "hb.detail.gameplay": "核心玩法",
        "hb.detail.gameplay.p": "双人球形仓鼠对撞游戏，胜利条件是将对方撞下平台。玩家通过收集场地中的瓜子喂给仓鼠来增加物理质量，质量越大碰撞优势越大。",
        "hb.detail.gameplay.loop": "核心循环：收集瓜子 \u2192 喂食增重 \u2192 碰撞占优 \u2192 撞飞对手",
        "hb.detail.mass": "质量系统设计",
        "hb.detail.mass.p": "质量增加后同时影响多个维度：碰撞弹飞力随质量比增大、破墙伤害 = 质量 \u00d7 速度、移动力随质量指数增长（但速度上限封顶）、质量达到7.0时外观从小仓鼠切换为大仓鼠。",
        "hb.detail.mass.decay": "关键设计：质量会持续衰减（每秒-0.1，下限0.5）。玩家不能囤够质量后就无脑冲撞，必须在\u201c维持体重\u201d和\u201c发起进攻\u201d之间持续做决策，形成吃\u2192打\u2192吃的紧张循环。",
        "hb.detail.ai": "敌人AI",
        "hb.detail.ai.p": "设计了三种敌人类型，均基于物理力驱动而非NavMesh：",
        "hb.detail.ai.basic": "<strong>基础敌人：</strong>朝玩家方向AddForce追击",
        "hb.detail.ai.pirate": "<strong>海盗仓鼠：</strong>沿预设路径点移动后从大炮发射向玩家（Trigger碰撞驱动的状态机 + 物理力移动）",
        "hb.detail.ai.boss": "<strong>LV1 Boss：</strong>在距离阈值内发起有冷却的冲锋",
        "gs.title": "大剑战斗系统",
        "gs.desc": "黑暗之魂风格。6种攻击类型、受击停顿+镜头震动、行为树AI（硬直/击退/眩晕）、GAS属性系统。7天独立完成。",
        "dnd.title": "Dungeons & Drinks",
        "dnd.detail.desc": "Dungeons & Drinks\u662f\u4e00\u6b3eRoguelite\u52a8\u4f5c + \u9152\u9986\u7ecf\u8425\u7684\u53cc\u5faa\u73af\u624b\u6e38\u3002\u6218\u6597\u5faa\u73af\uff08Roguelite\uff09\u63d0\u4f9b\u6750\u6599\u548c\u8d27\u5e01\uff0c\u7ecf\u8425\u5faa\u73af\uff08Tycoon\uff09\u5c06\u8d44\u6e90\u8f6c\u5316\u4e3a\u6c38\u4e45\u6218\u529b\u63d0\u5347\u548c\u88ab\u52a8\u6536\u5165\uff0c\u4e24\u4e2a\u5faa\u73af\u4e92\u76f8\u5582\u517b\u3002\u6211\u8d1f\u8d23\u8bbe\u8ba1\u6574\u4e2aTycoon\u7ecf\u8425\u7cfb\u7edf\u53ca\u6d3b\u52a8\u7cfb\u7edf\u3002",
        "dnd.detail.team.val": "3\u4eba\u56e2\u961f",
        "dnd.detail.team.label": "\u56e2\u961f",
        "dnd.detail.role.val": "Tycoon + \u4e8b\u4ef6\u7cfb\u7edf\u8bbe\u8ba1",
        "dnd.detail.role.label": "\u6211\u7684\u804c\u8d23",
        "dnd.detail.loop": "\u53cc\u5faa\u73af\u7ecf\u6d4e\u8bbe\u8ba1",
        "dnd.detail.loop.p": "\u6e38\u620f\u7684\u6838\u5fc3\u7ed3\u6784\u662f\u4e24\u4e2a\u5faa\u73af\u7684\u4e92\u54fa\u5173\u7cfb\uff1a",
        "dnd.detail.loop.combat": "<strong>\u6218\u6597\u5faa\u73af \u2192 \u7ecf\u8425\u5faa\u73af\uff1a</strong>\u73a9\u5bb6\u901a\u8fc7Roguelite\u6218\u6597\uff08\u6bcf\u65e5\u4e0a\u96503\u6b21\uff09\u83b7\u53d6\u6750\u6599\u548c\u8d27\u5e01\uff0c\u6bcf20\u6ce2\u654c\u4eba\u6389\u843d\u9012\u589e\u4ef7\u503c\u7684\u6750\u6599\uff0c\u7528\u4e8e\u9152\u9986\u7684\u5347\u7ea7\u548c\u6269\u5efa\u3002",
        "dnd.detail.loop.manage": "<strong>\u7ecf\u8425\u5faa\u73af \u2192 \u6218\u6597\u5faa\u73af\uff1a</strong>\u9152\u9986\u5347\u7ea7\u63d0\u4f9b\u6c38\u4e45\u6218\u6597\u5c5e\u6027\u52a0\u6210\uff08\u653b\u51fb\u529b\u3001HP\uff09\uff1b\u96c7\u4f63\u7684\u5458\u5de5\u5404\u81ea\u62e5\u6709\u62db\u724c\u996e\u54c1\uff0c\u4f5c\u4e3a\u6218\u6597\u4e2d\u7684\u4e00\u6b21\u6027\u6d88\u8017\u9053\u5177\u63d0\u4f9b\u72ec\u7279\u80fd\u529b\u3002\u9152\u9986\u540c\u65f6\u4ea7\u751f\u88ab\u52a8\u6536\u5165\uff0c\u7528\u4e8e\u8fdb\u4e00\u6b65\u5347\u7ea7\u3002",
        "dnd.detail.loop.intent": "\u8bbe\u8ba1\u610f\u56fe\uff1a\u6218\u6597\u63d0\u4f9b\u77ed\u671f\u523a\u6fc0\u548c\u6311\u6218\u611f\uff0c\u7ecf\u8425\u63d0\u4f9b\u957f\u671f\u6210\u957f\u611f\u548c\u653e\u677e\u611f\uff0c\u4e24\u8005\u7684\u8282\u594f\u4e92\u8865\uff0c\u907f\u514d\u5355\u4e00\u5faa\u73af\u7684\u75b2\u52b3\u3002",
        "dnd.detail.tycoon": "Tycoon\u7cfb\u7edf\u8bbe\u8ba1",
        "dnd.detail.staff": "\u5458\u5de5\u7cfb\u7edf",
        "dnd.detail.staff.p": "\u6bcf\u4e2a\u5458\u5de5\u62e5\u6709\u72ec\u7acb\u7684\u62db\u724c\u996e\u54c1\uff0c\u996e\u54c1\u5728Roguelite\u6218\u6597\u4e2d\u4f5c\u4e3a\u4e00\u6b21\u6027\u6d88\u8017\u9053\u5177\u4f7f\u7528\uff0c\u63d0\u4f9b\u4e0d\u540c\u7684\u6218\u6597buff\u3002\u5458\u5de5\u7684\u89e3\u9501\u548c\u5347\u7ea7\u901a\u8fc7\u6218\u6597\u6750\u6599\u9a71\u52a8\uff0c\u5f62\u6210\u201c\u6253\u2192\u89e3\u9501\u2192\u6253\u5f97\u66f4\u597d\u2192\u89e3\u9501\u66f4\u591a\u201d\u7684\u6b63\u53cd\u9988\u3002",
        "dnd.detail.upgrade": "\u5347\u7ea7\u7cfb\u7edf",
        "dnd.detail.upgrade.p": "\u9152\u9986\u8bbe\u65bd\u5347\u7ea7\u6d88\u8017\u6750\u6599\u548c\u8d27\u5e01\uff0c\u5347\u7ea7\u540e\u63d0\u4f9b\u4e24\u7c7b\u6536\u76ca\uff1a\u6c38\u4e45\u6218\u6597\u5c5e\u6027\u52a0\u6210\uff08\u76f4\u63a5\u63d0\u5347\u89d2\u8272\u6218\u529b\uff09\u548c\u88ab\u52a8\u6536\u5165\u63d0\u5347\uff08\u52a0\u901f\u8d44\u6e90\u79ef\u7d2f\uff09\u3002\u5347\u7ea7\u9700\u8981\u771f\u5b9e\u65f6\u95f4\u7b49\u5f85\uff0c\u6784\u6210\u81ea\u7136\u7684\u8282\u594f\u5361\u70b9\u3002",
        "dnd.detail.tier": "\u5206\u5c42\u7ecf\u6d4e\u5e73\u8861\uff08Tiered Economy\uff09",
        "dnd.detail.tier.p": "Tycoon\u7684\u5347\u7ea7\u4f53\u7cfb\u91c7\u75286\u5c42\uff08Tier\uff09\u9012\u8fdb\u7ed3\u6784\uff0c\u6bcf\u5c42\u7684\u8d2d\u4e70\u6210\u672c\u3001\u4ea7\u51fa\u6548\u7387\u548c\u6295\u8d44\u56de\u62a5\u7387\uff08ROI\uff09\u7ecf\u8fc7\u91cf\u5316\u8bbe\u8ba1\uff0c\u786e\u4fdd\u73a9\u5bb6\u5728\u6bcf\u4e2a\u9636\u6bb5\u90fd\u6709\u6e05\u6670\u7684\u51b3\u7b56\u8282\u594f\u3002",
        "dnd.detail.tier.logic": "\u8bbe\u8ba1\u903b\u8f91\uff1a\u4f4e\u5c42\u7ea7\uff08Tier 1-2\uff09\u56de\u672c\u5feb\u3001\u4e0a\u624b\u6210\u672c\u4f4e\uff0c\u4f46\u968f\u7740\u91cd\u590d\u8d2d\u4e70\u6b21\u6570\u589e\u52a0ROI\u6025\u5267\u6076\u5316\uff1b\u9ad8\u5c42\u7ea7\uff08Tier 5-6\uff09\u521d\u59cb\u6295\u5165\u5927\u3001\u56de\u672c\u6162\uff0c\u4f46\u8fb9\u9645\u6536\u76ca\u8870\u51cf\u66f4\u6e29\u548c\u3002\u8fd9\u81ea\u7136\u5236\u9020\u4e86\u201c\u505c\u6b62\u8d2d\u4e70\u4f4e\u5c42\u2192\u6512\u94b1\u5347\u9ad8\u5c42\u201d\u7684\u51b3\u7b56\u62d0\u70b9\uff0c\u5f62\u6210\u5065\u5eb7\u7684idle game\u5faa\u73af\u3002",
        "dnd.detail.monetize": "\u53d8\u73b0\u5361\u70b9\u8bbe\u8ba1",
        "dnd.detail.monetize.p": "\u5728Tycoon\u7cfb\u7edf\u4e2d\u5d4c\u5165\u4e86\u4e09\u4e2a\u6838\u5fc3\u53d8\u73b0\u70b9\uff0c\u5206\u522b\u5bf9\u5e94\u4e0d\u540c\u7684\u73a9\u5bb6\u4ed8\u8d39\u52a8\u673a\uff1a",
        "dnd.detail.monetize.daily": "<strong>\u6bcf\u65e5\u6218\u6597\u6b21\u6570\u9650\u5236</strong>\uff083\u6b21/\u5929\uff0c\u53ef\u4ed8\u8d39\u8d2d\u4e70\u989d\u5916\u6b21\u6570\uff09\u2014\u2014 \u8fdb\u5ea6\u578b",
        "dnd.detail.monetize.revive": "<strong>\u6218\u6597\u4e2d\u590d\u6d3b</strong>\uff08\u4ed8\u8d39\uff09\u2014\u2014 \u632b\u8d25\u578b",
        "dnd.detail.monetize.speed": "<strong>\u5347\u7ea7\u65f6\u95f4\u52a0\u901f</strong>\uff08\u4ed8\u8d39\u8df3\u8fc7\u7b49\u5f85\uff09\u2014\u2014 \u8010\u5fc3\u578b",
        "dnd.detail.event": "\u4e8b\u4ef6\u8bbe\u8ba1 \u2014 The Infernal Happy Hour",
        "dnd.detail.event.p": "\u6211\u72ec\u7acb\u8bbe\u8ba1\u4e86\u4e00\u4e2a\u4e3a\u671f7\u5929\u7684\u9650\u65f6\u6d3b\u52a8\uff0c\u5305\u542b\u5b8c\u6574\u7684\u4e8b\u4ef6\u5faa\u73af\u3001\u8fdb\u5ea6\u89c4\u5212\u3001\u73a9\u5bb6\u5206\u5c42\u548c\u53d8\u73b0\u7b56\u7565\u3002",
        "dnd.detail.event.loop": "\u4e8b\u4ef6\u5faa\u73af",
        "dnd.detail.event.loop.p": "\u6d3b\u52a8\u5f15\u5165\u4e13\u5c5e\u4e8b\u4ef6\u8d27\u5e01\uff08Lava Coin\uff09\u3001\u9650\u65f6\u654c\u4eba\uff08\u706b\u7cfb\uff09\u3001\u9650\u65f6\u996e\u54c1\uff08Hellfire Drinks\uff09\u548c\u4e13\u5c5e\u5956\u52b1\u3002\u4e8b\u4ef6\u5faa\u73af\u5d4c\u5957\u5728\u6838\u5fc3\u53cc\u5faa\u73af\u4e4b\u4e0a\uff1a\u5b8c\u6210Infernal Challenge\u83b7\u53d6Lava Coin\u548c\u5730\u72f1\u98df\u6750 \u2192 \u917f\u9020Hellfire Drinks\u83b7\u53d6\u6218\u6597/\u7ecf\u8425buff \u2192 \u6d88\u8d39Lava Coin\u5151\u6362\u9650\u5b9a\u5956\u52b1\u3002",
        "dnd.detail.event.prog": "7\u5929\u8fdb\u5ea6\u89c4\u5212",
        "dnd.detail.event.prog.p": "\u6bcf\u5929\u89e3\u9501\u65b0\u5185\u5bb9\u4fdd\u6301\u65b0\u9c9c\u611f\uff1aDay 1\u65b0\u914d\u65b9\u3001Day 2\u65b0\u98df\u6750\u3001Day 4 Boss\u6218\u3001Day 7\u89e3\u9501\u9650\u5b9a\u5458\u5de5\u3002\u6bcf\u65e5\u767b\u5f55\u8d60\u9001\u514d\u8d39\u5956\u52b1\u4fdd\u5e95\u7559\u5b58\u3002",
        "dnd.detail.event.seg": "\u73a9\u5bb6\u5206\u5c42\u8bbe\u8ba1",
        "dnd.detail.event.seg.p": "\u6839\u636e\u4e09\u6863\u73a9\u5bb6\u6295\u5165\u7a0b\u5ea6\u8bbe\u8ba1\u4e86\u5dee\u5f02\u5316\u7684\u5b8c\u6210\u5ea6\u76ee\u6807\uff1a",
        "dnd.detail.event.seg.goal": "\u8bbe\u8ba1\u76ee\u6807\uff1aLowkey\u73a9\u5bb6\u80fd\u62ff\u5230\u6838\u5fc3\u5956\u52b1\u4e0d\u4f1a\u611f\u5230\u88ab\u6392\u65a5\uff0cEngaged\u73a9\u5bb6\u521a\u597d\u5b8c\u6210\u5168\u90e8\u4e8b\u4ef6\u5185\u5bb9\uff0cIntense\u73a9\u5bb6\u63d0\u524d\u5b8c\u6210\u5e76\u83b7\u5f97\u5168\u90e8\u6536\u96c6\u54c1\u4f5c\u4e3a\u989d\u5916\u6ee1\u8db3\u611f\u3002",
        "dnd.detail.event.pay": "\u4e8b\u4ef6\u53d8\u73b0",
        "dnd.detail.ftue": "FTUE \u2014 \u65b0\u624b\u5f15\u5bfc",
        "dnd.detail.ftue.p": "\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e86\u5b8c\u6574\u7684\u65b0\u624b\u5f15\u5bfc\u6d41\u7a0b\u3002FTUE\u5f15\u5bfc\u73a9\u5bb6\u4f53\u9a8c\u6838\u5fc3\u53cc\u5faa\u73af\u2014\u2014\u5148\u8fdb\u884c\u4e00\u6b21\u6559\u5b66\u6027Roguelite\u6218\u6597\u83b7\u53d6\u6750\u6599\uff0c\u7136\u540e\u5b66\u4e60\u9152\u9986\u7ecf\u8425\u57fa\u7840\u2014\u2014\u5728\u653e\u5f00\u5b8c\u6574\u6e38\u620f\u4e4b\u524d\u5efa\u7acb\u8282\u594f\u611f\u3002",
        "dnd.detail.event.pay.p": "Infernal Pass\uff08$4.99\uff09\u53cc\u500dLava Coin + \u4e13\u5c5e\u5956\u52b1\u7ebf\u3001\u917f\u9020\u52a0\u901f\uff08\u4ed8\u8d39\u8df3\u8fc72\u5c0f\u65f6\u7b49\u5f85\uff09\u3002\u53d8\u73b0\u8bbe\u8ba1\u4e0d\u963b\u65ad\u514d\u8d39\u73a9\u5bb6\u7684\u6838\u5fc3\u4f53\u9a8c\uff0c\u4ed8\u8d39\u73a9\u5bb6\u83b7\u5f97\u52a0\u901f\u548c\u989d\u5916\u6536\u96c6\u54c1\u3002",
        "dnd.desc": "F2P手游。完整GDD、新手引导（FTUE）、付费活动设计。",
        "placeholder.screenshot": "截图即将上传",
        "placeholder.footage": "视频即将上传",

        "tag.solo": "独立开发",
        "tag.engdes": "工程 / 策划",
        "tag.sysdes": "系统策划",
        "tag.bossui": "Boss战斗策划 / UI",
        "tag.course": "课程项目",

        "about.title": "简历",
        "about.resume": "下载简历 (EN)",
        "about.resume.zh": "下载简历 (中文)",
        "footer.resume": "简历",

        "nav.home": "首页",
        "nav.about": "关于我",
        "nav.email": "邮箱",
        "nav.back": "\u2190 返回主页",
        "nav.cat.shipped": "已发行游戏",
        "nav.cat.protos": "原型 & Demo",
        "nav.dd.greatsword": "大剑战斗系统"
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
