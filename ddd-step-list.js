/**
 * Copyright 2025 caylmer
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-step-list`
 * 
 * @demo index.html
 * @element ddd-step-list
 */
export class DddStepList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-step-list";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "The 2+2 Plan",
    }
    this.index = 0;
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-step-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      index: { type: Number },
      description: { type: String }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-step-list-label-font-size, var(--ddd-font-size-s));
      }
      .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `];
  }
  updated(changedProperties) {
    if (changedProperties.has("title")) {
      this.indexcount();
    }
  }
  indexcount() {
    const items = this.querySelectorAll("ddd-step");
    items.forEach((element, index) => {
      element.count = index + 1
      console.log(element.count);
    });
  }
  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="description">
  <h3>${this.t.title}</h3>
    ${this.t.description}
  </div>
  <div class="steps-items">
    <slot id="step-slot"></slot>
  </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepList.tag, DddStepList);