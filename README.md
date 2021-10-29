# M8 Project - Twiter

## About the project
This is a website about communication and daily news.
## Feature
- Register & Login
- Tweet
- News
- Notification
## Preview Project
![Twitter](https://user-images.githubusercontent.com/84011892/139427898-ceb03cd6-460a-47eb-94bb-7705ccca2de2.png)
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
Before starting the application Users must create and log in to an account. After they log in they will be able to access the website. They will receive a token after logging in. I then use the JWT authentication mechanism in my project as it is easy to verify and set up development.
## API authentication mechanisms
In terms of API authentication mechanisms to access the path in an application, the user must be authenticated by login before using our application. When the user login success, the user will get the token back as jwt.Then the application will check user token in every path by passport-jwt Strategy for verification. If users don't have token, they can not access an application and some API.
## You have to explain why his or her application is useful, who will be the potential users?
This application is helpful for those who want to communicate with their friends or others and stay up to date with the day's latest news. People who interested in communication and information exchange between groups are the target audience of this application.
## Contact
- Email : Kanticha_sr@elearning.cmu.ac.th
 
