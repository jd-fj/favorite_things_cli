import main, { exit, validateArguments, addKeyValue } from '../bindex.js';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
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

  it('should promt user correctly', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const getPrompt = rl.getPrompt() 
    expect(getPrompt).to.equal('> ')
  })

  it('should receive user input', () => {
    const rl = readline.createInterface({
      input,
      prompt: '> '
    });
    const userInput = 'put hi mom\r'

    rl.on('line', (line) => {
      expect(line).to.equal('put hi mom');
    })

    rl.write(userInput)
  })

  it('should validate userInput', () => {
    const rl = readline.createInterface({
      input,
      prompt: '> '
    });
    const userInput = '  put favorite_color purple extraArg \r' // <-- spaces and extra arg

    rl.on('line', (line) => {
      const { command, key, value, extra } = validateArguments(line);
      expect(command).to.equal('put');
      expect(key).to.equal('favorite_color');
      expect(value).to.equal('purple');
      expect(extra).to.equal('extraArg');
    })

    rl.write(userInput)
  })

  it('should prevent bad put command from executing', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = 'put favorite_color purple extrArgs\r' // <-- spaces and extra arg

    rl.on('line', (line) => {
      const { command, key, value, extra } = validateArguments(line);
      expect(command).to.equal('put');

      const doNotAddThisData = addKeyValue(key, value, extra);
      expect(doNotAddThisData).to.be.undefined;
    })

    rl.write(userInput)
  })

  it('should correctly add put key/values', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = 'put favorite_color purple\r';

    rl.on('line', (line) => {
      const { command, key, value, extra } = validateArguments(line);
      expect(command).to.equal('put');

      const addedData = addKeyValue(key, value);
      console.log('fake database', addedData);
      const expected = { 'favorite_color': 'purple' }
      expect(addedData).to.deep.equal(expected)
    })

    rl.write(userInput)
  })


});