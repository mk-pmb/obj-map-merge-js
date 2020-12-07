// -*- coding: utf-8, tab-width: 2 -*-


function doInit(init, dest, obj) {
  if (init === null) { return Object.create(null); }
  if (init === true) { return dest; }
  if (!init) { return {}; }
  // Within the supported types, these duck-typing checks are good enough:
  if (init.call) { return init(dest, obj); }
  if (init.substr) { return JSON.parse(init); }
  throw new TypeError('Unsupported setting for option "init".');
}


function maybeSort(cmp, list) {
  if (!cmp) { return list; }
  if (cmp === true) { return list.sort(); }
  return list.sort(cmp);
}


const omm = function objMapMerge(func, opt) {
  const { init, sort, sortKeys } = (opt || false);
  if (sort !== undefined) { throw new Error('Did you mean sortKeys?'); }
  function mapper(obj, dest) {
    const accum = doInit(init, dest, obj);
    if (!obj) { return accum; }
    maybeSort(sortKeys, Object.keys(obj)).forEach(function iter(key) {
      Object.assign(accum, func(key, obj[key], obj));
    });
    return accum;
  }
  return mapper;
};


export default omm;
