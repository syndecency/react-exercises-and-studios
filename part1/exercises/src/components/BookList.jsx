import React from "react";
import classes from "./BookList.module.css";

export default function BookList() {
  let pageTitle = "Book List";
  let book1 =
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBoJZ8HunXcsp85V6j1l-dzA2c4ShK0v4IwM9tv3ubdL7stBhbYb9-qR4xpWXkOV0hsYjsOK_Z8C8yhhcfWgh_7A19REbX&usqp=CAc";
  let book2 = "https://m.media-amazon.com/images/I/81tBoQP5V+L._SY522_.jpg";
  let book3 =
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVrn_WB7Ck2CisS2K59dp5AKA-Ogaqk_a6HPxELf8cISs_6RZuX2AEc43qWXUqxrL-peX1D_cl9hs_QfoMvS7pSii-AVx18ofuHbhsLjqxMwcQsTgtpGGmHA&usqp=CAc";

  return (
    <div className={classes.borderStyle}>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Innocent Anthropologist by Nigel Barley" />
      <img src={book2} alt="Wheel of Time by Robert Jordan" />
      <img src={book3} alt="Lunch in Paris by Elizabeth Bard" />
    </div>
  );
}
