import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';


const decompress = async () => {
    try {
        await pipeline(
            createReadStream('./files/archive.gz'),
            createUnzip(),
            createWriteStream('./files/fileToCompress.txt')
        );
    } catch (err) {
        throw new Error(err)
    }
};

await decompress();