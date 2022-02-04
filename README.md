![logo](/client/src/assets/images/clear8.jpg) 

# OkCreature

## Objective

OkCreature has been designed to help potential adopters narrow the search for a pet. The matching feature allows users to filter our pet database based their lifestyle, their preferences and the level of care that they are able to provide. 

## Link

- See our live application here: 

## Table of Contents
- [Usage](#usage)
- [Application Requirements](#application-requirements)
- [Motivation for Development](#motivation-for-development)
- [User Story](#user-story)
- [User Workflow](#user-workflow)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Successes](#successes)
- [Directions for Future Development](#directions-for-future-development)
- [Screenshots](#screenshots)
- [Contributors](#contributors)
- [Learn More](#learn-more)
- [License](#license)

## Usage
### Web Application
1. Install the npm packages using the command: "npm install" or "npm i"
2. Start OkCreature application via "npm run develop"
3. OkCreature will open a new new broswer window at https://localhost:3001

### Server Side
1. Navigate to server directory using the command: "cd server"
2. Install npm packages via "npm i"
3. Start up the server with "npm run watch"
4. Go to https://localhost3001/graphql to test the mutations and queries

## Application Requirements

- Use React for the front end.
- Use GraphQL with a Node.js and Express.js server.
- Use MongoDB and the Mongoose ODM for the database.
- Use queries and mutations for retrieving, adding, updating, and deleting data.
- Be deployed using Heroku (with data).
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Include authentication (JWT).
- Protect sensitive API key information on the server.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, quality comments, etc.).
- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application)

## Motivation for Development

As we are currently in a pandemic, the rate of pets being bought and returned has grown substantially. These returned pets are not only sad and lonely, but are also back on the hunt to find a forever home. As each member in this group is a pet lover, we felt the need to create a webpage that can help bring pets and adopters together to fill this void!

## User Story

I am looking to adopt a pet but I don’t want to spend time searching and clicking through large databases. 
I want to be able to to enter my preferences and search criteria, and to have my results saved to my profile.
I want to be able to come back to the webpage and have my results be saved in on my profile page.

## User Workflow

WHEN I log in to my profile
THEN I see a list of summary cards with photos for each pet
WHEN I choose to take the matching quiz
THEN I have the option to select my preferences by checking boxes
WHEN I submit my quiz 
THEN my best matches are displayed
WHEN I log out and log back in
THEN my matches are persistent

## Technologies Used

- MongoDb
- Express
- React
- Node.js
- GraphQL
- Apollo
- JavaScript
- React-bootstrap

## Challenges

- New skills and technologies - we chose a challenging project idea and had to work hard to find ways to solve problems that we had not encountered in lessons.
- Reading documentation and Stack Overflow - sometimes helpful and sometimes way too much information!

## Successes

- Planning: We planned extensively and did not move to work on the client side until our back end code was fully tested and complete
- Collaboration: We worked together on all the initial code and planning
- Communication: We communicated ALL the time
- New Ideas: We got to try some new ideas and to try writing code that was different from the lessons

## Directions for Future Development

This project has a lot of potential for development as this is only the MVP. 

We would like to enhance the user experience by…

* Allowing searches more pets by filtering search criteria
* Ability to retake the quiz and update match results
* The option to save pets to a list of favourites 
* Displaying matching percentages on result page
* Allow selection of multiple answers per question*

Scalability would be an important focus of future development. Current matching functionality works with a smaller database of pets.

We would like to make this a Progressive Web Application by employing service workers AND provide users with the opportunity to make charitable donations to local animal shelters through our application via the Stripe payment platform.


## Screenshots
![home](/client/src/assets/images/home.jpg)
![signup](/client/src/assets/images/signup.jpg)
![landing](/client/src/assets/images/landing.jpg)
![quiz](/client/src/assets/images/quiz.jpg)


## Contributors
### Please feel free to contact us with any questions

* Felicity Brammer | 
  Contact email: felicitybrammer@gmail.com |
  GitHub: [felicitybrammer](https://github.com/felicitybrammer)
* Ravneet Panglia |
  Contact email: ravneetpanglia@gmail.com |
  GitHub: [rpanglia](https://github.com/rpanglia)
* Makda Girmay |
  Contact email: makdagirmay4@gmail.com |
  GitHub: [maks-pixel](https://github.com/maks-pixel)
* Michelle Nijjar |
  Contact email: michellenijjar@hotmail.com |
  GitHub: [mnijjar24](https://github.com/mnijjar24)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## License
This project is unlicensed