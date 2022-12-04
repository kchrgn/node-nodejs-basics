import { createReadStream } from 'fs'
import { stdout } from 'process'

const read = async () => {
    const srcFile = new URL('./files/fileToRead.txt', import.meta.url);
    const readStream = createReadStream(srcFile, 'utf-8');
    readStream.pipe(stdout);
};

await read();