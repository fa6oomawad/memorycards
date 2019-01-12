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
       
    
    var count=[];
    var choosed=[];
   var point=0;
       $(".smallbox").click(function(){
        console.log(this);
        
        $(this).find('img:first').css("visibility","visible");
        var b= $(this).find('img:first').attr("src");
      count.push(b);
      console.log(count)

      if (count.length==2){
        if (count[0]==count[1]){
            choosed.push(count[0]);
            point+=1;
            $("#score").text("Score: " + point);

            console.log(point);
            count=[];
        }
        else{
           console.log("booooo not right");

           count=[];
        }
    }
    

        });
        
       
  






})