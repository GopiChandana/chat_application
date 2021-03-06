
> A Real Time Chat Application powered by Socket.io and Express that facilities real time conversations with your friends when joined in same chat rooms with additional features of text to emoji conversion,scrollable chat and also admin notifying the other group users when someone joins the group or leaves the group.

## Table of contents
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)


## Screenshots
![Landing Page](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4126).png?raw=true)

![ Page1](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4127).png?raw=true)

![Page2](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4128).png?raw=true)

![Page3](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4129).png?raw=true)

![Page4](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4130).png?raw=true)

![Page5](https://github.com/GopiChandana/chat_application/blob/master/Screenshots/Screenshot%20(4132).png?raw=true)


## Technologies
### Frontend
* React
* React-emoji
* socket.io-client
* React-scroll-to-bottom
### Backend
* Express
* socket.io

## Setup
```
To Run locally, firstly you need to clone the project use below command to clone the project
git clone https://github.com/GopiChandana/chat_application.git <your_directory_name>
```
* Nagivate to the client folder and install required packages using ```npm install``` and run the application using ```npm start```
* Similarly, navigate to server folder and install required packages using ```npm install``` and run the server using ```npm start```
## Features
* Live conversations
* Text to emoji conversion
* Notifications from admin when someone leaves the group or joins the group.
* Smooth scrollable feature.

Additional Features to be added:
* Chat data should be made persistent by integrating with databases.
* When users with same name are entering into the chat rooms It doesnt allow to enter the room but also need to add a alert to show that users with same names are not allowed.


