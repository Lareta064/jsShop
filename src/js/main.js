const btnAuth = document.querySelector('.button-auth');
const btnOut = document.querySelector('.button-out');
const userLogName = document.querySelector('.user-name');
const modalAuth = document.querySelector('.modal-auth');
const closeModalAuth = document.querySelector('.close-auth');
const loginForm = document.getElementById('logInForm');
const userLogin = document.getElementById('login');
const userPass = document.getElementById('password');

//ф-ция авторизации
const logIn = (user)=>{
	btnAuth.style.display = "none";
	btnOut.style.display = "flex";
	userLogName.style.display = "block";
	modalAuth.style.display = 'none';
	userLogName.innerText = user['login'];
}
// ф-ция выхода из авторизации
const logOut = ()=>{
	btnAuth.style.display = "flex";
	btnOut.style.display = 'none';
	userLogName.style.display = 'none';
	userLogName.innerText = '';
	localStorage.removeItem('user');
	
}
// залогиниться
btnAuth.addEventListener('click', ()=>{
	modalAuth.style.display = 'flex';
});

//разлогиниться
btnOut.addEventListener('click', ()=>{
	logOut();
});

// клик по крестику в модалке
closeModalAuth.addEventListener('click', ()=>{
	modalAuth.style.display = 'none';

});
// отправка формы логинизации
loginForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	if(userLogin.value !=='' && userPass.value != ''){
		let user = {
			login: userLogin.value,
			pass: userPass.value,
		}
		logIn(user);
		userLogin.value = '';
		userPass.value = '';
		localStorage.setItem('user', JSON.stringify(user));
	}
	else{
		alert('Все поля обязательны для заполнения')
	}
});
//оставаться залогиненным при перезагрузке страницы
if(localStorage.getItem('user')){
	logIn(JSON.parse(localStorage.getItem('user')));
}