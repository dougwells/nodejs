var fs = require('fs');

//zlib gives compression functions (in Node)
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

//createGzip creates a Transform Stream (can read and write)
var gzip = zlib.createGzip();

//can't pipe off of writeable since the output needs to be readable (write only stream)
readable.pipe(writable);

//readable (r only)--> pipe -->gzip(r/w) --> pipe --> compressed file (w only stream)
readable.pipe(gzip).pipe(compressed);