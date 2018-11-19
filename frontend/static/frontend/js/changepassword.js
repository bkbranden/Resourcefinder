var sending = new XMLHttpRequest();



$(document).ready(function(){
    var passOne = $("#passOne").val();
    var passTwo = $("#passTwo").val();
    
    $("#footerText").val("Fields don't match");
    
    var checkAndChange = function()
    {
      if(passOne.length < 1){
        if($("#footer").hasClass("correct")){
          $("#footer").removeClass("correct").addClass("incorrect");
          $("#footerText").val("They don't match");
        }else{
          $("#footerText").val("They don't match");
        }
      }
      else if($("#footer").hasClass("incorrect"))
      {
        if(passOne == passTwo){
          $("#footer").removeClass("incorrect").addClass("correct");
          $("#footerText").val("Continue");
          $('#post-form').on('submit', function(event){
            event.preventDefault();
            create_post();
        });
          
        }
      }
      else
      {
        if(passOne != passTwo){
          $("#footer").removeClass("correct").addClass("incorrect");
          $("#footerText").val("They don't match");
        } 
      }   
    }
    
    
    
    $("input").keyup(function(){
      var newPassOne = $("#passOne").val();
      var newPassTwo = $("#passTwo").val();
      
      passOne = newPassOne;
      passTwo = newPassTwo;
      
      checkAndChange();
    });
  });
  var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

  function create_post(){
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });
    $.ajax({    
        url : "changepassword/change", // the endpoint
        type : "POST", // http method
        data : { the_post : $('#passOne').val(), user : $('#username').val(), }, // data sent with the post request

        // handle a successful response
        success : function(data, textStatus) {
            window.location.href = '/'
            
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
  }