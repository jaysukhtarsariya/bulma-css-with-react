import React from "react";

const NewsLetter = () => {
  return (
    <section class="section">
      <div class="container">
        <div class="box p-6 has-background-light">
          <div class="is-vcentered columns is-multiline">
            <div class="column is-8-desktop mb-3">
              <div>
                <h3 class="is-size-2 is-size-3-mobile mb-2 has-text-weight-bold">
                  Sign up to our newsletter
                </h3>
                <p class="has-text-grey-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div class="column is-4-desktop">
              <form action="#">
                <div class="is-flex">
                  <div class="control mr-2 is-flex-grow-1">
                    <input
                      class="input"
                      type="email"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <button class="button is-primary">Action</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
