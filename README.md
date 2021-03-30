## Task

A web application using javascript, html, css and js along with any framework/libraries of your
choice. The web application being created will be used to take an artist and show details
about the artist and their events.

## Installation and Setup Instructions

Clone down this repository link.
https://github.com/ArslanAkhtar/KT-Search-Assignment
You will need `node` and `npm` installed globally on your machine.  
Installation:
`npm install`  
To Run Test Suite:  
`npm run test`
To Check Coverage Area of Tests
`npm run test -- --coverage --watchAll=false`  
To Start Server:
`npm start`  
To Visit App:
`localhost:3000/`  
http://assignment-kt.veloz-tech.com/

## Reflection

It was a one pager coding assignment comprised of fetching Bandsintown API on basis of artists' names and displays their details and events. I implemented the assignment using react, jsx, material UI, ANTDesign and a chunk of CSS styling and javascript. There were multiple ways to implement the same assignment using same frameworks. I tried to choose the simpler and optimized ones to make the application more efficient and less complexed. It could have been implemented using redux or useContext hooks, but I used useState hooks due to the smaller scope of application and due to some unforeseen situations in personal life couldn't give much time to this task. I implemented the unit tests using jest and enzyme libraries' shallow and implemented snapshopt test for component. Why I used shallow rendering is because shallow rendering is useful to constrain tester to testing a component as a unit, and to ensure that his tests aren't indirectly asserting on behaviour of child components.
For bonus features I deployed the web application on server the link mentioned below:-
http://assignment-kt.veloz-tech.com/
Other than that I added my resume as another feature in web application and tried to play with some UI aesthetics to make it look more attractive.
