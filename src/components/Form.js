import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const componentName = props => {
  return (
    <form onSubmit={props.getWeather}>
      <FormControl required="true">
        <TextField type="text" name="city" placeholder="City..." />
        <TextField type="text" name="country" placeholder="Country..." />
        <Button>Get Weather</Button>
      </FormControl>
    </form>
  );
};

export default componentName;
