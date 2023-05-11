import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps,
  isAuthenticated: boolean,
  signIn: (credentials: SignInProps) => Promise<void>,
  signOut: () => void,
  signUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
  id: string,
  name: string,
  email: string
}

type SignInProps = {
  email: string,
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

type SignUpProps = {
  name: string,
  email: string,
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  } catch {
    console.log('erro ao deslogar ');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  useEffect(() => {

    // pegar algo no cookie
    const { '@nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/user-info')
        .then(response => {
          const { id, name, email } = response.data

          setUser({ id, name, email })
        })
        .catch(() => {
          // se deu erro, deslogamos o user
          signOut()
        })
    }
  }, [])


  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/session', {
        email,
        password
      })

      const { id, name, token } = response.data

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mes
        path: '/'
      })

      setUser({
        id,
        name,
        email,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard')

      toast.success('Bem vindo(a)!')

    } catch (error) {
      toast.error('Erro ao acessar :(');
      console.error(error);
    }
  }

  async function signUp({ email, name, password }: SignUpProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password
      })

      toast.success('Conta criada com sucesso!')

      Router.push('/')

    } catch (error) {
      toast.error('erro ao cadastrar, ');
      console.error(error);
    }

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}