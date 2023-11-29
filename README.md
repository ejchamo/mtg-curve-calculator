# MTG-Curve-Calculator

Magic The Gathering is a trading card game played for over 30 years. 
This app allows users to analyze their deck of cards for statistics about their first 6 turns in the game. 
A user may then edit their deck and export to the virtual game MTG Arena.

## Description

Mtg-Curve-Calculator is a monolith app with Express backend and Typescript React frontend in NodeJS utilizing a PostgreSQL database.
The app imports a user's deck from the online game Magic The Gathering Arena and provides stats about card playability.
The stats are calculated by performing simulations with 0(n * m) time complexity where n is the number of simulations (10,000) and m is the number of cards in the deck(~60); results instantly renders.
The app has integrated the Scryfall API to search for cards to add to a user’s deck.
After edits are made a user may save their deck and export it to the online game Magic The Gathering Arena.


## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing / Executing

* After locally cloning the repository, run ```$ yarn install``` while in the root directory to install dependencies.
* After installing, run ```$ createdb mtg-curve-calculator_development``` to create the PostgreSQL database.
* After creating the databse, run
  ```
  $ cd server
  $ yarn run migrate:latest
  ```
  to create the database schema
* After creating the schema, run
  ```
  $ cd ..
  $ yarn run dev
  ```
  to start the app. Then visit http://localhost:3000/ via a browser to visit the app.
