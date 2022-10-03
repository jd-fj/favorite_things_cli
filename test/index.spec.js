import main, { exit, validateArguments, addKeyValue, fetch } from '../index.js';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { expect } from 'chai';


describe('main key-value function', () => {
  let testRun = 0
  beforeEach(() => {
    console.log("\n...initializing test ", testRun++)
    main();
  });

  after(() => {
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
      expect(extra).to.equal('extraarg');
    })

    rl.write(userInput)
  })

  it('should prevent bad put command from executing', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = 'put favorite_color purple extrArgs\r' // <-- malformed put command. Spaces and extra arg

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
      const { command, key, value } = validateArguments(line);
      expect(command).to.equal('put');

      const addedData = addKeyValue(key, value);
      const expected = { 'favorite_color': 'purple' }
      expect(addedData).to.deep.equal(expected)
    })

    rl.write(userInput)
  })

  it('should correctly return undefined for invalid fetch command', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = ' fetch  favorite_color purple extraArgs\r'; // <-- malformed fetch

    rl.on('line', (line) => {
      const { command, key, value, extra } = validateArguments(line);
      expect(command).to.equal('fetch');
      expect(key).to.equal('');
      expect(value).to.equal('favorite_color');
      expect(extra).to.equal('purple');

      const fetchResult = fetch(key, value)
      expect(fetchResult).to.be.undefined;

    })

    rl.write(userInput)
  })

  it('should correctly return undefined if query is not found for fetch command', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = '    fetch fave_color     \r';
    const storedInput = { 'favorite_color': 'purple' }

    rl.on('line', (line) => {
      const { command, key } = validateArguments(line);
      expect(command).to.equal('fetch');
      expect(key).to.equal('fave_color');

      const fetchResult = fetch(key)
      expect(fetchResult).to.be.undefined;
    })

    rl.write(userInput)
  })

  it('should correctly detect matching key for fetch command', () => {
    const rl = readline.createInterface({
      input,
      output,
      prompt: '> '
    });
    const userInput = 'fetch favorite_color\r';
    const storedInput = { 'favorite_color': 'purple' }

    rl.on('line', (line) => {
      const { command, key } = validateArguments(line);
      expect(command).to.equal('fetch');
      expect(key).to.equal('favorite_color');

      const fetchResult = fetch(key);
      const expectReturnedValue = storedInput[key];
      expect(fetchResult).to.equal(expectReturnedValue)
    })

    rl.write(userInput)
  })
});