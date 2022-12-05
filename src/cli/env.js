const parseEnv = () => {
    const envObj = process.env;
    for (const key in envObj) {
        console.log(`RSS_${key}: ${envObj[key]}`)
    }
};

parseEnv();