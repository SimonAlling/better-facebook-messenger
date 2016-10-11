// ==UserScript==
// @name         Better Facebook Messenger
// @namespace    http://simonalling.se
// @version      1.1.2
// @description  Hides those disturbing GIF images under Shared Photos unless hovered upon.
// @downloadURL  https://raw.githubusercontent.com/SimonAlling/better-facebook-messenger/master/better-facebook-messenger.user.js
// @author       Simon Alling
// @match        http://*.messenger.com/*
// @match        https://*.messenger.com/*
// @grant        none
// ==/UserScript==

(() => {
// IIFE start

// Strings:
const ID_BETTER_FACEBOOK_MESSENGER  = "Better_Facebook_Messenger";
const STRING_GIF_LABEL              = "GIF";
const CLASS_SHARED_PHOTOS           = "_1li_"; // Shared Photos container
const CLASS_SHARED_PHOTOS_THUMBNAIL = "_3m31"; // thumbnail for a shared photo
const CLASS_CHAT_PHOTO              = "_4tsk"; // image in the chat
const COLOR_GIF_BACKGROUND          = "rgb(248, 250, 252)";
const COLOR_GIF_BORDER              = "rgb(224, 228, 232)";


// CSS:
const CSS = `
.${CLASS_CHAT_PHOTO}[style*=\\.gif i]::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_SHARED_PHOTOS_THUMBNAIL}[href*=\\.gif i]::after
{
	background-image: none;
	background-position: center center;
	background-size: cover;
	box-sizing: border-box;
	content: "${STRING_GIF_LABEL}";
	display: block;
	height: 100%;
	text-align: center;
}

.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:hover::after,
.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:active::after,
.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:focus::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_SHARED_PHOTOS_THUMBNAIL}[href*=\\.gif i]:hover::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_SHARED_PHOTOS_THUMBNAIL}[href*=\\.gif i]:active::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_SHARED_PHOTOS_THUMBNAIL}[href*=\\.gif i]:focus::after
{
	background-image: inherit;
	border: none;
	content: "";
}


.${CLASS_CHAT_PHOTO}[style*=\\.gif i] img {
	visibility: hidden;
}

.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:hover img,
.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:active img,
.${CLASS_CHAT_PHOTO}[style*=\\.gif i]:focus img {
	visibility: visible;
}

.${CLASS_CHAT_PHOTO}[style*=\\.gif i] {
	position: relative; /* to allow absolute positioning */
	background-size: 1px; /* to prevent it from shining through at the corners */
}

.${CLASS_CHAT_PHOTO}[style*=\\.gif i]::after {
	background-color: ${COLOR_GIF_BACKGROUND};
	border: 1px solid ${COLOR_GIF_BORDER};
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;
	border-bottom-left-radius: inherit;
	border-bottom-right-radius: inherit;
	cursor: pointer;
	padding-top: 50%; /* trial and error */
	position: absolute;
	top: 0;
	width: 100%;
}

.${CLASS_SHARED_PHOTOS} .${CLASS_SHARED_PHOTOS_THUMBNAIL}[href*=\\.gif i]::after {
	background-color: ${COLOR_GIF_BACKGROUND};
	border: 1px solid ${COLOR_GIF_BORDER};
	padding-top: calc(50% - 12px); /* trial and error */
}
`;


// Insert CSS:
document.head.appendChild((() => {
	const styleElement = document.createElement("style");
	styleElement.textContent = CSS;
	styleElement.id = ID_BETTER_FACEBOOK_MESSENGER;
	return styleElement;
})());

// IIFE end
})();
