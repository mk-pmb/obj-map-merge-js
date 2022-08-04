
<!--#echo json="package.json" key="name" underline="=" -->
obj-map-merge
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Map over an object&#39;s key/value pairs and merge (Object.assign) all partial
results.
<!--/#echo -->



API
---

This module exports one function:

### objMapMerge(func[, opt])(obj[, dest])

A factory function that produces a mapper function `mapper` which takes one
argument `obj`.
The `mapper` function will iterate over own enumerable properties of `obj`,
calling `func` with arguments `key, value, obj` for each entry.
The results will be shallow-merged into `dest` (see `init` below).

`opt` is an optional options object that supports these optional keys:

* `init`: Where to merge the intermediate results into.
  * `false` (default):
    Start with a fresh empty object
    and merge each batch into that.
  * `null`:
    Start with a fresh empty object
    that has no prototype
    and merge each batch into that.
  * `true`: Merge into `dest`.
  * a function:
    Start with the result of
    `init(dest, obj)`
    and merge each batch into that.
  * a string:
    Start with the result of
    JSON-parsing the string
    and merge each batch into that.
* `sortKeys`: Whether to map `obj`'s keys in sorted order.
  * `false` (default): Don't sort.
  * `true`: Sort by key, using the default comparison.
  * a function: Use this function for comparison.





Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
