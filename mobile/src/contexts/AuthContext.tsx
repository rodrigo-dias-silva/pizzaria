import { ReactNode, createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'

type AuthContextData = {
  user: UserProps,
  isAuthenticated: boolean,
  signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps = {
  email: string,
  id: string,
  name: string,
  token: string
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string,
  password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>({
    email: '',
    id: '',
    name: '',
    token: ''
  })

  const isAuthenticated = !!user.name

  const [loadingAuth, setLoadingAuth] = useState(false)

  async function signIn({ email, password }: SignInProps) {

    setLoadingAuth(true)

    try {
      const response = await api.post('/session', {
        email,
        password
      })

      const { id, name, token } = response.data

      const data = {
        ...response.data
      }

      await AsyncStorage.setItem('@app_pizzaria', JSON.stringify(data))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({
        email,
        id,
        name,
        token
      })

      setLoadingAuth(false)

    } catch (err) {
      console.error('erro ao acessar, erro: ' + err);
      setLoadingAuth(false)
    }

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}