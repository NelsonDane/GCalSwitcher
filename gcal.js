// ==UserScript==
// @name         Clarkson GCal Switcher
// @namespace    https://calendar.google.com/
// @version      1.0.1
// @description  Reloads until "Clarkson University" in page title
// @author       NelsonDane
// @match        https://calendar.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL    https://raw.githubusercontent.com/NelsonDane/GCalSwitcher/master/gcal.js
// @downloadURL  https://raw.githubusercontent.com/NelsonDane/GCalSwitcher/master/gcal.js
// @grant        GM.getValue
// @grant        GM.setValue
// @run-at       document-idle
// ==/UserScript==

'use strict'

// String to search for in page title
const SEARCH = "Clarkson University";

// Maximum number of accounts to check
const MAX = 5;

// Get previous count value, setting to 0 if not found
var count = await GM.getValue("count", 0);
if (count >= MAX) {
    await GM.setValue("count", 0);
    count = 0;
}
console.log("Count: " + count);

async function reload(count, SEARCH) {
    // If found, we're done, so reset count to 0
    if (document.title.includes(SEARCH)) {
        console.log("Found " + SEARCH + " in page title");
        await GM.setValue("count", 0);
    } else {
        // Otherwise, reload with next account
        console.log("Did not find " + SEARCH + " in page title")
        await GM.setValue("count", count + 1);
        window.location.href = "https://calendar.google.com/calendar/u/" + count + "/r";
    }
}

// Run reload
reload(count, SEARCH);
