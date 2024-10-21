$(function () {
    $(".usa").click(function () {
        // cabeçalho
        $(".navlinks").children().eq(0).text("Home");
        $(".navlinks").children().eq(1).text("About");
        $(".navlinks").children().eq(2).text("Projects");
        $(".navlinks").children().eq(3).text("Contact");

        // seção inicial
        $(".home-text h1").text("Full Stack Developer");
        $(".home-text p").text("Escolhi esta área porque amo estudar programação e estou ansioso para aprender cada vez mais.");
        $(".arrow-box a").attr("href", "#about");

        // seção sobre
        $(".about-text h2").html("Sobre Mim <br> Dev Full Stack");
        $(".about-text p").text("Meu nome é Matthieu Stewart Martinez, tenho 19 anos e sou francês. Atualmente, estou estudando em casa. Meu hobby é ir à academia de segunda a sexta-feira. Minha paixão são carros. Completei um curso de programação FullStack no SENAC RJ em Santa Luzia e tenho experiência em projetos que envolvem backend e frontend, especialmente usando Spring Boot.");
        $(".about-text a").text("Veja meus projetos");

        // seção linha do tempo
        $(".container .st1").eq(0).find("h2").text("School");
        $(".content #profile-section").eq(0).find("h1").text("School");
        $(".content #profile-section").eq(0).find("p").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt praesentium temporibus officiis aperiam similique voluptatum, officia quidem fugit. Corrupti, aspernatur architecto. Amet ut veniam accusantium, quisquam sit corrupti maxime voluptatem.");
        $(".container .st2").eq(0).find("h2").text("Course");
        $(".content #account-section").eq(0).find("h1").text("JavaScript Programming Course");
        $(".content #account-section").eq(0).find("p").text("I started the course knowing literally nothing, and in it, I learned the basics of HTML, CSS, and JS.");
        $(".container .st3").eq(0).find("h2").text("Hastag");
        $(".content #post-section").eq(0).find("h1").text("Imprecionador Hastag");
        $(".content #post-section").eq(0).find("p").text("In this course, I learned the basics of HTML, CSS, NodeJs, ExpressJs, and ReactJs with Vite.");
        $(".container .st4").eq(0).find("h2").text("Senac");
        $(".content #advanced-section").eq(0).find("h1").text("SENAC FullStack");
        $(".content #advanced-section").eq(0).find("p").text("Course description: Develop solutions using algorithms, logic, and programming languages. Soft skills for the job market, build web applications, front-end structuring, back-end with Java, hybrid mobile apps, and an integrative project.");
        $(".container .st5").eq(0).find("h2").text("Current");
        $(".content #current-section").eq(0).find("h1").text("Current");
        $(".content #current-section").eq(0).find("p").text("I'm currently studying at home office a personal web curriculum project.");
        
        // seção projetos
        $(".head-left h4").text("Projetos");
        $(".exb-text h5").text("InvestPulse: É um projeto que exibe quatro índices com gráficos da bolsa de valores brasileira 'B3' e inclui um calculador de investimentos.");
        
        // seção contato
        $(".contact-content h2").text("Vamos Conversar");
        $(".contact-content p").text("Contato");
        
        // rodapé
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });
    
    $(".br").click(function () {
        // cabeçalho
        $(".navlinks").children().eq(0).text("Início");
        $(".navlinks").children().eq(1).text("Sobre");
        $(".navlinks").children().eq(2).text("Projetos");
        $(".navlinks").children().eq(3).text("Contato");
        
        // seção inicial
        $(".home-text h1").text("Desenvolvedor Full Stack");
        $(".home-text p").text("Escolhi esta área porque amo estudar programação e tenho sede de aprender cada vez mais.");
        $(".arrow-box a").attr("href", "#about");
        
        // seção sobre
        $(".about-text h2").html("Sobre Mim <br> Dev Full Stack");
        $(".about-text p").text("Meu nome é Matthieu Stewart Martinez, tenho 19 anos e sou francês. Atualmente, estou estudando em casa. Meu hobby é ir à academia de segunda a sexta-feira. Minha paixão são carros. Completei um curso de programação FullStack no SENAC RJ em Santa Luzia e tenho experiência em projetos que envolvem backend e frontend, especialmente usando Spring Boot.");
        $(".about-text a").text("Veja meus projetos");
        
        // seção linha do tempo
        $(".container .st1").eq(0).find("h2").text("Escola");
        $(".content #profile-section").eq(0).find("h1").text("Escola");
        $(".content #profile-section").eq(0).find("p").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt praesentium temporibus officiis aperiam similique voluptatum, officia quidem fugit. Corrupti, aspernatur architecto. Amet ut veniam accusantium, quisquam sit corrupti maxime voluptatem.");
        $(".container .st2").eq(0).find("h2").text("Curso");
        $(".content #account-section").eq(0).find("h1").text("Curso de programação JavaScript");
        $(".content #account-section").eq(0).find("p").text("Comecei o curso sem saber literalmente nada e nele aprendi o básico de HTML, CSS e JS.");
        $(".container .st3").eq(0).find("h2").text("Hastag");
        $(".content #post-section").eq(0).find("h1").text("Hastag imprecionador");
        $(".content #post-section").eq(0).find("p").text("Neste curso, aprendi o básico de HTML, CSS, NodeJs, ExpressJs e ReactJs com Vite.");
        $(".container .st4").eq(0).find("h2").text("Senac");
        $(".content #advanced-section").eq(0).find("h1").text("SENAC FullStack");
        $(".content #advanced-section").eq(0).find("p").text("Descrição do curso: Desenvolva soluções usando algoritmos, lógica e linguagens de programação. Soft skills para o mercado de trabalho, construção de aplicações web, estruturação de front-end, back-end com Java, aplicativos mobile híbridos e projeto integrativo.");
        $(".container .st5").eq(0).find("h2").text("Atual");
        $(".content #current-section").eq(0).find("h1").text("Atual");
        $(".content #current-section").eq(0).find("p").text("Atualmente estou estudando em home office fazendo um projeto de currículo pessoal na web.");
        
        // seção projetos
        $(".head-left h4").text("Projetos");
        $(".exb-text h5").text("InvestPulse: É um projeto que exibe quatro índices com gráficos da bolsa de valores brasileira 'B3' e inclui um calculador de investimentos.");

        // seção contato
        $(".contact-content h2").text("Vamos Conversar");
        $(".contact-content p").text("Contato");

        // rodapé
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });

    $(".fr").click(function () {
        // cabeçalho
        $(".navlinks").children().eq(0).text("Accueil");
        $(".navlinks").children().eq(1).text("À Propos");
        $(".navlinks").children().eq(2).text("Projets");
        $(".navlinks").children().eq(3).text("Contact");

        // seção inicial
        $(".home-text h1").text("Développeur Full Stack");
        $(".home-text p").text("J'ai choisi ce domaine parce que j'adore étudier la programmation et j'ai hâte d'apprendre encore plus.");
        $(".arrow-box a").attr("href", "#about");

        // seção sobre
        $(".about-text h2").html("À Propos de Moi <br> Dev Full Stack");
        $(".about-text p").text("Je m'appelle Matthieu Stewart Martinez, j'ai 19 ans et je suis français. Actuellement, j'étudie à domicile. Mon passe-temps est d'aller à la salle de sport du lundi au vendredi. Ma passion est les voitures. J'ai terminé un cours de programmation FullStack au SENAC RJ à Santa Luzia et j'ai de l'expérience dans des projets impliquant le backend et le frontend, en particulier avec Spring Boot.");
        $(".about-text a").text("Voir mes projets");

        // seção linha do tempo
        $(".container .st1").eq(0).find("h2").text("École");
        $(".content #profile-section").eq(0).find("h1").text("École");
        $(".content #profile-section").eq(0).find("p").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt praesentium temporibus officiis aperiam similique voluptatum, officia quidem fugit. Corrupti, aspernatur architecto. Amet ut veniam accusantium, quisquam sit corrupti maxime voluptatem.");
        $(".container .st2").eq(0).find("h2").text("Cours");
        $(".content #account-section").eq(0).find("h1").text("Cours de programmation JavaScript");
        $(".content #account-section").eq(0).find("p").text("J'ai commencé le cours en ne sachant littéralement rien et j'y ai appris les bases du HTML, du CSS et du JS.");
        $(".container .st3").eq(0).find("h2").text("Hastag");
        $(".content #post-section").eq(0).find("h1").text("Impréciateur Hastag");
        $(".content #post-section").eq(0).find("p").text("Dans ce cours, j'ai appris les bases du HTML, CSS, NodeJs, ExpressJs et ReactJs avec Vite.");
        $(".container .st4").eq(0).find("h2").text("Senac");
        $(".content #advanced-section").eq(0).find("h1").text("SENAC FullStack");
        $(".content #advanced-section").eq(0).find("p").text("Description du cours: Développer des solutions à l'aide d'algorithmes, de logique et de langages de programmation. Compétences générales pour le marché du travail, création d'applications Web, structuration front-end, back-end avec Java, applications mobiles hybrides et projet intégrateur.");
        $(".container .st5").eq(0).find("h2").text("Actuel");
        $(".content #current-section").eq(0).find("h1").text("Actuel");
        $(".content #current-section").eq(0).find("p").text("J'étudie actuellement en home office en réalisant un projet de programme personnel sur le Web.");

        // seção projetos
        $(".head-left h4").text("Projets");
        $(".exb-text h5").text("InvestPulse : C'est un projet qui affiche quatre indices avec des graphiques de la bourse brésilienne 'B3' et comprend un calculateur d'investissements.");

        // seção contato
        $(".contact-content h2").text("Discutons");
        $(".contact-content p").text("Contact");

        // rodapé
        $(".s-btnn").eq(0).text("Email");
        $(".s-btnn").eq(1).text("GitHub");
        $(".s-btnn").eq(2).text("Whatsapp");
        $(".s-btnn").eq(3).text("Linkedin");
    });
});
