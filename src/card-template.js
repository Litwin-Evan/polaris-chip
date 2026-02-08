import { html } from 'lit';

export function cardTemplate({ imgSrc = '', title = '', details = '', showButton = false } = {}) {
  return html`
    <div class="card">
      <div class="card-image">
        <img src="${imgSrc}" alt="${title}">
      </div>

      <div class='card-text'>
        <h2 class="card-title">${title}</h2>

        <div class="details">
          <p>${details}</p>

          <a href="https://hax.psu.edu">
            <button class="button" ?hidden=${!showButton}>Details</button>
          </a>
        </div>
      </div>
    </div>
  `;
}
