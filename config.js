const nav = document.getElementById("nav-box");
const navContainer = document.getElementById("nav-container");

const menuOptions = document.getElementById("menu-options");
const menu = document.getElementById("menu-area");
const logoAndMenu = document.getElementById("logo-and-menu");
const menuIcon = document.getElementById("menu-icon");

const closeButton = document.getElementById("close-button");

const navExpandedStyle = `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 15;
`;

const navContainerExpandedStyle = `
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	flex: 1;
	padding: 0;
	gap: 15px;
`;

const logoAndMenuExpandedStyle = `
	padding: 0 20px;
	background: #1a1d2b;
	height: 55px;
`;

const menuOptionsExpandedStyle = `
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 0 20px;
`;

var menuExpandedState = false;

const expandMenu = () => {
	nav.style = navExpandedStyle;
	navContainer.style = navContainerExpandedStyle;
	menuOptions.style = menuOptionsExpandedStyle;
	logoAndMenu.style = logoAndMenuExpandedStyle;
	menuIcon.setAttribute("src", "assets/close.svg");
}

const closeMenu = () => {
	nav.removeAttribute("style");
	menuOptions.removeAttribute("style");
	navContainer.removeAttribute("style");
	logoAndMenu.removeAttribute("style");
	menuIcon.setAttribute("src", "assets/menu.svg");
}

menu.addEventListener("click", () => {
	menuExpandedState ? closeMenu() : expandMenu();
	menuExpandedState = !menuExpandedState;
});