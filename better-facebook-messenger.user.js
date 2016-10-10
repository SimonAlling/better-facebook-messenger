// ==UserScript==
// @name         Better Facebook Messenger
// @namespace    http://simonalling.se
// @version      1.0
// @description  Hides those disturbing GIF images under Shared Photos unless hovered upon.
// @author       Simon Alling
// @match        http://*.messenger.com/*
// @match        https://*.messenger.com/*
// @grant        none
// ==/UserScript==

(() => {
// IIFE start

// Strings:
const ID_BETTER_FACEBOOK_MESSENGER = "Better_Facebook_Messenger";
const STRING_GIF_LABEL             = "GIF";
const CLASS_SHARED_PHOTOS          = "_1li_"; // Shared Photos container
const CLASS_THUMBNAIL              = "_3m31"; // thumbnail for a shared photo


// CSS:
const CSS = `
.${CLASS_SHARED_PHOTOS} .${CLASS_THUMBNAIL}[href*=gif i]::after {
	background-color: rgb(248, 250, 252);
	background-image: none;
	background-position: center center;
	background-size: cover;
	border: 1px solid rgb(224, 228, 232);
	box-sizing: border-box;
	content: "${STRING_GIF_LABEL}";
	display: block;
	font-size: 20px;
	height: 100%;
	padding-top: calc(50% - 16px); /* trial and error */
	text-align: center;
}

.${CLASS_SHARED_PHOTOS} .${CLASS_THUMBNAIL}[href*=gif i]:hover::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_THUMBNAIL}[href*=gif i]:active::after,
.${CLASS_SHARED_PHOTOS} .${CLASS_THUMBNAIL}[href*=gif i]:focus::after {
	background-image: inherit;
	border: none;
	content: "";
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
