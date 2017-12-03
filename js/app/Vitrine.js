class Vitrine {
  constructor() {
    this._init();
  }

  _init() {
    this._getProducts();
    this._slick();
  }

  _getProducts() {
    let scriptEl = document.createElement('script'),
      $ = document.querySelector.bind(document);
    scriptEl.setAttribute('src',
      'http://roberval.chaordicsystems.com/challenge/challenge.json');
    document.body.appendChild(scriptEl);
    window.X = function(data) {
      let elements = [];
      data.data.recommendation.map(recommendation => {
        elements.push(`
          <div class="recommendation-item">
            <img src="http:${recommendation.imageName}">
            <p>${recommendation.name}</p>
            ${recommendation.oldPrice ? '<p class="recommendation-old-price">De: ' + recommendation.oldPrice : ''}
            <p class="recommendation-price">Por: ${recommendation.price}</p>
            <p class="recommendation-paymant-conditions">${recommendation.productInfo.paymentConditions} sem juros</p>
          </div>
        `);
      });
      $('#vitrine-view .recommendation-panel').innerHTML = elements.join('');
    };
  }

  _slick() {
    let $ = document.querySelector.bind(document),
      recomList = $('.recommendation-panel'),
      btnLeft = $('.arrow-left'),
      btnRight = $('.arrow-right'),
      count = 0;

    let slideProducts = (dir) => {
      let totalChildren = recomList.querySelectorAll('.recommendation-item').length;
      dir === 'left' ? ++count : --count;
      recomList.style = `
          transform: translate3d(${count * 286 + 'px'}, 0px, 0px);
          transition-duration: 500ms;
          transition-delay: 0ms;
      `;
      btnLeft.style.display = count < 0 ? 'block' : 'none';
      btnRight.style.display = count > 6 - totalChildren ? 'block' : 'none';
    }

    btnLeft.addEventListener('click', (e) => {
      slideProducts('left');
    });
    btnRight.addEventListener('click', (e) => {
      slideProducts('right');
    });
  }

}
