const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  
  const readWrite = (file, filetype) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': filetype});
      res.write(data);
      res.end();
    });
  } 
  
  const pages = {
    '/': ['index.html', 'text/html'],
    '/otherpage': ['otherpage.html', 'text/html'],
    '/otherotherpage': ['otherotherpage.html', 'text/html'],
    '/js/main.js': ['js/main.js','text/javascript']
  }

  switch (true) {
    case (page in pages):
      readWrite(pages[page][0], pages[page][1])
      break

    case (page == '/api'):
        if (params['student'] == 'leon') {
          flipResult = (Math.random() <= 0.5) ? 'heads' : 'tails'
          
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "leon",
            status: "balling",
            currentOccupation: "baller",
            flipStatus: flipResult
          }
          res.end(JSON.stringify(objToJson));
      break
    case (page == '/css/style.css'):
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break
    default: 
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
      break
  }
});

server.listen(8000);
