import "./style.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import CampaignListing from "./components/pages/campaignListing/CampaignListing";
import CampaignDetails from "./components/pages/campaignDetails/CampaignDetails";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/campaigns">
        <CampaignListing />
      </Route>

      <Route exact path="/campaign-details">
        <CampaignDetails />
      </Route>

      <Route>
        <h1>4040</h1>
      </Route>
    </Switch>
  );
}

export default App;
