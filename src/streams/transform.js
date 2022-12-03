import {stdin, stdout} from 'process'
import {Transform, pipeline} from 'stream'

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _encoding, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join('') + '\n');
        }
    });
    pipeline(
        stdin,
        reverse,
        stdout,
        err => {
            if (err) throw err;
        }
    )
};

await transform();