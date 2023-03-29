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

For the end to end unit testing it starts on the homepage and scans for the "Get started" button. Once it clicks on the button it goes to the Login page. The test then checks if it is on the correct url by checking if it includes "/login". Once it passes that it types into the username field "edwin.a.salcedo02@gmail.com" then checks if "edwin.a.salcedo02@gmail.com" is what was actually typed in. After that it does the same thing for the password field. Once logged in it will automatically redirect the user to the postfeed page where the test checks if we are on the correct url. It then clicks on a red 'add" button where a create post component will pop up which allows for the user to type in a recipe/caption and also an image of their food.
For the login unit test we tested the login form by making sure we can type into every field. We also did this to the other states of the login page such as the register state where there are 3 fields, the forget password state where there is 1 field and the login state which has 2 fields.
For the create-post component test it checks if we can type into the text area and also makes sure the select image and post buttons are visible to the user.
For the navbar component test it checks the labels of the navbar to make sure they are correct and in right order
For the email-verification component test it basically makes sure that an unverified user sees the correct page if they haven't verified their email yet.
The postfeed component test basically just checks if the css background works.
