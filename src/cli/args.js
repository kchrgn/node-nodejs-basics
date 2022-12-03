const parseArgs = () => {
    let res = '';
    for (let i = 2; i < process.argv.length; i += 1) {
        if (process.argv[i].slice(0, 2) === '--') {
            if (res) res += ', ';
            res += process.argv[i].slice(2) + ' is ' + process.argv[i + 1];
        }
    }
    console.log(res);
};

parseArgs();