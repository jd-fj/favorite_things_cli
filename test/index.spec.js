import main, { exit } from '../bindex.js';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

describe('main key-value function', () => {
  before(function () {
    const fakeDatabase = {};

    

    main();
    console.log('before each test, run this');
  });

  afterEach(function () {
    // runs once after the last test in this block
    console.log('after each test run this');
    exit();
  });

  it('should do something', () => {
    // const obj = main();
    // console.log('fsd');
    // console.log(obj)
    // expect(obj).to.be.an('object');
    console.log('test case');

    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });

    rl.on('line', (line) => {
      console.log('line read: ', line);
    })
    rl.write('put hi mom \n\r')
  })
});