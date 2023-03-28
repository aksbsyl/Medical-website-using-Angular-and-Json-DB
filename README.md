# CapstoneProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
--------------------------------------------------------------------------------------------------------------------------------
VSCode 
Install beautify
Theme: One Dark Pro,Andromeda, Dark Horizon
Install: vscode-icons

System setup:
1.	Install: NodeJS
www.Nodejs.org/en/download
2.	Install/upgrade: Angular CLI
npm install -g @angular/cli

Use on Terminal: sudo npm install -g @angular/cli

3.	Install the JSON-server
npm i json-server

Mac commands:
Terminal: Ctrl + `
Sidebar: Command + B
Keyboard shortcuts: Command+K+S

VSCodecommands
cd: change directory
mdir: make directory/folder
ls: list all directory

After installing angular
1.	To create new project: ng new my-angular-project --force  
Then, goto main angular folder and
2.	To install all folders: sudo npm install   
3.	To compile: Ng serve
To compile and open: ng serve –open
4.	Add Angular Material UI: sudo ng add @angular/material
5.	Import toolbar API in app.module.ts: import {MatToolbarModule} from '@angular/material/toolbar'; 
And add under imports: MatToolbarModule

Source: https://material.angular.io/components/toolbar/api
6.	Install tailwindcss:
![image](https://user-images.githubusercontent.com/50483193/228383422-d91f569b-d147-4f94-a6e3-294931b05e01.png)

7. Add to angular.json
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js",
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/jquery/dist/jquery.slim.min.js",
          "node_modules/popper.js/dist/umd/popper.min.js"]
  8. Install jquery
  npm install -g json-server
  
  9. Install bootstrap
  npm install bootstrap@3
  
  10. Add popper.js
  npm i @popperjs/core
  
  11. Add to index.html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <!-- Google fonts-->
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:700,800&amp;display=swap">
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400&amp;display=swap">
   
   12. To run
   a. json-server --watch db.json
   b. ng serve
