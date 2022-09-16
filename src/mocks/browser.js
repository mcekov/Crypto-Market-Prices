import { setupWorker, rest } from 'msw'
import data from '../data.json'

const worker = setupWorker(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json(data))
  }),
)
worker.start({
  onUnhandledRequest: 'warn',
})
