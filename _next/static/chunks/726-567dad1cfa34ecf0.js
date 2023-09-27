(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[726], {
		5960: function(e, s, a) {
			"use strict";
			a.d(s, {
				y: function() {
					return i
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = function(e) {
					var s = e.gutterBackground,
						a = void 0 !== s && s,
						r = e.gutterBorder,
						i = void 0 !== r && r,
						c = e.colBackground,
						l = void 0 !== c && c,
						d = e.colBorder,
						o = void 0 !== d && d;
					return (0, n.jsx)("div", {
						className: t()("pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen\t"),
						children: (0, n.jsx)("div", {
							className: t()("border-metal-500 z-50 h-full max-w-6xl px-8 md:mx-auto md:px-10", a && "bg-red/30", i && "border-x border-dashed"),
							children: (0, n.jsx)("div", {
								className: t()("border-metal-500 h-full", l && "bg-lime/30", o && "border-x border-dashed")
							})
						})
					})
				}
		},
		7983: function(e, s, a) {
			"use strict";
			a.d(s, {
				l: function() {
					return i
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = function(e) {
					var s = e.className,
						a = e.xPadding,
						r = e.children;
					return (0, n.jsx)("div", {
						className: t()(s, "w-full max-w-6xl md:mx-auto ", a && "px-8 md:px-10"),
						children: r
					})
				}
		},
		1237: function(e, s, a) {
			"use strict";
			a.d(s, {
				T: function() {
					return x
				}
			});
			var n, r = a(3444),
				t = a(4246),
				i = a(2625),
				c = a(42),
				l = a.n(c),
				d = a(7983),
				o = a(4093),
				m = a(9537),
				u = a(7210),
				x = function(e) {
					var s = e.header,
						a = void 0 === s ? (0, t.jsxs)("span", {
							children: [(0, t.jsx)("span", {
								children: "If it can be done,"
							}), (0, t.jsx)("br", {}), "it can be done programmatically."]
						}) : s,
						c = e.features,
						x = e.treatment,
						h = e.outerClassName;
					return (0, t.jsx)(i.O.Group, {
						as: "div",
						className: l()(h),
						children: function(e) {
							var s = e.selectedIndex;
							return (0, t.jsxs)(t.Fragment, {
								children: [(0, t.jsx)(d.l, {
									xPadding: !0,
									children: (0, t.jsx)("div", {
										className: "max-w-xl",
										children: (0, t.jsx)(u.x, {
											size: "s-title",
											className: l()("dark-bg" === x && "text-white"),
											children: a
										})
									})
								}), (0, t.jsx)(d.l, {
									xPadding: !1,
									children: (0, t.jsx)(i.O.List, {
										className: "scrollbar-hide flex space-x-4 overflow-x-auto px-8 pt-4 md:px-10 md:py-8",
										children: c.map((function(e, a) {
											return (0, t.jsx)(i.O, {
												className: l()("shrink-0 rounded-full px-3 py-1.5", s === a ? "bg-green text-metal-800" : "text-metal-500"),
												children: e.title
											}, e.title)
										}))
									})
								}), (0, t.jsx)(d.l, {
									xPadding: !1,
									children: (0, t.jsx)(i.O.Panels, {
										as: "div",
										className: l()("", "light-bg" === x && "md:border-metal-100 md:bg-metal-50 md:rounded md:border", "dark-bg" === x && "md:text-metal-800 text-white md:rounded md:bg-white"),
										children: c.map((function(e) {
											return (0, t.jsxs)(i.O.Panel, {
												unmount: !1,
												className: "grid h-full grid-cols-1 md:grid-cols-2",
												children: [(0, t.jsx)("div", {
													className: "px-8 py-4 md:p-10 md:pr-12",
													children: (0, t.jsx)("div", {
														className: "max-w-md space-y-2",
														children: (0, t.jsx)("div", {
															children: (0, t.jsx)(u.x, {
																size: "body",
																children: e.description
															})
														})
													})
												}), (0, t.jsx)("div", {
													className: "px-4 md:px-0",
													children: (0, t.jsx)(m.h, {
														light: !1,
														header: {
															include: !0
														},
														lineCount: (n = Math).max.apply(n, (0, r.Z)(c.map((function(e) {
															return e.snippet.split("\n").length + 1
														})))),
														outerClassName: l()("text-xs md:text-sm whitespace-pre overflow-hidden shadow-2xl", "light-bg" === x && "bg-metal-800", "dark-bg" === x && "bg-metal-900"),
														contentsClassName: "w-full overflow-scroll scrollbar-hide",
														codeClassName: "pr-4",
														children: (0, t.jsx)(o.T, {
															language: "curl",
															code: e.snippet
														})
													})
												})]
											}, e.title)
										}))
									})
								})]
							})
						}
					})
				}
		},
		390: function(e, s, a) {
			"use strict";
			a.d(s, {
				Yy: function() {
					return o
				},
				bS: function() {
					return l
				},
				ks: function() {
					return c
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = .78,
				c = .15,
				l = (1 - 4 * c) / 3,
				d = (1 - i) / 3,
				o = function(e) {
					var s, a = ["linear-gradient(100grad,var(--lime),#aafc62)", "linear-gradient(100grad,#83fb26,#46f558)", "linear-gradient(100grad,#7cf88a,#48f5b8)", "linear-gradient(100grad,#08ef99,#00e2be)", "linear-gradient(100grad,#32ebd3,#33dbe3)", "linear-gradient(100grad,#00c9d5,#00b4e9)", "linear-gradient(100grad,#33ccf0,#34bbff)"],
						r = "slow" === e.animated ? 1.5 : 1,
						i = null !== (s = e.animationDelay) && void 0 !== s ? s : 0,
						o = .18 * r,
						m = .12 * r;
					return (0, n.jsx)("div", {
						className: t()("pointer-events-none relative aspect-[128/75]", e.className),
						children: Array(7).fill("-").map((function(s, r) {
							var u = r % 2 === 0,
								x = 6 === r;
							return (0, n.jsx)("div", {
								style: {
									animationFillMode: "backwards",
									animationDuration: x ? "2s" : "".concat(o, "s"),
									animationDelay: "".concat(i + r * m, "s"),
									animationTimingFunction: x ? "cubic-bezier(0.23, 1, 0.32, 1)" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
									background: a[r],
									left: "".concat(100 * (Math.floor((r + 1) / 2) * c + Math.floor(r / 2) * l), "%"),
									height: "".concat(u ? 78 : 70.66666666666667, "%"),
									width: "".concat(u ? 100 * c : 100 * l, "%"),
									top: "".concat(Math.floor((7 - r) / 2) * d * 100, "%"),
									clipPath: u ? void 0 : "polygon(0 0, 100% 41%, 100% 100%, 0 59%)"
								},
								className: t()("absolute", u && "z-10 origin-bottom", e.animated && (u ? "animate-squigglebar" : "animate-squigglediagonal"))
							}, r)
						}))
					})
				}
		},
		9537: function(e, s, a) {
			"use strict";
			a.d(s, {
				h: function() {
					return o
				}
			});
			var n = a(4246),
				r = a(7927),
				t = a(6652),
				i = a(3468),
				c = a(2604),
				l = a(42),
				d = a.n(l),
				o = function(e) {
					var s = e.light,
						a = e.lineCount,
						l = e.header,
						o = void 0 === l ? {
							include: !0
						} : l,
						m = e.children,
						u = e.outerClassName,
						x = e.contentsClassName,
						h = e.codeClassName;
					return (0, n.jsxs)("div", {
						className: d()("rounded border font-mono", u, s ? "border-metal-100" : "border-metal-700"),
						children: [o && (0, n.jsxs)("div", {
							className: d()(s ? "border-metal-50" : "border-metal-700", " text-metal-300 flex border-b pb-3 pt-4"),
							children: [(0, n.jsxs)("div", {
								className: "flex w-20 items-center space-x-1.5 px-3",
								children: [(0, n.jsx)("div", {
									className: "bg-red h-2.5 w-2.5 rounded-full"
								}), (0, n.jsx)("div", {
									className: "bg-lime h-2.5 w-2.5 rounded-full"
								}), (0, n.jsx)("div", {
									className: "bg-green h-2.5 w-2.5 rounded-full"
								})]
							}), o.fileName && (0, n.jsx)("div", {
								className: "grow text-center",
								children: o.fileName
							}), (0, n.jsx)("div", {
								className: "flex w-20 items-center justify-end space-x-2 pr-2",
								children: "horizontal" === o.tabDirection && (0, n.jsxs)(n.Fragment, {
									children: [(0, n.jsx)(r, {
										className: "text-blue h-4 w-4"
									}), (0, n.jsx)(t, {
										className: "text-blue h-4 w-4"
									})]
								})
							}), "vertical" === o.tabDirection && (0, n.jsxs)("div", {
								className: "flex w-20 items-center justify-end space-x-2 pr-2",
								children: [(0, n.jsx)(i, {
									className: "text-blue h-4 w-4"
								}), (0, n.jsx)(c, {
									className: "text-blue h-4 w-4"
								})]
							})]
						}), (0, n.jsxs)("div", {
							className: d()("flex grow flex-row", x),
							children: [(0, n.jsx)("div", {
								"aria-hidden": "true",
								className: "text-metal-100 hidden w-[30px] flex-none select-none py-4 text-right md:block",
								children: Array(a).fill("_").map((function(e, s) {
									return s + 1
								})).map((function(e) {
									return (0, n.jsx)("div", {
										children: e
									}, e)
								}))
							}), (0, n.jsx)("div", {
								className: "py-4 pl-4",
								children: (0, n.jsx)("div", {
									className: h,
									children: m
								})
							})]
						})]
					})
				}
		},
		338: function(e, s, a) {
			"use strict";
			a.d(s, {
				$: function() {
					return l
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = a(3707),
				c = a(7983),
				l = function(e) {
					var s = e.innerClassName,
						a = e.outerClassName,
						r = {
							products: [{
								name: "Identity",
								href: "#/products/identity"
							}, {
								name: "Auth",
								href: "#/products/auth"
							}, {
								name: "Details",
								href: "#/products/details"
							}, {
								name: "Transactions",
								href: "#/products/transactions"
							}, {
								name: "Balance",
								href: "#/products/balance"
							}, {
								name: "Credit Reports",
								href: "#/products/reports"
							}],
							useCases: [{
								name: "Fintech",
								href: "#/use-cases/fintech"
							}, {
								name: "Commercial Banking",
								href: "#/use-cases/commercial-banking"
							}],
							developers: [{
								name: "Documentation",
								href: "#/documentation"
							}, {
								name: "API Reference",
								href: "#/documentation/api"
							}, {
								name: "Status",
								href: "#https://status.finnager.com"
							}],
							company: [{
								name: "Pricing",
								href: "#/fees"
							}, {
								name: "Privacy",
								href: "#/privacy"
							}, {
								name: "Security",
								href: "#/security"
							}, {
								name: "Terms",
								href: "#/terms"
							}]
						};
					return (0, n.jsx)("div", {
						className: a,
						children: (0, n.jsx)(c.l, {
							xPadding: !0,
							className: t()(s, "py-20"),
							children: (0, n.jsxs)("div", {
								className: "md:grid md:grid-cols-3 md:gap-8",
								children: [(0, n.jsxs)("div", {
									className: "space-y-8 md:col-span-1",
									children: [ (0, n.jsx)("p", {
										className: "text-metal-500 text-sm",
										children: "© 2023"
									}),
									]
								}), (0, n.jsxs)("div", {
									className: "mt-12 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0",
									children: [(0, n.jsxs)("div", {
										className: "md:grid md:grid-cols-2 md:gap-8",
										children: [(0, n.jsxs)("div", {
											className: "mt-12 hidden md:mt-0 md:block",
											children: [(0, n.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium"
											}), (0, n.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2"
											})]
										}), (0, n.jsxs)("div", {
											children: [(0, n.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Products"
											}), (0, n.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: r.products.map((function(e) {
													return (0, n.jsx)("li", {
														children: (0, n.jsx)("a", {
															href: e.href,
															className: "text-metal-800 hover:text-metal-900 text-sm",
															children: e.name
														})
													}, e.name)
												}))
											})]
										})]
									}), (0, n.jsxs)("div", {
										className: "md:grid md:grid-cols-2 md:gap-8",
										children: [(0, n.jsxs)("div", {
											children: [(0, n.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Developers"
											}), (0, n.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: r.developers.map((function(e) {
													return (0, n.jsx)("li", {
														children: (0, n.jsx)("a", {
															href: e.href,
															className: "text-metal-800 hover:text-metal-900 text-sm",
															children: e.name
														})
													}, e.name)
												}))
											})]
										}), (0, n.jsxs)("div", {
											className: "mt-12 md:mt-0",
											children: [(0, n.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Company"
											}), (0, n.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: r.company.map((function(e) {
													return (0, n.jsx)("li", {
														children: (0, n.jsx)("a", {
															href: e.href,
															className: "text-metal-800 hover:text-metal-900 text-sm",
															children: e.name
														})
													}, e.name)
												}))
											})]
										})]
									})]
								})]
							})
						})
					})
				}
		},
		4093: function(e, s, a) {
			"use strict";
			a.d(s, {
				T: function() {
					return m
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = a(4747),
				c = a(5681),
				l = a.n(c),
				d = a(1386),
				o = a.n(d),
				m = function(e) {
					var s = e.style,
						a = void 0 === s ? "dark" : s,
						r = e.code,
						c = e.language,
						d = e.markTerms,
						m = void 0 === d ? [] : d,
						u = e.className,
						x = (0, i.C)(r, c, m);
					return (0, n.jsx)("div", {
						className: t()("language-".concat(c), "dark" === a ? l().code : o().code, u),
						dangerouslySetInnerHTML: {
							__html: x
						}
					})
				}
		},
		8548: function(e, s, a) {
			"use strict";
			a.d(s, {
				D: function() {
					return c
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = a(7210),
				c = function(e) {
					var s = e.color,
						a = e.className,
						r = e.label;
					return (0, n.jsx)("div", {
						className: t()("flex cursor-default items-center rounded-full px-[8px]", "green" === s && "bg-green-200 text-white hover:bg-green-300", "red" === s && "bg-red-400 text-white hover:bg-red-500", "lime" === s && "text-metal-800 bg-lime-100 hover:bg-lime-200", "metal" === s && "bg-metal-800 hover:bg-metal-900 text-white", a),
						children: (0, n.jsx)(i.x, {
							size: "interface-label",
							children: r
						})
					})
				}
		},
		8137: function(e, s, a) {
			"use strict";
			a.d(s, {
				l: function() {
					return g
				}
			});
			var n = a(4246),
				r = a(7095),
				t = a(8059),
				i = a(1363),
				c = a(6429),
				l = a(7086),
				d = a(148),
				o = a(42),
				m = a.n(o),
				u = a(7983),
				x = a(385),
				h = a(8548),
				p = a(7210),
				f = [{
					name: "Identity",
					href: "#/products/identity",
					description: (0, n.jsx)("span", {
						children: "Verify identities and meet KYC and AML requirements."
					}),
					icon: r
				}, {
					name: "Auth",
					href: "#/products/auth",
					description: (0, n.jsx)("span", {
						children: "Authenticate and authorize apps to access data and connect accounts."
					}),
					icon: t
				}, {
					name: "Details",
					href: "#/products/details",
					description: (0, n.jsx)("span", {
						children: "Get personal and account information with client consent."
					}),
					icon: i
				}, {
					name: "Transactions",
					href: "#/products/transactions",
					description: (0, n.jsx)("span", {
						children: "Current and historical client transaction data."
					}),
					icon: c
				}, {
					name: "Balance",
					href: "#/products/balance",
					description: (0, n.jsx)("span", {
						children: "Real-time account balance checks."
					}),
					icon: l
				}, {
					name: "Credit Report",
					href: "#/products/report",
					description: (0, n.jsx)("span", {
						children: "Credit bureau reports for individuals."
					}),
					icon: d
				}],
				g = function(e) {
					return (0, n.jsx)("div", {
						className: e.outerClassName,
						children: (0, n.jsxs)(u.l, {
							xPadding: !0,
							className: m()(e.innerClassName, "space-y-8 py-8 md:py-10"),
							children: [(0, n.jsxs)("div", {
								className: "max-w-lg space-y-2",
								children: [(0, n.jsx)("div", {
									className: "flex",
									children: (0, n.jsx)(h.D, {
										label: "Available APIs",
										color: "lime"
									})
								}), (0, n.jsx)("div", {
									children: (0, n.jsx)(p.x, {
										size: "s-title",
										children: "Everything you need to build globally inclusive products"
									})
								}), (0, n.jsx)("div", {
									children: (0, n.jsx)(p.x, {
										size: "body",
										children: "Use the APIs to onboard and verify customers, connect apps to mobile money account and fetch identity and financial data."
									})
								})]
							}), (0, n.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3",
								children: f.map((function(e) {
									return (0, n.jsx)("a", {
										href: e.href,
										className: "group justify-end py-3 text-sm no-underline transition-all sm:py-4",
										children: (0, n.jsxs)("div", {
											className: "space-y-3",
											children: [(0, n.jsxs)("div", {
												className: "flex items-center space-x-3",
												children: [(0, n.jsx)("div", {
													className: "bg-green rounded p-1.5",
													children: (0, n.jsx)(e.icon, {
														className: "h-6 w-6 text-white"
													})
												}), (0, n.jsx)("div", {
													children: (0, n.jsx)(p.x, {
														size: "interface-label",
														children: e.name
													})
												}), (0, n.jsx)(x.Tt, {
													className: "translate-y-1 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
												})]
											}), (0, n.jsx)("div", {
												className: "text-metal-800 group-hover:text-metal-600 transition-all",
												children: (0, n.jsx)(p.x, {
													size: "secondary-text",
													children: e.description
												})
											})]
										})
									}, e.href)
								}))
							})]
						})
					})
				}
		},
		8455: function(e, s, a) {
			"use strict";
			a.d(s, {
				J: function() {
					return l
				}
			});
			var n = a(4246),
				r = a(42),
				t = a.n(r),
				i = a(7983),
				c = a(7210),
				l = function(e) {
					var s = e.quote,
						a = e.companyLogo,
						r = e.source,
						l = e.outerClassName,
						d = e.innerClassName;
					return (0, n.jsx)("div", {
						className: l,
						children: (0, n.jsx)(i.l, {
							xPadding: !0,
							className: d,
							children: (0, n.jsxs)("div", {
								className: "relative grid grid-cols-1 md:grid-cols-3",
								children: [(0, n.jsx)("div", {
									className: "flex items-center",
									children: (0, n.jsx)("img", {
										className: t()("mx-auto", a.className),
										src: a.src,
										alt: r.company
									})
								}), (0, n.jsxs)("div", {
									className: "col-span-2 space-y-8",
									children: [(0, n.jsx)("div", {
										className: "max-w-xl",
										children: (0, n.jsxs)(c.x, {
											size: "body",
											children: ["\u201c", s, "\u201d"]
										})
									}), (0, n.jsxs)("div", {
										className: "flex items-center",
										children: [(0, n.jsx)("div", {
											children: (0, n.jsx)(c.x, {
												size: "interface-label",
												children: r.name
											})
										}), (0, n.jsx)("svg", {
											className: "text-green mx-1 h-5 w-5",
											fill: "currentColor",
											viewBox: "0 0 20 20",
											children: (0, n.jsx)("path", {
												d: "M11 0h3L9 20H6l5-20z"
											})
										}), (0, n.jsx)("div", {
											children: (0, n.jsxs)(c.x, {
												size: "secondary-text",
												children: [r.title && (0, n.jsxs)("span", {
													children: [r.title, ", "]
												}), r.company]
											})
										})]
									})]
								})]
							})
						})
					})
				}
		},
		4747: function(e, s, a) {
			"use strict";
			a.d(s, {
				C: function() {
					return o
				}
			});
			var n = a(6920),
				r = a(942),
				t = a(7509),
				i = a(644),
				c = a.n(i);
			n.Z.registerLanguage("curl", c()), n.Z.registerLanguage("json", r.Z), n.Z.registerLanguage("xml", t.Z);
			var l = "HIGHLIGHTMARKSTART",
				d = "HIGHLIGHTMARKEND",
				o = function(e, s) {
					var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					if ("none" === s) return e;
					var r = e;
					a.forEach((function(e) {
						return r = r.replace(new RegExp(e, "g"), "".concat(l).concat(e).concat(d))
					}));
					var t = n.Z.highlight(r, {
						language: s
					}).value;
					return t = (t = t.replace(new RegExp(l, "g"), "<span class='hljs-mark'>")).replace(new RegExp(d, "g"), "</span>")
				}
		},
		5681: function(e) {
			e.exports = {
				code: "style-dark_code__l_K1v"
			}
		},
		1386: function(e) {
			e.exports = {
				code: "style-light_code__7_8jX"
			}
		}
	}
]);