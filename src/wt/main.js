import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const PATH_TO_FILE = join(__dirname, "worker.js");
const START_NUMBER = 10;

const performCalculations = async () => {
    const threads = new Set();

    for (let i = 0; i < cpus().length; i++) {
        threads.add(new Promise((resolve, reject) => {
            const worker = new Worker(PATH_TO_FILE, { workerData: START_NUMBER + i });
            worker.on("message", resolve);
            worker.on("error", reject);
        }));
    }

    Promise.allSettled(threads)
        .then((responses => responses.map(response => ({
        status: response.status === "fulfilled" ? "resolved" : "error",
        data: response.value || null,
    }))))
        .then(result => console.log(result));
};

await performCalculations();