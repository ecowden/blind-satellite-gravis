Blind Satellite Public Website
==============================

** Work in progress!  Work in progress! **

Getting Started
---------------

*Remember to use sudo if you're on a *nix platform!*

1. Install [Node.js](http://nodejs.org/)
1. Grab global Node packages.  We'll use these soon.  These are basically treated like extra little tools sitting
around the computer.  You can reuse them outside of the project.

        npm install -g bower
        npm install -g grunt
        npm install -g testacular

1. Grab local node packages.  These are defined in the package.json file and are specific to this project.  They may
change over time, so it's a good idea to update after checkouts and such.

        npm install

1. Use Twitter's [Bower](https://github.com/twitter/bower) package manager to grab JavaScript, LESS and other static
resource dependencies.  We sometimes link to these from CDN for the live site, but it's nice to have local versions for
reference.

        bower install

