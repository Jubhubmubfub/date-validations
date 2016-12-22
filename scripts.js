$(document).ready(function(){

  $( "#datepicker1" ).datepicker();
  $( "#datepicker2" ).datepicker();
  $('#warning-name').hide();
  $('#warning-date1').hide();
  $('#warning-date2').hide();


  //when clicking the submit button, popup the dialogue box
   $('body').on('click','#submit',function(){
     console.log("the #name is"+$('#name').val());

     if ($('#name').val()==="Name" || $('#name').val()==false ){
       $('#warning-name').show();
     }//end if
     else if ($('#name').val()!="Name" && $('#datepicker2').val()!="To" && $('#datepicker1').val()!="From") {
       $("<div title='Congratulations!'>Thanks "+$('#name').val()+"! Your Cruise leaves on "+$('#datepicker1').val()+" and returns on "+$('#datepicker2').val()+"</div>").dialog({
          modal: true,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
            }
          }
        });//end dialog box
        $('#warning-name').hide();
      }//end else

      if ($('#datepicker1').val()==="From"){
        $('#warning-date1').show();
      }
      else if ($('#datepicker1').val()!="From"){
        $('#warning-date1').hide();
      }
      if ($('#datepicker2').val()==="To"){
        $('#warning-date2').show();
      }
      else if ($('#datepicker2').val()!="To"){
        $('#warning-date2').hide();
      }



  })//end submit function
})//end document ready function
