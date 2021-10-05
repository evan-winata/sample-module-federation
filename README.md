# About

This is a simple test for module federation with the goal to provide a separate build for each application. Therefore each application can be built and deployed separately.

## Description

This repo contains 2 projects: `consumer` and `sample-lib`.

### sample-lib

This project acts as a sample UI library for any other project. In this sample, it provides some React components to `consumer` project.

### consumer

This is a normal React project that imported its components from `sample-lib` project.

## How to run the projects

Do `npm i` on each of the projects inside of their respective folders. After that run `npm start` on the `sample-lib` folder. This will run the project on `localhost:8081` and expose the remoteEntry point at `http://localhost:8081/remoteEntry.js` (have a look at `sample-lib/config/webpack.dev.js` to see the remote entry configuration). Finally run `npm start` on the `consumer` folder. This will run the `consumer` app that import the components from `sample-lib` project. Check `consumer/config/webpack.dev.js` on how to connect to the sample-lib's remote entry.
