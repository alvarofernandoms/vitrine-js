class Vitrine {
  constructor() {
    this._init();
  }

  _init() {
    this._getProducts();
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
        console.log(recommendation);
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
      $('#vitrine-view').innerHTML = elements.join('');
    };
  }

}
