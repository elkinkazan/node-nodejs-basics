const parseArgs = () => {
    const args = process.argv;
    for (let key in args) {
        console.log(`prop${ key>0 ? +key+1 : '' }Name is ${args[key]}`)
    }
};

parseArgs();