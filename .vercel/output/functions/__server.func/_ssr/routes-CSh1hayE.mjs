import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Sun, c as Menu, d as Hotel, f as Facebook, g as ArrowUpRight, h as Bus, i as Utensils, l as MapPin, m as Calendar, n as X, o as PenTool, p as Compass, r as Waves, s as Mountain, t as Youtube, u as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSh1hayE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WireframeCtx = (0, import_react.createContext)({
	wireframe: false,
	grid: false,
	annotations: false,
	toggle: () => {}
});
function useWireframe() {
	return (0, import_react.useContext)(WireframeCtx);
}
function WireframeProvider({ children }) {
	const [wireframe, setWireframe] = (0, import_react.useState)(false);
	const [grid, setGrid] = (0, import_react.useState)(false);
	const [annotations, setAnnotations] = (0, import_react.useState)(false);
	const toggle = (key) => {
		if (key === "wireframe") setWireframe((v) => !v);
		if (key === "grid") setGrid((v) => !v);
		if (key === "annotations") setAnnotations((v) => !v);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireframeCtx.Provider, {
		value: {
			wireframe,
			grid,
			annotations,
			toggle
		},
		children
	});
}
function Annotation({ label }) {
	const { annotations } = useWireframe();
	if (!annotations) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "wireframe-annotation",
		children: label
	});
}
function Ph({ label, tone = "verde", className = "", imgSrc }) {
	const { wireframe } = useWireframe();
	const tones = {
		verde: "bg-[linear-gradient(135deg,#1B4332_0%,#2D6A4F_60%,#52B788_100%)] text-cream",
		rojo: "bg-[linear-gradient(135deg,#8C1D1D_0%,#C53030_60%,#F87171_100%)] text-cream",
		cafe: "bg-[linear-gradient(135deg,#5A3A1B_0%,#8B5A2B_60%,#C49A6C_100%)] text-cream",
		azul: "bg-[linear-gradient(135deg,#1E40AF_0%,#2563EB_60%,#60A5FA_100%)] text-cream",
		cream: "bg-[linear-gradient(135deg,#F2EADF_0%,#FAF6EE_100%)] text-cafe"
	};
	if (wireframe) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `wf-image-placeholder ${className}`,
		role: "img",
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "wf-image-placeholder__label",
			children: label
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative overflow-hidden ${tones[tone]} ${className} group`,
		role: "img",
		"aria-label": label,
		children: imgSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: imgSrc,
			alt: label,
			className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px),radial-gradient(circle_at_80%_60%,white_1px,transparent_1px)] [background-size:48px_48px,32px_32px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest opacity-70",
			children: [
				"[",
				label,
				"]"
			]
		})] })
	});
}
function WireframeControls() {
	const { wireframe, toggle } = useWireframe();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "wf-controls",
		id: "wireframe-toolbar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: `wf-controls__btn ${wireframe ? "wf-controls__btn--active" : ""}`,
			onClick: () => toggle("wireframe"),
			"aria-label": "Alternar modo esquema",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `wf-controls__dot ${wireframe ? "wf-controls__dot--active" : ""}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenTool, { style: {
					width: 14,
					height: 14
				} }),
				"Ver Wireframe"
			]
		})
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { annotations } = useWireframe();
	(0, import_react.useEffect)(() => {
		const f = () => setScrolled(window.scrollY > 40);
		f();
		window.addEventListener("scroll", f);
		return () => window.removeEventListener("scroll", f);
	}, []);
	const links = [
		["#destinos", "Destinos"],
		["#experiencias", "Experiencias"],
		["#gastronomia", "Gastronomia"],
		["#guia", "Guia"],
		["#contacto", "Contacto"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
		children: [
			annotations && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wireframe-annotation",
				style: {
					top: 4,
					left: 4
				},
				children: "<Cabecera> — Navegacion fija con efecto de desenfoque al hacer scroll"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-lg bg-verde text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-bold tracking-tight text-verde-deep",
							children: "Sugamuxi"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-8 md:flex",
						children: [links.map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							className: "text-sm font-medium text-foreground/80 transition-colors hover:text-rojo",
							children: l
						}, h)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contacto",
							className: "inline-flex items-center gap-1.5 rounded-full bg-rojo px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-rojo-deep",
							children: ["Planea tu viaje ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-cream md:hidden",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-cream md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1 px-5 py-3",
					children: links.map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						onClick: () => setOpen(false),
						className: "rounded px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-bone",
						children: l
					}, h))
				})
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-28 pb-12 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Hero — Cuadricula bento de 12 columnas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-12 gap-3 md:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-cafe md:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-cafe" }), " Boyaca · Colombia · 13 municipios"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-12 hidden items-center justify-end gap-2 md:col-span-4 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-cream px-3 py-1 text-[11px] font-medium text-cafe",
							children: "2.560 m s.n.m."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-azul px-3 py-1 text-[11px] font-medium text-cream",
							children: "Lago de Tota"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight text-verde-deep md:text-7xl lg:text-[96px]",
					children: [
						"Descubre la ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-rojo",
							children: "Provincia"
						}),
						" de",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Sugamuxi"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-6 md:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
							label: "Foto: Lago de Tota al amanecer",
							tone: "azul",
							className: "col-span-2 row-span-2 rounded-3xl md:col-span-4",
							imgSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-verde p-5 text-cream md:col-span-2 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-6 w-6 opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed opacity-90",
								children: "Paisajes andinos, lagunas sagradas, pueblos coloniales y la cocina mas autentica del altiplano boyacense."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#destinos",
								className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cream underline-offset-4 hover:underline",
								children: ["Explorar destinos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-1 flex flex-col justify-between rounded-2xl bg-rojo p-4 text-cream md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono uppercase tracking-widest opacity-80",
								children: "Municipios"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-bold md:text-5xl",
								children: "13"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
							label: "Foto: Basilica de Mongui",
							tone: "cafe",
							className: "col-span-1 rounded-2xl md:col-span-2",
							imgSrc: "https://images.unsplash.com/photo-1596489370845-a764d84f2c00?auto=format&fit=crop&q=80&w=800"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
							label: "Foto: Cultivos de cebolla",
							tone: "verde",
							className: "col-span-1 rounded-2xl md:col-span-1",
							imgSrc: "https://images.unsplash.com/photo-1621847468307-8e65cf0bc2bb?auto=format&fit=crop&q=80&w=800"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-1 flex items-center justify-between rounded-2xl bg-azul p-4 text-cream md:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-bold",
								children: "+47"
							})]
						})
					]
				})
			]
		})]
	});
}
var destinos = [
	{
		nombre: "Sogamoso",
		tag: "Ciudad del Sol",
		desc: "Capital cultural, museo arqueologico y herencia muisca.",
		tone: "verde",
		span: "md:col-span-3 md:row-span-2",
		imgSrc: "https://images.unsplash.com/photo-1549645938-34863f683bb5?auto=format&fit=crop&q=80&w=1200"
	},
	{
		nombre: "Mongui",
		tag: "Pueblo Patrimonio",
		desc: "Calles empedradas, balones artesanales y basilica colonial.",
		tone: "rojo",
		span: "md:col-span-3",
		imgSrc: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&q=80&w=1200"
	},
	{
		nombre: "Aquitania",
		tag: "Lago de Tota",
		desc: "El lago navegable mas grande de Colombia.",
		tone: "azul",
		span: "md:col-span-2",
		imgSrc: "https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800"
	},
	{
		nombre: "Iza",
		tag: "Postres y termales",
		desc: "Plaza dulce y aguas termales en el altiplano.",
		tone: "cafe",
		span: "md:col-span-1",
		imgSrc: "https://images.unsplash.com/photo-1582046467006-2531eec2534a?auto=format&fit=crop&q=80&w=800"
	}
];
function Destinos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "destinos",
		className: "relative py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Destinos — Tarjetas bento con superposicion de degradado" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "01 · Destinos",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"13 municipios, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-rojo",
						children: "una"
					}),
					" ",
					"provincia"
				] }),
				desc: "De Sogamoso a Mongua, cada pueblo guarda un capitulo distinto del altiplano boyacense."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-6 md:gap-4",
				children: destinos.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group relative overflow-hidden rounded-3xl ${d.span}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
							label: `Foto: ${d.nombre}`,
							tone: d.tone,
							className: "absolute inset-0",
							imgSrc: d.imgSrc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end p-5 text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-cream/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
										" ",
										d.tag
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl font-bold",
									children: d.nombre
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-xs text-sm opacity-90",
									children: d.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contacto",
									className: "mt-3 inline-flex w-fit items-center gap-1 text-xs font-semibold underline-offset-4 group-hover:underline",
									children: ["Ver destino ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
								})
							]
						})
					]
				}, d.nombre))
			})]
		})]
	});
}
function Experiencias() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experiencias",
		className: "relative bg-verde-deep py-20 text-cream md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Experiencias — Tarjetas translucidas sobre fondo oscuro" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "02 · Experiencias",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-cream",
					children: [
						"Recorridos que ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-rojo",
							children: "no"
						}),
						" caben en una postal"
					]
				}),
				desc: "Itinerarios curados con operadores locales a€” del paramo al lago, de la cocina al taller artesanal.",
				dark: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4",
				children: [
					{
						t: "Navegar el Lago de Tota",
						k: "Naturaleza · 1 dia",
						tone: "azul",
						icon: Waves
					},
					{
						t: "Caminar Mongui colonial",
						k: "Cultura · medio dia",
						tone: "rojo",
						icon: Compass
					},
					{
						t: "Ruta arqueologica muisca",
						k: "Historia · 1 dia",
						tone: "verde",
						icon: Sun
					},
					{
						t: "Termales y postres en Iza",
						k: "Bienestar · 1 dia",
						tone: "cafe",
						icon: Utensils
					}
				].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative flex flex-col justify-between rounded-3xl bg-cream/5 p-5 ring-1 ring-cream/10 backdrop-blur transition hover:bg-cream/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-rojo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-5 w-5 text-cream" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-mono uppercase tracking-widest opacity-70",
							children: e.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl font-semibold leading-tight",
							children: e.t
						})]
					})]
				}, e.t))
			})]
		})]
	});
}
function Gastronomia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gastronomia",
		className: "relative py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Gastronomia — Cuadricula bento y etiquetas de opciones" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "03 · Gastronomia",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sabores del ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-rojo",
					children: "altiplano"
				})] }),
				desc: "Cocina campesina, recetas heredadas y productos de la tierra fria."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-6 md:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 row-span-2 flex flex-col justify-between rounded-3xl bg-rojo p-6 text-cream md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold leading-tight",
							children: "Cocina hecha a fuego lento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm opacity-90",
							children: "Trucha del lago, mazorca tierna, cuchuco, almojabanas y la chicha que se brinda en cada festividad."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
						label: "Foto: Piquete boyacense",
						tone: "cafe",
						className: "col-span-2 row-span-2 rounded-3xl md:col-span-2",
						imgSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
						label: "Foto: Postres de Iza",
						tone: "cream",
						className: "col-span-1 rounded-3xl md:col-span-2",
						imgSrc: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
						label: "Foto: Trucha del Lago",
						tone: "azul",
						className: "col-span-1 rounded-3xl md:col-span-2",
						imgSrc: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 flex flex-wrap items-center gap-2 rounded-3xl bg-bone p-5 md:col-span-4",
						children: [
							"Cuchuco de trigo",
							"Piquete boyacense",
							"Chicha",
							"Caldo de costilla",
							"Mazamorra",
							"Postres de Iza"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-cafe/30 bg-cream px-3 py-1.5 text-xs font-medium text-cafe",
							children: p
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ph, {
						label: "Foto: Mercado campesino",
						tone: "verde",
						className: "col-span-2 rounded-3xl md:col-span-2",
						imgSrc: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=1000"
					})
				]
			})]
		})]
	});
}
function Guia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "guia",
		className: "relative bg-bone py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Guia — Tarjetas informativas de 3 columnas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "04 · Guia del viajero",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Planea tu viaje con ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-rojo",
						children: "criterio"
					}),
					" local"
				] }),
				desc: "Lo esencial para llegar, dormir y vivir Sugamuxi sin contratiempos."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4",
				children: [
					{
						icon: Calendar,
						tone: "verde",
						t: "Cuando ir",
						d: "Diciembre a marzo y julio a agosto: cielos despejados y temperaturas de 6° a 18°C."
					},
					{
						icon: Bus,
						tone: "azul",
						t: "Como llegar",
						d: "3h desde Bogota via Tunja por la doble calzada. Bus directo a Sogamoso desde Salitre."
					},
					{
						icon: Hotel,
						tone: "rojo",
						t: "Donde hospedarse",
						d: "Hoteles boutique en Sogamoso, posadas campesinas en Aquitania y haciendas en Iza."
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col gap-4 rounded-3xl bg-cream p-6 ring-1 ring-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-12 w-12 place-items-center rounded-xl ${i.tone === "verde" ? "bg-verde" : i.tone === "azul" ? "bg-azul" : "bg-rojo"} text-cream`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold text-verde-deep",
							children: i.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-foreground/80",
							children: i.d
						})
					]
				}, i.t))
			})]
		})]
	});
}
function Contacto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacto",
		className: "relative py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Seccion> Contacto — Llamada a la accion y formulario en cuadricula de 5 columnas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-verde p-8 text-cream md:col-span-3 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono uppercase tracking-[0.25em] opacity-80",
							children: "05 · Contacto"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-bold leading-tight md:text-5xl",
							children: "¿Listo para venir a Sugamuxi?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed opacity-90",
							children: "Conecta con operadores turisticos locales, guias certificados y alojamientos recomendados por la comunidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-rojo px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-rojo-deep",
							children: ["Ver operadores turisticos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => e.preventDefault(),
					className: "flex flex-col gap-3 rounded-3xl bg-cream p-6 ring-1 ring-border md:col-span-2 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-mono uppercase tracking-widest text-cafe",
							children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								className: "mt-1.5 w-full rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde",
								placeholder: "Tu nombre"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-mono uppercase tracking-widest text-cafe",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: "mt-1.5 w-full rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde",
								placeholder: "tu@correo.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs font-mono uppercase tracking-widest text-cafe",
							children: ["Mensaje", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								className: "mt-1.5 w-full resize-none rounded-xl border border-border bg-bone/40 px-4 py-3 text-sm text-foreground outline-none focus:border-verde",
								placeholder: "Cuentanos tu plan"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-azul px-5 py-3 text-sm font-semibold text-cream transition hover:bg-azul-deep",
							children: ["Enviar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border bg-verde-deep text-cream/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Annotation, { label: "<Pie de pagina> — Identidad de marca, enlaces y redes sociales" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-lg bg-rojo text-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-bold text-cream",
								children: "Sugamuxi"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm opacity-80",
							children: "Una iniciativa colaborativa para mostrar la riqueza natural y cultural de la Provincia de Sugamuxi, Boyaca."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-bold text-cream",
						children: "Explora"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#destinos",
								className: "hover:text-rojo",
								children: "Destinos"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#experiencias",
								className: "hover:text-rojo",
								children: "Experiencias"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#gastronomia",
								className: "hover:text-rojo",
								children: "Gastronomia"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#guia",
								className: "hover:text-rojo",
								children: "Guia"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-bold text-cream",
						children: "Siguenos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						children: [
							Instagram,
							Facebook,
							Youtube
						].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "grid h-9 w-9 place-items-center rounded-lg bg-cream/10 transition hover:bg-rojo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
						}, i))
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-cream/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs opacity-70 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Provincia de Sugamuxi. Hecho con orgullo boyacense." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono uppercase tracking-widest",
						children: "Boyaca · Colombia"
					})]
				})
			})
		]
	});
}
function SectionHead({ eyebrow, title, desc, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:col-span-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[10px] font-mono uppercase tracking-[0.25em] ${dark ? "text-cafe-soft" : "text-cafe"}`,
				children: eyebrow
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${dark ? "text-cream" : "text-verde-deep"}`,
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `max-w-md text-sm leading-relaxed md:col-span-5 ${dark ? "text-cream/80" : "text-foreground/80"}`,
			children: desc
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireframeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingInner, {}) });
}
function LandingInner() {
	const { wireframe, grid } = useWireframe();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: [
			"min-h-screen bg-cream font-sans text-foreground",
			wireframe ? "wireframe" : "",
			grid ? "show-grid" : ""
		].filter(Boolean).join(" "),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiencias, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gastronomia, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guia, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireframeControls, {})
		]
	});
}
//#endregion
export { Landing as component };
