const parseEnv = () => {
    let res = '';
    for (let evar in process.env) {
        if (evar.substring(0,4) === 'RSS_') {
            if (res) res += '; ';
            res += evar + '=' + process.env[evar]
        }  
    }
    console.log(res)
};

parseEnv();