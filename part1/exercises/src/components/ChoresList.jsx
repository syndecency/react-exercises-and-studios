import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  return (
    <div>
      <div className={classes.choresHeading}>
        <h3>Chores List</h3>
      </div>
      <div className={classes.choresText}>
        <p>Empty Trash</p>
        <p>Vaccuum</p>
        <p>Organize Files</p>
      </div>
    </div>
  );
}
