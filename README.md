# 3813ICT-Week4

A simple Angular web log in app using 3 components (Home, Login and Profile).

## Commands Used

### 1. Create the app

To create the Angular app, we use `ng new week4tut`

### 2. Install dependencies

To install dependencies, we follow these steps:

1. `npm install bootstrap --save`
2. Open angular.json file
3. Add the installed dependency for styles.
   1. `"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css"],`
4. Add scripts object
   1. `"scripts": [ "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" ]`
      
### 3. Generate new components

For each component, we run `ng new "name of component"`. For example:

1. `ng new Home`
2. `ng new Login`
3. `ng new Profile`

### 4. Serve the application

To serve the application, we run `ng serve`
