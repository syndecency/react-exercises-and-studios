import React from "react";

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.meetup.com/improv-comedy-classes-in-st-louis/",
    "https://www.slpl.org/",
  ];
  return (
    <div>
      <h3>Hobby Links</h3>
      <a href={hobbyLinks[0]}>Comedy Improv Classes</a>
      <br></br>
      <a href={hobbyLinks[1]}>STL Library</a>
    </div>
  );
}
