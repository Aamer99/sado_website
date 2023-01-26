import { Grid, Grow, Slide } from "@mui/material";
import React from "react";
import sadoLogo from "../assets/sadoLogo.png";
import screensOne from "../assets/screensOne.png";
import { motion } from "framer-motion";
function Intro() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      style={{
        height: "100vh",
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ padding: "20px" }}
      >
        <Grow in={true} timeout={1000}>
          <img src={sadoLogo} width={100} height={100} alt="sado Logo" />
        </Grow>
      </Grid>

      <Grid
        container
        xs={12}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid md={6} xs={12}>
          <Slide direction="right" in={true} timeout={2000}>
            <h1
              style={{ fontFamily: "Aboreto", fontSize: 80, color: "#e6c397" }}
            >
              Sado <br />
              Restaurant
            </h1>
          </Slide>
        </Grid>
        <Grid className="screensOneContinuer">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 5 }}
          >
            <img src={screensOne} width={700} height={700} alt="screen image" />
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Intro;
