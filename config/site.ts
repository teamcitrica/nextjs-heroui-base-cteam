export type SiteConfig = typeof siteConfig;
import { Home, ClipboardCheck, Settings, Users, Bell, ShieldCheck } from "lucide-react"

const SUBITEM_SEARCH_PARAM = "page";

export const siteConfig = {
	name: "Proyecto Web",
	description: "Descripción Proyecto Web",
	navLinks: [
		{
			title: "Inicio",
			href: "/",
		},
		{
			title: "Proyectos",
			href: "#proyect",
		},
		{
			title: "Panel",
			href: "/panel",
		},
	],
	subItemSearchParam: SUBITEM_SEARCH_PARAM, // FOR SUBSECTIONS IN SIDEBAR
	sidebarItems: [
		{
			title: "Home",
			icon: "Settings",
			href: "/",
		},
		{
			title: "Tareas",
			icon: "ClipboardCheck",
			href: "/panel/tareas",
		},
		{
			title: "Configuración de la app",
			icon: "Settings",
			href: "/panel/config-app", // ONLY TO DETERMINE ACTIVE, IS NOT LINKING
			subItems: [
				{
					title: "Básica",
					href: "/panel/config-app?" + SUBITEM_SEARCH_PARAM + "=basic",
				},
				{
					title: "Avanzada",
					href: "/panel/config-app?" + SUBITEM_SEARCH_PARAM + "=advanced",
				},
				{
					title: "Mejorada",
					href: "/panel/config-app?" + SUBITEM_SEARCH_PARAM + "=best",
				},
			],
		},
		{
			title: "Roles de la app",
			icon: "Users",
			href: "/users",
		},
		{
			title: "Alertas",
			icon: "Bell",
			href: "/alerts",
		},
		{
			title: "Seguridad",
			icon: "ShieldCheck",
			href: "/secutiry",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
