import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

interface BlogContextType {
  userData: User
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState<User>({} as User)

  const fetchUserData = async () => {
    const response = await api.get<User>('/users/giovaniocan')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <BlogContext.Provider value={{ userData }}>{children}</BlogContext.Provider>
  )
}
