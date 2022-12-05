import { rename as rena}  from 'node:fs/promises';

const rename = async () => {
    const originalName = new URL('./files/wrongFilename.txt', import.meta.url);
    const newName = new URL('./files/properFilename.md', import.meta.url);
    try {
        await rena(originalName, newName, (err) => {
            if (err) {
                console.log(err)
            }
        })
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();