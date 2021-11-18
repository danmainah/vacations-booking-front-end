const destinationUrl = 'http://localhost:3000/api/v1/destinations';
const token = localStorage.getItem('token');

const postDestination = (name, location, imageUrl, pricePerDay) => {
  fetch(destinationUrl, {
    method: 'POST',
    body: JSON.stringify({
      name,
      location,
      image_url: imageUrl,
      price_per_day: pricePerDay,
    }),
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  });
};

export default postDestination;
