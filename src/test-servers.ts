import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  /**
   * Define all mocking servers here.
   */

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add a handler for the request to ${req.url.toString()}`)

    return res(ctx.status(500), ctx.json({ error: 'Please to add request handler' }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest }
