import Component from "./Component.js";

class FooterComponent extends Component {
  data;

  constructor(parentElement, className, htmlTag, data) {
    super(parentElement, className, htmlTag);

    this.data = data;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <section class="main-footer__item">
        <img src="img/pokemon-logo.svg" alt="" />
      </section>
      <section class="main-footer__item main-footer__item--right">
        <h2 class="main-footer__propperty">Propperty of The Pokémon Company</h2>
        <div class="main-footer__media">
          <a class="main-footer__media-link"><i class="fa fa-facebook"></i></a>
          <a class="main-footer__media-link"><i class="fa fa-instagram"></i></i></a>
          <a class="main-footer__media-link"><i class="fa fa-pinterest-p"></i></a>
          <a class="main-footer__media-link"><i class="fa fa-youtube"></i></a>
          <a class="main-footer__media-link"><i class="fa fa-twitter"></i></a>
        </div>
        <p class="main-footer__copyright">
          ©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc.
          TM, ®Nintendo.
        </p>
      </section>
    `;
  }
}

export default FooterComponent;
