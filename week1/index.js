const http = require("http");

const processUrl = (req, res) => {
  const path = req.url.toLowerCase();
  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the homepage of Week 1 Assignment");
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      `Welcome to the about page of Week 1 Assignment \n\n
      My name is Huy Xuon Lieu and I am going to be a web developer.\n\n
      I love playing games, but after getting married I spend less time on playing to have more time to study.\n
      I try to teach myself about web development by reading books and following courses online. Honestly,\n
      I do not really understand how things work under the hood, but at least I can focus on the detail in classes\n
      because I already have some basic understanding about the lessons in my mind.\n\n
      The best thing that I experience is that many programmers are willing to help beginners like me.\n
      They spend a good amount of time to write the answer that is simple enough for me to understand\n
      even when they do not have to. Quora is my favorite website to ask and learn from other people.\n\n
      The worst thing that I experience when teaching myself is being a wanderer in a forest of knowledge.\n
      In order to understand something that I do not know, I have to study about many other things that I do not know.\n
      When I practice on projects, there are a lot of things that I do not know and error that I do not\n
      know how to solve. Some of them are understandable, but many of them require a lot of knowledge to understand\n
      or tackle. I remember when I followed along a Nodejs course on Udemy, I have to watch the lessons over again\n
      just to know what I was doing. Then I hit the CORS error from Mapbox API, luckily, I found the solution,\n
      but I did not know how did it happen because it did not work on other pages but it worked fine on the homepage.\n\n
      Taking a class that is taught by a developer encourages me a lot.\n
      Thank you for reading till this point.`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};

const server = http.createServer(processUrl);
server.listen(process.env.PORT || 3000);
