var dcraw
try { dcraw = require('dcrawjs-darwin');} catch(){}
try { dcraw = require('dcrawjs-win32');} catch(){}
if (!dcraw) throw new Error('could not load os specific dcraw build, either dependencies are missing, or your os is not supported')
module.exports = dcraw
