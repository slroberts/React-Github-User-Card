import React from "react";
import {Box, TextField} from "@material-ui/core";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.searchUsers}>
      <Box display="flex" mt={4} mb={3}>
        <Box mr={2} flexGrow={1}>
          <TextField
            variant="outlined"
            type="text"
            value={props.username}
            placeholder="Search github user"
            onChange={props.handleChange}
            fullWidth
          />
        </Box>
        <button>
          <Box p={2}>Find User</Box>
        </button>
      </Box>
    </form>
  );
};

export default SearchBar;
