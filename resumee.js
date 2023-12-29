let skills = document.querySelector(".skills");
let conn = document.querySelector(".conn");
let Service = document.querySelector(".service");

function shade() {
    skills.style.width = "80%";
    skills.style.transition = "2s";
}

var paragraph = document.querySelector(".paragraph");

paragraph.style.color = "red";
paragraph.style.fontSize = "1.5em";
i = 0;
speed = 50;


let ask = document.querySelector('.ask');


contact = " Home address: \n \n 13 Baba-Ode,\n off Coca-cola Road,\n Ilorin,\n Kwara State, Nigeria.\n \n Contact Address:\n \n email: olukannistephen@gmail.com, femistep@gmail.com, olufemisteph@gmail.com.\n Phone number: +2348103494496, +2347049225383. ";
prayer = " Engr. Olukanni has a B.Tech in Civil Engineering, he has the following Tech skills.\n \n • HTML\n • Creative design with CSS\n • Working Knowledge of Javascript\n • Basic Knowledge of Python programming.\n \n He has the following soft skills:\n \n • Microsoft word \n • Microsoft excel \n • Microsoft powerpoint \n \n He is an experienced civil engineer with vast experience on site and design.\n He has the following civil engineering skills \n \n • Drafting with AutoCAD \n • Structural design with Protastructure\n • Structural design with StaadPro\n • The use of AutoDesk Civil3D ";
serv = " Services\n \n I provide consultancy services in structural engineering and web development, from:\n \n • Achitectural design to,\n • Structuaral design.\n • I also build and construct residential and commercial buildings.\n • I  offer tech services such as Web development both front end and backend.";


function tola() {
    skills.style.width = "80%";
    skills.style.transition = "2s";
}


let mar = [conn, ask, Service];
let mon = [contact, prayer, serv];
for (let i = 0, j = 0; i < mar.length, j < mon.length; i++, j++) {
    mar[i].addEventListener('click', (e)=> {document.querySelector(".paragraph").textContent = mon[j]})
    
   
}


