import React from "react";
import { APPLMembers } from "../Data/APPLMembers";
import { useInView } from "react-intersection-observer";
import "../App.css";
import { Grid, Grow, IconButton } from "@mui/material";
import { useTransition, animated } from "react-spring";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Email } from "@mui/icons-material";
function DeveloperTeam() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const transition = useTransition(APPLMembers, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: 0, opacity: 1, delay: item.delay }),
    reset: !inView,
  });
  return (
    <section ref={ref}>
      <Grow in={inView} {...(inView ? { timeout: 800 } : {})}>
        <div className="Slide" id="skills">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <h1
                style={{
                  fontFamily: "Oswald",
                  color: "white",
                  fontSize: "30px",
                  padding: "10px",
                }}
              >
                This app created with love by :
              </h1>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              style={{ padding: "5px" }}
            >
              {transition((style, item) =>
                item ? (
                  <animated.div style={style}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <img
                          src={item.logo}
                          width={100}
                          height={100}
                          style={{ borderRadius: "50%" }}
                          alt="profile photo"
                        />
                      </Grid>
                      <Grid item style={{ padding: "10px" }}>
                        <h3 style={{ color: "white", fontFamily: "Anton" }}>
                          {item.name}
                        </h3>
                        <h5
                          style={{ color: "white", fontFamily: "EB Garamond" }}
                        >
                          {item.description}
                        </h5>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <IconButton
                            onClick={() => {
                              window.open(`${item.githubURL}`, "'_blank'");
                            }}
                          >
                            <GitHubIcon className="GithubIcon" />
                          </IconButton>
                          <IconButton
                            className="LinkedInIcon"
                            onClick={() => {
                              window.open(`${item.linkedInURL}`, "_blank");
                            }}
                          >
                            <LinkedInIcon className="LinkedInIcon" />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              window.open(`mailto:${item.email}`);
                            }}
                          >
                            <Email className="EmailIcon" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </animated.div>
                ) : (
                  ""
                )
              )}
            </Grid>
          </Grid>
        </div>
      </Grow>
    </section>
  );
}

export default DeveloperTeam;
