/* Scroll reveal */
(function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(function(el) { observer.observe(el); });
})();

/* Combat VFX — embers, slash trails, hit sparks */
(function() {
    var canvas = document.getElementById('combat-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var w, h;
    var embers = [];
    var slashes = [];
    var sparks = [];
    var mouse = { x: -1000, y: -1000, px: -1000, py: -1000 };
    var lastTime = 0;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    /* Track mouse for slash trails */
    document.addEventListener('mousemove', function(e) {
        mouse.px = mouse.x;
        mouse.py = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        var dx = mouse.x - mouse.px;
        var dy = mouse.y - mouse.py;
        var speed = Math.sqrt(dx * dx + dy * dy);

        /* Create slash trail segments when moving fast enough */
        if (speed > 8) {
            slashes.push({
                x1: mouse.px, y1: mouse.py,
                x2: mouse.x, y2: mouse.y,
                life: 1,
                width: Math.min(speed * 0.15, 4),
                speed: speed
            });

            /* Spawn sparks at cursor on fast moves */
            if (speed > 30) {
                for (var s = 0; s < 3; s++) {
                    sparks.push({
                        x: mouse.x,
                        y: mouse.y,
                        vx: (Math.random() - 0.5) * 6,
                        vy: (Math.random() - 0.5) * 6 - 2,
                        life: 1,
                        size: Math.random() * 2.5 + 0.5,
                        color: Math.random() > 0.5 ? 'primary' : 'gold'
                    });
                }
            }
        }
    });

    /* Spawn embers continuously */
    function spawnEmber() {
        embers.push({
            x: Math.random() * w,
            y: h + 10,
            vx: (Math.random() - 0.5) * 0.4,
            vy: -(Math.random() * 0.8 + 0.3),
            size: Math.random() * 2.2 + 0.5,
            life: 1,
            decay: Math.random() * 0.002 + 0.001,
            flicker: Math.random() * Math.PI * 2,
            type: Math.random()
        });
    }

    /* Initial ember population */
    for (var i = 0; i < 40; i++) {
        spawnEmber();
        embers[i].y = Math.random() * h;
        embers[i].life = Math.random();
    }

    /* Entrance slash — dramatic diagonal slash on load */
    var entranceSlash = { progress: 0, active: true };

    function draw(time) {
        var dt = Math.min((time - lastTime) / 16, 3);
        lastTime = time;
        ctx.clearRect(0, 0, w, h);

        /* Spawn new embers */
        if (embers.length < 60 && Math.random() < 0.15) spawnEmber();

        /* Draw embers */
        for (var i = embers.length - 1; i >= 0; i--) {
            var e = embers[i];
            e.x += e.vx * dt;
            e.y += e.vy * dt;
            e.life -= e.decay * dt;
            e.flicker += 0.05 * dt;

            if (e.life <= 0) { embers.splice(i, 1); continue; }

            var flicker = 0.5 + Math.sin(e.flicker) * 0.5;
            var alpha = e.life * flicker * 0.6;
            var r, g, b;

            if (e.type < 0.5) {
                /* Orange ember */
                r = 255; g = Math.round(140 + e.life * 60); b = 50;
            } else if (e.type < 0.8) {
                /* Indigo ember */
                r = 129; g = 140; b = 248;
            } else {
                /* Gold ember */
                r = 245; g = 158; b = 11;
            }

            ctx.beginPath();
            ctx.arc(e.x, e.y, e.size * e.life, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
            ctx.fill();

            /* Glow */
            if (e.size > 1.2) {
                ctx.beginPath();
                ctx.arc(e.x, e.y, e.size * e.life * 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + (alpha * 0.12) + ')';
                ctx.fill();
            }
        }

        /* Draw slash trails */
        for (var j = slashes.length - 1; j >= 0; j--) {
            var sl = slashes[j];
            sl.life -= 0.035 * dt;
            if (sl.life <= 0) { slashes.splice(j, 1); continue; }

            ctx.beginPath();
            ctx.moveTo(sl.x1, sl.y1);
            ctx.lineTo(sl.x2, sl.y2);

            var grad = ctx.createLinearGradient(sl.x1, sl.y1, sl.x2, sl.y2);
            grad.addColorStop(0, 'rgba(99, 102, 241, ' + (sl.life * 0.1) + ')');
            grad.addColorStop(0.5, 'rgba(129, 140, 248, ' + (sl.life * 0.7) + ')');
            grad.addColorStop(1, 'rgba(34, 211, 238, ' + (sl.life * 0.3) + ')');

            ctx.strokeStyle = grad;
            ctx.lineWidth = sl.width * sl.life;
            ctx.lineCap = 'round';
            ctx.stroke();

            /* Slash glow */
            ctx.strokeStyle = 'rgba(129, 140, 248, ' + (sl.life * 0.15) + ')';
            ctx.lineWidth = sl.width * sl.life * 4;
            ctx.stroke();
        }

        /* Draw sparks */
        for (var k = sparks.length - 1; k >= 0; k--) {
            var sp = sparks[k];
            sp.x += sp.vx * dt;
            sp.y += sp.vy * dt;
            sp.vy += 0.15 * dt;
            sp.life -= 0.03 * dt;
            if (sp.life <= 0) { sparks.splice(k, 1); continue; }

            var sr, sg, sb;
            if (sp.color === 'primary') {
                sr = 129; sg = 140; sb = 248;
            } else {
                sr = 245; sg = 180; sb = 50;
            }

            ctx.beginPath();
            ctx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + sr + ',' + sg + ',' + sb + ',' + sp.life + ')';
            ctx.fill();
        }

        /* Entrance slash animation */
        if (entranceSlash.active) {
            entranceSlash.progress += 0.025 * dt;
            if (entranceSlash.progress >= 1) {
                entranceSlash.active = false;
            } else {
                var p = entranceSlash.progress;
                var ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
                var slashLen = ease;

                var sx = w * 0.15;
                var sy = h * 0.2;
                var ex = w * 0.85;
                var ey = h * 0.45;

                var cx = sx + (ex - sx) * slashLen;
                var cy = sy + (ey - sy) * slashLen;

                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(cx, cy);

                var alpha2 = (1 - p) * 0.8;
                var grd = ctx.createLinearGradient(sx, sy, cx, cy);
                grd.addColorStop(0, 'rgba(99, 102, 241, 0)');
                grd.addColorStop(0.3, 'rgba(129, 140, 248, ' + alpha2 + ')');
                grd.addColorStop(0.7, 'rgba(255, 255, 255, ' + (alpha2 * 0.9) + ')');
                grd.addColorStop(1, 'rgba(34, 211, 238, ' + (alpha2 * 0.6) + ')');

                ctx.strokeStyle = grd;
                ctx.lineWidth = 3 * (1 - p);
                ctx.lineCap = 'round';
                ctx.stroke();

                /* Slash glow */
                ctx.strokeStyle = 'rgba(129, 140, 248, ' + (alpha2 * 0.2) + ')';
                ctx.lineWidth = 20 * (1 - p);
                ctx.stroke();

                /* Slash spark shower at tip */
                if (Math.random() < 0.6) {
                    sparks.push({
                        x: cx, y: cy,
                        vx: (Math.random() - 0.3) * 4,
                        vy: (Math.random() - 0.5) * 4 - 1,
                        life: 1,
                        size: Math.random() * 2 + 1,
                        color: Math.random() > 0.3 ? 'primary' : 'gold'
                    });
                }
            }
        }

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
