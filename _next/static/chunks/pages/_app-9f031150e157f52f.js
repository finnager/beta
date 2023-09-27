(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[888], {
		6321: function(n, t, e) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
				return e(3789)
			}])
		},
		6935: function(n, t, e) {
			"use strict";
			e.d(t, {
				J: function() {
					return o
				}
			});
			var r = e(7378),
				o = function() {
					var n = function() {
							var n, t;
							return null === window || void 0 === window || null === (n = window.location) || void 0 === n || null === (t = n.hash) || void 0 === t ? void 0 : t.slice(1)
						},
						t = (0, r.useState)(null),
						e = t[0],
						o = t[1];
					(0, r.useEffect)((function() {
						o(n());
						var t = function() {
							o(n())
						};
						return window.addEventListener("hashchange", t),
							function() {
								return window.removeEventListener("hashchange", t)
							}
					}), [o]);
					return [e, function(t) {
						var e = encodeURIComponent(t);
						n() !== e && (window.history.replaceState(null, document.title, "#".concat(e)), window.dispatchEvent(new HashChangeEvent("hashchange")), o(e))
					}]
				}
		},
		3789: function(n, t, e) {
			"use strict";
			e.r(t);
			var r = e(9722),
				o = e(2050),
				i = e(4246),
				u = (e(2756), e(8038)),
				a = e.n(u),
				s = e(6677),
				c = e(6935);
			t.default = function(n) {
				var t, e = n.Component,
					u = n.pageProps,
					f = (0, s.useRouter)(),
					l = (0, o.Z)((0, c.J)(), 2)[1];
				return null === (t = f.events) || void 0 === t || t.on("hashChangeComplete", (function() {
					var n = f.asPath.split("#"),
						t = n.length > 1 ? n[1] : "";
					l(t)
				})), (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsxs)(a(), {
						children: [(0, i.jsx)("meta", {
							name: "viewport",
							content: "initial-scale=1, width=device-width"
						}), (0, i.jsx)("title", {
							children: "Finnager"
						}), (0, i.jsx)("link", {
							rel: "preload",
							href: "/fonts/untitled-sans-web-regular.woff2",
							as: "font",
							type: "font/woff2",
							crossOrigin: "anonymous"
						}), (0, i.jsx)("link", {
							rel: "preload",
							href: "/fonts/untitled-sans-web-medium.woff2",
							as: "font",
							type: "font/woff2",
							crossOrigin: "anonymous"
						}), (0, i.jsx)("link", {
							rel: "preload",
							href: "/fonts/untitled-sans-web-bold.woff2",
							as: "font",
							type: "font/woff2",
							crossOrigin: "anonymous"
						}), (0, i.jsx)("link", {
							rel: "preload",
							href: "/fonts/input-mono-regular.woff2",
							as: "font",
							type: "font/woff2",
							crossOrigin: "anonymous"
						}), (0, i.jsx)("link", {
							rel: "icon",
							href: "/favicon.svg",
							type: "image/svg+xml"
						}), (0, i.jsx)("meta", {
							name: "twitter:card",
							content: "summary_large_image"
						}), (0, i.jsx)("meta", {
							name: "twitter:image",
							content: "https://storage.googleapis.com/bank-277721-web-static-assets/imgs/card.jpg"
						})]
					}), (0, i.jsx)(e, (0, r.Z)({}, u))]
				})
			}
		},
		2756: function() {},
		8038: function(n, t, e) {
			n.exports = e(555)
		},
		6677: function(n, t, e) {
			n.exports = e(5817)
		},
		719: function(n, t, e) {
			"use strict";

			function r(n, t) {
				(null == t || t > n.length) && (t = n.length);
				for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
				return r
			}
			e.d(t, {
				Z: function() {
					return r
				}
			})
		},
		2126: function(n, t, e) {
			"use strict";

			function r(n) {
				if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
			}
			e.d(t, {
				Z: function() {
					return r
				}
			})
		},
		9722: function(n, t, e) {
			"use strict";

			function r(n, t, e) {
				return t in n ? Object.defineProperty(n, t, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[t] = e, n
			}

			function o(n) {
				for (var t = 1; t < arguments.length; t++) {
					var e = null != arguments[t] ? arguments[t] : {},
						o = Object.keys(e);
					"function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					})))), o.forEach((function(t) {
						r(n, t, e[t])
					}))
				}
				return n
			}
			e.d(t, {
				Z: function() {
					return o
				}
			})
		},
		2050: function(n, t, e) {
			"use strict";
			e.d(t, {
				Z: function() {
					return i
				}
			});
			var r = e(2126);
			var o = e(2164);

			function i(n, t) {
				return function(n) {
					if (Array.isArray(n)) return n
				}(n) || (0, r.Z)(n, t) || (0, o.Z)(n, t) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		},
		2164: function(n, t, e) {
			"use strict";
			e.d(t, {
				Z: function() {
					return o
				}
			});
			var r = e(719);

			function o(n, t) {
				if (n) {
					if ("string" === typeof n) return (0, r.Z)(n, t);
					var e = Object.prototype.toString.call(n).slice(8, -1);
					return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? (0, r.Z)(n, t) : void 0
				}
			}
		}
	},
	function(n) {
		var t = function(t) {
			return n(n.s = t)
		};
		n.O(0, [774, 179], (function() {
			return t(6321), t(5817)
		}));
		var e = n.O();
		_N_E = e
	}
]);