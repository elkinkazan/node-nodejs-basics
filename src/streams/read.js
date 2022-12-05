import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    try {
        await pipeline(
            createReadStream('./files/fileToRead.txt'),
            stdout
        );
    } catch (err) {
        throw new Error(err)
    }
};

await read();