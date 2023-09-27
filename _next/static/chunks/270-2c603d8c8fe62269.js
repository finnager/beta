(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[270], {
		2399: function(e, s, n) {
			"use strict";
			n.d(s, {
				d: function() {
					return l
				}
			});
			var t = n(4246),
				a = n(4747),
				r = n(1093),
				i = n.n(r),
				c = n(6536),
				d = n.n(c),
				l = function(e) {
					var s = e.code,
						n = e.style,
						r = void 0 === n ? "dark" : n,
						c = e.markTerms,
						l = void 0 === c ? [] : c,
						o = s.syntax,
						m = s.language,
						x = (0, a.C)(o, m, l);
					return (0, t.jsx)("div", {
						className: "relative",
						children: (0, t.jsx)("pre", {
							className: "dark" === r ? d().code : i().code,
							children: (0, t.jsx)("code", {
								className: "language-".concat(m),
								dangerouslySetInnerHTML: {
									__html: x
								}
							})
						})
					})
				}
		},
		432: function(e, s, n) {
			"use strict";
			n.d(s, {
				F: function() {
					return j
				},
				X: function() {
					return h
				}
			});
			var t = n(9722),
				a = n(169),
				r = n(1373),
				i = n(4246),
				c = n(7955),
				d = n(4929),
				l = n.n(d),
				o = n(7378),
				m = n(2399),
				x = n(7197),
				u = n(9999),
				h = function(e) {
					return e.replace(/\W+/g, "-").replace(/^-|-$/, "").toLowerCase()
				},
				p = function(e) {
					var s = "string" === typeof e.children ? e.children : e.children.join(" ");
					return o.createElement("h" + e.level, {
						id: h(s),
						className: u.h
					}, s)
				},
				j = function(e) {
					var s = e.content;
					return (0, i.jsx)("div", {
						className: l().styledmarkdown,
						children: (0, i.jsx)(c.D, {
							components: {
								h1: p,
								h2: p,
								h3: p,
								code: function(e) {
									var s = e.inline,
										n = e.className,
										c = e.children,
										d = (0, r.Z)(e, ["inline", "className", "children"]);
									if (s) return (0, i.jsx)("code", (0, a.Z)((0, t.Z)({
										className: n
									}, d), {
										children: c
									}));
									var l = /language-(\w+)/.exec(n || ""),
										o = l ? l[1] : "none";
									return (0, i.jsx)(m.d, {
										code: {
											language: o,
											syntax: String(c).replace(/\n$/, "")
										}
									})
								}
							},
							remarkPlugins: [x.Z],
							children: s
						})
					})
				}
		},
		4747: function(e, s, n) {
			"use strict";
			n.d(s, {
				C: function() {
					return o
				}
			});
			var t = n(6920),
				a = n(942),
				r = n(7509),
				i = n(644),
				c = n.n(i);
			t.Z.registerLanguage("curl", c()), t.Z.registerLanguage("json", a.Z), t.Z.registerLanguage("xml", r.Z);
			var d = "HIGHLIGHTMARKSTART",
				l = "HIGHLIGHTMARKEND",
				o = function(e, s) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					if ("none" === s) return e;
					var a = e;
					n.forEach((function(e) {
						return a = a.replace(new RegExp(e, "g"), "".concat(d).concat(e).concat(l))
					}));
					var r = t.Z.highlight(a, {
						language: s
					}).value;
					return r = (r = r.replace(new RegExp(d, "g"), "<span class='hljs-mark'>")).replace(new RegExp(l, "g"), "</span>")
				}
		},
		9270: function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, {
				APIReference: function() {
					return w
				},
				AttributeList: function() {
					return f
				},
				ChildAttributeList: function() {
					return v
				},
				ChildParameterList: function() {
					return y
				},
				EnumCaseList: function() {
					return g
				},
				IntroContent: function() {
					return b
				},
				ParameterList: function() {
					return N
				},
				__N_SSG: function() {
					return j
				},
				default: function() {
					return k
				}
			});
			var t = n(4246),
				a = n(8972),
				r = n(7210),
				i = n(2399);
			var c = n(1012);

			function d() {
				var e, s, n = (e = ["\n      curl", ' \\\n        --url "', '" \\\n        ', "\n        ", "\n    "], (s = ["\n      curl", ' \\\\\n        --url "', '" \\\\\n        ', "\n        ", "\n    "]) || (s = e.slice(0)), Object.freeze(Object.defineProperties(e, {
					raw: {
						value: Object.freeze(s)
					}
				})));
				return d = function() {
					return n
				}, n
			}
			var l = function() {
				function e(s, n, t) {
					var a = t.headers,
						r = void 0 === a ? new Map : a,
						i = t.flags,
						c = void 0 === i ? [] : i;
					! function(e, s) {
						if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.httpVerb = s, this.url = n, this.headers = r, this.flags = c
				}
				return e.prototype.render = function() {
					var e = this,
						s = "GET" === this.httpVerb ? "" : ' -X "'.concat(this.httpVerb, '"'),
						n = Array.from(this.headers);
					return (0, c.SL)(d(), s, this.url, n.map((function(s, t) {
						var a = e.flags.length > 0 || t < n.length - 1 ? " \\" : "";
						return '-H "'.concat(s[0], ": ").concat(s[1], '"').concat(a)
					})), this.flags.map((function(s, n) {
						var t = n < e.flags.length - 1 ? " \\" : "",
							a = "-d" === s.flag ? "$'".concat(JSON.stringify(s.arg, null, 2), "'") : "".concat(s.key, "=").concat(s.arg);
						return "".concat(s.flag, " ").concat(a).concat(t)
					})))
				}, e
			}();
			var o = n(432),
				m = n(9999),
				x = n(9505),
				u = n(1444),
				h = n(42),
				p = n.n(h),
				j = !0,
				g = function(e) {
					var s = e.enumCases,
						n = e.isNested;
					return (0, t.jsx)(x.p, {
						className: "",
						as: "div",
						children: function(e) {
							var a = e.open;
							return (0, t.jsxs)("div", {
								className: p()(" border-metal-200 bg-metal-0 overflow-hidden border", a ? "block" : "inline-block", n && a ? "rounded-l-[8px] rounded-r-none border-r-0" : "rounded-[8px]"),
								children: [(0, t.jsxs)(x.p.Button, {
									className: p()("hover:bg-metal-100 flex items-center space-x-1 px-2 py-1 transition-colors", a ? "bg-metal-100 w-full" : "bg-metal-0"),
									children: [(0, t.jsx)(u.J, {
										name: "caret_right",
										className: p()(a && "rotate-90")
									}), (0, t.jsx)("div", {
										className: "grow text-left",
										children: (0, t.jsx)(r.x, {
											size: a ? "interface-label" : "secondary-text",
											children: "Possible values"
										})
									})]
								}), (0, t.jsx)(x.p.Panel, {
									className: "divide-metal-100 divide-y",
									children: (0, t.jsx)(t.Fragment, {
										children: s.map((function(e) {
											return (0, t.jsxs)("div", {
												className: "px-2 py-2",
												children: [(0, t.jsx)("div", {
													className: "flex",
													children: (0, t.jsx)("div", {
														className: "bg-metal-100 border-metal-100 rounded-[8px] border px-1 font-mono text-[13px] leading-[16px]",
														children: e.name
													})
												}), (0, t.jsx)("div", {
													children: (0, t.jsx)(r.x, {
														size: "secondary-text",
														className: "text-metal-600",
														children: e.documentation && (0, t.jsx)(o.F, {
															content: e.documentation
														})
													})
												})]
											}, e.name)
										}))
									})
								})]
							})
						}
					})
				},
				v = function(e) {
					var s = e.child,
						n = e.isNested;
					return (0, t.jsx)(x.p, {
						className: "",
						as: "div",
						children: function(e) {
							var a = e.open;
							return (0, t.jsxs)("div", {
								className: p()(" border-metal-200 bg-metal-0 overflow-hidden border", a ? "" : "inline-block", n && a ? "rounded-l-[8px] rounded-r-none border-r-0" : "rounded-[8px]"),
								children: [(0, t.jsxs)(x.p.Button, {
									className: p()("hover:bg-metal-100 flex items-center space-x-1 px-2 py-1 transition-colors", a ? "bg-metal-100 w-full" : "bg-metal-0"),
									children: [(0, t.jsx)(u.J, {
										name: "caret_right",
										className: p()(a && "rotate-90")
									}), (0, t.jsx)("div", {
										className: "grow text-left",
										children: (0, t.jsx)(r.x, {
											size: a ? "interface-label" : "secondary-text",
											children: "Child attributes"
										})
									})]
								}), (0, t.jsx)(x.p.Panel, {
									className: "divide-metal-100 divide-y",
									children: (0, t.jsx)(t.Fragment, {
										children: s.attributes.map((function(e) {
											return (0, t.jsx)(x.p, {
												as: "div",
												children: function(s) {
													var n = s.open;
													return (0, t.jsxs)(t.Fragment, {
														children: [(0, t.jsxs)(x.p.Button, {
															className: p()("hover:bg-metal-100 flex w-full items-center space-x-2 px-2 py-1 transition-colors", n ? "bg-metal-100" : "bg-metal-0"),
															children: [(0, t.jsxs)("div", {
																className: "flex items-center space-x-1",
																children: [(0, t.jsx)(u.J, {
																	name: "caret_right",
																	className: p()(n && "rotate-90")
																}), (0, t.jsx)("div", {
																	className: "grow-0",
																	children: (0, t.jsx)(r.x, {
																		size: n ? "interface-label-mono" : "secondary-text-mono",
																		children: e.name
																	})
																})]
															}), (0, t.jsx)("div", {
																className: "grow text-left",
																children: (0, t.jsx)(r.x, {
																	size: "secondary-text",
																	className: "text-metal-400",
																	children: (0, c.YV)(e.kind)
																})
															}), !e.optional && (0, t.jsx)("div", {
																className: "rounded-[4px] bg-green-50 px-1 py-0 text-[12px] font-normal leading-[20px] text-green-700",
																children: "Required"
															})]
														}), (0, t.jsxs)(x.p.Panel, {
															className: "space-y-2 pb-4 pl-4 pt-2",
															children: [(0, t.jsx)("div", {
																className: "pr-2",
																children: (0, t.jsx)(r.x, {
																	size: "secondary-text",
																	className: "text-metal-600",
																	children: e.documentation && (0, t.jsx)(o.F, {
																		content: e.documentation
																	})
																})
															}), (0, t.jsxs)("div", {
																children: ["object" === e.kind && (0, t.jsx)(v, {
																	child: e.child,
																	isNested: !0
																}), "array" === e.kind && (0, t.jsx)(v, {
																	child: e.element,
																	isNested: !0
																}), "list" === e.kind && (0, t.jsx)(v, {
																	child: e.element,
																	isNested: !0
																}), "enum" === e.kind && (0, t.jsx)(g, {
																	enumCases: e.cases,
																	isNested: !0
																}), "enum_array" === e.kind && (0, t.jsx)(g, {
																	enumCases: e.cases,
																	isNested: !0
																})]
															})]
														})]
													})
												}
											}, e.name)
										}))
									})
								})]
							})
						}
					})
				},
				f = function(e) {
					var s = e.attributes;
					return (0, t.jsx)(t.Fragment, {
						children: s.map((function(e) {
							return (0, t.jsxs)("div", {
								className: "py-3",
								children: [(0, t.jsxs)("div", {
									className: "flex flex-wrap items-center space-x-1",
									children: [(0, t.jsx)("div", {
										className: "max-w-full",
										children: (0, t.jsx)(r.x, {
											size: "body-medium",
											className: "w-full break-words",
											children: e.name
										})
									}), (0, t.jsx)("div", {
										className: "grow",
										children: (0, t.jsx)(r.x, {
											size: "interface-label",
											className: "text-metal-400",
											children: (0, c.YV)(e.kind)
										})
									}), !e.optional && (0, t.jsx)("div", {
										className: "rounded-[4px] bg-green-50 px-1 py-0 text-[12px] font-normal leading-[20px] text-green-700",
										children: "Required"
									})]
								}), (0, t.jsx)("div", {
									children: (0, t.jsx)(r.x, {
										size: "secondary-text",
										className: "text-metal-600 max-w-[550px]",
										children: e.documentation && (0, t.jsx)(o.F, {
											content: e.documentation
										})
									})
								}), "object" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(v, {
										child: e.child
									})
								}), "array" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(v, {
										child: e.element
									})
								}), "list" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(v, {
										child: e.element
									})
								}), "enum" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(g, {
										enumCases: e.cases
									})
								}), "enum_array" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(g, {
										enumCases: e.cases
									})
								})]
							}, e.name)
						}))
					})
				},
				y = function(e) {
					var s = e.parameters,
						n = e.isNested;
					return (0, t.jsx)(x.p, {
						as: "div",
						children: function(e) {
							var a = e.open;
							return (0, t.jsxs)("div", {
								className: p()(" border-metal-200 bg-metal-0 overflow-hidden border", a ? "" : "inline-block", n && a ? "rounded-l-[8px] rounded-r-none border-r-0" : "rounded-[8px]"),
								children: [(0, t.jsxs)(x.p.Button, {
									className: p()("hover:bg-metal-100 flex items-center space-x-1 px-2 py-1 transition-colors", a ? "bg-metal-100 w-full" : "bg-metal-0"),
									children: [(0, t.jsx)(u.J, {
										name: "caret_right",
										className: p()(a && "rotate-90")
									}), (0, t.jsx)("div", {
										className: "grow text-left",
										children: (0, t.jsx)(r.x, {
											size: a ? "interface-label" : "secondary-text",
											children: "Child attributes"
										})
									})]
								}), (0, t.jsx)(x.p.Panel, {
									className: "divide-metal-100 divide-y",
									children: (0, t.jsx)(t.Fragment, {
										children: s.map((function(e) {
											return (0, t.jsx)(x.p, {
												as: "div",
												children: function(s) {
													var n = s.open;
													return (0, t.jsxs)(t.Fragment, {
														children: [(0, t.jsxs)(x.p.Button, {
															className: p()("hover:bg-metal-100 flex w-full items-center space-x-2 px-2 py-1 transition-colors", n ? "bg-metal-100" : "bg-metal-0"),
															children: [(0, t.jsxs)("div", {
																className: "flex items-center space-x-1",
																children: [(0, t.jsx)(u.J, {
																	name: "caret_right",
																	className: p()(n && "rotate-90")
																}), (0, t.jsx)("div", {
																	className: "grow-0",
																	children: (0, t.jsx)(r.x, {
																		size: n ? "interface-label-mono" : "secondary-text-mono",
																		children: e.name
																	})
																})]
															}), (0, t.jsx)("div", {
																className: "grow text-left",
																children: (0, t.jsx)(r.x, {
																	size: "secondary-text",
																	className: "text-metal-400",
																	children: (0, c.YV)(e.kind)
																})
															}), !e.optional && (0, t.jsx)("div", {
																className: "rounded-[4px] bg-green-50 px-1 py-0 text-[12px] font-normal leading-[20px] text-green-700",
																children: "Required"
															})]
														}), (0, t.jsxs)(x.p.Panel, {
															className: "space-y-2 pb-4 pl-4 pt-2",
															children: [(0, t.jsx)("div", {
																className: "pr-2",
																children: (0, t.jsx)(r.x, {
																	size: "secondary-text",
																	className: "text-metal-600",
																	children: e.documentation && (0, t.jsx)(o.F, {
																		content: e.documentation
																	})
																})
															}), (0, t.jsxs)("div", {
																children: ["object" === e.kind && (0, t.jsx)(y, {
																	parameters: e.childParameters,
																	isNested: !0
																}), "array" === e.kind && (0, t.jsx)(y, {
																	parameters: e.elementParameters,
																	isNested: !0
																}), "enum" === e.kind && (0, t.jsx)(g, {
																	enumCases: e.cases,
																	isNested: !0
																}), "enum_array" === e.kind && e.cases && (0, t.jsx)(g, {
																	enumCases: e.cases,
																	isNested: !0
																})]
															})]
														})]
													})
												}
											}, e.name)
										}))
									})
								})]
							})
						}
					})
				},
				N = function(e) {
					var s = e.parameters;
					return (0, t.jsx)(t.Fragment, {
						children: s.map((function(e) {
							return (0, t.jsxs)("div", {
								className: "py-3",
								children: [(0, t.jsxs)("div", {
									className: "flex flex-wrap items-center space-x-1",
									children: [(0, t.jsx)("div", {
										className: "max-w-full",
										children: (0, t.jsx)(r.x, {
											size: "body-medium",
											className: "w-full break-words",
											children: e.name
										})
									}), (0, t.jsx)("div", {
										className: "grow",
										children: (0, t.jsx)(r.x, {
											size: "interface-label",
											className: "text-metal-400",
											children: (0, c.YV)(e.kind)
										})
									}), !e.optional && (0, t.jsx)("div", {
										className: "rounded-[4px] bg-green-50 px-1 py-0 text-[12px] font-normal leading-[20px] text-green-700",
										children: "Required"
									})]
								}), (0, t.jsx)("div", {
									children: (0, t.jsx)(r.x, {
										size: "secondary-text",
										className: "text-metal-600 max-w-[550px]",
										children: e.documentation && (0, t.jsx)(o.F, {
											content: e.documentation
										})
									})
								}), "enum" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(g, {
										enumCases: e.cases
									})
								}), "enum_array" === e.kind && e.cases && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(g, {
										enumCases: e.cases
									})
								}), "object" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(y, {
										parameters: e.childParameters
									})
								}), "array" === e.kind && (0, t.jsx)("div", {
									className: "pt-3",
									children: (0, t.jsx)(y, {
										parameters: e.elementParameters
									})
								})]
							}, e.name)
						}))
					})
				},
				b = function() {
					return (0, t.jsx)("div", {
						className: "pt-4",
						children: (0, t.jsxs)("div", {
							className: "border-metal-100 divide-metal-100 divide-y px-4 sm:px-8 xl:px-12",
							children: [(0, t.jsx)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: (0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "s-title",
											id: "api-reference",
											className: m.h,
											children: "API Reference"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "The Increase API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). It has predictable resource-oriented URLs, accepts and returns JSON-encoded payloads, and uses standard HTTP response codes, authentication, and verbs.\n\n&nbsp;\n\nWhile we're continually adding new features to the API, we're committed to doing so in a way that doesn't break existing integrations. You can read more in our [versioning and backwards compatibility guide](/documentation/backwards-compatibility)."
										})
									})]
								})
							}), (0, t.jsxs)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: [(0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											id: "authorization-and-testing",
											className: m.h,
											children: "Authorization and Testing"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "The API accepts [Bearer Authentication](https://datatracker.ietf.org/doc/html/rfc6750). When you sign up for an Increase account, we make you a pair of [API keys](https://dashboard.increase.com/developers/api_keys): one for production and one for our sandbox environment in which no real money moves. You can create and revoke API keys from the [dashboard](https://dashboard.increase.com/developers/api_keys) and should securely store them using a secret management system."
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "Production API requests should be to `https://api.increase.com` and sandbox requests should be to `https://sandbox.increase.com`. We'll put these into environment variables to make our code examples easier to follow."
										})
									})]
								}), (0, t.jsxs)("div", {
									className: "top-8 w-full md:sticky",
									children: [(0, t.jsx)("div", {
										className: "pb-2",
										children: (0, t.jsx)(r.x, {
											size: "secondary-text",
											children: "In the sandbox :"
										})
									}), (0, t.jsx)("div", {
										className: "pb-6",
										children: (0, t.jsx)(i.d, {
											code: {
												syntax: 'INCREASE_API_KEY="sk_test_1234567890"\nINCREASE_API_URL="https://sandbox.increase.com"',
												language: "curl"
											}
										})
									}), (0, t.jsx)("div", {
										className: "pb-2",
										children: (0, t.jsx)(r.x, {
											size: "secondary-text",
											children: "In production (you'll need to retrieve your API key from the dashboard):"
										})
									}), (0, t.jsx)("div", {
										className: "pb-6",
										children: (0, t.jsx)(i.d, {
											code: {
												syntax: 'INCREASE_API_KEY="sk_live_1234567890"\nINCREASE_API_URL="https://api.increase.com"',
												language: "curl"
											}
										})
									}), (0, t.jsx)("div", {
										className: "pb-2",
										children: (0, t.jsx)(r.x, {
											size: "secondary-text",
											children: "You can then make an API request like this using cURL:"
										})
									}), (0, t.jsx)("div", {
										className: "pb-6",
										children: (0, t.jsx)(i.d, {
											code: {
												syntax: 'curl --url "${INCREASE_URL}" \\\n  -H "Authorization: Bearer ${INCREASE_API_KEY}"',
												language: "curl"
											}
										})
									})]
								})]
							}), (0, t.jsx)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: (0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "openapi",
											children: "OpenAPI"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "This reference also exists in [OpenAPI 3 format](/openapi.json). This spec is in beta and subject to change. If you find it useful, or have feedback, [let us know!](mailto:support+openapi@increase.com)"
										})
									})]
								})
							}), (0, t.jsx)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: (0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "sdks",
											children: "Software Development Kits"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "Increase maintains open source SDKs for TypeScript, Python, Java, and Kotlin. Check out the documentation [here](/documentation/software-development-kits) or read the source code on [Github](https://github.com/increase)."
										})
									})]
								})
							}), (0, t.jsx)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: (0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "oauth",
											children: "OAuth"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "If you're interested in building an application that connects to other Increase users' data, you can build an OAuth application. Learn more about this in our [OAuth guide](/documentation/oauth)."
										})
									})]
								})
							}), (0, t.jsxs)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: [(0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "requests-and-responses",
											children: "Requests and Responses"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "When making a `POST` request to the API, use a `Content-Type` of `application/json` and specify parameters via JSON in the request body:"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "When making a `GET` request to the API, you should specify parameters in the query string of the URL. Join nested parameters, such as timestamp-based filters, with a `.` \u2013 for example, `created_at.before`:"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "All responses from the API will have a `Content-Type` of `application/json`."
										})
									})]
								}), (0, t.jsxs)("div", {
									className: "top-8 w-full md:sticky",
									children: [(0, t.jsx)("div", {
										className: "pb-2",
										children: (0, t.jsx)(r.x, {
											size: "secondary-text",
											children: "POST request"
										})
									}), (0, t.jsx)("div", {
										className: "pb-6",
										children: (0, t.jsx)(i.d, {
											code: {
												syntax: 'curl -X "POST" \\\n  --url "${INCREASE_URL}/accounts" \\\n  -H "Authorization: Bearer ${INCREASE_API_KEY}" \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{\n    "name": "New Account!"\n  }\'',
												language: "curl"
											}
										})
									}), (0, t.jsx)("div", {
										className: "pb-2",
										children: (0, t.jsx)(r.x, {
											size: "secondary-text",
											children: "GET request"
										})
									}), (0, t.jsx)("div", {
										className: "pb-6",
										children: (0, t.jsx)(i.d, {
											code: {
												syntax: 'curl \\\n  --url "${INCREASE_URL}/transactions?created_at.before=2022-01-15T06:34:23Z&created_at.after=2022-01-08T06:34:16Z" \\\n  -H "Authorization: Bearer ${INCREASE_API_KEY}"',
												language: "curl"
											}
										})
									})]
								})]
							}), (0, t.jsxs)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: [(0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "object-lists",
											children: "Object Lists"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "List endpoints return a wrapper object with the data and a cursor. The API will return the next page of results if you submit the `next_cursor` as a query parameter with the name `cursor`. Any filter parameters passed to the original list request must be included if `next_cursor` is specified. The maximum (and default) page size is 100 objects. You can adjust it using the `limit` parameter."
										})
									})]
								}), (0, t.jsx)("div", {
									className: "top-8 w-full md:sticky",
									children: (0, t.jsx)(i.d, {
										code: {
											syntax: '{\n  "data": [],\n  "next_cursor": "RWFzdGVyIGVnZw=="\n}',
											language: "json"
										}
									})
								})]
							}), (0, t.jsxs)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: [(0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "errors",
											children: "Errors"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "The API uses standard HTTP response codes to indicate the success or failure of requests. Codes in the 2xx range indicate success; codes in the 4xx and 5xx range indicate errors. Error objects conform to [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) and can be distinguished by their `type` attribute."
										})
									})]
								}), (0, t.jsx)("div", {
									className: "top-8 w-full md:sticky",
									children: (0, t.jsx)(i.d, {
										code: {
											syntax: '{\n  "detail": "There\'s an insufficient balance in the account.",\n  "status": "400",\n  "title": "The action you specified can\'t be performed on the object in its current state.",\n  "type": "invalid_operation_error"\n}',
											language: "json"
										}
									})
								})]
							}), (0, t.jsxs)("div", {
								className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
								children: [(0, t.jsxs)("div", {
									className: "space-y-5",
									children: [(0, t.jsx)("div", {
										children: (0, t.jsx)(r.x, {
											size: "heading",
											className: m.h,
											id: "idempotency",
											children: "Idempotency"
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "The API supports [idempotency](https://en.wikipedia.org/wiki/Idempotence) for safely retrying requests without accidentally performing the same operation twice. This is useful when an API call is disrupted in transit and you do not receive a response. For example, if a request to create an [ACH Transfer](https://increase.com/documentation#create-an-ach-transfer) does not respond due to a network connection error, you can retry the request with the same idempotency key to guarantee that no more than one transfer is created."
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "To perform an idempotent request, provide an additional, unique `Idempotency-Key` [request header](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header-00) per intended request. We recommend using a [V4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). Reusing the key in subsequent requests will return the same response code and body as the original request along with an additional HTTP header (`Idempotent-Replayed: true`). This applies to both success and error responses. In situations where your request results in a validation error, you'll need to update your request and retry with a new idempotency key."
										})
									}), (0, t.jsx)("div", {
										children: (0, t.jsx)(o.F, {
											content: "Idempotency keys will persist in the API for at least 1 hour. If an original request is still being processed when an idempotency key is reused, the API will return a [409 Conflict](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409) error. Subsequent requests must be identical to the original request or the API will return a [422 Unprocessable Entity](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422) error. We discourage setting an idempotency key on `GET` and `DELETE` requests as these requests are inherently idempotent."
										})
									})]
								}), (0, t.jsx)("div", {
									className: "top-8 w-full md:sticky",
									children: (0, t.jsx)(i.d, {
										code: {
											syntax: 'curl -X "POST" \\\n  --url "${INCREASE_URL}/accounts" \\\n  -H "Authorization: Bearer ${INCREASE_API_KEY}" \\\n  -H \'Idempotency-Key: RANDOM_UUID\' \\\n  -H \'Content-Type: application/json\' \\\n  -d $\'{\n    "name": "New Account!"\n  }\'\n            ',
											language: "curl"
										}
									})
								})]
							})]
						})
					})
				},
				w = function(e) {
					var s = e.schema,
						n = e.guides,
						c = e.isPrivateAPI,
						d = s.namespaces.sort((function(e, s) {
							var n = (0, a.Sh)(e),
								t = (0, a.Sh)(s);
							return a.dE.indexOf(n) - a.dE.indexOf(t)
						}));
					return (0, t.jsx)(a.AU, {
						schema: s,
						guides: n,
						isPrivateAPI: c,
						children: (0, t.jsxs)("div", {
							className: "mx-auto max-w-[1300px] md:space-y-10",
							children: [!c && (0, t.jsx)(b, {}), d.map((function(e) {
								return (0, t.jsxs)("div", {
									className: "border-metal-100 divide-metal-100 divide-y border-t px-4 sm:px-8 xl:px-12",
									children: [(0, t.jsx)("div", {
										className: "grid grid-cols-1 items-start gap-8 py-8 md:grid-cols-2 md:py-16 xl:gap-x-12",
										children: (0, t.jsxs)("div", {
											className: "space-y-3",
											children: [(0, t.jsx)("div", {
												children: (0, t.jsx)(r.x, {
													id: (0, o.X)(e.title),
													className: m.h,
													size: "xs-title",
													children: e.title
												})
											}), (0, t.jsx)("div", {
												children: (0, t.jsx)(o.F, {
													content: e.documentation
												})
											})]
										})
									}), e.resource && (0, t.jsxs)("div", {
										className: "grid grid-cols-1 items-start gap-x-8 gap-y-5 py-8 md:grid-flow-row-dense md:grid-cols-2 md:py-16 xl:gap-x-12",
										children: [(0, t.jsx)("div", {
											children: (0, t.jsxs)(r.x, {
												size: "heading",
												id: (0, o.X)("".concat(e.resource.title, "-object")),
												className: m.h,
												children: ["The ", e.resource.title, " object"]
											})
										}), (0, t.jsx)("div", {
											className: "top-8 w-full md:sticky md:row-span-2",
											children: (0, t.jsx)(i.d, {
												code: {
													syntax: JSON.stringify(e.resource.example, null, 2),
													language: "json"
												}
											})
										}), (0, t.jsxs)("div", {
											className: "divide-metal-100 space-y-2 divide-y pt-4 md:pt-0",
											children: [(0, t.jsx)("div", {
												children: (0, t.jsx)(r.x, {
													size: "s-heading",
													className: "text-metal-500",
													children: "Attributes"
												})
											}), (0, t.jsx)("div", {
												className: "divide-metal-100 divide-y",
												children: (0, t.jsx)(f, {
													attributes: e.resource.attributes
												})
											})]
										})]
									}), e.methods.map((function(e) {
										var s = String(function(e) {
											var s = e.apiMethod,
												n = e.example,
												t = e.apiKey,
												a = void 0 === t ? "${INCREASE_API_KEY}" : t,
												r = s.parameters,
												i = r.filter((function(e) {
													return "path" === e.providedVia
												})),
												c = r.filter((function(e) {
													return "query" === e.providedVia
												})),
												d = r.filter((function(e) {
													return "body" === e.providedVia
												})),
												o = s.path;
											if (i.forEach((function(e) {
													var t = n[e.name];
													if (!t) throw new Error("Error in example: method ".concat(s.title, " expects a string path param named ").concat(e.name, " but did not receive one in its example"));
													o = (o = o.replace(":".concat(e.name), t.toString())).replace("{".concat(e.name, "}"), t.toString())
												})), o.includes(":")) throw new Error("Error in example: method ".concat(s.title, " specifies a path that is not fully templateable by the parameters it specifies. Path: ").concat(s.path, ", params: ").concat(JSON.stringify(s.parameters)));
											var m, x = c.map((function(e) {
												var t = n[e.name];
												if (!t) {
													if (e.optional) return;
													throw new Error("Error in example: method ".concat(s.title, " expects a string query param named ").concat(e.name, " but did not receive one in its example"))
												}
												return "".concat(e.name, "=").concat(t)
											})).filter((function(e) {
												return e
											})).join("&");
											x.length > 0 && (x = "?".concat(x));
											var u = {};
											d.forEach((function(e) {
												var t = n[e.name];
												if (!t && !e.optional) throw new Error("Error in example: method ".concat(s.title, " expects a body param named ").concat(e.name, " but did not receive one in its example ").concat(JSON.stringify(n)));
												u[e.name] = t
											})), m = s.multipart ? d.filter((function(e) {
												return n[e.name]
											})).map((function(e) {
												var s;
												return {
													flag: "-F",
													key: e.name,
													arg: (null === (s = n[e.name]) || void 0 === s ? void 0 : s.toString()) || ""
												}
											})) : Object.keys(u).length > 0 ? [{
												flag: "-d",
												arg: u
											}] : [];
											var h = "${INCREASE_URL}" + o + x,
												p = new Map([
													["Authorization", "Bearer ".concat(a)]
												]);
											return s.multipart ? p.set("Content-Type", "multipart/form-data") : Object.keys(u).length > 0 && p.set("Content-Type", "application/json"), new l(s.httpVerb, h, {
												headers: p,
												flags: m
											})
										}({
											apiMethod: e,
											example: e.example
										}).render());
										return (0, t.jsxs)("div", {
											className: "grid grid-cols-1 items-start gap-x-8 gap-y-5 py-8 md:grid-flow-row-dense md:grid-cols-2 md:py-16 xl:gap-x-12",
											children: [(0, t.jsxs)("div", {
												className: "space-y-3",
												children: [(0, t.jsx)("div", {
													children: (0, t.jsx)(r.x, {
														id: (0, o.X)(e.title),
														size: "heading",
														className: m.h,
														children: e.title
													})
												}), e.documentation && (0, t.jsx)("div", {
													className: p()("pb-3"),
													children: (0, t.jsx)(o.F, {
														content: e.documentation
													})
												})]
											}), (0, t.jsx)("div", {
												className: "top-8 w-full md:sticky md:row-span-2",
												children: (0, t.jsx)(i.d, {
													code: {
														syntax: s,
														language: "curl"
													}
												})
											}), (0, t.jsxs)("div", {
												className: "divide-metal-100 space-y-2 divide-y pt-4 md:pt-0",
												children: [(0, t.jsx)("div", {
													children: (0, t.jsx)(r.x, {
														size: "s-heading",
														className: "text-metal-500",
														children: "Parameters"
													})
												}), (0, t.jsx)("div", {
													className: "divide-metal-100 divide-y",
													children: (0, t.jsx)(N, {
														parameters: e.parameters
													})
												})]
											})]
										}, e.title)
									}))]
								}, e.title)
							}))]
						})
					})
				},
				k = function(e) {
					var s = e.schema,
						n = e.guides;
					return (0, t.jsx)(w, {
						schema: s,
						guides: n
					})
				}
		},
		6536: function(e) {
			e.exports = {
				code: "style-dark_code__OPw0Z"
			}
		},
		1093: function(e) {
			e.exports = {
				code: "style-light_code__NDGoI"
			}
		},
		4929: function(e) {
			e.exports = {
				styledmarkdown: "style_styledmarkdown__1iaDD"
			}
		}
	}
]);