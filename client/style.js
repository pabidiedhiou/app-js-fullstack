// Step 1 : "Hello, Heroku ! 👋"
fetch("http://localhost:5000/post")
  .then((res) => res.json())
  .then((res) => console.log(res));
