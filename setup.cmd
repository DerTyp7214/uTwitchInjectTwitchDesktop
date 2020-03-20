@echo off
echo Installing dependencies && nodejs\npm.cmd i > nul && echo Patching twitch && nodejs\node.exe index.js %appdata%\Twitch\Bin\Twitch.exe && echo Done && ping 127.0.0.1 -n 2 > nul