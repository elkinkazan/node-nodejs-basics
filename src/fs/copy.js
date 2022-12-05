import { appendFile, readdir, mkdir } from 'node:fs/promises';
import { stat } from 'node:fs';

const copy = async () => {
    const dir = './files';
    const dest = './files_copy';
    try {
        const copyFilesRecurse = async (dirFile, destName) => {
            try {
                await mkdir(destName);
                const files = await readdir(dirFile);
                files.forEach((file) => {
                    try {
                        stat(`${dirFile}/${file}`, (err, stats) => {
                        if( !err ) {
                            if (stats.isFile()) {
                                appendFile(`${destName}/${file}`, file);
                            } else {
                                copyFilesRecurse(`${dirFile}/${file}/`, `${destName}/${file}/`)
                            }
                        } else { throw new Error(err) }
                        })
                    } catch (err) {
                        throw new Error(`The ${file} could not be copied`)
                    }
                })
            } catch (err) {
                throw new Error('FS operation failed')
            }
        }
        copyFilesRecurse(dir, dest)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

copy();