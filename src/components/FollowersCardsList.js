import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";

const FollowersCardsList = (props) => {
  return (
    <>
      {props.followers.map((follower) => (
        <Grid key={follower.id} item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary">@{follower.login}</Typography>
            </CardContent>

            <CardMedia
              component="img"
              image={follower.avatar_url}
              title={`picture of ${follower.login}`}
              alt={`picture of ${follower.login}`}
            />

            <CardActions>
              <Box m="auto" mt={3} mb={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={(e) => window.open(follower.html_url)}
                >
                  View Profile
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default FollowersCardsList;
