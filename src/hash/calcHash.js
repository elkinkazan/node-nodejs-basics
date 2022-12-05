
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    try {
        const filePath = new URL( './files/fileToCalculateHashFor.txt', import.meta.url);
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(createHash('sha256').update(content, 'utf8').digest('hex'));
    } catch (err) {
        throw new Error('FS operation failed');
    } 
};

await calculateHash();