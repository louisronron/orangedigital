# Orange Digital React Challenge

This is the submission for the Orange Digital React Challenge. This project is a basic web application satisfying the layout and specifications provided at [https://bitbucket.org/orangedigital/od-react-challege/src/master/](https://bitbucket.org/orangedigital/od-react-challege/src/master/).

## Installing & Running App

To install and run the project:

1. Clone this repository to your local machine.
2. Run `yarn install` in terminal to install dependencies.
3. Run `yarn start` in terminal to start both backend/frontend.
4. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

## Backend API

In the `backend` folder, the project includes a simple ExpressJS server that serves a RESTful API with endpoints corresponding to each of the two pages in the application: gallery page and detail page. The JSON includes the following information:

* Page Name
* User Details
* Video Details
* Pictures Details

Note: The server uses the Express.js framework and the cors package to enable cross-origin resource sharing on local machine.

## Frontend React
* In the `frontend` directory, the frontend of the app uses the React Framework and is mostly written in Typescript.
* The project uses the Material UI library for styling the React components. Custom styles are implemented using Emotion, a CSS-in-JS library.
* The app features two main pages: The Gallery page, and the Details page. React components are built around these two page components.

## Coding Guidelines

* The code follows the eslint guidelines for JavaScript linting.
* The code follows the stylelint guidelines for SCSS linting.
* The editor is configured using the editorconfig file.
* The code is written functionally and is testable.
