import "./App.css";
import Intro from "./component/intro";
import FeaturesSection from "./component/featuresSection";
import AmerEssaLogo from "./assets/AmerEssalogo.png";
import { Grid } from "@mui/material";
import DeveloperTeam from "./component/developerTeamSection";
import LiveDemo from "./component/liveDemo";

function App() {
  return (
    <div className="App">
      <Intro />
      <FeaturesSection />
      <LiveDemo />
      <DeveloperTeam />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item justifyContent="center" alignItems="center">
          <h4
            style={{ fontFamily: "Lora", fontWeight: "1000", color: "white" }}
          >
            Created By
          </h4>
        </Grid>
        <Grid item>
          <img
            src={AmerEssaLogo}
            style={{ width: "150px", height: "150px" }}
            alt="AmerEssaLogo"
            onClick={() => {
              window.open("https://aameressa.netlify.app", "_blank");
            }}
          />
        </Grid>
      </Grid>
      <div style={{ padding: 5 }}>
        <h5 style={{ color: "white" }}>©Sado</h5>
      </div>
    </div>
  );
}

export default App;
