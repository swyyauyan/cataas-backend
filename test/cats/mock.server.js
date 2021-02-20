const { readFileSync } = require('fs');
const http = require('http');

class CatServerMock {

  start(host, port) {
    const catsController = (req, res, next) => {
      if(req.url == '/cat'){
        const catImage = readFileSync(`${__dirname}/cat.jpeg`);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(catImage);
      }
    };

    this.server = http.createServer(catsController);
    this.server.listen(port, host);
  }

  stop() {
    return new Promise((resolve, reject) => {
      this.server.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

}


exports.CatServerMock = CatServerMock;