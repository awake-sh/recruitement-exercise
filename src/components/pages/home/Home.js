import React from "react";
import MainPageLayout from "../mainPageLayout/MainPageLayout";

const Home = () => {
  return (
    <MainPageLayout>
      <h1>Proxistore Test</h1>
      <p>
        Here is my final take on the test for Proxistore : a two-paged app
        created with React and SASS.
      </p>
      <h2>What works</h2>
      <p>
        The app displays data from the API, with a page regrouping campaign
        thumbnails and another giving details about a selected campaign.
      </p>
      <h2>What doesn't work</h2>
      <p>
        The "Add Campaign" button doesn't do anything but it made sense for me
        to put it there. The "Options" button on the campaign thumbnail doesn't
        work because I lacked time, but again it made sense to have it if
        needed.
      </p>
      <p>
        The "Options" button on the campaign thumbnail doesn't work because I
        lacked time, but again it made sense to have it if needed.
      </p>
      <h2>What kinda works</h2>
      <p>The styling is still a work-in-progress, obviously.</p>

      <p>
        The searchbar only allows for a search by ID. The possibility to search
        a campaign using its name could have been an option but it would make
        more sense to add this feature to the API instead of brute-force it into
        the app.
      </p>
      <p>
        As it is some campaign's details can be changed (timeslots, target keys)
        but the update get lost when the page is reloaded.
      </p>
      <p>Also the timeslot block isn't fully responsive yet.</p>
      <h2>To run the app locally</h2>
      <p>
        As any React app you can run the project using "npm start" in the
        terminal.
      </p>
      <h2>For an online version</h2>
      <p>The app is running on Heroku at this URL :</p>
      <a
        href="https://proxistore-app.herokuapp.com/
"
      >
        https://proxistore-app.herokuapp.com/
      </a>
      <p>Thank you for taking the time of reviewing my work.</p>
      <p>
        If you think it achieved the level you are looking for, feel free to
        contact me via mail at contact@lucasgeshef.be
      </p>
      <p>Lucas Geshef</p>
    </MainPageLayout>
  );
};

export default Home;
