import { ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

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
  number: number
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
  selectCompletePost: (id: number) => void
  completePost: Post
  alterListofPosts: (id: string) => void
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [userData, setUserData] = useState<User>({} as User)
  const [posts, setPosts] = useState<Post[]>([])
  const [completePost, setCompletePost] = useState<Post>({} as Post)

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

  function selectCompletePost(id: number) {
    const Completedpost = posts.find((item) => item.number === id) as Post
    setCompletePost(Completedpost)
  }

  function alterListofPosts(query: string) {
    setPosts([])

    posts.forEach((post) => {
      if (post.title.includes(query)) {
        setPosts((oldState) => [...oldState, post])
      }
    })
  }

  useEffect(() => {
    fetchUserData()
    fetchPosts()
  }, [])
  return (
    <BlogContext.Provider
      value={{
        userData,
        posts,
        selectCompletePost,
        completePost,
        alterListofPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
