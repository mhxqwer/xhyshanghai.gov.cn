$(window).load(function() { 		 	 
   
   
	$(".ImgCrop").each(function(){
	 $img = $(this).find("img");	
	  
		  $w = $img.width();
		  $h = $img.height();
		   
		  $bw= $(this).width();
		  $bh= $(this).height();
		 
		  b1 = $w/$h;
		  b2 = $bw/$bh;
			 
		  if (b1 > b2) {

			  $img.css("height", "100%")
			  $wed = $bh * b1;
			  $img.css("width", $wed + "px");
			  fz = ($bw - $wed) / 2;
			  $img.css("margin-left", fz + "px");

		  } else {

			  $img.css("width", "100%")
			  $hed = $bw / b1;
			  $img.css("height", $hed + "px");
			  fs = ($bh - $hed) / 2;
			  $img.css("margin-top", fs + "px");

		  }

  });

});