// ==UserScript==
// @name         Better Facebook Messenger
// @namespace    http://simonalling.se
// @version      1.2.3
// @description  Hides those disturbing GIFs unless hovered upon.
// @downloadURL  https://raw.githubusercontent.com/SimonAlling/better-facebook-messenger/master/better-facebook-messenger.user.js
// @author       Simon Alling
// @match        http://*.messenger.com/*
// @match        https://*.messenger.com/*
// @match        http://*.facebook.com/*
// @match        https://*.facebook.com/*
// @grant        none
// ==/UserScript==

(() => {
// IIFE start
"use strict";

// Strings:
const STRING_EXTENSION_NAME = "Better Facebook Messenger";
const STRING_HEADING = "*** " + STRING_EXTENSION_NAME.toUpperCase() + " ***";
const STRING_GIF_LABEL = "GIF";
const STRING_TITLE_FACEBOOK = "Facebook";
const STRING_TITLE_MESSENGER = "Messenger";

const HOSTNAME_FACEBOOK = "facebook.com";
const HOSTNAME_MESSENGER = "messenger.com";

const COLOR_GIF_BACKGROUND = "rgb(248, 250, 252)";
const COLOR_GIF_BORDER = "rgb(224, 228, 232)";
const COLOR_GIF_TEXT = "rgb(0, 132, 255)";

const ID_BETTER_FACEBOOK_MESSENGER = STRING_EXTENSION_NAME.replace(/\s/g, "_");
const CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER = "_4yp6"; // wrapper for image in the chat on Facebook.com
const CLASS_FACEBOOK_CHAT_PHOTO = "_4yp9"; // image in the chat on Facebook.com
const CLASS_MESSENGER_CHAT_PHOTO = "_4tsk"; // image in the chat on Messenger.com
const CLASS_MESSENGER_SHARED_PHOTO = "_3m31"; // thumbnail for a shared photo on Messenger.com

const SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER = `.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}`;
const SELECTOR_FACEBOOK_CHAT_GIF = `.${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]`;
const SELECTOR_MESSENGER_CHAT_GIF = `.${CLASS_MESSENGER_CHAT_PHOTO}[data-testid=animated_image]`; // GIF in the chat on Messenger.com
const SELECTOR_MESSENGER_SHARED_GIF = `.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]`;

function log(str) {
    console.log(`[${STRING_EXTENSION_NAME}] ` + str);
}

function hostnameChecker(hostname) {
    return () => document.location.hostname.indexOf(hostname) > -1;
}

const isFacebook = hostnameChecker(HOSTNAME_FACEBOOK);
const isMessenger = hostnameChecker(HOSTNAME_MESSENGER);

// Freezes document.title so it cannot flash annoyingly:
function freezeTitle(title) {
    log(`Freezing page title to "${title}".`);
    document.title = title;
    Object.defineProperty(document, "title", { writable: false }); // prevents future modification
}


// CSS:
const CSS = `
/*${STRING_HEADING}*/

/* GIF (common): */
/* The purpose of these rules is to prevent the GIFs from shining through at the corners or whatever. */
${SELECTOR_FACEBOOK_CHAT_GIF},
${SELECTOR_MESSENGER_SHARED_GIF} {
    background-size: 0;
}
${SELECTOR_MESSENGER_CHAT_GIF} img {
    opacity: 0;
}

/* GIF (common) on hover: */
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:hover ${SELECTOR_FACEBOOK_CHAT_GIF},
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:active ${SELECTOR_FACEBOOK_CHAT_GIF},
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:focus ${SELECTOR_FACEBOOK_CHAT_GIF},
${SELECTOR_MESSENGER_SHARED_GIF}:hover,
${SELECTOR_MESSENGER_SHARED_GIF}:active,
${SELECTOR_MESSENGER_SHARED_GIF}:focus {
    background-size: cover;
}
${SELECTOR_MESSENGER_CHAT_GIF}:hover img,
${SELECTOR_MESSENGER_CHAT_GIF}:active img,
${SELECTOR_MESSENGER_CHAT_GIF}:focus img {
    opacity: 1;
}

/* GIF replacement (common): */
${SELECTOR_FACEBOOK_CHAT_GIF}::after,
${SELECTOR_MESSENGER_CHAT_GIF}::after,
${SELECTOR_MESSENGER_SHARED_GIF}::after {
    background-color: ${COLOR_GIF_BACKGROUND};
    border: 1px solid ${COLOR_GIF_BORDER};
    border-radius: inherit;
    box-sizing: border-box;
    color: ${COLOR_GIF_TEXT};
    content: "${STRING_GIF_LABEL}";
    display: block;
    height: 100%;
    text-align: center;
    width: 100%;
}

/* GIF replacement (common) on hover: */
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:hover ${SELECTOR_FACEBOOK_CHAT_GIF}::after,
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:active ${SELECTOR_FACEBOOK_CHAT_GIF}::after,
${SELECTOR_FACEBOOK_CHAT_PHOTO_WRAPPER}:focus ${SELECTOR_FACEBOOK_CHAT_GIF}::after,
${SELECTOR_MESSENGER_CHAT_GIF}:hover::after,
${SELECTOR_MESSENGER_CHAT_GIF}:active::after,
${SELECTOR_MESSENGER_CHAT_GIF}:focus::after,
${SELECTOR_MESSENGER_SHARED_GIF}:hover::after,
${SELECTOR_MESSENGER_SHARED_GIF}:active::after,
${SELECTOR_MESSENGER_SHARED_GIF}:focus::after {
    display: none;
}

/* GIF in chat: */
${SELECTOR_FACEBOOK_CHAT_GIF},
${SELECTOR_MESSENGER_CHAT_GIF} {
    position: relative; /* to allow absolute positioning */
}

/* GIF replacement in chat: */
${SELECTOR_FACEBOOK_CHAT_GIF}::after,
${SELECTOR_MESSENGER_CHAT_GIF}::after {
    position: absolute;
    top: 0;
}
/* Facebook.com: */
${SELECTOR_FACEBOOK_CHAT_GIF}::after {
    padding-top: calc(50% - 10px); /* trial and error */
}
/* Messenger.com: */
${SELECTOR_MESSENGER_CHAT_GIF}::after {
    padding-top: 50%; /* trial and error */
}

/* GIF replacement in Shared Photos: */
${SELECTOR_MESSENGER_SHARED_GIF}::after {
    padding-top: calc(50% - 12px); /* trial and error */
}
`;


// Insert CSS:
document.head.appendChild((() => {
    const styleElement = document.createElement("style");
    styleElement.id = ID_BETTER_FACEBOOK_MESSENGER;
    styleElement.textContent = CSS;
    return styleElement;
})());

// Freeze title:
if (isMessenger()) {
    freezeTitle(STRING_TITLE_MESSENGER);
} else if (isFacebook()) {
    freezeTitle(STRING_TITLE_FACEBOOK);
}

// IIFE end
})();
