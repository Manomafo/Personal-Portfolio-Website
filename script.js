$(document).ready(function() {
    // Clique em qualquer item de navegação
    $(".nav li").click(function() {
        // Remover a classe 'active' de todas as abas
        $(".nav li").removeClass("active");
        // Adicionar a classe 'active' à aba clicada
        $(this).addClass("active");

        // Esconder todas as seções
        $(".section").hide().removeClass("show");

        // Exibir a seção correspondente com base na aba clicada
        if ($(this).hasClass("st1")) {
            $("#profile").prop("checked", true);
            $("#profile-section").show().addClass("show");
        } else if ($(this).hasClass("st2")) {
            $("#settings").prop("checked", true);
            $("#account-section").show().addClass("show");
        } else if ($(this).hasClass("st3")) {
            $("#posts").prop("checked", true);
            $("#post-section").show().addClass("show");
        } else if ($(this).hasClass("st4")) {
            $("#books").prop("checked", true);
            $("#advanced-section").show().addClass("show");
        }
    });
});
