# Favorite Things command line tool
> ###### a tool to store any reasonable key-value pairs

## Setup and install
Node is required. Check to see if you have node by running the following
```
$ node -v
v18.9.1 // 👈 any version here means you have it
```
If you do not have node, the recommended way to install it with the following 
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```


Download ZIP and unzip file, or clone repo from terminal

```
$ git clone https://github.com/taylulz/favorite_things_cli.git
```

From your terminal, navigate into to folder: ` cd favorite_things_cli`

Run `npm i` to setup tests

Run tests with `npm test` check if i need to intall/sudo first?

## Running the program
Install the cli by running
```
$ npm install --location=global
```

Run the program by typing the following into the terminal
```
$ key-value
``` 

You will be met with the following command prompt
```
>
```
## Possible commands
### **Put command**
The `put` command can receive exactly two arguments, a key and a value. Input more or less and expect to see `Invalid syntax.` in the terminal. If run sucessfully, expect to see `ok`. If given an existing key, the `put` command will update that key's value.
          
```
> put favorite_color  // 👈 only one argument
Invalid syntax.
> put favorite_color purple
ok
> put favorite_emoji 😋
ok
```
### **Fetch command**
The `fetch` command can receive exactly one argument— a key. Input more or less and expect to see `Invalid syntax.`. If a value for that key exists, the value will be printed to the terminal. If a value for that key does not exist, expect to see `Value not found.` in the terminal.
```
> fetch favorite_color purple  // 👈 more than one argument
Invalid syntax.
> fetch favorite_emoji
😋
>fetch favorite_animal
Value not found.
```

The `exit` command closes the session. You may also use ctrl+c
```
> exit
Bye!
```
### **Unknown commands**
If any unknown commands are received, expect to see the following string;
```
Unknown command. Known commands are: put, fetch, exit
```

### **Uninstall tool**
If you wish to uninstall the tool, run the following and delete the folder
```
$ npm uninstall --location=global favorite_things_cli
```

## Tools used
- [Node.js](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/about-npm)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

This tool was designed to meet specific requirements. Click below to view the requirements.
<details>
Create a command line tool for storing and fetching key-value string pairs. 

The tool must be able to be run from the command line by
typing "key-value". 

Running the tool must open an interactive session that accepts
put, fetch, and exit commands. When ready to accept a command, it must output the string
"> " as a command prompt.

put command should accept a key and a value, for example, "put favorite_color
purple". If the key already exists, the old value should be replaced. If successful, the command should output the string
"ok".

fetch command should just accept a key, for example, fetch favorite_color. If a value with that key has been entered, it should output that value ("purple"). If no value has
been entered for that key, it should output the string "Value not found."

The exit command should output the string "Bye!" and exit the program.

If any other command is entered, it should output the string "Unknown command. Known commands are: put, fetch, exit".

If a command has the wrong number of arguments or is otherwise malformed, it should output
the string "Invalid syntax."


your program should accept any
reasonable strings as names and values.
```
$ key-value
> put favorite_color purple
ok
> put favorite_flavor strawberry
ok
> fetch favorite_color
purple

> fetch favorite_animal
value not found
> exit
Bye!
```
</details>