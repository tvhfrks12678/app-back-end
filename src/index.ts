import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('user/:name', async (c) => {
  const name = c.req.param('name')
  return c.text(name)
})

export default app
