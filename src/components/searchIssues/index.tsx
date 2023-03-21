import { HeaderContainer, SearchInput, SearchIssuesCotnainer } from './styles'

export function SearchIssues() {
  return (
    <SearchIssuesCotnainer>
      <HeaderContainer>
        <h2>Publicações</h2>
        <span> 2 publicações</span>
      </HeaderContainer>
      <SearchInput placeholder="buscar conteúdo" type="text" />
    </SearchIssuesCotnainer>
  )
}
