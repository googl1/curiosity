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
<!-- - in backend directory, type:
$ npm init -->

3. install dependencies:
$ npm install

4. pull from git!

5. test
$ npm start

in browser, try to reach:
http://127.0.0.1:3000/
