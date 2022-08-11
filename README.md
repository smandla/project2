# Rooting For You

### [Live Page](https://rooting-for-youu.herokuapp.com/)

## Description
The application uses a mysql database to hold information related to the RootingForYou users post data, commment data, vote data, and login credentials. It has a home screen that shows all users posts and a nav bar that brings the users to a user login page, your own plants, or a get advice page that you can use to make a post. If a user is logged in they can click on a post and view more details, see the original posters problem, and like and comment other peoples comments. The project was a group effort that was meant for us to better understand and use mysql and relationships.

Relationships:

USERS has many Plants <br>
USERS has many Comments<br>
USERS has many Votes<br>

PLANTS belong to many Users<br>
PLANTS has many Votes<br>
PLANTS has many comments<br>

VOTE belongs to a Plant<br>
VOTE belongs to a User<br>

COMMENT belongs to a User<br>
COMMENT belongs to a Plant

(see [Credits](#credits)).

Unifying and omtivating these features is the following simple user story:

```md
AS A USER I want to add a plant post with and seek help from other plant people
So that I can go and post a plant with information about my plant

AS A USER I want to like a comment  
So that I can view a post's highest rated comment and comment any comment for that post

AS A USER I want to login or create a new user
So that I can view my own plants and add plant posts

AS A USER I want to view all my plants
So that I can see users comments, likes, and view details of the plant

AS A USER I want to view all users plants 
So that I can go to the home screen and view everyone else's posts

AS A USER I want to be logged in to see my personal content
So that I feel safer as a user and more secure
```

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Learning Objectives

---

To work together as a team and develop an application that uses a mysql database.

## Installation
Visit the deployed link 

Or

Clone repository and run on local machine <br>
have mysql installed<br>
Using node do an npm i<br>
do a npm run seed<br>
run the server on your localhost

## Usage

On page initialization, the page will look like the following:
![Home Page](https://github.com/smandla/rootingForYou/blob/main/gifs/RFUHomepage.gif)<br>
Login Functionality:<br>
![Login Page](https://github.com/smandla/rootingForYou/blob/main/gifs/RFULoginfunctionality.gif)<br>
View Your Plants Functionality:<br>
![View Your Plants Page](https://github.com/smandla/rootingForYou/blob/main/gifs/RFU%20ViewYourPlantsFunction.gif)<br>
Post Functionality:<br>
![Post Page](https://github.com/smandla/rootingForYou/blob/main/gifs/RFUPostFunction.gif)<br>

---

## Features

In addition to displaying various pieces of information, the site includes several features to improve user experience by handling edge cases and making the site more intuitive. Each of these features have been designed in terms of user needs.

```md
GIVEN I am User

WHEN I like a comment
THEN I can unlike that comment

WHEN I create an account
THEN I must have a password that is atleast 8 characters long

WHEN I want to mute the background noise
THEN I can click the sound Icon

WHEN I want to view the site on a different device
THEN The website is responsive

WHEN I make a new account 
THEN my password is hashed for better security
```

---

## Credits:

### Created by:

[Kavya Mandla](https://github.com/smandla)  
[Jonathan Mengel](https://github.com/digggggg)  
[Daniel Stefani](https://github.com/DStefani86)

### With the Help of:

[JQuery](https://jquery.com/) |
[Javascript](https://www.javascript.com/) |
[Tailwind](https://bulma.io/) |

[Figma](https://www.figma.com/) |

### Logo from:

change to Looku
[Tailor Brands](https://www.tailorbrands.com/)
https://www.youtube.com/watch?v=sMZL_RC24To&t=28s

https://www.youtube.com/watch?v=Qh63phquoYk&t=202s

### Documentation:

[MDN Web docs](https://developer.mozilla.org/en-US/) |
[W3 Schools](https://www.w3schools.com/) |
[Stack Overflow](https://stackoverflow.com/) |

---

## [License](./LICENSE)

MIT License
