<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# xor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the bitwise XOR of two 64-bit unsigned integers.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import xor from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-base-xor@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assign, strided } from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-base-xor@esm/index.mjs';
```

#### xor( a, b )

Computes the bitwise XOR of two 64-bit unsigned integers.

```javascript
import Uint64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-ctor@esm/index.mjs';

var a = new Uint64( 5 );
var b = new Uint64( 15 );

var v = xor( a, b );
// returns <Uint64>[ 10n ]
```

#### xor.assign( ah, al, bh, bl, out, stride, offset )

Computes the bitwise XOR of two 64-bit unsigned integers and assigns results to a provided output array.

```javascript
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs';

var out = new Uint32Array( 2 );
var v = xor.assign( 1, 2, 3, 4, out, 1, 0 );
// returns <Uint32Array>[ 2, 6 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **ah**: high 32-bit word of the first 64-bit unsigned integer.
-   **al**: low 32-bit word of the first 64-bit unsigned integer.
-   **bh**: high 32-bit word of the second 64-bit unsigned integer.
-   **bl**: low 32-bit word of the second 64-bit unsigned integer.
-   **out**: output array.
-   **stride**: stride length for `out`.
-   **offset**: starting index for `out`.

#### xor.strided( a, sa, oa, b, sb, ob, out, so, oo )

Computes the bitwise XOR of two 64-bit unsigned integers stored in integer-valued strided array views and assigns results to a provided strided output array.

```javascript
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs';

var a = new Uint32Array( [ 1, 2 ] );
var b = new Uint32Array( [ 3, 4 ] );
var out = new Uint32Array( 2 );

var v = xor.strided( a, 1, 0, b, 1, 0, out, 1, 0 );
// returns <Uint32Array>[ 2, 6 ]

var bool = ( out === v );
// returns true
```

The function supports the following parameters:

-   **a**: first 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words.
-   **sa**: stride length for `a`.
-   **oa**: starting index for `a`.
-   **b**: second 64-bit unsigned integer strided array view containing interleaved 32-bit unsigned integer high and low order words.
-   **sb**: stride length for `b`.
-   **ob**: starting index for `b`.
-   **out**: output array.
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Uint64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-ctor@esm/index.mjs';
import xor from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint64-base-xor@esm/index.mjs';

var a = new Uint64( 1234567890 );
var v = xor( a, a );
console.log( v.toString() );
// => '0'

var b = new Uint64( 0xffffffff );
v = xor( a, b );
console.log( v.toString() );
// => '3060399405'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint64-base-xor.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint64-base-xor

[test-image]: https://github.com/stdlib-js/number-uint64-base-xor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-uint64-base-xor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint64-base-xor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint64-base-xor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint64-base-xor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint64-base-xor/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint64-base-xor/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint64-base-xor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint64-base-xor/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint64-base-xor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint64-base-xor/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint64-base-xor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint64-base-xor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint64-base-xor/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
