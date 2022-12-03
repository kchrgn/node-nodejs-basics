import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'
import { pipeline } from 'stream';

const compress = async () => {
    const srcFile = new URL('./files/fileToCompress.txt', import.meta.url);
    const archFile = new URL('./files/archive.gz', import.meta.url);

    pipeline (
        createReadStream(srcFile),
        createGzip(),
        createWriteStream(archFile),
        err => {
            if (err) throw err;
        }
    )
};

await compress();