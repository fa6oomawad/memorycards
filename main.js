$(document).ready(function(){
var img1;
var img2;
    $("#btn").click(function(){
        $("#btn").hide();
        $("#main h1").hide();
        $("#box").css("visibility","visible");
        $("#box").animate({width:"700px",
            height: "430px"},800);
    });
       
   //array to store the choosed images  
    var count=[];
    //var to store the points when user get it right
   var point=0;

       $(".smallbox").click(function(){
    //cange the visibility of the choosen image 
        $(this).find('img:first').css("visibility","visible");
    //find its src so its can be stored in array to manipulated it later
        var b= $(this).find('img:first').attr("src");
      count.push(b);
//when there is 2 pictures choosen , let the check begin 
      if (count.length==2){
//if they are equal , thats means they match so user gets 1 point 
        if (count[0]==count[1]){
            point+=1;
            $("#score").text("Score: " + point);
            console.log(point);
            count=[];
        }
        //else no point , wait 2 seconds and hide the images again 
        else{
           console.log("booooo not right");
           // we can now use the array to fetch the used images and hide them again
           var hidewrong= $('img[src="' + count[0] + '"]');
           var hidewrong2= $('img[src="' + count[1] + '"]');
           
           setTimeout(myFunction, 2000);
            function myFunction(){
                hidewrong.css("visibility","hidden");
           hidewrong2.css("visibility","hidden");
            }
          //empty  the array to start again
           count=[];
           
        }
    }
    

        });
        
        
       
  






})