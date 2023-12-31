(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[22], {
		2554: function(e, t) {
			var o;
			! function() {
				"use strict";
				var n = {}.hasOwnProperty;

				function r() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var o = arguments[t];
						if (o) {
							var a = typeof o;
							if ("string" === a || "number" === a) e.push(this && this[o] || o);
							else if (Array.isArray(o)) e.push(r.apply(this, o));
							else if ("object" === a) {
								if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
									e.push(o.toString());
									continue
								}
								for (var u in o) n.call(o, u) && o[u] && e.push(this && this[u] || u)
							}
						}
					}
					return e.join(" ")
				}
				e.exports ? (r.default = r, e.exports = r) : void 0 === (o = function() {
					return r
				}.apply(t, [])) || (e.exports = o)
			}()
		},
		1528: function(e, t) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getDomainLocale = function(e, t, o, n) {
				return !1
			};
			("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		1453: function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = o(9854).Z;
			o(2271).default;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var r = o(2619).Z,
				a = o(518).Z,
				u = r(o(7378)),
				l = o(194),
				f = o(4087),
				i = o(9756),
				c = o(7868),
				s = o(1842),
				d = o(1528),
				p = o(1470),
				v = {};

			function y(e, t, o, n) {
				if (e && l.isLocalURL(t)) {
					Promise.resolve(e.prefetch(t, o, n)).catch((function(e) {
						0
					}));
					var r = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
					v[t + "%" + o + (r ? "%" + r : "")] = !0
				}
			}
			var h = u.default.forwardRef((function(e, t) {
				var o, r = e.href,
					h = e.as,
					b = e.children,
					g = e.prefetch,
					C = e.passHref,
					_ = e.replace,
					x = e.shallow,
					m = e.scroll,
					M = e.locale,
					j = e.onClick,
					L = e.onMouseEnter,
					O = e.onTouchStart,
					R = e.legacyBehavior,
					E = void 0 === R ? !0 !== Boolean(!1) : R,
					P = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
				o = b, !E || "string" !== typeof o && "number" !== typeof o || (o = u.default.createElement("a", null, o));
				var k = !1 !== g,
					S = u.default.useContext(i.RouterContext),
					w = u.default.useContext(c.AppRouterContext);
				w && (S = w);
				var T, I = u.default.useMemo((function() {
						var e = n(l.resolveHref(S, r, !0), 2),
							t = e[0],
							o = e[1];
						return {
							href: t,
							as: h ? l.resolveHref(S, h) : o || t
						}
					}), [S, r, h]),
					A = I.href,
					U = I.as,
					B = u.default.useRef(A),
					N = u.default.useRef(U);
				E && (T = u.default.Children.only(o));
				var Z = E ? T && "object" === typeof T && T.ref : t,
					D = n(s.useIntersection({
						rootMargin: "200px"
					}), 3),
					H = D[0],
					K = D[1],
					G = D[2],
					q = u.default.useCallback((function(e) {
						N.current === U && B.current === A || (G(), N.current = U, B.current = A), H(e), Z && ("function" === typeof Z ? Z(e) : "object" === typeof Z && (Z.current = e))
					}), [U, Z, A, G, H]);
				u.default.useEffect((function() {
					var e = K && k && l.isLocalURL(A),
						t = "undefined" !== typeof M ? M : S && S.locale,
						o = v[A + "%" + U + (t ? "%" + t : "")];
					e && !o && y(S, A, U, {
						locale: t
					})
				}), [U, A, K, M, k, S]);
				var z = {
					ref: q,
					onClick: function(e) {
						E || "function" !== typeof j || j(e), E && T.props && "function" === typeof T.props.onClick && T.props.onClick(e), e.defaultPrevented || function(e, t, o, n, r, a, f, i, c, s) {
							if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
									var t = e.currentTarget.target;
									return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
								}(e) && l.isLocalURL(o)) {
								e.preventDefault();
								var d = function() {
									"beforePopState" in t ? t[r ? "replace" : "push"](o, n, {
										shallow: a,
										locale: i,
										scroll: f
									}) : t[r ? "replace" : "push"](o, {
										forceOptimisticNavigation: !s
									})
								};
								c ? u.default.startTransition(d) : d()
							}
						}(e, S, A, U, _, x, m, M, Boolean(w), k)
					},
					onMouseEnter: function(e) {
						E || "function" !== typeof L || L(e), E && T.props && "function" === typeof T.props.onMouseEnter && T.props.onMouseEnter(e), !k && w || l.isLocalURL(A) && y(S, A, U, {
							priority: !0
						})
					},
					onTouchStart: function(e) {
						E || "function" !== typeof O || O(e), E && T.props && "function" === typeof T.props.onTouchStart && T.props.onTouchStart(e), !k && w || l.isLocalURL(A) && y(S, A, U, {
							priority: !0
						})
					}
				};
				if (!E || C || "a" === T.type && !("href" in T.props)) {
					var F = "undefined" !== typeof M ? M : S && S.locale,
						J = S && S.isLocaleDomain && d.getDomainLocale(U, F, S.locales, S.domainLocales);
					z.href = J || p.addBasePath(f.addLocale(U, F, S && S.defaultLocale))
				}
				return E ? u.default.cloneElement(T, z) : u.default.createElement("a", Object.assign({}, P, z), o)
			}));
			t.default = h, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		1842: function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = o(9854).Z;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.useIntersection = function(e) {
				var t = e.rootRef,
					o = e.rootMargin,
					i = e.disabled || !u,
					c = n(r.useState(!1), 2),
					s = c[0],
					d = c[1],
					p = n(r.useState(null), 2),
					v = p[0],
					y = p[1];
				r.useEffect((function() {
					if (u) {
						if (i || s) return;
						if (v && v.tagName) {
							var e = function(e, t, o) {
								var n = function(e) {
										var t, o = {
												root: e.root || null,
												margin: e.rootMargin || ""
											},
											n = f.find((function(e) {
												return e.root === o.root && e.margin === o.margin
											}));
										if (n && (t = l.get(n))) return t;
										var r = new Map,
											a = new IntersectionObserver((function(e) {
												e.forEach((function(e) {
													var t = r.get(e.target),
														o = e.isIntersecting || e.intersectionRatio > 0;
													t && o && t(o)
												}))
											}), e);
										return t = {
											id: o,
											observer: a,
											elements: r
										}, f.push(o), l.set(o, t), t
									}(o),
									r = n.id,
									a = n.observer,
									u = n.elements;
								return u.set(e, t), a.observe(e),
									function() {
										if (u.delete(e), a.unobserve(e), 0 === u.size) {
											a.disconnect(), l.delete(r);
											var t = f.findIndex((function(e) {
												return e.root === r.root && e.margin === r.margin
											}));
											t > -1 && f.splice(t, 1)
										}
									}
							}(v, (function(e) {
								return e && d(e)
							}), {
								root: null == t ? void 0 : t.current,
								rootMargin: o
							});
							return e
						}
					} else if (!s) {
						var n = a.requestIdleCallback((function() {
							return d(!0)
						}));
						return function() {
							return a.cancelIdleCallback(n)
						}
					}
				}), [v, i, o, t, s]);
				var h = r.useCallback((function() {
					d(!1)
				}), []);
				return [y, s, h]
			};
			var r = o(7378),
				a = o(2878),
				u = "function" === typeof IntersectionObserver,
				l = new Map,
				f = [];
			("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		7868: function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
			var n = (0, o(2619).Z)(o(7378)),
				r = n.default.createContext(null);
			t.AppRouterContext = r;
			var a = n.default.createContext(null);
			t.LayoutRouterContext = a;
			var u = n.default.createContext(null);
			t.GlobalLayoutRouterContext = u;
			var l = n.default.createContext(null);
			t.TemplateContext = l
		},
		9894: function(e, t, o) {
			e.exports = o(1453)
		}
	}
]);