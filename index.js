import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const storedInput = {};

const rl = readline.createInterface({
  input,
  output,
  prompt: '> '
});

export default async function main() {

  rl.prompt();
  rl.on('line', (line) => {
    const { command, key, value, extra } = validateArguments(line);

    switch (command) {
      case 'put':
        addKeyValue(key, value, extra)
        break;
      case 'fetch':
        fetch(key, value, extra);
        break;
      case 'exit':
        exit();
      default:
        console.log("Unknown command. Known commands are: put, fetch, exit");
        break;
    }

    rl.prompt();

  }).on('close', () => {
    exit();
  });
}

export function addKeyValue(key, value, extra) {
  if (!key || !value || extra) {
    console.log("Invalid syntax.");
  } else {
    if (key in storedInput) {
      Object.assign(storedInput, { [key]: value })
    } else {
      storedInput[key] = value;
      console.log("ok")
      return storedInput;
    }
  }
}

export function fetch(query, value, extra) {
  if (!query || value == '' || extra == '') {
    console.log("Invalid syntax.")
    return;
  } else if (!storedInput[query]) {
    console.log('Value not found.');
    return;
  }

  const found = storedInput[query];

  if (found) {
    console.log(found);
    return found;
  } else {
    return null;
  }
}

export function exit() {
  console.log('Bye!');
  process.exit(0);
}

export function validateArguments(args) {
  const parseLine = args.toLowerCase().trim().split(" ");
  const command = parseLine[0];
  const key = parseLine[1];
  const value = parseLine[2];
  const extra = parseLine[3];
  return { command, key, value, extra }
}