# GCalSwitcher for Tampermonkey
 
A small TamperMonkey script that automatically switches to the desired Google Calendar Account. 

For example, I use the Clarkson University calendar on my Clarkson account so I can see classes and assignments. It gets annoying when I load Google Calendar and it loads a different account, so this script will automatically switch between accounts until it finds the Clarkson account.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. Open the script file [here](https://raw.githubusercontent.com/NelsonDane/GCalSwitcher/main/gcal.user.js).
3. Click the "Install" button.
4. Edit the script to add your own SEARCH string.
5. Profit.

## Options
`SEARCH`: The string to search for in the Google Calendar title. If the title contains this string, the script will switch to that account.

`MAX`: The maximum number of accounts to search for. If you have more than 5 accounts, you can change this to a higher number.