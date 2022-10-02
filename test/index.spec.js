// var assert = require('assert');

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

import main  from '../bindex.js';

describe('main key-value function', () => {
  beforeEach(function () {
    main();
    console.log('before each test, run this');
  });

  afterEach(function () {
    // runs once after the last test in this block
    console.log('after each test run this');
  });

  it('should do something', () => {
    // const obj = main();
    // console.log('fsd');
    // console.log(obj)
    // expect(obj).to.be.an('object');
    console.log('test case');
  })
});