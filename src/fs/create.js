import {open} from 'fs/promises';

const create = async () => {
    const newFilePath = new URL('files/fresh.txt', import.meta.url);
    let fd;
    try {
        fd = await open(newFilePath, 'wx')
    } catch (err) {
        if (err.code === 'EEXIST') throw new Error('FS operation failed')
        throw err.message
    }
    
    try {
        await fd.writeFile('I am fresh and young', 'utf-8')
    }
    catch (err) {
        throw err.message
    }

    try {
        await fd?.close();
    } catch (err) {
        throw err.message
    }
};

await create();