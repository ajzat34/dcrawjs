var dcrawpath
try { dcrawpath = require('dcrawjs-darwin')} catch(e){}
try { dcrawpath = require('dcrawjs-win32')} catch(e){}
if (!dcraw) throw new Error('could not load os specific dcraw build, either dependencies are missing, or your os is not supported')

module.exports = function(source, options) {
  return new Promise(function(resolve, reject){
    try {
      const sh = spawn(dcrawpath, ['-T','-6','-c',source])
      let chunks = []
      sh.stdout.on('data', (chunk) => {
        chunks.push(chunk)
      })
      sh.stderr.on('data', (data) => {
        console.log(data.toString())
      })
      sh.on('close', () => {
        resolve(Buffer.concat(chunks))
      })
    } catch(err){
      reject(err)
    }
  })
}
