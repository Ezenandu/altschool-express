const logger = (req, res, next) => {
console.log("Request:", {
  url: req.method,
  method: req.method,
  time: new  Date(),
  body: req.body,
  query: req.query,
  params: req.params,

}

);

next();
}

module.exports = logger;