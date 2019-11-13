/*$(document).ready(function(){
	setTimout(function(){
		document.querySelector('#name').style.width="15%";
	},2000);
});*/
let showMenu=false;
var aboutbtn=document.querySelector('#aboutbtn');
var name=document.querySelector('#name');
var option=document.querySelector('.option');
var menu=document.querySelector('.mid');
var newabout=document.querySelector('#newabout');
// var items=document.querySelector('.mid .menu .item a');

aboutbtn.addEventListener('click',change);
newabout.addEventListener('click',change);
function change(){
	if(this.id==="newabout"){
		option.classList.remove('close');
    	menu.classList.remove('show');
	}
	setTimeout(function(){
		document.querySelector('#name').classList.add('change');
			// 	setTimeout(function(){
			// 	document.querySelector('#name').classList.add('animate');
			// },2000);

	},1000);
}



if($(window).scrollTop()>400){
	setTimeout(function(){
		document.querySelector('#name').classList.add('change');
			// 	setTimeout(function(){
			// 	document.querySelector('#name').classList.add('animate');
			// },2000);

	},2000);
}

// items.forEach(item=>this.addEventListener('click',toggleMenu));
option.addEventListener('click',toggleMenu);

	function toggleMenu() {
  if (!showMenu) {
    option.classList.add('close');
    menu.classList.add('show');
    // menuNav.classList.add('show');
    // menuBranding.classList.add('show');
    // navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    option.classList.remove('close');
    menu.classList.remove('show');
    // menuNav.classList.remove('show');
    // menuBranding.classList.remove('show');
    // navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

