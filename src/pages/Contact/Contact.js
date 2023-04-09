import React from "react";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <>
      <div class="hero for-inner">
        <div class="container">
          <div class="hero-grid inner">
            <div
              id="w-node-_4e9c61e3-98f5-63a4-31db-e6614b6ec87c-85c9f7e5"
              class="max-w-hero _70"
            >
              <h1 class="display-1">
                Reach out and
                <span class="with-marker second">connect</span> with us.
              </h1>
              <div class="margin-40px">
                <p class="subhead">
                  Connect with us
                  <span class="gray-text">for support or inquiries.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section wf-section">
        <div class="container">
          <div class="w-layout-grid contact-grid-main">
            <div class="contact-form-right-side">
              <div>
                <div>
                  <p class="subhead third">
                    Send us a message.
                    <span class="gray-text">
                      Get our bi-weekly content updates.
                    </span>
                  </p>
                </div>
                <div class="margin-30px">
                  <div class="contact-details-flex">
                    <div class="contact-details">
                      <p class="subhead fourth">
                        Email<span class="gray-text"></span>
                      </p>
                      <div class="margin-15px">
                        <a
                          href="mailto:contact@company.com"
                          class="contact-link"
                        >
                          contact@startui.com
                        </a>
                      </div>
                    </div>
                    <div>
                      <p class="subhead fourth">
                        Phone<span class="gray-text"></span>
                      </p>
                      <div class="margin-15px">
                        <a href="tel:(123)456-789" class="contact-link">
                          +1 345-678 00
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divider-line"></div>
                <div>
                  <div>
                    <p class="subhead third">
                      Stay connected, <span class="gray-text">follow us.</span>
                    </p>
                  </div>
                </div>
                <div class="margin-30px">
                  <div class="social-wrapper">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      class="social-icon-footer w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbef454fc1ef_twitter.svg"
                        loading="lazy"
                        width="20"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      class="social-icon-footer w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg"
                        loading="lazy"
                        width="20"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.slack.com/"
                      target="_blank"
                      class="social-icon-footer w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfb6ed34fc214_slack.svg"
                        loading="lazy"
                        width="20"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.dribbble.com/"
                      target="_blank"
                      class="social-icon-footer w-inline-block"
                    >
                      <img
                        src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e3b724998a04908b2dc673_github.svg"
                        loading="lazy"
                        width="22"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-form-left-side">
              <div class="w-form">
                <form
                  id="wf-form-Contact"
                  name="wf-form-Contact"
                  data-name="Contact"
                  method="get"
                >
                  <div class="w-layout-grid form-grid">
                    <div>
                      <p class="subhead fourth">
                        Name<span class="gray-text"></span>
                      </p>
                      <input
                        type="text"
                        class="input w-input"
                        maxlength="256"
                        name="Contact-Name"
                        data-name="Contact Name"
                        placeholder="John Doe"
                        id="Contact-Name"
                      />
                    </div>
                    <div>
                      <p class="subhead fourth">
                        Email<span class="gray-text"></span>
                      </p>
                      <input
                        type="email"
                        class="input w-input"
                        maxlength="256"
                        name="Contact-Email"
                        data-name="Contact Email"
                        placeholder="contact@email.com"
                        id="Contact-Email"
                      />
                    </div>
                    <div>
                      <p class="subhead fourth">
                        Phone<span class="gray-text"></span>
                      </p>
                      <input
                        type="tel"
                        class="input w-input"
                        maxlength="256"
                        name="Contact-Phone"
                        data-name="Contact Phone"
                        placeholder="+1 345-678"
                        id="Contact-Phone"
                      />
                    </div>
                    <div>
                      <p class="subhead fourth">
                        Company<span class="gray-text"></span>
                      </p>
                      <input
                        type="text"
                        class="input w-input"
                        maxlength="256"
                        name="Contact-Company"
                        data-name="Contact Company"
                        placeholder="Add Company"
                        id="Contact-Company"
                      />
                    </div>
                    <div id="w-node-d15efeed-5242-799c-6d90-cd6cf88e7126-85c9f7e5">
                      <p class="subhead fourth">
                        Message<span class="gray-text"></span>
                      </p>
                      <textarea
                        id="Contact-Message"
                        name="Contact-Message"
                        maxlength="5000"
                        data-name="Contact Message"
                        placeholder="Please type your message here..."
                        class="text-area w-input"
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value="Get in Touch"
                      data-wait="Please wait..."
                      id="w-node-_1c9e1629-25c9-cb54-e391-b780a9a6c964-85c9f7e5"
                      class="button w-button"
                    />
                  </div>
                </form>
                <div class="success-message w-form-done">
                  <div>
                    <div>
                      Thanks for reaching out. We will get back to you soon.
                    </div>
                  </div>
                </div>
                <div class="error-message w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-80px">
            <div class="max-w-left">
              <div class="tag-top-text">
                <div class="label-text">Reach our support team</div>
              </div>
              <h2 class="display-2">Connect with support squad.</h2>
            </div>
            <div class="margin-50px">
              <div class="grid-3-columns for-team">
                <div class="team-wrapper-second">
                  <div class="team-photo"></div>
                  <div>
                    <p class="subhead fourth">
                      Liam Kim, <span class="gray-text">Resolution Expert</span>
                    </p>
                  </div>
                  <div class="margin-15px">
                    <div class="contact-details-flex vertical">
                      <div class="contact-details">
                        <div>
                          <a
                            href="mailto:contact@company.com"
                            class="contact-link"
                          >
                            contact@startui.com
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="tel:(123)456-789" class="contact-link">
                            +1 345-678 00
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="margin-30px">
                    <div class="social-wrapper center">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbef454fc1ef_twitter.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.slack.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfb6ed34fc214_slack.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.dribbble.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e3b724998a04908b2dc673_github.svg"
                          loading="lazy"
                          width="22"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="team-wrapper-second">
                  <div class="team-photo member-2"></div>
                  <p class="subhead fourth">
                    Ava Rodriguez, <span class="gray-text">Solving Guru</span>
                  </p>
                  <div class="margin-15px">
                    <div class="contact-details-flex vertical">
                      <div class="contact-details">
                        <div>
                          <a
                            href="mailto:contact@company.com"
                            class="contact-link"
                          >
                            contact@startui.com
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="tel:(123)456-789" class="contact-link">
                            +1 345-678 00
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="margin-30px">
                    <div class="social-wrapper center">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbef454fc1ef_twitter.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.slack.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfb6ed34fc214_slack.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.dribbble.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e3b724998a04908b2dc673_github.svg"
                          loading="lazy"
                          width="22"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="team-wrapper-second">
                  <div class="team-photo member-3"></div>
                  <p class="subhead fourth">
                    Sophia Chen,
                    <span class="gray-text">Satisfaction Champion</span>
                  </p>
                  <div class="margin-15px">
                    <div class="contact-details-flex vertical">
                      <div class="contact-details">
                        <div>
                          <a
                            href="mailto:contact@company.com"
                            class="contact-link"
                          >
                            contact@startui.com
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>
                          <a href="tel:(123)456-789" class="contact-link">
                            +1 345-678 00
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="margin-30px">
                    <div class="social-wrapper center">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbef454fc1ef_twitter.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://instagram.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.slack.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfb6ed34fc214_slack.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.dribbble.com/"
                        target="_blank"
                        class="social-icon-footer w-inline-block"
                      >
                        <img
                          src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e3b724998a04908b2dc673_github.svg"
                          loading="lazy"
                          width="22"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Contact;
