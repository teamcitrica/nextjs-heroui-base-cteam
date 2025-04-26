import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // if (
  //   searchParams.get("hub.challenge") &&
  //   searchParams.get("hub.mode") === "subscribe" &&
  //   searchParams.get("hub.verify_token") == "TOKEN_SPECTED"
  // ) {
  //   return new Response(searchParams.get("hub.challenge"))
  // } else {
  //   return new Response('404')
  // }
  return new Response('404');
}

export async function POST(request: NextRequest) {
  // const req = await request.json();
  // console.log('Request json body');
  // console.log(req);
  // console.log('Entry Changes VALUE v2 roca');
  // console.log(req?.entry[0]?.changes);
  // const waData = req?.entry[0]?.changes[0];
  // if (waData){
  //   console.log(waData.value);
  //   if(waData.value.messages){
  //     console.log('mEssaGES');
  //     console.log(waData.value.messages);
  //     const phone = waData.value.messages[0].from;
  //     const msj = waData.value.messages[0].text.body;
  //     console.log('DATA ==>');
  //     console.log('PHONE', phone);
  //     console.log('MSJ',msj);

  //     const headers = {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer ANON_KEY"
  //     }

  //     const response = await fetch("https://URL_SUPABASE.supabase.co/functions/v1/FUNCTION_NAME", {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify({ phone: phone, message: msj })
  //     });

  //     console.log(response);

  //   } else {
  //     console.log('SIN MENSAJE');
  //   }

  // }
  return new Response('404');
}