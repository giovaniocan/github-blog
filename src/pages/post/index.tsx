import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'

import { useContext } from 'react'
import { BlogContext } from '../../contexts/blogContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function Post() {
  const { completePost } = useContext(BlogContext)
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
