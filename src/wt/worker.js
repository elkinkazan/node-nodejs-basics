import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        const worker = new Worker(__filename, { workerData: 10 });
        worker.on("message", ( message ) => { console.log(message); });
    } else {
        const res = nthFibonacci(workerData);
        parentPort.postMessage(res);
    }
};

sendResult();