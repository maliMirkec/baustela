exports.handler = function (event, context, callback) {
  fetch("https://api.github.com/repositories")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });

  fetch("https://baustela.silvestarbistrovic.from.hr/.netlify/functions/test")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });

  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
    body: "Success!"
  })
}
