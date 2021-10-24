$(".navBtn span").click(function () {
    if ($("#mySidenav").css("width") == "0px") {
        $("#mySidenav").css("width", "250px");
        $(".main").css("marginLeft", "250px");
    } else {
        $("#mySidenav").css("width", "0px");
        $(".main").css("marginLeft", "0px");
    }

});
$(".closebtn").click(function (e) {
    $("#mySidenav").css("width", "0px");
    $(".main").css("marginLeft", "0px");

});

$("#acc h3").click(function (e) {
    let x = $(e.currentTarget).next();
    x.slideToggle(500);
    $("#acc div").not($(x)).slideUp(500);
});



    let countDownDate = new Date(2022, 7, 7).getTime();
    
    setInterval(function(){

        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element 
        $("#days h3").text(`${days} D`);
        $("#hours h3").text(`${hours} h`);
        $("#minutes h3").text(`${minutes} m`);
        $("#seconds h3").text(`${seconds} s`);
    },1000);

    $(function charCounter(){
        let max=100;
        $("textarea").keyup(function(){
            let length=$(this).val().length;
            let countChar=max-length;
            if(countChar<=0){
                $("#char").text("your available character finished");
                $("textarea").addClass("disabled");
            }
            else{
                $("#char").text(countChar);
                
            }
        });
    });

    $('a[href^="#"]').click(function(e){
        let linkId=$(e.target).attr("href");
        console.log(linkId);
        let linkOffest=$(linkId).offset().top;
        $("html,body").animate({scrollTop:linkOffest},5000);
    });