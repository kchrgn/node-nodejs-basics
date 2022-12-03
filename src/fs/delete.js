import {rm} from 'fs/promises'

const remove = async () => {
    const fileToRemove = new URL('./files/fileToRemove.txt', import.meta.url);
    try {
        await rm(fileToRemove)
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

await remove();