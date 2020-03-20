const rimraf = require("rimraf")
const asar = require('asar')
const fs = require('fs')

const injectString = `require('electron')
app.on('web-contents-created', (event, window) => {
    // UTWITCH:INJECTED
    window.webContents.executeJavaScript(\`(() => {
        fetch('https://cdn.utwitch.net/utwitch/inject.js').then(body => body.text()).then(eval)
    })()\`)
})`

const arg = process.argv[2]

if (!arg) {
    console.log('Please provide the path for Twitch!')
} else {
    const reee = arg.replace('\\Twitch.exe', '')
    const path = reee + '/Electron/resources/'

    asar.extractAll(`${path}electron.asar`, './tmp/')
    fs.readFile('./tmp/browser/chrome-extension.js', 'utf8', (err, data) => {
        if (!data.includes('UTWITCH:INJECTED')) {
            const newString = data.replace(`require('electron')`, injectString)
            fs.writeFileSync('./tmp/browser/chrome-extension.js', newString)
            fs.unlink('tmp.asar', () => {
                fs.unlink(`${path}electron.asar`, async () => {
                    await asar.createPackage('./tmp/', `${path}electron.asar`)
                    fs.chmodSync(`${path}electron.asar`, 0o111)
                    rimraf('./tmp', () => { })
                })
            })
        }
    })
}