$(function () {
    $(".usa").click(function () {
        // header
        $(".navlinks").children().eq(0).text("Home");
        $(".navlinks").children().eq(1).text("About");
        $(".navlinks").children().eq(2).text("Projects");
        $(".navlinks").children().eq(3).text("Contact");
        $(".lang h5").text("Lang");
        $(".lang").removeClass("change-br");
        $(".lang").removeClass("change-fr");
        $(".n-btn").text("Say Hello");

        // home
        $(".home-text h4").text("Matthieu");
        $(".home-text h1").text("Full Stack Developer");
        $(".home-text p").text("I chose this area because I love studying programming and I'm thirsty to learn more and more.");

        // about
        $(".about-text h2").html("About Me <br> Full Stack Dev");
        $(".about-text p").text("My name is Matthieu Stewart Martinez, I'm 19 years old and I'm French. I'm currently studying at home. My hobby is going to the gym from Monday to Friday. My passion is cars. I completed a FullStack programming course at SENAC RJ in Santa Luzia, and I have experience in projects involving backend and frontend, especially using Spring Boot.");
        $(".btn").text("See my projects");


        // Timeline
        $(".timeline-event").eq(0).find(".date").text("June 2024");
        $(".timeline-event").eq(0).find(".event-title").text("Started FullStack Course");
        $(".timeline-event").eq(0).find(".event-description").text("Began the FullStack programming course at SENAC RJ, learning both frontend and backend development.");

        $(".timeline-event").eq(1).find(".date").text("August 2024");
        $(".timeline-event").eq(1).find(".event-title").text("First Web Project");
        $(".timeline-event").eq(1).find(".event-description").text("Created my first web application using HTML, CSS, JavaScript, and Spring Boot for backend.");

        $(".timeline-event").eq(2).find(".date").text("October 2024");
        $(".timeline-event").eq(2).find(".event-title").text("Graduated");
        $(".timeline-event").eq(2).find(".event-description").text("Completed FullStack programming course at SENAC RJ, acquiring solid knowledge in Java, Spring Boot, and JavaScript frameworks.");


        // projects
        $(".head-text h4").text("Projects");
        $(".exb-text h5").text("InvestPulse: It is a project that displays four indices with charts from the Brazilian stock exchange 'B3' and includes an investment calculator.");

        // contact
        $(".contact h2").text("Let's Talk");
        $(".contact p").text("Contact");
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });

    $(".br").click(function () {
        // header
        $(".navlinks").children().eq(0).text("Início");
        $(".navlinks").children().eq(1).text("Sobre");
        $(".navlinks").children().eq(2).text("Projetos");
        $(".navlinks").children().eq(3).text("Contato");
        $(".lang h5").text("Idioma");
        $(".lang").removeClass("change-usa");
        $(".lang").removeClass("change-fr");
        $(".n-btn").text("Dizer Olá");

        // home
        $(".home-text h4").text("Matthieu");
        $(".home-text h1").text("Desenvolvedor Full Stack");
        $(".home-text p").text("Escolhi esta área porque adoro estudar programação e tenho sede de aprender cada vez mais.");

        // about
        $(".about-text h2").html("Sobre Mim <br> Dev Full Stack");
        $(".about-text p").text("Meu nome é Matthieu Stewart Martinez, tenho 19 anos e sou francês. Atualmente, estou estudando em casa. Meu hobby é ir à academia de segunda a sexta-feira. Minha paixão são carros. Concluí um curso de programação FullStack no SENAC RJ em Santa Luzia, e tenho experiência em projetos envolvendo backend e frontend, especialmente usando Spring Boot.");
        $(".btn").text("Ver meus projetos");

        // Timeline
        $(".timeline-event").eq(0).find(".date").text("Junho 2024");
        $(".timeline-event").eq(0).find(".event-title").text("Início do Curso FullStack");
        $(".timeline-event").eq(0).find(".event-description").text("Iniciei o curso de programação FullStack no SENAC RJ, aprendendo desenvolvimento tanto frontend quanto backend.");

        $(".timeline-event").eq(1).find(".date").text("Agosto 2024");
        $(".timeline-event").eq(1).find(".event-title").text("Primeiro Projeto Web");
        $(".timeline-event").eq(1).find(".event-description").text("Criei minha primeira aplicação web usando HTML, CSS, JavaScript e Spring Boot para o backend.");

        $(".timeline-event").eq(2).find(".date").text("Outubro 2024");
        $(".timeline-event").eq(2).find(".event-title").text("Formado");
        $(".timeline-event").eq(2).find(".event-description").text("Concluí o curso de programação FullStack no SENAC RJ, adquirindo sólidos conhecimentos em Java, Spring Boot e frameworks JavaScript.");

        // projects
        $(".head-text h4").text("Projetos");
        $(".exb-text h5").text("InvestPulse: É um projeto que exibe quatro índices com gráficos da bolsa de valores brasileira 'B3' e inclui uma calculadora de investimentos.");

        // contact
        $(".contact h2").text("Vamos Conversar");
        $(".contact p").text("Contato");
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });

    $(".fr").click(function () {
        // header
        $(".navlinks").children().eq(0).text("Accueil");
        $(".navlinks").children().eq(1).text("À propos");
        $(".navlinks").children().eq(2).text("Projets");
        $(".navlinks").children().eq(3).text("Contact");
        $(".lang h5").text("Langue");
        $(".lang").removeClass("change-br");
        $(".lang").removeClass("change-usa");
        $(".n-btn").text("Dire Bonjour");

        // home
        $(".home-text h4").text("Matthieu");
        $(".home-text h1").text("Développeur Full Stack");
        $(".home-text p").text("J'ai choisi ce domaine parce que j'aime étudier la programmation et j'ai soif d'en apprendre toujours plus.");

        // about
        $(".about-text h2").html("À propos de moi <br> Développeur Full Stack");
        $(".about-text p").text("Je m'appelle Matthieu Stewart Martinez, j'ai 19 ans et je suis français. J'étudie actuellement à la maison. Mon passe-temps est d'aller à la salle de sport du lundi au vendredi. Ma passion est les voitures. J'ai suivi un cours de programmation FullStack au SENAC RJ à Santa Luzia, et j'ai de l'expérience dans des projets impliquant backend et frontend, en particulier en utilisant Spring Boot.");
        $(".btn").text("Voir mes projets");

        // Timeline
        $(".timeline-event").eq(0).find(".date").text("Juin 2024");
        $(".timeline-event").eq(0).find(".event-title").text("Début du Cours FullStack");
        $(".timeline-event").eq(0).find(".event-description").text("J'ai commencé le cours de programmation FullStack au SENAC RJ, apprenant le développement frontend et backend.");

        $(".timeline-event").eq(1).find(".date").text("Août 2024");
        $(".timeline-event").eq(1).find(".event-title").text("Premier Projet Web");
        $(".timeline-event").eq(1).find(".event-description").text("J'ai créé ma première application web en utilisant HTML, CSS, JavaScript et Spring Boot pour le backend.");

        $(".timeline-event").eq(2).find(".date").text("Octobre 2024");
        $(".timeline-event").eq(2).find(".event-title").text("Diplômé");
        $(".timeline-event").eq(2).find(".event-description").text("J'ai terminé le cours de programmation FullStack au SENAC RJ, acquérant de solides connaissances en Java, Spring Boot et frameworks JavaScript.");


        // projects
        $(".head-text h4").text("Projets");
        $(".exb-text h5").text("InvestPulse : C'est un projet qui affiche quatre indices avec des graphiques de la bourse brésilienne 'B3' et comprend une calculatrice d'investissement.");

        // contact
        $(".contact h2").text("Discutons");
        $(".contact p").text("Contact");
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });
});