const options = {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "9e790d57fbmsh88aa75452dcb4f5p14b21ajsn56f797d7f807",
    "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
  },
  body: '{"type":"stats_notification","email_to":"example@test.com","frequency":"daily"}',
};

fetch(
  "https://rapidprod-sendgrid-v1.p.rapidapi.com/alerts/%7Balert_id%7D",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
