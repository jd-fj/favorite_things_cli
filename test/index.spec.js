import main, { exit, validateArguments, addKeyValue } from '../bindex.js';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
// const { expect } = chai;
import {expect} from 'chai';


describe('main key-value function', () => {
  let testRun = 0
  beforeEach( () => {
    console.log("\n...initializing test ", testRun++)
    main();
  });

  after( () => {
    exit();
  });

  it('should do something', () => {
  })

  it('should receive user input', async () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = 'put hi mom\r'

    rl.on('line', (line) => {
      expect(line).to.equal('put hi mom');
    })

    rl.write(userInput)
  })

  it('should validate userInput', async () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = ' put favorite_color purple extraArg \r' // <-- spaces and extra arg

    rl.on('line', (line) => {
      const { command, key, value, extra } = validateArguments(line);
      expect(command).to.equal('put');
      expect(key).to.equal('favorite_color');
      expect(value).to.equal('purple');
      expect(extra).to.equal('extraArg');
    })

    rl.write(userInput)
  })

  // it('should invalid bad put command', async () => {
  //   const rl = readline.createInterface({
  //     input,
  //     output,
  //     prompt: '> '
  //   });
  //   const userInput = ' put favorite_color purple extraArg \r' // <-- spaces and extra arg
  //   const fakeDatabase = {}

  //   rl.on('line', (line) => {
  //     const { command, key, value, extra } = validateArguments(line);
  //     addKeyValue(key, value, extra);
  //     expect(fakeDatabase).to.be.an('object').that.is.empty;
  //   })

  //   rl.write(userInput)
  // })
});