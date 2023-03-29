Tasks Completed: Frontend and backend now communicate for API, added a database to handle user info and posts, working username password system, email verification to prevent scam accounts, users can post picture, users can have a bio, users can create a custom username, posts can have a description, user can search for recipe and a links will come up, links are clickable.

API Documentation:

Recipe API:
	Method Type: GET

	Request: The api sends a request to rapid API using the unique user key, which then rapid API send a request to the web server to retrieve the information

	Response: The user inputs a query words then the API will return all searches that match the query word. For this particular API you get title of recipes, igredients, serving size, and instructions. 

Video API:
	Method Type: GET

	Request: The api sends a request to rapid APi using the unique user key, which then rapid API 	send a request to the web server to retrieve the information

	Response: The user inputs a query words then the API will return the top most youtube videos that 	match the query word. The API automatically sorts which youtube videos are deemed relevant.

Backend Unit Tests:

For backend we have unit tests for both video API and recipe API to see if the code was reading inputs correctly. If there is a number in the input the code should output "enter a valid input" but if the input is valid then the relevent data is displayed. Our unit tests check if this process is happening properly.

Frontend Unit Tests:

For the end to end unit testing it starts on the homepage and scans for the string "Login". It will then click on the Login page where it goes to login page. The test then checks if it is on the correct url by checking if it includes "/login". Once it passes that it types into the username field "fakeuser" then checks if fakeuser is what was actually typed in. For the unit test we tested the login form by making sure we can type into it.