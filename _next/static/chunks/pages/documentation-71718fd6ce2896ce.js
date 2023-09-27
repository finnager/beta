(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[410], {
		42: function(e, t) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function i() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var s = typeof n;
							if ("string" === s || "number" === s) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var o = i.apply(null, n);
									o && e.push(o)
								}
							} else if ("object" === s) {
								if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
									e.push(n.toString());
									continue
								}
								for (var a in n) r.call(n, a) && n[a] && e.push(a)
							}
						}
					}
					return e.join(" ")
				}
				e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
					return i
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		4379: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/documentation", function() {
				return n(478)
			}])
		},
		478: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				Documentation: function() {
					return c
				},
				__N_SSG: function() {
					return u
				}
			});
			var r = n(4246),
				i = n(8972),
				s = n(7210),
				o = n(1444),
				a = n(9894),
				l = n.n(a),
				u = !0,
				c = function(e) {
					return (0, r.jsx)(i.AU, {
						schema: e.schema,
						guides: e.guides,
						children: (0, r.jsx)("div", {
							className: "flex h-full justify-center",
							children: (0, r.jsxs)("div", {
								className: "scrollbar-hide h-full max-w-[800px] grow overflow-y-scroll px-4 pt-4 md:px-16",
								children: [(0, r.jsxs)("article", {
									className: "max-w-4xl pb-20 pt-10",
									children: [(0, r.jsx)("div", {
										children: (0, r.jsx)(s.x, {
											size: "xs-title",
											children: "Documentation"
										})
									}), (0, r.jsx)("div", {
										className: "mt-6",
										children: (0, r.jsx)(s.x, {
											size: "callout",
											children: "Anything that you can achieve with PDFs, presence, and persistence in a bank branch you can do with our API. We\u2019ve always wanted a fully programmatic bank so we built one."
										})
									}), (0, r.jsx)("div", {
										className: "border-metal-100 my-8 border-t"
									}), (0, r.jsx)("div", {
										className: "mt-6",
										children: (0, r.jsx)(s.x, {
											size: "body",
											children: "Our API faithfully exposes the data and capabilities of the Federal Reserve, Visa, The Clearing House, depository networks, and accounting tools. It\u2019s lovingly boring and exceptionally powerful."
										})
									}), (0, r.jsx)("div", {
										className: "mt-6",
										children: (0, r.jsxs)(s.x, {
											size: "body",
											children: ["If you have any questions or want to get started, don\u2019t hesitate to ping us at", " ", (0, r.jsx)("a", {
												href: "mailto:sales@increase.com",
												children: "sales@increase.com"
											}), ". We can\u2019t wait to see what you build!"]
										})
									})]
								}), (0, r.jsxs)("div", {
									className: "grid grid grid-cols-2 gap-3 pb-20 sm:grid-cols-3",
									children: [(0, r.jsx)(l(), {
										href: "/documentation/api",
										className: "decoration-none",
										children: (0, r.jsxs)("div", {
											className: "border-metal-100 bg-metal-0 cursor-pointer space-y-2 rounded border px-4 py-6 shadow-sm transition hover:shadow-md",
											children: [(0, r.jsx)("div", {
												className: "bg-lime relative flex h-8 w-8 grow-0 items-center justify-center rounded-full",
												children: (0, r.jsx)(o.J, {
													name: "code"
												})
											}), (0, r.jsxs)("div", {
												children: [(0, r.jsx)("div", {
													children: (0, r.jsx)(s.x, {
														size: "body-medium",
														children: "API reference"
													})
												}), (0, r.jsx)("div", {
													children: (0, r.jsx)(s.x, {
														size: "secondary-text",
														children: "Get started with our APIs"
													})
												})]
											})]
										})
									}), (0, r.jsx)(l(), {
										href: "/documentation/changelog",
										className: "decoration-none",
										children: (0, r.jsxs)("div", {
											className: "border-metal-100 bg-metal-0 cursor-pointer space-y-2 rounded border px-4 py-6 shadow-sm transition hover:shadow-md",
											children: [(0, r.jsx)("div", {
												className: "bg-lime relative flex h-8 w-8 grow-0 items-center justify-center rounded-full",
												children: (0, r.jsx)(o.J, {
													name: "notification"
												})
											}), (0, r.jsxs)("div", {
												children: [(0, r.jsx)("div", {
													children: (0, r.jsx)(s.x, {
														size: "body-medium",
														children: "Changelog"
													})
												}), (0, r.jsx)("div", {
													children: (0, r.jsx)(s.x, {
														size: "secondary-text",
														children: "Track all changes"
													})
												})]
											})]
										})
									}), (0, r.jsx)(l(), {
										href: "https://status.increase.com/",
										className: "decoration-none",
										children: (0, r.jsxs)("div", {
											className: "border-metal-100 bg-metal-0 col-span-2 flex cursor-pointer items-center space-x-2 space-y-2 rounded border px-4 py-6 shadow-sm transition hover:shadow-md sm:col-span-1 sm:block",
											children: [(0, r.jsxs)("div", {
												className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-green-50/30",
												children: [(0, r.jsx)("span", {
													className: "inset absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-200 opacity-75"
												}), (0, r.jsx)("span", {
													className: "bg-green relative inline-flex h-3 w-3 rounded-full"
												})]
											}), (0, r.jsx)("div", {
												children: (0, r.jsxs)("div", {
													children: [(0, r.jsx)("div", {
														children: (0, r.jsx)(s.x, {
															size: "body-medium",
															children: "Status"
														})
													}), (0, r.jsx)("div", {
														children: (0, r.jsx)(s.x, {
															size: "secondary-text",
															children: "All systems operational"
														})
													})]
												})
											})]
										})
									})]
								})]
							})
						})
					})
				};
			t.default = c
		},
		7061: function(e) {
			var t, n, r = e.exports = {};

			function i() {
				throw new Error("setTimeout has not been defined")
			}

			function s() {
				throw new Error("clearTimeout has not been defined")
			}

			function o(e) {
				if (t === setTimeout) return setTimeout(e, 0);
				if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
				try {
					return t(e, 0)
				} catch (n) {
					try {
						return t.call(null, e, 0)
					} catch (n) {
						return t.call(this, e, 0)
					}
				}
			}! function() {
				try {
					t = "function" === typeof setTimeout ? setTimeout : i
				} catch (e) {
					t = i
				}
				try {
					n = "function" === typeof clearTimeout ? clearTimeout : s
				} catch (e) {
					n = s
				}
			}();
			var a, l = [],
				u = !1,
				c = -1;

			function d() {
				u && a && (u = !1, a.length ? l = a.concat(l) : c = -1, l.length && f())
			}

			function f() {
				if (!u) {
					var e = o(d);
					u = !0;
					for (var t = l.length; t;) {
						for (a = l, l = []; ++c < t;) a && a[c].run();
						c = -1, t = l.length
					}
					a = null, u = !1,
						function(e) {
							if (n === clearTimeout) return clearTimeout(e);
							if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
							try {
								n(e)
							} catch (t) {
								try {
									return n.call(null, e)
								} catch (t) {
									return n.call(this, e)
								}
							}
						}(e)
				}
			}

			function h(e, t) {
				this.fun = e, this.array = t
			}

			function m() {}
			r.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				l.push(new h(e, t)), 1 !== l.length || u || o(f)
			}, h.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(e) {
				return []
			}, r.binding = function(e) {
				throw new Error("process.binding is not supported")
			}, r.cwd = function() {
				return "/"
			}, r.chdir = function(e) {
				throw new Error("process.chdir is not supported")
			}, r.umask = function() {
				return 0
			}
		},
		8462: function(e, t, n) {
			"use strict";
			n.d(t, {
				u: function() {
					return H
				}
			});
			var r = n(7378),
				i = n(6616),
				s = n(1635),
				o = n(7953),
				a = n(5804);

			function l() {
				let e = (0, r.useRef)(!1);
				return (0, a.e)((() => (e.current = !0, () => {
					e.current = !1
				})), []), e
			}
			var u = n(7349),
				c = n(1074),
				d = n(2296);
			var f = n(6661);

			function h() {
				let e = [],
					t = {
						addEventListener: (e, n, r, i) => (e.addEventListener(n, r, i), t.add((() => e.removeEventListener(n, r, i)))),
						requestAnimationFrame(...e) {
							let n = requestAnimationFrame(...e);
							return t.add((() => cancelAnimationFrame(n)))
						},
						nextFrame: (...e) => t.requestAnimationFrame((() => t.requestAnimationFrame(...e))),
						setTimeout(...e) {
							let n = setTimeout(...e);
							return t.add((() => clearTimeout(n)))
						},
						microTask(...e) {
							let n = {
								current: !0
							};
							return (0, f.Y)((() => {
								n.current && e[0]()
							})), t.add((() => {
								n.current = !1
							}))
						},
						style(e, t, n) {
							let r = e.style.getPropertyValue(t);
							return Object.assign(e.style, {
								[t]: n
							}), this.add((() => {
								Object.assign(e.style, {
									[t]: r
								})
							}))
						},
						group(e) {
							let t = h();
							return e(t), this.add((() => t.dispose()))
						},
						add: t => (e.push(t), () => {
							let n = e.indexOf(t);
							if (n >= 0)
								for (let t of e.splice(n, 1)) t()
						}),
						dispose() {
							for (let t of e.splice(0)) t()
						}
					};
				return t
			}

			function m(e, ...t) {
				e && t.length > 0 && e.classList.add(...t)
			}

			function p(e, ...t) {
				e && t.length > 0 && e.classList.remove(...t)
			}

			function v(e, t, n, r) {
				let i = n ? "enter" : "leave",
					s = h(),
					a = void 0 !== r ? function(e) {
						let t = {
							called: !1
						};
						return (...n) => {
							if (!t.called) return t.called = !0, e(...n)
						}
					}(r) : () => {};
				"enter" === i && (e.removeAttribute("hidden"), e.style.display = "");
				let l = (0, o.E)(i, {
						enter: () => t.enter,
						leave: () => t.leave
					}),
					u = (0, o.E)(i, {
						enter: () => t.enterTo,
						leave: () => t.leaveTo
					}),
					c = (0, o.E)(i, {
						enter: () => t.enterFrom,
						leave: () => t.leaveFrom
					});
				return p(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), m(e, ...l, ...c), s.nextFrame((() => {
					p(e, ...c), m(e, ...u),
						function(e, t) {
							let n = h();
							if (!e) return n.dispose;
							let {
								transitionDuration: r,
								transitionDelay: i
							} = getComputedStyle(e), [s, o] = [r, i].map((e => {
								let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
								return t
							})), a = s + o;
							if (0 !== a) {
								n.group((n => {
									n.setTimeout((() => {
										t(), n.dispose()
									}), a), n.addEventListener(e, "transitionrun", (e => {
										e.target === e.currentTarget && n.dispose()
									}))
								}));
								let r = n.addEventListener(e, "transitionend", (e => {
									e.target === e.currentTarget && (t(), r())
								}))
							} else t();
							n.add((() => t())), n.dispose
						}(e, (() => (p(e, ...l), m(e, ...t.entered), a())))
				})), s.dispose
			}

			function g() {
				let [e] = (0, r.useState)(h);
				return (0, r.useEffect)((() => () => e.dispose()), [e]), e
			}

			function b({
				container: e,
				direction: t,
				classes: n,
				onStart: r,
				onStop: i
			}) {
				let s = l(),
					o = g(),
					c = (0, u.E)(t);
				(0, a.e)((() => {
					let t = h();
					o.add(t.dispose);
					let a = e.current;
					if (a && "idle" !== c.current && s.current) return t.dispose(), r.current(c.current), t.add(v(a, n.current, "enter" === c.current, (() => {
						t.dispose(), i.current(c.current)
					}))), t.dispose
				}), [t])
			}
			var y = n(1981),
				x = n(2622),
				w = n(8366);

			function j(e = "") {
				return e.split(" ").filter((e => e.trim().length > 1))
			}
			let E = (0, r.createContext)(null);
			E.displayName = "TransitionContext";
			var T, N = ((T = N || {}).Visible = "visible", T.Hidden = "hidden", T);
			let O = (0, r.createContext)(null);

			function S(e) {
				return "children" in e ? S(e.children) : e.current.filter((({
					el: e
				}) => null !== e.current)).filter((({
					state: e
				}) => "visible" === e)).length > 0
			}

			function C(e, t) {
				let n = (0, u.E)(e),
					s = (0, r.useRef)([]),
					a = l(),
					c = g(),
					d = (0, y.z)(((e, t = i.l4.Hidden) => {
						let r = s.current.findIndex((({
							el: t
						}) => t === e)); - 1 !== r && ((0, o.E)(t, {
							[i.l4.Unmount]() {
								s.current.splice(r, 1)
							},
							[i.l4.Hidden]() {
								s.current[r].state = "hidden"
							}
						}), c.microTask((() => {
							var e;
							!S(s) && a.current && (null == (e = n.current) || e.call(n))
						})))
					})),
					f = (0, y.z)((e => {
						let t = s.current.find((({
							el: t
						}) => t === e));
						return t ? "visible" !== t.state && (t.state = "visible") : s.current.push({
							el: e,
							state: "visible"
						}), () => d(e, i.l4.Unmount)
					})),
					h = (0, r.useRef)([]),
					m = (0, r.useRef)(Promise.resolve()),
					p = (0, r.useRef)({
						enter: [],
						leave: [],
						idle: []
					}),
					v = (0, y.z)(((e, n, r) => {
						h.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
							h.current.push(e)
						}))]), null == t || t.chains.current[n].push([e, new Promise((e => {
							Promise.all(p.current[n].map((([e, t]) => t))).then((() => e()))
						}))]), "enter" === n ? m.current = m.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
					})),
					b = (0, y.z)(((e, t, n) => {
						Promise.all(p.current[t].splice(0).map((([e, t]) => t))).then((() => {
							var e;
							null == (e = h.current.shift()) || e()
						})).then((() => n(t)))
					}));
				return (0, r.useMemo)((() => ({
					children: s,
					register: f,
					unregister: d,
					onStart: v,
					onStop: b,
					wait: m,
					chains: p
				})), [f, d, s, v, b, p, m])
			}

			function F() {}
			O.displayName = "NestingContext";
			let A = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

			function P(e) {
				var t;
				let n = {};
				for (let r of A) n[r] = null != (t = e[r]) ? t : F;
				return n
			}
			let k = i.AN.RenderStrategy;
			let R = (0, i.yV)((function(e, t) {
					let {
						show: n,
						appear: o = !1,
						unmount: l,
						...u
					} = e, f = (0, r.useRef)(null), h = (0, d.T)(f, t);
					(0, c.H)();
					let m = (0, s.oJ)();
					if (void 0 === n && null !== m && (n = (m & s.ZM.Open) === s.ZM.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
					let [p, v] = (0, r.useState)(n ? "visible" : "hidden"), g = C((() => {
						v("hidden")
					})), [b, y] = (0, r.useState)(!0), x = (0, r.useRef)([n]);
					(0, a.e)((() => {
						!1 !== b && x.current[x.current.length - 1] !== n && (x.current.push(n), y(!1))
					}), [x, n]);
					let w = (0, r.useMemo)((() => ({
						show: n,
						appear: o,
						initial: b
					})), [n, o, b]);
					(0, r.useEffect)((() => {
						if (n) v("visible");
						else if (S(g)) {
							let e = f.current;
							if (!e) return;
							let t = e.getBoundingClientRect();
							0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && v("hidden")
						} else v("hidden")
					}), [n, g]);
					let j = {
						unmount: l
					};
					return r.createElement(O.Provider, {
						value: g
					}, r.createElement(E.Provider, {
						value: w
					}, (0, i.sY)({
						ourProps: {
							...j,
							as: r.Fragment,
							children: r.createElement(L, {
								ref: h,
								...j,
								...u
							})
						},
						theirProps: {},
						defaultTag: r.Fragment,
						features: k,
						visible: "visible" === p,
						name: "Transition"
					})))
				})),
				L = (0, i.yV)((function(e, t) {
					let {
						beforeEnter: n,
						afterEnter: a,
						beforeLeave: l,
						afterLeave: f,
						enter: h,
						enterFrom: m,
						enterTo: p,
						entered: v,
						leave: g,
						leaveFrom: T,
						leaveTo: N,
						...F
					} = e, A = (0, r.useRef)(null), R = (0, d.T)(A, t), L = F.unmount ? i.l4.Unmount : i.l4.Hidden, {
						show: z,
						appear: H,
						initial: _
					} = function() {
						let e = (0, r.useContext)(E);
						if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return e
					}(), [M, I] = (0, r.useState)(z ? "visible" : "hidden"), Z = function() {
						let e = (0, r.useContext)(O);
						if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return e
					}(), {
						register: V,
						unregister: q
					} = Z, D = (0, r.useRef)(null);
					(0, r.useEffect)((() => V(A)), [V, A]), (0, r.useEffect)((() => {
						if (L === i.l4.Hidden && A.current) return z && "visible" !== M ? void I("visible") : (0, o.E)(M, {
							hidden: () => q(A),
							visible: () => V(A)
						})
					}), [M, A, V, q, z, L]);
					let U = (0, u.E)({
							enter: j(h),
							enterFrom: j(m),
							enterTo: j(p),
							entered: j(v),
							leave: j(g),
							leaveFrom: j(T),
							leaveTo: j(N)
						}),
						Y = function(e) {
							let t = (0, r.useRef)(P(e));
							return (0, r.useEffect)((() => {
								t.current = P(e)
							}), [e]), t
						}({
							beforeEnter: n,
							afterEnter: a,
							beforeLeave: l,
							afterLeave: f
						}),
						$ = (0, c.H)();
					(0, r.useEffect)((() => {
						if ($ && "visible" === M && null === A.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
					}), [A, M, $]);
					let J = _ && !H,
						B = !$ || J || D.current === z ? "idle" : z ? "enter" : "leave",
						W = function(e = 0) {
							let [t, n] = (0, r.useState)(e), i = (0, r.useCallback)((e => n((t => t | e))), [t]), s = (0, r.useCallback)((e => Boolean(t & e)), [t]), o = (0, r.useCallback)((e => n((t => t & ~e))), [n]), a = (0, r.useCallback)((e => n((t => t ^ e))), [n]);
							return {
								flags: t,
								addFlag: i,
								hasFlag: s,
								removeFlag: o,
								toggleFlag: a
							}
						}(0),
						G = (0, y.z)((e => (0, o.E)(e, {
							enter: () => {
								W.addFlag(s.ZM.Opening), Y.current.beforeEnter()
							},
							leave: () => {
								W.addFlag(s.ZM.Closing), Y.current.beforeLeave()
							},
							idle: () => {}
						}))),
						X = (0, y.z)((e => (0, o.E)(e, {
							enter: () => {
								W.removeFlag(s.ZM.Opening), Y.current.afterEnter()
							},
							leave: () => {
								W.removeFlag(s.ZM.Closing), Y.current.afterLeave()
							},
							idle: () => {}
						}))),
						K = C((() => {
							I("hidden"), q(A)
						}), Z);
					b({
						container: A,
						classes: U,
						direction: B,
						onStart: (0, u.E)((e => {
							K.onStart(A, e, G)
						})),
						onStop: (0, u.E)((e => {
							K.onStop(A, e, X), "leave" === e && !S(K) && (I("hidden"), q(A))
						}))
					}), (0, r.useEffect)((() => {
						J && (L === i.l4.Hidden ? D.current = null : D.current = z)
					}), [z, J, M]);
					let Q = F,
						ee = {
							ref: R
						};
					return H && z && w.O.isServer && (Q = {
						...Q,
						className: (0, x.A)(F.className, ...U.current.enter, ...U.current.enterFrom)
					}), r.createElement(O.Provider, {
						value: K
					}, r.createElement(s.up, {
						value: (0, o.E)(M, {
							visible: s.ZM.Open,
							hidden: s.ZM.Closed
						}) | W.flags
					}, (0, i.sY)({
						ourProps: ee,
						theirProps: Q,
						defaultTag: "div",
						features: k,
						visible: "visible" === M,
						name: "Transition.Child"
					})))
				})),
				z = (0, i.yV)((function(e, t) {
					let n = null !== (0, r.useContext)(E),
						i = null !== (0, s.oJ)();
					return r.createElement(r.Fragment, null, !n && i ? r.createElement(R, {
						ref: t,
						...e
					}) : r.createElement(L, {
						ref: t,
						...e
					}))
				})),
				H = Object.assign(R, {
					Child: z,
					Root: R
				})
		},
		1981: function(e, t, n) {
			"use strict";
			n.d(t, {
				z: function() {
					return s
				}
			});
			var r = n(7378),
				i = n(7349);
			let s = function(e) {
				let t = (0, i.E)(e);
				return r.useCallback(((...e) => t.current(...e)), [t])
			}
		},
		5804: function(e, t, n) {
			"use strict";
			n.d(t, {
				e: function() {
					return s
				}
			});
			var r = n(7378),
				i = n(8366);
			let s = (e, t) => {
				i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
			}
		},
		7349: function(e, t, n) {
			"use strict";
			n.d(t, {
				E: function() {
					return s
				}
			});
			var r = n(7378),
				i = n(5804);

			function s(e) {
				let t = (0, r.useRef)(e);
				return (0, i.e)((() => {
					t.current = e
				}), [e]), t
			}
		},
		1074: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: function() {
					return s
				}
			});
			var r = n(7378),
				i = n(8366);

			function s() {
				let [e, t] = (0, r.useState)(i.O.isHandoffComplete);
				return e && !1 === i.O.isHandoffComplete && t(!1), (0, r.useEffect)((() => {
					!0 !== e && t(!0)
				}), [e]), (0, r.useEffect)((() => i.O.handoff()), []), e
			}
		},
		2296: function(e, t, n) {
			"use strict";
			n.d(t, {
				T: function() {
					return a
				},
				h: function() {
					return o
				}
			});
			var r = n(7378),
				i = n(1981);
			let s = Symbol();

			function o(e, t = !0) {
				return Object.assign(e, {
					[s]: t
				})
			}

			function a(...e) {
				let t = (0, r.useRef)(e);
				(0, r.useEffect)((() => {
					t.current = e
				}), [e]);
				let n = (0, i.z)((e => {
					for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
				}));
				return e.every((e => null == e || (null == e ? void 0 : e[s]))) ? void 0 : n
			}
		},
		1635: function(e, t, n) {
			"use strict";
			n.d(t, {
				ZM: function() {
					return o
				},
				oJ: function() {
					return a
				},
				up: function() {
					return l
				}
			});
			var r = n(7378);
			let i = (0, r.createContext)(null);
			i.displayName = "OpenClosedContext";
			var s, o = ((s = o || {})[s.Open = 1] = "Open", s[s.Closed = 2] = "Closed", s[s.Closing = 4] = "Closing", s[s.Opening = 8] = "Opening", s);

			function a() {
				return (0, r.useContext)(i)
			}

			function l({
				value: e,
				children: t
			}) {
				return r.createElement(i.Provider, {
					value: e
				}, t)
			}
		},
		2622: function(e, t, n) {
			"use strict";

			function r(...e) {
				return e.filter(Boolean).join(" ")
			}
			n.d(t, {
				A: function() {
					return r
				}
			})
		},
		8366: function(e, t, n) {
			"use strict";
			n.d(t, {
				O: function() {
					return s
				}
			});
			var r = Object.defineProperty,
				i = (e, t, n) => (((e, t, n) => {
					t in e ? r(e, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n
				})(e, "symbol" != typeof t ? t + "" : t, n), n);
			let s = new class {
				constructor() {
					i(this, "current", this.detect()), i(this, "handoffState", "pending"), i(this, "currentId", 0)
				}
				set(e) {
					this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
				}
				reset() {
					this.set(this.detect())
				}
				nextId() {
					return ++this.currentId
				}
				get isServer() {
					return "server" === this.current
				}
				get isClient() {
					return "client" === this.current
				}
				detect() {
					return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
				}
				handoff() {
					"pending" === this.handoffState && (this.handoffState = "complete")
				}
				get isHandoffComplete() {
					return "complete" === this.handoffState
				}
			}
		},
		7953: function(e, t, n) {
			"use strict";

			function r(e, t, ...n) {
				if (e in t) {
					let r = t[e];
					return "function" == typeof r ? r(...n) : r
				}
				let i = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
				throw Error.captureStackTrace && Error.captureStackTrace(i, r), i
			}
			n.d(t, {
				E: function() {
					return r
				}
			})
		},
		6661: function(e, t, n) {
			"use strict";

			function r(e) {
				"function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch((e => setTimeout((() => {
					throw e
				}))))
			}
			n.d(t, {
				Y: function() {
					return r
				}
			})
		},
		6616: function(e, t, n) {
			"use strict";
			n.d(t, {
				AN: function() {
					return l
				},
				l4: function() {
					return u
				},
				sY: function() {
					return c
				},
				yV: function() {
					return h
				}
			});
			var r, i, s = n(7378),
				o = n(2622),
				a = n(7953),
				l = ((i = l || {})[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i),
				u = ((r = u || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

			function c({
				ourProps: e,
				theirProps: t,
				slot: n,
				defaultTag: r,
				features: i,
				visible: s = !0,
				name: o
			}) {
				let l = f(t, e);
				if (s) return d(l, n, r, o);
				let u = null != i ? i : 0;
				if (2 & u) {
					let {
						static: e = !1,
						...t
					} = l;
					if (e) return d(t, n, r, o)
				}
				if (1 & u) {
					let {
						unmount: e = !0,
						...t
					} = l;
					return (0, a.E)(e ? 0 : 1, {
						0: () => null,
						1: () => d({
							...t,
							hidden: !0,
							style: {
								display: "none"
							}
						}, n, r, o)
					})
				}
				return d(l, n, r, o)
			}

			function d(e, t = {}, n, r) {
				var i;
				let {
					as: a = n,
					children: l,
					refName: u = "ref",
					...c
				} = p(e, ["unmount", "static"]), d = void 0 !== e.ref ? {
					[u]: e.ref
				} : {}, h = "function" == typeof l ? l(t) : l;
				"className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
				let v = {};
				if (t) {
					let e = !1,
						n = [];
					for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
					e && (v["data-headlessui-state"] = n.join(" "))
				}
				if (a === s.Fragment && Object.keys(m(c)).length > 0) {
					if (!(0, s.isValidElement)(h) || Array.isArray(h) && h.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
					let e = (0, o.A)(null == (i = h.props) ? void 0 : i.className, c.className),
						t = e ? {
							className: e
						} : {};
					return (0, s.cloneElement)(h, Object.assign({}, f(h.props, m(p(c, ["ref"]))), v, d, function(...e) {
						return {
							ref: e.every((e => null == e)) ? void 0 : t => {
								for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
							}
						}
					}(h.ref, d.ref), t))
				}
				return (0, s.createElement)(a, Object.assign({}, p(c, ["ref"]), a !== s.Fragment && d, a !== s.Fragment && v), h)
			}

			function f(...e) {
				if (0 === e.length) return {};
				if (1 === e.length) return e[0];
				let t = {},
					n = {};
				for (let r of e)
					for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
				if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map((e => [e, void 0]))));
				for (let r in n) Object.assign(t, {
					[r](e, ...t) {
						let i = n[r];
						for (let n of i) {
							if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
							n(e, ...t)
						}
					}
				});
				return t
			}

			function h(e) {
				var t;
				return Object.assign((0, s.forwardRef)(e), {
					displayName: null != (t = e.displayName) ? t : e.name
				})
			}

			function m(e) {
				let t = Object.assign({}, e);
				for (let n in t) void 0 === t[n] && delete t[n];
				return t
			}

			function p(e, t = []) {
				let n = Object.assign({}, e);
				for (let r of t) r in n && delete n[r];
				return n
			}
		},
		3444: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return o
				}
			});
			var r = n(719);
			var i = n(2126);
			var s = n(2164);

			function o(e) {
				return function(e) {
					if (Array.isArray(e)) return (0, r.Z)(e)
				}(e) || (0, i.Z)(e) || (0, s.Z)(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		}
	},
	function(e) {
		e.O(0, [33, 22, 972, 774, 888, 179], (function() {
			return t = 4379, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);