import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const revert = (str) => {
        return str.toString().split("").reverse().join("")
    }
    try {
        await pipeline(
            stdin,
            async function* (source, { signal }) {
                source.setEncoding('utf8');
                for await (const chunk of source) {
                  yield await revert(chunk, { signal });
                }
              },
            stdout
        );
    } catch (err) {
        throw new Error(err)
    }
};

await transform();