(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[364], {
		42: function(e, t) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function i() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var u = typeof n;
							if ("string" === u || "number" === u) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var l = i.apply(null, n);
									l && e.push(l)
								}
							} else if ("object" === u) {
								if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
									e.push(n.toString());
									continue
								}
								for (var o in n) r.call(n, o) && n[o] && e.push(o)
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
		9505: function(e, t, n) {
			"use strict";
			n.d(t, {
				p: function() {
					return D
				}
			});
			var r, i = n(7378),
				u = n(7953),
				l = n(6616),
				o = n(2296),
				s = n(2652),
				a = n(7723),
				c = n(4518),
				f = n(1635),
				d = n(2722),
				p = n(458),
				m = n(1981);
			let v = null != (r = i.startTransition) ? r : function(e) {
				e()
			};
			var h, g = ((h = g || {})[h.Open = 0] = "Open", h[h.Closed = 1] = "Closed", h),
				b = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(b || {});
			let E = {
					0: e => ({
						...e,
						disclosureState: (0, u.E)(e.disclosureState, {
							0: 1,
							1: 0
						})
					}),
					1: e => 1 === e.disclosureState ? e : {
						...e,
						disclosureState: 1
					},
					4: e => !0 === e.linkedPanel ? e : {
						...e,
						linkedPanel: !0
					},
					5: e => !1 === e.linkedPanel ? e : {
						...e,
						linkedPanel: !1
					},
					2: (e, t) => e.buttonId === t.buttonId ? e : {
						...e,
						buttonId: t.buttonId
					},
					3: (e, t) => e.panelId === t.panelId ? e : {
						...e,
						panelId: t.panelId
					}
				},
				y = (0, i.createContext)(null);

			function S(e) {
				let t = (0, i.useContext)(y);
				if (null === t) {
					let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(t, S), t
				}
				return t
			}
			y.displayName = "DisclosureContext";
			let w = (0, i.createContext)(null);

			function O(e) {
				let t = (0, i.useContext)(w);
				if (null === t) {
					let t = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(t, O), t
				}
				return t
			}
			w.displayName = "DisclosureAPIContext";
			let P = (0, i.createContext)(null);

			function T(e, t) {
				return (0, u.E)(t.type, E, e, t)
			}
			P.displayName = "DisclosurePanelContext";
			let C = i.Fragment;
			let k = l.AN.RenderStrategy | l.AN.Static;
			let R = (0, l.yV)((function(e, t) {
					let {
						defaultOpen: n = !1,
						...r
					} = e, s = (0, i.useRef)(null), a = (0, o.T)(t, (0, o.h)((e => {
						s.current = e
					}), void 0 === e.as || e.as === i.Fragment)), c = (0, i.useRef)(null), d = (0, i.useRef)(null), v = (0, i.useReducer)(T, {
						disclosureState: n ? 0 : 1,
						linkedPanel: !1,
						buttonRef: d,
						panelRef: c,
						buttonId: null,
						panelId: null
					}), [{
						disclosureState: h,
						buttonId: g
					}, b] = v, E = (0, m.z)((e => {
						b({
							type: 1
						});
						let t = (0, p.r)(s);
						if (!t || !g) return;
						let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(g) : t.getElementById(g);
						null == n || n.focus()
					})), S = (0, i.useMemo)((() => ({
						close: E
					})), [E]), O = (0, i.useMemo)((() => ({
						open: 0 === h,
						close: E
					})), [h, E]), P = {
						ref: a
					};
					return i.createElement(y.Provider, {
						value: v
					}, i.createElement(w.Provider, {
						value: S
					}, i.createElement(f.up, {
						value: (0, u.E)(h, {
							0: f.ZM.Open,
							1: f.ZM.Closed
						})
					}, (0, l.sY)({
						ourProps: P,
						theirProps: r,
						slot: O,
						defaultTag: C,
						name: "Disclosure"
					}))))
				})),
				j = (0, l.yV)((function(e, t) {
					let n = (0, s.M)(),
						{
							id: r = `headlessui-disclosure-button-${n}`,
							...u
						} = e,
						[f, p] = S("Disclosure.Button"),
						v = (0, i.useContext)(P),
						h = null !== v && v === f.panelId,
						g = (0, i.useRef)(null),
						b = (0, o.T)(g, t, h ? null : f.buttonRef);
					(0, i.useEffect)((() => {
						if (!h) return p({
							type: 2,
							buttonId: r
						}), () => {
							p({
								type: 2,
								buttonId: null
							})
						}
					}), [r, p, h]);
					let E = (0, m.z)((e => {
							var t;
							if (h) {
								if (1 === f.disclosureState) return;
								switch (e.key) {
									case a.R.Space:
									case a.R.Enter:
										e.preventDefault(), e.stopPropagation(), p({
											type: 0
										}), null == (t = f.buttonRef.current) || t.focus()
								}
							} else switch (e.key) {
								case a.R.Space:
								case a.R.Enter:
									e.preventDefault(), e.stopPropagation(), p({
										type: 0
									})
							}
						})),
						y = (0, m.z)((e => {
							if (e.key === a.R.Space) e.preventDefault()
						})),
						w = (0, m.z)((t => {
							var n;
							(0, c.P)(t.currentTarget) || e.disabled || (h ? (p({
								type: 0
							}), null == (n = f.buttonRef.current) || n.focus()) : p({
								type: 0
							}))
						})),
						O = (0, i.useMemo)((() => ({
							open: 0 === f.disclosureState
						})), [f]),
						T = (0, d.f)(e, g),
						C = h ? {
							ref: b,
							type: T,
							onKeyDown: E,
							onClick: w
						} : {
							ref: b,
							id: r,
							type: T,
							"aria-expanded": e.disabled ? void 0 : 0 === f.disclosureState,
							"aria-controls": f.linkedPanel ? f.panelId : void 0,
							onKeyDown: E,
							onKeyUp: y,
							onClick: w
						};
					return (0, l.sY)({
						ourProps: C,
						theirProps: u,
						slot: O,
						defaultTag: "button",
						name: "Disclosure.Button"
					})
				})),
				F = (0, l.yV)((function(e, t) {
					let n = (0, s.M)(),
						{
							id: r = `headlessui-disclosure-panel-${n}`,
							...u
						} = e,
						[a, c] = S("Disclosure.Panel"),
						{
							close: d
						} = O("Disclosure.Panel"),
						p = (0, o.T)(t, a.panelRef, (e => {
							v((() => c({
								type: e ? 4 : 5
							})))
						}));
					(0, i.useEffect)((() => (c({
						type: 3,
						panelId: r
					}), () => {
						c({
							type: 3,
							panelId: null
						})
					})), [r, c]);
					let m = (0, f.oJ)(),
						h = null !== m ? (m & f.ZM.Open) === f.ZM.Open : 0 === a.disclosureState,
						g = (0, i.useMemo)((() => ({
							open: 0 === a.disclosureState,
							close: d
						})), [a, d]),
						b = {
							ref: p,
							id: r
						};
					return i.createElement(P.Provider, {
						value: a.panelId
					}, (0, l.sY)({
						ourProps: b,
						theirProps: u,
						slot: g,
						defaultTag: "div",
						features: k,
						visible: h,
						name: "Disclosure.Panel"
					}))
				})),
				D = Object.assign(R, {
					Button: j,
					Panel: F
				})
		},
		7723: function(e, t, n) {
			"use strict";
			n.d(t, {
				R: function() {
					return i
				}
			});
			var r, i = ((r = i || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
		},
		8462: function(e, t, n) {
			"use strict";
			n.d(t, {
				u: function() {
					return N
				}
			});
			var r = n(7378),
				i = n(6616),
				u = n(1635),
				l = n(7953),
				o = n(5804);

			function s() {
				let e = (0, r.useRef)(!1);
				return (0, o.e)((() => (e.current = !0, () => {
					e.current = !1
				})), []), e
			}
			var a = n(7349),
				c = n(1074),
				f = n(2296);
			var d = n(6661);

			function p() {
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
							return (0, d.Y)((() => {
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
							let t = p();
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

			function v(e, ...t) {
				e && t.length > 0 && e.classList.remove(...t)
			}

			function h(e, t, n, r) {
				let i = n ? "enter" : "leave",
					u = p(),
					o = void 0 !== r ? function(e) {
						let t = {
							called: !1
						};
						return (...n) => {
							if (!t.called) return t.called = !0, e(...n)
						}
					}(r) : () => {};
				"enter" === i && (e.removeAttribute("hidden"), e.style.display = "");
				let s = (0, l.E)(i, {
						enter: () => t.enter,
						leave: () => t.leave
					}),
					a = (0, l.E)(i, {
						enter: () => t.enterTo,
						leave: () => t.leaveTo
					}),
					c = (0, l.E)(i, {
						enter: () => t.enterFrom,
						leave: () => t.leaveFrom
					});
				return v(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), m(e, ...s, ...c), u.nextFrame((() => {
					v(e, ...c), m(e, ...a),
						function(e, t) {
							let n = p();
							if (!e) return n.dispose;
							let {
								transitionDuration: r,
								transitionDelay: i
							} = getComputedStyle(e), [u, l] = [r, i].map((e => {
								let [t = 0] = e.split(",").filter(Boolean).map((e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e, t) => t - e));
								return t
							})), o = u + l;
							if (0 !== o) {
								n.group((n => {
									n.setTimeout((() => {
										t(), n.dispose()
									}), o), n.addEventListener(e, "transitionrun", (e => {
										e.target === e.currentTarget && n.dispose()
									}))
								}));
								let r = n.addEventListener(e, "transitionend", (e => {
									e.target === e.currentTarget && (t(), r())
								}))
							} else t();
							n.add((() => t())), n.dispose
						}(e, (() => (v(e, ...s), m(e, ...t.entered), o())))
				})), u.dispose
			}

			function g() {
				let [e] = (0, r.useState)(p);
				return (0, r.useEffect)((() => () => e.dispose()), [e]), e
			}

			function b({
				container: e,
				direction: t,
				classes: n,
				onStart: r,
				onStop: i
			}) {
				let u = s(),
					l = g(),
					c = (0, a.E)(t);
				(0, o.e)((() => {
					let t = p();
					l.add(t.dispose);
					let o = e.current;
					if (o && "idle" !== c.current && u.current) return t.dispose(), r.current(c.current), t.add(h(o, n.current, "enter" === c.current, (() => {
						t.dispose(), i.current(c.current)
					}))), t.dispose
				}), [t])
			}
			var E = n(1981),
				y = n(2622),
				S = n(8366);

			function w(e = "") {
				return e.split(" ").filter((e => e.trim().length > 1))
			}
			let O = (0, r.createContext)(null);
			O.displayName = "TransitionContext";
			var P, T = ((P = T || {}).Visible = "visible", P.Hidden = "hidden", P);
			let C = (0, r.createContext)(null);

			function k(e) {
				return "children" in e ? k(e.children) : e.current.filter((({
					el: e
				}) => null !== e.current)).filter((({
					state: e
				}) => "visible" === e)).length > 0
			}

			function R(e, t) {
				let n = (0, a.E)(e),
					u = (0, r.useRef)([]),
					o = s(),
					c = g(),
					f = (0, E.z)(((e, t = i.l4.Hidden) => {
						let r = u.current.findIndex((({
							el: t
						}) => t === e)); - 1 !== r && ((0, l.E)(t, {
							[i.l4.Unmount]() {
								u.current.splice(r, 1)
							},
							[i.l4.Hidden]() {
								u.current[r].state = "hidden"
							}
						}), c.microTask((() => {
							var e;
							!k(u) && o.current && (null == (e = n.current) || e.call(n))
						})))
					})),
					d = (0, E.z)((e => {
						let t = u.current.find((({
							el: t
						}) => t === e));
						return t ? "visible" !== t.state && (t.state = "visible") : u.current.push({
							el: e,
							state: "visible"
						}), () => f(e, i.l4.Unmount)
					})),
					p = (0, r.useRef)([]),
					m = (0, r.useRef)(Promise.resolve()),
					v = (0, r.useRef)({
						enter: [],
						leave: [],
						idle: []
					}),
					h = (0, E.z)(((e, n, r) => {
						p.current.splice(0), t && (t.chains.current[n] = t.chains.current[n].filter((([t]) => t !== e))), null == t || t.chains.current[n].push([e, new Promise((e => {
							p.current.push(e)
						}))]), null == t || t.chains.current[n].push([e, new Promise((e => {
							Promise.all(v.current[n].map((([e, t]) => t))).then((() => e()))
						}))]), "enter" === n ? m.current = m.current.then((() => null == t ? void 0 : t.wait.current)).then((() => r(n))) : r(n)
					})),
					b = (0, E.z)(((e, t, n) => {
						Promise.all(v.current[t].splice(0).map((([e, t]) => t))).then((() => {
							var e;
							null == (e = p.current.shift()) || e()
						})).then((() => n(t)))
					}));
				return (0, r.useMemo)((() => ({
					children: u,
					register: d,
					unregister: f,
					onStart: h,
					onStop: b,
					wait: m,
					chains: v
				})), [d, f, u, h, b, v, m])
			}

			function j() {}
			C.displayName = "NestingContext";
			let F = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

			function D(e) {
				var t;
				let n = {};
				for (let r of F) n[r] = null != (t = e[r]) ? t : j;
				return n
			}
			let I = i.AN.RenderStrategy;
			let A = (0, i.yV)((function(e, t) {
					let {
						show: n,
						appear: l = !1,
						unmount: s,
						...a
					} = e, d = (0, r.useRef)(null), p = (0, f.T)(d, t);
					(0, c.H)();
					let m = (0, u.oJ)();
					if (void 0 === n && null !== m && (n = (m & u.ZM.Open) === u.ZM.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
					let [v, h] = (0, r.useState)(n ? "visible" : "hidden"), g = R((() => {
						h("hidden")
					})), [b, E] = (0, r.useState)(!0), y = (0, r.useRef)([n]);
					(0, o.e)((() => {
						!1 !== b && y.current[y.current.length - 1] !== n && (y.current.push(n), E(!1))
					}), [y, n]);
					let S = (0, r.useMemo)((() => ({
						show: n,
						appear: l,
						initial: b
					})), [n, l, b]);
					(0, r.useEffect)((() => {
						if (n) h("visible");
						else if (k(g)) {
							let e = d.current;
							if (!e) return;
							let t = e.getBoundingClientRect();
							0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && h("hidden")
						} else h("hidden")
					}), [n, g]);
					let w = {
						unmount: s
					};
					return r.createElement(C.Provider, {
						value: g
					}, r.createElement(O.Provider, {
						value: S
					}, (0, i.sY)({
						ourProps: {
							...w,
							as: r.Fragment,
							children: r.createElement(x, {
								ref: p,
								...w,
								...a
							})
						},
						theirProps: {},
						defaultTag: r.Fragment,
						features: I,
						visible: "visible" === v,
						name: "Transition"
					})))
				})),
				x = (0, i.yV)((function(e, t) {
					let {
						beforeEnter: n,
						afterEnter: o,
						beforeLeave: s,
						afterLeave: d,
						enter: p,
						enterFrom: m,
						enterTo: v,
						entered: h,
						leave: g,
						leaveFrom: P,
						leaveTo: T,
						...j
					} = e, F = (0, r.useRef)(null), A = (0, f.T)(F, t), x = j.unmount ? i.l4.Unmount : i.l4.Hidden, {
						show: M,
						appear: N,
						initial: L
					} = function() {
						let e = (0, r.useContext)(O);
						if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return e
					}(), [H, B] = (0, r.useState)(M ? "visible" : "hidden"), Z = function() {
						let e = (0, r.useContext)(C);
						if (null === e) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return e
					}(), {
						register: z,
						unregister: U
					} = Z, V = (0, r.useRef)(null);
					(0, r.useEffect)((() => z(F)), [z, F]), (0, r.useEffect)((() => {
						if (x === i.l4.Hidden && F.current) return M && "visible" !== H ? void B("visible") : (0, l.E)(H, {
							hidden: () => U(F),
							visible: () => z(F)
						})
					}), [H, F, z, U, M, x]);
					let $ = (0, a.E)({
							enter: w(p),
							enterFrom: w(m),
							enterTo: w(v),
							entered: w(h),
							leave: w(g),
							leaveFrom: w(P),
							leaveTo: w(T)
						}),
						Y = function(e) {
							let t = (0, r.useRef)(D(e));
							return (0, r.useEffect)((() => {
								t.current = D(e)
							}), [e]), t
						}({
							beforeEnter: n,
							afterEnter: o,
							beforeLeave: s,
							afterLeave: d
						}),
						q = (0, c.H)();
					(0, r.useEffect)((() => {
						if (q && "visible" === H && null === F.current) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
					}), [F, H, q]);
					let J = L && !N,
						_ = !q || J || V.current === M ? "idle" : M ? "enter" : "leave",
						K = function(e = 0) {
							let [t, n] = (0, r.useState)(e), i = (0, r.useCallback)((e => n((t => t | e))), [t]), u = (0, r.useCallback)((e => Boolean(t & e)), [t]), l = (0, r.useCallback)((e => n((t => t & ~e))), [n]), o = (0, r.useCallback)((e => n((t => t ^ e))), [n]);
							return {
								flags: t,
								addFlag: i,
								hasFlag: u,
								removeFlag: l,
								toggleFlag: o
							}
						}(0),
						W = (0, E.z)((e => (0, l.E)(e, {
							enter: () => {
								K.addFlag(u.ZM.Opening), Y.current.beforeEnter()
							},
							leave: () => {
								K.addFlag(u.ZM.Closing), Y.current.beforeLeave()
							},
							idle: () => {}
						}))),
						G = (0, E.z)((e => (0, l.E)(e, {
							enter: () => {
								K.removeFlag(u.ZM.Opening), Y.current.afterEnter()
							},
							leave: () => {
								K.removeFlag(u.ZM.Closing), Y.current.afterLeave()
							},
							idle: () => {}
						}))),
						Q = R((() => {
							B("hidden"), U(F)
						}), Z);
					b({
						container: F,
						classes: $,
						direction: _,
						onStart: (0, a.E)((e => {
							Q.onStart(F, e, W)
						})),
						onStop: (0, a.E)((e => {
							Q.onStop(F, e, G), "leave" === e && !k(Q) && (B("hidden"), U(F))
						}))
					}), (0, r.useEffect)((() => {
						J && (x === i.l4.Hidden ? V.current = null : V.current = M)
					}), [M, J, H]);
					let X = j,
						ee = {
							ref: A
						};
					return N && M && S.O.isServer && (X = {
						...X,
						className: (0, y.A)(j.className, ...$.current.enter, ...$.current.enterFrom)
					}), r.createElement(C.Provider, {
						value: Q
					}, r.createElement(u.up, {
						value: (0, l.E)(H, {
							visible: u.ZM.Open,
							hidden: u.ZM.Closed
						}) | K.flags
					}, (0, i.sY)({
						ourProps: ee,
						theirProps: X,
						defaultTag: "div",
						features: I,
						visible: "visible" === H,
						name: "Transition.Child"
					})))
				})),
				M = (0, i.yV)((function(e, t) {
					let n = null !== (0, r.useContext)(O),
						i = null !== (0, u.oJ)();
					return r.createElement(r.Fragment, null, !n && i ? r.createElement(A, {
						ref: t,
						...e
					}) : r.createElement(x, {
						ref: t,
						...e
					}))
				})),
				N = Object.assign(A, {
					Child: M,
					Root: A
				})
		},
		1981: function(e, t, n) {
			"use strict";
			n.d(t, {
				z: function() {
					return u
				}
			});
			var r = n(7378),
				i = n(7349);
			let u = function(e) {
				let t = (0, i.E)(e);
				return r.useCallback(((...e) => t.current(...e)), [t])
			}
		},
		2652: function(e, t, n) {
			"use strict";
			n.d(t, {
				M: function() {
					return s
				}
			});
			var r, i = n(7378),
				u = n(5804),
				l = n(1074),
				o = n(8366);
			let s = null != (r = i.useId) ? r : function() {
				let e = (0, l.H)(),
					[t, n] = i.useState(e ? () => o.O.nextId() : null);
				return (0, u.e)((() => {
					null === t && n(o.O.nextId())
				}), [t]), null != t ? "" + t : void 0
			}
		},
		5804: function(e, t, n) {
			"use strict";
			n.d(t, {
				e: function() {
					return u
				}
			});
			var r = n(7378),
				i = n(8366);
			let u = (e, t) => {
				i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
			}
		},
		7349: function(e, t, n) {
			"use strict";
			n.d(t, {
				E: function() {
					return u
				}
			});
			var r = n(7378),
				i = n(5804);

			function u(e) {
				let t = (0, r.useRef)(e);
				return (0, i.e)((() => {
					t.current = e
				}), [e]), t
			}
		},
		2722: function(e, t, n) {
			"use strict";
			n.d(t, {
				f: function() {
					return l
				}
			});
			var r = n(7378),
				i = n(5804);

			function u(e) {
				var t;
				if (e.type) return e.type;
				let n = null != (t = e.as) ? t : "button";
				return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
			}

			function l(e, t) {
				let [n, l] = (0, r.useState)((() => u(e)));
				return (0, i.e)((() => {
					l(u(e))
				}), [e.type, e.as]), (0, i.e)((() => {
					n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && l("button")
				}), [n, t]), n
			}
		},
		1074: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: function() {
					return u
				}
			});
			var r = n(7378),
				i = n(8366);

			function u() {
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
					return o
				},
				h: function() {
					return l
				}
			});
			var r = n(7378),
				i = n(1981);
			let u = Symbol();

			function l(e, t = !0) {
				return Object.assign(e, {
					[u]: t
				})
			}

			function o(...e) {
				let t = (0, r.useRef)(e);
				(0, r.useEffect)((() => {
					t.current = e
				}), [e]);
				let n = (0, i.z)((e => {
					for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
				}));
				return e.every((e => null == e || (null == e ? void 0 : e[u]))) ? void 0 : n
			}
		},
		1635: function(e, t, n) {
			"use strict";
			n.d(t, {
				ZM: function() {
					return l
				},
				oJ: function() {
					return o
				},
				up: function() {
					return s
				}
			});
			var r = n(7378);
			let i = (0, r.createContext)(null);
			i.displayName = "OpenClosedContext";
			var u, l = ((u = l || {})[u.Open = 1] = "Open", u[u.Closed = 2] = "Closed", u[u.Closing = 4] = "Closing", u[u.Opening = 8] = "Opening", u);

			function o() {
				return (0, r.useContext)(i)
			}

			function s({
				value: e,
				children: t
			}) {
				return r.createElement(i.Provider, {
					value: e
				}, t)
			}
		},
		4518: function(e, t, n) {
			"use strict";

			function r(e) {
				let t = e.parentElement,
					n = null;
				for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
				let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
				return (!r || ! function(e) {
					if (!e) return !1;
					let t = e.previousElementSibling;
					for (; null !== t;) {
						if (t instanceof HTMLLegendElement) return !1;
						t = t.previousElementSibling
					}
					return !0
				}(n)) && r
			}
			n.d(t, {
				P: function() {
					return r
				}
			})
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
					return u
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
			let u = new class {
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
		458: function(e, t, n) {
			"use strict";
			n.d(t, {
				r: function() {
					return i
				}
			});
			var r = n(8366);

			function i(e) {
				return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
			}
		},
		6616: function(e, t, n) {
			"use strict";
			n.d(t, {
				AN: function() {
					return s
				},
				l4: function() {
					return a
				},
				sY: function() {
					return c
				},
				yV: function() {
					return p
				}
			});
			var r, i, u = n(7378),
				l = n(2622),
				o = n(7953),
				s = ((i = s || {})[i.None = 0] = "None", i[i.RenderStrategy = 1] = "RenderStrategy", i[i.Static = 2] = "Static", i),
				a = ((r = a || {})[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r);

			function c({
				ourProps: e,
				theirProps: t,
				slot: n,
				defaultTag: r,
				features: i,
				visible: u = !0,
				name: l
			}) {
				let s = d(t, e);
				if (u) return f(s, n, r, l);
				let a = null != i ? i : 0;
				if (2 & a) {
					let {
						static: e = !1,
						...t
					} = s;
					if (e) return f(t, n, r, l)
				}
				if (1 & a) {
					let {
						unmount: e = !0,
						...t
					} = s;
					return (0, o.E)(e ? 0 : 1, {
						0: () => null,
						1: () => f({
							...t,
							hidden: !0,
							style: {
								display: "none"
							}
						}, n, r, l)
					})
				}
				return f(s, n, r, l)
			}

			function f(e, t = {}, n, r) {
				var i;
				let {
					as: o = n,
					children: s,
					refName: a = "ref",
					...c
				} = v(e, ["unmount", "static"]), f = void 0 !== e.ref ? {
					[a]: e.ref
				} : {}, p = "function" == typeof s ? s(t) : s;
				"className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
				let h = {};
				if (t) {
					let e = !1,
						n = [];
					for (let [r, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
					e && (h["data-headlessui-state"] = n.join(" "))
				}
				if (o === u.Fragment && Object.keys(m(c)).length > 0) {
					if (!(0, u.isValidElement)(p) || Array.isArray(p) && p.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map((e => `  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e => `  - ${e}`)).join("\n")].join("\n"));
					let e = (0, l.A)(null == (i = p.props) ? void 0 : i.className, c.className),
						t = e ? {
							className: e
						} : {};
					return (0, u.cloneElement)(p, Object.assign({}, d(p.props, m(v(c, ["ref"]))), h, f, function(...e) {
						return {
							ref: e.every((e => null == e)) ? void 0 : t => {
								for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
							}
						}
					}(p.ref, f.ref), t))
				}
				return (0, u.createElement)(o, Object.assign({}, v(c, ["ref"]), o !== u.Fragment && f, o !== u.Fragment && h), p)
			}

			function d(...e) {
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

			function p(e) {
				var t;
				return Object.assign((0, u.forwardRef)(e), {
					displayName: null != (t = e.displayName) ? t : e.name
				})
			}

			function m(e) {
				let t = Object.assign({}, e);
				for (let n in t) void 0 === t[n] && delete t[n];
				return t
			}

			function v(e, t = []) {
				let n = Object.assign({}, e);
				for (let r of t) r in n && delete n[r];
				return n
			}
		},
		169: function(e, t, n) {
			"use strict";

			function r(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}(Object(t)).forEach((function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				})), e
			}
			n.d(t, {
				Z: function() {
					return r
				}
			})
		}
	}
]);