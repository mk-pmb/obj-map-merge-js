// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import equal from 'equal-pmb';

import omm from '..';

const faces = {
  qux: '~_~',
  bar: '°v°',
  foo: '^_^',
};

let func;

func = function angleHands(k, v) { return { [k]: `<(${v})<)` }; };
equal(omm(func)(faces), {
  qux: '<(~_~)<)',
  bar: '<(°v°)<)',
  foo: '<(^_^)<)',
});
equal(omm(func, { sortKeys: true })(faces), {
  qux: '<(~_~)<)',
  bar: '<(°v°)<)',
  foo: '<(^_^)<)',
});

func = function starryEars(k, v) { return { [`[*[ ${v} ]*]`]: k }; };
equal(omm(func)(faces), {
  '[*[ °v° ]*]': 'bar',
  '[*[ ~_~ ]*]': 'qux',
  '[*[ ^_^ ]*]': 'foo',
});
equal(omm(func, { sortKeys: true })(faces), {
  '[*[ °v° ]*]': 'bar',
  '[*[ ~_~ ]*]': 'qux',
  '[*[ ^_^ ]*]': 'foo',
});







console.info('+OK basics test passed.');
