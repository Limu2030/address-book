// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  // user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      if (inputtedFirstName.length != ""){
        var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
        $("ul#contacts").append("<li><span class=\"contact\">" + newContact.firstName + " " + newContact.lastName + "</span></li>");
    
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
      }

      if ($(".contact") != 0) {
        $(".contact").last().click(function() {
          alert($(".contact") != 0)
          alert("contact clicked")
          $("#show-contact").show(); // show-contact
          $("#show-contact h2").text(newContact.firstName);
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);
        });  
      }
    });
  }); 
  
  
  // business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }