import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
const UserCard = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">@{props.user.login}</Typography>
        <Typography color="textSecondary" component="h2">
          {props.user.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={props.user.avatar_url}
        title={`picture of ${props.user.name}`}
        alt={`picture of ${props.user.name}`}
      />
      <CardContent>
        <Typography component="p">{props.user.bio}</Typography>
        <Typography>Location : {props.user.location}</Typography>
        <Box display="flex">
          <Box flexGrow={1}>Followers: {props.user.followers}</Box>
          <Box>Following: {props.user.following}</Box>
        </Box>
      </CardContent>
      <CardActions>
        <Box m="auto" mb={3}>
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => window.open(props.user.html_url)}
            size="large"
          >
            View Profile
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default UserCard;
