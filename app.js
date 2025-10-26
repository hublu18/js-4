let pskToggler = document.querySelector('.pskToggler');
let passwordInput = document.querySelector('#password');

function passwordHideAndShow() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    pskToggler.innerHTML = `<i class="bi bi-eye"></i>`;
  } else {
    passwordInput.type = "password";
    pskToggler.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  }
}

pskToggler.addEventListener('click', passwordHideAndShow);


let sidebarBtn = document.querySelector('nav button');
let sidebar = document.querySelector('.sidebar');
let closebtn = document.querySelector('.sidebar .close-btn');

function openSidebar() {
  sidebar.classList.add('active');
}

function closefdl() {
  sidebar.classList.remove('active');
}

sidebarBtn.addEventListener('click', openSidebar);
closebtn.addEventListener('click', closefdl);


