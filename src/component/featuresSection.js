import { Grid, Grow, Slide } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import login_signupScreen from "../assets/login_signupScreens.png";
import screensTwo from "../assets/screensTwo.png";
import cartScreen from "../assets/cartScreen.png";
import { motion } from "framer-motion";
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
          <Grid item md={6} xs={6} justifyContent="center" alignItems="center">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1, type: "spring", duration: 4 }}
            >
              <img src={screensTwo} className="images" alt="screen image" />
            </motion.div>
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
                In the Home view, there’s different categories of the dishes,
                such as main courses and dessert. You can choose what dishes you
                want and see the details for each one in details. Then, you can
                add the dish to your cart.
              </h4>
            </Grid>
          </Grow>
        </Grid>

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
                You can't see the products or make an order before login by
                email and password or by Google or Twitter
              </h4>
            </Grid>
          </Grow>

          <Grid item md={6} xs={6} justifyContent="center" alignItems="center">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1, type: "spring", duration: 4 }}
            >
              <img
                src={login_signupScreen}
                className="images"
                alt="screen image"
              />
            </motion.div>
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
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 1, type: "spring", duration: 4 }}
            >
              <img
                src={cartScreen}
                className="cartScreenImage"
                alt="screen image"
              />
            </motion.div>
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
              <h1 className="sectionTitle">Multiple Payment Methods</h1>
              <h4 className="sectionDescription">
                You can pay your purchases by Visa or PayPal or Mada or Apple
                Pay{" "}
              </h4>
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </section>
  );
}

export default FeaturesSection;
