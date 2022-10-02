import * as fsp from 'fs/promises';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const fakeDatabase = {};

const rl = readline.createInterface({
  input,
  output,
  prompt: '> '
});

export default async function main() {

  rl.prompt();
  rl.on('line', (line) => {
    const { command, key, value, extra } = validateArguments(line);
    console.log("command? ", command)
    console.log('key? ', key);
    console.log('value? ', value);
    console.log('extra? ', extra) // <-- too many args, invalid error

    switch (command) {
      case 'put':
        addKeyValue(key, value, extra)
        break;
      case 'fetch':
        fetch(key, value);
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
  // console.log("extra!", extra)
  if (!key || !value || extra) { // <-- could be its own validate args 
    console.log("Invalid syntax");
  } else {
    // keys = Object.keys()
    if (key in fakeDatabase) {
      Object.assign(fakeDatabase, { [key]: value })
      console.log("did I update the value? ", fakeDatabase)
    } else {
      fakeDatabase[key] = value;
      console.log("ok", fakeDatabase)
      return fakeDatabase;
    }
  }
}

export function fetch(query, extra) { //  <-- validate but it would be diff than add validate
  if (!query || extra) {
    console.log("Invalid syntax")
    return;
  } else if (!fakeDatabase[query]) {
    console.log('value not found');
    // exit();
    console.log(fakeDatabase)
    return;
  }

  const found = fakeDatabase[query];

  if (found) {
    console.log('found!', found);
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
  const parseLine = args.trim().split(" "); // <-- validate func? 
  const command = parseLine[0];
  const key = parseLine[1];
  const value = parseLine[2];
  const extra = parseLine[3];
  return { command, key, value, extra }
}