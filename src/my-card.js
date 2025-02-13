import { LitElement, html, css } from 'lit';

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
    this.title = "Jayden Daniels";
    this.image = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/rockcms/2025-01/250121-Jayden-Daniels-ch-1548-3eb03c.jpg";
    this.link = "https://www.commanders.com/";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) .card {
        background-color: blue;
      }
      .card {
        background-color: maroon;
        width: 400px;
        text-align: center;
      }
      .card.toggled {
        background-color: gold;
        color: magenta;
      }
      .cardheader {
        background-color: maroon;
        color: light red;
        margin: 10px 0px 10px 0px;
        font-size: 24px;
        font-family: Arial, sans-serif;
      }
      img {
        width: 250px;
        border: 6px solid blue;
      }
      p {
        color: black;
        margin: 20px 15px 20px 15px;
        font-size: 16px;
        font-family: Arial, sans-serif;
      }
      .btn {
        color: green;
        background-color: yellow;
        font-size: 20px;
        margin: 0px 0px 5px 0px;
        .btn:focus,
        .btn:hover {
          background-color: maroon;
          color: gold;
        }
      }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
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
    <div>
      <div class="card">
        <h1 class="cardheader">${this.title}</h1>
          <img src="${this.image}" alt="${this.title}" />
      <p>The following players that appear on these cards each have given me enormous amounts of joy this past NFL season. Not only through their play, but also by how they are as people, these are some of my favorite athletes that I have ever watched play for my Washington Commanders.</p>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
        <slot></slot>
        <a href="${this.link}" target="_blank">
          <button class="btn"><em>Link for more info</em></button>
        </a>
      </div>
    </details>
   </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
