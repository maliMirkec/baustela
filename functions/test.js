exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : "*",
        'Content-Type': 'application/json'
    },
    body: "Success!"
  })
}
