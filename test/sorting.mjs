// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import equal from 'equal-pmb';

import omm from '..';




const names = [
  'alice',
  'bob',
  'carol',
  'dave',
  'eve',
];
names[22] = 'walt';
names[12] = 'mike';

function len(k, v) {
  if (!v) { return; }
  const p = v + '@' + k;
  len.order.push(p);
  return { [v.length]: p };
}


// =====================================================================


len.order = [];
const wantDict = {
  '3': 'eve@4',
  '4': 'walt@22',
  '5': 'carol@2',
};
equal(omm(len, { sortKeys: false })(names), wantDict);
const nativeOrdering = [
  'alice@0',
  'bob@1',
  'carol@2',
  'dave@3',
  'eve@4',
  // omm() didn't sort, but keys that could be array indices
  // are always sorted numerically by Object.keys:
  'mike@12',
  'walt@22',
];
equal(len.order, nativeOrdering);


// =====================================================================


function numCmpAsc(a, b) { return a - b; }
len.order = [];
equal(omm(len, { sortKeys: numCmpAsc })(names), wantDict);
equal(len.order, nativeOrdering);


// =====================================================================


function wrongOptSort() { return omm(len, { sort: numCmpAsc })(names); }
equal.err(wrongOptSort, 'Error: Did you mean sortKeys?');


// =====================================================================


len.order = [];
equal(omm(len, { sortKeys: true })(names), {
  ...wantDict,
  '4': 'dave@3',
});
equal(len.order, [
  'alice@0',
  'bob@1',
  // Manually sorting the keys uses string comparison by default:
  'mike@12',
  'carol@2',
  'walt@22',
  'dave@3',
  'eve@4',
]);


// =====================================================================


function numCmpDesc(a, b) { return b - a; }
len.order = [];
equal(omm(len, { sortKeys: numCmpDesc })(names), {
  '3': 'bob@1',
  '4': 'dave@3',
  '5': 'alice@0',
});
equal(len.order, nativeOrdering.slice().reverse());

















console.info('+OK sorting test passed.');
