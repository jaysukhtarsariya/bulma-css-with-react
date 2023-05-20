import React from "react";
import Leptop from "../../assets/laptop.jpg"

const Application = () => {
  return (
    <>
      <section class="section pt-0 mt-5 pt-5">
        <div class="container pt-3 mt-3">
          <div class="mb-5 is-vcentered columns is-multiline">
            <div class="column is-12 is-5-desktop mb-5 mr-auto">
              <h2 class="mb-6 is-size-1 is-size-3-mobile has-text-weight-bold has-text-left">
                Take care of your performance every day.
              </h2>
              <p class="subtitle has-text-grey mb-6 has-text-left">
                Build a well-presented brand that everyone will love. Take care
                to develop resources continually and integrity them with
                previous projects.
              </p>
              <div class="buttons">
                <a class="button is-primary" href="#">
                  Track your performance
                </a>
                <a class="button" href="#">
                  Learn more
                </a>
              </div>
            </div>
            <div class="column is-12 is-6-desktop">
              <img
                class="image is-fullwidth"
                src={Leptop}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Application;
