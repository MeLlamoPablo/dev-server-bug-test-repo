# dev-server-bug-repo

This project features a weird bug, that might be happening in some of the
following dependencies:

* `babel-loader`
* `react-scripts`
* `typesafe-actions`
* `typescript`

In order to reproduce simply run `yarn start`, and the dev server will be
stuck on `Starting the development server...` forever.

In order to run a version of the repo which is working, go to the `working`
branch and run `yarn start`. It should start the server successfully.
