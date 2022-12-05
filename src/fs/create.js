import { readdir, writeFile } from 'node:fs/promises';

const create = async () => {
    const dir = './files/';
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    try {
        const files = await readdir(dir);
        if (files.includes(fileName)) {
            throw new Error("FS operation failed")
        } else {
            await writeFile(dir + fileName, fileContent)
        }
    } catch (err) {
        console.error(err);
    }
};

await create();