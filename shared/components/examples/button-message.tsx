'use client'
import { useSupabase } from "../../context/supabase-context"

const ButtonMessage = () => {

  const { supabase } = useSupabase() // USAMOS SIEMPRE EL CUSTOM HOOK

  const sendMessage = async () => {
    const { data, error } = await supabase.functions.invoke('send-message', {
      body: {
          name : "Jaimito",
      }
    })
    if (error){
      console.log('ERROR =>', error);
    }
    console.log(data)
    console.log('ENVIANDO...');
  }


  return (
    <div>ENVIAR POR WHATSAPP
      <button onClick={sendMessage}>
        ENVIAR MENSAJE
      </button>
    </div>
  )
}

export default ButtonMessage