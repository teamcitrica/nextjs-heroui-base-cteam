// import "@/styles/globals.scss";
// import { use } from "react";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { redirect } from 'next/navigation';
import { Sidebar } from "@/shared/components/citrica-ui/organism/sidebar";
import { siteConfig } from "@/config/site";

// async function getSession() {
//   const supabase = createServerComponentClient({cookies})
//   const {data: {session}} = await supabase.auth.getSession()
//   return  session;
// }

export default function PanelLayout({
	children,
}: {
	children: React.ReactNode;
}) {
  // const session = use(getSession());
  // // console.log('SESION ADMIN LAYOUT== ', session);
  // if (!session){
  //   // console.log('redirect login');
  //   redirect('/signup')
  // }
	return (
    <div className="h-full flex flex-row justify-start min-h-screen">
      <Sidebar items={siteConfig.sidebarItems} />
      <div className="bg-[rgba(240,240,242,1)] flex-1 p-4 text-white w-[80%]">
          {children}
      </div>
    </div>
	);
}
