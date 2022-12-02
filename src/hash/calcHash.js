import {createHmac} from 'crypto'
import {readFile} from 'fs/promises'

const calculateHash = async () => {

    const srcFilePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
    try {
        const data = await readFile(srcFilePath)
        const hmac = createHmac("sha256", 'my secret key');
        const sha256Hash = hmac.update(data);
        console.log(sha256Hash.digest('hex'))
    } catch (err) {
        throw err
    }
};

await calculateHash();