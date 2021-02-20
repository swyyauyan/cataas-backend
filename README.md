# cataas-backend

A simple JS project to get the cat from [CATAAS](https://cataas.com/#/).

### Configuration
Please create the `.env` file and add the following variables:
```sh
PORT = <Port number>
HOST = <Host name>

CAT_HOST = https://cataas.com
```

### Start the server
    $ npm install
    $ npm start

### Run tests
    $ npm test

### API Endpoints
| URL                                         | Description                                                                                                                 |
| ------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------:|
| /cat?gif=true&text=HelloWorld&tag=cute      | Get a gif cat or a cat with text and tag. (If it is a cute cat, then you will not get the text with tag at the same moment) |
