(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[437], {
		9095: function(e, s, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/fees", function() {
				return a(2139)
			}])
		},
		7983: function(e, s, a) {
			"use strict";
			a.d(s, {
				l: function() {
					return i
				}
			});
			var t = a(4246),
				n = a(42),
				r = a.n(n),
				i = function(e) {
					var s = e.className,
						a = e.xPadding,
						n = e.children;
					return (0, t.jsx)("div", {
						className: r()(s, "w-full max-w-6xl md:mx-auto ", a && "px-8 md:px-10"),
						children: n
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
			var t = a(4246),
				n = a(42),
				r = a.n(n),
				i = a(3707),
				c = a(7983),
				l = function(e) {
					var s = e.innerClassName,
						a = e.outerClassName,
						n = {
							products: [{
								name: "A",
								href: "/products/ach"
							}, {
								name: "Bank Accounts",
								href: "/products/bank-accounts"
							}, {
								name: "Cards",
								href: "/products/cards"
							}, {
								name: "Checks",
								href: "/products/checks"
							}, {
								name: "Real-Time Payments",
								href: "/products/real-time-payments"
							}, {
								name: "Wires",
								href: "/products/wires"
							}],
							useCases: [{
								name: "Fintech",
								href: "/use-cases/fintech"
							}, {
								name: "Commercial Banking",
								href: "/use-cases/commercial-banking"
							}],
							developers: [{
								name: "Documentation",
								href: "/documentation"
							}, {
								name: "API Reference",
								href: "/documentation/api"
							}, {
								name: "Status",
								href: "https://status.increase.com"
							}],
							company: [{
								name: "Pricing",
								href: "/fees"
							}, {
								name: "Privacy",
								href: "/privacy"
							}, {
								name: "Security",
								href: "/security"
							}, {
								name: "Terms",
								href: "/terms"
							}]
						};
					return (0, t.jsx)("div", {
						className: a,
						children: (0, t.jsx)(c.l, {
							xPadding: !0,
							className: r()(s, "py-20"),
							children: (0, t.jsxs)("div", {
								className: "md:grid md:grid-cols-3 md:gap-8",
								children: [(0, t.jsxs)("div", {
									className: "space-y-8 md:col-span-1",
									children: [(0, t.jsx)(i.T, {}), (0, t.jsx)("p", {
										className: "text-metal-500 text-sm",
										children: "Bank accounts and banking services are provided by Increase\u2019s partner banks, members FDIC."
									})]
								}), (0, t.jsxs)("div", {
									className: "mt-12 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0",
									children: [(0, t.jsxs)("div", {
										className: "md:grid md:grid-cols-2 md:gap-8",
										children: [(0, t.jsxs)("div", {
											className: "mt-12 hidden md:mt-0 md:block",
											children: [(0, t.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium"
											}), (0, t.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2"
											})]
										}), (0, t.jsxs)("div", {
											children: [(0, t.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Products"
											}), (0, t.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: n.products.map((function(e) {
													return (0, t.jsx)("li", {
														children: (0, t.jsx)("a", {
															href: e.href,
															className: "text-metal-800 hover:text-metal-900 text-sm",
															children: e.name
														})
													}, e.name)
												}))
											})]
										})]
									}), (0, t.jsxs)("div", {
										className: "md:grid md:grid-cols-2 md:gap-8",
										children: [(0, t.jsxs)("div", {
											children: [(0, t.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Developers"
											}), (0, t.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: n.developers.map((function(e) {
													return (0, t.jsx)("li", {
														children: (0, t.jsx)("a", {
															href: e.href,
															className: "text-metal-800 hover:text-metal-900 text-sm",
															children: e.name
														})
													}, e.name)
												}))
											})]
										}), (0, t.jsxs)("div", {
											className: "mt-12 md:mt-0",
											children: [(0, t.jsx)("h3", {
												className: "text-metal-300 text-sm font-medium",
												children: "Company"
											}), (0, t.jsx)("ul", {
												role: "list",
												className: "mt-4 space-y-2",
												children: n.company.map((function(e) {
													return (0, t.jsx)("li", {
														children: (0, t.jsx)("a", {
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
		2139: function(e, s, a) {
			"use strict";
			a.r(s);
			var t = a(4246),
				n = a(338),
				r = a(7174),
				i = a(7983),
				c = a(42),
				l = a.n(c),
				m = [{
					title: "ACH",
					items: [{
						name: "Credit Origination",
						fee: "$0.50"
					}, {
						name: "Debit Origination",
						fee: "$0.50"
					}, {
						name: "Returns",
						fee: "$1.00"
					}]
				}, {
					title: "Wires",
					items: [{
						name: "Wire Origination",
						fee: "$5.00"
					}]
				}, {
					title: "Checks",
					items: [{
						name: "Check Printing and Mailing",
						fee: "$2.00"
					}]
				}, {
					title: "Cards",
					items: [{
						name: "Virtual Card Creation",
						fee: "$0.25"
					}]
				}, {
					title: "Real-Time Payments",
					items: [{
						name: "Real-Time Payment Origination",
						fee: "$0.25"
					}]
				}];
			s.default = function() {
				return (0, t.jsxs)("div", {
					className: "bg-".concat("metal-50", " text-").concat("metal-800"),
					children: [(0, t.jsx)(r.W, {
						dashboardButtonColor: "lime"
					}), (0, t.jsx)(i.l, {
						xPadding: !0,
						className: "py-20",
						children: (0, t.jsxs)("div", {
							className: "space-y-16",
							children: [(0, t.jsxs)("div", {
								className: "max-w-2xl space-y-2",
								children: [(0, t.jsx)("div", {
									className: "text-2xl font-medium lg:text-3xl",
									children: "Fees"
								}), (0, t.jsx)("div", {
									children: "If you\u2019re using Increase for commercial banking, the following fees apply."
								}), (0, t.jsxs)("div", {
									children: ["If you\u2019re a financial technology platform moving funds for your customers, or you have large corporate balances, we have custom pricing. ", (0, t.jsx)("a", {
										href: "mailto:sales@increase.com",
										children: "Contact us"
									}), " for details."]
								})]
							}), (0, t.jsxs)("div", {
								className: "space-y-4",
								children: [(0, t.jsx)("div", {
									className: "text-xl font-medium",
									children: "Per-Item Fees"
								}), (0, t.jsx)("table", {
									className: "w-full table-auto",
									children: (0, t.jsx)("tbody", {
										children: m.map((function(e, s) {
											return (0, t.jsxs)(t.Fragment, {
												children: [(0, t.jsx)("tr", {
													children: (0, t.jsx)("th", {
														className: l()(s > 0 && "pt-8"),
														colSpan: 2,
														children: (0, t.jsx)("div", {
															className: "bg-metal-100 -mx-2 rounded px-2 py-0.5 text-left font-medium",
															children: e.title
														})
													})
												}), e.items.map((function(e) {
													return (0, t.jsxs)("tr", {
														children: [(0, t.jsx)("td", {
															children: e.name
														}), (0, t.jsx)("td", {
															className: "text-right tabular-nums",
															children: e.fee
														})]
													}, e.name)
												}))]
											})
										}))
									})
								})]
							}), (0, t.jsxs)("div", {
								className: "max-w-2xl space-y-2",
								children: [(0, t.jsx)("div", {
									className: "text-xl font-medium",
									children: "Monthly Fees"
								}), (0, t.jsx)("div", {
									className: "text-base",
									children: "There are no monthly maintenance, transaction reporting, or book transfer fees for direct accounts."
								}), (0, t.jsx)("div", {
									children: "Users operating in regulated industries (for example, money transmission) may be subject to monthly account fees."
								})]
							}), (0, t.jsxs)("div", {
								className: "max-w-2xl space-y-2",
								children: [(0, t.jsx)("div", {
									className: "text-xl font-medium",
									children: "Overdraft Fees"
								}), (0, t.jsx)("div", {
									className: "text-base",
									children: "There are no overdraft fees."
								})]
							}), (0, t.jsxs)("div", {
								className: "max-w-2xl space-y-2",
								children: [(0, t.jsx)("div", {
									className: "text-xl font-medium",
									children: "Interest"
								}), (0, t.jsx)("div", {
									className: "text-base",
									children: "Accounts are eligible to receive interest on balances. The interest rate on corporate funds is the Federal Funds Target Rate less 50 basis points with a floor of 0%."
								})]
							})]
						})
					}), (0, t.jsx)(n.$, {})]
				})
			}
		}
	},
	function(e) {
		e.O(0, [22, 364, 129, 174, 774, 888, 179], (function() {
			return s = 9095, e(e.s = s);
			var s
		}));
		var s = e.O();
		_N_E = s
	}
]);