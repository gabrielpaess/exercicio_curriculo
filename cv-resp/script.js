const dados = {
    sobreJs: {
      nome: "Gabriel",
      endereco: "AVENIDA DOS MUNICIPIOS, 6968 - CAMPO BOM - RS.",
      email: "GPAESPINHEIRO@ICLOUD.COM",
      telefone: "51997295742",
      descricao:
        "Uma pessoa criativa, que quer aprender a todo o momento e que não desiste dos seus objetivos.",
      redesSociais: [
        {
          nome: "Facebook",
          url: "https://www.facebook.com/gabriel.paespinheiro",
          icone: '<i class="fab fa-facebook"></i>',
        },
        {
          nome: "Instagram",
          url: "https://www.instagram.com/gabrielpaess/",
          icone: '<i class="fab fa-instagram"></i>',
        },
        {
          nome: "Github",
          url: "https://github.com/gabrielpaess",
          icone: '<i class="fab fa-github"></i>',
        },
      ],
    },
  
    conhecimentosJs: ["HTML;", "CSS;", "JavaScript;", "C++;", "Python;", "PostgreSQL."],
  
    objetivosJs: {
      pessoais:
        "No momento estou cursando Análise e Desenvolvimento de sistemas e fazendo o curso Starter da Growdev. Busco conhecimento na área para conquistar dois objetivos. Ser um desenvolvedor Web Full Stack e conseguir uma vaga neste amplo e promissor mercado de trabalho.",
      profissionais:
        "Busco conhecimento na área para conquistar dois objetivos. Ser um desenvolvedor Web Full Stack e conseguir uma vaga neste amplo e promissor mercado de trabalho. Estou ciente que preciso me dedicar ao máximo nas aulas e também nas atividades propostas.",
    },
  };
  
  function mostrarTexto(event) {
    event.preventDefault();
    console.log(event);
    const texto = event.target.id;
    switch (texto) {
      case "sobre":
        mostrarSobre();
        break;
      case "conhecimentos":
        mostrarConhecimentos();
        break;
      case "objetivos":
        mostrarObjetivos();
        break;
    }
  }
  
  function mostrarSobre() {
    const alvo = document.querySelector(".conteudo");
    alvo.innerHTML = "";
    alvo.innerHTML = '<h1> GABRIEL<span class="nome"> PAES PINHEIRO</span></h1>';
    alvo.innerHTML += `<h4>${dados.sobreJs.endereco} <span class="email">${dados.sobreJs.email}</span> <br> TELEFONE: ${dados.sobreJs.telefone}</h4>`;
    alvo.innerHTML += `<p>${dados.sobreJs.descricao}</p>`;
    for (let i = 0; i < dados.sobreJs.redesSociais.length; i++) {
      alvo.innerHTML += `<a class="botoes" target="_blank" href="${dados.sobreJs.redesSociais[i].url}">
    ${dados.sobreJs.redesSociais[i].icone} </a>`;
    }
  }
  
  mostrarSobre()
  
  function mostrarConhecimentos() {
    const alvo = document.querySelector(".conteudo");
    alvo.innerHTML = "Possuo um conhecimento muito superficial ainda pois sei que tenho um caminho a percorrer. Já conheço as técnologias que o mercado precisa. Mas ainda preciso praticar e desenvolver meus conhecimentos nas áreas tanto de front-end quanto back-end. Segue algumas das técnologias que tenho conhecimento:";
    alvo.innerHTML += "<ul>";
    for( let i = 0; i < dados.conhecimentosJs.length; i++) {
      alvo.innerHTML += `<li>${dados.conhecimentosJs[i]}</li>`;
    }
    alvo.innerHTML += `</ul>`;
  }
  
  function mostrarObjetivos() {
    const alvo = document.querySelector(".conteudo");
    alvo.innerHTML = "";
    alvo.innerHTML += `<p>${dados.objetivosJs.pessoais}</p> <p>${dados.objetivosJs.profissionais}</p>`;
  }