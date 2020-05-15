# Victory Exchange
### A simple taproom menu app made with React. 
### _By Dusty McCord. May, 2020_

## Description
This app will provide a space for neighbors and friends to exchange items from their gardens with other gardeners.

### [Link to working demo](#)
Coming soon...


## User Stories
|Component|Story|
|:---:|:---|
| User Accounts | Users should be able to sign up for an account.
| Neighborhood pods | Users should be able to join or make a Pod based on neighborhood|
| Post a offer | Users should be able to create, update, and delete an offer inside of a pod |
| Replies | Users should be able to reply to an offer and orginize a trade |


### Stretch Goals

|Component|Story|
|:---:|:---|
| Photo uploads | Users should be able to upload photos for their offers and profiles|
| Requests | Users can request an item they would like |
| User Profiles | Users can create and update a profile |
| Filters | Users can filter offers by categories or item type|
| E-Mail Notification | Users can recieve email notifications when someone as replied to their posts |
| Slick animations | Use cool animations through out the UI |

## MVP
* User registration (database storage)
* User login/sign-out (with database authentication)
* User can join a Pod
* User can add a Pod
* User can browse offers made in a Pod
* User can make an offer in a Pod
* User can reply to an offer in a Pod
* User can remove an offer from a Pod

  
## Component Diagram / Wireframe

![Component Map](/nodeMockUp.jpg)
## Installation instructions

<details>
<summary><strong>Setup/Installation Requirements</strong></summary>

#### Node install
If you do not already have it installed please find a guide for your operating system here
[Installing Node.js](https://nodejs.org/en/download/)


Clone the project by typing this command into your terminal.
```sh
git clone https://github.com/dustatron/victory-exchange.git
```
Navigate to the new project folder by typing:
```sh
cd victory-exchange
```
Install all required packages with this command:
```sh
npm install
```

Create an new file named '.env'
```sh
touch .env
```

Sign up for an account with Google Firebase and start a project. For more details follow this getting started guide. 
[Getting started with Google Firebase](https://firebase.google.com/docs/storage/web/start)

Please this into your new .env file. Fill in these details with the API keys you got from Google Firebase.
```sh
REACT_APP_FIREBASE_API_KEY = "provided by google firebase"

REACT_APP_FIREBASE_AUTH_DOMAIN = "provided by google firebase"

REACT_APP_FIREBASE_DATABASE_URL = "provided by google firebase"

REACT_APP_FIREBASE_PROJECT_ID = "provided by google firebase"

REACT_APP_FIREBASE_STORAGE_BUCKET = "provided by google firebase"

REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "provided by google firebase"

REACT_APP_FIREBASE_APP_ID = "provided by google firebase"

```

In the project directory, you can run: 

 ```sh
 npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

 ```sh
 npm test
```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 ```sh
  npm build
 ```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

 ```sh
  npm eject
 ```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
</details>

## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
* [React](https://reactjs.org/)
* [React Bootstrap 4](https://react-bootstrap.github.io/) - Used for styling
* [React-Router](https://reacttraining.com/react-router/)
* [React-Redux](https://react-redux.js.org/)
* [React-Redux-Firebase](http://react-redux-firebase.com/docs/getting_started)
* [Firebase](firebase.google.com)
* [Firebase Auth](https://firebase.google.com/docs/auth)
* [FireStore](https://firebase.google.com/docs/firestore/?gclid=CjwKCAjw7-P1BRA2EiwAXoPWA3JGLAS3VwXY2zaUzOp9A9HT48EkVZ2W-4zNy2RIbzTwlxH2ujiiTxoCWVUQAvD_BwE)
* [Node.js](https://nodejs.org/en/)




### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Dusty McCord_**
