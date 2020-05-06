var dcraw
try { dcraw = require('dcrawjs-darwin')} catch(e){}
try { dcraw = require('dcrawjs-win32')} catch(e){}
if (!dcraw) throw new Error('could not load os specific dcraw build, either dependencies are missing, or your os is not supported')
module.exports = dcraw
