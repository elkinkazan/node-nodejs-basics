import { unlink } from 'node:fs/promises';

const remove = async () => {
    try {
        await unlink('./files/fileToRemove.txt')
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await remove();