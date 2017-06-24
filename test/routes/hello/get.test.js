import helloRouter from 'routes/hello'

import axios from 'axios'

import { makeServer, makeRequest } from 'test/helpers'

import test from 'ava'

let request
let server

test.beforeEach(() => {
  server = makeServer(helloRouter)
  request = makeRequest(server)
})
test.afterEach(() => {
  server.close()
})
test('should return `Hello World`', async (t) => {
  const resp = await request.get('/')

  t.is(resp.data, 'Hello World')
})
