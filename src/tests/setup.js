import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from '../mocks/node'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => {
    server.close();
    cleanup();
  } 
);

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url)
})