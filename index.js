
/**
 * Stomach constructor.
 *
 * Generate dom from string or html
 * node.
 *
 * Examples:
 *
 *   stomach('<button>hello</button>');
 *   stomach('#hello');
 *   stomach(node);
 *   
 * @param {String | Element} tmpl
 * @return {Element}
 * @api public
 */

module.exports = function(tmpl) {
  if(typeof tmpl === 'string') {
     if(tmpl[0] === '<') {
       var div = document.createElement('div');
       div.insertAdjacentHTML('beforeend', tmpl);
       return div.firstChild;
     } 
     return document.querySelector(tmpl);
   }
   return tmpl;
};
