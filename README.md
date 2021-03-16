# Proxistore Test

Here is my final take on the test for Proxistore : a two-paged app created with React and SASS.

## What works

The app displays data from the API, with a page regrouping campaign thumbnails and another giving details about a selected campaign.

## What doesn't work

The "Add Campaign" button doesn't do anything but it made sense for me to put it there.
The "Options" button on the campaign thumbnail doesn't work because I lacked time, but again it made sense to have it if needed.

## What kinda works

The styling is still a work-in-progress, obviously.
The searchbar only allows for a search by ID. The possibility to search a campaign using its name could have been an option but it would make more sense to add this feature to the API instead of brute-force it into the app.
As it is some campaign's details can be changed (timeslots, target keys) but the update get lost when the page is reloaded.
Also the timeslot block isn't fully responsive yet.

### To run the app locally

As any React app you can run the project using "npm start" in the terminal.

### For an online version

The app is running on Heroku at this URL :
https://proxistore-app.herokuapp.com/

Thank you for taking the time of reviewing my work.
If you think it achieved the level you are looking for, feel free to contact me via mail at contact@lucasgeshef.be

Lucas Geshef
