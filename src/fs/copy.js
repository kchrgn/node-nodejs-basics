import { cp } from 'fs/promises'

const copy = async () => {
    const srcPath = new URL('files', import.meta.url);
    const dstPath = new URL('files_copy', import.meta.url);

    try {
        await cp(srcPath, dstPath, {errorOnExist: true, force: false, recursive: true});
    } catch (err) {
        if (err.code === 'ERR_FS_CP_EEXIST' || err.code === 'ENOENT') throw new Error ('FS operation failed');
        throw err;
    }
};

copy();