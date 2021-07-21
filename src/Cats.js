import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Cats = () => {
  const [cats, setCats] = useState([]);

  const theme = useTheme({
    typography: {
      h1: {
        color: "blue",
        fontSize: "4rem",
      },
    },
  });

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const useStyles = makeStyles({
    catImgLG: {
      maxHeight: 300,
      minHeight: 300,
      maxWidth: "100%",
      minWidth: "100%",
    },
    catImgSM: {
      maxHeight: 150,
      minHeight: 150,
      maxWidth: "100%",
      minWidth: "100%",
    },
  });
  const classes = useStyles();

  const fetchCats = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => setCats(data));
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item container spacing={1} xs={12}>
          {cats.map((cat) =>
            cat.image ? (
              <Grid item xs={matchesXS ? 4 : matchesSM ? 3 : 4}>
                <img
                  className={matchesSM ? classes.catImgSM : classes.catImgLG}
                  src={cat.image.url}
                />
              </Grid>
            ) : null
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cats;
