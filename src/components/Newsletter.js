import React from "react";

const Newsletter = () => {
  return (
    <div className="newsLetterCont">
      <h1>Newsletter</h1>
      <p id="newsDesc">Get weekly updates from all the latest shoe trends</p>
      <div className="newsLetterInput">
        <input placeholder="Your email" value={""} />
        <button>{/* <Send /> */}</button>
      </div>
    </div>
  );
};

export default Newsletter;
