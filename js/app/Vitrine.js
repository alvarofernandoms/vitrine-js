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
          <div>
            <p>${recommendation.name}</p>
          </div>
        `);
      });
      $('#vitrine-view').innerHTML = elements.join('');
    };
  }

}
