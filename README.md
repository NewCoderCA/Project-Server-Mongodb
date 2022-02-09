# Project Server with Node, Express and MongoDB Database :smiley: 

## Initialise on GitHub
- Create new repo in `Github` with `.gitignore` file 

## Initialise locally on Terminal 
- `npm init -y` Generate an empty npm project
- `npm install express ejs mongoose` Install Express Ejs and MongoDB as a dependancy of your project
- `npm i --save-dev nodemon` Install package as a development dependency
- `npm run dev` Update scripts in package.json with `"dev:npm nodemon [name].js"`

## Connect repository on GitHub
- Create new repo and follow steps on command line in Terminal

## Installing EJS-Lint (Spellchecker)
- Install `npm install -g ejs-lint` so Linter/Syntax Checker can run through project
- Run `ejslint .` to check for errors when `include()` methods are used in files

## Installing action=method override 
- Install `npm i method-override` in order to use DELETE as method within form

## Installing Cypress for E2E Testing 
- Install `npm install cypress -D` or `npm install cypress --save-dev` to Install and save 
- Open Cypress `./node_modul
es/.bin/cypress open`
- Run Cypress in terminal `npx cypress run`
- Run Cypress in browers ` npm run cypress:open`
