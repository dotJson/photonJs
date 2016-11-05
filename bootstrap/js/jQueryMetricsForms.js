$(document).ready(function() { 
      // bind 'myForm' and provide a simple callback function 
      $('#xivelyForm').ajaxForm(function() { 
      	alert('The xivelyForm was submitted successfully');
      });
      $('#veraForm').ajaxForm(function() { 
      	alert('The veraForm was submitted successfully');
      });
}); 