import { ReactNode, createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'

type AuthContextData = {
  user: UserProps,
  isAuthenticated: boolean,
  signIn: (credentials: SignInProps) => Promise<void>,
  loadingAuth: boolean,
  loading: boolean,
  signOut: () => Promise<void>
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function getUser() {

      const userInfo = await AsyncStorage.getItem('@app_pizzaria')
      let hasUser: UserProps = JSON.parse(userInfo || '{}')

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

        setUser({
          email: hasUser.email,
          id: hasUser.id,
          name: hasUser.name,
          token: hasUser.token
        })
      }

      setLoading(false)
    }

    getUser()

  }, [])


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

  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser({
          email: '',
          id: '',
          name: '',
          token: ''
        })
      })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, loading, loadingAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}