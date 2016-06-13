# Weather-Widget
A widget that displays weather data from any city/state combination and displays a 5-day forecast.

## Project Setup
This project uses bower and npm to manage certain dependencies so after cloning the repository run the following commands.
```
bower install
npm install
```

## Project Architecture
This project uses require.js to manage script dependencies; this keeps you from having to worry about keeping your scripts in the proper order.
 
You'll notice the use of IIF's (Immediately Invoked Functions) throughout the application; these are recommended by the John Papa Angular style guide. They look like the following code below.
  
```javascript
(function() {
    // code will go inside here
})();
```

## Gulp
The project is setup to create a minified version of the library using gulp; gulp is one of the libraries installed by the npm install. The gulp command used to build the project library looks like the following.

`gulp build`

This will build both the angular project and the project css and place the files in the 'dist' folder at the projects root.

## Dependencies
This project relies on the angularjs framework so if the library is going to be put into another project the angular dependency needs to be declared before this projects dependency like below.

```html
<script src="angular.js"></script>
<script src="weather-widget.js"></script>
```

Also the project's css needs to be placed in the main pages <head> section but since it is independent of any other framework it can be put in any order.

```html
<link rel="stylesheet" href="weather-widget.css" />
```

## Usage
The control uses a directive to be displayed on a page the directive is quite simple and looks like this.

```html
<weather-widget city="McLean" state="VA"></weather-widget>
```

To change the location where the weather data is retrieved from the city and state attributes can be changed to a new location.

## Future upgrades
Thoughts on future upgrades are

- The width and height of the control could be set through directive attributes
- The number of forecast days could be set through a directive attribute
- Instead of directive attributes there could be settings dialog to set all of the suggested settings