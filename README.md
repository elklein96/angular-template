# angular-template

## What is this?

This is a template application that employs the MEAN Stack architecture. 

## How do I build this?

  - I'm assuming that you already have the following installed and configured:
  	- MongoDB
  	- Node.js and NPM

1. Clone this repo: `git clone https://github.com/elklein96/angular-template`

2. Install some dependencies: `npm install && bower install`

3. Install Grunt locally: `npm install -g grunt-cli`

4. Run the app: `grunt`
  
  - Note: the default grunt task starts both the Mongo Daemon and the Express Server.

## Testing

  - This project contains configurations for the Karma test runner, Mocha test framework, Chai assertion library, and Sinon (great for creating stubs and specs for Angular unit tests).

1. Create unit tests with file name `file.being.tested.spec.js`

2. Run `grunt test`

And that's it! Have fun!