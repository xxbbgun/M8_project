# M8 Project - Twiter

## About the project
This is a website about communication and daily news. Access to the website requires a membership or login. When the user has successfully logged in They will be able to access the website and use it.
## Feature
- Register & Login
- Tweet
- News
- Notification
## Preview Project
## Developed with
- React
- Node js
- MongoDB
## Setup and Getting start Project
1.Clone the repositories
```
https://github.com/xxbbgun/M8_project.git 
```
2.Install frontend dependencies
```
$ cd react-app
$ npm install
$ npm start
```
3.Install backend dependencis
```
$ cd server
$ npm install
$ node server.js
```
## API Integration
- Facebook login
  - https://developers.facebook.com/?no_redirect=1
- nytimes
  - https://developer.nytimes.com/
- weather
  - https://openweathermap.org/api
## API authentication mechanisms before starting playing around with the application
I use JWT authentication mechanisms  in my project,because it easy to authenticate and set up deverlop.
## API authentication mechanisms
 In term of API authentication mechanisms to access path in application, the user must be authenticated by login before using our application.  When user loggin success user will get the token back as jwt .Then the application will check user token in every path by passport-jwt Strategy for verification.If user don't have token they can not access a function.
## Contact
- Email : Kanticha_sr@elearning.cmu.ac.th
 
