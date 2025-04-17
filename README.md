# Angulartest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Description
This repository contains test code

First Test shows the working of Angular code repeatedly calling a NodeJS api that sends time left for a particular deadline in seconds. As soon as we move away from First Test, the api calling stops.

Second Test shows the working of a camera checker program. In this, we have a fixed list of camera specs and the program checks whether we have a camera in our list that suits the user requirements based on inputs provided.

This is the fixed camera specs, we are using to test user inputs:

```
    "Camera1"
    LightLevel: 0-100
    SubjectDistance: 0-30

    "Camera2"
    LightLevel: 100-300
    SubjectDistance: 0-30

    "Camera3"
    LightLevel: 300-500
    SubjectDistance: 0-30

    "Camera4"
    LightLevel: 0-100
    SubjectDistance: 30-60

    "Camera5"
    LightLevel: 100-300
    SubjectDistance: 30-60

    "Camera6"
    LightLevel: 300-500
    SubjectDistance: 60-100

    "Camera7"
    LightLevel: 0-100
    SubjectDistance: 60-100

    "Camera8"
    LightLevel: 100-300
    SubjectDistance: 60-100

```

## Prerequisites and Running the server

We need to open 2 terminals in the project folder:

1. One for the backend, run these commands in the backend terminal

```bash
cd server
npm i
npm start
```

2. Another for the frontend, run these commands in the frontend terminal

```bash
npm i
npm start
```

Once both the servers are running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

