//CREAZIONE ARRAY OBJECTS PER LE CARDS IN ORDINE COME MOSTRATO NELLO SCREENSHOT
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "./assets/img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "../assets/img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "../assets/img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "../assets/img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "../assets/img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "../assets/img/female3.png"
    },
    {
        name: "Gerry Scotti",
        role: "TV Host",
        email: "gerryscotti@team.com",
        img: "../assets/img/gerry.png"
    }
  ];

//VARIABILI PER CONNETTERE GLI ID
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const imgInput = document.getElementById('img');
const form = document.getElementById('member-form');
const emailInput = document.getElementById('email');
const button = document.querySelector('.btn');

//FUNZIONE PER AGGIUNTA AUTOMATICA PER LE CARDS
const createMemberCard = (member) => {
    const card = `<div class="col-12 col-md-6 col-lg-4">
                    <div class="member-card d-flex">
                      <div class="member-image">
                          <img src="./${member.img}" alt="">
                      </div>
                      <div class="member-info">
                          <div class="name">${member.name}</div>
                          <div>${member.role}</div>
                          <a href="#" class="email">${member.email}</a>
                      </div>
                    </div>
                  </div>`
  
    return card
}

//FUNZIONE PER MOSTRARE LE CARDS
const renderTeam = (teamMembers) => {
    let cards = '';
  
    for (let i = 0; i < teamMembers.length; i++) {
      cards += createMemberCard(teamMembers[i]);
    }
  
    document.getElementById('cards-box').innerHTML = cards;
  }
  
  renderTeam(teamMembers);
  
  //FUNZIONE PER L'AGGIUNTA DI NUOVI MEMBRI
  const addMember = () => {
    const newMember = {
      name: nameInput.value,
      role: roleInput.value,
      email: emailInput.value,
      img: imgInput.value
    }
    teamMembers.push(newMember);
    renderTeam(teamMembers);
    form.reset();
  }
  
  //BONUS EVENTLISTENER AL FORM
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addMember();
  })