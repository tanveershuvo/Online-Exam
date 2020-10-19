# Online Exam Taking App

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://daily-task-list.herokuapp.com)

### Technology Used

The app uses a number of open source projects to work properly:

* Vue Js - a progressive framework for building user interfaces!
* Vuetify - great UI boilerplate for modern web apps!
* Vuex - state management library for vue.js!
* Laravel 8 - the most trendy php framework for the backend!
* Tymon/JWT - JSON Web Token Authentication for Laravel!

# Setup and Environment

### Pre-requisite
* Composer 2.0
* Apache2/Xampp
* Node v10.19.0
* Npm 6.14.8
* Mysql 15.1

###Installation
1. Download code from github master branch
2. Run  `Composer Install`
3. Edit **.env** file. Add database information.
4. Add `MIX_API_URL=http://127.0.0.1:8000` to .env file
5. Run `php artisan migrate:fresh --seed`
6. Run `npm run dev`
7. To start development server, run `php artisan serve`

### Credentials for login
User Email| Password | Role
------------ | ------------- | -------------
tanveershuvos@gmail.com | 123456 | Admin



License
----

MIT


**This project has been developed by following best practices in software development!**
