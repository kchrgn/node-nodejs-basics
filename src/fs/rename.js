import {rename as renameFile, access} from 'fs/promises'

const rename = async () => {
    const oldFileName = new URL('./files/wrongFilename.txt', import.meta.url)
    const newFileName = new URL('./files/properFilename.md', import.meta.url)

    let newFileIsExist = false;

    try {
        await access(newFileName);
        newFileIsExist = true;
    } catch (err) {}

    if (newFileIsExist) throw new Error('FS operation failed');

    try {
        await renameFile(oldFileName, newFileName);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();