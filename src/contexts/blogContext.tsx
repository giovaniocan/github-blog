import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

interface Post {
  id: number
  title: string
  /*   slug: string */
  body: string
  created_at: Date
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface BlogContextType {
  userData: User
  posts: Post[]
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchUserData = async () => {
    const response = await api.get<User>('/users/giovaniocan')
    setUserData(response.data)
  }

  const fetchPosts = async () => {
    const response = await api.get(
      'search/issues?q=%20repo:giovaniocan/github-blog',
    )
    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchUserData()
    fetchPosts()
  }, [])
  return (
    <BlogContext.Provider value={{ userData, posts }}>
      {children}
    </BlogContext.Provider>
  )
}
