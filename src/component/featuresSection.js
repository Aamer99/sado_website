import { Grid, Grow, Slide } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import login_signupScreen from "../assets/login_signupScreens.png";
import screensTwo from "../assets/screensTwo.png";
function FeaturesSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
            <Grid
              item
              container
              md={6}
              xs={6}
              justifyContent="center"
              alignItems="center"
              style={{ padding: 10 }}
            >
              <h1 className="sectionTitle">Security</h1>
              <h4 className="sectionDescription">
                you can't see the products or make an order before login by
                email and password or by Google or Twitter
              </h4>
            </Grid>
          </Grow>

          <Grid item md={6} xs={6} justifyContent="center" alignItems="center">
            <Slide direction="left" in={inView} timeout={2000}>
              <img
                src={login_signupScreen}
                className="images"
                alt="screen image"
              />
            </Slide>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item md={6} xs={6} justifyContent="center" alignItems="center">
            <Slide direction="right" in={inView} timeout={2000}>
              <img src={screensTwo} className="images" alt="screen image" />
            </Slide>
          </Grid>

          <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
            <Grid
              item
              container
              md={6}
              xs={6}
              justifyContent="center"
              alignItems="center"
              style={{ padding: 10 }}
            >
              <h1 className="sectionTitle">User-Friendly</h1>
              <h4 className="sectionDescription">
                In Home view you can choose what dishes you want and see the
                details for it, in details you can add the dish to your cart
              </h4>
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </section>
  );
}

export default FeaturesSection;
