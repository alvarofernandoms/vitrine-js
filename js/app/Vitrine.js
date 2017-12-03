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
      data.data.recommendation.map(recommendation => {
        let element = `
          <div>
            <p>${recommendation.name}</p>
          </div>
        `;
        $('#vitrine-view').appendChild(document.createElement('div')).textContent=recommendation.name;
      })
    };
  }

}
