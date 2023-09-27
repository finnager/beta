(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[955], {
		229: function(e) {
			"use strict";
			var n = Object.prototype.hasOwnProperty,
				t = Object.prototype.toString,
				r = Object.defineProperty,
				o = Object.getOwnPropertyDescriptor,
				i = function(e) {
					return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === t.call(e)
				},
				l = function(e) {
					if (!e || "[object Object]" !== t.call(e)) return !1;
					var r, o = n.call(e, "constructor"),
						i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
					if (e.constructor && !o && !i) return !1;
					for (r in e);
					return "undefined" === typeof r || n.call(e, r)
				},
				u = function(e, n) {
					r && "__proto__" === n.name ? r(e, n.name, {
						enumerable: !0,
						configurable: !0,
						value: n.newValue,
						writable: !0
					}) : e[n.name] = n.newValue
				},
				s = function(e, t) {
					if ("__proto__" === t) {
						if (!n.call(e, t)) return;
						if (o) return o(e, t).value
					}
					return e[t]
				};
			e.exports = function e() {
				var n, t, r, o, a, c, f = arguments[0],
					p = 1,
					d = arguments.length,
					h = !1;
				for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
					if (null != (n = arguments[p]))
						for (t in n) r = s(f, t), f !== (o = s(n, t)) && (h && o && (l(o) || (a = i(o))) ? (a ? (a = !1, c = r && i(r) ? r : []) : c = r && l(r) ? r : {}, u(f, {
							name: t,
							newValue: e(h, c, o)
						})) : "undefined" !== typeof o && u(f, {
							name: t,
							newValue: o
						}));
				return f
			}
		},
		3812: function(e) {
			var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
				t = /\n/g,
				r = /^\s*/,
				o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
				i = /^:\s*/,
				l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
				u = /^[;\s]*/,
				s = /^\s+|\s+$/g,
				a = "";

			function c(e) {
				return e ? e.replace(s, a) : a
			}
			e.exports = function(e, s) {
				if ("string" !== typeof e) throw new TypeError("First argument must be a string");
				if (!e) return [];
				s = s || {};
				var f = 1,
					p = 1;

				function d(e) {
					var n = e.match(t);
					n && (f += n.length);
					var r = e.lastIndexOf("\n");
					p = ~r ? e.length - r : p + e.length
				}

				function h() {
					var e = {
						line: f,
						column: p
					};
					return function(n) {
						return n.position = new m(e), x(), n
					}
				}

				function m(e) {
					this.start = e, this.end = {
						line: f,
						column: p
					}, this.source = s.source
				}
				m.prototype.content = e;
				var g = [];

				function y(n) {
					var t = new Error(s.source + ":" + f + ":" + p + ": " + n);
					if (t.reason = n, t.filename = s.source, t.line = f, t.column = p, t.source = e, !s.silent) throw t;
					g.push(t)
				}

				function k(n) {
					var t = n.exec(e);
					if (t) {
						var r = t[0];
						return d(r), e = e.slice(r.length), t
					}
				}

				function x() {
					k(r)
				}

				function v(e) {
					var n;
					for (e = e || []; n = b();) !1 !== n && e.push(n);
					return e
				}

				function b() {
					var n = h();
					if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
						for (var t = 2; a != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t;
						if (t += 2, a === e.charAt(t - 1)) return y("End of comment missing");
						var r = e.slice(2, t - 2);
						return p += 2, d(r), e = e.slice(t), p += 2, n({
							type: "comment",
							comment: r
						})
					}
				}

				function w() {
					var e = h(),
						t = k(o);
					if (t) {
						if (b(), !k(i)) return y("property missing ':'");
						var r = k(l),
							s = e({
								type: "declaration",
								property: c(t[0].replace(n, a)),
								value: r ? c(r[0].replace(n, a)) : a
							});
						return k(u), s
					}
				}
				return x(),
					function() {
						var e, n = [];
						for (v(n); e = w();) !1 !== e && (n.push(e), v(n));
						return n
					}()
			}
		},
		8809: function(e) {
			e.exports = function(e) {
				return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
			}
		},
		4651: function(e) {
			"use strict";
			var n = {};

			function t(e, r, o) {
				var i, l, u, s, a, c = "";
				for ("string" !== typeof r && (o = r, r = t.defaultChars), "undefined" === typeof o && (o = !0), a = function(e) {
						var t, r, o = n[e];
						if (o) return o;
						for (o = n[e] = [], t = 0; t < 128; t++) r = String.fromCharCode(t), /^[0-9a-z]$/i.test(r) ? o.push(r) : o.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
						for (t = 0; t < e.length; t++) o[e.charCodeAt(t)] = e[t];
						return o
					}(r), i = 0, l = e.length; i < l; i++)
					if (u = e.charCodeAt(i), o && 37 === u && i + 2 < l && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) c += e.slice(i, i + 3), i += 2;
					else if (u < 128) c += a[u];
				else if (u >= 55296 && u <= 57343) {
					if (u >= 55296 && u <= 56319 && i + 1 < l && (s = e.charCodeAt(i + 1)) >= 56320 && s <= 57343) {
						c += encodeURIComponent(e[i] + e[i + 1]), i++;
						continue
					}
					c += "%EF%BF%BD"
				} else c += encodeURIComponent(e[i]);
				return c
			}
			t.defaultChars = ";/?:@&=+$,-_.!~*'()#", t.componentChars = "-_.!~*'()", e.exports = t
		},
		8772: function(e, n, t) {
			"use strict";
			var r = t(331);

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, n, t, o, i, l) {
					if (l !== r) {
						var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw u.name = "Invariant Violation", u
					}
				}

				function n() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bigint: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: n,
					element: e,
					elementType: e,
					instanceOf: n,
					node: e,
					objectOf: n,
					oneOf: n,
					oneOfType: n,
					shape: n,
					exact: n,
					checkPropTypes: i,
					resetWarningCache: o
				};
				return t.PropTypes = t, t
			}
		},
		3615: function(e, n, t) {
			e.exports = t(8772)()
		},
		331: function(e) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		8702: function(e, n) {
			"use strict";
			var t = 60103,
				r = 60106,
				o = 60107,
				i = 60108,
				l = 60114,
				u = 60109,
				s = 60110,
				a = 60112,
				c = 60113,
				f = 60120,
				p = 60115,
				d = 60116,
				h = 60121,
				m = 60122,
				g = 60117,
				y = 60129,
				k = 60131;
			if ("function" === typeof Symbol && Symbol.for) {
				var x = Symbol.for;
				t = x("react.element"), r = x("react.portal"), o = x("react.fragment"), i = x("react.strict_mode"), l = x("react.profiler"), u = x("react.provider"), s = x("react.context"), a = x("react.forward_ref"), c = x("react.suspense"), f = x("react.suspense_list"), p = x("react.memo"), d = x("react.lazy"), h = x("react.block"), m = x("react.server.block"), g = x("react.fundamental"), y = x("react.debug_trace_mode"), k = x("react.legacy_hidden")
			}

			function v(e) {
				if ("object" === typeof e && null !== e) {
					var n = e.$$typeof;
					switch (n) {
						case t:
							switch (e = e.type) {
								case o:
								case l:
								case i:
								case c:
								case f:
									return e;
								default:
									switch (e = e && e.$$typeof) {
										case s:
										case a:
										case d:
										case p:
										case u:
											return e;
										default:
											return n
									}
							}
							case r:
								return n
					}
				}
			}
			var b = u,
				w = t,
				C = a,
				S = o,
				E = d,
				A = p,
				F = r,
				T = l,
				I = i,
				P = c;
			n.ContextConsumer = s, n.ContextProvider = b, n.Element = w, n.ForwardRef = C, n.Fragment = S, n.Lazy = E, n.Memo = A, n.Portal = F, n.Profiler = T, n.StrictMode = I, n.Suspense = P, n.isAsyncMode = function() {
				return !1
			}, n.isConcurrentMode = function() {
				return !1
			}, n.isContextConsumer = function(e) {
				return v(e) === s
			}, n.isContextProvider = function(e) {
				return v(e) === u
			}, n.isElement = function(e) {
				return "object" === typeof e && null !== e && e.$$typeof === t
			}, n.isForwardRef = function(e) {
				return v(e) === a
			}, n.isFragment = function(e) {
				return v(e) === o
			}, n.isLazy = function(e) {
				return v(e) === d
			}, n.isMemo = function(e) {
				return v(e) === p
			}, n.isPortal = function(e) {
				return v(e) === r
			}, n.isProfiler = function(e) {
				return v(e) === l
			}, n.isStrictMode = function(e) {
				return v(e) === i
			}, n.isSuspense = function(e) {
				return v(e) === c
			}, n.isValidElementType = function(e) {
				return "string" === typeof e || "function" === typeof e || e === o || e === l || e === y || e === i || e === c || e === f || e === k || "object" === typeof e && null !== e && (e.$$typeof === d || e.$$typeof === p || e.$$typeof === u || e.$$typeof === s || e.$$typeof === a || e.$$typeof === g || e.$$typeof === h || e[0] === m)
			}, n.typeOf = v
		},
		9185: function(e, n, t) {
			"use strict";
			e.exports = t(8702)
		},
		5862: function(e, n, t) {
			var r = t(3812);
			e.exports = function(e, n) {
				var t, o = null;
				if (!e || "string" !== typeof e) return o;
				for (var i, l, u = r(e), s = "function" === typeof n, a = 0, c = u.length; a < c; a++) i = (t = u[a]).property, l = t.value, s ? n(i, l, t) : l && (o || (o = {}), o[i] = l);
				return o
			}
		},
		9477: function(e, n, t) {
			"use strict";
			t.d(n, {
				T: function() {
					return o
				}
			});
			const r = document.createElement("i");

			function o(e) {
				const n = "&" + e + ";";
				r.innerHTML = n;
				const t = r.textContent;
				return (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && (t !== n && t)
			}
		},
		2929: function(e, n, t) {
			"use strict";
			t.d(n, {
				w: function() {
					return i
				}
			});
			var r = t(4014),
				o = t(8885);
			const i = {
				tokenize: function(e, n, t) {
					return (0, r.f)(e, (function(e) {
						return null === e || (0, o.Ch)(e) ? n(e) : t(e)
					}), "linePrefix")
				},
				partial: !0
			}
		},
		4014: function(e, n, t) {
			"use strict";
			t.d(n, {
				f: function() {
					return o
				}
			});
			var r = t(8885);

			function o(e, n, t, o) {
				const i = o ? o - 1 : Number.POSITIVE_INFINITY;
				let l = 0;
				return function(o) {
					if ((0, r.xz)(o)) return e.enter(t), u(o);
					return n(o)
				};

				function u(o) {
					return (0, r.xz)(o) && l++ < i ? (e.consume(o), u) : (e.exit(t), n(o))
				}
			}
		},
		8885: function(e, n, t) {
			"use strict";
			t.d(n, {
				jv: function() {
					return r
				},
				H$: function() {
					return l
				},
				n9: function() {
					return s
				},
				Av: function() {
					return a
				},
				pY: function() {
					return o
				},
				AF: function() {
					return i
				},
				sR: function() {
					return u
				},
				Ch: function() {
					return f
				},
				z3: function() {
					return c
				},
				xz: function() {
					return p
				},
				Xh: function() {
					return h
				},
				B8: function() {
					return d
				}
			});
			const r = m(/[A-Za-z]/),
				o = m(/\d/),
				i = m(/[\dA-Fa-f]/),
				l = m(/[\dA-Za-z]/),
				u = m(/[!-/:-@[-`{-~]/),
				s = m(/[#-'*+\--9=?A-Z^-~]/);

			function a(e) {
				return null !== e && (e < 32 || 127 === e)
			}

			function c(e) {
				return null !== e && (e < 0 || 32 === e)
			}

			function f(e) {
				return null !== e && e < -2
			}

			function p(e) {
				return -2 === e || -1 === e || 32 === e
			}
			const d = m(/\s/),
				h = m(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

			function m(e) {
				return function(n) {
					return null !== n && e.test(String.fromCharCode(n))
				}
			}
		},
		8300: function(e, n, t) {
			"use strict";

			function r(e, n, t, r) {
				const o = e.length;
				let i, l = 0;
				if (n = n < 0 ? -n > o ? 0 : o + n : n > o ? o : n, t = t > 0 ? t : 0, r.length < 1e4) i = Array.from(r), i.unshift(n, t), [].splice.apply(e, i);
				else
					for (t && [].splice.apply(e, [n, t]); l < r.length;) i = r.slice(l, l + 1e4), i.unshift(n, 0), [].splice.apply(e, i), l += 1e4, n += 1e4
			}

			function o(e, n) {
				return e.length > 0 ? (r(e, e.length, 0, n), e) : n
			}
			t.d(n, {
				V: function() {
					return o
				},
				d: function() {
					return r
				}
			})
		},
		3886: function(e, n, t) {
			"use strict";
			t.d(n, {
				r: function() {
					return o
				}
			});
			var r = t(8885);

			function o(e) {
				return null === e || (0, r.z3)(e) || (0, r.B8)(e) ? 1 : (0, r.Xh)(e) ? 2 : void 0
			}
		},
		4666: function(e, n, t) {
			"use strict";
			t.d(n, {
				W: function() {
					return i
				}
			});
			var r = t(8300);
			const o = {}.hasOwnProperty;

			function i(e) {
				const n = {};
				let t = -1;
				for (; ++t < e.length;) l(n, e[t]);
				return n
			}

			function l(e, n) {
				let t;
				for (t in n) {
					const r = (o.call(e, t) ? e[t] : void 0) || (e[t] = {}),
						i = n[t];
					let l;
					for (l in i) {
						o.call(r, l) || (r[l] = []);
						const e = i[l];
						u(r[l], Array.isArray(e) ? e : e ? [e] : [])
					}
				}
			}

			function u(e, n) {
				let t = -1;
				const o = [];
				for (; ++t < n.length;)("after" === n[t].add ? e : o).push(n[t]);
				(0, r.d)(e, 0, 0, o)
			}
		},
		8031: function(e, n, t) {
			"use strict";

			function r(e, n) {
				const t = Number.parseInt(e, n);
				return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || 65535 === (65535 & t) || 65534 === (65535 & t) || t > 1114111 ? "\ufffd" : String.fromCharCode(t)
			}
			t.d(n, {
				o: function() {
					return r
				}
			})
		},
		2116: function(e, n, t) {
			"use strict";
			t.d(n, {
				v: function() {
					return l
				}
			});
			var r = t(9477),
				o = t(8031);
			const i = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

			function l(e) {
				return e.replace(i, u)
			}

			function u(e, n, t) {
				if (n) return n;
				if (35 === t.charCodeAt(0)) {
					const e = t.charCodeAt(1),
						n = 120 === e || 88 === e;
					return (0, o.o)(t.slice(n ? 2 : 1), n ? 16 : 10)
				}
				return (0, r.T)(t) || e
			}
		},
		2493: function(e, n, t) {
			"use strict";

			function r(e) {
				return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
			}
			t.d(n, {
				d: function() {
					return r
				}
			})
		},
		3879: function(e, n, t) {
			"use strict";

			function r(e, n, t) {
				const r = [];
				let o = -1;
				for (; ++o < e.length;) {
					const i = e[o].resolveAll;
					i && !r.includes(i) && (n = i(n, t), r.push(i))
				}
				return n
			}
			t.d(n, {
				C: function() {
					return r
				}
			})
		},
		7955: function(e, n, t) {
			"use strict";
			t.d(n, {
				D: function() {
					return Ht
				}
			});
			var r = {};
			t.r(r), t.d(r, {
				attentionMarkers: function() {
					return un
				},
				contentInitial: function() {
					return en
				},
				disable: function() {
					return sn
				},
				document: function() {
					return Ge
				},
				flow: function() {
					return tn
				},
				flowInitial: function() {
					return nn
				},
				insideSpan: function() {
					return ln
				},
				string: function() {
					return rn
				},
				text: function() {
					return on
				}
			});
			var o = {};
			t.r(o), t.d(o, {
				boolean: function() {
					return Zn
				},
				booleanish: function() {
					return Jn
				},
				commaOrSpaceSeparated: function() {
					return rt
				},
				commaSeparated: function() {
					return tt
				},
				number: function() {
					return et
				},
				overloadedBoolean: function() {
					return Gn
				},
				spaceSeparated: function() {
					return nt
				}
			});
			var i = t(7378),
				l = t(8809);

			function u(e) {
				return e && "object" === typeof e ? "position" in e || "type" in e ? a(e.position) : "start" in e || "end" in e ? a(e) : "line" in e || "column" in e ? s(e) : "" : ""
			}

			function s(e) {
				return c(e && e.line) + ":" + c(e && e.column)
			}

			function a(e) {
				return s(e && e.start) + "-" + s(e && e.end)
			}

			function c(e) {
				return e && "number" === typeof e ? e : 1
			}
			class f extends Error {
				constructor(e, n, t) {
					const r = [null, null];
					let o = {
						start: {
							line: null,
							column: null
						},
						end: {
							line: null,
							column: null
						}
					};
					if (super(), "string" === typeof n && (t = n, n = void 0), "string" === typeof t) {
						const e = t.indexOf(":"); - 1 === e ? r[1] = t : (r[0] = t.slice(0, e), r[1] = t.slice(e + 1))
					}
					n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = u(n) || "1:1", this.message = "object" === typeof e ? e.message : e, this.stack = "", "object" === typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
				}
			}
			f.prototype.file = "", f.prototype.name = "", f.prototype.reason = "", f.prototype.message = "", f.prototype.stack = "", f.prototype.fatal = null, f.prototype.column = null, f.prototype.line = null, f.prototype.source = null, f.prototype.ruleId = null, f.prototype.position = null;
			const p = {
				basename: function(e, n) {
					if (void 0 !== n && "string" !== typeof n) throw new TypeError('"ext" argument must be a string');
					d(e);
					let t, r = 0,
						o = -1,
						i = e.length;
					if (void 0 === n || 0 === n.length || n.length > e.length) {
						for (; i--;)
							if (47 === e.charCodeAt(i)) {
								if (t) {
									r = i + 1;
									break
								}
							} else o < 0 && (t = !0, o = i + 1);
						return o < 0 ? "" : e.slice(r, o)
					}
					if (n === e) return "";
					let l = -1,
						u = n.length - 1;
					for (; i--;)
						if (47 === e.charCodeAt(i)) {
							if (t) {
								r = i + 1;
								break
							}
						} else l < 0 && (t = !0, l = i + 1), u > -1 && (e.charCodeAt(i) === n.charCodeAt(u--) ? u < 0 && (o = i) : (u = -1, o = l));
					r === o ? o = l : o < 0 && (o = e.length);
					return e.slice(r, o)
				},
				dirname: function(e) {
					if (d(e), 0 === e.length) return ".";
					let n, t = -1,
						r = e.length;
					for (; --r;)
						if (47 === e.charCodeAt(r)) {
							if (n) {
								t = r;
								break
							}
						} else n || (n = !0);
					return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
				},
				extname: function(e) {
					d(e);
					let n, t = e.length,
						r = -1,
						o = 0,
						i = -1,
						l = 0;
					for (; t--;) {
						const u = e.charCodeAt(t);
						if (47 !== u) r < 0 && (n = !0, r = t + 1), 46 === u ? i < 0 ? i = t : 1 !== l && (l = 1) : i > -1 && (l = -1);
						else if (n) {
							o = t + 1;
							break
						}
					}
					if (i < 0 || r < 0 || 0 === l || 1 === l && i === r - 1 && i === o + 1) return "";
					return e.slice(i, r)
				},
				join: function(...e) {
					let n, t = -1;
					for (; ++t < e.length;) d(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
					return void 0 === n ? "." : function(e) {
						d(e);
						const n = 47 === e.charCodeAt(0);
						let t = function(e, n) {
							let t, r, o = "",
								i = 0,
								l = -1,
								u = 0,
								s = -1;
							for (; ++s <= e.length;) {
								if (s < e.length) t = e.charCodeAt(s);
								else {
									if (47 === t) break;
									t = 47
								}
								if (47 === t) {
									if (l === s - 1 || 1 === u);
									else if (l !== s - 1 && 2 === u) {
										if (o.length < 2 || 2 !== i || 46 !== o.charCodeAt(o.length - 1) || 46 !== o.charCodeAt(o.length - 2))
											if (o.length > 2) {
												if (r = o.lastIndexOf("/"), r !== o.length - 1) {
													r < 0 ? (o = "", i = 0) : (o = o.slice(0, r), i = o.length - 1 - o.lastIndexOf("/")), l = s, u = 0;
													continue
												}
											} else if (o.length > 0) {
											o = "", i = 0, l = s, u = 0;
											continue
										}
										n && (o = o.length > 0 ? o + "/.." : "..", i = 2)
									} else o.length > 0 ? o += "/" + e.slice(l + 1, s) : o = e.slice(l + 1, s), i = s - l - 1;
									l = s, u = 0
								} else 46 === t && u > -1 ? u++ : u = -1
							}
							return o
						}(e, !n);
						0 !== t.length || n || (t = ".");
						t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
						return n ? "/" + t : t
					}(n)
				},
				sep: "/"
			};

			function d(e) {
				if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
			}
			const h = {
				cwd: function() {
					return "/"
				}
			};

			function m(e) {
				return null !== e && "object" === typeof e && e.href && e.origin
			}

			function g(e) {
				if ("string" === typeof e) e = new URL(e);
				else if (!m(e)) {
					const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
					throw n.code = "ERR_INVALID_ARG_TYPE", n
				}
				if ("file:" !== e.protocol) {
					const e = new TypeError("The URL must be of scheme file");
					throw e.code = "ERR_INVALID_URL_SCHEME", e
				}
				return function(e) {
					if ("" !== e.hostname) {
						const e = new TypeError('File URL host must be "localhost" or empty on darwin');
						throw e.code = "ERR_INVALID_FILE_URL_HOST", e
					}
					const n = e.pathname;
					let t = -1;
					for (; ++t < n.length;)
						if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
							const e = n.charCodeAt(t + 2);
							if (70 === e || 102 === e) {
								const e = new TypeError("File URL path must not include encoded / characters");
								throw e.code = "ERR_INVALID_FILE_URL_PATH", e
							}
						} return decodeURIComponent(n)
				}(e)
			}
			const y = ["history", "path", "basename", "stem", "extname", "dirname"];
			class k {
				constructor(e) {
					let n;
					n = e ? "string" === typeof e || function(e) {
						return l(e)
					}(e) ? {
						value: e
					} : m(e) ? {
						path: e
					} : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = h.cwd(), this.value, this.stored, this.result, this.map;
					let t, r = -1;
					for (; ++r < y.length;) {
						const e = y[r];
						e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
					}
					for (t in n) y.includes(t) || (this[t] = n[t])
				}
				get path() {
					return this.history[this.history.length - 1]
				}
				set path(e) {
					m(e) && (e = g(e)), v(e, "path"), this.path !== e && this.history.push(e)
				}
				get dirname() {
					return "string" === typeof this.path ? p.dirname(this.path) : void 0
				}
				set dirname(e) {
					b(this.basename, "dirname"), this.path = p.join(e || "", this.basename)
				}
				get basename() {
					return "string" === typeof this.path ? p.basename(this.path) : void 0
				}
				set basename(e) {
					v(e, "basename"), x(e, "basename"), this.path = p.join(this.dirname || "", e)
				}
				get extname() {
					return "string" === typeof this.path ? p.extname(this.path) : void 0
				}
				set extname(e) {
					if (x(e, "extname"), b(this.dirname, "extname"), e) {
						if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
						if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
					}
					this.path = p.join(this.dirname, this.stem + (e || ""))
				}
				get stem() {
					return "string" === typeof this.path ? p.basename(this.path, this.extname) : void 0
				}
				set stem(e) {
					v(e, "stem"), x(e, "stem"), this.path = p.join(this.dirname || "", e + (this.extname || ""))
				}
				toString(e) {
					return (this.value || "").toString(e || void 0)
				}
				message(e, n, t) {
					const r = new f(e, n, t);
					return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
				}
				info(e, n, t) {
					const r = this.message(e, n, t);
					return r.fatal = null, r
				}
				fail(e, n, t) {
					const r = this.message(e, n, t);
					throw r.fatal = !0, r
				}
			}

			function x(e, n) {
				if (e && e.includes(p.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + p.sep + "`")
			}

			function v(e, n) {
				if (!e) throw new Error("`" + n + "` cannot be empty")
			}

			function b(e, n) {
				if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
			}

			function w(e) {
				if (e) throw e
			}
			var C = t(229);

			function S(e) {
				if ("object" !== typeof e || null === e) return !1;
				const n = Object.getPrototypeOf(e);
				return (null === n || n === Object.prototype || null === Object.getPrototypeOf(n)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
			}

			function E() {
				const e = [],
					n = {
						run: function(...n) {
							let t = -1;
							const r = n.pop();
							if ("function" !== typeof r) throw new TypeError("Expected function as last argument, not " + r);
							! function o(i, ...l) {
								const u = e[++t];
								let s = -1;
								if (i) r(i);
								else {
									for (; ++s < n.length;) null !== l[s] && void 0 !== l[s] || (l[s] = n[s]);
									n = l, u ? function(e, n) {
										let t;
										return r;

										function r(...n) {
											const r = e.length > n.length;
											let u;
											r && n.push(o);
											try {
												u = e.apply(this, n)
											} catch (i) {
												const n = i;
												if (r && t) throw n;
												return o(n)
											}
											r || (u instanceof Promise ? u.then(l, o) : u instanceof Error ? o(u) : l(u))
										}

										function o(e, ...r) {
											t || (t = !0, n(e, ...r))
										}

										function l(e) {
											o(null, e)
										}
									}(u, o)(...l) : r(null, ...l)
								}
							}(null, ...n)
						},
						use: function(t) {
							if ("function" !== typeof t) throw new TypeError("Expected `middelware` to be a function, not " + t);
							return e.push(t), n
						}
					};
				return n
			}
			class A extends Error {
				constructor(e, n, t) {
					const r = [null, null];
					let o = {
						start: {
							line: null,
							column: null
						},
						end: {
							line: null,
							column: null
						}
					};
					if (super(), "string" === typeof n && (t = n, n = void 0), "string" === typeof t) {
						const e = t.indexOf(":"); - 1 === e ? r[1] = t : (r[0] = t.slice(0, e), r[1] = t.slice(e + 1))
					}
					n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = u(n) || "1:1", this.message = "object" === typeof e ? e.message : e, this.stack = "", "object" === typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.position = o, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
				}
			}
			A.prototype.file = "", A.prototype.name = "", A.prototype.reason = "", A.prototype.message = "", A.prototype.stack = "", A.prototype.fatal = null, A.prototype.column = null, A.prototype.line = null, A.prototype.source = null, A.prototype.ruleId = null, A.prototype.position = null;
			const F = {
				basename: function(e, n) {
					if (void 0 !== n && "string" !== typeof n) throw new TypeError('"ext" argument must be a string');
					T(e);
					let t, r = 0,
						o = -1,
						i = e.length;
					if (void 0 === n || 0 === n.length || n.length > e.length) {
						for (; i--;)
							if (47 === e.charCodeAt(i)) {
								if (t) {
									r = i + 1;
									break
								}
							} else o < 0 && (t = !0, o = i + 1);
						return o < 0 ? "" : e.slice(r, o)
					}
					if (n === e) return "";
					let l = -1,
						u = n.length - 1;
					for (; i--;)
						if (47 === e.charCodeAt(i)) {
							if (t) {
								r = i + 1;
								break
							}
						} else l < 0 && (t = !0, l = i + 1), u > -1 && (e.charCodeAt(i) === n.charCodeAt(u--) ? u < 0 && (o = i) : (u = -1, o = l));
					r === o ? o = l : o < 0 && (o = e.length);
					return e.slice(r, o)
				},
				dirname: function(e) {
					if (T(e), 0 === e.length) return ".";
					let n, t = -1,
						r = e.length;
					for (; --r;)
						if (47 === e.charCodeAt(r)) {
							if (n) {
								t = r;
								break
							}
						} else n || (n = !0);
					return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
				},
				extname: function(e) {
					T(e);
					let n, t = e.length,
						r = -1,
						o = 0,
						i = -1,
						l = 0;
					for (; t--;) {
						const u = e.charCodeAt(t);
						if (47 !== u) r < 0 && (n = !0, r = t + 1), 46 === u ? i < 0 ? i = t : 1 !== l && (l = 1) : i > -1 && (l = -1);
						else if (n) {
							o = t + 1;
							break
						}
					}
					if (i < 0 || r < 0 || 0 === l || 1 === l && i === r - 1 && i === o + 1) return "";
					return e.slice(i, r)
				},
				join: function(...e) {
					let n, t = -1;
					for (; ++t < e.length;) T(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
					return void 0 === n ? "." : function(e) {
						T(e);
						const n = 47 === e.charCodeAt(0);
						let t = function(e, n) {
							let t, r, o = "",
								i = 0,
								l = -1,
								u = 0,
								s = -1;
							for (; ++s <= e.length;) {
								if (s < e.length) t = e.charCodeAt(s);
								else {
									if (47 === t) break;
									t = 47
								}
								if (47 === t) {
									if (l === s - 1 || 1 === u);
									else if (l !== s - 1 && 2 === u) {
										if (o.length < 2 || 2 !== i || 46 !== o.charCodeAt(o.length - 1) || 46 !== o.charCodeAt(o.length - 2))
											if (o.length > 2) {
												if (r = o.lastIndexOf("/"), r !== o.length - 1) {
													r < 0 ? (o = "", i = 0) : (o = o.slice(0, r), i = o.length - 1 - o.lastIndexOf("/")), l = s, u = 0;
													continue
												}
											} else if (o.length > 0) {
											o = "", i = 0, l = s, u = 0;
											continue
										}
										n && (o = o.length > 0 ? o + "/.." : "..", i = 2)
									} else o.length > 0 ? o += "/" + e.slice(l + 1, s) : o = e.slice(l + 1, s), i = s - l - 1;
									l = s, u = 0
								} else 46 === t && u > -1 ? u++ : u = -1
							}
							return o
						}(e, !n);
						0 !== t.length || n || (t = ".");
						t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
						return n ? "/" + t : t
					}(n)
				},
				sep: "/"
			};

			function T(e) {
				if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
			}
			const I = {
				cwd: function() {
					return "/"
				}
			};

			function P(e) {
				return null !== e && "object" === typeof e && e.href && e.origin
			}

			function O(e) {
				if ("string" === typeof e) e = new URL(e);
				else if (!P(e)) {
					const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
					throw n.code = "ERR_INVALID_ARG_TYPE", n
				}
				if ("file:" !== e.protocol) {
					const e = new TypeError("The URL must be of scheme file");
					throw e.code = "ERR_INVALID_URL_SCHEME", e
				}
				return function(e) {
					if ("" !== e.hostname) {
						const e = new TypeError('File URL host must be "localhost" or empty on darwin');
						throw e.code = "ERR_INVALID_FILE_URL_HOST", e
					}
					const n = e.pathname;
					let t = -1;
					for (; ++t < n.length;)
						if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
							const e = n.charCodeAt(t + 2);
							if (70 === e || 102 === e) {
								const e = new TypeError("File URL path must not include encoded / characters");
								throw e.code = "ERR_INVALID_FILE_URL_PATH", e
							}
						} return decodeURIComponent(n)
				}(e)
			}
			const z = ["history", "path", "basename", "stem", "extname", "dirname"];
			class D {
				constructor(e) {
					let n;
					n = e ? "string" === typeof e || function(e) {
						return l(e)
					}(e) ? {
						value: e
					} : P(e) ? {
						path: e
					} : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = I.cwd(), this.value, this.stored, this.result, this.map;
					let t, r = -1;
					for (; ++r < z.length;) {
						const e = z[r];
						e in n && void 0 !== n[e] && null !== n[e] && (this[e] = "history" === e ? [...n[e]] : n[e])
					}
					for (t in n) z.includes(t) || (this[t] = n[t])
				}
				get path() {
					return this.history[this.history.length - 1]
				}
				set path(e) {
					P(e) && (e = O(e)), R(e, "path"), this.path !== e && this.history.push(e)
				}
				get dirname() {
					return "string" === typeof this.path ? F.dirname(this.path) : void 0
				}
				set dirname(e) {
					M(this.basename, "dirname"), this.path = F.join(e || "", this.basename)
				}
				get basename() {
					return "string" === typeof this.path ? F.basename(this.path) : void 0
				}
				set basename(e) {
					R(e, "basename"), L(e, "basename"), this.path = F.join(this.dirname || "", e)
				}
				get extname() {
					return "string" === typeof this.path ? F.extname(this.path) : void 0
				}
				set extname(e) {
					if (L(e, "extname"), M(this.dirname, "extname"), e) {
						if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`");
						if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
					}
					this.path = F.join(this.dirname, this.stem + (e || ""))
				}
				get stem() {
					return "string" === typeof this.path ? F.basename(this.path, this.extname) : void 0
				}
				set stem(e) {
					R(e, "stem"), L(e, "stem"), this.path = F.join(this.dirname || "", e + (this.extname || ""))
				}
				toString(e) {
					return (this.value || "").toString(e || void 0)
				}
				message(e, n, t) {
					const r = new A(e, n, t);
					return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
				}
				info(e, n, t) {
					const r = this.message(e, n, t);
					return r.fatal = null, r
				}
				fail(e, n, t) {
					const r = this.message(e, n, t);
					throw r.fatal = !0, r
				}
			}

			function L(e, n) {
				if (e && e.includes(F.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + F.sep + "`")
			}

			function R(e, n) {
				if (!e) throw new Error("`" + n + "` cannot be empty")
			}

			function M(e, n) {
				if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
			}
			const _ = function e() {
					const n = E(),
						t = [];
					let r, o = {},
						i = -1;
					return u.data = function(e, n) {
						if ("string" === typeof e) return 2 === arguments.length ? (N("data", r), o[e] = n, u) : j.call(o, e) && o[e] || null;
						if (e) return N("data", r), o = e, u;
						return o
					}, u.Parser = void 0, u.Compiler = void 0, u.freeze = function() {
						if (r) return u;
						for (; ++i < t.length;) {
							const [e, ...r] = t[i];
							if (!1 === r[0]) continue;
							!0 === r[0] && (r[0] = void 0);
							const o = e.call(u, ...r);
							"function" === typeof o && n.use(o)
						}
						return r = !0, i = Number.POSITIVE_INFINITY, u
					}, u.attachers = t, u.use = function(e, ...n) {
						let i;
						if (N("use", r), null === e || void 0 === e);
						else if ("function" === typeof e) c(e, ...n);
						else {
							if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
							Array.isArray(e) ? a(e) : s(e)
						}
						i && (o.settings = Object.assign(o.settings || {}, i));
						return u;

						function l(e) {
							if ("function" === typeof e) c(e);
							else {
								if ("object" !== typeof e) throw new TypeError("Expected usable value, not `" + e + "`");
								if (Array.isArray(e)) {
									const [n, ...t] = e;
									c(n, ...t)
								} else s(e)
							}
						}

						function s(e) {
							a(e.plugins), e.settings && (i = Object.assign(i || {}, e.settings))
						}

						function a(e) {
							let n = -1;
							if (null === e || void 0 === e);
							else {
								if (!Array.isArray(e)) throw new TypeError("Expected a list of plugins, not `" + e + "`");
								for (; ++n < e.length;) {
									l(e[n])
								}
							}
						}

						function c(e, n) {
							let r, o = -1;
							for (; ++o < t.length;)
								if (t[o][0] === e) {
									r = t[o];
									break
								} r ? (S(r[1]) && S(n) && (n = C(!0, r[1], n)), r[1] = n) : t.push([...arguments])
						}
					}, u.parse = function(e) {
						u.freeze();
						const n = q(e),
							t = u.Parser;
						if (H("parse", t), B(t, "parse")) return new t(String(n), n).parse();
						return t(String(n), n)
					}, u.stringify = function(e, n) {
						u.freeze();
						const t = q(n),
							r = u.Compiler;
						if (U("stringify", r), V(e), B(r, "compile")) return new r(e, t).compile();
						return r(e, t)
					}, u.run = function(e, t, r) {
						V(e), u.freeze(), r || "function" !== typeof t || (r = t, t = void 0);
						if (!r) return new Promise(o);

						function o(o, i) {
							function l(n, t, l) {
								t = t || e, n ? i(n) : o ? o(t) : r(null, t, l)
							}
							n.run(e, q(t), l)
						}
						o(null, r)
					}, u.runSync = function(e, n) {
						let t, r;
						return u.run(e, n, o), $("runSync", "run", r), t;

						function o(e, n) {
							w(e), t = n, r = !0
						}
					}, u.process = function(e, n) {
						if (u.freeze(), H("process", u.Parser), U("process", u.Compiler), !n) return new Promise(t);

						function t(t, r) {
							const o = q(e);

							function i(e, o) {
								e || !o ? r(e) : t ? t(o) : n(null, o)
							}
							u.run(u.parse(o), o, ((e, n, t) => {
								if (!e && n && t) {
									const o = u.stringify(n, t);
									void 0 === o || null === o || ("string" === typeof(r = o) || l(r) ? t.value = o : t.result = o), i(e, t)
								} else i(e);
								var r
							}))
						}
						t(null, n)
					}, u.processSync = function(e) {
						let n;
						u.freeze(), H("processSync", u.Parser), U("processSync", u.Compiler);
						const t = q(e);
						return u.process(t, r), $("processSync", "process", n), t;

						function r(e) {
							n = !0, w(e)
						}
					}, u;

					function u() {
						const n = e();
						let r = -1;
						for (; ++r < t.length;) n.use(...t[r]);
						return n.data(C(!0, {}, o)), n
					}
				}().freeze(),
				j = {}.hasOwnProperty;

			function B(e, n) {
				return "function" === typeof e && e.prototype && (function(e) {
					let n;
					for (n in e)
						if (j.call(e, n)) return !0;
					return !1
				}(e.prototype) || n in e.prototype)
			}

			function H(e, n) {
				if ("function" !== typeof n) throw new TypeError("Cannot `" + e + "` without `Parser`")
			}

			function U(e, n) {
				if ("function" !== typeof n) throw new TypeError("Cannot `" + e + "` without `Compiler`")
			}

			function N(e, n) {
				if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
			}

			function V(e) {
				if (!S(e) || "string" !== typeof e.type) throw new TypeError("Expected node, got `" + e + "`")
			}

			function $(e, n, t) {
				if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
			}

			function q(e) {
				return function(e) {
					return Boolean(e && "object" === typeof e && "message" in e && "messages" in e)
				}(e) ? e : new D(e)
			}

			function W(e, n) {
				return function(e) {
					return Boolean(e && "object" === typeof e)
				}(e) && ("value" in e && e.value || n && "alt" in e && e.alt || "children" in e && Y(e.children, n)) || Array.isArray(e) && Y(e, n) || ""
			}

			function Y(e, n) {
				const t = [];
				let r = -1;
				for (; ++r < e.length;) t[r] = W(e[r], n);
				return t.join("")
			}
			var Q = t(4666),
				X = t(4014),
				K = t(8885);
			const Z = {
				tokenize: function(e) {
					const n = e.attempt(this.parser.constructs.contentInitial, (function(t) {
						if (null === t) return void e.consume(t);
						return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, X.f)(e, n, "linePrefix")
					}), (function(n) {
						return e.enter("paragraph"), r(n)
					}));
					let t;
					return n;

					function r(n) {
						const r = e.enter("chunkText", {
							contentType: "text",
							previous: t
						});
						return t && (t.next = r), t = r, o(n)
					}

					function o(n) {
						return null === n ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n)) : (0, K.Ch)(n) ? (e.consume(n), e.exit("chunkText"), r) : (e.consume(n), o)
					}
				}
			};
			var J = t(8300);
			const G = {
					tokenize: function(e) {
						const n = this,
							t = [];
						let r, o, i, l = 0;
						return u;

						function u(r) {
							if (l < t.length) {
								const o = t[l];
								return n.containerState = o[1], e.attempt(o[0].continuation, s, a)(r)
							}
							return a(r)
						}

						function s(e) {
							if (l++, n.containerState._closeFlow) {
								n.containerState._closeFlow = void 0, r && k();
								const t = n.events.length;
								let o, i = t;
								for (; i--;)
									if ("exit" === n.events[i][0] && "chunkFlow" === n.events[i][1].type) {
										o = n.events[i][1].end;
										break
									} y(l);
								let u = t;
								for (; u < n.events.length;) n.events[u][1].end = Object.assign({}, o), u++;
								return (0, J.d)(n.events, i + 1, 0, n.events.slice(t)), n.events.length = u, a(e)
							}
							return u(e)
						}

						function a(o) {
							if (l === t.length) {
								if (!r) return p(o);
								if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
								n.interrupt = Boolean(r.currentConstruct && !r._gfmTableDynamicInterruptHack)
							}
							return n.containerState = {}, e.check(ee, c, f)(o)
						}

						function c(e) {
							return r && k(), y(l), p(e)
						}

						function f(e) {
							return n.parser.lazy[n.now().line] = l !== t.length, i = n.now().offset, h(e)
						}

						function p(t) {
							return n.containerState = {}, e.attempt(ee, d, h)(t)
						}

						function d(e) {
							return l++, t.push([n.currentConstruct, n.containerState]), p(e)
						}

						function h(t) {
							return null === t ? (r && k(), y(0), void e.consume(t)) : (r = r || n.parser.flow(n.now()), e.enter("chunkFlow", {
								contentType: "flow",
								previous: o,
								_tokenizer: r
							}), m(t))
						}

						function m(t) {
							return null === t ? (g(e.exit("chunkFlow"), !0), y(0), void e.consume(t)) : (0, K.Ch)(t) ? (e.consume(t), g(e.exit("chunkFlow")), l = 0, n.interrupt = void 0, u) : (e.consume(t), m)
						}

						function g(e, t) {
							const u = n.sliceStream(e);
							if (t && u.push(null), e.previous = o, o && (o.next = e), o = e, r.defineSkip(e.start), r.write(u), n.parser.lazy[e.start.line]) {
								let e = r.events.length;
								for (; e--;)
									if (r.events[e][1].start.offset < i && (!r.events[e][1].end || r.events[e][1].end.offset > i)) return;
								const t = n.events.length;
								let o, u, s = t;
								for (; s--;)
									if ("exit" === n.events[s][0] && "chunkFlow" === n.events[s][1].type) {
										if (o) {
											u = n.events[s][1].end;
											break
										}
										o = !0
									} for (y(l), e = t; e < n.events.length;) n.events[e][1].end = Object.assign({}, u), e++;
								(0, J.d)(n.events, s + 1, 0, n.events.slice(t)), n.events.length = e
							}
						}

						function y(r) {
							let o = t.length;
							for (; o-- > r;) {
								const r = t[o];
								n.containerState = r[1], r[0].exit.call(n, e)
							}
							t.length = r
						}

						function k() {
							r.write([null]), o = void 0, r = void 0, n.containerState._closeFlow = void 0
						}
					}
				},
				ee = {
					tokenize: function(e, n, t) {
						return (0, X.f)(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
					}
				};
			var ne = t(2929);

			function te(e) {
				const n = {};
				let t, r, o, i, l, u, s, a = -1;
				for (; ++a < e.length;) {
					for (; a in n;) a = n[a];
					if (t = e[a], a && "chunkFlow" === t[1].type && "listItemPrefix" === e[a - 1][1].type && (u = t[1]._tokenizer.events, o = 0, o < u.length && "lineEndingBlank" === u[o][1].type && (o += 2), o < u.length && "content" === u[o][1].type))
						for (; ++o < u.length && "content" !== u[o][1].type;) "chunkText" === u[o][1].type && (u[o][1]._isInFirstContentOfListItem = !0, o++);
					if ("enter" === t[0]) t[1].contentType && (Object.assign(n, re(e, a)), a = n[a], s = !0);
					else if (t[1]._container) {
						for (o = a, r = void 0; o-- && (i = e[o], "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);) "enter" === i[0] && (r && (e[r][1].type = "lineEndingBlank"), i[1].type = "lineEnding", r = o);
						r && (t[1].end = Object.assign({}, e[r][1].start), l = e.slice(r, a), l.unshift(t), (0, J.d)(e, r, a - r + 1, l))
					}
				}
				return !s
			}

			function re(e, n) {
				const t = e[n][1],
					r = e[n][2];
				let o = n - 1;
				const i = [],
					l = t._tokenizer || r.parser[t.contentType](t.start),
					u = l.events,
					s = [],
					a = {};
				let c, f, p = -1,
					d = t,
					h = 0,
					m = 0;
				const g = [m];
				for (; d;) {
					for (; e[++o][1] !== d;);
					i.push(o), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && l.defineSkip(d.start), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next
				}
				for (d = t; ++p < u.length;) "exit" === u[p][0] && "enter" === u[p - 1][0] && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (m = p + 1, g.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
				for (l.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : g.pop(), p = g.length; p--;) {
					const n = u.slice(g[p], g[p + 1]),
						t = i.pop();
					s.unshift([t, t + n.length - 1]), (0, J.d)(e, t, 2, n)
				}
				for (p = -1; ++p < s.length;) a[h + s[p][0]] = h + s[p][1], h += s[p][1] - s[p][0] - 1;
				return a
			}
			const oe = {
					tokenize: function(e, n) {
						let t;
						return function(n) {
							return e.enter("content"), t = e.enter("chunkContent", {
								contentType: "content"
							}), r(n)
						};

						function r(n) {
							return null === n ? o(n) : (0, K.Ch)(n) ? e.check(ie, i, o)(n) : (e.consume(n), r)
						}

						function o(t) {
							return e.exit("chunkContent"), e.exit("content"), n(t)
						}

						function i(n) {
							return e.consume(n), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
								contentType: "content",
								previous: t
							}), t = t.next, r
						}
					},
					resolve: function(e) {
						return te(e), e
					}
				},
				ie = {
					tokenize: function(e, n, t) {
						const r = this;
						return function(n) {
							return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, X.f)(e, o, "linePrefix")
						};

						function o(o) {
							if (null === o || (0, K.Ch)(o)) return t(o);
							const i = r.events[r.events.length - 1];
							return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o)
						}
					},
					partial: !0
				};
			const le = {
				tokenize: function(e) {
					const n = this,
						t = e.attempt(ne.w, (function(r) {
							if (null === r) return void e.consume(r);
							return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t
						}), e.attempt(this.parser.constructs.flowInitial, r, (0, X.f)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(oe, r)), "linePrefix")));
					return t;

					function r(r) {
						if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n.currentConstruct = void 0, t;
						e.consume(r)
					}
				}
			};
			const ue = {
					resolveAll: fe()
				},
				se = ce("string"),
				ae = ce("text");

			function ce(e) {
				return {
					tokenize: function(n) {
						const t = this,
							r = this.parser.constructs[e],
							o = n.attempt(r, i, l);
						return i;

						function i(e) {
							return s(e) ? o(e) : l(e)
						}

						function l(e) {
							if (null !== e) return n.enter("data"), n.consume(e), u;
							n.consume(e)
						}

						function u(e) {
							return s(e) ? (n.exit("data"), o(e)) : (n.consume(e), u)
						}

						function s(e) {
							if (null === e) return !0;
							const n = r[e];
							let o = -1;
							if (n)
								for (; ++o < n.length;) {
									const e = n[o];
									if (!e.previous || e.previous.call(t, t.previous)) return !0
								}
							return !1
						}
					},
					resolveAll: fe("text" === e ? pe : void 0)
				}
			}

			function fe(e) {
				return function(n, t) {
					let r, o = -1;
					for (; ++o <= n.length;) void 0 === r ? n[o] && "data" === n[o][1].type && (r = o, o++) : n[o] && "data" === n[o][1].type || (o !== r + 2 && (n[r][1].end = n[o - 1][1].end, n.splice(r + 2, o - r - 2), o = r + 2), r = void 0);
					return e ? e(n, t) : n
				}
			}

			function pe(e, n) {
				let t = 0;
				for (; ++t <= e.length;)
					if ((t === e.length || "lineEnding" === e[t][1].type) && "data" === e[t - 1][1].type) {
						const r = e[t - 1][1],
							o = n.sliceStream(r);
						let i, l = o.length,
							u = -1,
							s = 0;
						for (; l--;) {
							const e = o[l];
							if ("string" === typeof e) {
								for (u = e.length; 32 === e.charCodeAt(u - 1);) s++, u--;
								if (u) break;
								u = -1
							} else if (-2 === e) i = !0, s++;
							else if (-1 !== e) {
								l++;
								break
							}
						}
						if (s) {
							const o = {
								type: t === e.length || i || s < 2 ? "lineSuffix" : "hardBreakTrailing",
								start: {
									line: r.end.line,
									column: r.end.column - s,
									offset: r.end.offset - s,
									_index: r.start._index + l,
									_bufferIndex: l ? u : r.start._bufferIndex + u
								},
								end: Object.assign({}, r.end)
							};
							r.end = Object.assign({}, o.start), r.start.offset === r.end.offset ? Object.assign(r, o) : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), t += 2)
						}
						t++
					} return e
			}
			var de = t(3879);

			function he(e, n, t) {
				let r = Object.assign(t ? Object.assign({}, t) : {
					line: 1,
					column: 1,
					offset: 0
				}, {
					_index: 0,
					_bufferIndex: -1
				});
				const o = {},
					i = [];
				let l = [],
					u = [],
					s = !0;
				const a = {
						consume: function(e) {
							(0, K.Ch)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, v()) : -1 !== e && (r.column++, r.offset++);
							r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++));
							c.previous = e, s = !0
						},
						enter: function(e, n) {
							const t = n || {};
							return t.type = e, t.start = h(), c.events.push(["enter", t, c]), u.push(t), t
						},
						exit: function(e) {
							const n = u.pop();
							return n.end = h(), c.events.push(["exit", n, c]), n
						},
						attempt: k((function(e, n) {
							x(e, n.from)
						})),
						check: k(y),
						interrupt: k(y, {
							interrupt: !0
						})
					},
					c = {
						previous: null,
						code: null,
						containerState: {},
						events: [],
						parser: e,
						sliceStream: d,
						sliceSerialize: function(e, n) {
							return function(e, n) {
								let t = -1;
								const r = [];
								let o;
								for (; ++t < e.length;) {
									const i = e[t];
									let l;
									if ("string" === typeof i) l = i;
									else switch (i) {
										case -5:
											l = "\r";
											break;
										case -4:
											l = "\n";
											break;
										case -3:
											l = "\r\n";
											break;
										case -2:
											l = n ? " " : "\t";
											break;
										case -1:
											if (!n && o) continue;
											l = " ";
											break;
										default:
											l = String.fromCharCode(i)
									}
									o = -2 === i, r.push(l)
								}
								return r.join("")
							}(d(e), n)
						},
						now: h,
						defineSkip: function(e) {
							o[e.line] = e.column, v()
						},
						write: function(e) {
							if (l = (0, J.V)(l, e), m(), null !== l[l.length - 1]) return [];
							return x(n, 0), c.events = (0, de.C)(i, c.events, c), c.events
						}
					};
				let f, p = n.tokenize.call(c, a);
				return n.resolveAll && i.push(n), c;

				function d(e) {
					return function(e, n) {
						const t = n.start._index,
							r = n.start._bufferIndex,
							o = n.end._index,
							i = n.end._bufferIndex;
						let l;
						t === o ? l = [e[t].slice(r, i)] : (l = e.slice(t, o), r > -1 && (l[0] = l[0].slice(r)), i > 0 && l.push(e[o].slice(0, i)));
						return l
					}(l, e)
				}

				function h() {
					return Object.assign({}, r)
				}

				function m() {
					let e;
					for (; r._index < l.length;) {
						const n = l[r._index];
						if ("string" === typeof n)
							for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) g(n.charCodeAt(r._bufferIndex));
						else g(n)
					}
				}

				function g(e) {
					s = void 0, f = e, p = p(e)
				}

				function y(e, n) {
					n.restore()
				}

				function k(e, n) {
					return function(t, o, i) {
						let l, f, p, d;
						return Array.isArray(t) ? m(t) : "tokenize" in t ? m([t]) : function(e) {
							return n;

							function n(n) {
								const t = null !== n && e[n],
									r = null !== n && e.null;
								return m([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []])(n)
							}
						}(t);

						function m(e) {
							return l = e, f = 0, 0 === e.length ? i : g(e[f])
						}

						function g(e) {
							return function(t) {
								d = function() {
									const e = h(),
										n = c.previous,
										t = c.currentConstruct,
										o = c.events.length,
										i = Array.from(u);
									return {
										restore: l,
										from: o
									};

									function l() {
										r = e, c.previous = n, c.currentConstruct = t, c.events.length = o, u = i, v()
									}
								}(), p = e, e.partial || (c.currentConstruct = e);
								if (e.name && c.parser.constructs.disable.null.includes(e.name)) return k(t);
								return e.tokenize.call(n ? Object.assign(Object.create(c), n) : c, a, y, k)(t)
							}
						}

						function y(n) {
							return s = !0, e(p, d), o
						}

						function k(e) {
							return s = !0, d.restore(), ++f < l.length ? g(l[f]) : i
						}
					}
				}

				function x(e, n) {
					e.resolveAll && !i.includes(e) && i.push(e), e.resolve && (0, J.d)(c.events, n, c.events.length - n, e.resolve(c.events.slice(n), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c))
				}

				function v() {
					r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1)
				}
			}
			const me = {
				name: "thematicBreak",
				tokenize: function(e, n, t) {
					let r, o = 0;
					return function(n) {
						return e.enter("thematicBreak"), r = n, i(n)
					};

					function i(u) {
						return u === r ? (e.enter("thematicBreakSequence"), l(u)) : (0, K.xz)(u) ? (0, X.f)(e, i, "whitespace")(u) : o < 3 || null !== u && !(0, K.Ch)(u) ? t(u) : (e.exit("thematicBreak"), n(u))
					}

					function l(n) {
						return n === r ? (e.consume(n), o++, l) : (e.exit("thematicBreakSequence"), i(n))
					}
				}
			};
			const ge = {
					name: "list",
					tokenize: function(e, n, t) {
						const r = this,
							o = r.events[r.events.length - 1];
						let i = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
							l = 0;
						return function(n) {
							const o = r.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
							if ("listUnordered" === o ? !r.containerState.marker || n === r.containerState.marker : (0, K.pY)(n)) {
								if (r.containerState.type || (r.containerState.type = o, e.enter(o, {
										_container: !0
									})), "listUnordered" === o) return e.enter("listItemPrefix"), 42 === n || 45 === n ? e.check(me, t, s)(n) : s(n);
								if (!r.interrupt || 49 === n) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(n)
							}
							return t(n)
						};

						function u(n) {
							return (0, K.pY)(n) && ++l < 10 ? (e.consume(n), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? n === r.containerState.marker : 41 === n || 46 === n) ? (e.exit("listItemValue"), s(n)) : t(n)
						}

						function s(n) {
							return e.enter("listItemMarker"), e.consume(n), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || n, e.check(ne.w, r.interrupt ? t : a, e.attempt(ye, f, c))
						}

						function a(e) {
							return r.containerState.initialBlankLine = !0, i++, f(e)
						}

						function c(n) {
							return (0, K.xz)(n) ? (e.enter("listItemPrefixWhitespace"), e.consume(n), e.exit("listItemPrefixWhitespace"), f) : t(n)
						}

						function f(t) {
							return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(t)
						}
					},
					continuation: {
						tokenize: function(e, n, t) {
							const r = this;
							return r.containerState._closeFlow = void 0, e.check(ne.w, (function(t) {
								return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, (0, X.f)(e, n, "listItemIndent", r.containerState.size + 1)(t)
							}), (function(t) {
								if (r.containerState.furtherBlankLines || !(0, K.xz)(t)) return r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(t);
								return r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ke, n, o)(t)
							}));

							function o(o) {
								return r.containerState._closeFlow = !0, r.interrupt = void 0, (0, X.f)(e, e.attempt(ge, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
							}
						}
					},
					exit: function(e) {
						e.exit(this.containerState.type)
					}
				},
				ye = {
					tokenize: function(e, n, t) {
						const r = this;
						return (0, X.f)(e, (function(e) {
							const o = r.events[r.events.length - 1];
							return !(0, K.xz)(e) && o && "listItemPrefixWhitespace" === o[1].type ? n(e) : t(e)
						}), "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
					},
					partial: !0
				},
				ke = {
					tokenize: function(e, n, t) {
						const r = this;
						return (0, X.f)(e, (function(e) {
							const o = r.events[r.events.length - 1];
							return o && "listItemIndent" === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(e) : t(e)
						}), "listItemIndent", r.containerState.size + 1)
					},
					partial: !0
				};
			const xe = {
				name: "blockQuote",
				tokenize: function(e, n, t) {
					const r = this;
					return function(n) {
						if (62 === n) {
							const t = r.containerState;
							return t.open || (e.enter("blockQuote", {
								_container: !0
							}), t.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(n), e.exit("blockQuoteMarker"), o
						}
						return t(n)
					};

					function o(t) {
						return (0, K.xz)(t) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(t), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(t))
					}
				},
				continuation: {
					tokenize: function(e, n, t) {
						return (0, X.f)(e, e.attempt(xe, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
					}
				},
				exit: function(e) {
					e.exit("blockQuote")
				}
			};

			function ve(e, n, t, r, o, i, l, u, s) {
				const a = s || Number.POSITIVE_INFINITY;
				let c = 0;
				return function(n) {
					if (60 === n) return e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f;
					if (null === n || 41 === n || (0, K.Av)(n)) return t(n);
					return e.enter(r), e.enter(l), e.enter(u), e.enter("chunkString", {
						contentType: "string"
					}), h(n)
				};

				function f(t) {
					return 62 === t ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n) : (e.enter(u), e.enter("chunkString", {
						contentType: "string"
					}), p(t))
				}

				function p(n) {
					return 62 === n ? (e.exit("chunkString"), e.exit(u), f(n)) : null === n || 60 === n || (0, K.Ch)(n) ? t(n) : (e.consume(n), 92 === n ? d : p)
				}

				function d(n) {
					return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n)
				}

				function h(o) {
					return 40 === o ? ++c > a ? t(o) : (e.consume(o), h) : 41 === o ? c-- ? (e.consume(o), h) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o)) : null === o || (0, K.z3)(o) ? c ? t(o) : (e.exit("chunkString"), e.exit(u), e.exit(l), e.exit(r), n(o)) : (0, K.Av)(o) ? t(o) : (e.consume(o), 92 === o ? m : h)
				}

				function m(n) {
					return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n)
				}
			}

			function be(e, n, t, r, o, i) {
				const l = this;
				let u, s = 0;
				return function(n) {
					return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), a
				};

				function a(f) {
					return null === f || 91 === f || 93 === f && !u || 94 === f && !s && "_hiddenFootnoteSupport" in l.parser.constructs || s > 999 ? t(f) : 93 === f ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n) : (0, K.Ch)(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), a) : (e.enter("chunkString", {
						contentType: "string"
					}), c(f))
				}

				function c(n) {
					return null === n || 91 === n || 93 === n || (0, K.Ch)(n) || s++ > 999 ? (e.exit("chunkString"), a(n)) : (e.consume(n), u = u || !(0, K.xz)(n), 92 === n ? f : c)
				}

				function f(n) {
					return 91 === n || 92 === n || 93 === n ? (e.consume(n), s++, c) : c(n)
				}
			}

			function we(e, n, t, r, o, i) {
				let l;
				return function(n) {
					return e.enter(r), e.enter(o), e.consume(n), e.exit(o), l = 40 === n ? 41 : n, u
				};

				function u(t) {
					return t === l ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n) : (e.enter(i), s(t))
				}

				function s(n) {
					return n === l ? (e.exit(i), u(l)) : null === n ? t(n) : (0, K.Ch)(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, X.f)(e, s, "linePrefix")) : (e.enter("chunkString", {
						contentType: "string"
					}), a(n))
				}

				function a(n) {
					return n === l || null === n || (0, K.Ch)(n) ? (e.exit("chunkString"), s(n)) : (e.consume(n), 92 === n ? c : a)
				}

				function c(n) {
					return n === l || 92 === n ? (e.consume(n), a) : a(n)
				}
			}

			function Ce(e, n) {
				let t;
				return function r(o) {
					if ((0, K.Ch)(o)) return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t = !0, r;
					if ((0, K.xz)(o)) return (0, X.f)(e, r, t ? "linePrefix" : "lineSuffix")(o);
					return n(o)
				}
			}
			var Se = t(2493);
			const Ee = {
					name: "definition",
					tokenize: function(e, n, t) {
						const r = this;
						let o;
						return function(n) {
							return e.enter("definition"), be.call(r, e, i, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n)
						};

						function i(n) {
							return o = (0, Se.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), 58 === n ? (e.enter("definitionMarker"), e.consume(n), e.exit("definitionMarker"), Ce(e, ve(e, e.attempt(Ae, (0, X.f)(e, l, "whitespace"), (0, X.f)(e, l, "whitespace")), t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : t(n)
						}

						function l(i) {
							return null === i || (0, K.Ch)(i) ? (e.exit("definition"), r.parser.defined.includes(o) || r.parser.defined.push(o), n(i)) : t(i)
						}
					}
				},
				Ae = {
					tokenize: function(e, n, t) {
						return function(n) {
							return (0, K.z3)(n) ? Ce(e, r)(n) : t(n)
						};

						function r(n) {
							return 34 === n || 39 === n || 40 === n ? we(e, (0, X.f)(e, o, "whitespace"), t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n) : t(n)
						}

						function o(e) {
							return null === e || (0, K.Ch)(e) ? n(e) : t(e)
						}
					},
					partial: !0
				};
			const Fe = {
					name: "codeIndented",
					tokenize: function(e, n, t) {
						const r = this;
						return function(n) {
							return e.enter("codeIndented"), (0, X.f)(e, o, "linePrefix", 5)(n)
						};

						function o(e) {
							const n = r.events[r.events.length - 1];
							return n && "linePrefix" === n[1].type && n[2].sliceSerialize(n[1], !0).length >= 4 ? i(e) : t(e)
						}

						function i(n) {
							return null === n ? u(n) : (0, K.Ch)(n) ? e.attempt(Te, i, u)(n) : (e.enter("codeFlowValue"), l(n))
						}

						function l(n) {
							return null === n || (0, K.Ch)(n) ? (e.exit("codeFlowValue"), i(n)) : (e.consume(n), l)
						}

						function u(t) {
							return e.exit("codeIndented"), n(t)
						}
					}
				},
				Te = {
					tokenize: function(e, n, t) {
						const r = this;
						return o;

						function o(n) {
							return r.parser.lazy[r.now().line] ? t(n) : (0, K.Ch)(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o) : (0, X.f)(e, i, "linePrefix", 5)(n)
						}

						function i(e) {
							const i = r.events[r.events.length - 1];
							return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(e) : (0, K.Ch)(e) ? o(e) : t(e)
						}
					},
					partial: !0
				};
			const Ie = {
				name: "headingAtx",
				tokenize: function(e, n, t) {
					const r = this;
					let o = 0;
					return function(n) {
						return e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(n)
					};

					function i(u) {
						return 35 === u && o++ < 6 ? (e.consume(u), i) : null === u || (0, K.z3)(u) ? (e.exit("atxHeadingSequence"), r.interrupt ? n(u) : l(u)) : t(u)
					}

					function l(t) {
						return 35 === t ? (e.enter("atxHeadingSequence"), u(t)) : null === t || (0, K.Ch)(t) ? (e.exit("atxHeading"), n(t)) : (0, K.xz)(t) ? (0, X.f)(e, l, "whitespace")(t) : (e.enter("atxHeadingText"), s(t))
					}

					function u(n) {
						return 35 === n ? (e.consume(n), u) : (e.exit("atxHeadingSequence"), l(n))
					}

					function s(n) {
						return null === n || 35 === n || (0, K.z3)(n) ? (e.exit("atxHeadingText"), l(n)) : (e.consume(n), s)
					}
				},
				resolve: function(e, n) {
					let t, r, o = e.length - 2,
						i = 3;
					"whitespace" === e[i][1].type && (i += 2);
					o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
					"atxHeadingSequence" === e[o][1].type && (i === o - 1 || o - 4 > i && "whitespace" === e[o - 2][1].type) && (o -= i + 1 === o ? 2 : 4);
					o > i && (t = {
						type: "atxHeadingText",
						start: e[i][1].start,
						end: e[o][1].end
					}, r = {
						type: "chunkText",
						start: e[i][1].start,
						end: e[o][1].end,
						contentType: "text"
					}, (0, J.d)(e, i, o - i + 1, [
						["enter", t, n],
						["enter", r, n],
						["exit", r, n],
						["exit", t, n]
					]));
					return e
				}
			};
			const Pe = {
				name: "setextUnderline",
				tokenize: function(e, n, t) {
					const r = this;
					let o, i, l = r.events.length;
					for (; l--;)
						if ("lineEnding" !== r.events[l][1].type && "linePrefix" !== r.events[l][1].type && "content" !== r.events[l][1].type) {
							i = "paragraph" === r.events[l][1].type;
							break
						} return function(n) {
						if (!r.parser.lazy[r.now().line] && (r.interrupt || i)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), o = n, u(n);
						return t(n)
					};

					function u(n) {
						return n === o ? (e.consume(n), u) : (e.exit("setextHeadingLineSequence"), (0, X.f)(e, s, "lineSuffix")(n))
					}

					function s(r) {
						return null === r || (0, K.Ch)(r) ? (e.exit("setextHeadingLine"), n(r)) : t(r)
					}
				},
				resolveTo: function(e, n) {
					let t, r, o, i = e.length;
					for (; i--;)
						if ("enter" === e[i][0]) {
							if ("content" === e[i][1].type) {
								t = i;
								break
							}
							"paragraph" === e[i][1].type && (r = i)
						} else "content" === e[i][1].type && e.splice(i, 1), o || "definition" !== e[i][1].type || (o = i);
					const l = {
						type: "setextHeading",
						start: Object.assign({}, e[r][1].start),
						end: Object.assign({}, e[e.length - 1][1].end)
					};
					e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[t][1], n]), e[t][1].end = Object.assign({}, e[o][1].end)) : e[t][1] = l;
					return e.push(["exit", l, n]), e
				}
			};
			const Oe = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
				ze = ["pre", "script", "style", "textarea"],
				De = {
					name: "htmlFlow",
					tokenize: function(e, n, t) {
						const r = this;
						let o, i, l, u, s;
						return function(n) {
							return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), a
						};

						function a(u) {
							return 33 === u ? (e.consume(u), c) : 47 === u ? (e.consume(u), d) : 63 === u ? (e.consume(u), o = 3, r.interrupt ? n : L) : (0, K.jv)(u) ? (e.consume(u), l = String.fromCharCode(u), i = !0, h) : t(u)
						}

						function c(i) {
							return 45 === i ? (e.consume(i), o = 2, f) : 91 === i ? (e.consume(i), o = 5, l = "CDATA[", u = 0, p) : (0, K.jv)(i) ? (e.consume(i), o = 4, r.interrupt ? n : L) : t(i)
						}

						function f(o) {
							return 45 === o ? (e.consume(o), r.interrupt ? n : L) : t(o)
						}

						function p(o) {
							return o === l.charCodeAt(u++) ? (e.consume(o), u === l.length ? r.interrupt ? n : A : p) : t(o)
						}

						function d(n) {
							return (0, K.jv)(n) ? (e.consume(n), l = String.fromCharCode(n), h) : t(n)
						}

						function h(u) {
							return null === u || 47 === u || 62 === u || (0, K.z3)(u) ? 47 !== u && i && ze.includes(l.toLowerCase()) ? (o = 1, r.interrupt ? n(u) : A(u)) : Oe.includes(l.toLowerCase()) ? (o = 6, 47 === u ? (e.consume(u), m) : r.interrupt ? n(u) : A(u)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(u) : i ? y(u) : g(u)) : 45 === u || (0, K.H$)(u) ? (e.consume(u), l += String.fromCharCode(u), h) : t(u)
						}

						function m(o) {
							return 62 === o ? (e.consume(o), r.interrupt ? n : A) : t(o)
						}

						function g(n) {
							return (0, K.xz)(n) ? (e.consume(n), g) : S(n)
						}

						function y(n) {
							return 47 === n ? (e.consume(n), S) : 58 === n || 95 === n || (0, K.jv)(n) ? (e.consume(n), k) : (0, K.xz)(n) ? (e.consume(n), y) : S(n)
						}

						function k(n) {
							return 45 === n || 46 === n || 58 === n || 95 === n || (0, K.H$)(n) ? (e.consume(n), k) : x(n)
						}

						function x(n) {
							return 61 === n ? (e.consume(n), v) : (0, K.xz)(n) ? (e.consume(n), x) : y(n)
						}

						function v(n) {
							return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), s = n, b) : (0, K.xz)(n) ? (e.consume(n), v) : (s = null, w(n))
						}

						function b(n) {
							return null === n || (0, K.Ch)(n) ? t(n) : n === s ? (e.consume(n), C) : (e.consume(n), b)
						}

						function w(n) {
							return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, K.z3)(n) ? x(n) : (e.consume(n), w)
						}

						function C(e) {
							return 47 === e || 62 === e || (0, K.xz)(e) ? y(e) : t(e)
						}

						function S(n) {
							return 62 === n ? (e.consume(n), E) : t(n)
						}

						function E(n) {
							return (0, K.xz)(n) ? (e.consume(n), E) : null === n || (0, K.Ch)(n) ? A(n) : t(n)
						}

						function A(n) {
							return 45 === n && 2 === o ? (e.consume(n), P) : 60 === n && 1 === o ? (e.consume(n), O) : 62 === n && 4 === o ? (e.consume(n), R) : 63 === n && 3 === o ? (e.consume(n), L) : 93 === n && 5 === o ? (e.consume(n), D) : !(0, K.Ch)(n) || 6 !== o && 7 !== o ? null === n || (0, K.Ch)(n) ? F(n) : (e.consume(n), A) : e.check(Le, R, F)(n)
						}

						function F(n) {
							return e.exit("htmlFlowData"), T(n)
						}

						function T(n) {
							return null === n ? M(n) : (0, K.Ch)(n) ? e.attempt({
								tokenize: I,
								partial: !0
							}, T, M)(n) : (e.enter("htmlFlowData"), A(n))
						}

						function I(e, n, t) {
							return function(n) {
								return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
							};

							function o(e) {
								return r.parser.lazy[r.now().line] ? t(e) : n(e)
							}
						}

						function P(n) {
							return 45 === n ? (e.consume(n), L) : A(n)
						}

						function O(n) {
							return 47 === n ? (e.consume(n), l = "", z) : A(n)
						}

						function z(n) {
							return 62 === n && ze.includes(l.toLowerCase()) ? (e.consume(n), R) : (0, K.jv)(n) && l.length < 8 ? (e.consume(n), l += String.fromCharCode(n), z) : A(n)
						}

						function D(n) {
							return 93 === n ? (e.consume(n), L) : A(n)
						}

						function L(n) {
							return 62 === n ? (e.consume(n), R) : 45 === n && 2 === o ? (e.consume(n), L) : A(n)
						}

						function R(n) {
							return null === n || (0, K.Ch)(n) ? (e.exit("htmlFlowData"), M(n)) : (e.consume(n), R)
						}

						function M(t) {
							return e.exit("htmlFlow"), n(t)
						}
					},
					resolveTo: function(e) {
						let n = e.length;
						for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type););
						n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2));
						return e
					},
					concrete: !0
				},
				Le = {
					tokenize: function(e, n, t) {
						return function(r) {
							return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(ne.w, n, t)
						}
					},
					partial: !0
				};
			const Re = {
				name: "codeFenced",
				tokenize: function(e, n, t) {
					const r = this,
						o = {
							tokenize: function(e, n, t) {
								let r = 0;
								return (0, X.f)(e, o, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

								function o(n) {
									return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), i(n)
								}

								function i(n) {
									return n === s ? (e.consume(n), r++, i) : r < a ? t(n) : (e.exit("codeFencedFenceSequence"), (0, X.f)(e, l, "whitespace")(n))
								}

								function l(r) {
									return null === r || (0, K.Ch)(r) ? (e.exit("codeFencedFence"), n(r)) : t(r)
								}
							},
							partial: !0
						},
						i = {
							tokenize: function(e, n, t) {
								const r = this;
								return o;

								function o(n) {
									return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i
								}

								function i(e) {
									return r.parser.lazy[r.now().line] ? t(e) : n(e)
								}
							},
							partial: !0
						},
						l = this.events[this.events.length - 1],
						u = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0;
					let s, a = 0;
					return function(n) {
						return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s = n, c(n)
					};

					function c(n) {
						return n === s ? (e.consume(n), a++, c) : (e.exit("codeFencedFenceSequence"), a < 3 ? t(n) : (0, X.f)(e, f, "whitespace")(n))
					}

					function f(n) {
						return null === n || (0, K.Ch)(n) ? m(n) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
							contentType: "string"
						}), p(n))
					}

					function p(n) {
						return null === n || (0, K.z3)(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, X.f)(e, d, "whitespace")(n)) : 96 === n && n === s ? t(n) : (e.consume(n), p)
					}

					function d(n) {
						return null === n || (0, K.Ch)(n) ? m(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
							contentType: "string"
						}), h(n))
					}

					function h(n) {
						return null === n || (0, K.Ch)(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(n)) : 96 === n && n === s ? t(n) : (e.consume(n), h)
					}

					function m(t) {
						return e.exit("codeFencedFence"), r.interrupt ? n(t) : g(t)
					}

					function g(n) {
						return null === n ? k(n) : (0, K.Ch)(n) ? e.attempt(i, e.attempt(o, k, u ? (0, X.f)(e, g, "linePrefix", u + 1) : g), k)(n) : (e.enter("codeFlowValue"), y(n))
					}

					function y(n) {
						return null === n || (0, K.Ch)(n) ? (e.exit("codeFlowValue"), g(n)) : (e.consume(n), y)
					}

					function k(t) {
						return e.exit("codeFenced"), n(t)
					}
				},
				concrete: !0
			};
			var Me = t(9477);
			const _e = {
				name: "characterReference",
				tokenize: function(e, n, t) {
					const r = this;
					let o, i, l = 0;
					return function(n) {
						return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(n), e.exit("characterReferenceMarker"), u
					};

					function u(n) {
						return 35 === n ? (e.enter("characterReferenceMarkerNumeric"), e.consume(n), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, i = K.H$, a(n))
					}

					function s(n) {
						return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(n), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, i = K.AF, a) : (e.enter("characterReferenceValue"), o = 7, i = K.pY, a(n))
					}

					function a(u) {
						let s;
						return 59 === u && l ? (s = e.exit("characterReferenceValue"), i !== K.H$ || (0, Me.T)(r.sliceSerialize(s)) ? (e.enter("characterReferenceMarker"), e.consume(u), e.exit("characterReferenceMarker"), e.exit("characterReference"), n) : t(u)) : i(u) && l++ < o ? (e.consume(u), a) : t(u)
					}
				}
			};
			const je = {
				name: "characterEscape",
				tokenize: function(e, n, t) {
					return function(n) {
						return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(n), e.exit("escapeMarker"), r
					};

					function r(r) {
						return (0, K.sR)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(r)
					}
				}
			};
			const Be = {
				name: "lineEnding",
				tokenize: function(e, n) {
					return function(t) {
						return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, X.f)(e, n, "linePrefix")
					}
				}
			};
			const He = {
					name: "labelEnd",
					tokenize: function(e, n, t) {
						const r = this;
						let o, i, l = r.events.length;
						for (; l--;)
							if (("labelImage" === r.events[l][1].type || "labelLink" === r.events[l][1].type) && !r.events[l][1]._balanced) {
								o = r.events[l][1];
								break
							} return function(n) {
							if (!o) return t(n);
							return o._inactive ? s(n) : (i = r.parser.defined.includes((0, Se.d)(r.sliceSerialize({
								start: o.end,
								end: r.now()
							}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelEnd"), u)
						};

						function u(t) {
							return 40 === t ? e.attempt(Ue, n, i ? n : s)(t) : 91 === t ? e.attempt(Ne, n, i ? e.attempt(Ve, n, s) : s)(t) : i ? n(t) : s(t)
						}

						function s(e) {
							return o._balanced = !0, t(e)
						}
					},
					resolveTo: function(e, n) {
						let t, r, o, i, l = e.length,
							u = 0;
						for (; l--;)
							if (t = e[l][1], r) {
								if ("link" === t.type || "labelLink" === t.type && t._inactive) break;
								"enter" === e[l][0] && "labelLink" === t.type && (t._inactive = !0)
							} else if (o) {
							if ("enter" === e[l][0] && ("labelImage" === t.type || "labelLink" === t.type) && !t._balanced && (r = l, "labelLink" !== t.type)) {
								u = 2;
								break
							}
						} else "labelEnd" === t.type && (o = l);
						const s = {
								type: "labelLink" === e[r][1].type ? "link" : "image",
								start: Object.assign({}, e[r][1].start),
								end: Object.assign({}, e[e.length - 1][1].end)
							},
							a = {
								type: "label",
								start: Object.assign({}, e[r][1].start),
								end: Object.assign({}, e[o][1].end)
							},
							c = {
								type: "labelText",
								start: Object.assign({}, e[r + u + 2][1].end),
								end: Object.assign({}, e[o - 2][1].start)
							};
						return i = [
							["enter", s, n],
							["enter", a, n]
						], i = (0, J.V)(i, e.slice(r + 1, r + u + 3)), i = (0, J.V)(i, [
							["enter", c, n]
						]), i = (0, J.V)(i, (0, de.C)(n.parser.constructs.insideSpan.null, e.slice(r + u + 4, o - 3), n)), i = (0, J.V)(i, [
							["exit", c, n], e[o - 2], e[o - 1],
							["exit", a, n]
						]), i = (0, J.V)(i, e.slice(o + 1)), i = (0, J.V)(i, [
							["exit", s, n]
						]), (0, J.d)(e, r, e.length, i), e
					},
					resolveAll: function(e) {
						let n, t = -1;
						for (; ++t < e.length;) n = e[t][1], "labelImage" !== n.type && "labelLink" !== n.type && "labelEnd" !== n.type || (e.splice(t + 1, "labelImage" === n.type ? 4 : 2), n.type = "data", t++);
						return e
					}
				},
				Ue = {
					tokenize: function(e, n, t) {
						return function(n) {
							return e.enter("resource"), e.enter("resourceMarker"), e.consume(n), e.exit("resourceMarker"), Ce(e, r)
						};

						function r(n) {
							return 41 === n ? l(n) : ve(e, o, t, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(n)
						}

						function o(n) {
							return (0, K.z3)(n) ? Ce(e, i)(n) : l(n)
						}

						function i(n) {
							return 34 === n || 39 === n || 40 === n ? we(e, Ce(e, l), t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : l(n)
						}

						function l(r) {
							return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), n) : t(r)
						}
					}
				},
				Ne = {
					tokenize: function(e, n, t) {
						const r = this;
						return function(n) {
							return be.call(r, e, o, t, "reference", "referenceMarker", "referenceString")(n)
						};

						function o(e) {
							return r.parser.defined.includes((0, Se.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(e) : t(e)
						}
					}
				},
				Ve = {
					tokenize: function(e, n, t) {
						return function(n) {
							return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), r
						};

						function r(r) {
							return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), n) : t(r)
						}
					}
				};
			const $e = {
				name: "labelStartImage",
				tokenize: function(e, n, t) {
					const r = this;
					return function(n) {
						return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(n), e.exit("labelImageMarker"), o
					};

					function o(n) {
						return 91 === n ? (e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelImage"), i) : t(n)
					}

					function i(e) {
						return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
					}
				},
				resolveAll: He.resolveAll
			};
			var qe = t(3886);
			const We = {
				name: "attention",
				tokenize: function(e, n) {
					const t = this.parser.constructs.attentionMarkers.null,
						r = this.previous,
						o = (0, qe.r)(r);
					let i;
					return function(n) {
						return e.enter("attentionSequence"), i = n, l(n)
					};

					function l(u) {
						if (u === i) return e.consume(u), l;
						const s = e.exit("attentionSequence"),
							a = (0, qe.r)(u),
							c = !a || 2 === a && o || t.includes(u),
							f = !o || 2 === o && a || t.includes(r);
						return s._open = Boolean(42 === i ? c : c && (o || !f)), s._close = Boolean(42 === i ? f : f && (a || !c)), n(u)
					}
				},
				resolveAll: function(e, n) {
					let t, r, o, i, l, u, s, a, c = -1;
					for (; ++c < e.length;)
						if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close)
							for (t = c; t--;)
								if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[c][1]).charCodeAt(0)) {
									if ((e[t][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
									u = e[t][1].end.offset - e[t][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
									const f = Object.assign({}, e[t][1].end),
										p = Object.assign({}, e[c][1].start);
									Ye(f, -u), Ye(p, u), i = {
										type: u > 1 ? "strongSequence" : "emphasisSequence",
										start: f,
										end: Object.assign({}, e[t][1].end)
									}, l = {
										type: u > 1 ? "strongSequence" : "emphasisSequence",
										start: Object.assign({}, e[c][1].start),
										end: p
									}, o = {
										type: u > 1 ? "strongText" : "emphasisText",
										start: Object.assign({}, e[t][1].end),
										end: Object.assign({}, e[c][1].start)
									}, r = {
										type: u > 1 ? "strong" : "emphasis",
										start: Object.assign({}, i.start),
										end: Object.assign({}, l.end)
									}, e[t][1].end = Object.assign({}, i.start), e[c][1].start = Object.assign({}, l.end), s = [], e[t][1].end.offset - e[t][1].start.offset && (s = (0, J.V)(s, [
										["enter", e[t][1], n],
										["exit", e[t][1], n]
									])), s = (0, J.V)(s, [
										["enter", r, n],
										["enter", i, n],
										["exit", i, n],
										["enter", o, n]
									]), s = (0, J.V)(s, (0, de.C)(n.parser.constructs.insideSpan.null, e.slice(t + 1, c), n)), s = (0, J.V)(s, [
										["exit", o, n],
										["enter", l, n],
										["exit", l, n],
										["exit", r, n]
									]), e[c][1].end.offset - e[c][1].start.offset ? (a = 2, s = (0, J.V)(s, [
										["enter", e[c][1], n],
										["exit", e[c][1], n]
									])) : a = 0, (0, J.d)(e, t - 1, c - t + 3, s), c = t + s.length - a - 2;
									break
								} c = -1;
					for (; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
					return e
				}
			};

			function Ye(e, n) {
				e.column += n, e.offset += n, e._bufferIndex += n
			}
			const Qe = {
				name: "autolink",
				tokenize: function(e, n, t) {
					let r = 1;
					return function(n) {
						return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
					};

					function o(n) {
						return (0, K.jv)(n) ? (e.consume(n), i) : (0, K.n9)(n) ? s(n) : t(n)
					}

					function i(e) {
						return 43 === e || 45 === e || 46 === e || (0, K.H$)(e) ? l(e) : s(e)
					}

					function l(n) {
						return 58 === n ? (e.consume(n), u) : (43 === n || 45 === n || 46 === n || (0, K.H$)(n)) && r++ < 32 ? (e.consume(n), l) : s(n)
					}

					function u(n) {
						return 62 === n ? (e.exit("autolinkProtocol"), p(n)) : null === n || 32 === n || 60 === n || (0, K.Av)(n) ? t(n) : (e.consume(n), u)
					}

					function s(n) {
						return 64 === n ? (e.consume(n), r = 0, a) : (0, K.n9)(n) ? (e.consume(n), s) : t(n)
					}

					function a(e) {
						return (0, K.H$)(e) ? c(e) : t(e)
					}

					function c(n) {
						return 46 === n ? (e.consume(n), r = 0, a) : 62 === n ? (e.exit("autolinkProtocol").type = "autolinkEmail", p(n)) : f(n)
					}

					function f(n) {
						return (45 === n || (0, K.H$)(n)) && r++ < 63 ? (e.consume(n), 45 === n ? f : c) : t(n)
					}

					function p(t) {
						return e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.exit("autolink"), n
					}
				}
			};
			const Xe = {
				name: "htmlText",
				tokenize: function(e, n, t) {
					const r = this;
					let o, i, l, u;
					return function(n) {
						return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), s
					};

					function s(n) {
						return 33 === n ? (e.consume(n), a) : 47 === n ? (e.consume(n), w) : 63 === n ? (e.consume(n), v) : (0, K.jv)(n) ? (e.consume(n), E) : t(n)
					}

					function a(n) {
						return 45 === n ? (e.consume(n), c) : 91 === n ? (e.consume(n), i = "CDATA[", l = 0, m) : (0, K.jv)(n) ? (e.consume(n), x) : t(n)
					}

					function c(n) {
						return 45 === n ? (e.consume(n), f) : t(n)
					}

					function f(n) {
						return null === n || 62 === n ? t(n) : 45 === n ? (e.consume(n), p) : d(n)
					}

					function p(e) {
						return null === e || 62 === e ? t(e) : d(e)
					}

					function d(n) {
						return null === n ? t(n) : 45 === n ? (e.consume(n), h) : (0, K.Ch)(n) ? (u = d, D(n)) : (e.consume(n), d)
					}

					function h(n) {
						return 45 === n ? (e.consume(n), R) : d(n)
					}

					function m(n) {
						return n === i.charCodeAt(l++) ? (e.consume(n), l === i.length ? g : m) : t(n)
					}

					function g(n) {
						return null === n ? t(n) : 93 === n ? (e.consume(n), y) : (0, K.Ch)(n) ? (u = g, D(n)) : (e.consume(n), g)
					}

					function y(n) {
						return 93 === n ? (e.consume(n), k) : g(n)
					}

					function k(n) {
						return 62 === n ? R(n) : 93 === n ? (e.consume(n), k) : g(n)
					}

					function x(n) {
						return null === n || 62 === n ? R(n) : (0, K.Ch)(n) ? (u = x, D(n)) : (e.consume(n), x)
					}

					function v(n) {
						return null === n ? t(n) : 63 === n ? (e.consume(n), b) : (0, K.Ch)(n) ? (u = v, D(n)) : (e.consume(n), v)
					}

					function b(e) {
						return 62 === e ? R(e) : v(e)
					}

					function w(n) {
						return (0, K.jv)(n) ? (e.consume(n), C) : t(n)
					}

					function C(n) {
						return 45 === n || (0, K.H$)(n) ? (e.consume(n), C) : S(n)
					}

					function S(n) {
						return (0, K.Ch)(n) ? (u = S, D(n)) : (0, K.xz)(n) ? (e.consume(n), S) : R(n)
					}

					function E(n) {
						return 45 === n || (0, K.H$)(n) ? (e.consume(n), E) : 47 === n || 62 === n || (0, K.z3)(n) ? A(n) : t(n)
					}

					function A(n) {
						return 47 === n ? (e.consume(n), R) : 58 === n || 95 === n || (0, K.jv)(n) ? (e.consume(n), F) : (0, K.Ch)(n) ? (u = A, D(n)) : (0, K.xz)(n) ? (e.consume(n), A) : R(n)
					}

					function F(n) {
						return 45 === n || 46 === n || 58 === n || 95 === n || (0, K.H$)(n) ? (e.consume(n), F) : T(n)
					}

					function T(n) {
						return 61 === n ? (e.consume(n), I) : (0, K.Ch)(n) ? (u = T, D(n)) : (0, K.xz)(n) ? (e.consume(n), T) : A(n)
					}

					function I(n) {
						return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), o = n, P) : (0, K.Ch)(n) ? (u = I, D(n)) : (0, K.xz)(n) ? (e.consume(n), I) : (e.consume(n), o = void 0, z)
					}

					function P(n) {
						return n === o ? (e.consume(n), O) : null === n ? t(n) : (0, K.Ch)(n) ? (u = P, D(n)) : (e.consume(n), P)
					}

					function O(e) {
						return 62 === e || 47 === e || (0, K.z3)(e) ? A(e) : t(e)
					}

					function z(n) {
						return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 62 === n || (0, K.z3)(n) ? A(n) : (e.consume(n), z)
					}

					function D(n) {
						return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, X.f)(e, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
					}

					function L(n) {
						return e.enter("htmlTextData"), u(n)
					}

					function R(r) {
						return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(r)
					}
				}
			};
			const Ke = {
				name: "labelStartLink",
				tokenize: function(e, n, t) {
					const r = this;
					return function(n) {
						return e.enter("labelLink"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelLink"), o
					};

					function o(e) {
						return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e)
					}
				},
				resolveAll: He.resolveAll
			};
			const Ze = {
				name: "hardBreakEscape",
				tokenize: function(e, n, t) {
					return function(n) {
						return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(n), r
					};

					function r(r) {
						return (0, K.Ch)(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r)) : t(r)
					}
				}
			};
			const Je = {
				name: "codeText",
				tokenize: function(e, n, t) {
					let r, o, i = 0;
					return function(n) {
						return e.enter("codeText"), e.enter("codeTextSequence"), l(n)
					};

					function l(n) {
						return 96 === n ? (e.consume(n), i++, l) : (e.exit("codeTextSequence"), u(n))
					}

					function u(n) {
						return null === n ? t(n) : 96 === n ? (o = e.enter("codeTextSequence"), r = 0, a(n)) : 32 === n ? (e.enter("space"), e.consume(n), e.exit("space"), u) : (0, K.Ch)(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(n))
					}

					function s(n) {
						return null === n || 32 === n || 96 === n || (0, K.Ch)(n) ? (e.exit("codeTextData"), u(n)) : (e.consume(n), s)
					}

					function a(t) {
						return 96 === t ? (e.consume(t), r++, a) : r === i ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t)) : (o.type = "codeTextData", s(t))
					}
				},
				resolve: function(e) {
					let n, t, r = e.length - 4,
						o = 3;
					if (("lineEnding" === e[o][1].type || "space" === e[o][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
						for (n = o; ++n < r;)
							if ("codeTextData" === e[n][1].type) {
								e[o][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", o += 2, r -= 2;
								break
							} n = o - 1, r++;
					for (; ++n <= r;) void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : n !== r && "lineEnding" !== e[n][1].type || (e[t][1].type = "codeTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n - t - 2), r -= n - t - 2, n = t + 2), t = void 0);
					return e
				},
				previous: function(e) {
					return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
				}
			};
			const Ge = {
					42: ge,
					43: ge,
					45: ge,
					48: ge,
					49: ge,
					50: ge,
					51: ge,
					52: ge,
					53: ge,
					54: ge,
					55: ge,
					56: ge,
					57: ge,
					62: xe
				},
				en = {
					91: Ee
				},
				nn = {
					[-2]: Fe,
					[-1]: Fe,
					32: Fe
				},
				tn = {
					35: Ie,
					42: me,
					45: [Pe, me],
					60: De,
					61: Pe,
					95: me,
					96: Re,
					126: Re
				},
				rn = {
					38: _e,
					92: je
				},
				on = {
					[-5]: Be,
					[-4]: Be,
					[-3]: Be,
					33: $e,
					38: _e,
					42: We,
					60: [Qe, Xe],
					91: Ke,
					92: [Ze, je],
					93: He,
					95: We,
					96: Je
				},
				ln = {
					null: [We, ue]
				},
				un = {
					null: [42, 95]
				},
				sn = {
					null: []
				};
			const an = /[\0\t\n\r]/g;
			var cn = t(8031),
				fn = t(2116);
			const pn = {}.hasOwnProperty,
				dn = function(e, n, t) {
					return "string" !== typeof n && (t = n, n = void 0),
						function(e) {
							const n = {
								transforms: [],
								canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
								enter: {
									autolink: s(oe),
									autolinkProtocol: T,
									autolinkEmail: T,
									atxHeading: s(ee),
									blockQuote: s(X),
									characterEscape: T,
									characterReference: T,
									codeFenced: s(K),
									codeFencedFenceInfo: a,
									codeFencedFenceMeta: a,
									codeIndented: s(K, a),
									codeText: s(Z, a),
									codeTextData: T,
									data: T,
									codeFlowValue: T,
									definition: s(J),
									definitionDestinationString: a,
									definitionLabelString: a,
									definitionTitleString: a,
									emphasis: s(G),
									hardBreakEscape: s(ne),
									hardBreakTrailing: s(ne),
									htmlFlow: s(te, a),
									htmlFlowData: T,
									htmlText: s(te, a),
									htmlTextData: T,
									image: s(re),
									label: a,
									link: s(oe),
									listItem: s(le),
									listItemValue: m,
									listOrdered: s(ie, h),
									listUnordered: s(ie),
									paragraph: s(ue),
									reference: N,
									referenceString: a,
									resourceDestinationString: a,
									resourceTitleString: a,
									setextHeading: s(ee),
									strong: s(se),
									thematicBreak: s(ce)
								},
								exit: {
									atxHeading: f(),
									atxHeadingSequence: S,
									autolink: f(),
									autolinkEmail: Q,
									autolinkProtocol: Y,
									blockQuote: f(),
									characterEscapeValue: I,
									characterReferenceMarkerHexadecimal: $,
									characterReferenceMarkerNumeric: $,
									characterReferenceValue: q,
									codeFenced: f(x),
									codeFencedFence: k,
									codeFencedFenceInfo: g,
									codeFencedFenceMeta: y,
									codeFlowValue: I,
									codeIndented: f(v),
									codeText: f(L),
									codeTextData: I,
									data: I,
									definition: f(),
									definitionDestinationString: C,
									definitionLabelString: b,
									definitionTitleString: w,
									emphasis: f(),
									hardBreakEscape: f(O),
									hardBreakTrailing: f(O),
									htmlFlow: f(z),
									htmlFlowData: I,
									htmlText: f(D),
									htmlTextData: I,
									image: f(M),
									label: j,
									labelText: _,
									lineEnding: P,
									link: f(R),
									listItem: f(),
									listOrdered: f(),
									listUnordered: f(),
									paragraph: f(),
									referenceString: V,
									resourceDestinationString: B,
									resourceTitleString: H,
									resource: U,
									setextHeading: f(F),
									setextHeadingLineSequence: A,
									setextHeadingText: E,
									strong: f(),
									thematicBreak: f()
								}
							};
							mn(n, (e || {}).mdastExtensions || []);
							const t = {};
							return r;

							function r(e) {
								let t = {
									type: "root",
									children: []
								};
								const r = {
										stack: [t],
										tokenStack: [],
										config: n,
										enter: c,
										exit: p,
										buffer: a,
										resume: d,
										setData: i,
										getData: l
									},
									u = [];
								let s = -1;
								for (; ++s < e.length;)
									if ("listOrdered" === e[s][1].type || "listUnordered" === e[s][1].type)
										if ("enter" === e[s][0]) u.push(s);
										else {
											s = o(e, u.pop(), s)
										} for (s = -1; ++s < e.length;) {
									const t = n[e[s][0]];
									pn.call(t, e[s][1].type) && t[e[s][1].type].call(Object.assign({
										sliceSerialize: e[s][2].sliceSerialize
									}, r), e[s][1])
								}
								if (r.tokenStack.length > 0) {
									const e = r.tokenStack[r.tokenStack.length - 1];
									(e[1] || yn).call(r, void 0, e[0])
								}
								for (t.position = {
										start: hn(e.length > 0 ? e[0][1].start : {
											line: 1,
											column: 1,
											offset: 0
										}),
										end: hn(e.length > 0 ? e[e.length - 2][1].end : {
											line: 1,
											column: 1,
											offset: 0
										})
									}, s = -1; ++s < n.transforms.length;) t = n.transforms[s](t) || t;
								return t
							}

							function o(e, n, t) {
								let r, o, i, l, u = n - 1,
									s = -1,
									a = !1;
								for (; ++u <= t;) {
									const n = e[u];
									if ("listUnordered" === n[1].type || "listOrdered" === n[1].type || "blockQuote" === n[1].type ? ("enter" === n[0] ? s++ : s--, l = void 0) : "lineEndingBlank" === n[1].type ? "enter" === n[0] && (!r || l || s || i || (i = u), l = void 0) : "linePrefix" === n[1].type || "listItemValue" === n[1].type || "listItemMarker" === n[1].type || "listItemPrefix" === n[1].type || "listItemPrefixWhitespace" === n[1].type || (l = void 0), !s && "enter" === n[0] && "listItemPrefix" === n[1].type || -1 === s && "exit" === n[0] && ("listUnordered" === n[1].type || "listOrdered" === n[1].type)) {
										if (r) {
											let l = u;
											for (o = void 0; l--;) {
												const n = e[l];
												if ("lineEnding" === n[1].type || "lineEndingBlank" === n[1].type) {
													if ("exit" === n[0]) continue;
													o && (e[o][1].type = "lineEndingBlank", a = !0), n[1].type = "lineEnding", o = l
												} else if ("linePrefix" !== n[1].type && "blockQuotePrefix" !== n[1].type && "blockQuotePrefixWhitespace" !== n[1].type && "blockQuoteMarker" !== n[1].type && "listItemIndent" !== n[1].type) break
											}
											i && (!o || i < o) && (r._spread = !0), r.end = Object.assign({}, o ? e[o][1].start : n[1].end), e.splice(o || u, 0, ["exit", r, n[2]]), u++, t++
										}
										"listItemPrefix" === n[1].type && (r = {
											type: "listItem",
											_spread: !1,
											start: Object.assign({}, n[1].start)
										}, e.splice(u, 0, ["enter", r, n[2]]), u++, t++, i = void 0, l = !0)
									}
								}
								return e[n][1]._spread = a, t
							}

							function i(e, n) {
								t[e] = n
							}

							function l(e) {
								return t[e]
							}

							function s(e, n) {
								return t;

								function t(t) {
									c.call(this, e(t), t), n && n.call(this, t)
								}
							}

							function a() {
								this.stack.push({
									type: "fragment",
									children: []
								})
							}

							function c(e, n, t) {
								return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([n, t]), e.position = {
									start: hn(n.start)
								}, e
							}

							function f(e) {
								return n;

								function n(n) {
									e && e.call(this, n), p.call(this, n)
								}
							}

							function p(e, n) {
								const t = this.stack.pop(),
									r = this.tokenStack.pop();
								if (!r) throw new Error("Cannot close `" + e.type + "` (" + u({
									start: e.start,
									end: e.end
								}) + "): it\u2019s not open");
								if (r[0].type !== e.type)
									if (n) n.call(this, e, r[0]);
									else {
										(r[1] || yn).call(this, e, r[0])
									} return t.position.end = hn(e.end), t
							}

							function d() {
								return function(e, n) {
									const t = (n || {}).includeImageAlt;
									return W(e, "boolean" !== typeof t || t)
								}(this.stack.pop())
							}

							function h() {
								i("expectingFirstListItemValue", !0)
							}

							function m(e) {
								if (l("expectingFirstListItemValue")) {
									this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), i("expectingFirstListItemValue")
								}
							}

							function g() {
								const e = this.resume();
								this.stack[this.stack.length - 1].lang = e
							}

							function y() {
								const e = this.resume();
								this.stack[this.stack.length - 1].meta = e
							}

							function k() {
								l("flowCodeInside") || (this.buffer(), i("flowCodeInside", !0))
							}

							function x() {
								const e = this.resume();
								this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), i("flowCodeInside")
							}

							function v() {
								const e = this.resume();
								this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
							}

							function b(e) {
								const n = this.resume(),
									t = this.stack[this.stack.length - 1];
								t.label = n, t.identifier = (0, Se.d)(this.sliceSerialize(e)).toLowerCase()
							}

							function w() {
								const e = this.resume();
								this.stack[this.stack.length - 1].title = e
							}

							function C() {
								const e = this.resume();
								this.stack[this.stack.length - 1].url = e
							}

							function S(e) {
								const n = this.stack[this.stack.length - 1];
								if (!n.depth) {
									const t = this.sliceSerialize(e).length;
									n.depth = t
								}
							}

							function E() {
								i("setextHeadingSlurpLineEnding", !0)
							}

							function A(e) {
								this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
							}

							function F() {
								i("setextHeadingSlurpLineEnding")
							}

							function T(e) {
								const n = this.stack[this.stack.length - 1];
								let t = n.children[n.children.length - 1];
								t && "text" === t.type || (t = ae(), t.position = {
									start: hn(e.start)
								}, n.children.push(t)), this.stack.push(t)
							}

							function I(e) {
								const n = this.stack.pop();
								n.value += this.sliceSerialize(e), n.position.end = hn(e.end)
							}

							function P(e) {
								const t = this.stack[this.stack.length - 1];
								if (l("atHardBreak")) {
									return t.children[t.children.length - 1].position.end = hn(e.end), void i("atHardBreak")
								}!l("setextHeadingSlurpLineEnding") && n.canContainEols.includes(t.type) && (T.call(this, e), I.call(this, e))
							}

							function O() {
								i("atHardBreak", !0)
							}

							function z() {
								const e = this.resume();
								this.stack[this.stack.length - 1].value = e
							}

							function D() {
								const e = this.resume();
								this.stack[this.stack.length - 1].value = e
							}

							function L() {
								const e = this.resume();
								this.stack[this.stack.length - 1].value = e
							}

							function R() {
								const e = this.stack[this.stack.length - 1];
								if (l("inReference")) {
									const n = l("referenceType") || "shortcut";
									e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
								} else delete e.identifier, delete e.label;
								i("referenceType")
							}

							function M() {
								const e = this.stack[this.stack.length - 1];
								if (l("inReference")) {
									const n = l("referenceType") || "shortcut";
									e.type += "Reference", e.referenceType = n, delete e.url, delete e.title
								} else delete e.identifier, delete e.label;
								i("referenceType")
							}

							function _(e) {
								const n = this.sliceSerialize(e),
									t = this.stack[this.stack.length - 2];
								t.label = (0, fn.v)(n), t.identifier = (0, Se.d)(n).toLowerCase()
							}

							function j() {
								const e = this.stack[this.stack.length - 1],
									n = this.resume(),
									t = this.stack[this.stack.length - 1];
								if (i("inReference", !0), "link" === t.type) {
									const n = e.children;
									t.children = n
								} else t.alt = n
							}

							function B() {
								const e = this.resume();
								this.stack[this.stack.length - 1].url = e
							}

							function H() {
								const e = this.resume();
								this.stack[this.stack.length - 1].title = e
							}

							function U() {
								i("inReference")
							}

							function N() {
								i("referenceType", "collapsed")
							}

							function V(e) {
								const n = this.resume(),
									t = this.stack[this.stack.length - 1];
								t.label = n, t.identifier = (0, Se.d)(this.sliceSerialize(e)).toLowerCase(), i("referenceType", "full")
							}

							function $(e) {
								i("characterReferenceType", e.type)
							}

							function q(e) {
								const n = this.sliceSerialize(e),
									t = l("characterReferenceType");
								let r;
								if (t) r = (0, cn.o)(n, "characterReferenceMarkerNumeric" === t ? 10 : 16), i("characterReferenceType");
								else {
									r = (0, Me.T)(n)
								}
								const o = this.stack.pop();
								o.value += r, o.position.end = hn(e.end)
							}

							function Y(e) {
								I.call(this, e);
								this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
							}

							function Q(e) {
								I.call(this, e);
								this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
							}

							function X() {
								return {
									type: "blockquote",
									children: []
								}
							}

							function K() {
								return {
									type: "code",
									lang: null,
									meta: null,
									value: ""
								}
							}

							function Z() {
								return {
									type: "inlineCode",
									value: ""
								}
							}

							function J() {
								return {
									type: "definition",
									identifier: "",
									label: null,
									title: null,
									url: ""
								}
							}

							function G() {
								return {
									type: "emphasis",
									children: []
								}
							}

							function ee() {
								return {
									type: "heading",
									depth: void 0,
									children: []
								}
							}

							function ne() {
								return {
									type: "break"
								}
							}

							function te() {
								return {
									type: "html",
									value: ""
								}
							}

							function re() {
								return {
									type: "image",
									title: null,
									url: "",
									alt: null
								}
							}

							function oe() {
								return {
									type: "link",
									title: null,
									url: "",
									children: []
								}
							}

							function ie(e) {
								return {
									type: "list",
									ordered: "listOrdered" === e.type,
									start: null,
									spread: e._spread,
									children: []
								}
							}

							function le(e) {
								return {
									type: "listItem",
									spread: e._spread,
									checked: null,
									children: []
								}
							}

							function ue() {
								return {
									type: "paragraph",
									children: []
								}
							}

							function se() {
								return {
									type: "strong",
									children: []
								}
							}

							function ae() {
								return {
									type: "text",
									value: ""
								}
							}

							function ce() {
								return {
									type: "thematicBreak"
								}
							}
						}(t)(function(e) {
							for (; !te(e););
							return e
						}(function(e = {}) {
							const n = {
								defined: [],
								lazy: {},
								constructs: (0, Q.W)([r].concat(e.extensions || [])),
								content: t(Z),
								document: t(G),
								flow: t(le),
								string: t(se),
								text: t(ae)
							};
							return n;

							function t(e) {
								return function(t) {
									return he(n, e, t)
								}
							}
						}(t).document().write(function() {
							let e, n = 1,
								t = "",
								r = !0;
							return function(o, i, l) {
								const u = [];
								let s, a, c, f, p;
								for (o = t + o.toString(i), c = 0, t = "", r && (65279 === o.charCodeAt(0) && c++, r = void 0); c < o.length;) {
									if (an.lastIndex = c, s = an.exec(o), f = s && void 0 !== s.index ? s.index : o.length, p = o.charCodeAt(f), !s) {
										t = o.slice(c);
										break
									}
									if (10 === p && c === f && e) u.push(-3), e = void 0;
									else switch (e && (u.push(-5), e = void 0), c < f && (u.push(o.slice(c, f)), n += f - c), p) {
										case 0:
											u.push(65533), n++;
											break;
										case 9:
											for (a = 4 * Math.ceil(n / 4), u.push(-2); n++ < a;) u.push(-1);
											break;
										case 10:
											u.push(-4), n = 1;
											break;
										default:
											e = !0, n = 1
									}
									c = f + 1
								}
								return l && (e && u.push(-5), t && u.push(t), u.push(null)), u
							}
						}()(e, n, !0))))
				};

			function hn(e) {
				return {
					line: e.line,
					column: e.column,
					offset: e.offset
				}
			}

			function mn(e, n) {
				let t = -1;
				for (; ++t < n.length;) {
					const r = n[t];
					Array.isArray(r) ? mn(e, r) : gn(e, r)
				}
			}

			function gn(e, n) {
				let t;
				for (t in n)
					if (pn.call(n, t))
						if ("canContainEols" === t) {
							const r = n[t];
							r && e[t].push(...r)
						} else if ("transforms" === t) {
					const r = n[t];
					r && e[t].push(...r)
				} else if ("enter" === t || "exit" === t) {
					const r = n[t];
					r && Object.assign(e[t], r)
				}
			}

			function yn(e, n) {
				throw e ? new Error("Cannot close `" + e.type + "` (" + u({
					start: e.start,
					end: e.end
				}) + "): a different token (`" + n.type + "`, " + u({
					start: n.start,
					end: n.end
				}) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + u({
					start: n.start,
					end: n.end
				}) + ") is still open")
			}
			var kn = function(e) {
				Object.assign(this, {
					Parser: n => {
						const t = this.data("settings");
						return dn(n, Object.assign({}, t, e, {
							extensions: this.data("micromarkExtensions") || [],
							mdastExtensions: this.data("fromMarkdownExtensions") || []
						}))
					}
				})
			};
			const xn = function(e, n, t) {
				const r = {
					type: String(e)
				};
				return void 0 !== t && null !== t || "string" !== typeof n && !Array.isArray(n) ? Object.assign(r, n) : t = n, Array.isArray(t) ? r.children = t : void 0 !== t && null !== t && (r.value = String(t)), r
			};
			var vn = t(9311);
			const bn = function(e, n, t, r) {
					"function" === typeof n && "function" !== typeof t && (r = t, t = n, n = null), (0, vn.S4)(e, n, (function(e, n) {
						const r = n[n.length - 1];
						return t(e, r ? r.children.indexOf(e) : null, r)
					}), r)
				},
				wn = Sn("start"),
				Cn = Sn("end");

			function Sn(e) {
				return function(n) {
					const t = n && n.position && n.position[e] || {};
					return {
						line: t.line || null,
						column: t.column || null,
						offset: t.offset > -1 ? t.offset : null
					}
				}
			}
			const En = {}.hasOwnProperty;

			function An(e) {
				return String(e || "").toUpperCase()
			}
			const Fn = {}.hasOwnProperty;

			function Tn(e, n) {
				const t = n.data || {};
				return "value" in n && !(Fn.call(t, "hName") || Fn.call(t, "hProperties") || Fn.call(t, "hChildren")) ? e.augment(n, xn("text", n.value)) : e(n, "div", On(e, n))
			}

			function In(e, n, t) {
				const r = n && n.type;
				let o;
				if (!r) throw new Error("Expected node, got `" + n + "`");
				return o = Fn.call(e.handlers, r) ? e.handlers[r] : e.passThrough && e.passThrough.includes(r) ? Pn : e.unknownHandler, ("function" === typeof o ? o : Tn)(e, n, t)
			}

			function Pn(e, n) {
				return "children" in n ? {
					...n,
					children: On(e, n)
				} : n
			}

			function On(e, n) {
				const t = [];
				if ("children" in n) {
					const r = n.children;
					let o = -1;
					for (; ++o < r.length;) {
						const i = In(e, r[o], n);
						if (i) {
							if (o && "break" === r[o - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = i.value.replace(/^\s+/, "")), !Array.isArray(i) && "element" === i.type)) {
								const e = i.children[0];
								e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
							}
							Array.isArray(i) ? t.push(...i) : t.push(i)
						}
					}
				}
				return t
			}

			function zn(e, n) {
				return e(n, "hr")
			}

			function Dn(e, n) {
				const t = [];
				let r = -1;
				for (n && t.push(xn("text", "\n")); ++r < e.length;) r && t.push(xn("text", "\n")), t.push(e[r]);
				return n && e.length > 0 && t.push(xn("text", "\n")), t
			}

			function Ln(e, n) {
				const t = {},
					r = n.ordered ? "ol" : "ul",
					o = On(e, n);
				let i = -1;
				for ("number" === typeof n.start && 1 !== n.start && (t.start = n.start); ++i < o.length;) {
					const e = o[i];
					if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
						t.className = ["contains-task-list"];
						break
					}
				}
				return e(n, r, t, Dn(o, !0))
			}

			function Rn(e, n) {
				const t = e.footnoteOrder,
					r = String(n.identifier),
					o = t.indexOf(r),
					i = String(-1 === o ? t.push(r) : o + 1);
				return e(n, "a", {
					href: "#fn" + i,
					className: ["footnote-ref"],
					id: "fnref" + i,
					role: "doc-noteref"
				}, [e(n.position, "sup", [xn("text", i)])])
			}
			var Mn = t(4651);

			function _n(e, n) {
				const t = n.referenceType;
				let r = "]";
				if ("collapsed" === t ? r += "[]" : "full" === t && (r += "[" + (n.label || n.identifier) + "]"), "imageReference" === n.type) return xn("text", "![" + n.alt + r);
				const o = On(e, n),
					i = o[0];
				i && "text" === i.type ? i.value = "[" + i.value : o.unshift(xn("text", "["));
				const l = o[o.length - 1];
				return l && "text" === l.type ? l.value += r : o.push(xn("text", r)), o
			}

			function jn(e) {
				const n = e.spread;
				return void 0 === n || null === n ? e.children.length > 1 : n
			}
			const Bn = {
				blockquote: function(e, n) {
					return e(n, "blockquote", Dn(On(e, n), !0))
				},
				break: function(e, n) {
					return [e(n, "br"), xn("text", "\n")]
				},
				code: function(e, n) {
					const t = n.value ? n.value + "\n" : "",
						r = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
						o = {};
					r && (o.className = ["language-" + r]);
					const i = e(n, "code", o, [xn("text", t)]);
					return n.meta && (i.data = {
						meta: n.meta
					}), e(n.position, "pre", [i])
				},
				delete: function(e, n) {
					return e(n, "del", On(e, n))
				},
				emphasis: function(e, n) {
					return e(n, "em", On(e, n))
				},
				footnoteReference: Rn,
				footnote: function(e, n) {
					const t = e.footnoteById,
						r = e.footnoteOrder;
					let o = 1;
					for (; o in t;) o++;
					const i = String(o);
					return r.push(i), t[i] = {
						type: "footnoteDefinition",
						identifier: i,
						children: [{
							type: "paragraph",
							children: n.children
						}],
						position: n.position
					}, Rn(e, {
						type: "footnoteReference",
						identifier: i,
						position: n.position
					})
				},
				heading: function(e, n) {
					return e(n, "h" + n.depth, On(e, n))
				},
				html: function(e, n) {
					return e.dangerous ? e.augment(n, xn("raw", n.value)) : null
				},
				imageReference: function(e, n) {
					const t = e.definition(n.identifier);
					if (!t) return _n(e, n);
					const r = {
						src: Mn(t.url || ""),
						alt: n.alt
					};
					return null !== t.title && void 0 !== t.title && (r.title = t.title), e(n, "img", r)
				},
				image: function(e, n) {
					const t = {
						src: Mn(n.url),
						alt: n.alt
					};
					return null !== n.title && void 0 !== n.title && (t.title = n.title), e(n, "img", t)
				},
				inlineCode: function(e, n) {
					return e(n, "code", [xn("text", n.value.replace(/\r?\n|\r/g, " "))])
				},
				linkReference: function(e, n) {
					const t = e.definition(n.identifier);
					if (!t) return _n(e, n);
					const r = {
						href: Mn(t.url || "")
					};
					return null !== t.title && void 0 !== t.title && (r.title = t.title), e(n, "a", r, On(e, n))
				},
				link: function(e, n) {
					const t = {
						href: Mn(n.url)
					};
					return null !== n.title && void 0 !== n.title && (t.title = n.title), e(n, "a", t, On(e, n))
				},
				listItem: function(e, n, t) {
					const r = On(e, n),
						o = t ? function(e) {
							let n = e.spread;
							const t = e.children;
							let r = -1;
							for (; !n && ++r < t.length;) n = jn(t[r]);
							return Boolean(n)
						}(t) : jn(n),
						i = {},
						l = [];
					if ("boolean" === typeof n.checked) {
						let t;
						r[0] && "element" === r[0].type && "p" === r[0].tagName ? t = r[0] : (t = e(null, "p", []), r.unshift(t)), t.children.length > 0 && t.children.unshift(xn("text", " ")), t.children.unshift(e(null, "input", {
							type: "checkbox",
							checked: n.checked,
							disabled: !0
						})), i.className = ["task-list-item"]
					}
					let u = -1;
					for (; ++u < r.length;) {
						const e = r[u];
						(o || 0 !== u || "element" !== e.type || "p" !== e.tagName) && l.push(xn("text", "\n")), "element" !== e.type || "p" !== e.tagName || o ? l.push(e) : l.push(...e.children)
					}
					const s = r[r.length - 1];
					return !s || !o && "tagName" in s && "p" === s.tagName || l.push(xn("text", "\n")), e(n, "li", i, l)
				},
				list: Ln,
				paragraph: function(e, n) {
					return e(n, "p", On(e, n))
				},
				root: function(e, n) {
					return e.augment(n, xn("root", Dn(On(e, n))))
				},
				strong: function(e, n) {
					return e(n, "strong", On(e, n))
				},
				table: function(e, n) {
					const t = n.children;
					let r = -1;
					const o = n.align || [],
						i = [];
					for (; ++r < t.length;) {
						const l = t[r].children,
							u = 0 === r ? "th" : "td";
						let s = n.align ? o.length : l.length;
						const a = [];
						for (; s--;) {
							const n = l[s];
							a[s] = e(n, u, {
								align: o[s]
							}, n ? On(e, n) : [])
						}
						i[r] = e(t[r], "tr", Dn(a, !0))
					}
					return e(n, "table", Dn([e(i[0].position, "thead", Dn([i[0]], !0))].concat(i[1] ? e({
						start: wn(i[1]),
						end: Cn(i[i.length - 1])
					}, "tbody", Dn(i.slice(1), !0)) : []), !0))
				},
				text: function(e, n) {
					return e.augment(n, xn("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
				},
				thematicBreak: zn,
				toml: Hn,
				yaml: Hn,
				definition: Hn,
				footnoteDefinition: Hn
			};

			function Hn() {
				return null
			}
			const Un = {}.hasOwnProperty;

			function Nn(e, n) {
				const t = n || {},
					r = t.allowDangerousHtml || !1,
					o = {};
				return l.dangerous = r, l.definition = function(e) {
					const n = Object.create(null);
					if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
					return bn(e, "definition", (e => {
							const t = An(e.identifier);
							t && !En.call(n, t) && (n[t] = e)
						})),
						function(e) {
							const t = An(e);
							return t && En.call(n, t) ? n[t] : null
						}
				}(e), l.footnoteById = o, l.footnoteOrder = [], l.augment = i, l.handlers = {
					...Bn,
					...t.handlers
				}, l.unknownHandler = t.unknownHandler, l.passThrough = t.passThrough, bn(e, "footnoteDefinition", (e => {
					const n = String(e.identifier).toUpperCase();
					Un.call(o, n) || (o[n] = e)
				})), l;

				function i(e, n) {
					if (e && "data" in e && e.data) {
						const t = e.data;
						t.hName && ("element" !== n.type && (n = {
							type: "element",
							tagName: "",
							properties: {},
							children: []
						}), n.tagName = t.hName), "element" === n.type && t.hProperties && (n.properties = {
							...n.properties,
							...t.hProperties
						}), "children" in n && n.children && t.hChildren && (n.children = t.hChildren)
					}
					if (e) {
						const t = "type" in e ? e : {
							position: e
						};
						(function(e) {
							return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
						})(t) || (n.position = {
							start: wn(t),
							end: Cn(t)
						})
					}
					return n
				}

				function l(e, n, t, r) {
					return Array.isArray(t) && (r = t, t = {}), i(e, {
						type: "element",
						tagName: n,
						properties: t || {},
						children: r || []
					})
				}
			}

			function Vn(e, n) {
				const t = Nn(e, n),
					r = In(t, e, null),
					o = function(e) {
						const n = e.footnoteById,
							t = e.footnoteOrder;
						let r = -1;
						const o = [];
						for (; ++r < t.length;) {
							const e = n[t[r].toUpperCase()];
							if (!e) continue;
							const i = String(r + 1),
								l = [...e.children],
								u = {
									type: "link",
									url: "#fnref" + i,
									data: {
										hProperties: {
											className: ["footnote-back"],
											role: "doc-backlink"
										}
									},
									children: [{
										type: "text",
										value: "\u21a9"
									}]
								},
								s = l[l.length - 1];
							s && "paragraph" === s.type ? s.children.push(u) : l.push(u), o.push({
								type: "listItem",
								data: {
									hProperties: {
										id: "fn" + i,
										role: "doc-endnote"
									}
								},
								children: l,
								position: e.position
							})
						}
						return 0 === o.length ? null : e(null, "section", {
							className: ["footnotes"],
							role: "doc-endnotes"
						}, Dn([zn(e), Ln(e, {
							type: "list",
							ordered: !0,
							children: o
						})], !0))
					}(t);
				return o && r.children.push(xn("text", "\n"), o), Array.isArray(r) ? {
					type: "root",
					children: r
				} : r
			}
			var $n = function(e, n) {
				return e && "run" in e ? function(e, n) {
					return (t, r, o) => {
						e.run(Vn(t, n), r, (e => {
							o(e)
						}))
					}
				}(e, n) : function(e) {
					return n => Vn(n, e)
				}(e)
			};
			var qn = t(3615);
			class Wn {
				constructor(e, n, t) {
					this.property = e, this.normal = n, t && (this.space = t)
				}
			}

			function Yn(e, n) {
				const t = {},
					r = {};
				let o = -1;
				for (; ++o < e.length;) Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
				return new Wn(t, r, n)
			}

			function Qn(e) {
				return e.toLowerCase()
			}
			Wn.prototype.property = {}, Wn.prototype.normal = {}, Wn.prototype.space = null;
			class Xn {
				constructor(e, n) {
					this.property = e, this.attribute = n
				}
			}
			Xn.prototype.space = null, Xn.prototype.boolean = !1, Xn.prototype.booleanish = !1, Xn.prototype.overloadedBoolean = !1, Xn.prototype.number = !1, Xn.prototype.commaSeparated = !1, Xn.prototype.spaceSeparated = !1, Xn.prototype.commaOrSpaceSeparated = !1, Xn.prototype.mustUseProperty = !1, Xn.prototype.defined = !1;
			let Kn = 0;
			const Zn = ot(),
				Jn = ot(),
				Gn = ot(),
				et = ot(),
				nt = ot(),
				tt = ot(),
				rt = ot();

			function ot() {
				return 2 ** ++Kn
			}
			const it = Object.keys(o);
			class lt extends Xn {
				constructor(e, n, t, r) {
					let i = -1;
					if (super(e, n), ut(this, "space", r), "number" === typeof t)
						for (; ++i < it.length;) {
							const e = it[i];
							ut(this, it[i], (t & o[e]) === o[e])
						}
				}
			}

			function ut(e, n, t) {
				t && (e[n] = t)
			}
			lt.prototype.defined = !0;
			const st = {}.hasOwnProperty;

			function at(e) {
				const n = {},
					t = {};
				let r;
				for (r in e.properties)
					if (st.call(e.properties, r)) {
						const o = e.properties[r],
							i = new lt(r, e.transform(e.attributes || {}, r), o, e.space);
						e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), n[r] = i, t[Qn(r)] = r, t[Qn(i.attribute)] = r
					} return new Wn(n, t, e.space)
			}
			const ct = at({
					space: "xlink",
					transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
					properties: {
						xLinkActuate: null,
						xLinkArcRole: null,
						xLinkHref: null,
						xLinkRole: null,
						xLinkShow: null,
						xLinkTitle: null,
						xLinkType: null
					}
				}),
				ft = at({
					space: "xml",
					transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
					properties: {
						xmlLang: null,
						xmlBase: null,
						xmlSpace: null
					}
				});

			function pt(e, n) {
				return n in e ? e[n] : n
			}

			function dt(e, n) {
				return pt(e, n.toLowerCase())
			}
			const ht = at({
					space: "xmlns",
					attributes: {
						xmlnsxlink: "xmlns:xlink"
					},
					transform: dt,
					properties: {
						xmlns: null,
						xmlnsXLink: null
					}
				}),
				mt = at({
					transform: (e, n) => "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
					properties: {
						ariaActiveDescendant: null,
						ariaAtomic: Jn,
						ariaAutoComplete: null,
						ariaBusy: Jn,
						ariaChecked: Jn,
						ariaColCount: et,
						ariaColIndex: et,
						ariaColSpan: et,
						ariaControls: nt,
						ariaCurrent: null,
						ariaDescribedBy: nt,
						ariaDetails: null,
						ariaDisabled: Jn,
						ariaDropEffect: nt,
						ariaErrorMessage: null,
						ariaExpanded: Jn,
						ariaFlowTo: nt,
						ariaGrabbed: Jn,
						ariaHasPopup: null,
						ariaHidden: Jn,
						ariaInvalid: null,
						ariaKeyShortcuts: null,
						ariaLabel: null,
						ariaLabelledBy: nt,
						ariaLevel: et,
						ariaLive: null,
						ariaModal: Jn,
						ariaMultiLine: Jn,
						ariaMultiSelectable: Jn,
						ariaOrientation: null,
						ariaOwns: nt,
						ariaPlaceholder: null,
						ariaPosInSet: et,
						ariaPressed: Jn,
						ariaReadOnly: Jn,
						ariaRelevant: null,
						ariaRequired: Jn,
						ariaRoleDescription: nt,
						ariaRowCount: et,
						ariaRowIndex: et,
						ariaRowSpan: et,
						ariaSelected: Jn,
						ariaSetSize: et,
						ariaSort: null,
						ariaValueMax: et,
						ariaValueMin: et,
						ariaValueNow: et,
						ariaValueText: null,
						role: null
					}
				}),
				gt = at({
					space: "html",
					attributes: {
						acceptcharset: "accept-charset",
						classname: "class",
						htmlfor: "for",
						httpequiv: "http-equiv"
					},
					transform: dt,
					mustUseProperty: ["checked", "multiple", "muted", "selected"],
					properties: {
						abbr: null,
						accept: tt,
						acceptCharset: nt,
						accessKey: nt,
						action: null,
						allow: null,
						allowFullScreen: Zn,
						allowPaymentRequest: Zn,
						allowUserMedia: Zn,
						alt: null,
						as: null,
						async: Zn,
						autoCapitalize: null,
						autoComplete: nt,
						autoFocus: Zn,
						autoPlay: Zn,
						capture: Zn,
						charSet: null,
						checked: Zn,
						cite: null,
						className: nt,
						cols: et,
						colSpan: null,
						content: null,
						contentEditable: Jn,
						controls: Zn,
						controlsList: nt,
						coords: et | tt,
						crossOrigin: null,
						data: null,
						dateTime: null,
						decoding: null,
						default: Zn,
						defer: Zn,
						dir: null,
						dirName: null,
						disabled: Zn,
						download: Gn,
						draggable: Jn,
						encType: null,
						enterKeyHint: null,
						form: null,
						formAction: null,
						formEncType: null,
						formMethod: null,
						formNoValidate: Zn,
						formTarget: null,
						headers: nt,
						height: et,
						hidden: Zn,
						high: et,
						href: null,
						hrefLang: null,
						htmlFor: nt,
						httpEquiv: nt,
						id: null,
						imageSizes: null,
						imageSrcSet: null,
						inputMode: null,
						integrity: null,
						is: null,
						isMap: Zn,
						itemId: null,
						itemProp: nt,
						itemRef: nt,
						itemScope: Zn,
						itemType: nt,
						kind: null,
						label: null,
						lang: null,
						language: null,
						list: null,
						loading: null,
						loop: Zn,
						low: et,
						manifest: null,
						max: null,
						maxLength: et,
						media: null,
						method: null,
						min: null,
						minLength: et,
						multiple: Zn,
						muted: Zn,
						name: null,
						nonce: null,
						noModule: Zn,
						noValidate: Zn,
						onAbort: null,
						onAfterPrint: null,
						onAuxClick: null,
						onBeforeMatch: null,
						onBeforePrint: null,
						onBeforeUnload: null,
						onBlur: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onContextLost: null,
						onContextMenu: null,
						onContextRestored: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFormData: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLanguageChange: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadEnd: null,
						onLoadStart: null,
						onMessage: null,
						onMessageError: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRejectionHandled: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onScrollEnd: null,
						onSecurityPolicyViolation: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onSlotChange: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnhandledRejection: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onWheel: null,
						open: Zn,
						optimum: et,
						pattern: null,
						ping: nt,
						placeholder: null,
						playsInline: Zn,
						poster: null,
						preload: null,
						readOnly: Zn,
						referrerPolicy: null,
						rel: nt,
						required: Zn,
						reversed: Zn,
						rows: et,
						rowSpan: et,
						sandbox: nt,
						scope: null,
						scoped: Zn,
						seamless: Zn,
						selected: Zn,
						shape: null,
						size: et,
						sizes: null,
						slot: null,
						span: et,
						spellCheck: Jn,
						src: null,
						srcDoc: null,
						srcLang: null,
						srcSet: null,
						start: et,
						step: null,
						style: null,
						tabIndex: et,
						target: null,
						title: null,
						translate: null,
						type: null,
						typeMustMatch: Zn,
						useMap: null,
						value: Jn,
						width: et,
						wrap: null,
						align: null,
						aLink: null,
						archive: nt,
						axis: null,
						background: null,
						bgColor: null,
						border: et,
						borderColor: null,
						bottomMargin: et,
						cellPadding: null,
						cellSpacing: null,
						char: null,
						charOff: null,
						classId: null,
						clear: null,
						code: null,
						codeBase: null,
						codeType: null,
						color: null,
						compact: Zn,
						declare: Zn,
						event: null,
						face: null,
						frame: null,
						frameBorder: null,
						hSpace: et,
						leftMargin: et,
						link: null,
						longDesc: null,
						lowSrc: null,
						marginHeight: et,
						marginWidth: et,
						noResize: Zn,
						noHref: Zn,
						noShade: Zn,
						noWrap: Zn,
						object: null,
						profile: null,
						prompt: null,
						rev: null,
						rightMargin: et,
						rules: null,
						scheme: null,
						scrolling: Jn,
						standby: null,
						summary: null,
						text: null,
						topMargin: et,
						valueType: null,
						version: null,
						vAlign: null,
						vLink: null,
						vSpace: et,
						allowTransparency: null,
						autoCorrect: null,
						autoSave: null,
						disablePictureInPicture: Zn,
						disableRemotePlayback: Zn,
						prefix: null,
						property: null,
						results: et,
						security: null,
						unselectable: null
					}
				}),
				yt = at({
					space: "svg",
					attributes: {
						accentHeight: "accent-height",
						alignmentBaseline: "alignment-baseline",
						arabicForm: "arabic-form",
						baselineShift: "baseline-shift",
						capHeight: "cap-height",
						className: "class",
						clipPath: "clip-path",
						clipRule: "clip-rule",
						colorInterpolation: "color-interpolation",
						colorInterpolationFilters: "color-interpolation-filters",
						colorProfile: "color-profile",
						colorRendering: "color-rendering",
						crossOrigin: "crossorigin",
						dataType: "datatype",
						dominantBaseline: "dominant-baseline",
						enableBackground: "enable-background",
						fillOpacity: "fill-opacity",
						fillRule: "fill-rule",
						floodColor: "flood-color",
						floodOpacity: "flood-opacity",
						fontFamily: "font-family",
						fontSize: "font-size",
						fontSizeAdjust: "font-size-adjust",
						fontStretch: "font-stretch",
						fontStyle: "font-style",
						fontVariant: "font-variant",
						fontWeight: "font-weight",
						glyphName: "glyph-name",
						glyphOrientationHorizontal: "glyph-orientation-horizontal",
						glyphOrientationVertical: "glyph-orientation-vertical",
						hrefLang: "hreflang",
						horizAdvX: "horiz-adv-x",
						horizOriginX: "horiz-origin-x",
						horizOriginY: "horiz-origin-y",
						imageRendering: "image-rendering",
						letterSpacing: "letter-spacing",
						lightingColor: "lighting-color",
						markerEnd: "marker-end",
						markerMid: "marker-mid",
						markerStart: "marker-start",
						navDown: "nav-down",
						navDownLeft: "nav-down-left",
						navDownRight: "nav-down-right",
						navLeft: "nav-left",
						navNext: "nav-next",
						navPrev: "nav-prev",
						navRight: "nav-right",
						navUp: "nav-up",
						navUpLeft: "nav-up-left",
						navUpRight: "nav-up-right",
						onAbort: "onabort",
						onActivate: "onactivate",
						onAfterPrint: "onafterprint",
						onBeforePrint: "onbeforeprint",
						onBegin: "onbegin",
						onCancel: "oncancel",
						onCanPlay: "oncanplay",
						onCanPlayThrough: "oncanplaythrough",
						onChange: "onchange",
						onClick: "onclick",
						onClose: "onclose",
						onCopy: "oncopy",
						onCueChange: "oncuechange",
						onCut: "oncut",
						onDblClick: "ondblclick",
						onDrag: "ondrag",
						onDragEnd: "ondragend",
						onDragEnter: "ondragenter",
						onDragExit: "ondragexit",
						onDragLeave: "ondragleave",
						onDragOver: "ondragover",
						onDragStart: "ondragstart",
						onDrop: "ondrop",
						onDurationChange: "ondurationchange",
						onEmptied: "onemptied",
						onEnd: "onend",
						onEnded: "onended",
						onError: "onerror",
						onFocus: "onfocus",
						onFocusIn: "onfocusin",
						onFocusOut: "onfocusout",
						onHashChange: "onhashchange",
						onInput: "oninput",
						onInvalid: "oninvalid",
						onKeyDown: "onkeydown",
						onKeyPress: "onkeypress",
						onKeyUp: "onkeyup",
						onLoad: "onload",
						onLoadedData: "onloadeddata",
						onLoadedMetadata: "onloadedmetadata",
						onLoadStart: "onloadstart",
						onMessage: "onmessage",
						onMouseDown: "onmousedown",
						onMouseEnter: "onmouseenter",
						onMouseLeave: "onmouseleave",
						onMouseMove: "onmousemove",
						onMouseOut: "onmouseout",
						onMouseOver: "onmouseover",
						onMouseUp: "onmouseup",
						onMouseWheel: "onmousewheel",
						onOffline: "onoffline",
						onOnline: "ononline",
						onPageHide: "onpagehide",
						onPageShow: "onpageshow",
						onPaste: "onpaste",
						onPause: "onpause",
						onPlay: "onplay",
						onPlaying: "onplaying",
						onPopState: "onpopstate",
						onProgress: "onprogress",
						onRateChange: "onratechange",
						onRepeat: "onrepeat",
						onReset: "onreset",
						onResize: "onresize",
						onScroll: "onscroll",
						onSeeked: "onseeked",
						onSeeking: "onseeking",
						onSelect: "onselect",
						onShow: "onshow",
						onStalled: "onstalled",
						onStorage: "onstorage",
						onSubmit: "onsubmit",
						onSuspend: "onsuspend",
						onTimeUpdate: "ontimeupdate",
						onToggle: "ontoggle",
						onUnload: "onunload",
						onVolumeChange: "onvolumechange",
						onWaiting: "onwaiting",
						onZoom: "onzoom",
						overlinePosition: "overline-position",
						overlineThickness: "overline-thickness",
						paintOrder: "paint-order",
						panose1: "panose-1",
						pointerEvents: "pointer-events",
						referrerPolicy: "referrerpolicy",
						renderingIntent: "rendering-intent",
						shapeRendering: "shape-rendering",
						stopColor: "stop-color",
						stopOpacity: "stop-opacity",
						strikethroughPosition: "strikethrough-position",
						strikethroughThickness: "strikethrough-thickness",
						strokeDashArray: "stroke-dasharray",
						strokeDashOffset: "stroke-dashoffset",
						strokeLineCap: "stroke-linecap",
						strokeLineJoin: "stroke-linejoin",
						strokeMiterLimit: "stroke-miterlimit",
						strokeOpacity: "stroke-opacity",
						strokeWidth: "stroke-width",
						tabIndex: "tabindex",
						textAnchor: "text-anchor",
						textDecoration: "text-decoration",
						textRendering: "text-rendering",
						typeOf: "typeof",
						underlinePosition: "underline-position",
						underlineThickness: "underline-thickness",
						unicodeBidi: "unicode-bidi",
						unicodeRange: "unicode-range",
						unitsPerEm: "units-per-em",
						vAlphabetic: "v-alphabetic",
						vHanging: "v-hanging",
						vIdeographic: "v-ideographic",
						vMathematical: "v-mathematical",
						vectorEffect: "vector-effect",
						vertAdvY: "vert-adv-y",
						vertOriginX: "vert-origin-x",
						vertOriginY: "vert-origin-y",
						wordSpacing: "word-spacing",
						writingMode: "writing-mode",
						xHeight: "x-height",
						playbackOrder: "playbackorder",
						timelineBegin: "timelinebegin"
					},
					transform: pt,
					properties: {
						about: rt,
						accentHeight: et,
						accumulate: null,
						additive: null,
						alignmentBaseline: null,
						alphabetic: et,
						amplitude: et,
						arabicForm: null,
						ascent: et,
						attributeName: null,
						attributeType: null,
						azimuth: et,
						bandwidth: null,
						baselineShift: null,
						baseFrequency: null,
						baseProfile: null,
						bbox: null,
						begin: null,
						bias: et,
						by: null,
						calcMode: null,
						capHeight: et,
						className: nt,
						clip: null,
						clipPath: null,
						clipPathUnits: null,
						clipRule: null,
						color: null,
						colorInterpolation: null,
						colorInterpolationFilters: null,
						colorProfile: null,
						colorRendering: null,
						content: null,
						contentScriptType: null,
						contentStyleType: null,
						crossOrigin: null,
						cursor: null,
						cx: null,
						cy: null,
						d: null,
						dataType: null,
						defaultAction: null,
						descent: et,
						diffuseConstant: et,
						direction: null,
						display: null,
						dur: null,
						divisor: et,
						dominantBaseline: null,
						download: Zn,
						dx: null,
						dy: null,
						edgeMode: null,
						editable: null,
						elevation: et,
						enableBackground: null,
						end: null,
						event: null,
						exponent: et,
						externalResourcesRequired: null,
						fill: null,
						fillOpacity: et,
						fillRule: null,
						filter: null,
						filterRes: null,
						filterUnits: null,
						floodColor: null,
						floodOpacity: null,
						focusable: null,
						focusHighlight: null,
						fontFamily: null,
						fontSize: null,
						fontSizeAdjust: null,
						fontStretch: null,
						fontStyle: null,
						fontVariant: null,
						fontWeight: null,
						format: null,
						fr: null,
						from: null,
						fx: null,
						fy: null,
						g1: tt,
						g2: tt,
						glyphName: tt,
						glyphOrientationHorizontal: null,
						glyphOrientationVertical: null,
						glyphRef: null,
						gradientTransform: null,
						gradientUnits: null,
						handler: null,
						hanging: et,
						hatchContentUnits: null,
						hatchUnits: null,
						height: null,
						href: null,
						hrefLang: null,
						horizAdvX: et,
						horizOriginX: et,
						horizOriginY: et,
						id: null,
						ideographic: et,
						imageRendering: null,
						initialVisibility: null,
						in: null,
						in2: null,
						intercept: et,
						k: et,
						k1: et,
						k2: et,
						k3: et,
						k4: et,
						kernelMatrix: rt,
						kernelUnitLength: null,
						keyPoints: null,
						keySplines: null,
						keyTimes: null,
						kerning: null,
						lang: null,
						lengthAdjust: null,
						letterSpacing: null,
						lightingColor: null,
						limitingConeAngle: et,
						local: null,
						markerEnd: null,
						markerMid: null,
						markerStart: null,
						markerHeight: null,
						markerUnits: null,
						markerWidth: null,
						mask: null,
						maskContentUnits: null,
						maskUnits: null,
						mathematical: null,
						max: null,
						media: null,
						mediaCharacterEncoding: null,
						mediaContentEncodings: null,
						mediaSize: et,
						mediaTime: null,
						method: null,
						min: null,
						mode: null,
						name: null,
						navDown: null,
						navDownLeft: null,
						navDownRight: null,
						navLeft: null,
						navNext: null,
						navPrev: null,
						navRight: null,
						navUp: null,
						navUpLeft: null,
						navUpRight: null,
						numOctaves: null,
						observer: null,
						offset: null,
						onAbort: null,
						onActivate: null,
						onAfterPrint: null,
						onBeforePrint: null,
						onBegin: null,
						onCancel: null,
						onCanPlay: null,
						onCanPlayThrough: null,
						onChange: null,
						onClick: null,
						onClose: null,
						onCopy: null,
						onCueChange: null,
						onCut: null,
						onDblClick: null,
						onDrag: null,
						onDragEnd: null,
						onDragEnter: null,
						onDragExit: null,
						onDragLeave: null,
						onDragOver: null,
						onDragStart: null,
						onDrop: null,
						onDurationChange: null,
						onEmptied: null,
						onEnd: null,
						onEnded: null,
						onError: null,
						onFocus: null,
						onFocusIn: null,
						onFocusOut: null,
						onHashChange: null,
						onInput: null,
						onInvalid: null,
						onKeyDown: null,
						onKeyPress: null,
						onKeyUp: null,
						onLoad: null,
						onLoadedData: null,
						onLoadedMetadata: null,
						onLoadStart: null,
						onMessage: null,
						onMouseDown: null,
						onMouseEnter: null,
						onMouseLeave: null,
						onMouseMove: null,
						onMouseOut: null,
						onMouseOver: null,
						onMouseUp: null,
						onMouseWheel: null,
						onOffline: null,
						onOnline: null,
						onPageHide: null,
						onPageShow: null,
						onPaste: null,
						onPause: null,
						onPlay: null,
						onPlaying: null,
						onPopState: null,
						onProgress: null,
						onRateChange: null,
						onRepeat: null,
						onReset: null,
						onResize: null,
						onScroll: null,
						onSeeked: null,
						onSeeking: null,
						onSelect: null,
						onShow: null,
						onStalled: null,
						onStorage: null,
						onSubmit: null,
						onSuspend: null,
						onTimeUpdate: null,
						onToggle: null,
						onUnload: null,
						onVolumeChange: null,
						onWaiting: null,
						onZoom: null,
						opacity: null,
						operator: null,
						order: null,
						orient: null,
						orientation: null,
						origin: null,
						overflow: null,
						overlay: null,
						overlinePosition: et,
						overlineThickness: et,
						paintOrder: null,
						panose1: null,
						path: null,
						pathLength: et,
						patternContentUnits: null,
						patternTransform: null,
						patternUnits: null,
						phase: null,
						ping: nt,
						pitch: null,
						playbackOrder: null,
						pointerEvents: null,
						points: null,
						pointsAtX: et,
						pointsAtY: et,
						pointsAtZ: et,
						preserveAlpha: null,
						preserveAspectRatio: null,
						primitiveUnits: null,
						propagate: null,
						property: rt,
						r: null,
						radius: null,
						referrerPolicy: null,
						refX: null,
						refY: null,
						rel: rt,
						rev: rt,
						renderingIntent: null,
						repeatCount: null,
						repeatDur: null,
						requiredExtensions: rt,
						requiredFeatures: rt,
						requiredFonts: rt,
						requiredFormats: rt,
						resource: null,
						restart: null,
						result: null,
						rotate: null,
						rx: null,
						ry: null,
						scale: null,
						seed: null,
						shapeRendering: null,
						side: null,
						slope: null,
						snapshotTime: null,
						specularConstant: et,
						specularExponent: et,
						spreadMethod: null,
						spacing: null,
						startOffset: null,
						stdDeviation: null,
						stemh: null,
						stemv: null,
						stitchTiles: null,
						stopColor: null,
						stopOpacity: null,
						strikethroughPosition: et,
						strikethroughThickness: et,
						string: null,
						stroke: null,
						strokeDashArray: rt,
						strokeDashOffset: null,
						strokeLineCap: null,
						strokeLineJoin: null,
						strokeMiterLimit: et,
						strokeOpacity: et,
						strokeWidth: null,
						style: null,
						surfaceScale: et,
						syncBehavior: null,
						syncBehaviorDefault: null,
						syncMaster: null,
						syncTolerance: null,
						syncToleranceDefault: null,
						systemLanguage: rt,
						tabIndex: et,
						tableValues: null,
						target: null,
						targetX: et,
						targetY: et,
						textAnchor: null,
						textDecoration: null,
						textRendering: null,
						textLength: null,
						timelineBegin: null,
						title: null,
						transformBehavior: null,
						type: null,
						typeOf: rt,
						to: null,
						transform: null,
						u1: null,
						u2: null,
						underlinePosition: et,
						underlineThickness: et,
						unicode: null,
						unicodeBidi: null,
						unicodeRange: null,
						unitsPerEm: et,
						values: null,
						vAlphabetic: et,
						vMathematical: et,
						vectorEffect: null,
						vHanging: et,
						vIdeographic: et,
						version: null,
						vertAdvY: et,
						vertOriginX: et,
						vertOriginY: et,
						viewBox: null,
						viewTarget: null,
						visibility: null,
						width: null,
						widths: null,
						wordSpacing: null,
						writingMode: null,
						x: null,
						x1: null,
						x2: null,
						xChannelSelector: null,
						xHeight: et,
						y: null,
						y1: null,
						y2: null,
						yChannelSelector: null,
						z: null,
						zoomAndPan: null
					}
				}),
				kt = Yn([ft, ct, ht, mt, gt], "html"),
				xt = Yn([ft, ct, ht, mt, yt], "svg");

			function vt(e) {
				if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
				if (e.allowedElements || e.disallowedElements || e.allowElement) return n => {
					! function(e, n, t, r) {
						"function" === typeof n && "function" !== typeof t && (r = t, t = n, n = null), (0, vn.S4)(e, n, (function(e, n) {
							const r = n[n.length - 1];
							return t(e, r ? r.children.indexOf(e) : null, r)
						}), r)
					}(n, "element", ((n, t, r) => {
						const o = r;
						let i;
						if (e.allowedElements ? i = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(n.tagName)), !i && e.allowElement && "number" === typeof t && (i = !e.allowElement(n, t, o)), i && "number" === typeof t) return e.unwrapDisallowed && n.children ? o.children.splice(t, 1, ...n.children) : o.children.splice(t, 1), t
					}))
				}
			}
			const bt = ["http", "https", "mailto", "tel"];
			var wt = t(9185);

			function Ct(e) {
				const n = e && "object" === typeof e && "text" === e.type ? e.value || "" : e;
				return "string" === typeof n && "" === n.replace(/[ \t\n\f\r]/g, "")
			}
			const St = /^data[-\w.:]+$/i,
				Et = /-[a-z]/g,
				At = /[A-Z]/g;

			function Ft(e) {
				return "-" + e.toLowerCase()
			}

			function Tt(e) {
				return e.charAt(1).toUpperCase()
			}
			const It = {
				classId: "classID",
				dataType: "datatype",
				itemId: "itemID",
				strokeDashArray: "strokeDasharray",
				strokeDashOffset: "strokeDashoffset",
				strokeLineCap: "strokeLinecap",
				strokeLineJoin: "strokeLinejoin",
				strokeMiterLimit: "strokeMiterlimit",
				typeOf: "typeof",
				xLinkActuate: "xlinkActuate",
				xLinkArcRole: "xlinkArcrole",
				xLinkHref: "xlinkHref",
				xLinkRole: "xlinkRole",
				xLinkShow: "xlinkShow",
				xLinkTitle: "xlinkTitle",
				xLinkType: "xlinkType",
				xmlnsXLink: "xmlnsXlink"
			};
			var Pt = t(5862);
			const Ot = {}.hasOwnProperty,
				zt = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

			function Dt(e, n) {
				const t = [];
				let r, o = -1;
				for (; ++o < n.children.length;) r = n.children[o], "element" === r.type ? t.push(Lt(e, r, o, n)) : "text" === r.type ? "element" === n.type && zt.has(n.tagName) && Ct(r) || t.push(r.value) : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
				return t
			}

			function Lt(e, n, t, r) {
				const o = e.options,
					l = e.schema,
					u = n.tagName,
					s = {};
				let a, c = l;
				if ("html" === l.space && "svg" === u && (c = xt, e.schema = c), n.properties)
					for (a in n.properties) Ot.call(n.properties, a) && Mt(s, a, n.properties[a], e);
				"ol" !== u && "ul" !== u || e.listDepth++;
				const f = Dt(e, n);
				"ol" !== u && "ul" !== u || e.listDepth--, e.schema = l;
				const p = n.position || {
						start: {
							line: null,
							column: null,
							offset: null
						},
						end: {
							line: null,
							column: null,
							offset: null
						}
					},
					d = o.components && Ot.call(o.components, u) ? o.components[u] : u,
					h = "string" === typeof d || d === i.Fragment;
				if (!wt.isValidElementType(d)) throw new TypeError(`Component for name \`${u}\` not defined or is not renderable`);
				if (s.key = [u, p.start.line, p.start.column, t].join("-"), "a" === u && o.linkTarget && (s.target = "function" === typeof o.linkTarget ? o.linkTarget(String(s.href || ""), n.children, "string" === typeof s.title ? s.title : null) : o.linkTarget), "a" === u && o.transformLinkUri && (s.href = o.transformLinkUri(String(s.href || ""), n.children, "string" === typeof s.title ? s.title : null)), h || "code" !== u || "element" !== r.type || "pre" === r.tagName || (s.inline = !0), h || "h1" !== u && "h2" !== u && "h3" !== u && "h4" !== u && "h5" !== u && "h6" !== u || (s.level = Number.parseInt(u.charAt(1), 10)), "img" === u && o.transformImageUri && (s.src = o.transformImageUri(String(s.src || ""), String(s.alt || ""), "string" === typeof s.title ? s.title : null)), !h && "li" === u && "element" === r.type) {
					const e = function(e) {
						let n = -1;
						for (; ++n < e.children.length;) {
							const t = e.children[n];
							if ("element" === t.type && "input" === t.tagName) return t
						}
						return null
					}(n);
					s.checked = e && e.properties ? Boolean(e.properties.checked) : null, s.index = Rt(r, n), s.ordered = "ol" === r.tagName
				}
				var m;
				return h || "ol" !== u && "ul" !== u || (s.ordered = "ol" === u, s.depth = e.listDepth), "td" !== u && "th" !== u || (s.align && (s.style || (s.style = {}), s.style.textAlign = s.align, delete s.align), h || (s.isHeader = "th" === u)), h || "tr" !== u || "element" !== r.type || (s.isHeader = Boolean("thead" === r.tagName)), o.sourcePos && (s["data-sourcepos"] = [(m = p).start.line, ":", m.start.column, "-", m.end.line, ":", m.end.column].map((e => String(e))).join("")), !h && o.rawSourcePos && (s.sourcePosition = n.position), !h && o.includeElementIndex && (s.index = Rt(r, n), s.siblingCount = Rt(r)), h || (s.node = n), f.length > 0 ? i.createElement(d, s, f) : i.createElement(d, s)
			}

			function Rt(e, n) {
				let t = -1,
					r = 0;
				for (; ++t < e.children.length && e.children[t] !== n;) "element" === e.children[t].type && r++;
				return r
			}

			function Mt(e, n, t, r) {
				const o = function(e, n) {
					const t = Qn(n);
					let r = n,
						o = Xn;
					if (t in e.normal) return e.property[e.normal[t]];
					if (t.length > 4 && "data" === t.slice(0, 4) && St.test(n)) {
						if ("-" === n.charAt(4)) {
							const e = n.slice(5).replace(Et, Tt);
							r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
						} else {
							const e = n.slice(4);
							if (!Et.test(e)) {
								let t = e.replace(At, Ft);
								"-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
							}
						}
						o = lt
					}
					return new o(r, n)
				}(r.schema, n);
				let i = t;
				null !== i && void 0 !== i && i === i && (Array.isArray(i) && (i = o.commaSeparated ? function(e, n) {
					const t = n || {};
					return ("" === e[e.length - 1] ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " ")).trim()
				}(i) : i.join(" ").trim()), "style" === o.property && "string" === typeof i && (i = function(e) {
					const n = {};
					try {
						Pt(e, t)
					} catch {}
					return n;

					function t(e, t) {
						const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
						n[r.replace(/-([a-z])/g, _t)] = t
					}
				}(i)), o.space && o.property ? e[Ot.call(It, o.property) ? It[o.property] : o.property] = i : o.attribute && (e[o.attribute] = i))
			}

			function _t(e, n) {
				return n.toUpperCase()
			}
			const jt = {}.hasOwnProperty,
				Bt = {
					renderers: {
						to: "components",
						id: "change-renderers-to-components"
					},
					astPlugins: {
						id: "remove-buggy-html-in-markdown-parser"
					},
					allowDangerousHtml: {
						id: "remove-buggy-html-in-markdown-parser"
					},
					escapeHtml: {
						id: "remove-buggy-html-in-markdown-parser"
					},
					source: {
						to: "children",
						id: "change-source-to-children"
					},
					allowNode: {
						to: "allowElement",
						id: "replace-allownode-allowedtypes-and-disallowedtypes"
					},
					allowedTypes: {
						to: "allowedElements",
						id: "replace-allownode-allowedtypes-and-disallowedtypes"
					},
					disallowedTypes: {
						to: "disallowedElements",
						id: "replace-allownode-allowedtypes-and-disallowedtypes"
					},
					includeNodeIndex: {
						to: "includeElementIndex",
						id: "change-includenodeindex-to-includeelementindex"
					}
				};

			function Ht(e) {
				for (const i in Bt)
					if (jt.call(Bt, i) && jt.call(e, i)) {
						const e = Bt[i];
						console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete Bt[i]
					} const n = _().use(kn).use(e.remarkPlugins || e.plugins || []).use($n, {
						allowDangerousHtml: !0
					}).use(e.rehypePlugins || []).use(vt, e),
					t = new k;
				"string" === typeof e.children ? t.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
				const r = n.runSync(n.parse(t), t);
				if ("root" !== r.type) throw new TypeError("Expected a `root` node");
				let o = i.createElement(i.Fragment, {}, Dt({
					options: e,
					schema: kt,
					listDepth: 0
				}, r));
				return e.className && (o = i.createElement("div", {
					className: e.className
				}, o)), o
			}
			Ht.defaultProps = {
				transformLinkUri: function(e) {
					const n = (e || "").trim(),
						t = n.charAt(0);
					if ("#" === t || "/" === t) return n;
					const r = n.indexOf(":");
					if (-1 === r) return n;
					let o = -1;
					for (; ++o < bt.length;) {
						const e = bt[o];
						if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n
					}
					return o = n.indexOf("?"), -1 !== o && r > o ? n : (o = n.indexOf("#"), -1 !== o && r > o ? n : "javascript:void(0)")
				}
			}, Ht.propTypes = {
				children: qn.string,
				className: qn.string,
				allowElement: qn.func,
				allowedElements: qn.arrayOf(qn.string),
				disallowedElements: qn.arrayOf(qn.string),
				unwrapDisallowed: qn.bool,
				remarkPlugins: qn.arrayOf(qn.oneOfType([qn.object, qn.func, qn.arrayOf(qn.oneOfType([qn.object, qn.func]))])),
				rehypePlugins: qn.arrayOf(qn.oneOfType([qn.object, qn.func, qn.arrayOf(qn.oneOfType([qn.object, qn.func]))])),
				sourcePos: qn.bool,
				rawSourcePos: qn.bool,
				skipHtml: qn.bool,
				includeElementIndex: qn.bool,
				transformLinkUri: qn.oneOfType([qn.func, qn.bool]),
				linkTarget: qn.oneOfType([qn.func, qn.string]),
				transformImageUri: qn.func,
				components: qn.object
			}
		},
		9311: function(e, n, t) {
			"use strict";
			t.d(n, {
				S4: function() {
					return l
				}
			});
			const r = function(e) {
				if (void 0 === e || null === e) return i;
				if ("string" === typeof e) return function(e) {
					return o(n);

					function n(n) {
						return n && n.type === e
					}
				}(e);
				if ("object" === typeof e) return Array.isArray(e) ? function(e) {
					const n = [];
					let t = -1;
					for (; ++t < e.length;) n[t] = r(e[t]);
					return o(i);

					function i(...e) {
						let t = -1;
						for (; ++t < n.length;)
							if (n[t].call(this, ...e)) return !0;
						return !1
					}
				}(e) : function(e) {
					return o(n);

					function n(n) {
						let t;
						for (t in e)
							if (n[t] !== e[t]) return !1;
						return !0
					}
				}(e);
				if ("function" === typeof e) return o(e);
				throw new Error("Expected function, string, or object as test")
			};

			function o(e) {
				return function(n, ...t) {
					return Boolean(n && "object" === typeof n && "type" in n && Boolean(e.call(this, n, ...t)))
				}
			}

			function i() {
				return !0
			}
			const l = function(e, n, t, o) {
				"function" === typeof n && "function" !== typeof t && (o = t, t = n, n = null);
				const i = r(n),
					l = o ? -1 : 1;
				! function e(r, u, s) {
					const a = r && "object" === typeof r ? r : {};
					if ("string" === typeof a.type) {
						const e = "string" === typeof a.tagName ? a.tagName : "string" === typeof a.name ? a.name : void 0;
						Object.defineProperty(c, "name", {
							value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")"
						})
					}
					return c;

					function c() {
						let a, c, f, p = [];
						if ((!n || i(r, u, s[s.length - 1] || null)) && (p = function(e) {
								if (Array.isArray(e)) return e;
								if ("number" === typeof e) return [true, e];
								return [e]
							}(t(r, s)), false === p[0])) return p;
						if (r.children && "skip" !== p[0])
							for (c = (o ? r.children.length : -1) + l, f = s.concat(r); c > -1 && c < r.children.length;) {
								if (a = e(r.children[c], c, f)(), false === a[0]) return a;
								c = "number" === typeof a[1] ? a[1] : c + l
							}
						return p
					}
				}(e, void 0, [])()
			}
		}
	}
]);