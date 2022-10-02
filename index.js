import * as fsp from 'fs/promises';

export default async function keyAndValue() {

    let allArgs = [];
    let keys = [];
    let values = [];

    function parseArgs(userArgs) {

        const inputArgs = userArgs.slice(2) // <-- remove execPath and filename

        for (let i = 0; i < inputArgs.length; i++) {
            allArgs.push(inputArgs[i])
            if (i % 2 == 0) {
                console.log("key: ", inputArgs[i])
                keys.push(inputArgs[i])
            } else {
                values.push(inputArgs[i])
            }
        }
    }

    parseArgs(process.argv)
    // console.log('allArgs', allArgs);
    console.log('keys: ', keys);
    // console.log('values: ', values);

    const readData = await fsp.readFile('testData.json', "utf-8", (err) => {
        if (err) {
            console.log("read err: ", err)
        }
    })
    console.log("readData: ", readData)

    // const data = JSON.stringify(allArgs)

    // fs.writeFile('./store.json', data, (err) => {
    //     if (err) {
    //         console.log('There has been an error saving your configuration data.');
    //         console.log(err.message);
    //         return;
    //     }
    //     console.log('Configuration saved successfully.')
    // });
}
