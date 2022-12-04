import { stdin } from 'process'
import { createWriteStream } from 'fs'

const write = async () => {
    const writeFile = new URL('./files/fileToWrite.txt', import.meta.url);
    const writeStream = createWriteStream(writeFile);
    stdin.pipe(writeStream);
};

await write();