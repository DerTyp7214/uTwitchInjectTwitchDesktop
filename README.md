# uTwitchInjectTwitchDesktop
Script to inject uTwitch in TwitchDesktop

## Without extra code

In Twitch press F12, paste `fetch('https://cdn.utwitch.net/utwitch/inject.js').then(body => body.text()).then(eval)` and then Enter.
this will inject it only in your current session.

## With extra code

This will work untill you update/uninstall Twitch

Cmd/Powershell:
<br/>
<br/>
Yarn:
<br/>
`yarn run inject <path to Twitch.exe>`
<br/>
<br/>
Node:
<br/>
`npm run inject <path to Twitch.exe>`
