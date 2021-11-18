import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

const handlers = [
  rest.get('https:localhost:3000/api/v1/reservations', (req, res, ctx) => res(ctx.json([
    {
      id: 1,
      user_id: 1,
      destination_id: 1,
      start_date: 20/11/2021,
      end_date: 28/11/2021,
      cost: 800,
    },
    {
      id: 2,
      user_id: 1,
      destination_id: 2,
      start_date: 30/11/2021,
      end_date: 23/12/2021,
      cost: 1200,
    },
    {
      id: 3,
      user_id: 1,
      destination_id: 3,
      start_date: 05/12/2021,
      end_date: 10/12/2021,
      cost: 700,
    },
  ]), ctx.delay(150))),
  rest.post('http://localhost:3000/api/v1/reservations', (req, res, ctx) => {
    if(req.headers.Authorization) {
      return res(
        ctx.status(200),
        ctx.json(
        {
          id: 4,
          user_id: 1,
          destination_id: 1,
          start_date: 20/12/2021,
          end_date: 28/12/2021,
          cost: 800,
        }
      ),
      ctx.delay(150))
    } else {
      return res(
        ctx.status(400),
        ctx.json(
        {
          message: 'Authorization Token required to sign in'
        }
      ),
      ctx.delay(150))
    }
    }),
    rest.delete('http://localhost:3000/api/v1/reservation', (req, res, ctx) => {
      if(req.headers.Authorization) {
        return res(
          ctx.status(200),
          ctx.json(
          {
            status: 'Success!',
            message: 'Reservation deleted'
          }
        ),
        ctx.delay(150))
      } else {
        return res(
          ctx.status(400),
          ctx.json(
          {
            message: 'Authorization Token required to sign in'
          }
        ),
        ctx.delay(150))
      }
    })
    
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());