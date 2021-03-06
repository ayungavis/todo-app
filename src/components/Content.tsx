import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Navbar from "./Navbar";

interface Props {}

const Content: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>{children}</div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: "768px",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#F5F5F5"
  },
  container: {
    margin: "16px 0px"
  }
}));

export default Content;
