# Word Racer - Server

This repository hosts the source code for the Word Racer server.  

Word Racer is a CLI-based typing game created using Socket.IO. The server randomly chooses from a pre-defined list of words and emits the new word to all connected clients. If a client responds with the correct word before the timer runs out, they win the round and earn a point.  

A new word is chosen when the timer runs out or when someone wins the round.

Author: [Robert Shepley](https://github.com/shepleysound), [Timothee Odushina](https://github.com/timothee2022)

## Deployment

Currently, the server is deployed [here](word-racer-v2-dev.us-west-2.elasticbeanstalk.com) using AWS Elastic Beanstalk. Since it is a plain Socket.IO server, navigating to the deployed link in a browser using HTTP/HTTPS will result in an error.

## Documentation

### Running the application locally

To install/run the application, you will need to have Node.js and npm installed. For directions, please reference the [npm documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Clone the repository to your local machine, then run the following commands in your terminal -

  ```bash
    npm install
    node index.js
  ```

## Tests

*To be implemented*

## Further Goals

- [ ] Implement tests
- [ ] Modularize server-side socket code

<!-- ## Structure Diagram

![Diagram](./cap-phase1.png) -->

## Credits

List of words - [an-array-of-english-words](https://github.com/words/an-array-of-english-words)