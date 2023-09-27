(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[112], {
		5286: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[id]", function() {
				return n(1108)
			}])
		},
		9746: function(e, t, n) {
			"use strict";
			n.d(t, {
				b: function() {
					return l
				}
			});
			var r = n(4246),
				a = n(8038),
				s = n.n(a),
				l = function(e) {
					var t = e.title,
						n = e.children;
					return (0, r.jsxs)(s(), {
						children: [(0, r.jsxs)("title", {
							children: ["Finnager \u203a ", null !== t && void 0 !== t ? t : "No one left behind"]
						}), (0, r.jsx)("meta", {
							name: "twitter:title",
							content: "Finnager \u203a ".concat(null !== t && void 0 !== t ? t : "No one left behind")
						}), n]
					})
				}
		},
		596: function(e, t, n) {
			"use strict";
			n.d(t, {
				Q: function() {
					return j
				}
			});
			var r = n(4246),
				a = n(2554),
				s = n.n(a),
				l = (n(7378), n(3707)),
				i = n(5829),
				o = n.n(i),
				c = s().bind(o()),
				d = function() {
					return (0, r.jsxs)("svg", {
						id: c("texture"),
						children: [(0, r.jsxs)("filter", {
							id: "noise",
							children: [(0, r.jsx)("feTurbulence", {
								type: "fractalNoise",
								baseFrequency: ".8",
								numOctaves: "4",
								stitchTiles: "stitch"
							}), (0, r.jsx)("feColorMatrix", {
								type: "saturate",
								values: "0"
							})]
						}), (0, r.jsx)("rect", {
							width: "100%",
							height: "100%",
							filter: "url(#noise)"
						})]
					})
				},
				_ = n(8394),
				h = n.n(_),
				u = n(9746),
				x = s().bind(h()),
				j = function(e) {
					var t = e.header,
						n = e.title,
						a = e.children,
						s = e.noIndex;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(u.b, {
							title: n,
							children: !0 === s && (0, r.jsx)("meta", {
								name: "robots",
								content: "noindex,nofollow"
							})
						}), (0, r.jsxs)("div", {
							className: x("legal"),
							children: [(0, r.jsxs)("header", {
								className: x("grid"),
								children: [(0, r.jsx)(d, {}), (0, r.jsx)(l.T, {
									animate: !0
								}), (0, r.jsx)("div", {
									className: x("header-content"),
									children: t
								})]
							}), (0, r.jsx)("div", {
								className: x("title-bar"),
								children: n && (0, r.jsx)("h1", {
									className: x("grid"),
									children: (0, r.jsx)("span", {
										children: n
									})
								})
							}), (0, r.jsx)("div", {
								className: x("grid"),
								children: (0, r.jsx)("div", {
									id: x("content"),
									children: (0, r.jsx)("div", {
										children: a
									})
								})
							})]
						})]
					})
				}
		},
		3707: function(e, t, n) {
			"use strict";
			n.d(t, {
				T: function() {
					return h
				}
			});
			var r = n(4246),
				a = n(2554),
				s = n.n(a),
				l = n(9894),
				i = n.n(l),
				o = n(185),
				c = n.n(o),
				d = s().bind(c()),
				_ = function(e) {
					var t = e.animate;
					return (0, r.jsxs)("svg", {
						className: d("logo", {
							animate: t
						}),
						viewBox: "0 0 100 14",
						children: [(0, r.jsx)("rect", {
							className: d("bar"),
							x: "1",
							y: "2.86",
							width: "4",
							height: "10.14"
						}), (0, r.jsx)("rect", {
							className: d("bar"),
							x: "8.5",
							y: "1.86",
							width: "4",
							height: "11.14"
						}), (0, r.jsx)("rect", {
							className: d("bar"),
							x: "16",
							y: "0.86",
							width: "4",
							height: "12.14"
						}), (0, r.jsx)("path", {
							className: d("diagonal"),
							d: "M16 6.5L12.5 1.86V8.36L16 13V6.5Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M26.004 6.931C26.004 4.636 26.871 3.361 28.537 3.361C29.778 3.361 30.407 4.058 30.611 5.146H34.079C33.586 2.477 31.852 0.658 28.537 0.658C24.712 0.658 22.366 3.293 22.366 6.931C22.366 10.586 24.712 13.204 28.537 13.204C31.852 13.204 33.586 11.368 34.079 8.716H30.611C30.407 9.804 29.778 10.501 28.537 10.501C26.871 10.501 26.004 9.243 26.004 6.931Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M39.8796 13V9.124H41.7326L43.8746 13H47.6996L45.1496 8.546C46.4586 7.9 47.3596 6.744 47.3596 4.993C47.3596 2.273 45.5066 0.861999 42.4466 0.861999H36.3776V13H39.8796ZM39.8796 6.404V3.582H41.9366C43.3646 3.582 43.8576 4.058 43.8576 4.993C43.8576 5.928 43.3646 6.404 41.9366 6.404H39.8796Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M59.653 13V10.28H53.38V8.257H58.735V5.537H53.38V3.582H59.483V0.861999H49.878V13H59.653Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M71.3255 13H74.9635L70.1525 0.861999H66.1235L61.3295 13H64.8145L65.6645 10.739H70.5095L71.3255 13ZM68.0955 4.245H68.1465L69.5235 8.036H66.6675L68.0955 4.245Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M75.9798 9.209C76.2518 11.878 78.5128 13.204 81.8278 13.204C84.7348 13.204 87.0638 11.776 87.0638 9.311C87.0638 7.288 85.8908 6.115 83.6978 5.724L81.4198 5.316C80.3828 5.129 79.8388 4.976 79.8388 4.296C79.8388 3.599 80.5188 3.174 81.4878 3.174C82.6438 3.174 83.4258 3.633 83.4938 4.551H86.8598C86.6048 2.154 84.8028 0.658 81.4538 0.658C78.5638 0.658 76.3368 2.154 76.3368 4.585C76.3368 6.778 77.7988 7.798 79.8218 8.138L81.8958 8.495C83.0688 8.699 83.5448 8.903 83.5448 9.566C83.5448 10.365 82.6437 10.705 81.6917 10.705C80.6547 10.705 79.5328 10.348 79.4308 9.209H75.9798Z"
						}), (0, r.jsx)("path", {
							className: d("letter"),
							d: "M99.0584 13V10.28H92.7854V8.257H98.1404V5.537H92.7854V3.582H98.8884V0.861999H89.2834V13H99.0584Z"
						})]
					})
				},
				h = function(e) {
					var t = e.animate,
						n = void 0 !== t && t,
						a = e.link;
					return void 0 === a || a ? (0, r.jsx)(i(), {
						href: "/",
						children: (0, r.jsx)("a", {
							children: (0, r.jsx)(_, {
								animate: n
							})
						})
					}) : (0, r.jsx)(_, {
						animate: n
					})
				}
		},
		1108: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				__N_SSG: function() {
					return l
				}
			});
			var r = n(4246),
				a = n(596),
				s = n(7955),
				l = !0;
			t.default = function(e) {
				var t = e.content;
				if ("legal" === t.layout) return (0, r.jsx)(a.Q, {
					title: t.title,
					header: t.headerMarkdown && (0, r.jsx)(s.D, {
						children: t.headerMarkdown
					}),
					noIndex: t.noIndex,
					children: (0, r.jsx)(s.D, {
						children: t.contentMarkdown.content
					})
				});
				throw new Error("Unknown layout: ".concat(t.layout))
			}
		},
		5829: function(e) {
			e.exports = {
				texture: "style_texture__dLwww"
			}
		},
		8394: function(e) {
			e.exports = {
				legal: "style_legal__op8fc",
				grid: "style_grid__nNE__",
				"header-content": "style_header-content__TKkvq",
				"title-bar": "style_title-bar__fyq1O",
				content: "style_content__DhnqO",
				logo: "style_logo__UU3Rd"
			}
		},
		185: function(e) {
			e.exports = {
				logo: "style_logo__roZLU",
				animate: "style_animate__Uk32x",
				bar: "style_bar__0dvzh",
				letter: "style_letter__rngSF",
				diagonal: "style_diagonal__xeO5j",
				"logo-bar": "style_logo-bar__t0QsS",
				"logo-diagonal": "style_logo-diagonal__rAO2v",
				"logo-letter": "style_logo-letter__71IGe"
			}
		}
	},
	function(e) {
		e.O(0, [22, 955, 774, 888, 179], (function() {
			return t = 5286, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);