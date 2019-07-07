# friend-finder
A friend finder that is compatibility -based that uses express that takes in results from surveys and compares them to the answers of the other users.

# Synopsis
We will use express to handle client-side requests to respond with a matched person that share calculated scores  

# concept review/questions
Reviewing the capabilities of node we now understand that express is a library comprised of nodes own. We use the key topics of http POST requests, GET requests, routing, and postman testing environments to handle these operations made by the client.

1. what is routing
* routing is the handling of client-side actions by responding to requests with application endpoints/URL's

2. how does the request-response pattern work
* a client registers a request on the front side to the server backend that is then given a response that corresponds to the actions of the client

3. What is sent when a client makes a POST request?
* The http method sends data to the server that is comprised of, typically, HTML form inputs

# about server.js
Our server uses the express package to handle our post and get methods as well as the rest of the dependencies such as `var path = require("path")` that is required from node to serve our static files.

We include `app.use` to handle our middleware that responds to, in this case, routes that contain json data and parses urlencoded requests

Our server.js file requires two corresponding js files that handle either the api routing or html routing.

We then conclude the file with listening the listen method that express provides to us for connections on specified hosts and ports

# about .html files



