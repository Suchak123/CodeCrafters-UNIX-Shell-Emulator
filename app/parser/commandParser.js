function parse(input) {
    const [command, ...args] = input.trim().split(/\s+/);
    return { command, args};
}

module.exports = parse;