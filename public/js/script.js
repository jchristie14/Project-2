"use strict";
(function(){

console.log("Linked!")



// $('#nightWatch').on('click',function(e){
//   e.preventDefault();

  $('body').on("click", "#submit", function(e){
    e.preventDefault();
    $('a').remove();
  var color = $('#search-type').val()
  var user = $('ul').attr('data-id');
  console.log(user)

    $.ajax({
      'url':'http://localhost:3000/api/'+color,
      'method':'GET',
      'success':function(data){
        console.log(data)
        var results = data.artObjects;
        results.forEach(function(el){
          if (el.webImage === null){}
          else {
          var $picDiv = $('<a href=selection/'+user+'/'+el.objectNumber+'><li></li></a>');
          var picture = (el.webImage.url);
          var $img = $('<img>')
          $img.attr("src", picture);
          $picDiv.attr("id", el.objectNumber)
          $picDiv.append($img);
          $('ul').append($picDiv)
        }
      })
      }
});
});




  $('#addgall').on('click', function(e){
    e.preventDefault()
    var user_id=$('h1').attr('data-id');
    user_id=user_id.trim();
    user_id=Number(user_id)
    var picid =$('h1').attr('data-titl');
    picid=picid.trim();
    var picurl = $('img').attr('src');
    picurl=picurl.trim();
    var hex1 = $('#1').attr('data-id');
    hex1=hex1.trim();
    var hex2 = $('#2').attr('data-id');
    var hex3 = $('#3').attr('data-id');
    var hex4 = $('#4').attr('data-id');
    var hex5 = $('#5').attr('data-id');
    var hex6 = $('#6').attr('data-id');
    var hex7 = $('#7').attr('data-id');
    var hex8 = $('#8').attr('data-id');
    var nGall ={'user_id':user_id,
                'picurl':picurl,
                'picid':picid,
                'hex1':hex1,
                'hex2':hex2,
                'hex3':hex3,
                'hex4':hex4,
                'hex5':hex5,
                'hex6':hex6,
                'hex7':hex7,
                'hex8':hex8}

    console.log(nGall);
    $.ajax({
      "url":"http://localhost:3000/ngall",
      "method":"POST",
      "data":nGall,
      "success": function(data){
        console.log('ajax call worked')
        window.location.replace("http://localhost3000")
      }
    })
})
  //   name = $(this).children('#name').val()
  //   email = $(this).children('#email').val()
  //   password = $(this).children('#password').val()

  //   user = {name:name,email:email,password:password}
  //   // debugger
  //   $.ajax({
  //     "url": "http://localhost:3000/users",
  //     "method": "POST",
  //     "data": user,
  //     "success": function(data){
  //       console.log('ajax call was good.')
  //       window.location.replace("http://localhost:3000/users")
  //     }
  //   })
  // })

  //NOT FINISHED
  // $('#edituser').on('submit',function(e){
  //   console.log('omg you submitted brah')
  //   e.preventDefault()

  //   id = $(this).attr('data-id')
  //   name = $(this).children('#name').val()
  //   email = $(this).children('#email').val()
  //   password = $(this).children('#password').val()

  //   user = {id:id,name:name,email:email,password:password}
  //   $.ajax({
  //     "url":"http://localhost:3000/users/"+id,
  //     "method":"PUT",
  //     "data":user,
  //     "success": function(data){
  //       console.log('ajax call was good bro!')
  //     }
  //   })
  // })

  // $('.deleteuser').on('click',function(e){
  //   e.preventDefault()
  //   id = $(this).attr('data-id')
  //   div = $(this).parent()
  //   $.ajax({
  //     "url":"http://localhost:3000/users/"+id,
  //     "method":"DELETE",
  //     "success":function(){
  //       $(div).remove()
  //     }
  //   })
  // })

// $.ajax({
//   "type":"GET",
//   "url":"",
//     "success":function(data){
//       console.log(data);
//       var picture = data.artObjects[0].webImage.url;
//       $('img').attr("src", picture);
//     };

// });


})();
