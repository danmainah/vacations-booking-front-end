import reservationReducer, 
  { reservationAddAction, 
    reservationsLoadAction, 
    reservationCancelAction  } from './reservationReducer';

test('should return the initial state', () => {
  expect(reservationReducer(undefined, {})).toEqual([]);
})

test('should handle a list of loaded reservations', () => {

  const loadedReservations = [
    {
      id: 1,
      user_id: 1,
      destination_id: 1,
      start_date: '20/11/2021',
      end_date: '28/11/2021',
      cost: 800,
    },
    {
      id: 2,
      user_id: 1,
      destination_id: 2,
      start_date: '30/11/2021',
      end_date: '23/12/2021',
      cost: 1200,
    },
  ];
  expect(reservationReducer(undefined, reservationsLoadAction(loadedReservations))).toEqual(loadedReservations);
});

test('should handle a reservation being added to an existing list', () => {
  const previousState = [
    {
      id: 1,
      user_id: 1,
      destination_id: 1,
      start_date: '20/11/2021',
      end_date: '28/11/2021',
      cost: 800,
    },
    {
      id: 2,
      user_id: 1,
      destination_id: 2,
      start_date: '30/11/2021',
      end_date: '23/12/2021',
      cost: 1200,
    }
  ]

  const newReservation = {
    id: 3,
    user_id: 1,
    destination_id: 2,
    start_date: '30/11/2021',
    end_date: '23/12/2021',
    cost: 1200,
  }

  expect(reservationReducer(previousState, reservationAddAction(newReservation))).toEqual([...previousState, newReservation]);
});

test('should handle a reservation being removed from an existing list', () => {
  const previousState = [
    {
      id: 1,
      user_id: 1,
      destination_id: 1,
      start_date: '20/11/2021',
      end_date: '28/11/2021',
      cost: 800,
    },
    {
      id: 2,
      user_id: 1,
      destination_id: 2,
      start_date: '30/11/2021',
      end_date: '23/12/2021',
      cost: 1200,
    }
  ]

  const resultingState = [{
    id: 1,
    user_id: 1,
    destination_id: 1,
    start_date: '20/11/2021',
    end_date: '28/11/2021',
    cost: 800,
  }]

  expect(reservationReducer(previousState, reservationCancelAction(2))).toEqual(resultingState);
});