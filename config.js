const nav = document.getElementById("nav-box");
const navContainer = document.getElementById("nav-container");

const menuOptions = document.getElementById("menu-options");
const menu = document.getElementById("menu-area");
const logoAndMenu = document.getElementById("logo-and-menu");
const menuIcon = document.getElementById("menu-icon");

const closeButton = document.getElementById("close-button");

const experienceTitle = document.getElementById("experience-title");
const experienceDescription = document.getElementById("experience-description");
const experienceTime = document.getElementById("experience-time");
const experienceButtons = document.getElementsByClassName("experience-button");

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

const experienciasProfissionais = [
	{
		empresa: "Centro Médico Ser Mais",
		cargo: "Auxiliar Administrativo",
		tipo: "Estágio",
		local: "Camaçari - BA",
		inicio: "06-2017",
		fim: "12-2017",
		descricao: `
			Responsável pelo suporte administrativo, atendimento
			ao cliente, marcação de exames e
			principalmente na manutenção de rede e micro da empresa. Como estagiário fiz a
			configuração de rede e servidores necessária para o compartilhamento de arquivos entre o
			servidor e as estações.
		`,
		atual: false,
	},
	{
		empresa: "Sicomercio Camaçari",
		cargo: "Auxiliar Administrativo",
		tipo: "CLT",
		local: "Camaçari - BA",
		inicio: "01-2018",
		fim: "10-2018",
		descricao: `
			Realizando atividades de suporte administrativo, social
			media, cobranças, pagamentos,
			manutenção de rede e micro.
		`,
		atual: false,
	},
	{
		empresa: "Auto Metal SA",
		cargo: "Auxiliar Administrativo",
		tipo: "Jovem Aprendiz",
		local: "Dias D'ávila - BA",
		inicio: "06-2019",
		fim: "10-2020",
		descricao: `
			Área de expedição, responsável pelo inventário diário de peças, requisição de materiais
			diversos ao almoxarifado, criação de embarques e despacho de peças, fiscalização de qualidade
			e retrabalho de peças, organização e controle de embalagens.
		`,
		atual: false,
	},
	{
		empresa: "Centro Médico Ser Mais",
		cargo: "Técnico de TI",
		tipo: "CLT",
		local: "Camaçari - BA",
		inicio: "04-2021",
		fim: "06-2022",
		descricao: `
			Responsável pelo gerenciamento de rede da empresa, criação de usuários de rede,
			gerenciamento de servidor de domínio, políticas de grupo,
			gerenciamento de regras no servidor de arquivos, configuração de firewall,
			configuração de roteadores, impressoras, periféricos em geral e etc.
		`,
		atual: false,
	},
]


function changeExperience(index) {
	for (let i = 0; i < experienceButtons.length; i++) {
		experienceButtons[i].removeAttribute("style");
	}

	experienceTitle.innerHTML = experienciasProfissionais[index].empresa;
	experienceDescription.innerHTML = experienciasProfissionais[index].descricao;
	experienceTime.innerHTML = `${experienciasProfissionais[index].inicio} / ${experienciasProfissionais[index].fim}`;
	experienceButtons[index].style.background = "#1a1c2b";

}

function copyText(text) {
	navigator.clipboard.writeText(text);
	window.alert("Copiado para a área de transferência!");
}