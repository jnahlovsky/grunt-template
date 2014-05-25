Grunt starting template
===================================

[Grunt](http://gruntjs.com/) template, comes with basic styling/UI elements, including [Font Awesome](http://fortawesome.github.io/Font-Awesome/) and a handy [media query mixin](https://medium.com/sass-syntactically-awesome-style-sheets/889927b37740).

## Prerequisites

    Git
    Node
    NPM

## Installing

    # clone project into directory of your choice
    git clone git@github.com:leetomblin/grunt-template.git
    
    # cd into directory and run:
    npm install
    
## Usage

Once installed run `grunt` - this will start the local server, which can be viewed at http://localhost:1234. Along with the server, livereload will be running and watching for file changes. Livereload is included in the connect config, so no need for browser extensions.

CSS output is compressed via [grunt-sass](https://www.npmjs.org/package/grunt-sass).

To minify JS, run `production` this will make application.js into app.min.js. This is not done whilst developing as compile times can add up.
