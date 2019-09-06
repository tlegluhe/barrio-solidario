# Barrio Solidario 

Application to help neighbors help each others

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. 

### Prerequisites

NodeJS 10.16.3
npm 6.9.0
MongoDB 4.2
Android studio 3.4.2

Get Android studio working using this tutorial in the react-native-cli tab at https://facebook.github.io/react-native/docs/getting-started.html

SDK 1.8.0_221

## Installing

First clone this repository 
`git clone https://github.com/tlegluhe/barrio-solidario.git`

#### Backend dependencies

In barrio-solidario/backend folder : `npm install` 

#### Create database

Make sure that you got mongodb installed, and that the a folder C:/data/db exists
In barrio-solidario/backend folder : `npm run populate`

#### Frontend dependencies

in barrio-solidario/frontend folder : `npm install` 


## Running

In backend folder `npm run start`

In frontend folder `react-native start`

Open the project in android studio `.../barrio-solidario/frontend/android`
Run it with an android virtual device or witha a real device if you can.
I suggest using the Pixel 2 with API level 28

Now you're supposed to see the application running !! 
The modifications you make in the react native sources (like the App.js file) should be shown in the virtual device on refresh !