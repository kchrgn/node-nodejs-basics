import { readdir } from 'fs/promises'

const list = async () => {
    const filesFolderPath = new URL('./files', import.meta.url);

    try {
        const fileNameList = await readdir(filesFolderPath);
        console.log (fileNameList);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();