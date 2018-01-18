# server-side-react-skeleton

The is a skeleton for server-side rendering with ReactJS using react-router v4

### Starting the app:
* To install the dependancies: `yarn install`
* To compile the react code: `yarn setup`
* To run the app: `yarn start`

### The components:
* The react entry point is defined in the webpack config and lives in `./app/client.jsx`.
* `client.js` contains the id of the element in the index.html where the components will render.
* `app-route` uses `react-router-config` and calls the renderRoutes method while passing the routes props.
* `routes` sets up the routing of the app. The path is assigned a component which is rendered when the route is called.
* `app.js` combines the express routes with the react-router. The react components are rendered to a string and then 
passed to the template using the res.locals.
