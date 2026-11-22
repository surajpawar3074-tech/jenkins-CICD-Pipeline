const http = require("http");
const { greet } = require("./app");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.end(greet("Jenkins") + "\n");
  })
  .listen(port, () => console.log(`Listening on ${port}`));
