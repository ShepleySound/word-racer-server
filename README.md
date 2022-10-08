# Word Racer - Server

This repository hosts the source code for the Word Racer server.  

Word Racer is a CLI-based typing game created using Socket.IO. The server randomly chooses from a pre-defined list of words and emits the new word to all connected clients. If a client responds with the correct word before the timer runs out, they win the round and earn a point.  

A new word is chosen when the timer runs out or when someone wins the round.

*NOTE: In the application's current state, the server and clients must all be ran on a single host in different terminal sessions.*

Author: [Robert Shepley](https://github.com/shepleysound), [Timothee Odushina](https://github.com/timothee2022)
<!-- Replace URL's and add more necessary links -->
<!-- - [Tests Report]()
- [Assignment Pull Request]()
- [Heroku Prod Deployment]() -->

## Documentation

### Running the application locally

To install/run the application, you will need to have Node.js and npm installed. For directions, please reference the [npm documentation.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Clone the repository to your local machine, then run the following commands in your terminal -

  ```bash
    npm install
    node index.js
  ```

- Run the following commands, in order -

  ```bash
    npm run watch
    npm run vendor-one
    npm run vendor-two
    npm run driver
  ```

## Tests

*To be implemented*

## Further Goals

- [ ] Implement tests
- [ ] Modularize server-side socket code

## Structure Diagram

![Diagram](./cap-phase1.png)