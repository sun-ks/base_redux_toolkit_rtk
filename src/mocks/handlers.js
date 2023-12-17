import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20231205&json', () => 
    HttpResponse.json([
      { 
        "r030":36,"txt":"Австралійський долар","rate":10000,"cc":"AUD","exchangedate":"05.12.2023"
      },
      { 
        "r030":36,"txt":"TEST 3333","rate":10000,"cc":"AUD","exchangedate":"05.12.2023"
      }
    ])),
  http.get('https://test-url.com', () => 
    HttpResponse.json('TEST TEST')),
];