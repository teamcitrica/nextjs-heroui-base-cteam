import "@/styles/globals.scss";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "../shared/providers";
import { Toaster } from 'react-hot-toast';
// import SupabaseProvider from './context/supabase-context' <== DESCOMENTAR PARA USAR SUPABASE
// import { AuthContextProvider } from "./context/AuthContext"; <== DESCOMENTAR PARA USAR AUTH
import Navbar from "@ui/organism/navbar";



export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s -${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
			>
				{/* <Toaster/>  SE CAMBIÓ POR HEROUI TOAST*/}
				{/* <SupabaseProvider> */}
					{/* <AuthContextProvider> */}
						<Providers themeProps={{ attribute: "data-theme", defaultTheme: "light" }}>
							{/* <Navbar /> */}
							{children}
						</Providers>
					{/* </AuthContextProvider> */}
				{/* </SupabaseProvider> */}
			</body>
		</html>
	);
}
					
						
