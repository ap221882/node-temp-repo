const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Wwelcome to our homepage");
  }
  //   res.write("Wwelcome to our homepage");
  //   res.end();
  else if (req.url === "/about") {
    res.end("It is about page");
  } else {
    res.end(`<h1>Oops 404!</h1>
  <p>We cant find page youre looking for</p>
  <a href='/'>Back home</a>`);
  }
});

server.listen(5000);
