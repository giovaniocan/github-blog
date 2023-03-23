import { HeaderContainer, SearchIssuesCotnainer, Formcontainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchIssues() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInput) {
    console.log(data)
  }
  return (
    <SearchIssuesCotnainer>
      <HeaderContainer>
        <h2>Publicações</h2>
        <span> 2 publicações</span>
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
