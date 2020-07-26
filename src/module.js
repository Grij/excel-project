console.log('Module.js')

async function start() {
  return await Promise.resolve('ASYNC WORKING')
}

start().then(console.log)
