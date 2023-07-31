import React from "react";
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main style={{ marginTop: "80px", padding: "20px" }}>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hello World
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Our Photo Album App is the perfect place to showcase and cherish
              your precious memories. Whether it's a family vacation, a special
              event, or everyday moments worth remembering, our app provides a
              delightful way to organize and relive your favorite photographs.
              Our app boasts a user-friendly and visually appealing interface,
              making navigation a breeze. Enjoy a seamless experience while
              browsing through your cherished photo collection.
            </Typography>
            <div>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                    See my Photos
                  </Button>
                  <Button variant="outlined" color="primary" sx={{ marginLeft: 2 }}>
                    Secondary Actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
