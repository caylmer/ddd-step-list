import { html, fixture, expect } from '@open-wc/testing';
import "../ddd-step-list.js";

describe("DddStepList test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ddd-step-list
        title="title"
      ></ddd-step-list>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
