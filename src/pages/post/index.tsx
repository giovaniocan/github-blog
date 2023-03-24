import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'

import { BlogContext } from '../../contexts/blogContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useContextSelector } from 'use-context-selector'

export function Post() {
  const completePost = useContextSelector(BlogContext, (context) => {
    return context.completePost
  })
  console.log(completePost.title)
  console.log('chega aqui')
  return (
    <PostContainer>
      <PostInfo
        key={completePost.id}
        comments={completePost.comments}
        createdAt={completePost.created_at}
        htmlUrl={completePost.html_url}
        title={completePost.title}
      />

      <PostContent>
        <ReactMarkdown className="markdown-paragraph">
          {completePost.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
