$(document).ready(function() {

  // get the action filter option item on page load
  var $filterType = $('#filterOptions li.active a').attr('class');

  // get and assign the ourHolder element to the
	// $holder varible for use later
  var $holder = $('ul.ourHolder');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
	// item is clicked
	$('#filterOptions li a').click(function(e) {
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');

		// assign the class of the clicked filter option
		// element to our $filterType variable
		var $filterType = $(this).attr('class');
		$(this).parent().addClass('active');

		if ($filterType == 'all') {
			// assign all li items to the $filteredData var when
			// the 'All' filter option is clicked
			var $filteredData = $data.find('li');
		}
		else {
			// find all li elements that have our required $filterType
			// values for the data-type element
			var $filteredData = $data.find('li[data-type=' + $filterType + ']');
		}

		// call quicksand and assign transition parameters
		$holder.quicksand($filteredData, {
			duration: 800,
			easing: 'easeInOutQuad'
		});
		return false;
	});



      $("#project-modal button#submitproject").click(function(){
	var name = $("#project-modal input#name").val();
	if (name == "") {
		$("#project-modal input#name").focus();
	return false;
	}

	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = $("#project-modal input#email").val();
	if (!regex.test(email)) {
		$("#project-modal input#email").focus();
	return false;
	}

	var description = $("#project-modal textarea#description").val();
	if (description == "") {
		$("#project-modal textarea#description").focus();
	return false;
	}

        $.ajax({
          type: "POST",
          url: "/project/process",
          data: $('form.project').serialize(),

          success: function(msg){
	    $('#project-modal').modal('hide');
            $('#cfeedback-modal-success').modal('show');
          },
          error: function(){
            $('#cfeedback-modal-fail').modal('show');
          }
        });
      });

	$("#contact-modal button#submitcontact").click(function(){
	var name = $("#contact-modal input#name").val();
	if (name == "") {
		$("#contact-modal input#name").focus();
	return false;
	}

	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var email = $("#contact-modal input#email").val();
	if (!regex.test(email)) {
		$("#contact-modal input#email").focus();
	return false;
	}

	var description = $("#contact-modal textarea#description").val();
	if (description == "") {
		$("#contact-modal textarea#description").focus();
	return false;
	}
	
	
	  $.ajax({
	    type: "POST",
	    url: "/contact/process",
	    data: $('form.contact').serialize(),
	    success: function(msg){
		    $('#contact-modal').modal('hide');
                    $('#cfeedback-modal-success').modal('show');
                  },
            error: function(){
                    $('#cfeedback-modal-fail').modal('show');
            }
	 });
	
      });
	

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("#project-modal.modal .modal-footer #submitproject").html("<strong>Submit</strong>");
		$("#contact-modal.modal .modal-footer #submitcontact").html("<strong>Submit</strong>");
		$(".modal").css("position", "absolute");
		$('.btn-main.project').click(function () {
			$('#project-modal').css("top", $(window).scrollTop() + 10 + "px");
		});

		$('.btn-main.contact').click(function () {
			$('#contact-modal').css("top", $(window).scrollTop() + 10 + "px");
		});
	$("#banner").css("display", "none");

	};

	/*initial carousel*/
	$('.carousel').carousel({
		interval: 6000
	});

});
