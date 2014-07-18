$(document).ready(function(){
	$('#btn').click(function(){
		
	var x=$('#p').val();	
		
		$('#q').val(x);
		
		$('#p').val('');	
	});
	




	$("#hide").click(function(){
	    $("p").hide();
	 
	  $("#show").click(function(){
	    $("p").show();
	  });
	});


	$("#toggle").click(function(){
	    $("#ptoggle").toggle();
	  });


	  $("#fade").click(function(){
	    $("#div1").fadeIn();
	    $("#div1").fadeOut();
	   
	  });

	  $("#fadetoggle").click(function(){
		    $("#divtoggle").fadeToggle('slow');
		    
		  });


$("#text2").click(function(){
    $("#div2").html("Md");
    $("#div2").text("Haque");
   
  });

$("#text3").click(function(){
    $("#div3").text("Haque");
    $("#div3").html('<input type="text"> <br> <input type="checkbox"> <br> <input type="radio">');

  });

$("#ph").click(function(){
    $("#place").attr('placeholder','firstname');
    
   
  });

$("#ph1").click(function(){
    var x=$("#place1").attr('placeholder');
    alert(x);
    
   
  });

	  $("btn2").click(function(){
	    $("#head1").addClass("red");
	    
	  });
	  
	  $("#two").click(function(){
		  var x=prompt("Pease enter");
		  	
		    $("#two1").val(x);
		   
		  });
	  
	  
			$('#btn4').click(function(){
				
			var x=$('#p4').val();	
				
				$('#q4').val(x);
				
			
				$("#p4").prop('disabled','true');
				
				
			});
	  
			$('#btn5').click(function(){
				
				var x=$('#p5').val();	
					
				var y=$('#q5').val();
				var z=$('#r5').val();
				
				$('#p5').val(z);	
				$('#q5').val(y);	
				$('#r5').val(x);	

				});
			
			/* $("#btn6").click(function(){
				 var x=('#div6').val('x');
				    alert("Source is " + $("x").css("style"));
				  });
			 
			 
			 $("#btn7").click(function(){
				    
				    alert(div7.width);
				    alert(div7.height);
				    
				  });
				
			 $("#check").click(function(){
				  
				 $("#text1").prop('checked',true);
				 $("#text2").prop('checked',true);

				  });
			 $("#uncheck").click(function(){
				  
				 $("#text2").prop('checked',false);
				 $("#text4").prop('checked',false);

				  });
			 
			 $("#slide1").click(function(){
				    $("#slideup").slideUp("2000");
				  
		
});
			 $("#slide2").click(function(){
				    $("#slideDown").slideDown("2000");
				  
		
});

			 $("#flip").click(function(){
				    $("#panel").slideToggle("slow");
				  
		
});
		*/	 
			 $("#btnlink").click(function(){
				    $("#google").attr('href','http://www.google.com');
				  
});
		/*
		$("#btnchange").click(function(){
			$("#oldchange").removeClass('class1');
			$("#oldchange").addClass('newchange');
			
			$("#btnchange1").click(function(){
			$("#oldchange").addClass('newchange');
			});
		});	 
		
		$("#btnremove").click(function(){
			var x=$("#span").val;
			$("#span1").text('span');

			$("#myremove").toggleClass('new');
			
		});
		
*/
		 $("#focus").focusin(function(){
		$("#spanfocus").css("display","inline").fadeOut(2000);	    
			  
});
	
		
		 $("#blur").blur(function(){
			 alert("Try again");
			 
		 });
		 
		 $(".change").change(function(){
		
			 
			 $(".change").css('background-color','red');
			 
		
			 
		 });
		 
		 $("#myclick").dblclick(function(){
			
			 alert("try it");
		 });
		 
		 $("#myhover").hover(function(){
			$("#myhover").css('color','red');
		 },function(){
			 $("#myhover").css('color','yellow');
		 });
		 
		 
		 $("#mymouse").mouseenter(function(){
				$("#mymouse").css('color','red');
			 
			 });
		 $("#mymouse").mouseleave(function(){
				
			 
				 $("#mymouse").css('color','yellow');
			 });
		 
		 
		 $("#mymousedown").mousedown(function(){
				$("#mymousedown").before('hjja<br>hjeh');
				$("#mymousedown").after('hjja<br>hjeh');
				
				$("#mymousedown").slideToggle('slow');
			 
			 });
		 
		 $("#mykey").keypress(function(){
			$("#key").text(i+=0);
			 
		 });
		 
		 $("#submit").click(function(){
			var x=$("#mylength").val();
			if(x.length===5);
			 
		 });
		 
		
		 
		 
		 
		/* $('.imgcar img:gt(0)').hide();

		 $('.next').click(function() {
		     $('.imgcar img:first-child').fadeout().next().fadeIn().end().appendTo('.imgcar');
		 });

		 $('.prev').click(function() {
		     $('.imgcar img:first-child').fadeOut();
		     $('.imgcar img:last-child').prependTo('.imgcar').fadeOut();
		     $('.imgcar img:first-child').fadeIn();
		 }); 
		 */
		 
		 $("#fsubmit").click(function(){
				var a=$("#mytext1").val();
				var b=$("#mytext2").val();

				if(a=="",[0-9]){
				$("#mytext1").css('border','1px solid red');
				}
				
				alert('Please enter name');
				
				if(b==""){
				$("#mytext2").css('border','1px solid red');
				}
				
       var c=$('#mytext3').prop('checked');
       var d=$('#mytext4').prop('checked');
				if (c==false && d==false)
					alert('please select the gender');
				
				var e=$('#mytext5').prop('checked');
				 if (e==false)
					 alert('please select checkbox');
		
				 var f=$('#state').prop('selectedIndex');
				 if (f==false)
					 alert('please select state');
				 else
					 {
					 alert('thank you for submitting');
					 }
			 });
		 
var f=$("#fer");
		 $("#fer").keyup(function(){
			 
			 var c= Math.round((f.val() - 32) * 5/9);
			 $("#cel").val(c);
			 if (f=="");
		
		 });
		 
		 
			 
		alert("welcome to my blog");
		
		
		$("#btnfour").click(function(){
		    $("#hideshow").toggle();
		 
		  });
		
		var x=[images1,images2,images3,images4,images5,images6];
		
		 $("#next").click(function(){
			 $("#next").text(x);
			 
		 });
		 $("#pre").click(function(){
			
			 
		 });
		 
		 
		 
		 $("#butt2").mouseout(function(){
			 $("ul").hide();
				 
		 });
		 $("#butt2").mouseover(function(){
			 $("ul").show();
				 
		 });
		 
		 $("#btn6").click(function(){
			    $("#myenam").html('<input type="radio">');
			    
			   
			  });
		 

});

		
		



























