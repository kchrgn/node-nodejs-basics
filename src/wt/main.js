import { cpus } from 'os'
import { Worker } from 'worker_threads'

const performCalculations = async () => {
    let workersPool = Promise.allSettled(
        cpus().map((_cpu, index) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(new URL('./worker.js', import.meta.url));
                worker.postMessage(index + 10);
                worker.once('message', resolve);
                worker.on('error', reject);
                worker.on('exit', (code) => {
                    if (code != 0) reject
                })
            })
        })
    );

    workersPool.then(results => {
        const formattedResults = results.map((res) => {
            if (res.status === 'fulfilled') {
                return {status: 'resolved', data: res.value}
            } else {
                return {status: 'error', data: null}
            }
        });
        console.log(formattedResults);
        process.exit();
    });
};

await performCalculations();