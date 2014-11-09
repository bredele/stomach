
/**
 * Stomach constructor.
 *
 * Returns dom node from string
 * or html element. It also can
 * clone the returned node.
 *
 * Examples:
 *
 *   // transform
 *   stomach('<button>hello</button>');
 *   stomach('#hello');
 *   stomach(node);
 *
 *   // clone
 *   stomach('#hello', true);
 *   
 * @param {String | Element} tmpl
 * @param {Boolean} bool (only when tmpl is Element)
 * @return {Element}
 * @api public
 */

module.exports = function(tmpl, bool) {
  if(typeof tmpl === 'string') {
    if(tmpl[0] === '<') {
      var div = document.createElement('div');
      div.insertAdjacentHTML('beforeend', tmpl);
      return div.firstChild;
    }
    tmpl = document.querySelector(tmpl);
  }
  if(bool) tmpl = tmpl.cloneNode(true);
  return tmpl;
};
