import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    try {
        await pipeline(
            createReadStream('./files/fileToCompress.txt'),
            createGzip(),
            createWriteStream('./files/archive.gz')
        );
    } catch (err) {
        throw new Error(err)
    }
};

await compress();