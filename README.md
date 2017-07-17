# NG-Ubigeos project by Nicolás Sigal

### Frameworks/Libraries that i used: nodeJS, express, AngularJS 1.6.5, Angular-ui-Router, jQuery, webpack, sass.

- Plain file ubigeos.txt is located inside mock folder, this file is consumed on demand by an API that is on server.js 
- GET /api/ubigeos is called by the ubigeos services (/src/services/ubigeos/ubigeos).
- Styles are written in sass and built using node-sass.
- Bundles and minification are made with webpack.
- Source maps are disabled by default.

### Instructions to run this project
Run:
```sh
$ npm install
$ npm start 
```
Open http://localhost:3000/ to launch the Application.
