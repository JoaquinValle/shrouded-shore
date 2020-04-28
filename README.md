# [Not The Same Game](https://shrouded-shore-54599.herokuapp.com/top)

Not The Same Game is a web application that, with a simple interface, allows users to like board games, search by name, category, and popularity, and get recommendations based on likes.

The landing page displays the newest games available. Utilizing the navbar you can change between the different pages.

![nav](https://evolatum.github.io/Portfolio/assets/images/ntsg-nav.PNG)

The top pages displays the most popular board games at that moment, each with the number of players and the average play times, as well as an image and brief description.

![each](https://evolatum.github.io/Portfolio/assets/images/ntsg-part.PNG)

Each of the previews can be clicked to take you to the game's page, where besides the information in the preview, adds the minimum age to play, year published, designers and publisher, if available. Next to the game's name is where the user can save the game. At the bottom there's a link to each of the caregoties of the game, which link you to that specific category. 

![game](https://evolatum.github.io/Portfolio/assets/images/ntsg-game.PNG)

Additionally, you can see all the categories available, which when clicked will display previews of the top games of the category, in the same way as the top or new games pages.

![categories](https://evolatum.github.io/Portfolio/assets/images/ntsg-categories.PNG)

The user can also choose to search by complexity, where the games will be filtered based on the average duration, and displayed by popularity.

![complexity](https://evolatum.github.io/Portfolio/assets/images/ntsg-complexity.PNG)

Lastly, the users can search with any key word for a specific board game's name, displaying the most relevant and popular games that contain the searched keywords.

![search](https://evolatum.github.io/Portfolio/assets/images/ntsg-search.PNG)


The application was developed with the MERN stack (MongoDB, Express, React, and Node.js), using AXIOS for API calls, and Materialize for visual design. All of the board game's data is pulled from the [Board Game Atlas API](https://www.boardgameatlas.com/api/docs), and only the users and the id of their likes games are saved in our database using Mongoose to connect to the MongoDB database.
