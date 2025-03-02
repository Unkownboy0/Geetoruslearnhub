(function(g) {
    var window = this;
    'use strict';
    var xv = function(k) {
            g.rN(k, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.kn()).toString(36));
            return k
        },
        kG = function(k, p, t) {
            Array.isArray(t) || (t = [String(t)]);
            g.Oe_(k.C, p, t)
        },
        piW = function(k) {
            if (k instanceof g.Jf) return k;
            if (typeof k.Qe == "function") return k.Qe(!1);
            if (g.uq(k)) {
                var p = 0,
                    t = new g.Jf;
                t.next = function() {
                    for (;;) {
                        if (p >= k.length) return g.db;
                        if (p in k) return g.oQ(k[p++]);
                        p++
                    }
                };
                return t
            }
            throw Error("Not implemented");
        },
        t5Q = function(k, p, t) {
            if (g.uq(k)) g.y1(k, p, t);
            else
                for (k = piW(k);;) {
                    var J = k.next();
                    if (J.done) break;
                    p.call(t, J.value, void 0, k)
                }
        },
        JqW = function(k, p) {
            var t = [];
            t5Q(p, function(J) {
                try {
                    var q = g.Lv.prototype.Y.call(this, J, !0)
                } catch (F) {
                    if (F == "Storage: Invalid value was encountered") return;
                    throw F;
                }
                q === void 0 ? t.push(J) : g.dRi(q) && t.push(J)
            }, k);
            return t
        },
        olR = function(k, p) {
            JqW(k, p).forEach(function(t) {
                g.Lv.prototype.remove.call(this, t)
            }, k)
        },
        qBC = function(k) {
            if (k.gy) {
                if (k.gy.locationOverrideToken) return {
                    locationOverrideToken: k.gy.locationOverrideToken
                };
                if (k.gy.latitudeE7 != null && k.gy.longitudeE7 != null) return {
                    latitudeE7: k.gy.latitudeE7,
                    longitudeE7: k.gy.longitudeE7
                }
            }
            return null
        },
        FxA = function(k, p) {
            g.Kc(k, p) || k.push(p)
        },
        $9a = function(k) {
            var p = 0,
                t;
            for (t in k) p++;
            return p
        },
        d9c = function(k, p) {
            return g.LE(k, p)
        },
        ElC = function(k) {
            try {
                return g.B9.JSON.parse(k)
            } catch (p) {}
            k = String(k);
            if (/^\s*$/.test(k) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(k.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + k + ")")
            } catch (p) {}
            throw Error("Invalid JSON string: " + k);
        },
        pM = function(k) {
            if (g.B9.JSON) try {
                return g.B9.JSON.parse(k)
            } catch (p) {}
            return ElC(k)
        },
        SBn = function(k) {
            if (k.Ve && typeof k.Ve == "function") return k.Ve();
            if (typeof Map !== "undefined" && k instanceof Map || typeof Set !== "undefined" && k instanceof Set) return Array.from(k.values());
            if (typeof k === "string") return k.split("");
            if (g.uq(k)) {
                for (var p = [], t = k.length, J = 0; J < t; J++) p.push(k[J]);
                return p
            }
            return g.WQ(k)
        },
        U94 = function(k) {
            if (k.zS && typeof k.zS == "function") return k.zS();
            if (!k.Ve || typeof k.Ve != "function") {
                if (typeof Map !== "undefined" && k instanceof Map) return Array.from(k.keys());
                if (!(typeof Set !== "undefined" && k instanceof Set)) {
                    if (g.uq(k) || typeof k === "string") {
                        var p = [];
                        k = k.length;
                        for (var t = 0; t < k; t++) p.push(t);
                        return p
                    }
                    return g.DV(k)
                }
            }
        },
        f8L = function(k, p) {
            if (k.forEach && typeof k.forEach == "function") k.forEach(p, void 0);
            else if (g.uq(k) || typeof k === "string") Array.prototype.forEach.call(k, p, void 0);
            else
                for (var t = U94(k), J = SBn(k), q = J.length, F = 0; F < q; F++) p.call(void 0, J[F], t && t[F], k)
        },
        bFa = function(k, p, t, J) {
            var q = new g.Sv(null);
            k && g.U8(q, k);
            p && g.fI(q, p);
            t && g.bp(q, t);
            J && (q.Y = J);
            return q
        },
        ND4 = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/channel/opened", g.TK("channel_type"))
        },
        yqA = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/channel/closed", g.TK("channel_type"))
        },
        YBQ = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/channel/message_received", g.TK("channel_type"))
        },
        TDA = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/channel/error", g.TK("channel_type"))
        },
        rqW = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        ZFc = function() {
            var k = tQ();
            this.Y = k;
            k.X3("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        Cw9 = function(k, p) {
            return new g.x_(k, p)
        },
        JQ = function(k, p) {
            return Object.prototype.hasOwnProperty.call(k, p)
        },
        AqA = function(k, p) {
            return k === p
        },
        oJ = function(k, p) {
            this.Y = {};
            this.T = [];
            this.N5 = this.size = 0;
            var t = arguments.length;
            if (t > 1) {
                if (t % 2) throw Error("Uneven number of arguments");
                for (var J = 0; J < t; J += 2) this.set(arguments[J], arguments[J + 1])
            } else if (k)
                if (k instanceof oJ)
                    for (t = k.zS(), J = 0; J < t.length; J++) this.set(t[J], k.get(t[J]));
                else
                    for (J in k) this.set(J, k[J])
        },
        q$ = function(k) {
            if (k.size != k.T.length) {
                for (var p = 0, t = 0; p < k.T.length;) {
                    var J = k.T[p];
                    JQ(k.Y, J) && (k.T[t++] = J);
                    p++
                }
                k.T.length = t
            }
            if (k.size != k.T.length) {
                p = {};
                for (J = t = 0; t < k.T.length;) {
                    var q = k.T[t];
                    JQ(p, q) || (k.T[J++] = q, p[q] = 1);
                    t++
                }
                k.T.length = J
            }
        },
        FP = function(k) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new oJ;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            k && (this.id = k.id || k.name, this.name = k.name, this.clientName = k.clientName ? k.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = k.app, this.type = k.type || "REMOTE_CONTROL", this.username = k.user || "", this.avatar = k.userAvatarUri || "", this.obfuscatedGaiaId = k.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = k.ownerObfuscatedGaiaId || "", this.theme = k.theme || "u", m9J(this, k.capabilities || ""), V5S(this, k.compatibleSenderThemes || ""), hKq(this, k.experiments || ""), this.brand = k.brand || "", this.model = k.model || "", this.year = k.year || 0, this.os = k.os || "", this.osVersion = k.osVersion || "", this.chipset = k.chipset || "", this.mdxDialServerType = k.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", k = k.deviceInfo) && (k = JSON.parse(k), this.brand = k.brand || "", this.model = k.model || "", this.year = k.year || 0, this.os = k.os || "", this.osVersion = k.osVersion || "", this.chipset = k.chipset || "", this.clientName = k.clientName ? k.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = k.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        m9J = function(k, p) {
            k.capabilities.clear();
            g.dZ(p.split(","), g.xh(d9c, a8n)).forEach(function(t) {
                k.capabilities.add(t)
            })
        },
        V5S = function(k, p) {
            k.compatibleSenderThemes.clear();
            g.dZ(p.split(","), g.xh(d9c, M5Q)).forEach(function(t) {
                k.compatibleSenderThemes.add(t)
            })
        },
        hKq = function(k, p) {
            k.experiments.clear();
            p.split(",").forEach(function(t) {
                k.experiments.add(t)
            })
        },
        $G = function(k) {
            k = k || {};
            this.name = k.name || "";
            this.id = k.id || k.screenId || "";
            this.token = k.token || k.loungeToken || "";
            this.uuid = k.uuid || k.dialId || "";
            this.idType = k.screenIdType || "normal"
        },
        da = function(k, p) {
            return !!p && (k.id == p || k.uuid == p)
        },
        glS = function(k) {
            return {
                name: k.name,
                screenId: k.id,
                loungeToken: k.token,
                dialId: k.uuid,
                screenIdType: k.idType
            }
        },
        u3J = function(k) {
            return new $G(k)
        },
        l8c = function(k) {
            return Array.isArray(k) ? g.DR(k, u3J) : []
        },
        E4 = function(k) {
            return k ? '{name:"' + k.name + '",id:' + k.id.substr(0, 6) + "..,token:" + ((k.token ? ".." + k.token.slice(-6) : "-") + ",uuid:" + (k.uuid ? ".." + k.uuid.slice(-6) : "-") + ",idType:" + k.idType + "}") : "null"
        },
        j3q = function(k) {
            return Array.isArray(k) ? "[" + g.DR(k, E4).join(",") + "]" : "null"
        },
        OFL = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(k) {
                    var p = Math.random() * 16 | 0;
                    return (k == "x" ? p : p & 3 | 8).toString(16)
                })
        },
        Kx9 = function(k) {
            return g.DR(k, function(p) {
                return {
                    key: p.id,
                    name: p.name
                }
            })
        },
        HFW = function(k, p) {
            return g.j9(k, function(t) {
                return t || p ? !t != !p ? !1 : t.id == p.id : !0
            })
        },
        Ss = function(k, p) {
            return g.j9(k, function(t) {
                return da(t, p)
            })
        },
        x9a = function() {
            var k = (0, g.LG)();
            k && olR(k, k.T.Qe(!0))
        },
        U4 = function() {
            var k = g.nG("yt-remote-connected-devices") || [];
            g.SD(k);
            return k
        },
        kQR = function(k) {
            if (k.length == 0) return [];
            var p = k[0].indexOf("#"),
                t = p == -1 ? k[0] : k[0].substring(0, p);
            return g.DR(k, function(J, q) {
                return q == 0 ? J : J.substring(t.length)
            })
        },
        pwL = function(k) {
            g.cz("yt-remote-connected-devices", k, 86400)
        },
        fM = function() {
            if (tNa) return tNa;
            var k = g.nG("yt-remote-device-id");
            k || (k = OFL(), g.cz("yt-remote-device-id", k, 31536E3));
            for (var p = U4(), t = 1, J = k; g.Kc(p, J);) t++, J = k + "#" + t;
            return tNa = J
        },
        JeA = function() {
            var k = U4(),
                p = fM();
            g.ik() && g.fh(k, p);
            k = kQR(k);
            if (k.length == 0) try {
                g.Pw("remote_sid")
            } catch (t) {} else try {
                g.i6("remote_sid", k.join(","), -1)
            } catch (t) {}
        },
        oXS = function() {
            return g.nG("yt-remote-session-browser-channel")
        },
        qG9 = function() {
            return g.nG("yt-remote-local-screens") || []
        },
        FGJ = function() {
            g.cz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        $8J = function(k) {
            k.length > 5 && (k = k.slice(k.length - 5));
            var p = g.DR(qG9(), function(J) {
                    return J.loungeToken
                }),
                t = g.DR(k, function(J) {
                    return J.loungeToken
                });
            g.sQ(t, function(J) {
                return !g.Kc(p, J)
            }) && FGJ();
            g.cz("yt-remote-local-screens", k, 31536E3)
        },
        bI = function(k) {
            k || (g.wu("yt-remote-session-screen-id"), g.wu("yt-remote-session-video-id"));
            JeA();
            k = U4();
            g.xn(k, fM());
            pwL(k)
        },
        d8C = function() {
            if (!N$) {
                var k = g.Qv();
                k && (N$ = new g.Wp(k))
            }
        },
        EXS = function() {
            d8C();
            return N$ ? !!N$.get("yt-remote-use-staging-server") : !1
        },
        yA = function(k, p) {
            g.k5[k] = !0;
            var t = g.H3();
            t && t.publish.apply(t, arguments);
            g.k5[k] = !1
        },
        SGA = function() {},
        tQ = function() {
            if (!YG) {
                YG = new g.Dz(new SGA);
                var k = g.rh("client_streamz_web_flush_count", -1);
                k !== -1 && (YG.N = k)
            }
            return YG
        },
        U8W = function() {
            var k = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return k ? parseInt(k[1], 10) : 0
        },
        fTc = function(k) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + k) != -1 || document.currentScript.src.indexOf("&" + k) != -1)
        },
        bYq = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        Ta = function(k) {
            k.length ? NhA(k.shift(), function() {
                Ta(k)
            }) : yeC()
        },
        YGn = function(k) {
            return "chrome-extension://" + k + "/cast_sender.js"
        },
        NhA = function(k, p, t) {
            var J = document.createElement("script");
            J.onerror = p;
            t && (J.onload = t);
            g.a_(J, g.Aq(k));
            (document.head || document.documentElement).appendChild(J)
        },
        ThC = function() {
            var k = U8W(),
                p = [];
            if (k > 1) {
                var t = k - 1;
                p.push("//www.gstatic.com/eureka/clank/" + k + "/cast_sender.js");
                p.push("//www.gstatic.com/eureka/clank/" + t + "/cast_sender.js")
            }
            return p
        },
        yeC = function() {
            var k = bYq();
            k && k(!1, "No cast extension found")
        },
        ZYL = function() {
            if (re4) {
                var k = 2,
                    p = bYq(),
                    t = function() {
                        k--;
                        k == 0 && p && p(!0)
                    };
                window.__onGCastApiAvailable = t;
                NhA("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", yeC, t)
            }
        },
        C69 = function() {
            ZYL();
            var k = ThC();
            k.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            Ta(k)
        },
        m8c = function() {
            ZYL();
            var k = ThC();
            k.push.apply(k, g.m(Aec.map(YGn)));
            k.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            Ta(k)
        },
        ra = function(k, p, t) {
            g.R.call(this);
            this.S = t != null ? (0, g.H9)(k, t) : k;
            this.Th = p;
            this.X = (0, g.H9)(this.Yv, this);
            this.T = !1;
            this.Y = 0;
            this.N = this.eW = null;
            this.C = []
        },
        Zp = function(k, p, t) {
            g.R.call(this);
            this.C = t != null ? k.bind(t) : k;
            this.Th = p;
            this.N = null;
            this.T = !1;
            this.Y = 0;
            this.eW = null
        },
        VNW = function(k) {
            k.eW = g.Vu(function() {
                k.eW = null;
                k.T && !k.Y && (k.T = !1, VNW(k))
            }, k.Th);
            var p = k.N;
            k.N = null;
            k.C.apply(null, p)
        },
        CM = function() {},
        WGC = function() {
            g.Q3.call(this, "p")
        },
        D8n = function() {
            g.Q3.call(this, "o")
        },
        LGA = function() {
            return sY9 = sY9 || new g.Hg
        },
        vXa = function(k) {
            g.Q3.call(this, "serverreachability", k)
        },
        AQ = function(k) {
            var p = LGA();
            p.dispatchEvent(new vXa(p, k))
        },
        ceK = function(k) {
            g.Q3.call(this, "statevent", k)
        },
        mp = function(k) {
            var p = LGA();
            p.dispatchEvent(new ceK(p, k))
        },
        nXL = function(k, p, t, J) {
            g.Q3.call(this, "timingevent", k);
            this.size = p;
            this.rtt = t;
            this.retries = J
        },
        VA = function(k, p) {
            if (typeof k !== "function") throw Error("Fn must not be null and must be a function");
            return g.B9.setTimeout(function() {
                k()
            }, p)
        },
        Wj = function() {},
        Dp = function(k, p, t, J) {
            this.N = k;
            this.C = p;
            this.nE = t;
            this.ez = J || 1;
            this.Jp = new g.VQ(this);
            this.B0 = 45E3;
            this.qO = null;
            this.S = !1;
            this.L = this.k8 = this.B = this.RY = this.NO = this.pp = this.gy = null;
            this.Y8 = [];
            this.T = null;
            this.Z = 0;
            this.X = this.P0 = null;
            this.gs = -1;
            this.Oy = !1;
            this.v0 = 0;
            this.W0 = null;
            this.Fd = this.IY = this.qW = this.j6 = !1;
            this.Y = new ww4
        },
        ww4 = function() {
            this.N = null;
            this.T = "";
            this.Y = !1
        },
        QYS = function(k, p, t) {
            k.RY = 1;
            k.B = xv(p.clone());
            k.L = t;
            k.j6 = !0;
            iYW(k, null)
        },
        iYW = function(k, p) {
            k.NO = Date.now();
            s4(k);
            k.k8 = k.B.clone();
            kG(k.k8, "t", k.ez);
            k.Z = 0;
            var t = k.N.RY;
            k.Y = new ww4;
            k.T = P64(k.N, t ? p : null, !k.L);
            k.v0 > 0 && (k.W0 = new Zp((0, g.H9)(k.zY, k, k.T), k.v0));
            k.Jp.listen(k.T, "readystatechange", k.A0);
            p = k.qO ? g.ih(k.qO) : {};
            k.L ? (k.P0 || (k.P0 = "POST"), p["Content-Type"] = "application/x-www-form-urlencoded", k.T.send(k.k8, k.P0, k.L, p)) : (k.P0 = "GET", k.T.send(k.k8, k.P0, null, p));
            AQ(1)
        },
        ITc = function(k) {
            if (!GQK(k)) return g.Ht(k.T);
            var p = g.xJ(k.T);
            if (p === "") return "";
            var t = "",
                J = p.length,
                q = g.Oo(k.T) == 4;
            if (!k.Y.N) {
                if (typeof TextDecoder === "undefined") return LM(k), vj(k), "";
                k.Y.N = new g.B9.TextDecoder
            }
            for (var F = 0; F < J; F++) k.Y.Y = !0, t += k.Y.N.decode(p[F], {
                stream: !(q && F == J - 1)
            });
            p.length = 0;
            k.Y.T += t;
            k.Z = 0;
            return k.Y.T
        },
        GQK = function(k) {
            return k.T ? k.P0 == "GET" && k.RY != 2 && k.N.hB : !1
        },
        BhS = function(k, p) {
            var t = k.Z,
                J = p.indexOf("\n", t);
            if (J == -1) return Xw9;
            t = Number(p.substring(t, J));
            if (isNaN(t)) return Ra4;
            J += 1;
            if (J + t > p.length) return Xw9;
            p = p.slice(J, J + t);
            k.Z = J + t;
            return p
        },
        s4 = function(k) {
            k.pp = Date.now() + k.B0;
            zaC(k, k.B0)
        },
        zaC = function(k, p) {
            if (k.gy != null) throw Error("WatchDog timer not null");
            k.gy = VA((0, g.H9)(k.Ea, k), p)
        },
        ea9 = function(k) {
            k.gy && (g.B9.clearTimeout(k.gy), k.gy = null)
        },
        vj = function(k) {
            k.N.TH() || k.Oy || haR(k.N, k)
        },
        LM = function(k) {
            ea9(k);
            g.ER(k.W0);
            k.W0 = null;
            k.Jp.removeAll();
            if (k.T) {
                var p = k.T;
                k.T = null;
                p.abort();
                p.dispose()
            }
        },
        KGc = function(k, p) {
            try {
                var t = k.N;
                if (t.pL != 0 && (t.T == k || aTn(t.Y, k)))
                    if (!k.IY && aTn(t.Y, k) && t.pL == 3) {
                        try {
                            var J = t.Ji.T.parse(p)
                        } catch (A) {
                            J = null
                        }
                        if (Array.isArray(J) && J.length == 3) {
                            var q = J;
                            if (q[0] == 0) a: {
                                if (!t.B) {
                                    if (t.T)
                                        if (t.T.NO + 3E3 < k.NO) cj(t), nM(t);
                                        else break a;
                                    MNQ(t);
                                    mp(18)
                                }
                            }
                            else t.kx = q[1], 0 < t.kx - t.W0 && q[2] < 37500 && t.IY && t.Y8 == 0 && !t.gy && (t.gy = VA((0, g.H9)(t.us, t), 6E3));
                            if (gX9(t.Y) <= 1 && t.yn) {
                                try {
                                    t.yn()
                                } catch (A) {}
                                t.yn = void 0
                            }
                        } else wa(t, 11)
                    } else if ((k.IY || t.T == k) && cj(t), !g.WW(p))
                    for (q = t.Ji.T.parse(p), p = 0; p < q.length; p++) {
                        var F = q[p];
                        t.W0 = F[0];
                        F = F[1];
                        if (t.pL == 2)
                            if (F[0] == "c") {
                                t.C = F[1];
                                t.ez = F[2];
                                var d = F[3];
                                d != null && (t.Bs = d);
                                var S = F[5];
                                S != null && typeof S === "number" && S > 0 && (t.v0 = 1.5 * S);
                                J = t;
                                var U = k.Mf();
                                if (U) {
                                    var f = g.kz(U, "X-Client-Wire-Protocol");
                                    if (f) {
                                        var b = J.Y;
                                        !b.T && (g.DA(f, "spdy") || g.DA(f, "quic") || g.DA(f, "h2")) && (b.C = b.X, b.T = new Set, b.Y && (udW(b, b.Y), b.Y = null))
                                    }
                                    if (J.j6) {
                                        var N = g.kz(U, "X-HTTP-Session-Id");
                                        N && (J.l1 = N, g.rN(J.qO, J.j6, N))
                                    }
                                }
                                t.pL = 3;
                                t.X && t.X.ya();
                                t.UQ && (t.jW = Date.now() - k.NO);
                                J = t;
                                var y = k;
                                J.nT = lTa(J, J.RY ? J.ez : null, J.nE);
                                if (y.IY) {
                                    jYA(J.Y,
                                        y);
                                    var Y = y,
                                        T = J.v0;
                                    T && Y.setTimeout(T);
                                    Y.gy && (ea9(Y), s4(Y));
                                    J.T = y
                                } else OYa(J);
                                t.N.length > 0 && iI(t)
                            } else F[0] != "stop" && F[0] != "close" || wa(t, 7);
                        else t.pL == 3 && (F[0] == "stop" || F[0] == "close" ? F[0] == "stop" ? wa(t, 7) : t.disconnect() : F[0] != "noop" && t.X && t.X.Tg(F), t.Y8 = 0)
                    }
                AQ(4)
            } catch (A) {}
        },
        HYJ = function(k, p) {
            this.T = k;
            this.map = p;
            this.context = null
        },
        x8a = function(k) {
            this.X = k || 10;
            g.B9.PerformanceNavigationTiming ? (k = g.B9.performance.getEntriesByType("navigation"), k = k.length > 0 && (k[0].nextHopProtocol == "hq" || k[0].nextHopProtocol == "h2")) : k = !!(g.B9.chrome && g.B9.chrome.loadTimes && g.B9.chrome.loadTimes() && g.B9.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = k ? this.X : 1;
            this.T = null;
            this.C > 1 && (this.T = new Set);
            this.Y = null;
            this.N = []
        },
        k2R = function(k) {
            return k.Y ? !0 : k.T ? k.T.size >= k.C : !1
        },
        gX9 = function(k) {
            return k.Y ? 1 : k.T ? k.T.size : 0
        },
        aTn = function(k, p) {
            return k.Y ? k.Y == p : k.T ? k.T.has(p) : !1
        },
        udW =
        function(k, p) {
            k.T ? k.T.add(p) : k.Y = p
        },
        jYA = function(k, p) {
            k.Y && k.Y == p ? k.Y = null : k.T && k.T.has(p) && k.T.delete(p)
        },
        pzS = function(k) {
            if (k.Y != null) return k.N.concat(k.Y.Y8);
            if (k.T != null && k.T.size !== 0) {
                var p = k.N;
                k = g.Z(k.T.values());
                for (var t = k.next(); !t.done; t = k.next()) p = p.concat(t.value.Y8);
                return p
            }
            return g.tj(k.N)
        },
        tqc = function(k, p) {
            var t = new Wj;
            if (g.B9.Image) {
                var J = new Image;
                J.onload = g.xh(QA, t, "TestLoadImage: loaded", !0, p, J);
                J.onerror = g.xh(QA, t, "TestLoadImage: error", !1, p, J);
                J.onabort = g.xh(QA, t, "TestLoadImage: abort", !1, p, J);
                J.ontimeout = g.xh(QA, t, "TestLoadImage: timeout", !1, p, J);
                g.B9.setTimeout(function() {
                    if (J.ontimeout) J.ontimeout()
                }, 1E4);
                J.src = k
            } else p(!1)
        },
        JmJ = function(k, p) {
            var t = new Wj,
                J = new AbortController,
                q = setTimeout(function() {
                    J.abort();
                    QA(t, "TestPingServer: timeout", !1, p)
                }, 1E4);
            fetch(k, {
                signal: J.signal
            }).then(function(F) {
                clearTimeout(q);
                F.ok ? QA(t, "TestPingServer: ok", !0, p) : QA(t, "TestPingServer: server error", !1, p)
            }).catch(function() {
                clearTimeout(q);
                QA(t, "TestPingServer: error", !1, p)
            })
        },
        QA = function(k, p, t, J, q) {
            try {
                q && (q.onload = null, q.onerror = null, q.onabort = null, q.ontimeout = null), J(t)
            } catch (F) {}
        },
        o9a = function() {
            this.T = new CM
        },
        qAc = function(k, p, t) {
            var J = t || "";
            try {
                f8L(k, function(q, F) {
                    var d = q;
                    g.lq(q) && (d = g.L9(q));
                    p.push(J + F + "=" + encodeURIComponent(d))
                })
            } catch (q) {
                throw p.push(J + "type=" + encodeURIComponent("_badmap")), q;
            }
        },
        Pj = function(k, p, t) {
            return t && t.t6Y ? t.t6Y[k] || p : p
        },
        FJR = function(k) {
            this.N = [];
            this.ez = this.nT = this.qO = this.nE = this.T = this.l1 = this.j6 = this.Oy = this.Z = this.gs = this.L = null;
            this.fZ = this.k8 = 0;
            this.lm = Pj("failFast", !1, k);
            this.IY = this.gy = this.B = this.S = this.X = null;
            this.aO = !0;
            this.kx = this.W0 = -1;
            this.Fd = this.Y8 = this.NO = 0;
            this.Q4 = Pj("baseRetryDelayMs", 5E3, k);
            this.Dw = Pj("retryDelaySeedMs", 1E4, k);
            this.Xn = Pj("forwardChannelMaxRetries", 2, k);
            this.Kb = Pj("forwardChannelRequestTimeoutMs", 2E4, k);
            this.UF = k && k.z2h || void 0;
            this.v3 = k && k.cYO || void 0;
            this.hB = k && k.wY0 || !1;
            this.v0 = void 0;
            this.RY = k && k.q7b ||
                !1;
            this.C = "";
            this.Y = new x8a(k && k.XVr);
            this.Ji = new o9a;
            this.Jp = k && k.UaG || !1;
            this.pp = k && k.Vwh || !1;
            this.Jp && this.pp && (this.pp = !1);
            this.V4 = k && k.SiG || !1;
            k && k.pVh && (this.aO = !1);
            this.UQ = !this.Jp && this.aO && k && k.IP8 || !1;
            this.mW = void 0;
            k && k.bP && k.bP > 0 && (this.mW = k.bP);
            this.yn = void 0;
            this.jW = 0;
            this.B0 = !1;
            this.qW = this.P0 = null
        },
        nM = function(k) {
            k.T && ($IS(k), k.T.cancel(), k.T = null)
        },
        dIJ = function(k) {
            nM(k);
            k.B && (g.B9.clearTimeout(k.B), k.B = null);
            cj(k);
            k.Y.cancel();
            k.S && (typeof k.S === "number" && g.B9.clearTimeout(k.S), k.S = null)
        },
        iI = function(k) {
            k2R(k.Y) || k.S || (k.S = !0, g.Eo(k.Jg, k), k.NO = 0)
        },
        SAA = function(k, p) {
            if (gX9(k.Y) >= k.Y.C - (k.S ? 1 : 0)) return !1;
            if (k.S) return k.N = p.Y8.concat(k.N), !0;
            if (k.pL == 1 || k.pL == 2 || k.NO >= (k.lm ? 0 : k.Xn)) return !1;
            k.S = VA((0, g.H9)(k.Jg, k, p), E9K(k, k.NO));
            k.NO++;
            return !0
        },
        ff9 = function(k, p) {
            var t;
            p ? t = p.nE : t = k.k8++;
            var J = k.qO.clone();
            g.rN(J, "SID", k.C);
            g.rN(J, "RID", t);
            g.rN(J, "AID", k.W0);
            Ga(k, J);
            k.Z && k.L && g.m1(J, k.Z, k.L);
            t = new Dp(k, k.C, t, k.NO + 1);
            k.Z === null && (t.qO = k.L);
            p && (k.N = p.Y8.concat(k.N));
            p = UIW(k, t, 1E3);
            t.setTimeout(Math.round(k.Kb * .5) + Math.round(k.Kb * .5 * Math.random()));
            udW(k.Y, t);
            QYS(t, J, p)
        },
        Ga = function(k, p) {
            k.Oy && g.ZV(k.Oy, function(t, J) {
                g.rN(p, J, t)
            });
            k.X && f8L({}, function(t, J) {
                g.rN(p, J, t)
            })
        },
        UIW = function(k, p, t) {
            t = Math.min(k.N.length, t);
            var J = k.X ? (0, g.H9)(k.X.Nz, k.X, k) : null;
            a: {
                for (var q = k.N, F = -1;;) {
                    var d = ["count=" + t];
                    F == -1 ? t > 0 ? (F = q[0].T, d.push("ofs=" + F)) : F = 0 : d.push("ofs=" + F);
                    for (var S = !0, U = 0; U < t; U++) {
                        var f = q[U].T,
                            b = q[U].map;
                        f -= F;
                        if (f < 0) F = Math.max(0, q[U].T - 100), S = !1;
                        else try {
                            qAc(b, d, "req" + f + "_")
                        } catch (N) {
                            J && J(b)
                        }
                    }
                    if (S) {
                        J = d.join("&");
                        break a
                    }
                }
                J = void 0
            }
            k = k.N.splice(0, t);
            p.Y8 = k;
            return J
        },
        OYa = function(k) {
            k.T || k.B || (k.Fd = 1, g.Eo(k.UJ, k), k.Y8 = 0)
        },
        MNQ = function(k) {
            if (k.T || k.B || k.Y8 >= 3) return !1;
            k.Fd++;
            k.B = VA((0, g.H9)(k.UJ, k), E9K(k, k.Y8));
            k.Y8++;
            return !0
        },
        $IS = function(k) {
            k.P0 != null && (g.B9.clearTimeout(k.P0), k.P0 = null)
        },
        bGL = function(k) {
            k.T = new Dp(k, k.C, "rpc", k.Fd);
            k.Z === null && (k.T.qO = k.L);
            k.T.v0 = 0;
            var p = k.nT.clone();
            g.rN(p, "RID", "rpc");
            g.rN(p, "SID", k.C);
            g.rN(p, "AID", k.W0);
            g.rN(p, "CI", k.IY ? "0" : "1");
            !k.IY && k.mW && g.rN(p, "TO", k.mW);
            g.rN(p, "TYPE", "xmlhttp");
            Ga(k, p);
            k.Z && k.L && g.m1(p, k.Z, k.L);
            k.v0 && k.T.setTimeout(k.v0);
            var t = k.T;
            k = k.ez;
            t.RY = 1;
            t.B = xv(p.clone());
            t.L = null;
            t.j6 = !0;
            iYW(t, k)
        },
        cj = function(k) {
            k.gy != null && (g.B9.clearTimeout(k.gy), k.gy = null)
        },
        haR = function(k, p) {
            var t = null;
            if (k.T == p) {
                cj(k);
                $IS(k);
                k.T = null;
                var J = 2
            } else if (aTn(k.Y, p)) t = p.Y8, jYA(k.Y, p), J = 1;
            else return;
            if (k.pL != 0)
                if (p.S)
                    if (J == 1) {
                        t = p.L ? p.L.length : 0;
                        p = Date.now() - p.NO;
                        var q = k.NO;
                        J = LGA();
                        J.dispatchEvent(new nXL(J, t, p, q));
                        iI(k)
                    } else OYa(k);
            else {
                var F = p.gs;
                q = p.getLastError();
                if (q == 3 || q == 0 && F > 0 || !(J == 1 && SAA(k, p) || J == 2 && MNQ(k))) switch (t && t.length > 0 && (p = k.Y, p.N = p.N.concat(t)), q) {
                    case 1:
                        wa(k, 5);
                        break;
                    case 4:
                        wa(k, 10);
                        break;
                    case 3:
                        wa(k, 6);
                        break;
                    default:
                        wa(k, 2)
                }
            }
        },
        E9K = function(k, p) {
            var t = k.Q4 + Math.floor(Math.random() *
                k.Dw);
            k.isActive() || (t *= 2);
            return t * p
        },
        wa = function(k, p) {
            if (p == 2) {
                var t = (0, g.H9)(k.bLS, k),
                    J = k.v3,
                    q = !J;
                J = new g.Sv(J || "//www.google.com/images/cleardot.gif");
                g.B9.location && g.B9.location.protocol == "http" || g.U8(J, "https");
                xv(J);
                q ? tqc(J.toString(), t) : JmJ(J.toString(), t)
            } else mp(2);
            k.pL = 0;
            k.X && k.X.rH(p);
            NuL(k);
            dIJ(k)
        },
        NuL = function(k) {
            k.pL = 0;
            k.qW = [];
            if (k.X) {
                var p = pzS(k.Y);
                if (p.length != 0 || k.N.length != 0) g.oT(k.qW, p), g.oT(k.qW, k.N), k.Y.N.length = 0, g.tj(k.N), k.N.length = 0;
                k.X.Li()
            }
        },
        ymQ = function(k) {
            if (k.pL == 0) return k.qW;
            var p = [];
            g.oT(p, pzS(k.Y));
            g.oT(p, k.N);
            return p
        },
        lTa = function(k, p, t) {
            var J = g.ZW(t);
            J.T != "" ? (p && g.fI(J, p + "." + J.T), g.bp(J, J.N)) : (J = g.B9.location, J = bFa(J.protocol, p ? p + "." + J.hostname : J.hostname, +J.port, t));
            p = k.j6;
            t = k.l1;
            p && t && g.rN(J, p, t);
            g.rN(J, "VER", k.Bs);
            Ga(k, J);
            return J
        },
        P64 = function(k, p, t) {
            if (p && !k.RY) throw Error("Can't create secondary domain capable XhrIo object.");
            p = k.hB && !k.UF ? new g.ug(new g.Fn({
                Xg: t
            })) : new g.ug(k.UF);
            p.Z = k.RY;
            return p
        },
        YAA = function() {},
        TuA = function() {},
        XP = function(k, p) {
            g.Hg.call(this);
            this.T = new FJR(p);
            this.X = k;
            this.Y = p && p.bEr || null;
            k = p && p.RAS || null;
            p && p.lPY && (k ? k["X-Client-Protocol"] = "webchannel" : k = {
                "X-Client-Protocol": "webchannel"
            });
            this.T.L = k;
            k = p && p.oTT || null;
            p && p.cE && (k ? k["X-WebChannel-Content-Type"] = p.cE : k = {
                "X-WebChannel-Content-Type": p.cE
            });
            p && p.bb && (k ? k["X-WebChannel-Client-Profile"] = p.bb : k = {
                "X-WebChannel-Client-Profile": p.bb
            });
            this.T.gs = k;
            (k = p && p.PTh) && !g.WW(k) && (this.T.Z = k);
            this.S = p && p.q7b || !1;
            this.C = p && p.usS || !1;
            (p = p && p.Zpp) && !g.WW(p) && (this.T.j6 = p, g.sk(this.Y, p) && (k =
                this.Y, p in k && delete k[p]));
            this.N = new IJ(this)
        },
        rmS = function(k) {
            WGC.call(this);
            k.__headers__ && (this.headers = k.__headers__, this.statusCode = k.__status__, delete k.__headers__, delete k.__status__);
            var p = k.__sm__;
            p ? this.data = (this.T = g.Vx(p)) ? g.nE(p, this.T) : p : this.data = k
        },
        ZGW = function(k) {
            D8n.call(this);
            this.status = 1;
            this.errorCode = k
        },
        IJ = function(k) {
            this.T = k
        },
        CkJ = function(k, p) {
            this.Y = k;
            this.T = p
        },
        Amc = function(k) {
            return ymQ(k.T).map(function(p) {
                var t = k.Y;
                p = p.map;
                "__data__" in p ? (p = p.__data__, t = t.C ? ElC(p) : p) : t = p;
                return t
            })
        },
        RJ = function(k, p) {
            if (typeof k !== "function") throw Error("Fn must not be null and must be a function");
            return g.B9.setTimeout(function() {
                k()
            }, p)
        },
        za = function(k) {
            Bj.dispatchEvent(new mIK(Bj, k))
        },
        mIK = function(k) {
            g.Q3.call(this, "statevent", k)
        },
        es = function(k, p, t, J) {
            this.T = k;
            this.C = p;
            this.Z = t;
            this.S = J || 1;
            this.Y = 45E3;
            this.N = new g.VQ(this);
            this.X = new g.m5;
            this.X.setInterval(250)
        },
        WJ4 = function(k, p, t) {
            k.S4 = 1;
            k.AE = xv(p.clone());
            k.Xx = t;
            k.j6 = !0;
            VqS(k, null)
        },
        DIA = function(k, p, t, J, q) {
            k.S4 = 1;
            k.AE = xv(p.clone());
            k.Xx = null;
            k.j6 = t;
            q && (k.U_ = !1);
            VqS(k, J)
        },
        VqS = function(k, p) {
            k.NC = Date.now();
            suL(k);
            k.qJ = k.AE.clone();
            kG(k.qJ, "t", k.S);
            k.Oq = 0;
            k.qM = k.T.PT(k.T.Ck() ? p : null);
            k.Cl > 0 && (k.Fa = new Zp((0, g.H9)(k.gH, k, k.qM), k.Cl));
            k.N.listen(k.qM, "readystatechange", k.KS);
            p = k.Rn ? g.ih(k.Rn) : {};
            k.Xx ? (k.MJ = "POST", p["Content-Type"] = "application/x-www-form-urlencoded", k.qM.send(k.qJ, k.MJ, k.Xx, p)) : (k.MJ = "GET", k.U_ && !g.Ok && (p.Connection = "close"), k.qM.send(k.qJ, k.MJ, null, p));
            k.T.qx(1)
        },
        cmK = function(k, p) {
            var t = k.Oq,
                J = p.indexOf("\n", t);
            if (J == -1) return LJS;
            t = Number(p.substring(t, J));
            if (isNaN(t)) return v9n;
            J += 1;
            if (J + t > p.length) return LJS;
            p = p.slice(J, J + t);
            k.Oq = J + t;
            return p
        },
        suL = function(k) {
            k.Kl = Date.now() + k.Y;
            n9R(k, k.Y)
        },
        n9R = function(k, p) {
            if (k.Ak != null) throw Error("WatchDog timer not null");
            k.Ak = RJ((0, g.H9)(k.CS, k), p)
        },
        wzq = function(k) {
            k.Ak && (g.B9.clearTimeout(k.Ak), k.Ak = null)
        },
        iGa = function(k) {
            k.T.TH() || k.s8 || k.T.QC(k)
        },
        hQ = function(k) {
            wzq(k);
            g.ER(k.Fa);
            k.Fa = null;
            k.X.stop();
            k.N.removeAll();
            if (k.qM) {
                var p = k.qM;
                k.qM = null;
                p.abort();
                p.dispose()
            }
            k.JW && (k.JW = null)
        },
        Qua = function(k, p) {
            try {
                k.T.Yw(k, p), k.T.qx(4)
            } catch (t) {}
        },
        G2A = function(k, p, t, J, q) {
            if (J == 0) t(!1);
            else {
                var F = q || 0;
                J--;
                PkL(k, p, function(d) {
                    d ? t(!0) : g.B9.setTimeout(function() {
                        G2A(k, p, t, J, F)
                    }, F)
                })
            }
        },
        PkL = function(k, p, t) {
            var J = new Image;
            J.onload = function() {
                try {
                    aJ(J), t(!0)
                } catch (q) {}
            };
            J.onerror = function() {
                try {
                    aJ(J), t(!1)
                } catch (q) {}
            };
            J.onabort = function() {
                try {
                    aJ(J), t(!1)
                } catch (q) {}
            };
            J.ontimeout = function() {
                try {
                    aJ(J), t(!1)
                } catch (q) {}
            };
            g.B9.setTimeout(function() {
                if (J.ontimeout) J.ontimeout()
            }, p);
            J.src = k
        },
        aJ = function(k) {
            k.onload = null;
            k.onerror = null;
            k.onabort = null;
            k.ontimeout = null
        },
        If9 = function(k) {
            this.T = k;
            this.Y = new CM
        },
        XzS = function(k) {
            var p = M$(k.T, k.qw, "/mail/images/cleardot.gif");
            xv(p);
            G2A(p.toString(), 5E3, (0, g.H9)(k.IS, k), 3, 2E3);
            k.qx(1)
        },
        RLc = function(k) {
            var p = k.T.S;
            p != null ? (za(5), p ? (za(11), uI(k.T, k, !1)) : (za(12), uI(k.T, k, !0))) : (k.KI = new es(k), k.KI.Rn = k.oy, p = k.T, p = M$(p, p.Ck() ? k.xO : null, k.FL), za(5), kG(p, "TYPE", "xmlhttp"), DIA(k.KI, p, !1, k.xO, !1))
        },
        Bua = function(k, p, t) {
            this.T = 1;
            this.Y = [];
            this.N = [];
            this.X = new CM;
            this.L = k || null;
            this.S = p != null ? p : null;
            this.B = t || !1
        },
        zLW = function(k, p) {
            this.T = k;
            this.map = p;
            this.context = null
        },
        eLS = function(k, p, t, J) {
            g.Q3.call(this, "timingevent", k);
            this.size = p;
            this.rtt = t;
            this.retries = J
        },
        hLW = function(k) {
            g.Q3.call(this, "serverreachability", k)
        },
        MqS = function(k) {
            k.P7(1, 0);
            k.mB = M$(k, null, k.Ss);
            afc(k)
        },
        g9C = function(k) {
            k.R$ && (k.R$.abort(), k.R$ = null);
            k.Ao && (k.Ao.cancel(), k.Ao = null);
            k.fF && (g.B9.clearTimeout(k.fF), k.fF = null);
            lI(k);
            k.OZ && (k.OZ.cancel(), k.OZ = null);
            k.u_ && (g.B9.clearTimeout(k.u_), k.u_ = null)
        },
        ua9 = function(k, p) {
            if (k.T == 0) throw Error("Invalid operation: sending map when state is closed");
            k.Y.push(new zLW(k.oJ++, p));
            k.T != 2 && k.T != 3 || afc(k)
        },
        lfn = function(k) {
            var p = 0;
            k.Ao && p++;
            k.OZ && p++;
            return p
        },
        afc = function(k) {
            k.OZ || k.u_ || (k.u_ = RJ((0, g.H9)(k.un, k), 0), k.Ct = 0)
        },
        KJJ = function(k, p) {
            if (k.T == 1) {
                if (!p) {
                    k.Pa = Math.floor(Math.random() * 1E5);
                    p = k.Pa++;
                    var t = new es(k, "", p);
                    t.Rn = k.Ko;
                    var J = ju4(k),
                        q = k.mB.clone();
                    g.rN(q, "RID", p);
                    g.rN(q, "CVER", "1");
                    js(k, q);
                    WJ4(t, q, J);
                    k.OZ = t;
                    k.T = 2
                }
            } else k.T == 3 && (p ? OGJ(k, p) : k.Y.length == 0 || k.OZ || OGJ(k))
        },
        OGJ = function(k, p) {
            if (p)
                if (k.f2 > 6) {
                    k.Y = k.N.concat(k.Y);
                    k.N.length = 0;
                    var t = k.Pa - 1;
                    p = ju4(k)
                } else t = p.Z, p = p.Xx;
            else t = k.Pa++, p = ju4(k);
            var J = k.mB.clone();
            g.rN(J, "SID", k.C);
            g.rN(J, "RID", t);
            g.rN(J, "AID", k.Kt);
            js(k, J);
            t = new es(k, k.C, t, k.Ct + 1);
            t.Rn = k.Ko;
            t.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            k.OZ = t;
            WJ4(t, J, p)
        },
        js = function(k, p) {
            k.Gk && (k = k.Gk.P2()) && g.ZV(k, function(t, J) {
                g.rN(p, J, t)
            })
        },
        ju4 = function(k) {
            var p = Math.min(k.Y.length, 1E3),
                t = ["count=" + p];
            if (k.f2 > 6 && p > 0) {
                var J = k.Y[0].T;
                t.push("ofs=" + J)
            } else J = 0;
            for (var q = {}, F = 0; F < p; q = {
                    lq: void 0
                }, F++) {
                q.lq = k.Y[F].T;
                var d = k.Y[F].map;
                q.lq = k.f2 <= 6 ? F : q.lq - J;
                try {
                    g.ZV(d, function(S) {
                        return function(U, f) {
                            t.push("req" + S.lq + "_" + f + "=" + encodeURIComponent(U))
                        }
                    }(q))
                } catch (S) {
                    t.push("req" + q.lq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            k.N = k.N.concat(k.Y.splice(0, p));
            return t.join("&")
        },
        HGc = function(k) {
            k.Ao || k.fF || (k.Z = 1, k.fF = RJ((0, g.H9)(k.sz, k), 0), k.uM = 0)
        },
        kEC = function(k) {
            if (k.Ao || k.fF || k.uM >= 3) return !1;
            k.Z++;
            k.fF = RJ((0, g.H9)(k.sz, k), xIW(k, k.uM));
            k.uM++;
            return !0
        },
        uI = function(k, p, t) {
            k.wV = k.S == null ? t : !k.S;
            k.wu = p.Xp;
            k.B || MqS(k)
        },
        lI = function(k) {
            k.DR != null && (g.B9.clearTimeout(k.DR), k.DR = null)
        },
        xIW = function(k, p) {
            var t = 5E3 + Math.floor(Math.random() * 1E4);
            k.isActive() || (t *= 2);
            return t * p
        },
        O4 = function(k, p) {
            if (p == 2 || p == 9) {
                var t = null;
                k.Gk && (t = null);
                var J = (0, g.H9)(k.Rg6, k);
                t || (t = new g.Sv("//www.google.com/images/cleardot.gif"), xv(t));
                PkL(t.toString(), 1E4, J)
            } else za(2);
            p7n(k, p)
        },
        p7n = function(k, p) {
            k.T = 0;
            k.Gk && k.Gk.Nj(p);
            tYC(k);
            g9C(k)
        },
        tYC = function(k) {
            k.T = 0;
            k.wu = -1;
            if (k.Gk)
                if (k.N.length == 0 && k.Y.length == 0) k.Gk.M1();
                else {
                    var p = g.tj(k.N),
                        t = g.tj(k.Y);
                    k.N.length = 0;
                    k.Y.length = 0;
                    k.Gk.M1(p, t)
                }
        },
        M$ = function(k, p, t) {
            var J = g.ZW(t);
            if (J.T != "") p && g.fI(J, p + "." + J.T), g.bp(J, J.N);
            else {
                var q = window.location;
                J = bFa(q.protocol, p ? p + "." + q.hostname : q.hostname, +q.port, t)
            }
            k.Kk && g.ZV(k.Kk, function(F, d) {
                g.rN(J, d, F)
            });
            g.rN(J, "VER", k.f2);
            js(k, J);
            return J
        },
        JOR = function() {},
        op9 = function() {
            this.T = [];
            this.Y = []
        },
        qT4 = function(k) {
            g.Q3.call(this, "channelMessage");
            this.message = k
        },
        FDK = function(k) {
            g.Q3.call(this, "channelError");
            this.error = k
        },
        $vA = function(k, p) {
            this.action = k;
            this.params = p || {}
        },
        KM = function(k, p) {
            g.R.call(this);
            this.T = new g.jF(this.Yry, 0, this);
            g.z(this, this.T);
            this.Th = 5E3;
            this.Y = 0;
            if (typeof k === "function") p && (k = (0, g.H9)(k, p));
            else if (k && typeof k.handleEvent === "function") k = (0, g.H9)(k.handleEvent, k);
            else throw Error("Invalid listener argument");
            this.N = k
        },
        dvQ = function(k, p, t, J, q, F, d) {
            t = t === void 0 ? !1 : t;
            J = J === void 0 ? function() {
                return ""
            } : J;
            q = q === void 0 ? !1 : q;
            F = F === void 0 ? !1 : F;
            d = d === void 0 ? function() {
                return g.Tq({})
            } : d;
            this.Oy = k;
            this.gy = p;
            this.X = new g.Vv;
            this.Y = new KM(this.b$Y, this);
            this.T = null;
            this.Z = !1;
            this.L = null;
            this.NO = "";
            this.Y8 = this.B = 0;
            this.N = [];
            this.k8 = t;
            this.P0 = J;
            this.S = F;
            this.j6 = d;
            this.C = g.Tq();
            this.v0 = q;
            this.W0 = new ND4;
            this.qO = new yqA;
            this.IY = new YBQ;
            this.RY = new TDA;
            this.B0 = new rqW;
            this.pp = new ZFc
        },
        STq = function(k, p, t, J, q) {
            EpS(k);
            if (k.T) {
                var F = g.M9("ID_TOKEN"),
                    d = k.T.Ko || {};
                F ? d["x-youtube-identity-token"] = F : delete d["x-youtube-identity-token"];
                k.T.Ko = d
            }
            J ? (J.getState() != 3 && lfn(J) == 0 || J.getState(), k.T.connect(p, t, k.gy, J.C, J.Kt)) : q ? k.T.connect(p, t, k.gy, q.sessionId, q.arrayId) : k.T.connect(p, t, k.gy)
        },
        bzc = function(k) {
            var p, t;
            g.Q(function(J) {
                if (J.T == 1) return g.mj(J, 2), g.n(J, Uvn(k), 2);
                g.Du(J);
                p = k.N;
                k.N = [];
                t = p.length;
                f4n(k, p, t);
                Hj(k);
                return g.s0(J, 0)
            })
        },
        f4n = function(k, p, t) {
            for (var J = 0; J < t; ++J) ua9(k.T, p[J]);
            Hj(k)
        },
        Hj = function(k) {
            k.publish("handlerOpened");
            k.W0.T("BROWSER_CHANNEL")
        },
        EpS = function(k) {
            if (k.T) {
                var p = k.P0(),
                    t = k.T.Ko || {};
                p ? t["x-youtube-lounge-xsrf-token"] = p : delete t["x-youtube-lounge-xsrf-token"];
                k.T.Ko = t
            }
        },
        Uvn = function(k) {
            return k.j6().then(function(p) {
                var t = k.T.Ko || {};
                p && Object.keys(p).length > 0 ? t = Object.assign({}, t, p) : delete t.Authorization;
                k.T.Ko = t
            }).catch(function() {})
        },
        xG = function(k) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.T = "/api/lounge";
            this.Y = !0;
            k = k || document.location.href;
            var p = Number(g.Gq(4, k)) || "";
            p && (this.port = ":" + p);
            this.domain = g.Iq(k) || "";
            k = g.nc();
            k.search("MSIE") >= 0 && (k = k.match(/MSIE ([\d.]+)/)[1], g.cW(k, "10.0") < 0 && (this.Y = !1))
        },
        k4 = function(k, p) {
            var t = k.T;
            k.Y && (t = k.scheme + "://" + k.domain + k.port + k.T);
            return g.hM(t + p, {})
        },
        N6R = function(k, p) {
            g.Hg.call(this);
            var t = this;
            this.Jj = k();
            this.Jj.subscribe("handlerOpened", this.Q2, this);
            this.Jj.subscribe("handlerClosed", this.onClosed, this);
            this.Jj.subscribe("handlerError", function(J, q) {
                t.onError(q)
            });
            this.Jj.subscribe("handlerMessage", this.onMessage, this);
            this.T = p
        },
        yOW = function(k, p, t) {
            var J = this;
            t = t === void 0 ? function() {
                return ""
            } : t;
            var q = q === void 0 ? new TuA : q;
            var F = F === void 0 ? new g.Vv : F;
            this.pathPrefix = k;
            this.T = p;
            this.NO = t;
            this.X = F;
            this.B = null;
            this.L = this.Z = 0;
            this.channel = null;
            this.S = 0;
            this.N = new KM(function() {
                J.N.isActive();
                var d;
                ((d = J.channel) == null ? void 0 : gX9((new CkJ(d, d.T)).T.Y)) === 0 && J.connect(J.B, J.Z)
            });
            this.C = {};
            this.Y = {};
            this.gy = !1;
            this.logger = null;
            this.Y8 = [];
            this.Zb = void 0;
            this.qO = new ND4;
            this.P0 = new yqA;
            this.Oy = new YBQ;
            this.j6 = new TDA
        },
        YT9 = function(k) {
            g.eu(k.channel, "m", function() {
                k.S = 3;
                k.N.reset();
                k.B = null;
                k.Z = 0;
                for (var p = g.Z(k.Y8), t = p.next(); !t.done; t = p.next()) t = t.value, k.channel && k.channel.send(t);
                k.Y8 = [];
                k.publish("webChannelOpened");
                k.qO.T("WEB_CHANNEL")
            });
            g.eu(k.channel, "n", function() {
                k.S = 0;
                k.N.isActive() || k.publish("webChannelClosed");
                var p, t = (p = k.channel) == null ? void 0 : Amc(new CkJ(p, p.T));
                t && (k.Y8 = [].concat(g.m(t)));
                k.P0.T("WEB_CHANNEL")
            });
            g.eu(k.channel, "p", function(p) {
                var t = p.data;
                t[0] === "gracefulReconnect" ? (k.N.start(), k.channel && k.channel.close()) : k.publish("webChannelMessage", new $vA(t[0], t[1]));
                k.Zb = p.statusCode;
                k.Oy.T("WEB_CHANNEL")
            });
            g.eu(k.channel, "o", function() {
                k.Zb === 401 || k.N.start();
                k.publish("webChannelError");
                k.j6.T("WEB_CHANNEL")
            })
        },
        T6A = function(k) {
            var p = k.NO();
            p ? k.C["x-youtube-lounge-xsrf-token"] = p : delete k.C["x-youtube-lounge-xsrf-token"]
        },
        rOS = function(k) {
            g.Hg.call(this);
            this.T = k();
            this.T.subscribe("webChannelOpened", this.FD, this);
            this.T.subscribe("webChannelClosed", this.onClosed, this);
            this.T.subscribe("webChannelError", this.onError, this);
            this.T.subscribe("webChannelMessage", this.onMessage, this)
        },
        ZzQ = function(k, p, t, J, q) {
            function F() {
                return new dvQ(k4(k, "/bc"), p, !1, t, J)
            }
            t = t === void 0 ? function() {
                return ""
            } : t;
            return g.TQ("enable_mdx_web_channel_desktop") ? new rOS(function() {
                return new yOW(k4(k, "/wc"), p, t)
            }) : new N6R(F, q)
        },
        VYJ = function() {
            var k = CrK;
            AOS();
            pd.push(k);
            mva()
        },
        tE = function(k, p) {
            AOS();
            var t = WDL(k, String(p));
            pd.length == 0 ? DvC(t) : (mva(), g.y1(pd, function(J) {
                J(t)
            }))
        },
        JE = function(k) {
            tE("CP", k)
        },
        AOS = function() {
            pd || (pd = g.hw("yt.mdx.remote.debug.handlers_") || [], g.eM("yt.mdx.remote.debug.handlers_", pd))
        },
        DvC = function(k) {
            var p = (oE + 1) % 50;
            oE = p;
            q3[p] = k;
            FW || (FW = p == 49)
        },
        mva = function() {
            var k = pd;
            if (q3[0]) {
                var p = FW ? oE : -1,
                    t = {};
                do t = {
                    xR: void 0
                }, p = (p + 1) % 50, t.xR = q3[p], g.y1(k, function(J) {
                    return function(q) {
                        q(J.xR)
                    }
                }(t));
                while (p != oE);
                q3 = Array(50);
                oE = -1;
                FW = !1
            }
        },
        WDL = function(k, p) {
            var t = (Date.now() - sgR) / 1E3;
            t.toFixed && (t = t.toFixed(3));
            var J = [];
            J.push("[", t + "s", "] ");
            J.push("[", "yt.mdx.remote", "] ");
            J.push(k + ": " + p, "\n");
            return J.join("")
        },
        $4 = function(k) {
            g.o$.call(this);
            this.S = k;
            this.screens = []
        },
        LDW = function(k, p) {
            var t = k.get(p.uuid) || k.get(p.id);
            if (t) return k = t.name, t.id = p.id || t.id, t.name = p.name, t.token = p.token, t.uuid = p.uuid || t.uuid, t.name != k;
            k.screens.push(p);
            return !0
        },
        vpa = function(k, p) {
            var t = k.screens.length != p.length;
            k.screens = g.dZ(k.screens, function(F) {
                return !!HFW(p, F)
            });
            for (var J = p.length, q = 0; q < J; q++) t = LDW(k, p[q]) || t;
            return t
        },
        cOR = function(k, p) {
            var t = k.screens.length;
            k.screens = g.dZ(k.screens, function(J) {
                return !(J || p ? !J != !p ? 0 : J.id == p.id : 1)
            });
            return k.screens.length < t
        },
        npn = function(k, p, t, J, q) {
            g.o$.call(this);
            this.N = k;
            this.Z = p;
            this.C = t;
            this.S = J;
            this.X = q;
            this.Y = 0;
            this.T = null;
            this.eW = NaN
        },
        Ej = function(k) {
            $4.call(this, "LocalScreenService");
            this.Y = k;
            this.T = NaN;
            dz(this);
            this.info("Initializing with " + j3q(this.screens))
        },
        w7q = function(k) {
            if (k.screens.length) {
                var p = g.DR(k.screens, function(J) {
                        return J.id
                    }),
                    t = k4(k.Y, "/pairing/get_lounge_token_batch");
                k.Y.sendRequest("POST", t, {
                    screen_ids: p.join(",")
                }, (0, g.H9)(k.YyO, k), (0, g.H9)(k.g86, k))
            }
        },
        dz = function(k) {
            if (g.TQ("deprecate_pair_servlet_enabled")) return vpa(k, []);
            var p = l8c(qG9());
            p = g.dZ(p, function(t) {
                return !t.uuid
            });
            return vpa(k, p)
        },
        SS = function(k, p) {
            $8J(g.DR(k.screens, glS));
            p && FGJ()
        },
        QgQ = function(k, p) {
            g.o$.call(this);
            this.S = p;
            p = (p = g.nG("yt-remote-online-screen-ids") || "") ? p.split(",") : [];
            for (var t = {}, J = this.S(), q = J.length, F = 0; F < q; ++F) {
                var d = J[F].id;
                t[d] = g.Kc(p, d)
            }
            this.T = t;
            this.X = k;
            this.N = this.C = NaN;
            this.Y = null;
            iz4("Initialized with " + g.L9(this.T))
        },
        PrC = function(k, p, t) {
            var J = k4(k.X, "/pairing/get_screen_availability");
            k.X.sendRequest("POST", J, {
                lounge_token: p.token
            }, (0, g.H9)(function(q) {
                q = q.screens || [];
                for (var F = q.length, d = 0; d < F; ++d)
                    if (q[d].loungeToken == p.token) {
                        t(q[d].status == "online");
                        return
                    }
                t(!1)
            }, k), (0, g.H9)(function() {
                t(!1)
            }, k))
        },
        I44 = function(k, p) {
            a: if ($9a(p) != $9a(k.T)) var t = !1;
                else {
                    t = g.DV(p);
                    for (var J = t.length, q = 0; q < J; ++q)
                        if (!k.T[t[q]]) {
                            t = !1;
                            break a
                        }
                    t = !0
                }t || (iz4("Updated online screens: " + g.L9(k.T)), k.T = p, k.publish("screenChange"));GEn(k)
        },
        Uj = function(k) {
            isNaN(k.N) || g.N8(k.N);
            k.N = g.fY((0, g.H9)(k.k9, k), k.C > 0 && k.C < g.kn() ? 2E4 : 1E4)
        },
        iz4 = function(k) {
            tE("OnlineScreenService", k)
        },
        X74 = function(k) {
            var p = {};
            g.y1(k.S(), function(t) {
                t.token ? p[t.token] = t.id : this.Sh("Requesting availability of screen w/o lounge token.")
            });
            return p
        },
        GEn = function(k) {
            k = g.DV(g.CE(k.T, function(p) {
                return p
            }));
            g.SD(k);
            k.length ? g.cz("yt-remote-online-screen-ids", k.join(","), 60) : g.wu("yt-remote-online-screen-ids")
        },
        fd = function(k, p) {
            p = p === void 0 ? !1 : p;
            $4.call(this, "ScreenService");
            this.C = k;
            this.Z = p;
            this.T = this.Y = null;
            this.N = [];
            this.X = {};
            RNK(this)
        },
        zNK = function(k, p, t, J, q, F) {
            k.info("getAutomaticScreenByIds " + t + " / " + p);
            t || (t = k.X[p]);
            var d = k.Wn(),
                S = t ? Ss(d, t) : null;
            t && (k.Z || S) || (S = Ss(d, p));
            if (S) {
                S.uuid = p;
                var U = bj(k, S);
                PrC(k.T, U, function(f) {
                    q(f ? U : null)
                })
            } else t ? B6S(k, t, (0, g.H9)(function(f) {
                var b = bj(this, new $G({
                    name: J,
                    screenId: t,
                    loungeToken: f,
                    dialId: p || ""
                }));
                PrC(this.T, b, function(N) {
                    q(N ? b : null)
                })
            }, k), F) : q(null)
        },
        eNc = function(k, p) {
            for (var t = k.screens.length, J = 0; J < t; ++J)
                if (k.screens[J].name == p) return k.screens[J];
            return null
        },
        hNc = function(k, p, t) {
            PrC(k.T, p, t)
        },
        B6S = function(k, p, t, J) {
            k.info("requestLoungeToken_ for " + p);
            var q = {
                postParams: {
                    screen_ids: p
                },
                method: "POST",
                context: k,
                onSuccess: function(F, d) {
                    F = d && d.screens || [];
                    F[0] && F[0].screenId == p ? t(F[0].loungeToken) : J(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    J(Error("Request screen lounge token failed"))
                }
            };
            g.mG(k4(k.C, "/pairing/get_lounge_token_batch"), q)
        },
        a4a = function(k) {
            k.screens = k.Y.Wn();
            var p = k.X,
                t = {},
                J;
            for (J in p) t[p[J]] = J;
            p = k.screens.length;
            for (J = 0; J < p; ++J) {
                var q = k.screens[J];
                q.uuid = t[q.id] || ""
            }
            k.info("Updated manual screens: " + j3q(k.screens))
        },
        RNK = function(k) {
            MYS(k);
            k.Y = new Ej(k.C);
            k.Y.subscribe("screenChange", (0, g.H9)(k.jYr, k));
            a4a(k);
            k.Z || (k.N = l8c(g.nG("yt-remote-automatic-screen-cache") || []));
            MYS(k);
            k.info("Initializing automatic screens: " + j3q(k.N));
            k.T = new QgQ(k.C, (0, g.H9)(k.Wn, k, !0));
            k.T.subscribe("screenChange", (0, g.H9)(function() {
                this.publish("onlineScreenChange")
            }, k))
        },
        bj = function(k, p) {
            var t = k.get(p.id);
            t ? (t.uuid = p.uuid, p = t) : ((t = Ss(k.N, p.uuid)) ? (t.id = p.id, t.token = p.token, p = t) : k.N.push(p), k.Z || gpR(k));
            MYS(k);
            k.X[p.uuid] = p.id;
            g.cz("yt-remote-device-id-map", k.X, 31536E3);
            return p
        },
        gpR = function(k) {
            k = g.dZ(k.N, function(p) {
                return p.idType != "shortLived"
            });
            g.cz("yt-remote-automatic-screen-cache", g.DR(k, glS))
        },
        MYS = function(k) {
            k.X = g.nG("yt-remote-device-id-map") || {}
        },
        N3 = function(k, p, t) {
            g.o$.call(this);
            this.j6 = t;
            this.C = k;
            this.Y = p;
            this.T = null
        },
        yz = function(k, p) {
            k.T = p;
            k.publish("sessionScreen", k.T)
        },
        umc = function(k, p) {
            k.T && (k.T.token = p, bj(k.C, k.T));
            k.publish("sessionScreen", k.T)
        },
        Y4 = function(k, p) {
            tE(k.j6, p)
        },
        TN = function(k, p, t) {
            N3.call(this, k, p, "CastSession");
            var J = this;
            this.config_ = t;
            this.N = null;
            this.Y8 = (0, g.H9)(this.xv, this);
            this.P0 = (0, g.H9)(this.SrS, this);
            this.gy = g.fY(function() {
                l4a(J, null)
            }, 12E4);
            this.Z = this.X = this.S = this.B = 0;
            this.NO = !1;
            this.L = "unknown"
        },
        OzC = function(k, p) {
            g.N8(k.Z);
            k.Z = 0;
            p == 0 ? jgS(k) : k.Z = g.fY(function() {
                jgS(k)
            }, p)
        },
        jgS = function(k) {
            KDA(k, "getLoungeToken");
            g.N8(k.X);
            k.X = g.fY(function() {
                HzC(k, null)
            }, 3E4)
        },
        KDA = function(k, p) {
            k.info("sendYoutubeMessage_: " + p + " " + g.L9());
            var t = {};
            t.type = p;
            k.N ? k.N.sendMessage("urn:x-cast:com.google.youtube.mdx", t, function() {}, (0, g.H9)(function() {
                Y4(this, "Failed to send message: " + p + ".")
            }, k)) : Y4(k, "Sending yt message without session: " + g.L9(t))
        },
        xv9 = function(k, p) {
            p ? (k.info("onConnectedScreenId_: Received screenId: " + p), k.T && k.T.id == p || k.a_(p, function(t) {
                yz(k, t)
            }, function() {
                return k.cR()
            }, 5)) : k.cR(Error("Waiting for session status timed out."))
        },
        p3S = function(k, p, t) {
            k.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(p));
            var J = new $G(p);
            kpQ(k, J, function(q) {
                q ? (k.NO = !0, bj(k.C, J), yz(k, J), k.L = "unknown", OzC(k, t)) : (g.lw(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(p) + " is not online.")), k.cR())
            }, 5)
        },
        l4a = function(k, p) {
            g.N8(k.gy);
            k.gy = 0;
            p ? k.config_.enableCastLoungeToken && p.loungeToken ? p.deviceId ? k.T && k.T.uuid == p.deviceId || (p.loungeTokenRefreshIntervalMs ? p3S(k, {
                    name: k.Y.friendlyName,
                    screenId: p.screenId,
                    loungeToken: p.loungeToken,
                    dialId: p.deviceId,
                    screenIdType: "shortLived"
                }, p.loungeTokenRefreshIntervalMs) : (g.lw(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(p) + ".")), xv9(k, p.screenId))) : (g.lw(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(p) + ".")), xv9(k, p.screenId)) :
                xv9(k, p.screenId) : k.cR(Error("Waiting for session status timed out."))
        },
        HzC = function(k, p) {
            g.N8(k.X);
            k.X = 0;
            var t = null;
            if (p)
                if (p.loungeToken) {
                    var J;
                    ((J = k.T) == null ? void 0 : J.token) == p.loungeToken && (t = "staleLoungeToken")
                } else t = "missingLoungeToken";
            else t = "noLoungeTokenResponse";
            t ? (k.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(p) + ", error: " + t)), k.L = t, OzC(k, 3E4)) : (umc(k, p.loungeToken), k.NO = !1, k.L = "unknown", OzC(k, p.loungeTokenRefreshIntervalMs))
        },
        kpQ = function(k, p, t, J) {
            g.N8(k.S);
            k.S = 0;
            hNc(k.C, p, function(q) {
                q || J < 0 ? t(q) : k.S = g.fY(function() {
                    kpQ(k, p, t, J - 1)
                }, 300)
            })
        },
        thS = function(k) {
            g.N8(k.B);
            k.B = 0;
            g.N8(k.S);
            k.S = 0;
            g.N8(k.gy);
            k.gy = 0;
            g.N8(k.X);
            k.X = 0;
            g.N8(k.Z);
            k.Z = 0
        },
        rz = function(k, p, t, J) {
            N3.call(this, k, p, "DialSession");
            this.config_ = J;
            this.N = this.B = null;
            this.P0 = "";
            this.RY = t;
            this.qO = null;
            this.gy = function() {};
            this.L = NaN;
            this.Oy = (0, g.H9)(this.RJ, this);
            this.X = function() {};
            this.Z = this.S = 0;
            this.Y8 = !1;
            this.NO = "unknown"
        },
        ZG = function(k) {
            var p;
            return !!(k.config_.enableDialLoungeToken && ((p = k.N) == null ? 0 : p.getDialAppInfo))
        },
        JyQ = function(k) {
            k.X = k.C.Qa(k.P0, k.Y.label, k.Y.friendlyName, ZG(k), function(p, t) {
                k.X = function() {};
                k.Y8 = !0;
                yz(k, p);
                p.idType == "shortLived" && t > 0 && Cd(k, t)
            }, function(p) {
                k.X = function() {};
                k.cR(p)
            })
        },
        oZS = function(k) {
            var p = {};
            p.pairingCode = k.P0;
            p.theme = k.RY;
            EXS() && (p.env_useStageMdx = 1);
            return g.er(p)
        },
        qwc = function(k) {
            return new Promise(function(p) {
                k.P0 = OFL();
                if (k.qO) {
                    var t = new chrome.cast.DialLaunchResponse(!0, oZS(k));
                    p(t);
                    JyQ(k)
                } else k.gy = function() {
                    g.N8(k.L);
                    k.gy = function() {};
                    k.L = NaN;
                    var J = new chrome.cast.DialLaunchResponse(!0, oZS(k));
                    p(J);
                    JyQ(k)
                }, k.L = g.fY(function() {
                    k.gy()
                }, 100)
            })
        },
        $DA = function(k, p, t) {
            k.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(p));
            var J = new $G(p);
            return (new Promise(function(q) {
                FfL(k, J, function(F) {
                    F ? (k.Y8 = !0, bj(k.C, J), yz(k, J), Cd(k, t)) : g.lw(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(p) + " is not online."));
                    q(F)
                }, 5)
            })).then(function(q) {
                return q ? new chrome.cast.DialLaunchResponse(!1) : qwc(k)
            })
        },
        dDK = function(k, p) {
            var t = k.B.receiver.label,
                J = k.Y.friendlyName;
            return (new Promise(function(q) {
                zNK(k.C, t, p, J, function(F) {
                    F && F.token && yz(k, F);
                    q(F)
                }, function(F) {
                    Y4(k, "Failed to get DIAL screen: " + F);
                    q(null)
                })
            })).then(function(q) {
                return q && q.token ? new chrome.cast.DialLaunchResponse(!1) : qwc(k)
            })
        },
        FfL = function(k, p, t, J) {
            g.N8(k.S);
            k.S = 0;
            hNc(k.C, p, function(q) {
                q || J < 0 ? t(q) : k.S = g.fY(function() {
                    FfL(k, p, t, J - 1)
                }, 300)
            })
        },
        Cd = function(k, p) {
            k.info("getDialAppInfoWithTimeout_ " + p);
            ZG(k) && (g.N8(k.Z), k.Z = 0, p == 0 ? EZa(k) : k.Z = g.fY(function() {
                EZa(k)
            }, p))
        },
        EZa = function(k) {
            ZG(k) && k.N.getDialAppInfo(function(p) {
                k.info("getDialAppInfo dialLaunchData: " + JSON.stringify(p));
                p = p.extraData || {};
                var t = null;
                if (p.loungeToken) {
                    var J;
                    ((J = k.T) == null ? void 0 : J.token) == p.loungeToken && (t = "staleLoungeToken")
                } else t = "missingLoungeToken";
                t ? (k.NO = t, Cd(k, 3E4)) : (k.Y8 = !1, k.NO = "unknown", umc(k, p.loungeToken), Cd(k, p.loungeTokenRefreshIntervalMs))
            }, function(p) {
                k.info("getDialAppInfo error: " + p);
                k.NO = "noLoungeTokenResponse";
                Cd(k, 3E4)
            })
        },
        SwS = function(k) {
            g.N8(k.S);
            k.S = 0;
            g.N8(k.Z);
            k.Z = 0;
            k.X();
            k.X = function() {};
            g.N8(k.L)
        },
        AE = function(k, p) {
            N3.call(this, k, p, "ManualSession");
            this.N = g.fY((0, g.H9)(this.y8, this, null), 150)
        },
        mA = function(k, p) {
            g.o$.call(this);
            this.config_ = p;
            this.Y = k;
            this.B = p.appId || "233637DE";
            this.C = p.theme || "cl";
            this.L = p.disableCastApi || !1;
            this.S = p.forceMirroring || !1;
            this.T = null;
            this.Z = !1;
            this.N = [];
            this.X = (0, g.H9)(this.QG0, this)
        },
        UDn = function(k, p) {
            return p ? g.j9(k.N, function(t) {
                return da(p, t.label)
            }, k) : null
        },
        Vz = function(k) {
            tE("Controller", k)
        },
        CrK = function(k) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(k)
        },
        W_ = function(k) {
            return k.Z || !!k.N.length || !!k.T
        },
        DG = function(k, p, t) {
            p != k.T && (g.ER(k.T), (k.T = p) ? (t ? k.publish("yt-remote-cast2-receiver-resumed",
                p.Y) : k.publish("yt-remote-cast2-receiver-selected", p.Y), p.subscribe("sessionScreen", (0, g.H9)(k.hh, k, p)), p.subscribe("sessionFailed", function() {
                return f14(k, p)
            }), p.T ? k.publish("yt-remote-cast2-session-change", p.T) : t && k.T.y8(null)) : k.publish("yt-remote-cast2-session-change", null))
        },
        f14 = function(k, p) {
            k.T == p && k.publish("yt-remote-cast2-session-failed")
        },
        bwL = function(k) {
            var p = k.Y.jr(),
                t = k.T && k.T.Y;
            k = g.DR(p, function(J) {
                t && da(J, t.label) && (t = null);
                var q = J.uuid ? J.uuid : J.id,
                    F = UDn(this, J);
                F ? (F.label = q, F.friendlyName = J.name) : (F = new chrome.cast.Receiver(q, J.name), F.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return F
            }, k);
            t && (t.receiverType != chrome.cast.ReceiverType.CUSTOM && (t = new chrome.cast.Receiver(t.label, t.friendlyName), t.receiverType = chrome.cast.ReceiverType.CUSTOM), k.push(t));
            return k
        },
        CcS = function(k, p, t, J) {
            J.disableCastApi ? sj("Cannot initialize because disabled by Mdx config.") : NXS() ? yyJ(p, J) && (YwQ(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? TXS(k, t) : (window.__onGCastApiAvailable = function(q, F) {
                q ? TXS(k, t) : (Ld("Failed to load cast API: " + F), ryL(!1), YwQ(!1), g.wu("yt-remote-cast-available"), g.wu("yt-remote-cast-receiver"),
                    ZwK(), t(!1))
            }, J.loadCastApiSetupScript ? g.q1("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? U8W() >= 60 && C69() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? yeC() : U8W() >= 89 ? m8c() : (ZYL(), Ta(Aec.map(YGn))))) : sj("Cannot initialize because not running Chrome")
        },
        ZwK = function() {
            sj("dispose");
            var k = v_();
            k && k.dispose();
            g.eM("yt.mdx.remote.cloudview.instance_", null);
            AyW(!1);
            g.Jn(mDS);
            mDS.length = 0
        },
        c_ = function() {
            return !!g.nG("yt-remote-cast-installed")
        },
        Vh9 = function() {
            var k = g.nG("yt-remote-cast-receiver");
            return k ? k.friendlyName : null
        },
        Wf4 = function() {
            sj("clearCurrentReceiver");
            g.wu("yt-remote-cast-receiver")
        },
        DDW = function() {
            return c_() ? v_() ? v_().getCastSession() : (Ld("getCastSelector: Cast is not initialized."), null) : (Ld("getCastSelector: Cast API is not installed!"), null)
        },
        swQ = function() {
            c_() ? v_() ? nd() ? (sj("Requesting cast selector."), v_().requestSession()) : (sj("Wait for cast API to be ready to request the session."), mDS.push(g.tn("yt-remote-cast2-api-ready", swQ))) : Ld("requestCastSelector: Cast is not initialized.") : Ld("requestCastSelector: Cast API is not installed!")
        },
        wz = function(k, p) {
            nd() ? v_().setConnectedScreenStatus(k, p) : Ld("setConnectedScreenStatus called before ready.")
        },
        NXS = function() {
            var k = g.nc().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.sD || k
        },
        LfJ = function(k, p) {
            v_().init(k, p)
        },
        yyJ = function(k, p) {
            var t = !1;
            v_() || (k = new mA(k, p), k.subscribe("yt-remote-cast2-availability-change", function(J) {
                g.cz("yt-remote-cast-available", J);
                yA("yt-remote-cast2-availability-change", J)
            }), k.subscribe("yt-remote-cast2-receiver-selected", function(J) {
                sj("onReceiverSelected: " + J.friendlyName);
                g.cz("yt-remote-cast-receiver", J);
                yA("yt-remote-cast2-receiver-selected", J)
            }), k.subscribe("yt-remote-cast2-receiver-resumed", function(J) {
                sj("onReceiverResumed: " + J.friendlyName);
                g.cz("yt-remote-cast-receiver", J);
                yA("yt-remote-cast2-receiver-resumed", J)
            }), k.subscribe("yt-remote-cast2-session-change", function(J) {
                sj("onSessionChange: " + E4(J));
                J || g.wu("yt-remote-cast-receiver");
                yA("yt-remote-cast2-session-change", J)
            }), g.eM("yt.mdx.remote.cloudview.instance_", k), t = !0);
            sj("cloudview.createSingleton_: " + t);
            return t
        },
        v_ = function() {
            return g.hw("yt.mdx.remote.cloudview.instance_")
        },
        TXS = function(k, p) {
            ryL(!0);
            YwQ(!1);
            LfJ(k, function(t) {
                t ? (AyW(!0), g.oN("yt-remote-cast2-api-ready")) : (Ld("Failed to initialize cast API."), ryL(!1), g.wu("yt-remote-cast-available"), g.wu("yt-remote-cast-receiver"), ZwK());
                p(t)
            })
        },
        sj = function(k) {
            tE("cloudview", k)
        },
        Ld = function(k) {
            tE("cloudview", k)
        },
        ryL = function(k) {
            sj("setCastInstalled_ " + k);
            g.cz("yt-remote-cast-installed", k)
        },
        nd = function() {
            return !!g.hw("yt.mdx.remote.cloudview.apiReady_")
        },
        AyW = function(k) {
            sj("setApiReady_ " + k);
            g.eM("yt.mdx.remote.cloudview.apiReady_", k)
        },
        YwQ = function(k) {
            g.eM("yt.mdx.remote.cloudview.initializing_", k)
        },
        ij = function(k) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.S = this.Z = 0;
            this.trackData = null;
            this.Vr = this.xo = !1;
            this.B = this.X = this.T = this.C = 0;
            this.N = NaN;
            this.Y = !1;
            this.reset(k)
        },
        vZS = function(k) {
            k.audioTrackId = null;
            k.trackData = null;
            k.playerState = -1;
            k.xo = !1;
            k.Vr = !1;
            k.Z = 0;
            k.S = g.kn();
            k.C = 0;
            k.T = 0;
            k.X = 0;
            k.B = 0;
            k.N = NaN;
            k.Y = !1
        },
        Qz = function(k) {
            return k.isPlaying() ? (g.kn() - k.S) / 1E3 : 0
        },
        P_ = function(k, p) {
            k.Z = p;
            k.S = g.kn()
        },
        GN = function(k) {
            switch (k.playerState) {
                case 1:
                case 1081:
                    return (g.kn() - k.S) / 1E3 + k.Z;
                case -1E3:
                    return 0
            }
            return k.Z
        },
        IE = function(k, p, t) {
            var J = k.videoId;
            k.videoId = p;
            k.index = t;
            p != J && vZS(k)
        },
        cyW = function(k) {
            var p = {};
            p.index = k.index;
            p.listId = k.listId;
            p.videoId = k.videoId;
            p.playerState = k.playerState;
            p.volume = k.volume;
            p.muted = k.muted;
            p.audioTrackId = k.audioTrackId;
            p.trackData = g.Qx(k.trackData);
            p.hasPrevious = k.xo;
            p.hasNext = k.Vr;
            p.playerTime = k.Z;
            p.playerTimeAt = k.S;
            p.seekableStart = k.C;
            p.seekableEnd = k.T;
            p.duration = k.X;
            p.loadedTime = k.B;
            p.liveIngestionTime = k.N;
            return p
        },
        RE = function(k, p) {
            g.o$.call(this);
            var t = this;
            this.N = 0;
            this.C = k;
            this.S = [];
            this.X = new op9;
            this.Y = this.T = null;
            this.L = (0, g.H9)(this.yjT, this);
            this.Z = (0, g.H9)(this.Gc, this);
            this.B = (0, g.H9)(this.TSy, this);
            this.gy = (0, g.H9)(this.YF6, this);
            var J = 0;
            k ? (J = k.getProxyState(), J != 3 && (k.subscribe("proxyStateChange", this.j9, this), nZS(this))) : J = 3;
            J != 0 && (p ? this.j9(J) : g.fY(function() {
                t.j9(J)
            }, 0));
            (k = DDW()) && XW(this, k);
            this.subscribe("yt-remote-cast2-session-change", this.gy)
        },
        B_ = function(k) {
            return new ij(k.C.getPlayerContextData())
        },
        nZS = function(k) {
            g.y1("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(p) {
                this.S.push(this.C.subscribe(p, g.xh(this.P1h, p), this))
            }, k)
        },
        w3Q = function(k) {
            g.y1(k.S, function(p) {
                this.C.unsubscribeByKey(p)
            }, k);
            k.S.length = 0
        },
        zN = function(k) {
            return k.getState() == 1
        },
        eS = function(k, p) {
            var t = k.X;
            t.T.length + t.Y.length < 50 && k.X.enqueue(p)
        },
        iw4 = function(k, p, t) {
            var J = B_(k);
            P_(J, t);
            J.playerState != -1E3 && (J.playerState = p);
            hE(k, J)
        },
        aE = function(k, p, t) {
            k.C.sendMessage(p, t)
        },
        hE = function(k, p) {
            w3Q(k);
            k.C.setPlayerContextData(cyW(p));
            nZS(k)
        },
        XW = function(k, p) {
            k.Y && (k.Y.removeUpdateListener(k.L), k.Y.removeMediaListener(k.Z), k.Gc(null));
            k.Y = p;
            k.Y && (JE("Setting cast session: " + k.Y.sessionId), k.Y.addUpdateListener(k.L), k.Y.addMediaListener(k.Z), k.Y.media.length && k.Gc(k.Y.media[0]))
        },
        QwQ = function(k) {
            var p = k.T.media,
                t = k.T.customData;
            if (p && t) {
                var J = B_(k);
                p.contentId != J.videoId && JE("Cast changing video to: " + p.contentId);
                J.videoId = p.contentId;
                J.playerState = t.playerState;
                P_(J, k.T.getEstimatedTime());
                hE(k, J)
            } else JE("No cast media video. Ignoring state update.")
        },
        M3 = function(k, p, t) {
            return (0, g.H9)(function(J) {
                this.Sh("Failed to " + p + " with cast v2 channel. Error code: " + J.code);
                J.code != chrome.cast.ErrorCode.TIMEOUT && (this.Sh("Retrying " + p + " using MDx browser channel."), aE(this, p, t))
            }, k)
        },
        lj = function(k, p, t, J) {
            J = J === void 0 ? !1 : J;
            g.o$.call(this);
            var q = this;
            this.S = NaN;
            this.P0 = !1;
            this.L = this.B = this.Y8 = this.NO = NaN;
            this.gy = [];
            this.X = this.Z = this.C = this.T = this.Y = null;
            this.qO = k;
            this.Oy = J;
            this.gy.push(g.ru(window, "beforeunload", function() {
                q.iK(2)
            }));
            this.N = [];
            this.T = new ij;
            this.RY = p.id;
            this.j6 = p.idType;
            this.Y = ZzQ(this.qO, t, this.Mj, this.j6 == "shortLived", this.RY);
            this.Y.listen("channelOpened", function() {
                Pcq(q)
            });
            this.Y.listen("channelClosed", function() {
                gz("Channel closed");
                isNaN(q.S) ? bI(!0) : bI();
                q.dispose()
            });
            this.Y.listen("channelError", function(F) {
                bI();
                isNaN(q.Zi()) ? (F == 1 && q.j6 == "shortLived" && q.publish("browserChannelAuthError", F), gz("Channel error: " + F + " without reconnection"), q.dispose()) : (q.P0 = !0, gz("Channel error: " + F + " with reconnection in " + q.Zi() + " ms"), uj(q, 2))
            });
            this.Y.listen("channelMessage", function(F) {
                GpK(q, F)
            });
            this.Y.GR(p.token);
            this.subscribe("remoteQueueChange", function() {
                var F = q.T.videoId;
                g.ik() && g.cz("yt-remote-session-video-id", F)
            })
        },
        I1C = function(k) {
            return g.j9(k.N, function(p) {
                return p.type == "LOUNGE_SCREEN"
            })
        },
        gz = function(k) {
            tE("conn", k)
        },
        uj = function(k, p) {
            k.publish("proxyStateChange", p)
        },
        X34 = function(k) {
            k.S = g.fY(function() {
                gz("Connecting timeout");
                k.iK(1)
            }, 2E4)
        },
        Rj9 = function(k) {
            g.N8(k.S);
            k.S = NaN
        },
        BXc = function(k) {
            g.N8(k.NO);
            k.NO = NaN
        },
        ejR = function(k) {
            zjA(k);
            k.Y8 = g.fY(function() {
                jS(k, "getNowPlaying")
            }, 2E4)
        },
        zjA = function(k) {
            g.N8(k.Y8);
            k.Y8 = NaN
        },
        Pcq = function(k) {
            gz("Channel opened");
            k.P0 && (k.P0 = !1, BXc(k), k.NO = g.fY(function() {
                gz("Timing out waiting for a screen.");
                k.iK(1)
            }, 15E3))
        },
        a19 = function(k, p) {
            var t = null;
            if (p) {
                var J = I1C(k);
                J && (t = {
                    clientName: J.clientName,
                    deviceMake: J.brand,
                    deviceModel: J.model,
                    osVersion: J.osVersion
                })
            }
            g.eM("yt.mdx.remote.remoteClient_", t);
            p && (Rj9(k), BXc(k));
            t = k.Y.gD() && isNaN(k.S);
            p == t ? p && (uj(k, 1), jS(k, "getSubtitlesTrack")) : p ? (k.GP() && k.T.reset(), uj(k, 1), jS(k, "getNowPlaying"), hjc(k)) : k.iK(1)
        },
        MhL = function(k, p) {
            var t = p.params.videoId;
            delete p.params.videoId;
            t == k.T.videoId && (g.cQ(p.params) ? k.T.trackData = null : k.T.trackData = p.params, k.publish("remotePlayerChange"))
        },
        gZq = function(k, p, t) {
            var J = p.params.videoId || p.params.video_id,
                q = parseInt(p.params.currentIndex, 10);
            k.T.listId = p.params.listId || k.T.listId;
            IE(k.T, J, q);
            k.publish("remoteQueueChange", t)
        },
        l1n = function(k, p) {
            p.params = p.params || {};
            gZq(k, p, "NOW_PLAYING_MAY_CHANGE");
            us4(k, p);
            k.publish("autoplayDismissed")
        },
        us4 = function(k, p) {
            var t = parseInt(p.params.currentTime || p.params.current_time, 10);
            P_(k.T, isNaN(t) ? 0 : t);
            t = parseInt(p.params.state, 10);
            t = isNaN(t) ? -1 : t;
            t == -1 && k.T.playerState == -1E3 && (t = -1E3);
            k.T.playerState = t;
            t = Number(p.params.loadedTime);
            k.T.B = isNaN(t) ? 0 : t;
            k.T.gP(Number(p.params.duration));
            t = k.T;
            var J = Number(p.params.liveIngestionTime);
            t.N = J;
            t.Y = isNaN(J) ? !1 : !0;
            t = k.T;
            J = Number(p.params.seekableStartTime);
            p = Number(p.params.seekableEndTime);
            t.C = isNaN(J) ? 0 : J;
            t.T = isNaN(p) ? 0 : p;
            k.T.playerState == 1 ? ejR(k) : zjA(k);
            k.publish("remotePlayerChange")
        },
        jwa = function(k, p) {
            if (k.T.playerState != -1E3) {
                var t =
                    1085;
                switch (parseInt(p.params.adState, 10)) {
                    case 1:
                        t = 1081;
                        break;
                    case 2:
                        t = 1084;
                        break;
                    case 0:
                        t = 1083
                }
                k.T.playerState = t;
                p = parseInt(p.params.currentTime, 10);
                P_(k.T, isNaN(p) ? 0 : p);
                k.publish("remotePlayerChange")
            }
        },
        Owq = function(k, p) {
            var t = p.params.muted == "true";
            k.T.volume = parseInt(p.params.volume, 10);
            k.T.muted = t;
            k.publish("remotePlayerChange")
        },
        KfS = function(k, p) {
            k.Z = p.params.videoId;
            k.publish("nowAutoplaying", parseInt(p.params.timeout, 10))
        },
        HwK = function(k, p) {
            k.Z = p.params.videoId || null;
            k.publish("autoplayUpNext", k.Z)
        },
        xDW = function(k, p) {
            k.X = p.params.autoplayMode;
            k.publish("autoplayModeChange", k.X);
            k.X == "DISABLED" && k.publish("autoplayDismissed")
        },
        kvS = function(k, p) {
            var t = p.params.hasNext == "true";
            k.T.xo = p.params.hasPrevious == "true";
            k.T.Vr = t;
            k.publish("previousNextChange")
        },
        GpK = function(k, p) {
            p = p.message;
            p.params ? gz("Received: action=" + p.action + ", params=" + g.L9(p.params)) : gz("Received: action=" + p.action + " {}");
            switch (p.action) {
                case "loungeStatus":
                    p = pM(p.params.devices);
                    k.N = g.DR(p, function(J) {
                        return new FP(J)
                    });
                    p = !!g.j9(k.N, function(J) {
                        return J.type == "LOUNGE_SCREEN"
                    });
                    a19(k, p);
                    p = k.U5("mlm");
                    k.publish("multiStateLoopEnabled", p);
                    break;
                case "loungeScreenDisconnected":
                    g.k2(k.N, function(J) {
                        return J.type == "LOUNGE_SCREEN"
                    });
                    a19(k, !1);
                    break;
                case "remoteConnected":
                    var t = new FP(pM(p.params.device));
                    g.j9(k.N, function(J) {
                        return J.MR(t)
                    }) || FxA(k.N, t);
                    break;
                case "remoteDisconnected":
                    t = new FP(pM(p.params.device));
                    g.k2(k.N, function(J) {
                        return J.MR(t)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    gZq(k, p, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    l1n(k, p);
                    break;
                case "onStateChange":
                    us4(k, p);
                    break;
                case "onAdStateChange":
                    jwa(k, p);
                    break;
                case "onVolumeChanged":
                    Owq(k, p);
                    break;
                case "onSubtitlesTrackChanged":
                    MhL(k, p);
                    break;
                case "nowAutoplaying":
                    KfS(k, p);
                    break;
                case "autoplayDismissed":
                    k.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    HwK(k, p);
                    break;
                case "onAutoplayModeChanged":
                    xDW(k, p);
                    break;
                case "onHasPreviousNextChanged":
                    kvS(k,
                        p);
                    break;
                case "requestAssistedSignIn":
                    k.publish("assistedSignInRequested", p.params.authCode);
                    break;
                case "onLoopModeChanged":
                    k.publish("loopModeChange", p.params.loopMode);
                    break;
                default:
                    gz("Unrecognized action: " + p.action)
            }
        },
        hjc = function(k) {
            g.N8(k.L);
            k.L = g.fY(function() {
                k.iK(1)
            }, 864E5)
        },
        jS = function(k, p, t) {
            t ? gz("Sending: action=" + p + ", params=" + g.L9(t)) : gz("Sending: action=" + p);
            k.Y.sendMessage(p, t)
        },
        pS4 = function(k) {
            $4.call(this, "ScreenServiceProxy");
            this.jE = k;
            this.T = [];
            this.T.push(this.jE.$_s("screenChange", (0, g.H9)(this.Z7, this)));
            this.T.push(this.jE.$_s("onlineScreenChange", (0, g.H9)(this.UP0, this)))
        },
        FYL = function(k, p) {
            d8C();
            if (!N$ || !N$.get("yt-remote-disable-remote-module-for-dev")) {
                p = g.M9("MDX_CONFIG") || p;
                x9a();
                JeA();
                Oj || (Oj = new xG(p ? p.loungeApiHost : void 0), EXS() && (Oj.T = "/api/loungedev"));
                Kd || (Kd = g.hw("yt.mdx.remote.deferredProxies_") || [], g.eM("yt.mdx.remote.deferredProxies_", Kd));
                tWR();
                var t = H_();
                if (!t) {
                    var J = new fd(Oj, p ? p.disableAutomaticScreenCache || !1 : !1);
                    g.eM("yt.mdx.remote.screenService_", J);
                    t = H_();
                    var q = {};
                    p && (q = {
                        appId: p.appId,
                        disableDial: p.disableDial,
                        theme: p.theme,
                        loadCastApiSetupScript: p.loadCastApiSetupScript,
                        disableCastApi: p.disableCastApi,
                        enableDialLoungeToken: p.enableDialLoungeToken,
                        enableCastLoungeToken: p.enableCastLoungeToken,
                        forceMirroring: p.forceMirroring
                    });
                    g.eM("yt.mdx.remote.enableConnectWithInitialState_", p ? p.enableConnectWithInitialState || !1 : !1);
                    CcS(k, J, function(F) {
                        F ? x4() && wz(x4(), "YouTube TV") : J.subscribe("onlineScreenChange", function() {
                            yA("yt-remote-receiver-availability-change")
                        })
                    }, q)
                }
                p && !g.hw("yt.mdx.remote.initialized_") && (g.eM("yt.mdx.remote.initialized_", !0), k$("Initializing: " + g.L9(p)),
                    ps.push(g.tn("yt-remote-cast2-api-ready", function() {
                        yA("yt-remote-api-ready")
                    })), ps.push(g.tn("yt-remote-cast2-availability-change", function() {
                        yA("yt-remote-receiver-availability-change")
                    })), ps.push(g.tn("yt-remote-cast2-receiver-selected", function() {
                        tI(null);
                        yA("yt-remote-auto-connect", "cast-selector-receiver")
                    })), ps.push(g.tn("yt-remote-cast2-receiver-resumed", function() {
                        yA("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), ps.push(g.tn("yt-remote-cast2-session-change", Jn4)), ps.push(g.tn("yt-remote-connection-change", function(F) {
                        F ? wz(x4(), "YouTube TV") : JI() || (wz(null, null), Wf4())
                    })), ps.push(g.tn("yt-remote-cast2-session-failed", function() {
                        yA("yt-remote-connection-failed")
                    })), k = o5R(), p.isAuto && (k.id += "#dial"), q = p.capabilities || [], g.TQ("desktop_enable_autoplay") &&
                    q.push("atp"), q.length > 0 && (k.capabilities = q), k.name = p.device, k.app = p.app, (p = p.theme) && (k.theme = p), k$(" -- with channel params: " + g.L9(k)), k ? (g.cz("yt-remote-session-app", k.app), g.cz("yt-remote-session-name", k.name)) : (g.wu("yt-remote-session-app"), g.wu("yt-remote-session-name")), g.eM("yt.mdx.remote.channelParams_", k), t.start(), x4() || q3W())
            }
        },
        $1L = function() {
            var k = H_().jE.$_gos();
            var p = oC();
            p && qx() && (HFW(k, p) || k.push(p));
            return Kx9(k)
        },
        E59 = function() {
            var k = d1n();
            !k && c_() && Vh9() && (k = {
                key: "cast-selector-receiver",
                name: Vh9()
            });
            return k
        },
        d1n = function() {
            var k = $1L(),
                p = oC();
            p || (p = JI());
            return g.j9(k, function(t) {
                return p && da(p, t.key) ? !0 : !1
            })
        },
        oC = function() {
            var k = x4();
            if (!k) return null;
            var p = H_().Wn();
            return Ss(p, k)
        },
        Jn4 = function(k) {
            k$("remote.onCastSessionChange_: " + E4(k));
            if (k) {
                var p = oC();
                if (p && p.id == k.id) {
                    if (wz(p.id, "YouTube TV"), k.idType == "shortLived" && (k = k.token)) FQ && (FQ.token = k), (p = qx()) && p.GR(k)
                } else p && $$(), ds(k, 1)
            } else qx() && $$()
        },
        $$ = function() {
            nd() ? v_().stopSession() : Ld("stopSession called before API ready.");
            var k = qx();
            k && (k.disconnect(1), S3A(null))
        },
        U1Q = function() {
            var k = qx();
            return !!k && k.getProxyState() != 3
        },
        k$ = function(k) {
            tE("remote", k)
        },
        H_ = function() {
            if (!fiJ) {
                var k = g.hw("yt.mdx.remote.screenService_");
                fiJ = k ? new pS4(k) : null
            }
            return fiJ
        },
        x4 = function() {
            return g.hw("yt.mdx.remote.currentScreenId_")
        },
        b0J = function(k) {
            g.eM("yt.mdx.remote.currentScreenId_", k)
        },
        NOn = function() {
            return g.hw("yt.mdx.remote.connectData_")
        },
        tI = function(k) {
            g.eM("yt.mdx.remote.connectData_", k)
        },
        qx = function() {
            return g.hw("yt.mdx.remote.connection_")
        },
        S3A = function(k) {
            var p = qx();
            tI(null);
            k || b0J("");
            g.eM("yt.mdx.remote.connection_", k);
            Kd && (g.y1(Kd, function(t) {
                t(k)
            }), Kd.length = 0);
            p && !k ? yA("yt-remote-connection-change", !1) : !p && k && yA("yt-remote-connection-change", !0)
        },
        JI = function() {
            var k = g.ik();
            if (!k) return null;
            var p = H_();
            if (!p) return null;
            p = p.Wn();
            return Ss(p, k)
        },
        ds = function(k, p) {
            x4();
            oC() && oC();
            if (E9) FQ = k;
            else {
                b0J(k.id);
                var t = g.hw("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                k = new lj(Oj, k, o5R(), t);
                k.connect(p, NOn());
                k.subscribe("beforeDisconnect", function(J) {
                    yA("yt-remote-before-disconnect", J)
                });
                k.subscribe("beforeDispose", function() {
                    qx() && (qx(), S3A(null))
                });
                k.subscribe("browserChannelAuthError", function() {
                    var J = oC();
                    J && J.idType == "shortLived" && (nd() ? v_().handleBrowserChannelAuthError() : Ld("refreshLoungeToken called before API ready."))
                });
                S3A(k)
            }
        },
        q3W = function() {
            var k = JI();
            k ? (k$("Resume connection to: " + E4(k)), ds(k, 0)) : (bI(), Wf4(), k$("Skipping connecting because no session screen found."))
        },
        tWR = function() {
            var k = o5R();
            if (g.cQ(k)) {
                k = fM();
                var p = g.nG("yt-remote-session-name") || "",
                    t = g.nG("yt-remote-session-app") || "";
                k = {
                    device: "REMOTE_CONTROL",
                    id: k,
                    name: p,
                    app: t,
                    mdxVersion: 3
                };
                k.authuser = String(g.M9("SESSION_INDEX", "0"));
                (p = g.M9("DELEGATED_SESSION_ID")) && (k.pageId = String(p));
                g.eM("yt.mdx.remote.channelParams_", k)
            }
        },
        o5R = function() {
            return g.hw("yt.mdx.remote.channelParams_") || {}
        },
        TOR = function(k, p, t) {
            g.R.call(this);
            var J = this;
            this.module = k;
            this.j = p;
            this.ou = t;
            this.events = new g.nC(this);
            this.C = !1;
            this.X = new g.Kr(64);
            this.T = new g.jF(this.OW, 500, this);
            this.Y = new g.jF(this.xB, 1E3, this);
            this.Z = new ra(this.Bj6, 0, this);
            this.N = {};
            this.B = new g.jF(this.Qd, 1E3, this);
            this.S = new Zp(this.seekTo, 1E3, this);
            this.L = this.events.V(this.j, "onVolumeChange", function(q) {
                ynq(J, q)
            });
            g.z(this, this.events);
            this.events.V(p, "onCaptionsTrackListChanged", this.WWy);
            this.events.V(p, "captionschanged", this.iTh);
            this.events.V(p, "captionssettingschanged", this.nG);
            this.events.V(p, "videoplayerreset", this.YV);
            this.events.V(p, "mdxautoplaycancel", function() {
                J.ou.dU()
            });
            p.D("enable_mdx_video_play_directly") && this.events.V(p, "videodatachange", function() {
                Y3L(J.module) || Sk(J) || U9(J, 0)
            });
            k = this.ou;
            k.MO();
            k.subscribe("proxyStateChange", this.nQ, this);
            k.subscribe("remotePlayerChange", this.pC, this);
            k.subscribe("remoteQueueChange", this.YV, this);
            k.subscribe("previousNextChange", this.fQ, this);
            k.subscribe("nowAutoplaying", this.Rj, this);
            k.subscribe("autoplayDismissed", this.gw, this);
            g.z(this, this.T);
            g.z(this, this.Y);
            g.z(this, this.Z);
            g.z(this, this.B);
            g.z(this, this.S);
            this.nG();
            this.YV();
            this.pC()
        },
        ynq = function(k, p) {
            if (Sk(k)) {
                k.ou.unsubscribe("remotePlayerChange", k.pC, k);
                var t = Math.round(p.volume);
                p = !!p.muted;
                var J = B_(k.ou);
                if (t !== J.volume || p !== J.muted) k.ou.setVolume(t, p), k.B.start();
                k.ou.subscribe("remotePlayerChange", k.pC, k)
            }
        },
        rnR = function(k) {
            k.OF(0);
            k.T.stop();
            k.CT(new g.Kr(64))
        },
        Z0R = function(k, p) {
            if (Sk(k) && !k.C) {
                var t = null;
                p && (t = {
                    style: k.j.getSubtitlesUserSettings()
                }, Object.assign(t, p));
                k.ou.Sr(k.j.getVideoData(1).videoId, t);
                k.N = B_(k.ou).trackData
            }
        },
        U9 = function(k, p) {
            var t = k.j.getPlaylist();
            if (t == null ? 0 : t.listId) {
                var J = t.index;
                var q = t.listId.toString()
            }
            t = k.j.getVideoData(1);
            k.ou.playVideo(t.videoId, p, J, q, t.playerParams, t.j6, qBC(t));
            k.CT(new g.Kr(1))
        },
        C7S = function(k, p) {
            if (p) {
                var t = k.j.getOption("captions", "tracklist", {
                    eO: 1
                });
                t && t.length ? (k.j.setOption("captions", "track", p), k.C = !1) : (k.j.loadModule("captions"), k.C = !0)
            } else k.j.setOption("captions", "track", {})
        },
        Sk = function(k) {
            return B_(k.ou).videoId === k.j.getVideoData(1).videoId
        },
        fs = function() {
            g.M.call(this, {
                K: "div",
                W: "ytp-mdx-popup-dialog",
                J: {
                    role: "dialog"
                },
                U: [{
                    K: "div",
                    W: "ytp-mdx-popup-dialog-inner-content",
                    U: [{
                        K: "div",
                        W: "ytp-mdx-popup-title",
                        sy: "You're signed out"
                    }, {
                        K: "div",
                        W: "ytp-mdx-popup-description",
                        sy: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        K: "div",
                        W: "ytp-mdx-privacy-popup-buttons",
                        U: [{
                            K: "button",
                            S6: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            sy: "Cancel"
                        }, {
                            K: "button",
                            S6: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            sy: "Confirm"
                        }]
                    }]
                }]
            });
            this.T = new g.K1(this, 250);
            this.cancelButton = this.Kp("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Kp("ytp-mdx-privacy-popup-confirm");
            g.z(this, this.T);
            this.V(this.cancelButton, "click", this.Y);
            this.V(this.confirmButton, "click", this.N)
        },
        b0 = function(k) {
            g.M.call(this, {
                K: "div",
                W: "ytp-remote",
                U: [{
                    K: "div",
                    W: "ytp-remote-display-status",
                    U: [{
                        K: "div",
                        W: "ytp-remote-display-status-icon",
                        U: [g.WDi()]
                    }, {
                        K: "div",
                        W: "ytp-remote-display-status-text",
                        sy: "{{statustext}}"
                    }]
                }]
            });
            this.api = k;
            this.T = new g.K1(this, 250);
            g.z(this, this.T);
            this.V(k, "presentingplayerstatechange", this.onStateChange);
            this.cH(k.getPlayerStateObject())
        },
        Nx = function(k, p) {
            g.lB.call(this, "Play on", 1, k, p);
            this.j = k;
            this.IT = {};
            this.V(k, "onMdxReceiversChange", this.C);
            this.V(k, "presentingplayerstatechange", this.C);
            this.C()
        },
        Ana = function(k) {
            g.Wr.call(this, k);
            this.VV = {
                key: OFL(),
                name: "This computer"
            };
            this.Fu = null;
            this.subscriptions = [];
            this.M4 = this.ou = null;
            this.IT = [this.VV];
            this.l_ = this.VV;
            this.B1 = new g.Kr(64);
            this.s4 = 0;
            this.KH = -1;
            this.jN = !1;
            this.oP = this.L3 = null;
            if (!g.nl(this.player.G()) && !g.Qj(this.player.G())) {
                k = this.player;
                var p = g.US(k);
                p && (p = p.t_()) && (p = new Nx(k, p), g.z(this, p));
                p = new b0(k);
                g.z(this, p);
                g.cO(k, p.element, 4);
                this.L3 = new fs;
                g.z(this, this.L3);
                g.cO(k, this.L3.element, 4);
                this.jN = !!JI()
            }
        },
        y5 = function(k) {
            k.oP && (k.player.removeEventListener("presentingplayerstatechange",
                k.oP), k.oP = null)
        },
        m19 = function(k, p, t) {
            k.B1 = t;
            k.player.publish("presentingplayerstatechange", new g.Ey(t, p))
        },
        Y$ = function(k, p) {
            if (p.key !== k.l_.key)
                if (p.key === k.VV.key) $$();
                else if (Y3L(k) && VWJ(k), k.l_ = p, !k.player.G().D("disable_mdx_connection_in_mdx_module_for_music_web") || !g.Qj(k.player.G())) {
                var t = k.player.getPlaylistId();
                var J = k.player.getVideoData(1);
                var q = J.videoId;
                if (!t && !q || (k.player.getAppState() === 2 || k.player.getAppState() === 1) && k.player.G().D("should_clear_video_data_on_player_cued_unstarted")) J = null;
                else {
                    var F = k.player.getPlaylist();
                    if (F) {
                        var d = [];
                        for (var S = 0; S < F.getLength(); S++) d[S] = g.AR(F, S).videoId
                    } else d = [q];
                    F = k.player.getCurrentTime(1);
                    k = {
                        videoIds: d,
                        listId: t,
                        videoId: q,
                        playerParams: J.playerParams,
                        clickTrackingParams: J.j6,
                        index: Math.max(k.player.getPlaylistIndex(), 0),
                        currentTime: F === 0 ? void 0 : F
                    };
                    (J = qBC(J)) && (k.locationInfo = J);
                    J = k
                }
                k$("Connecting to: " + g.L9(p));
                p.key == "cast-selector-receiver" ? (tI(J || null), p = J || null, nd() ? v_().setLaunchParams(p) : Ld("setLaunchParams called before ready.")) : !J && U1Q() && x4() == p.key ? yA("yt-remote-connection-change", !0) : ($$(), tI(J || null), J = H_().Wn(), (p = Ss(J, p.key)) && ds(p, 1))
            }
        },
        Y3L = function(k) {
            var p = k.player.G();
            return !p.D("mdx_enable_privacy_disclosure_ui") || k.isLoggedIn() || k.jN || !k.L3 ? !1 : g.Mu(p) || g.u$(p)
        },
        VWJ = function(k) {
            k.player.getPlayerStateObject().isPlaying() ? k.player.pauseVideo() : (k.oP = function(p) {
                !k.jN && g.Uy(p, 8) && (k.player.pauseVideo(), y5(k))
            }, k.player.addEventListener("presentingplayerstatechange", k.oP));
            k.L3 && k.L3.Iu();
            qx() || (E9 = !0)
        };
    ND4.prototype.T = function(k) {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/channel/opened", k)
    };
    yqA.prototype.T = function(k) {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/channel/closed", k)
    };
    YBQ.prototype.T = function(k) {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/channel/message_received", k)
    };
    TDA.prototype.T = function(k) {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/channel/error", k)
    };
    rqW.prototype.T = function() {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    };
    ZFc.prototype.T = function() {
        this.Y.F3("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    };
    g.E = oJ.prototype;
    g.E.Ve = function() {
        q$(this);
        for (var k = [], p = 0; p < this.T.length; p++) k.push(this.Y[this.T[p]]);
        return k
    };
    g.E.zS = function() {
        q$(this);
        return this.T.concat()
    };
    g.E.has = function(k) {
        return JQ(this.Y, k)
    };
    g.E.MR = function(k, p) {
        if (this === k) return !0;
        if (this.size != k.size) return !1;
        p = p || AqA;
        q$(this);
        for (var t, J = 0; t = this.T[J]; J++)
            if (!p(this.get(t), k.get(t))) return !1;
        return !0
    };
    g.E.isEmpty = function() {
        return this.size == 0
    };
    g.E.clear = function() {
        this.Y = {};
        this.N5 = this.size = this.T.length = 0
    };
    g.E.remove = function(k) {
        return this.delete(k)
    };
    g.E.delete = function(k) {
        return JQ(this.Y, k) ? (delete this.Y[k], --this.size, this.N5++, this.T.length > 2 * this.size && q$(this), !0) : !1
    };
    g.E.get = function(k, p) {
        return JQ(this.Y, k) ? this.Y[k] : p
    };
    g.E.set = function(k, p) {
        JQ(this.Y, k) || (this.size += 1, this.T.push(k), this.N5++);
        this.Y[k] = p
    };
    g.E.forEach = function(k, p) {
        for (var t = this.zS(), J = 0; J < t.length; J++) {
            var q = t[J],
                F = this.get(q);
            k.call(p, F, q, this)
        }
    };
    g.E.clone = function() {
        return new oJ(this)
    };
    g.E.keys = function() {
        return g.T7(this.Qe(!0)).T()
    };
    g.E.values = function() {
        return g.T7(this.Qe(!1)).T()
    };
    g.E.entries = function() {
        var k = this;
        return Cw9(this.keys(), function(p) {
            return [p, k.get(p)]
        })
    };
    g.E.Qe = function(k) {
        q$(this);
        var p = 0,
            t = this.N5,
            J = this,
            q = new g.Jf;
        q.next = function() {
            if (t != J.N5) throw Error("The map has changed since the iterator was created");
            if (p >= J.T.length) return g.db;
            var F = J.T[p++];
            return g.oQ(k ? F : J.Y[F])
        };
        return q
    };
    var a8n = {
            AMh: "atp",
            I06: "ska",
            rny: "que",
            POp: "mus",
            Z5Y: "sus",
            HUp: "dsp",
            Qhy: "seq",
            gL0: "mic",
            TAr: "dpa",
            o4S: "cds",
            COT: "mlm",
            iUp: "dsdtr",
            MdT: "ntb",
            qnp: "vsp",
            oNO: "scn",
            yny: "rpe",
            JM8: "dcn",
            pRp: "dcp",
            tdT: "pas",
            LVG: "drq",
            boG: "opf",
            P0p: "els",
            Kx6: "isg",
            O5p: "svq",
            Krb: "mvp",
            ohb: "ads",
            AP8: "iat"
        },
        M5Q = {
            Qvp: "u",
            R5T: "cl",
            tty: "k",
            sDp: "i",
            khS: "cr",
            oLY: "m",
            fy6: "g",
            Yt: "up"
        };
    FP.prototype.MR = function(k) {
        return k ? this.id == k.id : !1
    };
    var tNa = "",
        N$ = null;
    SGA.prototype.flush = function(k, p) {
        k = k === void 0 ? [] : k;
        p = p === void 0 ? !1 : p;
        if (g.TQ("enable_client_streamz_web")) {
            k = g.Z(k);
            for (var t = k.next(); !t.done; t = k.next()) t = g.Nxq(t.value), t = {
                serializedIncrementBatch: g.Zn(t.T())
            }, g.qv("streamzIncremented", t, {
                sendIsolatedPayload: p
            })
        }
    };
    var YG, re4 = fTc("loadCastFramework") || fTc("loadCastApplicationFramework"),
        Aec = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.pc(ra, g.R);
    g.E = ra.prototype;
    g.E.T$ = function(k) {
        this.C = arguments;
        this.T = !1;
        this.eW ? this.N = g.kn() + this.Th : this.eW = g.Vu(this.X, this.Th)
    };
    g.E.stop = function() {
        this.eW && (g.B9.clearTimeout(this.eW), this.eW = null);
        this.N = null;
        this.T = !1;
        this.C = []
    };
    g.E.pause = function() {
        ++this.Y
    };
    g.E.resume = function() {
        this.Y && (--this.Y, !this.Y && this.T && (this.T = !1, this.S.apply(null, this.C)))
    };
    g.E.Ap = function() {
        this.stop();
        ra.AD.Ap.call(this)
    };
    g.E.Yv = function() {
        this.eW && (g.B9.clearTimeout(this.eW), this.eW = null);
        this.N ? (this.eW = g.Vu(this.X, this.N - g.kn()), this.N = null) : this.Y ? this.T = !0 : (this.T = !1, this.S.apply(null, this.C))
    };
    g.r(Zp, g.R);
    g.E = Zp.prototype;
    g.E.N1 = function(k) {
        this.N = arguments;
        this.eW || this.Y ? this.T = !0 : VNW(this)
    };
    g.E.stop = function() {
        this.eW && (g.B9.clearTimeout(this.eW), this.eW = null, this.T = !1, this.N = null)
    };
    g.E.pause = function() {
        this.Y++
    };
    g.E.resume = function() {
        this.Y--;
        this.Y || !this.T || this.eW || (this.T = !1, VNW(this))
    };
    g.E.Ap = function() {
        g.R.prototype.Ap.call(this);
        this.stop()
    };
    CM.prototype.stringify = function(k) {
        return g.B9.JSON.stringify(k, void 0)
    };
    CM.prototype.parse = function(k) {
        return g.B9.JSON.parse(k, void 0)
    };
    g.pc(WGC, g.Q3);
    g.pc(D8n, g.Q3);
    var sY9 = null;
    g.pc(vXa, g.Q3);
    g.pc(ceK, g.Q3);
    g.pc(nXL, g.Q3);
    Wj.prototype.debug = function() {};
    Wj.prototype.info = function() {};
    Wj.prototype.warning = function() {};
    var Ra4 = {},
        Xw9 = {};
    g.E = Dp.prototype;
    g.E.setTimeout = function(k) {
        this.B0 = k
    };
    g.E.A0 = function(k) {
        k = k.target;
        var p = this.W0;
        p && g.Oo(k) == 3 ? p.N1() : this.zY(k)
    };
    g.E.zY = function(k) {
        try {
            if (k == this.T) a: {
                var p = g.Oo(this.T),
                    t = this.T.Y,
                    J = this.T.getStatus();
                if (!(p < 3) && (p != 3 || this.T && (this.Y.Y || g.Ht(this.T) || g.xJ(this.T)))) {
                    this.Oy || p != 4 || t == 7 || (t == 8 || J <= 0 ? AQ(3) : AQ(2));
                    ea9(this);
                    var q = this.T.getStatus();
                    this.gs = q;
                    var F = ITc(this);
                    if (this.S = q == 200) {
                        if (this.qW && !this.IY) {
                            b: {
                                if (this.T) {
                                    var d = g.kz(this.T, "X-HTTP-Initial-Response");
                                    if (d && !g.WW(d)) {
                                        var S = d;
                                        break b
                                    }
                                }
                                S = null
                            }
                            if (k = S) this.IY = !0,
                            KGc(this, k);
                            else {
                                this.S = !1;
                                this.X = 3;
                                mp(12);
                                LM(this);
                                vj(this);
                                break a
                            }
                        }
                        if (this.j6) {
                            k = !0;
                            for (var U; !this.Oy && this.Z < F.length;)
                                if (U = BhS(this, F), U == Xw9) {
                                    p == 4 && (this.X = 4, mp(14), k = !1);
                                    break
                                } else if (U == Ra4) {
                                this.X = 4;
                                mp(15);
                                k = !1;
                                break
                            } else KGc(this, U);
                            GQK(this) && this.Z != 0 && (this.Y.T = this.Y.T.slice(this.Z), this.Z = 0);
                            p != 4 || F.length != 0 || this.Y.Y || (this.X = 1, mp(16), k = !1);
                            this.S = this.S && k;
                            k ? F.length > 0 && !this.Fd && (this.Fd = !0, this.N.xl(this)) : (LM(this), vj(this))
                        } else KGc(this, F);
                        p == 4 && LM(this);
                        this.S && !this.Oy && (p == 4 ? haR(this.N, this) : (this.S = !1, s4(this)))
                    } else g.IV0(this.T), q == 400 && F.indexOf("Unknown SID") >
                        0 ? (this.X = 3, mp(12)) : (this.X = 0, mp(13)), LM(this), vj(this)
                }
            }
        } catch (f) {} finally {}
    };
    g.E.cancel = function() {
        this.Oy = !0;
        LM(this)
    };
    g.E.Ea = function() {
        this.gy = null;
        var k = Date.now();
        k - this.pp >= 0 ? (this.RY != 2 && (AQ(3), mp(17)), LM(this), this.X = 2, vj(this)) : zaC(this, this.pp - k)
    };
    g.E.getLastError = function() {
        return this.X
    };
    g.E.Mf = function() {
        return this.T
    };
    x8a.prototype.cancel = function() {
        this.N = pzS(this);
        if (this.Y) this.Y.cancel(), this.Y = null;
        else if (this.T && this.T.size !== 0) {
            for (var k = g.Z(this.T.values()), p = k.next(); !p.done; p = k.next()) p.value.cancel();
            this.T.clear()
        }
    };
    g.E = FJR.prototype;
    g.E.Bs = 8;
    g.E.pL = 1;
    g.E.connect = function(k, p, t, J) {
        mp(0);
        this.nE = k;
        this.Oy = p || {};
        t && J !== void 0 && (this.Oy.OSID = t, this.Oy.OAID = J);
        this.IY = this.aO;
        this.qO = lTa(this, null, this.nE);
        iI(this)
    };
    g.E.disconnect = function() {
        dIJ(this);
        if (this.pL == 3) {
            var k = this.k8++,
                p = this.qO.clone();
            g.rN(p, "SID", this.C);
            g.rN(p, "RID", k);
            g.rN(p, "TYPE", "terminate");
            Ga(this, p);
            k = new Dp(this, this.C, k);
            k.RY = 2;
            k.B = xv(p.clone());
            p = !1;
            if (g.B9.navigator && g.B9.navigator.sendBeacon) try {
                p = g.B9.navigator.sendBeacon(k.B.toString(), "")
            } catch (t) {}!p && g.B9.Image && ((new Image).src = k.B, p = !0);
            p || (k.T = P64(k.N, null), k.T.send(k.B));
            k.NO = Date.now();
            s4(k)
        }
        NuL(this)
    };
    g.E.TH = function() {
        return this.pL == 0
    };
    g.E.getState = function() {
        return this.pL
    };
    g.E.Jg = function(k) {
        if (this.S)
            if (this.S = null, this.pL == 1) {
                if (!k) {
                    this.k8 = Math.floor(Math.random() * 1E5);
                    k = this.k8++;
                    var p = new Dp(this, "", k),
                        t = this.L;
                    this.gs && (t ? (t = g.ih(t), g.PQ(t, this.gs)) : t = this.gs);
                    this.Z !== null || this.pp || (p.qO = t, t = null);
                    var J;
                    if (this.Jp) a: {
                        for (var q = J = 0; q < this.N.length; q++) {
                            b: {
                                var F = this.N[q];
                                if ("__data__" in F.map && (F = F.map.__data__, typeof F === "string")) {
                                    F = F.length;
                                    break b
                                }
                                F = void 0
                            }
                            if (F === void 0) break;J += F;
                            if (J > 4096) {
                                J = q;
                                break a
                            }
                            if (J === 4096 || q === this.N.length - 1) {
                                J = q + 1;
                                break a
                            }
                        }
                        J =
                        1E3
                    }
                    else J = 1E3;
                    J = UIW(this, p, J);
                    q = this.qO.clone();
                    g.rN(q, "RID", k);
                    g.rN(q, "CVER", 22);
                    this.j6 && g.rN(q, "X-HTTP-Session-Id", this.j6);
                    Ga(this, q);
                    t && (this.pp ? J = "headers=" + g.OZ(g.Kui(t)) + "&" + J : this.Z && g.m1(q, this.Z, t));
                    udW(this.Y, p);
                    this.V4 && g.rN(q, "TYPE", "init");
                    this.Jp ? (g.rN(q, "$req", J), g.rN(q, "SID", "null"), p.qW = !0, QYS(p, q, null)) : QYS(p, q, J);
                    this.pL = 2
                }
            } else this.pL == 3 && (k ? ff9(this, k) : this.N.length == 0 || k2R(this.Y) || ff9(this))
    };
    g.E.UJ = function() {
        this.B = null;
        bGL(this);
        if (this.UQ && !(this.B0 || this.T == null || this.jW <= 0)) {
            var k = 2 * this.jW;
            this.P0 = VA((0, g.H9)(this.L2h, this), k)
        }
    };
    g.E.L2h = function() {
        this.P0 && (this.P0 = null, this.IY = !1, this.B0 = !0, mp(10), nM(this), bGL(this))
    };
    g.E.xl = function(k) {
        this.T == k && this.UQ && !this.B0 && ($IS(this), this.B0 = !0, mp(11))
    };
    g.E.us = function() {
        this.gy != null && (this.gy = null, nM(this), MNQ(this), mp(19))
    };
    g.E.bLS = function(k) {
        k ? mp(2) : mp(1)
    };
    g.E.isActive = function() {
        return !!this.X && this.X.isActive(this)
    };
    g.E = YAA.prototype;
    g.E.ya = function() {};
    g.E.Tg = function() {};
    g.E.rH = function() {};
    g.E.Li = function() {};
    g.E.isActive = function() {
        return !0
    };
    g.E.Nz = function() {};
    g.pc(XP, g.Hg);
    XP.prototype.open = function() {
        this.T.X = this.N;
        this.S && (this.T.RY = !0);
        this.T.connect(this.X, this.Y || void 0)
    };
    XP.prototype.close = function() {
        this.T.disconnect()
    };
    XP.prototype.send = function(k) {
        var p = this.T;
        if (typeof k === "string") {
            var t = {};
            t.__data__ = k;
            k = t
        } else this.C && (t = {}, t.__data__ = g.L9(k), k = t);
        p.N.push(new HYJ(p.fZ++, k));
        p.pL == 3 && iI(p)
    };
    XP.prototype.Ap = function() {
        this.T.X = null;
        delete this.N;
        this.T.disconnect();
        delete this.T;
        XP.AD.Ap.call(this)
    };
    g.pc(rmS, WGC);
    g.pc(ZGW, D8n);
    g.pc(IJ, YAA);
    IJ.prototype.ya = function() {
        this.T.dispatchEvent("m")
    };
    IJ.prototype.Tg = function(k) {
        this.T.dispatchEvent(new rmS(k))
    };
    IJ.prototype.rH = function(k) {
        this.T.dispatchEvent(new ZGW(k))
    };
    IJ.prototype.Li = function() {
        this.T.dispatchEvent("n")
    };
    var Bj = new g.Hg;
    g.r(mIK, g.Q3);
    g.E = es.prototype;
    g.E.Rn = null;
    g.E.AV = !1;
    g.E.Ak = null;
    g.E.Kl = null;
    g.E.NC = null;
    g.E.S4 = null;
    g.E.AE = null;
    g.E.qJ = null;
    g.E.Xx = null;
    g.E.qM = null;
    g.E.Oq = 0;
    g.E.JW = null;
    g.E.MJ = null;
    g.E.lc = null;
    g.E.uA = -1;
    g.E.U_ = !0;
    g.E.s8 = !1;
    g.E.Cl = 0;
    g.E.Fa = null;
    var v9n = {},
        LJS = {};
    g.E = es.prototype;
    g.E.setTimeout = function(k) {
        this.Y = k
    };
    g.E.KS = function(k) {
        k = k.target;
        var p = this.Fa;
        p && g.Oo(k) == 3 ? p.N1() : this.gH(k)
    };
    g.E.gH = function(k) {
        try {
            if (k == this.qM) a: {
                var p = g.Oo(this.qM),
                    t = this.qM.Y,
                    J = this.qM.getStatus();
                if (g.Ok && !g.rH("420+")) {
                    if (p < 4) break a
                } else if (p < 3 || p == 3 && !g.Ht(this.qM)) break a;this.s8 || p != 4 || t == 7 || (t == 8 || J <= 0 ? this.T.qx(3) : this.T.qx(2));wzq(this);
                var q = this.qM.getStatus();this.uA = q;
                var F = g.Ht(this.qM);
                if (this.AV = q == 200) {
                    p == 4 && hQ(this);
                    if (this.j6) {
                        for (k = !0; !this.s8 && this.Oq < F.length;) {
                            var d = cmK(this, F);
                            if (d == LJS) {
                                p == 4 && (this.lc = 4, za(15), k = !1);
                                break
                            } else if (d == v9n) {
                                this.lc = 4;
                                za(16);
                                k = !1;
                                break
                            } else Qua(this,
                                d)
                        }
                        p == 4 && F.length == 0 && (this.lc = 1, za(17), k = !1);
                        this.AV = this.AV && k;
                        k || (hQ(this), iGa(this))
                    } else Qua(this, F);
                    this.AV && !this.s8 && (p == 4 ? this.T.QC(this) : (this.AV = !1, suL(this)))
                } else q == 400 && F.indexOf("Unknown SID") > 0 ? (this.lc = 3, za(13)) : (this.lc = 0, za(14)),
                hQ(this),
                iGa(this)
            }
        } catch (S) {} finally {}
    };
    g.E.cancel = function() {
        this.s8 = !0;
        hQ(this)
    };
    g.E.CS = function() {
        this.Ak = null;
        var k = Date.now();
        k - this.Kl >= 0 ? (this.S4 != 2 && this.T.qx(3), hQ(this), this.lc = 2, za(18), iGa(this)) : n9R(this, this.Kl - k)
    };
    g.E.getLastError = function() {
        return this.lc
    };
    g.E = If9.prototype;
    g.E.oy = null;
    g.E.KI = null;
    g.E.IH = !1;
    g.E.FL = null;
    g.E.Co = null;
    g.E.Xp = -1;
    g.E.xO = null;
    g.E.qw = null;
    g.E.connect = function(k) {
        this.FL = k;
        k = M$(this.T, null, this.FL);
        za(3);
        Date.now();
        var p = this.T.L;
        p != null ? (this.xO = p[0], (this.qw = p[1]) ? (this.Co = 1, XzS(this)) : (this.Co = 2, RLc(this))) : (kG(k, "MODE", "init"), this.KI = new es(this), this.KI.Rn = this.oy, DIA(this.KI, k, !1, null, !0), this.Co = 0)
    };
    g.E.IS = function(k) {
        if (k) this.Co = 2, RLc(this);
        else {
            za(4);
            var p = this.T;
            p.wu = p.R$.Xp;
            O4(p, 9)
        }
        k && this.qx(2)
    };
    g.E.PT = function(k) {
        return this.T.PT(k)
    };
    g.E.abort = function() {
        this.KI && (this.KI.cancel(), this.KI = null);
        this.Xp = -1
    };
    g.E.TH = function() {
        return !1
    };
    g.E.Yw = function(k, p) {
        this.Xp = k.uA;
        if (this.Co == 0)
            if (p) {
                try {
                    var t = this.Y.parse(p)
                } catch (J) {
                    k = this.T;
                    k.wu = this.Xp;
                    O4(k, 2);
                    return
                }
                this.xO = t[0];
                this.qw = t[1]
            } else k = this.T, k.wu = this.Xp, O4(k, 2);
        else this.Co == 2 && (this.IH ? (za(7), Date.now()) : p == "11111" ? (za(6), this.IH = !0, Date.now(), this.Xp = 200, this.KI.cancel(), za(12), uI(this.T, this, !0)) : (za(8), Date.now(), this.IH = !1))
    };
    g.E.QC = function() {
        this.Xp = this.KI.uA;
        if (this.KI.AV) this.Co == 0 ? this.qw ? (this.Co = 1, XzS(this)) : (this.Co = 2, RLc(this)) : this.Co == 2 && (this.IH ? (za(12), uI(this.T, this, !0)) : (za(11), uI(this.T, this, !1)));
        else {
            this.Co == 0 ? za(9) : this.Co == 2 && za(10);
            var k = this.T;
            this.KI.getLastError();
            k.wu = this.Xp;
            O4(k, 2)
        }
    };
    g.E.Ck = function() {
        return this.T.Ck()
    };
    g.E.isActive = function() {
        return this.T.isActive()
    };
    g.E.qx = function(k) {
        this.T.qx(k)
    };
    g.E = Bua.prototype;
    g.E.Ko = null;
    g.E.Kk = null;
    g.E.OZ = null;
    g.E.Ao = null;
    g.E.Ss = null;
    g.E.mB = null;
    g.E.Ez = null;
    g.E.q1 = null;
    g.E.Pa = 0;
    g.E.oJ = 0;
    g.E.Gk = null;
    g.E.u_ = null;
    g.E.fF = null;
    g.E.DR = null;
    g.E.R$ = null;
    g.E.wV = null;
    g.E.Kt = -1;
    g.E.A6 = -1;
    g.E.wu = -1;
    g.E.Ct = 0;
    g.E.uM = 0;
    g.E.f2 = 8;
    g.pc(eLS, g.Q3);
    g.pc(hLW, g.Q3);
    g.E = Bua.prototype;
    g.E.connect = function(k, p, t, J, q) {
        za(0);
        this.Ss = p;
        this.Kk = t || {};
        J && q !== void 0 && (this.Kk.OSID = J, this.Kk.OAID = q);
        this.B ? (RJ((0, g.H9)(this.Ds, this, k), 100), MqS(this)) : this.Ds(k)
    };
    g.E.disconnect = function() {
        g9C(this);
        if (this.T == 3) {
            var k = this.Pa++,
                p = this.mB.clone();
            g.rN(p, "SID", this.C);
            g.rN(p, "RID", k);
            g.rN(p, "TYPE", "terminate");
            js(this, p);
            k = new es(this, this.C, k);
            k.S4 = 2;
            k.AE = xv(p.clone());
            (new Image).src = k.AE.toString();
            k.NC = Date.now();
            suL(k)
        }
        tYC(this)
    };
    g.E.Ds = function(k) {
        this.R$ = new If9(this);
        this.R$.oy = this.Ko;
        this.R$.Y = this.X;
        this.R$.connect(k)
    };
    g.E.TH = function() {
        return this.T == 0
    };
    g.E.getState = function() {
        return this.T
    };
    g.E.un = function(k) {
        this.u_ = null;
        KJJ(this, k)
    };
    g.E.sz = function() {
        this.fF = null;
        this.Ao = new es(this, this.C, "rpc", this.Z);
        this.Ao.Rn = this.Ko;
        this.Ao.Cl = 0;
        var k = this.Ez.clone();
        g.rN(k, "RID", "rpc");
        g.rN(k, "SID", this.C);
        g.rN(k, "CI", this.wV ? "0" : "1");
        g.rN(k, "AID", this.Kt);
        js(this, k);
        g.rN(k, "TYPE", "xmlhttp");
        DIA(this.Ao, k, !0, this.q1, !1)
    };
    g.E.Yw = function(k, p) {
        if (this.T != 0 && (this.Ao == k || this.OZ == k))
            if (this.wu = k.uA, this.OZ == k && this.T == 3)
                if (this.f2 > 7) {
                    try {
                        var t = this.X.parse(p)
                    } catch (J) {
                        t = null
                    }
                    if (Array.isArray(t) && t.length == 3)
                        if (k = t, k[0] == 0) a: {
                            if (!this.fF) {
                                if (this.Ao)
                                    if (this.Ao.NC + 3E3 < this.OZ.NC) lI(this), this.Ao.cancel(), this.Ao = null;
                                    else break a;
                                kEC(this);
                                za(19)
                            }
                        }
                    else this.A6 = k[1], 0 < this.A6 - this.Kt && k[2] < 37500 && this.wV && this.uM == 0 && !this.DR && (this.DR = RJ((0, g.H9)(this.j_, this), 6E3));
                    else O4(this, 11)
                } else p != "y2f%" && O4(this, 11);
        else if (this.Ao ==
            k && lI(this), !g.WW(p))
            for (k = this.X.parse(p), p = 0; p < k.length; p++) t = k[p], this.Kt = t[0], t = t[1], this.T == 2 ? t[0] == "c" ? (this.C = t[1], this.q1 = t[2], t = t[3], t != null ? this.f2 = t : this.f2 = 6, this.T = 3, this.Gk && this.Gk.Km(), this.Ez = M$(this, this.Ck() ? this.q1 : null, this.Ss), HGc(this)) : t[0] == "stop" && O4(this, 7) : this.T == 3 && (t[0] == "stop" ? O4(this, 7) : t[0] != "noop" && this.Gk && this.Gk.Cm(t), this.uM = 0)
    };
    g.E.j_ = function() {
        this.DR != null && (this.DR = null, this.Ao.cancel(), this.Ao = null, kEC(this), za(20))
    };
    g.E.QC = function(k) {
        if (this.Ao == k) {
            lI(this);
            this.Ao = null;
            var p = 2
        } else if (this.OZ == k) this.OZ = null, p = 1;
        else return;
        this.wu = k.uA;
        if (this.T != 0)
            if (k.AV)
                if (p == 1) {
                    p = k.Xx ? k.Xx.length : 0;
                    k = Date.now() - k.NC;
                    var t = Bj;
                    t.dispatchEvent(new eLS(t, p, k, this.Ct));
                    afc(this);
                    this.N.length = 0
                } else HGc(this);
        else {
            t = k.getLastError();
            var J;
            if (!(J = t == 3 || t == 7 || t == 0 && this.wu > 0)) {
                if (J = p == 1) this.OZ || this.u_ || this.T == 1 || this.Ct >= 2 ? J = !1 : (this.u_ = RJ((0, g.H9)(this.un, this, k), xIW(this, this.Ct)), this.Ct++, J = !0);
                J = !(J || p == 2 && kEC(this))
            }
            if (J) switch (t) {
                case 1:
                    O4(this,
                        5);
                    break;
                case 4:
                    O4(this, 10);
                    break;
                case 3:
                    O4(this, 6);
                    break;
                case 7:
                    O4(this, 12);
                    break;
                default:
                    O4(this, 2)
            }
        }
    };
    g.E.P7 = function(k) {
        if (!g.Kc(arguments, this.T)) throw Error("Unexpected channel state: " + this.T);
    };
    g.E.Rg6 = function(k) {
        k ? za(2) : (za(1), p7n(this, 8))
    };
    g.E.PT = function(k) {
        if (k) throw Error("Can't create secondary domain capable XhrIo object.");
        k = new g.ug;
        k.Z = !1;
        return k
    };
    g.E.isActive = function() {
        return !!this.Gk && this.Gk.isActive(this)
    };
    g.E.qx = function(k) {
        var p = Bj;
        p.dispatchEvent(new hLW(p, k))
    };
    g.E.Ck = function() {
        return !1
    };
    g.E = JOR.prototype;
    g.E.Km = function() {};
    g.E.Cm = function() {};
    g.E.Nj = function() {};
    g.E.M1 = function() {};
    g.E.P2 = function() {
        return {}
    };
    g.E.isActive = function() {
        return !0
    };
    g.E = op9.prototype;
    g.E.enqueue = function(k) {
        this.Y.push(k)
    };
    g.E.isEmpty = function() {
        return this.T.length === 0 && this.Y.length === 0
    };
    g.E.clear = function() {
        this.T = [];
        this.Y = []
    };
    g.E.contains = function(k) {
        return g.Kc(this.T, k) || g.Kc(this.Y, k)
    };
    g.E.remove = function(k) {
        var p = this.T;
        var t = (0, g.Fja)(p, k);
        t >= 0 ? (g.HW(p, t), p = !0) : p = !1;
        return p || g.xn(this.Y, k)
    };
    g.E.Ve = function() {
        for (var k = [], p = this.T.length - 1; p >= 0; --p) k.push(this.T[p]);
        p = this.Y.length;
        for (var t = 0; t < p; ++t) k.push(this.Y[t]);
        return k
    };
    g.r(qT4, g.Q3);
    g.r(FDK, g.Q3);
    g.pc(KM, g.R);
    g.E = KM.prototype;
    g.E.Yry = function() {
        this.Th = Math.min(3E5, this.Th * 2);
        this.N();
        this.Y && this.start()
    };
    g.E.start = function() {
        var k = this.Th + 15E3 * Math.random();
        g.Oc(this.T, k);
        this.Y = Date.now() + k
    };
    g.E.stop = function() {
        this.T.stop();
        this.Y = 0
    };
    g.E.isActive = function() {
        return this.T.isActive()
    };
    g.E.reset = function() {
        this.T.stop();
        this.Th = 5E3
    };
    g.pc(dvQ, JOR);
    g.E = dvQ.prototype;
    g.E.subscribe = function(k, p, t) {
        return this.X.subscribe(k, p, t)
    };
    g.E.unsubscribe = function(k, p, t) {
        return this.X.unsubscribe(k, p, t)
    };
    g.E.Jo = function(k) {
        return this.X.Jo(k)
    };
    g.E.publish = function(k, p) {
        return this.X.publish.apply(this.X, arguments)
    };
    g.E.dispose = function() {
        this.Z || (this.Z = !0, g.ER(this.X), this.disconnect(), g.ER(this.Y), this.Y = null, this.P0 = function() {
            return ""
        }, this.j6 = function() {
            return g.Tq({})
        })
    };
    g.E.MO = function() {
        return this.Z
    };
    g.E.connect = function(k, p, t) {
        var J = this,
            q, F, d, S;
        return g.Q(function(U) {
            if (U.T == 1) return g.mj(U, 2), J.S ? g.n(U, J.C, 2) : U.oY(2);
            g.Du(U);
            if (J.Z || J.T && J.T.getState() == 2) return U.return();
            J.NO = "";
            J.Y.stop();
            J.L = k || null;
            J.B = p || 0;
            q = J.Oy + "/test";
            F = J.Oy + "/bind";
            d = new Bua(t ? t.firstTestResults : null, t ? t.secondTestResults : null, J.k8);
            if (S = J.T) S.Gk = null;
            d.Gk = J;
            J.T = d;
            if (J.S) return J.C = Uvn(J).then(function() {
                return STq(J, q, F, S, t)
            }), U.return(J.C.then(function() {
                J.C = g.Tq()
            }));
            STq(J, q, F, S, t);
            return g.s0(U, 0)
        })
    };
    g.E.disconnect = function(k) {
        try {
            this.S && (this.C.cancel(), this.C = g.Tq())
        } finally {
            this.Y8 = k || 0, this.Y && this.Y.stop(), EpS(this), this.T && (this.T.getState() == 3 && KJJ(this.T), this.T.disconnect()), this.Y8 = 0
        }
    };
    g.E.sendMessage = function(k, p) {
        var t = this,
            J;
        return g.Q(function(q) {
            switch (q.T) {
                case 1:
                    g.mj(q, 2);
                    if (!t.S) {
                        q.oY(2);
                        break
                    }
                    return g.n(q, t.C, 2);
                case 2:
                    g.Du(q);
                    if (t.Z) return q.return();
                    J = {
                        _sc: k
                    };
                    p && g.PQ(J, p);
                    if (t.Y.isActive() || (t.T ? t.T.getState() : 0) == 2) {
                        t.N.push(J);
                        q.oY(6);
                        break
                    }
                    if (!t.gD()) {
                        q.oY(6);
                        break
                    }
                    g.mj(q, 8);
                    if (!t.S) {
                        q.oY(8);
                        break
                    }
                    return g.n(q, Uvn(t), 8);
                case 8:
                    g.Du(q, 0, 0, 1);
                    t.gD() && (EpS(t), ua9(t.T, J));
                    g.s0(q, 6, 1);
                    break;
                case 6:
                    g.s0(q, 0)
            }
        })
    };
    g.E.Km = function() {
        this.Y.reset();
        this.L = null;
        this.B = 0;
        if (this.N.length)
            if (this.S) bzc(this);
            else {
                var k = this.N;
                this.N = [];
                f4n(this, k, k.length);
                Hj(this)
            }
        else Hj(this)
    };
    g.E.Nj = function(k) {
        var p = k == 2 && this.T.wu == 401;
        k == 4 || p || this.Y.start();
        this.publish("handlerError", k, p);
        this.RY.T("BROWSER_CHANNEL")
    };
    g.E.M1 = function(k, p) {
        if (!this.Y.isActive()) this.publish("handlerClosed");
        else if (p)
            for (var t = p.length, J = 0; J < t; ++J) {
                var q = p[J].map;
                q && this.N.push(q)
            }
        this.qO.T("BROWSER_CHANNEL");
        k && this.B0.Y.xJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", k.length);
        p && this.pp.Y.xJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", p.length)
    };
    g.E.P2 = function() {
        var k = {
            v: 2
        };
        this.NO && (k.gsessionid = this.NO);
        this.B != 0 && (k.ui = "" + this.B);
        this.Y8 != 0 && (k.ui = "" + this.Y8);
        this.L && g.PQ(k, this.L);
        return k
    };
    g.E.Cm = function(k) {
        k[0] == "S" ? this.NO = k[1] : k[0] == "gracefulReconnect" ? (this.Y.start(), this.T.disconnect()) : this.publish("handlerMessage", new $vA(k[0], k[1]));
        this.IY.T("BROWSER_CHANNEL")
    };
    g.E.gD = function() {
        return !!this.T && this.T.getState() == 3
    };
    g.E.GR = function(k) {
        (this.gy.loungeIdToken = k) || this.Y.stop();
        if (this.v0 && this.T) {
            var p = this.T.Ko || {};
            k ? p["X-YouTube-LoungeId-Token"] = k : delete p["X-YouTube-LoungeId-Token"];
            this.T.Ko = p
        }
    };
    g.E.getDeviceId = function() {
        return this.gy.id
    };
    g.E.HY = function() {
        return this.Y.isActive() ? this.Y.Y - Date.now() : NaN
    };
    g.E.CP = function() {
        var k = this.Y;
        g.K2(k.T);
        k.start()
    };
    g.E.b$Y = function() {
        this.Y.isActive();
        lfn(this.T) == 0 && this.connect(this.L, this.B)
    };
    xG.prototype.sendRequest = function(k, p, t, J, q, F, d) {
        k = {
            format: F ? "RAW" : "JSON",
            method: k,
            context: this,
            timeout: 5E3,
            withCredentials: !!d,
            onSuccess: g.xh(this.C, J, !F),
            onError: g.xh(this.N, q),
            onTimeout: g.xh(this.X, q)
        };
        t && (k.postParams = t, k.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.mG(p, k)
    };
    xG.prototype.C = function(k, p, t, J) {
        p ? k(J) : k({
            text: t.responseText
        })
    };
    xG.prototype.N = function(k, p) {
        k(Error("Request error: " + p.status))
    };
    xG.prototype.X = function(k) {
        k(Error("request timed out"))
    };
    g.r(N6R, g.Hg);
    g.E = N6R.prototype;
    g.E.connect = function(k, p, t) {
        this.Jj.connect(k, p, t)
    };
    g.E.disconnect = function(k) {
        this.Jj.disconnect(k)
    };
    g.E.CP = function() {
        this.Jj.CP()
    };
    g.E.getDeviceId = function() {
        return this.Jj.getDeviceId()
    };
    g.E.HY = function() {
        return this.Jj.HY()
    };
    g.E.gD = function() {
        return this.Jj.gD()
    };
    g.E.Q2 = function() {
        this.dispatchEvent("channelOpened");
        var k = this.Jj,
            p = this.T;
        g.cz("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !k.T.wV,
            sessionId: k.T.C,
            arrayId: k.T.Kt
        });
        g.cz("yt-remote-session-screen-id", p);
        k = U4();
        p = fM();
        g.Kc(k, p) || k.push(p);
        pwL(k);
        JeA()
    };
    g.E.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.E.onMessage = function(k) {
        this.dispatchEvent(new qT4(k))
    };
    g.E.onError = function(k) {
        this.dispatchEvent(new FDK(k ? 1 : 0))
    };
    g.E.sendMessage = function(k, p) {
        this.Jj.sendMessage(k, p)
    };
    g.E.GR = function(k) {
        this.Jj.GR(k)
    };
    g.E.dispose = function() {
        this.Jj.dispose()
    };
    g.E = yOW.prototype;
    g.E.connect = function(k, p) {
        k = k === void 0 ? {} : k;
        p = p === void 0 ? 0 : p;
        this.S !== 2 && (this.N.stop(), this.B = k, this.Z = p, T6A(this), (k = g.M9("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = k : delete this.C["x-youtube-identity-token"], this.T && (this.Y.device = this.T.device, this.Y.name = this.T.name, this.Y.app = this.T.app, this.Y.id = this.T.id, this.T.Mzp && (this.Y.mdxVersion = "" + this.T.Mzp), this.T.theme && (this.Y.theme = this.T.theme), this.T.capabilities && (this.Y.capabilities = this.T.capabilities), this.T.r9 && (this.Y.cst = this.T.r9),
            this.T.authuser && (this.Y.authuser = this.T.authuser), this.T.pageId && (this.Y.pageId = this.T.pageId)), this.Z !== 0 ? this.Y.ui = "" + this.Z : delete this.Y.ui, Object.assign(this.Y, this.B), this.channel = new XP(this.pathPrefix, {
            Zpp: "gsessionid",
            RAS: this.C,
            bEr: this.Y
        }), this.channel.open(), this.S = 2, YT9(this))
    };
    g.E.disconnect = function(k) {
        this.L = k === void 0 ? 0 : k;
        this.N.stop();
        T6A(this);
        this.channel && (this.L !== 0 ? this.Y.ui = "" + this.L : delete this.Y.ui, this.channel.close());
        this.L = 0
    };
    g.E.HY = function() {
        return this.N.isActive() ? this.N.Y - Date.now() : NaN
    };
    g.E.CP = function() {
        var k = this.N;
        g.K2(k.T);
        k.start()
    };
    g.E.sendMessage = function(k, p) {
        this.channel && (T6A(this), k = Object.assign({}, {
            _sc: k
        }, p), this.channel.send(k))
    };
    g.E.GR = function(k) {
        k || this.N.stop();
        k ? this.C["X-YouTube-LoungeId-Token"] = k : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.E.getDeviceId = function() {
        return this.T ? this.T.id : ""
    };
    g.E.publish = function(k) {
        return this.X.publish.apply(this.X, [k].concat(g.m(g.nS.apply(1, arguments))))
    };
    g.E.subscribe = function(k, p, t) {
        return this.X.subscribe(k, p, t)
    };
    g.E.unsubscribe = function(k, p, t) {
        return this.X.unsubscribe(k, p, t)
    };
    g.E.Jo = function(k) {
        return this.X.Jo(k)
    };
    g.E.dispose = function() {
        this.gy || (this.gy = !0, g.ER(this.X), this.disconnect(), g.ER(this.N), this.NO = function() {
            return ""
        })
    };
    g.E.MO = function() {
        return this.gy
    };
    g.r(rOS, g.Hg);
    g.E = rOS.prototype;
    g.E.connect = function(k, p) {
        this.T.connect(k, p)
    };
    g.E.disconnect = function(k) {
        this.T.disconnect(k)
    };
    g.E.CP = function() {
        this.T.CP()
    };
    g.E.getDeviceId = function() {
        return this.T.getDeviceId()
    };
    g.E.HY = function() {
        return this.T.HY()
    };
    g.E.gD = function() {
        return this.T.S === 3
    };
    g.E.FD = function() {
        this.dispatchEvent("channelOpened")
    };
    g.E.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.E.onMessage = function(k) {
        this.dispatchEvent(new qT4(k))
    };
    g.E.onError = function() {
        this.dispatchEvent(new FDK(this.T.Zb === 401 ? 1 : 0))
    };
    g.E.sendMessage = function(k, p) {
        this.T.sendMessage(k, p)
    };
    g.E.GR = function(k) {
        this.T.GR(k)
    };
    g.E.dispose = function() {
        this.T.dispose()
    };
    var sgR = Date.now(),
        pd = null,
        q3 = Array(50),
        oE = -1,
        FW = !1;
    g.pc($4, g.o$);
    $4.prototype.Wn = function() {
        return this.screens
    };
    $4.prototype.contains = function(k) {
        return !!HFW(this.screens, k)
    };
    $4.prototype.get = function(k) {
        return k ? Ss(this.screens, k) : null
    };
    $4.prototype.info = function(k) {
        tE(this.S, k)
    };
    g.r(npn, g.o$);
    g.E = npn.prototype;
    g.E.start = function() {
        !this.T && isNaN(this.eW) && this.Kc()
    };
    g.E.stop = function() {
        this.T && (this.T.abort(), this.T = null);
        isNaN(this.eW) || (g.N8(this.eW), this.eW = NaN)
    };
    g.E.Ap = function() {
        this.stop();
        g.o$.prototype.Ap.call(this)
    };
    g.E.Kc = function() {
        this.eW = NaN;
        this.T = g.mG(k4(this.N, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.Z
            },
            timeout: 5E3,
            onSuccess: (0, g.H9)(this.S_, this),
            onError: (0, g.H9)(this.qz, this),
            onTimeout: (0, g.H9)(this.Mz, this)
        })
    };
    g.E.S_ = function(k, p) {
        this.T = null;
        k = p.screen || {};
        k.dialId = this.C;
        k.name = this.S;
        p = -1;
        this.X && k.shortLivedLoungeToken && k.shortLivedLoungeToken.value && k.shortLivedLoungeToken.refreshIntervalMs && (k.screenIdType = "shortLived", k.loungeToken = k.shortLivedLoungeToken.value, p = k.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new $G(k), p)
    };
    g.E.qz = function(k) {
        this.T = null;
        k.status && k.status == 404 ? this.Y >= WYS.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (k = WYS[this.Y], this.eW = g.fY((0, g.H9)(this.Kc, this), k), this.Y++) : this.publish("pairingFailed", Error("Server error " + k.status))
    };
    g.E.Mz = function() {
        this.T = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var WYS = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.pc(Ej, $4);
    g.E = Ej.prototype;
    g.E.start = function() {
        dz(this) && this.publish("screenChange");
        !g.nG("yt-remote-lounge-token-expiration") && w7q(this);
        g.N8(this.T);
        this.T = g.fY((0, g.H9)(this.start, this), 1E4)
    };
    g.E.add = function(k, p) {
        dz(this);
        LDW(this, k);
        SS(this, !1);
        this.publish("screenChange");
        p(k);
        k.token || w7q(this)
    };
    g.E.remove = function(k, p) {
        var t = dz(this);
        cOR(this, k) && (SS(this, !1), t = !0);
        p(k);
        t && this.publish("screenChange")
    };
    g.E.kZ = function(k, p, t, J) {
        var q = dz(this),
            F = this.get(k.id);
        F ? (F.name != p && (F.name = p, SS(this, !1), q = !0), t(k)) : J(Error("no such local screen."));
        q && this.publish("screenChange")
    };
    g.E.Ap = function() {
        g.N8(this.T);
        Ej.AD.Ap.call(this)
    };
    g.E.YyO = function(k) {
        dz(this);
        var p = this.screens.length;
        k = k && k.screens || [];
        for (var t = k.length, J = 0; J < t; ++J) {
            var q = k[J],
                F = this.get(q.screenId);
            F && (F.token = q.loungeToken, --p)
        }
        SS(this, !p);
        p && tE(this.S, "Missed " + p + " lounge tokens.")
    };
    g.E.g86 = function(k) {
        tE(this.S, "Requesting lounge tokens failed: " + k)
    };
    g.r(QgQ, g.o$);
    g.E = QgQ.prototype;
    g.E.start = function() {
        var k = parseInt(g.nG("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.kn() - 144E5 < k ? 0 : k) ? Uj(this): (this.C = g.kn() + 3E5, g.cz("yt-remote-fast-check-period", this.C), this.k9())
    };
    g.E.isEmpty = function() {
        return g.cQ(this.T)
    };
    g.E.update = function() {
        iz4("Updating availability on schedule.");
        var k = this.S(),
            p = g.CE(this.T, function(t, J) {
                return t && !!Ss(k, J)
            }, this);
        I44(this, p)
    };
    g.E.Ap = function() {
        g.N8(this.N);
        this.N = NaN;
        this.Y && (this.Y.abort(), this.Y = null);
        g.o$.prototype.Ap.call(this)
    };
    g.E.k9 = function() {
        g.N8(this.N);
        this.N = NaN;
        this.Y && this.Y.abort();
        var k = X74(this);
        if ($9a(k)) {
            var p = k4(this.X, "/pairing/get_screen_availability");
            this.Y = this.X.sendRequest("POST", p, {
                lounge_token: g.DV(k).join(",")
            }, (0, g.H9)(this.vfp, this, k), (0, g.H9)(this.ci6, this))
        } else I44(this, {}), Uj(this)
    };
    g.E.vfp = function(k, p) {
        this.Y = null;
        var t = g.DV(X74(this));
        if (g.U$(t, g.DV(k))) {
            p = p.screens || [];
            t = {};
            for (var J = p.length, q = 0; q < J; ++q) t[k[p[q].loungeToken]] = p[q].status == "online";
            I44(this, t);
            Uj(this)
        } else this.Sh("Changing Screen set during request."), this.k9()
    };
    g.E.ci6 = function(k) {
        this.Sh("Screen availability failed: " + k);
        this.Y = null;
        Uj(this)
    };
    g.E.Sh = function(k) {
        tE("OnlineScreenService", k)
    };
    g.pc(fd, $4);
    g.E = fd.prototype;
    g.E.start = function() {
        this.Y.start();
        this.T.start();
        this.screens.length && (this.publish("screenChange"), this.T.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.E.add = function(k, p, t) {
        this.Y.add(k, p, t)
    };
    g.E.remove = function(k, p, t) {
        this.Y.remove(k, p, t);
        this.T.update()
    };
    g.E.kZ = function(k, p, t, J) {
        this.Y.contains(k) ? this.Y.kZ(k, p, t, J) : (k = "Updating name of unknown screen: " + k.name, tE(this.S, k), J(Error(k)))
    };
    g.E.Wn = function(k) {
        return k ? this.screens : g.ph(this.screens, g.dZ(this.N, function(p) {
            return !this.contains(p)
        }, this))
    };
    g.E.jr = function() {
        return g.dZ(this.Wn(!0), function(k) {
            return !!this.T.T[k.id]
        }, this)
    };
    g.E.Qa = function(k, p, t, J, q, F) {
        var d = this;
        this.info("getDialScreenByPairingCode " + k + " / " + p);
        var S = new npn(this.C, k, p, t, J);
        S.subscribe("pairingComplete", function(U, f) {
            g.ER(S);
            q(bj(d, U), f)
        });
        S.subscribe("pairingFailed", function(U) {
            g.ER(S);
            F(U)
        });
        S.start();
        return (0, g.H9)(S.stop, S)
    };
    g.E.Oa = function(k, p, t, J) {
        g.mG(k4(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: k
            },
            timeout: 5E3,
            onSuccess: (0, g.H9)(function(q, F) {
                q = new $G(F.screen || {});
                if (!q.name || eNc(this, q.name)) {
                    a: {
                        F = q.name;
                        for (var d = 2, S = p(F, d); eNc(this, S);) {
                            d++;
                            if (d > 20) break a;
                            S = p(F, d)
                        }
                        F = S
                    }
                    q.name = F
                }
                t(bj(this, q))
            }, this),
            onError: (0, g.H9)(function(q) {
                J(Error("pairing request failed: " + q.status))
            }, this),
            onTimeout: (0, g.H9)(function() {
                J(Error("pairing request timed out."))
            }, this)
        })
    };
    g.E.Ap = function() {
        g.ER(this.Y);
        g.ER(this.T);
        fd.AD.Ap.call(this)
    };
    g.E.jYr = function() {
        a4a(this);
        this.publish("screenChange");
        this.T.update()
    };
    fd.prototype.dispose = fd.prototype.dispose;
    g.pc(N3, g.o$);
    g.E = N3.prototype;
    g.E.cR = function(k) {
        this.MO() || (k && (Y4(this, "" + k), this.publish("sessionFailed")), this.T = null, this.publish("sessionScreen", null))
    };
    g.E.info = function(k) {
        tE(this.j6, k)
    };
    g.E.FZ = function() {
        return null
    };
    g.E.Ne = function(k) {
        var p = this.Y;
        k ? (p.displayStatus = new chrome.cast.ReceiverDisplayStatus(k, []), p.displayStatus.showStop = !0) : p.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(p, (0, g.H9)(function() {
            this.info("Updated receiver status for " + p.friendlyName + ": " + k)
        }, this), (0, g.H9)(function() {
            Y4(this, "Failed to update receiver status for: " + p.friendlyName)
        }, this))
    };
    g.E.Ap = function() {
        this.Ne("");
        N3.AD.Ap.call(this)
    };
    g.r(TN, N3);
    g.E = TN.prototype;
    g.E.s1 = function(k) {
        if (this.N) {
            if (this.N == k) return;
            Y4(this, "Overriding cast session with new session object");
            thS(this);
            this.NO = !1;
            this.L = "unknown";
            this.N.removeUpdateListener(this.Y8);
            this.N.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.P0)
        }
        this.N = k;
        this.N.addUpdateListener(this.Y8);
        this.N.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.P0);
        KDA(this, "getMdxSessionStatus")
    };
    g.E.y8 = function(k) {
        this.info("launchWithParams no-op for Cast: " + g.L9(k))
    };
    g.E.stop = function() {
        this.N ? this.N.stop((0, g.H9)(function() {
            this.cR()
        }, this), (0, g.H9)(function() {
            this.cR(Error("Failed to stop receiver app."))
        }, this)) : this.cR(Error("Stopping cast device without session."))
    };
    g.E.Ne = function() {};
    g.E.Ap = function() {
        this.info("disposeInternal");
        thS(this);
        this.N && (this.N.removeUpdateListener(this.Y8), this.N.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.P0));
        this.N = null;
        N3.prototype.Ap.call(this)
    };
    g.E.SrS = function(k, p) {
        if (!this.MO())
            if (p)
                if (p = pM(p), g.lq(p)) switch (k = "" + p.type, p = p.data || {}, this.info("onYoutubeMessage_: " + k + " " + g.L9(p)), k) {
                    case "mdxSessionStatus":
                        l4a(this, p);
                        break;
                    case "loungeToken":
                        HzC(this, p);
                        break;
                    default:
                        Y4(this, "Unknown youtube message: " + k)
                } else Y4(this, "Unable to parse message.");
                else Y4(this, "No data in message.")
    };
    g.E.a_ = function(k, p, t, J) {
        g.N8(this.B);
        this.B = 0;
        zNK(this.C, this.Y.label, k, this.Y.friendlyName, (0, g.H9)(function(q) {
            q ? p(q) : J >= 0 ? (Y4(this, "Screen " + k + " appears to be offline. " + J + " retries left."), this.B = g.fY((0, g.H9)(this.a_, this, k, p, t, J - 1), 300)) : t(Error("Unable to fetch screen."))
        }, this), t)
    };
    g.E.FZ = function() {
        return this.N
    };
    g.E.xv = function(k) {
        this.MO() || k || (Y4(this, "Cast session died."), this.cR())
    };
    g.r(rz, N3);
    g.E = rz.prototype;
    g.E.s1 = function(k) {
        this.N = k;
        this.N.addUpdateListener(this.Oy)
    };
    g.E.y8 = function(k) {
        this.qO = k;
        this.gy()
    };
    g.E.stop = function() {
        SwS(this);
        this.N ? this.N.stop((0, g.H9)(this.cR, this, null), (0, g.H9)(this.cR, this, "Failed to stop DIAL device.")) : this.cR()
    };
    g.E.Ap = function() {
        SwS(this);
        this.N && this.N.removeUpdateListener(this.Oy);
        this.N = null;
        N3.prototype.Ap.call(this)
    };
    g.E.RJ = function(k) {
        this.MO() || k || (Y4(this, "DIAL session died."), this.X(), this.X = function() {}, this.cR())
    };
    g.r(AE, N3);
    AE.prototype.stop = function() {
        this.cR()
    };
    AE.prototype.s1 = function() {};
    AE.prototype.y8 = function() {
        g.N8(this.N);
        this.N = NaN;
        var k = Ss(this.C.Wn(), this.Y.label);
        k ? yz(this, k) : this.cR(Error("No such screen"))
    };
    AE.prototype.Ap = function() {
        g.N8(this.N);
        this.N = NaN;
        N3.prototype.Ap.call(this)
    };
    g.r(mA, g.o$);
    g.E = mA.prototype;
    g.E.init = function(k, p) {
        chrome.cast.timeout.requestSession = 3E4;
        var t = new chrome.cast.SessionRequest(this.B, [chrome.cast.Capability.AUDIO_OUT]);
        g.TQ("desktop_enable_cast_connect") && (t.androidReceiverCompatible = !0);
        this.L || (t.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var J = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        k = k || this.S ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var q = (0, g.H9)(this.SXy, this);
        t = new chrome.cast.ApiConfig(t, (0, g.H9)(this.W6,
            this), q, J, k);
        t.customDialLaunchCallback = (0, g.H9)(this.P3r, this);
        chrome.cast.initialize(t, (0, g.H9)(function() {
            this.MO() || (chrome.cast.addReceiverActionListener(this.X), VYJ(), this.Y.subscribe("onlineScreenChange", (0, g.H9)(this.qj, this)), this.N = bwL(this), chrome.cast.setCustomReceivers(this.N, function() {}, (0, g.H9)(function(F) {
                this.Sh("Failed to set initial custom receivers: " + g.L9(F))
            }, this)), this.publish("yt-remote-cast2-availability-change", W_(this)), p(!0))
        }, this), (0, g.H9)(function(F) {
            this.Sh("Failed to initialize API: " +
                g.L9(F));
            p(!1)
        }, this))
    };
    g.E.Vh6 = function(k, p) {
        Vz("Setting connected screen ID: " + k + " -> " + p);
        if (this.T) {
            var t = this.T.T;
            if (!k || t && t.id != k) Vz("Unsetting old screen status: " + this.T.Y.friendlyName), DG(this, null)
        }
        if (k && p) {
            if (!this.T) {
                k = Ss(this.Y.Wn(), k);
                if (!k) {
                    Vz("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (k.idType == "shortLived") {
                    Vz("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                t = UDn(this, k);
                t || (Vz("setConnectedScreenStatus: Connected receiver not custom..."), t = new chrome.cast.Receiver(k.uuid ?
                    k.uuid : k.id, k.name), t.receiverType = chrome.cast.ReceiverType.CUSTOM, this.N.push(t), chrome.cast.setCustomReceivers(this.N, function() {}, (0, g.H9)(function(J) {
                    this.Sh("Failed to set initial custom receivers: " + g.L9(J))
                }, this)));
                Vz("setConnectedScreenStatus: new active receiver: " + t.friendlyName);
                DG(this, new AE(this.Y, t), !0)
            }
            this.T.Ne(p)
        } else Vz("setConnectedScreenStatus: no screen.")
    };
    g.E.wQy = function(k) {
        this.MO() ? this.Sh("Setting connection data on disposed cast v2") : this.T ? this.T.y8(k) : this.Sh("Setting connection data without a session")
    };
    g.E.fS = function() {
        this.MO() ? this.Sh("Stopping session on disposed cast v2") : this.T ? (this.T.stop(), DG(this, null)) : Vz("Stopping non-existing session")
    };
    g.E.requestSession = function() {
        chrome.cast.requestSession((0, g.H9)(this.W6, this), (0, g.H9)(this.Gqh, this))
    };
    g.E.Ap = function() {
        this.Y.unsubscribe("onlineScreenChange", (0, g.H9)(this.qj, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.X);
        var k = CrK,
            p = g.hw("yt.mdx.remote.debug.handlers_");
        g.xn(p || [], k);
        g.ER(this.T);
        g.o$.prototype.Ap.call(this)
    };
    g.E.Sh = function(k) {
        tE("Controller", k)
    };
    g.E.hh = function(k, p) {
        this.T == k && (p || DG(this, null), this.publish("yt-remote-cast2-session-change", p))
    };
    g.E.QG0 = function(k, p) {
        if (!this.MO())
            if (k) switch (k.friendlyName = chrome.cast.unescape(k.friendlyName), Vz("onReceiverAction_ " + k.label + " / " + k.friendlyName + "-- " + p), p) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.T)
                        if (this.T.Y.label != k.label) Vz("onReceiverAction_: Stopping active receiver: " + this.T.Y.friendlyName), this.T.stop();
                        else {
                            Vz("onReceiverAction_: Casting to active receiver.");
                            this.T.T && this.publish("yt-remote-cast2-session-change", this.T.T);
                            break
                        }
                    switch (k.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            DG(this,
                                new AE(this.Y, k));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            DG(this, new rz(this.Y, k, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            DG(this, new TN(this.Y, k, this.config_));
                            break;
                        default:
                            this.Sh("Unknown receiver type: " + k.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.T && this.T.Y.label == k.label ? this.T.stop() : this.Sh("Stopping receiver w/o session: " + k.friendlyName)
            } else this.Sh("onReceiverAction_ called without receiver.")
    };
    g.E.P3r = function(k) {
        if (this.MO()) return Promise.reject(Error("disposed"));
        var p = k.receiver;
        p.receiverType != chrome.cast.ReceiverType.DIAL && (this.Sh("Not DIAL receiver: " + p.friendlyName), p.receiverType = chrome.cast.ReceiverType.DIAL);
        var t = this.T ? this.T.Y : null;
        if (!t || t.label != p.label) return this.Sh("Receiving DIAL launch request for non-clicked DIAL receiver: " + p.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (t && t.label == p.label && t.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.T.T) return Vz("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.T.T), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Sh('Changing CAST intent from "' + t.receiverType + '" to "dial" for ' + p.friendlyName);
            DG(this, new rz(this.Y, p, this.C, this.config_))
        }
        p = this.T;
        p.B = k;
        p.B.appState == chrome.cast.DialAppState.RUNNING ? (k = p.B.extraData || {}, t = k.screenId || null, ZG(p) && k.loungeToken ? k.loungeTokenRefreshIntervalMs ? k = $DA(p, {
            name: p.Y.friendlyName,
            screenId: k.screenId,
            loungeToken: k.loungeToken,
            dialId: p.B.receiver.label,
            screenIdType: "shortLived"
        }, k.loungeTokenRefreshIntervalMs) : (g.lw(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(k) + ".")), k = dDK(p, t)) : k = dDK(p, t)) : k = qwc(p);
        return k
    };
    g.E.W6 = function(k) {
        var p = this;
        if (!this.MO() && !this.S) {
            Vz("New cast session ID: " + k.sessionId);
            var t = k.receiver;
            if (t.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.T)
                    if (t.receiverType == chrome.cast.ReceiverType.CAST) Vz("Got resumed cast session before resumed mdx connection."), t.friendlyName = chrome.cast.unescape(t.friendlyName), DG(this, new TN(this.Y, t, this.config_), !0);
                    else {
                        this.Sh("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var J = this.T.Y,
                    q = Ss(this.Y.Wn(),
                        J.label);
                q && da(q, t.label) && J.receiverType != chrome.cast.ReceiverType.CAST && t.receiverType == chrome.cast.ReceiverType.CAST && (Vz("onSessionEstablished_: manual to cast session change " + t.friendlyName), g.ER(this.T), this.T = new TN(this.Y, t, this.config_), this.T.subscribe("sessionScreen", (0, g.H9)(this.hh, this, this.T)), this.T.subscribe("sessionFailed", function() {
                    return f14(p, p.T)
                }), this.T.y8(null));
                this.T.s1(k)
            }
        }
    };
    g.E.XD = function() {
        return this.T ? this.T.FZ() : null
    };
    g.E.Gqh = function(k) {
        this.MO() || (this.Sh("Failed to estabilish a session: " + g.L9(k)), k.code != chrome.cast.ErrorCode.CANCEL && DG(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.E.SXy = function(k) {
        Vz("Receiver availability updated: " + k);
        if (!this.MO()) {
            var p = W_(this);
            this.Z = k == chrome.cast.ReceiverAvailability.AVAILABLE;
            W_(this) != p && this.publish("yt-remote-cast2-availability-change", W_(this))
        }
    };
    g.E.qj = function() {
        this.MO() || (this.N = bwL(this), Vz("Updating custom receivers: " + g.L9(this.N)), chrome.cast.setCustomReceivers(this.N, function() {}, (0, g.H9)(function() {
            this.Sh("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", W_(this)))
    };
    mA.prototype.setLaunchParams = mA.prototype.wQy;
    mA.prototype.setConnectedScreenStatus = mA.prototype.Vh6;
    mA.prototype.stopSession = mA.prototype.fS;
    mA.prototype.getCastSession = mA.prototype.XD;
    mA.prototype.requestSession = mA.prototype.requestSession;
    mA.prototype.init = mA.prototype.init;
    mA.prototype.dispose = mA.prototype.dispose;
    var mDS = [];
    g.E = ij.prototype;
    g.E.reset = function(k) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        vZS(this);
        this.volume = -1;
        this.muted = !1;
        k && (this.index = k.index, this.listId = k.listId, this.videoId = k.videoId, this.playerState = k.playerState, this.volume = k.volume, this.muted = k.muted, this.audioTrackId = k.audioTrackId, this.trackData = k.trackData, this.xo = k.hasPrevious, this.Vr = k.hasNext, this.Z = k.playerTime, this.S = k.playerTimeAt, this.C = k.seekableStart, this.T = k.seekableEnd, this.X = k.duration, this.B = k.loadedTime, this.N = k.liveIngestionTime, this.Y = !isNaN(this.N))
    };
    g.E.isPlaying = function() {
        return this.playerState == 1
    };
    g.E.isBuffering = function() {
        return this.playerState == 3
    };
    g.E.b0 = function() {
        return this.playerState == 1081
    };
    g.E.gP = function(k) {
        this.X = isNaN(k) ? 0 : k
    };
    g.E.getDuration = function() {
        return this.Y ? this.X + Qz(this) : this.X
    };
    g.E.clone = function() {
        return new ij(cyW(this))
    };
    g.r(RE, g.o$);
    g.E = RE.prototype;
    g.E.getState = function() {
        return this.N
    };
    g.E.HY = function() {
        return this.C.getReconnectTimeout()
    };
    g.E.CP = function() {
        this.C.reconnect()
    };
    g.E.play = function() {
        zN(this) ? (this.T ? this.T.play(null, g.Uo, M3(this, "play")) : aE(this, "play"), iw4(this, 1, GN(B_(this))), this.publish("remotePlayerChange")) : eS(this, this.play)
    };
    g.E.pause = function() {
        zN(this) ? (this.T ? this.T.pause(null, g.Uo, M3(this, "pause")) : aE(this, "pause"), iw4(this, 2, GN(B_(this))), this.publish("remotePlayerChange")) : eS(this, this.pause)
    };
    g.E.seekTo = function(k) {
        if (zN(this)) {
            if (this.T) {
                var p = B_(this),
                    t = new chrome.cast.media.SeekRequest;
                t.currentTime = k;
                p.isPlaying() || p.isBuffering() ? t.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : t.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.T.seek(t, g.Uo, M3(this, "seekTo", {
                    newTime: k
                }))
            } else aE(this, "seekTo", {
                newTime: k
            });
            iw4(this, 3, k);
            this.publish("remotePlayerChange")
        } else eS(this, g.xh(this.seekTo, k))
    };
    g.E.stop = function() {
        if (zN(this)) {
            this.T ? this.T.stop(null, g.Uo, M3(this, "stopVideo")) : aE(this, "stopVideo");
            var k = B_(this);
            k.index = -1;
            k.videoId = "";
            vZS(k);
            hE(this, k);
            this.publish("remotePlayerChange")
        } else eS(this, this.stop)
    };
    g.E.setVolume = function(k, p) {
        if (zN(this)) {
            var t = B_(this);
            if (this.Y) {
                if (t.volume != k) {
                    var J = Math.round(k) / 100;
                    this.Y.setReceiverVolumeLevel(J, (0, g.H9)(function() {
                        JE("set receiver volume: " + J)
                    }, this), (0, g.H9)(function() {
                        this.Sh("failed to set receiver volume.")
                    }, this))
                }
                t.muted != p && this.Y.setReceiverMuted(p, (0, g.H9)(function() {
                    JE("set receiver muted: " + p)
                }, this), (0, g.H9)(function() {
                    this.Sh("failed to set receiver muted.")
                }, this))
            } else {
                var q = {
                    volume: k,
                    muted: p
                };
                t.volume != -1 && (q.delta = k - t.volume);
                aE(this, "setVolume", q)
            }
            t.muted = p;
            t.volume = k;
            hE(this, t)
        } else eS(this, g.xh(this.setVolume, k, p))
    };
    g.E.Sr = function(k, p) {
        if (zN(this)) {
            var t = B_(this);
            k = {
                videoId: k
            };
            p && (t.trackData = {
                trackName: p.name,
                languageCode: p.languageCode,
                sourceLanguageCode: p.translationLanguage ? p.translationLanguage.languageCode : "",
                languageName: p.languageName,
                kind: p.kind
            }, k.style = g.L9(p.style), g.PQ(k, t.trackData));
            aE(this, "setSubtitlesTrack", k);
            hE(this, t)
        } else eS(this, g.xh(this.Sr, k, p))
    };
    g.E.setAudioTrack = function(k, p) {
        zN(this) ? (p = p.getLanguageInfo().getId(), aE(this, "setAudioTrack", {
            videoId: k,
            audioTrackId: p
        }), k = B_(this), k.audioTrackId = p, hE(this, k)) : eS(this, g.xh(this.setAudioTrack, k, p))
    };
    g.E.playVideo = function(k, p, t, J, q, F, d) {
        J = J === void 0 ? null : J;
        q = q === void 0 ? null : q;
        F = F === void 0 ? null : F;
        d = d === void 0 ? null : d;
        var S = B_(this),
            U = {
                videoId: k
            };
        t !== void 0 && (U.currentIndex = t);
        IE(S, k, t || 0);
        p !== void 0 && (P_(S, p), U.currentTime = p);
        J && (U.listId = J);
        q && (U.playerParams = q);
        F && (U.clickTrackingParams = F);
        d && (U.locationInfo = g.L9(d));
        aE(this, "setPlaylist", U);
        J || hE(this, S)
    };
    g.E.RH = function(k, p) {
        if (zN(this)) {
            if (k && p) {
                var t = B_(this);
                IE(t, k, p);
                hE(this, t)
            }
            aE(this, "previous")
        } else eS(this, g.xh(this.RH, k, p))
    };
    g.E.nextVideo = function(k, p) {
        if (zN(this)) {
            if (k && p) {
                var t = B_(this);
                IE(t, k, p);
                hE(this, t)
            }
            aE(this, "next")
        } else eS(this, g.xh(this.nextVideo, k, p))
    };
    g.E.VB = function() {
        if (zN(this)) {
            aE(this, "clearPlaylist");
            var k = B_(this);
            k.reset();
            hE(this, k);
            this.publish("remotePlayerChange")
        } else eS(this, this.VB)
    };
    g.E.dU = function() {
        zN(this) ? aE(this, "dismissAutoplay") : eS(this, this.dU)
    };
    g.E.dispose = function() {
        if (this.N != 3) {
            var k = this.N;
            this.N = 3;
            this.publish("proxyStateChange", k, this.N)
        }
        g.o$.prototype.dispose.call(this)
    };
    g.E.Ap = function() {
        w3Q(this);
        this.C = null;
        this.X.clear();
        XW(this, null);
        g.o$.prototype.Ap.call(this)
    };
    g.E.j9 = function(k) {
        if ((k != this.N || k == 2) && this.N != 3 && k != 0) {
            var p = this.N;
            this.N = k;
            this.publish("proxyStateChange", p, k);
            if (k == 1)
                for (; !this.X.isEmpty();) p = k = this.X, p.T.length === 0 && (p.T = p.Y, p.T.reverse(), p.Y = []), k.T.pop().apply(this);
            else k == 3 && this.dispose()
        }
    };
    g.E.P1h = function(k, p) {
        this.publish(k, p)
    };
    g.E.yjT = function(k) {
        if (!k) this.Gc(null), XW(this, null);
        else if (this.Y.receiver.volume) {
            k = this.Y.receiver.volume;
            var p = B_(this),
                t = Math.round(100 * k.level || 0);
            if (p.volume != t || p.muted != k.muted) JE("Cast volume update: " + k.level + (k.muted ? " muted" : "")), p.volume = t, p.muted = !!k.muted, hE(this, p)
        }
    };
    g.E.Gc = function(k) {
        JE("Cast media: " + !!k);
        this.T && this.T.removeUpdateListener(this.B);
        if (this.T = k) this.T.addUpdateListener(this.B), QwQ(this), this.publish("remotePlayerChange")
    };
    g.E.TSy = function(k) {
        k ? (QwQ(this), this.publish("remotePlayerChange")) : this.Gc(null)
    };
    g.E.p9 = function() {
        aE(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.E.YF6 = function() {
        var k = DDW();
        k && XW(this, k)
    };
    g.E.Sh = function(k) {
        tE("CP", k)
    };
    g.r(lj, g.o$);
    g.E = lj.prototype;
    g.E.connect = function(k, p) {
        if (p) {
            var t = p.listId,
                J = p.videoId,
                q = p.videoIds,
                F = p.playerParams,
                d = p.clickTrackingParams,
                S = p.index,
                U = {
                    videoId: J
                },
                f = p.currentTime,
                b = p.locationInfo;
            p = p.loopMode;
            f !== void 0 && (U.currentTime = f <= 5 ? 0 : f);
            F && (U.playerParams = F);
            b && (U.locationInfo = b);
            d && (U.clickTrackingParams = d);
            t && (U.listId = t);
            q && q.length > 0 && (U.videoIds = q.join(","));
            S !== void 0 && (U.currentIndex = S);
            this.Oy && (U.loopMode = p || "LOOP_MODE_OFF");
            t && (this.T.listId = t);
            this.T.videoId = J;
            this.T.index = S || 0;
            this.T.state = 3;
            P_(this.T,
                f);
            this.X = "UNSUPPORTED";
            t = this.Oy ? "setInitialState" : "setPlaylist";
            gz("Connecting with " + t + " and params: " + g.L9(U));
            this.Y.connect({
                method: t,
                params: g.L9(U)
            }, k, oXS())
        } else gz("Connecting without params"), this.Y.connect({}, k, oXS());
        X34(this)
    };
    g.E.GR = function(k) {
        this.Y.GR(k)
    };
    g.E.dispose = function() {
        this.MO() || (g.eM("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), uj(this, 3));
        g.o$.prototype.dispose.call(this)
    };
    g.E.Ap = function() {
        Rj9(this);
        zjA(this);
        BXc(this);
        g.N8(this.B);
        this.B = NaN;
        g.N8(this.L);
        this.L = NaN;
        this.C = null;
        g.Zf(this.gy);
        this.gy.length = 0;
        this.Y.dispose();
        g.o$.prototype.Ap.call(this);
        this.X = this.Z = this.N = this.T = this.Y = null
    };
    g.E.U5 = function(k) {
        if (!this.N || this.N.length === 0) return !1;
        for (var p = g.Z(this.N), t = p.next(); !t.done; t = p.next())
            if (!t.value.capabilities.has(k)) return !1;
        return !0
    };
    g.E.c5 = function() {
        var k = 3;
        this.MO() || (k = 0, isNaN(this.Zi()) ? this.Y.gD() && isNaN(this.S) && (k = 1) : k = 2);
        return k
    };
    g.E.iK = function(k) {
        gz("Disconnecting with " + k);
        g.eM("yt.mdx.remote.remoteClient_", null);
        Rj9(this);
        this.publish("beforeDisconnect", k);
        k == 1 && bI();
        this.Y.disconnect(k);
        this.dispose()
    };
    g.E.Zo = function() {
        var k = this.T;
        this.C && (k = this.T.clone(), IE(k, this.C, k.index));
        return cyW(k)
    };
    g.E.dRT = function(k) {
        var p = this,
            t = new ij(k);
        t.videoId && t.videoId != this.T.videoId && (this.C = t.videoId, g.N8(this.B), this.B = g.fY(function() {
            if (p.C) {
                var q = p.C;
                p.C = null;
                p.T.videoId != q && jS(p, "getNowPlaying")
            }
        }, 5E3));
        var J = [];
        this.T.listId == t.listId && this.T.videoId == t.videoId && this.T.index == t.index || J.push("remoteQueueChange");
        this.T.playerState == t.playerState && this.T.volume == t.volume && this.T.muted == t.muted && GN(this.T) == GN(t) && g.L9(this.T.trackData) == g.L9(t.trackData) || J.push("remotePlayerChange");
        this.T.reset(k);
        g.y1(J, function(q) {
            this.publish(q)
        }, this)
    };
    g.E.GP = function() {
        var k = this.Y.getDeviceId(),
            p = g.j9(this.N, function(t) {
                return t.type == "REMOTE_CONTROL" && t.id != k
            });
        return p ? p.id : ""
    };
    g.E.Zi = function() {
        return this.Y.HY()
    };
    g.E.P5 = function() {
        return this.X || "UNSUPPORTED"
    };
    g.E.oi = function() {
        return this.Z || ""
    };
    g.E.D7 = function() {
        !isNaN(this.Zi()) && this.Y.CP()
    };
    g.E.ekp = function(k, p) {
        jS(this, k, p);
        hjc(this)
    };
    g.E.Mj = function() {
        var k = g.QI("SAPISID", "") || g.QI("__Secure-1PAPISID") || "",
            p = g.QI("__Secure-3PAPISID", "") || "";
        if (!k && !p) return "";
        k = g.Zn(g.m4(k), 2);
        p = g.Zn(g.m4(p), 2);
        return g.Zn(g.m4("," + k + "," + p), 2)
    };
    lj.prototype.subscribe = lj.prototype.subscribe;
    lj.prototype.unsubscribeByKey = lj.prototype.Jo;
    lj.prototype.getProxyState = lj.prototype.c5;
    lj.prototype.disconnect = lj.prototype.iK;
    lj.prototype.getPlayerContextData = lj.prototype.Zo;
    lj.prototype.setPlayerContextData = lj.prototype.dRT;
    lj.prototype.getOtherConnectedRemoteId = lj.prototype.GP;
    lj.prototype.getReconnectTimeout = lj.prototype.Zi;
    lj.prototype.getAutoplayMode = lj.prototype.P5;
    lj.prototype.getAutoplayVideoId = lj.prototype.oi;
    lj.prototype.reconnect = lj.prototype.D7;
    lj.prototype.sendMessage = lj.prototype.ekp;
    lj.prototype.getXsrfToken = lj.prototype.Mj;
    lj.prototype.isCapabilitySupportedOnConnectedDevices = lj.prototype.U5;
    g.r(pS4, $4);
    g.E = pS4.prototype;
    g.E.Wn = function(k) {
        return this.jE.$_gs(k)
    };
    g.E.contains = function(k) {
        return !!this.jE.$_c(k)
    };
    g.E.get = function(k) {
        return this.jE.$_g(k)
    };
    g.E.start = function() {
        this.jE.$_st()
    };
    g.E.add = function(k, p, t) {
        this.jE.$_a(k, p, t)
    };
    g.E.remove = function(k, p, t) {
        this.jE.$_r(k, p, t)
    };
    g.E.kZ = function(k, p, t, J) {
        this.jE.$_un(k, p, t, J)
    };
    g.E.Ap = function() {
        for (var k = this.T.length, p = 0; p < k; ++p) this.jE.$_ubk(this.T[p]);
        this.T.length = 0;
        this.jE = null;
        $4.prototype.Ap.call(this)
    };
    g.E.Z7 = function() {
        this.publish("screenChange")
    };
    g.E.UP0 = function() {
        this.publish("onlineScreenChange")
    };
    fd.prototype.$_st = fd.prototype.start;
    fd.prototype.$_gspc = fd.prototype.Oa;
    fd.prototype.$_gsppc = fd.prototype.Qa;
    fd.prototype.$_c = fd.prototype.contains;
    fd.prototype.$_g = fd.prototype.get;
    fd.prototype.$_a = fd.prototype.add;
    fd.prototype.$_un = fd.prototype.kZ;
    fd.prototype.$_r = fd.prototype.remove;
    fd.prototype.$_gs = fd.prototype.Wn;
    fd.prototype.$_gos = fd.prototype.jr;
    fd.prototype.$_s = fd.prototype.subscribe;
    fd.prototype.$_ubk = fd.prototype.Jo;
    var FQ = null,
        E9 = !1,
        Oj = null,
        Kd = null,
        fiJ = null,
        ps = [];
    g.r(TOR, g.R);
    g.E = TOR.prototype;
    g.E.Ap = function() {
        g.R.prototype.Ap.call(this);
        this.T.stop();
        this.Y.stop();
        this.Z.stop();
        var k = this.ou;
        k.unsubscribe("proxyStateChange", this.nQ, this);
        k.unsubscribe("remotePlayerChange", this.pC, this);
        k.unsubscribe("remoteQueueChange", this.YV, this);
        k.unsubscribe("previousNextChange", this.fQ, this);
        k.unsubscribe("nowAutoplaying", this.Rj, this);
        k.unsubscribe("autoplayDismissed", this.gw, this);
        this.ou = this.module = null
    };
    g.E.mx = function(k) {
        var p = g.nS.apply(1, arguments);
        if (this.ou.N != 2)
            if (Sk(this)) {
                if (!B_(this.ou).b0() || k !== "control_seek") switch (k) {
                    case "control_toggle_play_pause":
                        B_(this.ou).isPlaying() ? this.ou.pause() : this.ou.play();
                        break;
                    case "control_play":
                        this.ou.play();
                        break;
                    case "control_pause":
                        this.ou.pause();
                        break;
                    case "control_seek":
                        this.S.N1(p[0], p[1]);
                        break;
                    case "control_subtitles_set_track":
                        Z0R(this, p[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(p[0])
                }
            } else switch (k) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    p =
                        this.j.getCurrentTime();
                    U9(this, p === 0 ? void 0 : p);
                    break;
                case "control_seek":
                    U9(this, p[0]);
                    break;
                case "control_subtitles_set_track":
                    Z0R(this, p[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(p[0])
            }
    };
    g.E.iTh = function(k) {
        this.Z.T$(k)
    };
    g.E.Bj6 = function(k) {
        this.mx("control_subtitles_set_track", g.cQ(k) ? null : k)
    };
    g.E.nG = function() {
        var k = this.j.getOption("captions", "track");
        g.cQ(k) || Z0R(this, k)
    };
    g.E.OF = function(k) {
        this.module.OF(k, this.j.getVideoData().lengthSeconds)
    };
    g.E.WWy = function() {
        g.cQ(this.N) || C7S(this, this.N);
        this.C = !1
    };
    g.E.nQ = function(k, p) {
        this.Y.stop();
        p === 2 && this.xB()
    };
    g.E.pC = function() {
        if (Sk(this)) {
            this.T.stop();
            var k = B_(this.ou);
            switch (k.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.KH = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.KH = 0;
                    break;
                default:
                    this.module.KH = -1
            }
            switch (k.playerState) {
                case 1081:
                case 1:
                    this.CT(new g.Kr(8));
                    this.OW();
                    break;
                case 1085:
                case 3:
                    this.CT(new g.Kr(9));
                    break;
                case 1083:
                case 0:
                    this.CT(new g.Kr(2));
                    this.S.stop();
                    this.OF(this.j.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.CT(new g.Kr(4));
                    break;
                case 2:
                    this.CT(new g.Kr(4));
                    this.OF(GN(k));
                    break;
                case -1:
                    this.CT(new g.Kr(64));
                    break;
                case -1E3:
                    this.CT(new g.Kr(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        rq: 2
                    }))
            }
            k = B_(this.ou).trackData;
            var p = this.N;
            (k || p ? k && p && k.trackName == p.trackName && k.languageCode == p.languageCode && k.languageName == p.languageName && k.kind == p.kind : 1) || (this.N = k, C7S(this, k));
            k = B_(this.ou);
            k.volume === -1 || Math.round(this.j.getVolume()) === k.volume && this.j.isMuted() === k.muted || this.B.isActive() || this.Qd()
        } else rnR(this)
    };
    g.E.fQ = function() {
        this.j.publish("mdxpreviousnextchange")
    };
    g.E.YV = function() {
        Sk(this) || rnR(this)
    };
    g.E.Rj = function(k) {
        isNaN(k) || this.j.publish("mdxnowautoplaying", k)
    };
    g.E.gw = function() {
        this.j.publish("mdxautoplaycanceled")
    };
    g.E.setAudioTrack = function(k) {
        Sk(this) && this.ou.setAudioTrack(this.j.getVideoData(1).videoId, k)
    };
    g.E.seekTo = function(k, p) {
        B_(this.ou).playerState === -1 ? U9(this, k) : p && this.ou.seekTo(k)
    };
    g.E.Qd = function() {
        var k = this;
        if (Sk(this)) {
            var p = B_(this.ou);
            this.events.qP(this.L);
            p.muted ? this.j.mute() : this.j.unMute();
            this.j.setVolume(p.volume);
            this.L = this.events.V(this.j, "onVolumeChange", function(t) {
                ynq(k, t)
            })
        }
    };
    g.E.OW = function() {
        this.T.stop();
        if (!this.ou.MO()) {
            var k = B_(this.ou);
            k.isPlaying() && this.CT(new g.Kr(8));
            this.OF(GN(k));
            this.T.start()
        }
    };
    g.E.xB = function() {
        this.Y.stop();
        this.T.stop();
        var k = this.ou.HY();
        this.ou.N == 2 && !isNaN(k) && this.Y.start()
    };
    g.E.CT = function(k) {
        this.Y.stop();
        var p = this.X;
        if (!g.JZ(p, k)) {
            var t = g.u(k, 2);
            t !== g.u(this.X, 2) && this.j.o5(t);
            this.X = k;
            m19(this.module, p, k)
        }
    };
    g.r(fs, g.M);
    fs.prototype.Iu = function() {
        this.T.show()
    };
    fs.prototype.xI = function() {
        this.T.hide()
    };
    fs.prototype.Y = function() {
        yA("mdx-privacy-popup-cancel");
        this.xI()
    };
    fs.prototype.N = function() {
        yA("mdx-privacy-popup-confirm");
        this.xI()
    };
    g.r(b0, g.M);
    b0.prototype.onStateChange = function(k) {
        this.cH(k.state)
    };
    b0.prototype.cH = function(k) {
        if (this.api.getPresentingPlayerType() === 3) {
            var p = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            k = g.u(k, 128) ? g.fT("Error on $RECEIVER_NAME", p) : k.isPlaying() || k.isPaused() ? g.fT("Playing on $RECEIVER_NAME", p) : g.fT("Connected to $RECEIVER_NAME", p);
            this.updateValue("statustext", k);
            this.T.show()
        } else this.T.hide()
    };
    g.r(Nx, g.lB);
    Nx.prototype.C = function() {
        var k = this.j.getOption("remote", "receivers");
        k && k.length > 1 && !this.j.getOption("remote", "quickCast") ? (this.IT = g.Y2(k, this.T, this), this.jt(g.DR(k, this.T)), k = this.j.getOption("remote", "currentReceiver"), k = this.T(k), this.options[k] && this.mF(k), this.enable(!0)) : this.enable(!1)
    };
    Nx.prototype.T = function(k) {
        return k.key
    };
    Nx.prototype.oD = function(k) {
        return k === "cast-selector-receiver" ? "Cast..." : this.IT[k].name
    };
    Nx.prototype.s7 = function(k) {
        g.lB.prototype.s7.call(this, k);
        this.j.setOption("remote", "currentReceiver", this.IT[k]);
        this.Pp.xI()
    };
    g.r(Ana, g.Wr);
    g.E = Ana.prototype;
    g.E.create = function() {
        var k = this.player.G(),
            p = g.cs(k);
        k = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: k.D("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: k.D("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: k.D("enable_cast_short_lived_lounge_token")
        };
        FYL(p, k);
        this.subscriptions.push(g.tn("yt-remote-before-disconnect", this.ppS, this));
        this.subscriptions.push(g.tn("yt-remote-connection-change", this.Obr, this));
        this.subscriptions.push(g.tn("yt-remote-receiver-availability-change", this.Zp,
            this));
        this.subscriptions.push(g.tn("yt-remote-auto-connect", this.qXS, this));
        this.subscriptions.push(g.tn("yt-remote-receiver-resumed", this.Fgb, this));
        this.subscriptions.push(g.tn("mdx-privacy-popup-confirm", this.BIT, this));
        this.subscriptions.push(g.tn("mdx-privacy-popup-cancel", this.zwh, this));
        this.Zp()
    };
    g.E.load = function() {
        this.player.cancelPlayback();
        g.Wr.prototype.load.call(this);
        this.Fu = new TOR(this, this.player, this.ou);
        var k = (k = NOn()) ? k.currentTime : 0;
        var p = U1Q() ? new RE(qx(), void 0) : null;
        k == 0 && p && (k = GN(B_(p)));
        k !== 0 && this.OF(k);
        m19(this, this.B1, this.B1);
        this.player.yK(6)
    };
    g.E.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.l_ = this.VV;
        g.S9(this.Fu, this.ou);
        this.ou = this.Fu = null;
        g.Wr.prototype.unload.call(this);
        this.player.yK(5);
        y5(this)
    };
    g.E.Ap = function() {
        g.Jn(this.subscriptions);
        g.Wr.prototype.Ap.call(this)
    };
    g.E.zc = function(k) {
        var p = g.nS.apply(1, arguments);
        this.loaded && this.Fu.mx.apply(this.Fu, [k].concat(g.m(p)))
    };
    g.E.getAdState = function() {
        return this.KH
    };
    g.E.xo = function() {
        return this.ou ? B_(this.ou).xo : !1
    };
    g.E.Vr = function() {
        return this.ou ? B_(this.ou).Vr : !1
    };
    g.E.OF = function(k, p) {
        this.s4 = k || 0;
        this.player.publish("progresssync", k, p);
        this.player.dS("onVideoProgress", k || 0)
    };
    g.E.getCurrentTime = function() {
        return this.s4
    };
    g.E.getProgressState = function() {
        var k = B_(this.ou),
            p = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !k.b0() && this.player.qA(),
            clipEnd: p.clipEnd,
            clipStart: p.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: k.getDuration(),
            ingestionTime: k.Y ? k.N + Qz(k) : k.N,
            isAtLiveHead: (k.Y ? k.T + Qz(k) : k.T) - this.getCurrentTime() <= 1,
            loaded: k.B,
            seekableEnd: k.Y ? k.T + Qz(k) : k.T,
            seekableStart: k.C > 0 ? k.C + Qz(k) : k.C,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.E.nextVideo = function() {
        this.ou && this.ou.nextVideo()
    };
    g.E.RH = function() {
        this.ou && this.ou.RH()
    };
    g.E.ppS = function(k) {
        k === 1 && (this.M4 = this.ou ? B_(this.ou) : null)
    };
    g.E.Obr = function() {
        var k = U1Q() ? new RE(qx(), void 0) : null;
        if (k) {
            var p = this.l_;
            this.loaded && this.unload();
            this.ou = k;
            this.M4 = null;
            p.key !== this.VV.key && (this.l_ = p, this.load())
        } else g.ER(this.ou), this.ou = null, this.loaded && (this.unload(), (k = this.M4) && k.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(k.videoId, GN(k)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.E.Zp = function() {
        var k = [this.VV],
            p = k.concat,
            t = $1L();
        c_() && g.nG("yt-remote-cast-available") && t.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.IT = p.call(k, t);
        k = E59() || this.VV;
        Y$(this, k);
        this.player.dS("onMdxReceiversChange")
    };
    g.E.qXS = function() {
        var k = E59();
        Y$(this, k)
    };
    g.E.Fgb = function() {
        this.l_ = E59()
    };
    g.E.BIT = function() {
        this.jN = !0;
        y5(this);
        E9 = !1;
        FQ && ds(FQ, 1);
        FQ = null
    };
    g.E.zwh = function() {
        this.jN = !1;
        y5(this);
        Y$(this, this.VV);
        this.l_ = this.VV;
        E9 = !1;
        FQ = null;
        this.player.playVideo()
    };
    g.E.rp = function(k, p) {
        switch (k) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.IT;
            case "currentReceiver":
                return p && (p.key === "cast-selector-receiver" ? swQ() : Y$(this, p)), this.loaded ? this.l_ : this.VV;
            case "quickCast":
                return this.IT.length === 2 && this.IT[1].key === "cast-selector-receiver" ? (p && swQ(), !0) : !1
        }
    };
    g.E.p9 = function() {
        this.ou.p9()
    };
    g.E.C5 = function() {
        return !1
    };
    g.E.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.E.isLoggedIn = function() {
        var k, p;
        return ((k = g.M9("PLAYER_CONFIG")) == null ? void 0 : (p = k.args) == null ? void 0 : p.authuser) !== void 0 ? !0 : !(!g.M9("SESSION_INDEX") && !g.M9("LOGGED_IN"))
    };
    g.Vc("remote", Ana);
})(_yt_player);