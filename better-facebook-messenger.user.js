// ==UserScript==
// @name         Better Facebook Messenger
// @namespace    http://simonalling.se
// @version      1.2
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

// Strings:
const ID_BETTER_FACEBOOK_MESSENGER = "Better_Facebook_Messenger";
const CLASS_MESSENGER_SHARED_PHOTO = "_3m31"; // thumbnail for a shared photo on Messenger.com
const CLASS_MESSENGER_CHAT_PHOTO = "_4tsk"; // image in the chat on Messenger.com
const CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER = "_4yp6"; // wrapper for image in the chat on Facebook.com
const CLASS_FACEBOOK_CHAT_PHOTO = "_4yp9"; // image in the chat on Facebook.com

const STRING_GIF_LABEL = "GIF";
const COLOR_GIF_BACKGROUND = "rgb(248, 250, 252)";
const COLOR_GIF_BORDER = "rgb(224, 228, 232)";


// CSS:
const CSS = `
/* GIF (common): */
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i] {
    background-size: 0; /* to prevent it from shining through at the corners or whatever */
}

/* GIF (common) on hover: */
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:hover,
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:active,
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:focus,
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:hover .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:active .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:focus .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:hover,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:active,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:focus {
    background-size: cover;
}

/* GIF replacement (common): */
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]::after {
    background-color: ${COLOR_GIF_BACKGROUND};
    border: 1px solid ${COLOR_GIF_BORDER};
    border-radius: inherit;
    box-sizing: border-box;
    content: "${STRING_GIF_LABEL}";
    display: block;
    height: 100%;
    text-align: center;
    width: 100%;
}

/* GIF replacement (common) on hover: */
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:hover::after,
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:active::after,
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]:focus::after,
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:hover .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:active .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_FACEBOOK_CHAT_PHOTO_WRAPPER}:focus .${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:hover::after,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:active::after,
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]:focus::after {
    display: none;
}

/* GIF in chat: */
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i],
.${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i] {
    position: relative; /* to allow absolute positioning */
}

/* GIF replacement in chat: */
.${CLASS_FACEBOOK_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_MESSENGER_CHAT_PHOTO}[style*=\\.gif i]::after {
    padding-top: 50%; /* trial and error */
    position: absolute;
    top: 0;
}

/* GIF replacement in Shared Photos: */
.${CLASS_MESSENGER_SHARED_PHOTO}[href*=\\.gif i]::after {
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

// IIFE end
})();
