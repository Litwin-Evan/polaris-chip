import { LitElement, html, css } from 'lit';
import { cardTemplate } from './card-template.js';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg";
    this.alt = "Rome Colosseum";
    this.detailsLabel = "Details";
    this.fancy = false;
    this.link = "https://hax.psu.edu";
  }

static get styles() {
  return css`
  
:host([fancy]) .card {
      background: linear-gradient(135deg, #6b83d8, #ec6666);
      border: solid #ff0000 2px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

.card {
  background: white;
  width: 550px;
  height: 600px;
  border: solid black 2px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin-top: 25px;
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: thin;


}

.card-image {
  width: 100%;
  border-radius: 22px 22px 0 0;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.card-title {
  text-align: center;
  font-family: "Times New Roman", serif;
  background-color: var(--card-title-bg, #f0f0f0);
  padding: 10px;
  color: var(--card-title-color, #333);
}

.details {
  padding: 15px;
  font-family: "Times New Roman", serif;
  text-align: center;
}

.button {
  padding: 12px;
  border: none;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  background-color: #007bff;
  color: white;
}

 details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

@media (min-width: 500px) and (max-width: 800px) {
  .card .button {
    display: inline-block;
  }
}

@media (max-width: 500px) {
  .card {
    width: 250px;
  }
  .button {
    display: none;
  }
}
 
      :host {
        display: inline-block;
        margin: 16px;
        font-family: "Times New Roman", serif;
      }
  `;
}

openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

render() {
    return html` 
    <div class="card">

      <div img class='card-image'>
        <img src="${this.image}" alt="${this.title}">
      </div>

      <div class='card-text'>
      <h2 class="card-title">${this.title}</h2>
      
      <div class="details">
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
        </details>
      </div>

      <a href="${this.link}">
        <button class="button">
          <slot name="button">${this.detailsLabel}</slot>
        </button>
      </a>
    </div>
    </div>`;    
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      detailsLabel: { type: String },
      fancy: { type: Boolean, reflect: true },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
