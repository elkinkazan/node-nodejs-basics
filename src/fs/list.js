import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs';

const list = async () => {
    const dir = './files_copy';
    try {
        const printFilesRecurse = async (dirFile) => {
            try {
                const files = await readdir(dirFile);
                files.forEach((file) => {
                    try {
                        stat(`${dirFile}/${file}`, (err, stats) => {
                        if( !err ) {
                            if (stats.isFile()) {
                                console.log(file)
                            } else {
                                printFilesRecurse(`${dirFile}/${file}/`)
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
        printFilesRecurse(dir)
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();