import { normalize, schema } from 'normalizr'

const user = new schema.Entity('users')

const comment = new schema.Entity('comments', {
  commenter: user
})

export const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
})
