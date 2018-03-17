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
