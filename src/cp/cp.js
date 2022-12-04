import { fork, spawn } from 'child_process'

const spawnChildProcess = async (args) => {
    const childPath = new URL('./files/script.js', import.meta.url);
    const childProcess = fork(childPath, args);
};

spawnChildProcess(['Arg1', 'Arg2']);