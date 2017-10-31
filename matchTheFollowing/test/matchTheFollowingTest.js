const assert = require('assert');
let matchTheFollowing = require('../src/matchTheFollowing');
let test = {};
exports.test = test;

test['it should match strings in two arrays and combine those  '] = function(){
  let firstHalf = ['79oklw','381jstc','453usja','535bdxv'];
  let secondHalf = ['jstc331','oklw737','bdxv211','usja514'];
  let expect ="\n381jstc331\n79oklw737\n535bdxv211\n453usja514";
  let actual = matchTheFollowing(firstHalf,secondHalf);
  assert.deepEqual(actual,expect);
};
