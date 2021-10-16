if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("Get on ye damn personal computer, lady!")
}


var Messenger = function(el){
    'use strict';
    var m = this;
    
    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        '1. Wow, look at you go.',
        '2. It is incREDIBLY easy to cheat if you try to, code-wise.',
        '3. L is asking of you to not do that, this never be finished > finished because of L\'s shitty code.',
        '4. Yes, L is asking you to <i>not</i> code.',
        '5. Also, no entering any URL but yours.',
        '7. Anything else is fair game.',
        '8. L says: "Have fun!".'
      ];
      
      setTimeout(m.animateIn, 500);
    };
    
    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } 
      
      return random_text;
    };
    
    m.animateIn = function(){
      if(m.current_length < m.messages[m.message].length){
        m.current_length = m.current_length + 2;
        if(m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }
        
        var message = m.generateRandomString(m.current_length);
        $(el).html(message);
        
        setTimeout(m.animateIn, 20);
      } else { 
        setTimeout(m.animateFadeBuffer, 20);
      }
    };
    
    m.animateFadeBuffer = function(){
      if(m.fadeBuffer === false){
        m.fadeBuffer = [];
        for(var i = 0; i < m.messages[m.message].length; i++){
          m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
        }
      }
      
      var do_cycles = false;
      var message = ''; 
      
      for(var i = 0; i < m.fadeBuffer.length; i++){
        var fader = m.fadeBuffer[i];
        if(fader.c > 0){
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      $(el).html(message);
      
      if(do_cycles === true){
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };
    
    m.cycleText = function(){
      m.message = m.message + 1;
      if(m.message >= m.messages.length){
        m.message = 0;
      }
      
      m.current_length = 0;
      m.fadeBuffer = false;
      $(el).html('');
      
      setTimeout(m.animateIn, 100);
    };
    
    m.init();
  }
  
  console.clear();
  var messenger = new Messenger($('#messenger'));

function supaingSub(){
    try{
   sour = $("form input[name='sour']:checked").val() == "brutal"
   die = $("form input[name='die']:checked").val() == "david"
   hit = 5<=parseInt($(".missing").val())<=8
   trans = parseInt($(".trans").val()) == 5
   missing = $(".hit").val() == "tone"
   }catch(error){
       elseerror()
   }
   if(sour && die && hit && trans && missing){
       success("sup")
   }else{
      fail("sup")
   }
}

function sinyanSub(){
    try{
    sour = $("form input[name='sour']:checked").val() == "deja"
    die = $("form input[name='vote']:checked").val() == "sa"
    cyan = parseInt($(".cyan").val()) == 40
    long = $(".long").val() == "94"
    missing = $(".gist").val() == "4"
    }catch(error){
        elseerror
    }
    if(sour && die && cyan && long && missing){
        success("sin")
    }else{
        fail("sin")
    }
}

function noviaSub(){
    try{
    sour = $("form input[name='rad']:checked").val() == "righte"
    die = $("form input[name='radi']:checked").val() == "lefth"
    cyclist = 12 <= parseInt($(".cyclist").val()) <=13
    long = $(".songs").val() == "Genghis Khan"
    missing = $(".missing").val() == "6"
    }catch(error){
        elseerror()
    }
    if(sour && die && cyclist && long && missing){
        success("nov")
    }else{
        fail("nov")
    }
}

function elseerror(){
    alert("Something fucked up, are you sure you answered everything validly? Anyway, click ok and it will reload.")
    window.location = window.location.href + "?nocache=" + new Date().getTime()
}

function success(person){
    biggif()

    $("input").prop("disabled", true)
    $("option").prop("disabled", true)
    $("select").prop("disabled", true)
    $("button[type=submit]").prop("disabled", true)




    src = "media/nice.gif"
    if(person == "sup"){
        src="media/eight.gif"
    }

    $( `
    <div class="content">
    <div class="random mb-5">
        <h1 class="text-center" style="font-weight: 900;">
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span></h1>
    </div>
    <div class="col-12 d-flex my-3 justify-content-center">
        <img class="col-8 mx-auto" src="`+src+`">
    </div>
</div><br><br>` ).insertAfter( "main" );
shufflin(["Y","O","U","ㅤ","G", "O", "T", "ㅤ", "I", "T", "!"])


setInterval(function(){window.scrollTo({ top:document.body.scrollHeight, behavior: 'smooth', })}, 300);
}


function fail(person){
    $("input").prop("disabled", true)
    $("option").prop("disabled", true)
    $("select").prop("disabled", true)
    $("button[type=submit]").prop("disabled", true)

    src = "media/bad.gif"

    $( `
    <div class="content">
    <div class="random">
        <h1 class="text-center" style="font-weight: 900;">
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span>
        <span class="nbr ltr">0</span></h1>
    </div>
    <div class="col-12 d-flex my-3 justify-content-center">
        <img class="col-8 mx-auto" src="`+src+`">
    </div>
</div>
<div class="col-12 d-flex justify-content-center mt-3 mb-5">
<button class ="mt-5" onclick='window.location = window.location.href + "?nocache=" + new Date().getTime()'>Try Again</button>
</div>` ).insertAfter( "main" );
shufflin(["W","R","O","N","G", "!"])


setInterval(function(){window.scrollTo({ top:document.body.scrollHeight, behavior: 'smooth', })}, 200);
}

function shufflin(list) {
	const $random = $('.nbr');
	const $timer = 30;
	let $it;
	let $data = 0;
	let index;
	let change;
	let letters = list;
	
	$random.each(function() {
		change = Math.round(Math.random() * 100);
		$(this).attr('data-change', change);
	})
	
	function random() {
		return Math.round(Math.random() * 9);
	}
	
	function select() {
		return Math.round(Math.random() * $random.length + 1);
	}
	
	function value() {
		$('.nbr:nth-child(' + select() + ')').html('' + random() + '');
		$('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
		$data++;
		
		$random.each(function() {
			if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
				index = $('.ltr').index(this);
				$(this).html(letters[index]);
				$(this).removeClass('nbr');
			}
		})
	}
	
	$it = setInterval(value, $timer);
    
}



function biggif(){
    items =[
        "https://c.tenor.com/D00aZBTtrzkAAAAC/halloween-scary.gif",
        "https://i.pinimg.com/originals/9d/41/b2/9d41b2a60517d02eb9dda7ed9097c587.gif",
        "https://i.pinimg.com/originals/c0/7f/97/c07f97f3234f1820d0388f1a62377a9a.gif",
        "https://www.icegif.com/wp-content/uploads/fnaf-jumpscare-icegif-5.gif",
        "https://piximus.net/media2/51854/scariest-gifs-4.gif"
    ]
    var src = items[Math.floor(Math.random()*items.length)];
  $(`<div id="abc" style="height: 100vh; width: 100vw; background-image: url(`+src+`);background-repeat: no-repeat; left: 0;top: 0;z-index: 1;;background-size: 100% 100%; background-position: center; position: fixed;"></div>`).insertAfter("main")
  setInterval(function(){ $("#abc").remove() }, 2000);
}