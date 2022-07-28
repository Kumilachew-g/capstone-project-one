const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const container = document.getElementById('container');
const trainerContainer = document.getElementById('trainer-container');
const start = container.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= start) {
    container.style.top = 0;
  } else {
    container.style.top = '5%';
  }
};

function clickMenu() {
  container.classList.toggle('overlay');
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const compTrainers = [
  {
    traninerName: 'Kumilachew Geteie',
    trainerPhoto: 'images/kumie.png',
    position: 'System Trainer',
    department: 'System Training Deparment',
  },
  {
    traninerName: 'Abebe Kebede',
    trainerPhoto: 'images/abebe.png',
    position: 'System Training Team Leader',
    department: 'System Training Deparment',
  },
  {
    traninerName: 'Yohannes Melaku',
    trainerPhoto: 'images/yohannes.png',
    position: 'System Trainer',
    department: 'System Training Deparment',
  },
  {
    traninerName: 'Helen Mekuriyaw',
    trainerPhoto: 'images/helen.png',
    position: 'System Trainer',
    department: 'System Training Deparment',
  },
  {
    traninerName: 'Hewan Belete',
    trainerPhoto: 'images/hewan.png',
    position: 'System Trainer',
    department: 'System Training Deparment',
  },
  {
    traninerName: 'Aweke demise',
    trainerPhoto: 'images/aweke.png',
    position: 'System Trainer',
    department: 'System Training Deparment',
  },
];

const createTrainers = () => {
  let trainers = '';
  compTrainers.forEach((trainer) => {
    trainers += `<div class= "trainer">
    <img src ="images/dama.jpg" alt ="" class ="dama-img">
    <img src = "${trainer.trainerPhoto}" alt="${trainer.traninerName} profile" class ="photo">
    <div class ="trainer-demo">
       <h3 class="trainer-name"> ${trainer.traninerName}</h3>
       <p class ="position"> ${trainer.position}</p>
       <p class="department"> ${trainer.department}</p>
      </div>
    </div>`;
  });
  trainerContainer.innerHTML = trainers;
};

hamburger.addEventListener('click', clickMenu);
createTrainers();
