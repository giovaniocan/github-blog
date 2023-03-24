import { HeaderContainer, SearchIssuesCotnainer, Formcontainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'

import { BlogContext } from '../../contexts/blogContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchIssues() {
  const alterListofPosts = useContextSelector(BlogContext, (context) => {
    return context.alterListofPosts
  })
  /*  const filteredListPosts = useContextSelector(BlogContext, (context) => {
    return context.filteredListPosts
  }) */
  const posts = useContextSelector(BlogContext, (context) => {
    return context.posts
  })
  const [text, setText] = useState('')
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInput) {
    setText(data.query)
  }

  useEffect(() => {
    alterListofPosts(text)
  }, [text])

  return (
    <SearchIssuesCotnainer>
      <HeaderContainer>
        <h2>Publicações</h2>
        <span> {posts.length} publicações</span>
      </HeaderContainer>
      <Formcontainer onChange={handleSubmit(handleSearchIssues)}>
        <input
          placeholder="buscar conteúdo"
          type="text"
          {...register('query')}
        />
      </Formcontainer>
    </SearchIssuesCotnainer>
  )
}
