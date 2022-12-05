import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    try {
        await pipeline(
            stdin,
            createWriteStream('./files/fileToWrite.txt')
        );
    } catch (err) {
        throw new Error(err)
    }
};

await write();