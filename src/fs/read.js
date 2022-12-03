import {readFile} from 'fs/promises'

const read = async () => {
    const fileToReadPath = new URL('./files/fileToRead.txt', import.meta.url);

    try {
        const fileContent = await readFile(fileToReadPath, 'utf8');
        console.log(fileContent)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await read();