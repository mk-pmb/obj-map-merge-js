
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
  * `false` (default): Merge each batch into a fresh empty object.
  * `null`: Merge each batch into a fresh empty object that has no prototype.
  * `true`: Merge into `dest`.
  * a function: Merge into the result of this function,
    invoked with parameters `dest, obj`.
  * a string: Merge each batch into a fresh object that results from
    JSON-parsing the string.
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
