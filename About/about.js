$(window).scroll(function() {
       $(".fixed").css("bottom", $(window).height()-$(window).scrollTop()); 
    });

function open_win(val)
			{
			window.open("showpic"+val+".html","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
			}