# SWAPI Planets Data Display

This project displays a page from the [StarWars Planets API](https://swapi.dev/api/planets/) (SWAPI) in your browser.

## Running the Application

### Requirements
I built this project using
 - node v14.5.0
 - npm 6.14.5

### Configuring your Environment
By default, the webserver will listen for requests on port 3000. If you want to change that, add a top-level file called `.env` to the project an specify your prefered port. For example:

```
-- .env --
PORT=8080
```

### Starting the App
Run the following command in your favorite shell in order to install project dependencies

```	
npm i
```

Run the following to start the app

```
npm start
```

If `react-scripts` doesn't automatically navigate you to the webapp in an open browser session, navigate to `http://localhost:3000/` in your favorite web browser