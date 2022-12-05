import { fork } from "child_process";
import { fileURLToPath } from "url";
import { join } from "path";
import { stderr, stdin, stdout } from 'node:process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const childProcess = fork(FILE_PATH, args, { silent: true });

    try {
        stdin.pipe(childProcess.stdin);
        childProcess.stdout.pipe(stdout);
    } catch (err) {
        if (err) {
        stderr.write(err.message);
        }
    }
};

spawnChildProcess();