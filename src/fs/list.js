import {readdir} from 'fs/promises'

const list = async () => {
    // Write your code here 
    // list.js - implement function that prints all array of filenames from files folder into console
    // (if files folder doesn't exists Error with message FS operation failed must be thrown)
    const filesFolderPath = new URL('./files', import.meta.url);

    try {
        const fileNameList = await readdir(filesFolderPath);
        console.log (fileNameList);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();