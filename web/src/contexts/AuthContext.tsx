import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { ReactNode, createContext, useState } from "react";
import { api } from "../services/apiClient";

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

    } catch (error) {
      console.log('Erro ao acessar ', error);

    }
  }

  async function signUp({ email, name, password }: SignUpProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password
      })

      alert('Cadastrado com sucesso!')

      Router.push('/')

    } catch (error) {
      console.error('erro ao cadastrar, ', error);

    }

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}