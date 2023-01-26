import React from "react";
import liveDemo from "../assets/liveDemo.mp4";
import { useInView } from "react-intersection-observer";
import { Grid, Grow } from "@mui/material";
function LiveDemo() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref}>
      <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid>
            <h1
              style={{
                fontFamily: "Oswald",
                color: "white",
                fontSize: "30px",
                padding: "20px",
              }}
            >
              Live Demo:
            </h1>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <video
              src={liveDemo}
              autoPlay={inView}
              loop
              muted
              style={{ padding: "20" }}
              className="liveDemo"
            />
          </Grid>
        </Grid>
      </Grow>
    </section>
  );
}

export default LiveDemo;
