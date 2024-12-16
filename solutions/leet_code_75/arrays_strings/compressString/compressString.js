/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 0;

    while(read< chars.length)
    {
        let char = chars[read];
        start = read;

        while(read<chars.length && chars[read] == char)
        {
            read++;
        }

        chars[write] = char;
        write++;

        let count = read - start;

        if(count>1)
        {
            for(let digit of String(count))
            {
                chars[write] = digit;
                write++;
            }
        }

    }
    return write;
};

module.exports = compress;