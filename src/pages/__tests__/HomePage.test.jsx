import { render, screen } from '@testing-library/react';

import {renderTestApp} from '../../tests/helpers/renderTestApp'
import { expect } from 'vitest';
import { server } from '../../mocks/node';
import { http, HttpResponse } from "msw";

describe('App', () => {
  it('render Home page with data', async () => {
    render(renderTestApp(null, {route: '/'}));
    const homeContainer = await screen.findByTestId('courses-list');
    expect(homeContainer).toBeInTheDocument()



    // check if App components renders headline
  });

  it('render Home page without data', async () => {

    server.use (
      http.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20231205&json`, ({ request }) => {
        return HttpResponse.json([]);
      }),
    )


    render(renderTestApp(null, {route: '/'}));
    const homeContainer = await screen.findByTestId('courses-list');
    expect(homeContainer).toBeInTheDocument()

    screen.debug(null, 300000);

    // check if App components renders headline
  });
});