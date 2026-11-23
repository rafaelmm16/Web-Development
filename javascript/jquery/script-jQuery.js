$(function(){
    $('button').click(function() {
        //esconde texto
        //$('h1').hide(); 

        //muda cor
        $('h1').css("color", "green");

        //muda cor de uma id
        $('#unic').css("color", "blue");
    });

    $('#green').click(function() {
        //muda cor fundo
        $('p').css("background-color", "green");
        $('p').fadeOut('slow'); //ou fast
        $('p').delay(2000);
        $('p').fadeIn('slow');
    });

    $('#purple').click(function() {
        //muda cor
        $('p')
        .css("color", "purple")
        .fadeOut().delay(2000)
        .fadeIn(5000)
        .addClass('blue');
    });

    //SlideShow
    $('#l1').click(function(){
        $('#1').show();
        $('#2').hide();
        $('#3').hide();
    });

    $('#l2').click(function(){
        $('#1').hide();
        $('#2').show();
        $('#3').hide();
    });

    $('#l3').click(function(){
        $('#1').hide();
        $('#2').hide();
        $('#3').show();
    });
});