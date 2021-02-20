const assert = require('assert');
const nodeFetch = require('node-fetch');
const { CatServerMock } = require('./mock.server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../src/index');
let should = chai.should();

chai.use(chaiHttp);


describe('Test get cat endpoint', function () {
    
    const mockServer = { host: '0.0.0.0', port: 3001 };
    
    let catServerMock = new CatServerMock();
    
    before(function() {
        process.env.CAT_HOST = `http://${mockServer.host}:${mockServer.port}`;
    });

    after(function() {
        delete process.env.CAT_HOST;
    });

    beforeEach(async () => {
        catServerMock.start(mockServer.host, mockServer.port);
    });

    afterEach(async () => {
        await catServerMock.stop();
    });

    describe('/GET cat', () => {
        it('it should get a cat', (done) => {
          chai.request(server)
              .get('/cats')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.should.have.header('content-type', 'image/jpeg');
                done();
              });
        });
    });
    

});