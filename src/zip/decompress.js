import { createReadStream, createWriteStream } from 'fs'
import { access } from 'fs/promises';
import { createGunzip } from 'zlib'
import { pipeline } from 'stream';

const decompress = async () => {
    const archFile = new URL('./files/archive.gz', import.meta.url);
    const dstFile = new URL('./files/fileToCompress.txt', import.meta.url);

    try {
        await access(archFile);
    } catch (err) {
        throw err;
    }

    pipeline (
        createReadStream(archFile),
        createGunzip(),
        createWriteStream(dstFile),
        err => {
            if (err) throw err;
        }
    )
};

await decompress();