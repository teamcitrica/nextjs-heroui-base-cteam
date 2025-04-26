'use client'
import { createContext, useState, useContext, useEffect } from 'react'
import { User, type Session } from '@supabase/auth-helpers-nextjs'
import { useSupabase } from "./supabase-context"
import { AuthError, WeakPassword } from '@supabase/supabase-js';


interface AuthValue {
  //signInWithGoogle: () => void,
  signInWithPassword: (email:string, password:string) => Promise<{ respData: { user: User; session: Session; weakPassword?: WeakPassword | undefined; } | null; respError: AuthError | null; }>,
  signOut: () => void,
  userSession: Session | null,
  checkUser: () => void,
  getUserInfo: (id:string) => void,
  userInfo: {
    id: string,
    role_id?: number,
    first_name?: string,
    last_name?: string,
    name?: string,
  } | null,
}


const AuthContext = createContext<AuthValue>({} as AuthValue)


export const AuthContextProvider = ({ children }:{children: any}) => {
  const { supabase } = useSupabase()
  const [userSession, setUserSession] = useState<Session | null>(null)
  const [urlHostname, setUrlHostname] = useState<string>('')
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    console.log(window.location.origin)
    setUrlHostname(window.location.origin)
}, [])



  const signInWithPassword = async (email:string, password:string) => {
    let respData = null;
    let respError = null;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({email, password})
      if (error !== null) {
        respError = error;
        console.log('error ', error)
      } else {
        respData = data;
        console.log('DATA!! ', data)

        
        if(data.user){
          console.log(data.user.id);
          const { data:dataUser, error } = await supabase
          .from('users')
          .select()
          .eq('id', data.user.id)
          .limit(1)
          .single()
          if (!error){
            console.log('DATA USER SETUSERINFO', dataUser)
            setUserInfo(dataUser)
          }
        }
        
      }
    } catch (error) {
      console.log(error)
    }
    
    return {respData, respError}
  }

  const signOut = async () => {
    console.log('LOGOUT');
    await supabase.auth.signOut();
  }

  const getUserInfo = async (id:string) => {
    console.log('llamando..');
    const { data:dataUser, error } = await supabase
    .from('users')
    .select()
    .eq('id', id)
    .limit(1)
    .single()
    console.log('DATA USER ****', dataUser);
    if(dataUser){
      console.log('Get UserInfo DATAUSER xx ==> ', dataUser);
      setUserInfo(dataUser);
    }
  }

  const checkUser = () => {
    console.log('CHECO USER x');
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('SUPA BASE evento', event)
      console.log('SUPA BASE SESION', session)
      if (session !== null) {
        setUserSession(session);
        getUserInfo(session.user.id);
      }
    })
    authListener.subscription.unsubscribe()
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <AuthContext.Provider value={{ signInWithPassword, userInfo, getUserInfo, signOut, userSession, checkUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
