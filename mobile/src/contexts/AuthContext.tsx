import { ReactNode, createContext, useState } from "react";

type AuthContextData = {
  user: UserProps,
  isAuthenticated: boolean
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

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>({
    email: '',
    id: '',
    name: '',
    token: ''
  })

  const isAuthenticated = !!user.name

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}