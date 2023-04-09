import React from "react";

function PlanOverview() {
  return (
    <div class="section wf-section" style={{padding: '0px 20px'}}>
      <div class="container">
        <div
          data-current="Monthly"
          data-easing="ease"
          data-duration-in="200"
          data-duration-out="100"
          class="pricing-component w-tabs"
        >
          <div class="tab-menu w-tab-menu">
            <a
              data-w-tab="Monthly"
              class="tab-link w-inline-block w-tab-link w--current"
            >
              <div>Monthly biling</div>
            </a>
            <a data-w-tab="Yearly" class="tab-link w-inline-block w-tab-link">
              <div>Annual billing</div>
            </a>
          </div>
          <div class="pricing-tab-content w-tab-content">
            <div
              data-w-tab="Monthly"
              class="pricing-tab-pane w-tab-pane w--tab-active"
            >
              <div class="pricing-wrapper">
                <div class="w-layout-grid top-pricing-grid">
                  <div class="empty-div"></div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Starter Plan</h2>
                      <div class="big-price">
                        $14<span class="month-text">/mo</span>
                      </div>
                      <p class="paragraph-small">
                        Perfect for small businesses and individuals looking to
                        get started.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Professional Plan</h2>
                      <div class="big-price">
                        $34<span class="month-text">/mo</span>
                      </div>
                      <p class="paragraph-small">
                        Ideal for growing companies and teams with advanced
                        needs.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Enterprise Plan</h2>
                      <div class="big-price">
                        $64<span class="month-text">/mo</span>
                      </div>
                      <p class="paragraph-small">
                        Best for large enterprises and organizations with
                        complex operations.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="Yearly" class="pricing-tab-pane w-tab-pane">
              <div class="pricing-wrapper">
                <div class="w-layout-grid top-pricing-grid">
                  <div class="empty-div"></div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Starter Plan</h2>
                      <div class="big-price">
                        $49<span class="month-text">/year</span>
                      </div>
                      <p class="paragraph-small">
                        Perfect for small businesses and individuals looking to
                        get started.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Professional Plan</h2>
                      <div class="big-price">
                        $69<span class="month-text">/year</span>
                      </div>
                      <p class="paragraph-small">
                        Ideal for growing companies and teams with advanced
                        needs.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="top-pricing-content">
                    <div>
                      <h2 class="price-title">Enterprise Plan</h2>
                      <div class="big-price">
                        $119<span class="month-text">/year</span>
                      </div>
                      <p class="paragraph-small">
                        Best for large enterprises and organizations with
                        complex operations.
                      </p>
                    </div>
                    <div class="margin-20px">
                      <a href="#" class="button-arrow-link w-inline-block">
                        <div class="button-label">
                          <div class="label-button">Get Started</div>
                          <div class="arrow-wrapper">
                            <img
                              loading="lazy"
                              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                              alt=""
                              class="icon-arrow"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanOverview;
