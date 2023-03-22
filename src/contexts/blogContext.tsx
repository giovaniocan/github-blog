import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface BlogContextType {
  userData: any
}

interface BlogProviderProps {
  children: ReactNode
}

const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState({})

  const fetchUserData = async () => {
    const response = await api.get('/users/giovaniocan')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <BlogContext.Provider value={{ userData }}>{children}</BlogContext.Provider>
  )
}
