import mainLogo from './modules/logo';
import navbar from './modules/navbar';
import { moveBlock } from './modules/navbar';
import navbarColor from './modules/navbarColor';
import showProjects from './modules/showProjects';
import animationByScroll from './modules/animationByScroll';
import offset from './modules/offset';
import tech from './modules/tech';
import forms from './modules/form';
import scrolling from './modules/scrolling';


import Vivus from 'vivus';

//TODO: 
//		2) переписать на модельную структуру с учетом передачи элементов в функции (подумать как это сделать)
//      3) посмотреть marker в мобильной ориентации
//      4) Сделать форму
//      5) Для полного счастья написать комментарии на английском 

document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// LOGO
	mainLogo('.logo', "PETR'S PORTFOLIO");

	// BURGER and Menu Marker
	navbar('.burger', 'nav', '#marker', '.nav-links li a', 'active-bar', 'change');

	// Navbar color
	navbarColor();

	// Vivus
	animationByScroll(Vivus, moveBlock, offset);

	// SHOW MORE PROJECTS
	showProjects();

	// Hover teches
	tech();

	// FORM
	forms();

	// Scrolling
	scrolling('.pageup');

})