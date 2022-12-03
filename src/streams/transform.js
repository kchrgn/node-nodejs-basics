import {stdin, stdout} from 'process'
import {Transform, pipeline} from 'stream'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().trim().split('').reverse().join('') + '\n');
            callback();
        }
    });
    pipeline(
        stdin,
        reverse,
        stdout,
        err => {throw err}
    )
};

await transform();