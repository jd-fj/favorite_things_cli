npm install -g
sudo npm link

to run, enter `snake` in the terminal 


1. create a file
2. read the contents of the file
3. update the contents of the file
4. delete the file

< put favorite-color purple
> fave-color is purple


https://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files

#!/usr/bin/env node is an instance of a shebang line: the very first line in an executable plain-text file on Unix-like platforms that tells the system what interpreter to pass that file to for execution, via the command line following the magic #! prefix (called shebang).

[1] In the interest of cross-platform consistency, npm creates wrapper *.cmd files (batch files) on Windows when installing executables specified in a package's package.json file (via the "bin" property). Essentially, these wrapper batch files mimic Unix shebang functionality: they invoke the target file explicitly with the executable specified in the shebang line - thus, your scripts must include a shebang line even if you only ever intend to run them on Windows - see this answer of mine for details.
Since *.cmd files can be invoked without the .cmd extension, this makes for a seamless cross-platform experience: on both Windows and Unix you can effectively invoke an npm-installed CLI by its original, extension-less name.


ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements.


funny typo in the docs: 
https://nodejs.org/en/knowledge/file-system/how-to-store-local-config-data/
``



















Create a command line tool for storing and fetching key-value string pairs. 

The tool must be able to be run from the command line by
typing "key-value". 

Running the tool must open an interactive session that accepts
put, fetch, and exit commands. When ready to accept a command, it must output the string
"> " as a command prompt.

put command should accept a key and a value, for example, "put favorite_color
purple". If the key already exists, the old value should be replaced. If successful, the command should output the string
"ok".

fetch command should just accept a key, for example, fetch favorite_color. If a
value with that key has been entered, it should output that value ("purple"). If no value has
been entered for that key, it should output the string "Value not found."

The exit command should output the string "Bye!" and exit the program.

If any other command is entered, it should output the string "Unknown command. Known
commands are: put, fetch, exit".

If a command has the wrong number of arguments or is otherwise malformed, it should output
the string "Invalid syntax."


your program should accept any
reasonable strings as names and values.
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

Your code must include tests.
You may use any testing library you like, but the main code must not require any additional
libraries or resources beyond the standard built-in libraries for your language of choice. 


Your code will be evaluated on three criteria:
● Correctness: Does it follow all the instructions?
● Code Quality: Is it readable and well structured?
● Idiomatic Code Style: Does it follow the stylistic conventions of the language, such as
indentation and capitalization?

Once you have completed the challenge, please create a zip file containing your solution and
send it back to us as an attachment in a reply to this email.