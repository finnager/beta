"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[313], {
		3513: function(e, s, t) {
			t.d(s, {
				A: function() {
					return o
				}
			});
			var a = t(4246),
				l = t(42),
				i = t.n(l),
				n = t(7983),
				r = t(390),
				c = t(7210),
				d = t(7378);

			function o(e) {
				var s, t = e.features,
					l = e.outerClassName,
					o = e.innerClassName,
					x = function() {
						var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
							s = e >= 768 ? 40 : 32,
							t = Math.max((e - 1152) / 2, 0);
						g(t + s)
					},
					m = {
						2: "grid grid-cols-1 gap-8 sm:grid-cols-2",
						3: "grid grid-cols-1 gap-8 md:grid-cols-3",
						4: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
						6: "grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3",
						8: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
						9: "grid grid-cols-1 gap-8 md:grid-cols-3",
						12: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
					};
				m.hasOwnProperty(t.length) || console.warn("Please pass in a set of features that is ".concat(Object.keys(m).join(", "), " items long"));
				var h = null !== (s = m[t.length]) && void 0 !== s ? s : m[2],
					u = (0, d.useState)(void 0),
					p = u[0],
					g = u[1];
				return (0, d.useLayoutEffect)((function() {
					return window.addEventListener("resize", x), x(),
						function() {
							return window.removeEventListener("resize", x)
						}
				})), (0, a.jsxs)("div", {
					className: i()("relative"),
					children: [p && (0, a.jsx)("div", {
						style: {
							left: p
						},
						className: "pointer-events-none absolute right-0 z-0 translate-y-[-30%]",
						children: (0, a.jsx)(r.Yy, {
							className: "w-full"
						})
					}), (0, a.jsx)("div", {
						className: i()("h-full w-full", l),
						children: (0, a.jsx)(n.l, {
							xPadding: !0,
							className: i()(o, "relative z-10"),
							children: (0, a.jsx)("div", {
								children: (0, a.jsx)("div", {
									className: h,
									children: t.map((function(e, s) {
										return (0, a.jsx)("div", {
											className: "group max-w-sm",
											children: (0, a.jsxs)("div", {
												children: [(0, a.jsxs)("div", {
													className: "flex items-center",
													children: [(0, a.jsx)("div", {
														className: "-ml-2 p-2",
														children: (0, a.jsx)(e.icon, {
															className: "h-5 w-5",
															"aria-hidden": "true"
														})
													}), (0, a.jsx)(c.x, {
														size: "interface-label",
														children: e.name
													})]
												}), (0, a.jsx)(c.x, {
													size: "secondary-text",
													className: "block",
													children: e.description
												})]
											})
										}, s)
									}))
								})
							})
						})
					})]
				})
			}
		},
		1785: function(e, s, t) {
			t.d(s, {
				G: function() {
					return d
				}
			});
			var a = t(4246),
				l = t(42),
				i = t.n(l),
				n = t(7983),
				r = t(7210),
				c = t(1947),
				d = function(e) {
					var s = e.header,
						t = e.tagline,
						l = e.subheader,
						d = e.icon,
						o = e.primaryCTA,
						x = e.secondaryCTA,
						m = e.className;
					return (0, a.jsx)("div", {
						className: i()("", m),
						children: (0, a.jsx)(n.l, {
							xPadding: !0,
							children: (0, a.jsxs)("div", {
								className: "max-w-4xl pb-40 pt-20",
								children: [(0, a.jsxs)("div", {
									className: "flex items-center space-x-2",
									children: [(0, a.jsx)("div", {
										className: "bg-green rounded p-1.5 text-white",
										children: (0, a.jsx)(d, {
											className: "h-5 w-5"
										})
									}), (0, a.jsx)(r.x, {
										size: "interface-label",
										children: t
									})]
								}), (0, a.jsx)("div", {
									className: "mt-2",
									children: (0, a.jsx)(r.x, {
										size: "l-title",
										children: s
									})
								}), (0, a.jsx)("div", {
									className: "mt-4 max-w-md sm:mt-8",
									children: (0, a.jsx)(r.x, {
										size: "body",
										children: l
									})
								}), (0, a.jsx)("div", {
									className: "mt-8 text-center md:text-left",
									children: (0, a.jsxs)("div", {
										className: "flex justify-start space-x-4",
										children: [(0, a.jsx)(c.z, {
											color: "metal",
											href: o.href,
											label: o.text
										}), x && (0, a.jsx)(c.z, {
											color: "metal",
											href: x.href,
											label: x.text
										})]
									})
								})]
							})
						})
					})
				}
		},
		5580: function(e, s, t) {
			t.d(s, {
				h: function() {
					return f
				}
			});
			var a = t(2050),
				l = t(4246),
				i = t(2625),
				n = t(8462),
				r = t(4641),
				c = t(42),
				d = t.n(c),
				o = t(9537),
				x = t(7983),
				m = t(7378),
				h = t(9689),
				u = t(3681),
				p = t(5751),
				g = t(7210);

			function f(e) {
				var s = e.header,
					t = e.scenarios,
					c = e.outerClassName,
					f = e.panelLineCount,
					j = (0, m.useState)(!1),
					v = j[0],
					N = j[1],
					w = (0, m.useState)(0),
					y = w[0],
					b = w[1],
					C = (0, m.useState)(0),
					z = C[0],
					k = C[1],
					L = (0, a.Z)((0, h.YD)({
						triggerOnce: !0,
						rootMargin: "-100px 0px"
					}), 2),
					E = L[0],
					P = L[1];
				return (0, m.useEffect)((function() {
					P && N(!0)
				}), [P]), (0, l.jsx)("div", {
					className: d()(c),
					children: (0, l.jsx)(i.O.Group, {
						selectedIndex: y,
						onChange: function(e) {
							b(e), k(0), N(!0)
						},
						children: function(e) {
							var a = e.selectedIndex;
							return (0, l.jsxs)(l.Fragment, {
								children: [(0, l.jsx)(x.l, {
									xPadding: !0,
									children: (0, l.jsx)("div", {
										ref: E,
										children: (0, l.jsx)(g.x, {
											size: "s-title",
											children: s
										})
									})
								}), (0, l.jsx)(x.l, {
									xPadding: !1,
									children: (0, l.jsx)(i.O.List, {
										className: "scrollbar-hide flex space-x-4 overflow-x-auto px-8 py-4 sm:py-8 md:px-10",
										children: t.map((function(e, s) {
											return (0, l.jsx)(i.O, {
												className: d()("shrink-0 rounded-full px-3 py-1.5", a === s ? "bg-green text-metal-800" : "text-metal-500"),
												children: e.title
											}, e.id)
										}))
									})
								}), (0, l.jsx)(x.l, {
									xPadding: !1,
									children: (0, l.jsx)(i.O.Panels, {
										as: "div",
										className: "",
										children: t.map((function(e, s) {
											return (0, l.jsxs)(i.O.Panel, {
												unmount: !1,
												className: "grid h-full lg:grid-cols-2",
												children: [(0, l.jsxs)("div", {
													className: "flow-root px-8 md:px-10",
													children: [(0, l.jsx)("ul", {
														role: "list",
														className: "-mb-8",
														children: e.entries.map((function(t, i) {
															return (0, l.jsx)("li", {
																children: (0, l.jsxs)("div", {
																	className: "relative pb-8",
																	children: [i !== e.entries.length - 1 ? (0, l.jsx)("span", {
																		className: d()("absolute left-5 top-5 -ml-px h-full w-0.5 transition-all duration-500", z > i && "bg-metal-200", z < i && "bg-transparent"),
																		"aria-hidden": "true"
																	}) : null, (0, l.jsxs)("div", {
																		className: d()("group relative flex h-full items-start space-x-3"),
																		children: [(0, l.jsxs)("div", {
																			className: "relative px-1",
																			children: [(0, l.jsx)("div", {
																				className: d()("flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white transition-all duration-500", z === i && "bg-metal-100 text-metal-800", z > i && "bg-metal-100 text-metal-800", z < i && "bg-metal-100 text-metal-300"),
																				children: (0, l.jsx)(t.icon, {
																					className: "h-5 w-5"
																				})
																			}), (0, l.jsx)(u.M, {
																				children: a === s && z === i && v && (0, l.jsx)(p.E.svg, {
																					className: "absolute left-[-4px] top-[-8px] z-10",
																					height: "48",
																					width: "48",
																					children: (0, l.jsx)(p.E.circle, {
																						cx: "24",
																						cy: "24",
																						r: "20",
																						initial: {
																							pathLength: 0,
																							opacity: 1
																						},
																						transform: "rotate(-90 24 24)",
																						animate: {
																							pathLength: 1,
																							opacity: 1
																						},
																						exit: {
																							opacity: 0
																						},
																						className: "stroke-metal-200",
																						strokeWidth: "2",
																						strokeLinecap: "round",
																						fill: "transparent",
																						transition: {
																							opacity: {
																								duration: 1
																							},
																							pathLength: {
																								duration: 5,
																								type: "tween",
																								ease: "linear"
																							}
																						},
																						onAnimationComplete: function(s) {
																							s.pathLength && (v && z < e.entries.length - 1 ? k((function(e) {
																								return e + 1
																							})) : N(!1))
																						}
																					})
																				}, "".concat(e.id, "-entry-").concat(i))
																			})]
																		}), (0, l.jsxs)("div", {
																			onClick: function() {
																				N(!1), k(i)
																			},
																			className: d()("min-w-0 flex-1  transition-all duration-500", "group-hover:text-metal-500 cursor-pointer", !t.detail && "py-1.5", z >= i && "text-metal-800", z < i && "text-metal-300"),
																			children: [(0, l.jsx)("div", {
																				className: "text-sm font-medium",
																				children: t.header
																			}), t.detail && (0, l.jsx)("div", {
																				className: "mt-1 text-sm",
																				children: t.detail
																			})]
																		})]
																	})]
																})
															}, i)
														}))
													}), (0, l.jsx)("div", {
														className: d()(v ? "opacity-0" : "opacity-100", "my-4 flex transition-all duration-500"),
														children: (0, l.jsxs)("div", {
															className: "hover:bg-metal-100/50 flex items-center space-x-2 rounded p-2",
															onClick: function() {
																k(0), N(!0)
															},
															children: [(0, l.jsx)(r, {
																className: "h-5 w-5"
															}), (0, l.jsx)("button", {
																children: "Replay"
															})]
														})
													})]
												}), (0, l.jsx)("div", {
													className: "overflow-hidden px-4 md:px-0",
													children: (0, l.jsx)(o.h, {
														light: !1,
														lineCount: f,
														outerClassName: "bg-metal-800 text-metal-100 whitespace-pre text-xs md:text-sm shadow-2xl overflow-hidden",
														contentsClassName: "w-full overflow-scroll scrollbar-hide",
														codeClassName: "pr-4 overflow-x-scroll scrollbar-hide",
														children: (0, l.jsx)("div", {
															className: "relative",
															children: e.entries.map((function(e, s) {
																return (0, l.jsxs)(l.Fragment, {
																	children: [s === z && (0, l.jsx)("div", {
																		className: "opacity-0",
																		children: e.panel
																	}), (0, l.jsx)(n.u, {
																		show: s === z,
																		as: "div",
																		enter: "transition-all duration-1000",
																		enterFrom: "opacity-0 translate-x-[2rem]",
																		enterTo: "opacity-100 translate-x-0 ",
																		leave: "transition-all duration-500",
																		leaveFrom: "opacity-100 translate-x-0",
																		leaveTo: "opacity-0 translate-x-[-2rem]",
																		className: "absolute top-0",
																		children: e.panel
																	})]
																})
															}))
														})
													})
												})]
											}, e.id)
										}))
									})
								})]
							})
						}
					})
				})
			}
		}
	}
]);