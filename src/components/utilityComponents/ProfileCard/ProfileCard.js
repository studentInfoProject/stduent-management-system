import React from "react";
import "./Profilecard.css";
const Profilecard = () => {
  return (
    <div>
      <div class="our-team">
        <div class="picture">
          <img
            class="img-fluid"
            src="https://picsum.photos/130/130?image=1027"
          />
        </div>
        <div class="team-content">
          <h3 class="name">Michele Miller</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-facebook"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-twitter"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-google-plus"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilecard;
