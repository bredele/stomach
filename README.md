stomach
=======

Digest strings, nodes and selectors into a dom element


## Installation

with [component](http://github.com/component/component):

	$ component install bredele/stomach

with [nodejs](http://nodejs.org):

	$ npm install stomach


## Usage

### String

Generate DOM from a `HTML string`:

```js
var dom = require('stomach');
var btn = dom('<button>my button</button>');
```

  > make sure to trim your template string before.


Generate DOM from a `query selection`:

```js
var list = dom('#mylist');
```

### HTMLElement

  Generate DOM from a `HTMLElement`:

```js
var el = document.querySelector('#mylist');
var node = dom(el);
```

You also can clone the returned node:

```js
var el = document.querySelector('#mylist');
var node = dom(el, true);
```

  > it also works with query selection.

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.