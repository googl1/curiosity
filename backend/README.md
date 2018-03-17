HOWTO set it up:

1. set up mongodb

- install, eg:
$ apt-get install mongodb
or
$ brew install mongodb

- prepare data dir:
in backend folder, type
$ mkdir -p ./data/db/
$ chmod 777 ./data/db

-just in case, kill all instances of mongodb
$ killall -15 mongod

-run mongodb:
$ mongod -v --dbpath ./data/db

2. initiate node.js project
- in backend directory, type:
$ npm init

3. install dependencies:
$ npm install --save-dev babel babel-cli babel-preset-es2015 babel-preset-stage-0 nodemon 
$ npm install --save body-parser express moment mongoose morgan
