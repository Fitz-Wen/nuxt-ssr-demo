export default function (context) {
  if (process.server) {
    console.log('***************')
    global.navigator = {
      appName: 'nodeJs'
    }
    global.window = {}
  }
}
