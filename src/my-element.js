import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
class Cardnewmusic extends LitElement {

  constructor() {
    super()
  }

  static styles = css`
      :root{
        --grey-1: #333333;
        --grey-2: #4F4F4F;
        --grey-3: #828282
      }
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container__cards{
        border: 1px solid black;
        width: 20vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .container__card__new__music{
      
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .new__music__img{
        width: 95%;
        display: flex;
        border-radius: 5%;
        overflow: hidden;
      }
      .new__music__img img{
        object-fit: contain;
        width: 100%;
        border: none;
      }
      .new__music__info{
        display: flex;
        flex-direction: column;
        padding: 3% 5%;
      }
      .new__music__info h4{
        color: var(--grey-1);
        font-size: 1.3vw;
      }
      .new__music__info p{
        color: var(--grey-2);
        font-size: 1vw;
      }
      .new__music__info span{
        color: var(--grey-3);
      }

  `

  render() {
    return html`
    <div class="container__cards">
      <div class="container__card__new__music">
        <div class="new__music__img">
          <img src="./src/assets/hades66.jpeg" alt="">
        </div>
        <div class="new__music__info">
          <h4>LUKEANDO-REMIX</h4>
          <p>HADES66, <span>2021</span></p>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('card-new-music', Cardnewmusic)
