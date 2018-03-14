# Konch SPA

![proto](https://content.screencast.com/users/prageer/folders/Default/media/163bd1f1-ae88-4e85-a20c-d87073f74bfa/final.png)

## Prerequisites

- Node.js 6^
- npm 3^

## Running in development

```
yarn install
yarn start
```

## Deployment

This application uses capistrano for deployment.  Once you have appropriate SSH
access to the server, deploys can be automated.


## Firebase Deployment
```
$ npm install -g firebase-tools
```

```
$ firebase login
$ firebase init
$ firebase deploy
```