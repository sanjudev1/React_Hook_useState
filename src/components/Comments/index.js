import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [data, setData] = useState({
    name: '',
    comment: '',
  })
  const {name, comment} = data
  const [commentList, setComment] = useState([])
  const onEventOccur = e => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const onCommentEvent = e => {
    e.preventDefault()
    const commentDetails = {
      name,
      comment,
      id: uuid(),
    }
    setData({name: '', comment: ''})
    setComment([...commentList, commentDetails])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onCommentEvent}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onEventOccur}
          name="name"
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={onEventOccur}
          name="comment"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      {commentList.map(each => (
        <CommentItem key={each.id} commentDetails={each} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
